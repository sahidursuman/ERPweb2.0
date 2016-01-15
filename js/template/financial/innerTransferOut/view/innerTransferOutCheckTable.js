<<<<<<< HEAD
/*TMODJS:{"debug":true,"version":317,"md5":"5206a3c2445eb3efa8f3b5c3009be882"}*/
=======
/*TMODJS:{"debug":true,"version":284,"md5":"d28e2d65787320a284271dc83d8efd2f"}*/
>>>>>>> 7002c33acef97545a3e2fbeffcab7ba0fb18d6bf
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutCheckTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), $out = ($data.otherFee, $data.$index, "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(checking.id), 
                $out += '" data-entity-createTime="', $line = 2, $out += $escape(checking.createTime), 
                $out += '" data-confirm="', $line = 2, $out += $escape(checking.isConfirmAccount), 
                $out += '" data-entity-realUnPayedMoney="', $line = 2, $out += $escape(checking.realUnPayedMoney), 
                $out += '" data-entity-remark="', $line = 2, $out += $escape(checking.checkRemark), 
                $out += '"> <td rowspan="', $line = 3, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '">', $line = 3, $out += $escape(checking.lineProductName), $out += '</td> <td rowspan="', 
                $line = 4, $out += $escape(checking.innerTransferFeeList.length), $out += '">', 
                $line = 4, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
<<<<<<< HEAD
                $out += '</td> <td rowspan="', $line = 5, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '">111</td><!-- ', $line = 5, $out += $escape(checking.contactUserName), 
                $out += ' --> <td rowspan="', $line = 6, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '"><a href="#" class="T-seeGroup" data-list="', $line = 6, $out += $escape(checking.touristGroupMemberList), 
                $out += '" title="查看小组"> <span class="F-float F-count">', $line = 7, $out += $escape(checking.adultCount), 
                $out += '</span>大 <span class="F-float F-count">', $line = 8, $out += $escape(checking.childCount), 
                $out += '</span>小 </a> </td> <td rowspan="', $line = 11, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '">', $line = 11, $out += $escape(checking.operateTransRealname), $out += '</td> <td rowspan="', 
                $line = 12, $out += $escape(checking.innerTransferFeeList.length), $out += '">', 
                $line = 12, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 13, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '"><span class="transNeedPayMoney F-float F-money">', $line = 13, $out += $escape(checking.transNeedPayMoney), 
                $out += "</span></td> <td>", $line = 14, checking.innerTransferFeeList.length > 0 ? ($out += " ", 
                $line = 15, $each(checking.innerTransferFeeList, function(otherFee, index) {
                    $out += " ", $line = 16, 0 == index && ($out += " ", $line = 17, $each(checking.innerTransferFeeList, function(otherFee) {
                        $out += " ", $line = 18, $out += $escape(otherFee.discribe), $out += ': <span class="F-float F-money">', 
                        $line = 19, $out += $escape(otherFee.price), $out += '</span>(元)* <span class="F-float F-count">', 
                        $line = 20, $out += $escape(otherFee.count), $out += '</span>= <span class="F-float F-money">', 
                        $line = 21, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                        $line = 22;
                    }), $out += " ", $line = 23), $out += " ", $line = 24;
                }), $out += " ", $line = 25) : ($out += "- ", $line = 26), $out += ' </td> <td rowspan="', 
                $line = 28, $out += $escape(checking.innerTransferFeeList.length), $out += '"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">', 
                $line = 28, $out += $escape(checking.payedMoney), $out += "</span></a></td> <td>", 
                $line = 29, 1 == checking.isConfirmAccount ? ($out += '<span><input class="money" type="text F-float F-money" readonly="readonly" value="', 
                $line = 29, $out += $escape(checking.punishMoney), $out += '"/></span>', $line = 29) : ($out += '<input type="text" class="money F-float F-money" name="settlementMoney" value="', 
                $line = 29, $out += $escape(checking.punishMoney), $out += '" />', $line = 29), 
                $out += '</td> <td><span class="T-settlementMoney F-float F-money">', $line = 30, 
                $out += $escape(checking.settlementMoney), $out += '</span></td> <td rowspan="', 
                $line = 31, $out += $escape(checking.innerTransferFeeList.length), $out += '"><span class="T-unReceivedMoney F-float F-money">', 
                $line = 31, $out += $escape(checking.unPayedMoney), $out += '</span></td> <td rowspan="', 
                $line = 32, $out += $escape(checking.innerTransferFeeList.length), $out += '">', 
                $line = 32, 1 == checking.isConfirmAccount ? ($out += '<span><input type="text" readonly="readonly" name="checkRemark" value="', 
                $line = 32, $out += $escape(checking.checkRemark), $out += '">', $line = 32) : ($out += '<input type="text" name="checkRemark" value="', 
                $line = 32, $out += $escape(checking.checkRemark), $out += '">', $line = 32), $out += '</td> <td rowspan="', 
                $line = 33, $out += $escape(checking.innerTransferFeeList.length), $out += '">', 
                $line = 33, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", $line = 33) : ($line = 33, 
                null == checking.checkTime || "" == checking.checkTime ? ($out += "-", $line = 33) : ($line = 33, 
                $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 33), $line = 33), $out += '</td> <td rowspan="', $line = 34, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '">', $line = 34, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 34) : ($line = 34, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 34) : ($line = 34, $out += $escape(checking.checkRealname), $line = 34), 
                $line = 34), $out += '</td> <td rowspan="', $line = 35, $out += $escape(checking.innerTransferFeeList.length), 
                $out += '"> <label class="pos-rel"> <input type="checkbox" checkStatus="', $line = 37, 
                $out += $escape(checking.isConfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 38, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 38), 
                $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 48, checking.innerTransferFeeList.length > 1 && ($out += " ", $line = 49, 
                $each(checking.innerTransferFeeList, function(otherFee, index) {
                    $out += " ", $line = 50, index > 0 && ($out += " <tr><td>", $line = 51, $each(checking.innerTransferFeeList, function(otherFee) {
                        $out += " ", $line = 52, $out += $escape(otherFee.discribe), $out += ': <span class="F-float F-money">', 
                        $line = 53, $out += $escape(otherFee.price), $out += '</span>(元)* <span class="F-float F-count">', 
                        $line = 54, $out += $escape(otherFee.count), $out += '</span>= <span class="F-float F-money">', 
                        $line = 55, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                        $line = 56;
                    }), $out += " </td> <td>", $line = 58, 1 == checking.isConfirmAccount ? ($out += '<span><input class="money" type="text F-float F-money" readonly="readonly" value="', 
                    $line = 58, $out += $escape(checking.punishMoney), $out += '"/></span>', $line = 58) : ($out += '<input type="text" class="money F-float F-money" name="settlementMoney" value="', 
                    $line = 58, $out += $escape(checking.punishMoney), $out += '" />', $line = 58), 
                    $out += '</td> <td><span class="T-settlementMoney F-float F-money">', $line = 59, 
                    $out += $escape(checking.settlementMoney), $out += "</span></td> </tr> ", $line = 61), 
                    $out += " ", $line = 62;
                }), $out += " ", $line = 63), $out += " ", $line = 64;
=======
                $out += "</td> <td>111</td><!-- ", $line = 5, $out += $escape(checking.contactUserName), 
                $out += ' --> <td><span class="F-float F-count">', $line = 6, $out += $escape(checking.adultCount), 
                $out += '</span>大 <span class="F-float F-count">', $line = 7, $out += $escape(checking.childCount), 
                $out += '</span>小 <a href="#" class="T-seeGroup" style="margin-left:5px">展开</a> </td> <td>', 
                $line = 10, $out += $escape(checking.operateTransRealname), $out += "</td> <td>", 
                $line = 11, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="transNeedPayMoney F-float F-money">', $line = 12, 
                $out += $escape(checking.transNeedPayMoney), $out += "</span></td> <td>", $line = 13, 
                0 != checking.innerTransferFeeList.length && ($out += " ", $line = 14, $each(checking.innerTransferFeeList, function(otherFee) {
                    $out += " ", $line = 15, $out += $escape(otherFee.discribe), $out += ': <span class="F-float F-money">', 
                    $line = 16, $out += $escape(otherFee.price), $out += '</span>(元)* <span class="F-float F-count">', 
                    $line = 17, $out += $escape(otherFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 18, $out += $escape(otherFee.price * otherFee.count), $out += "</span><br> ", 
                    $line = 19;
                }), $out += " ", $line = 20), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">', 
                $line = 22, $out += $escape(checking.payedMoney), $out += "</span></a></td> <td>", 
                $line = 23, 1 == checking.isConfirmAccount ? ($out += '<span><input class="money" type="text F-float F-money" readonly="readonly" value="', 
                $line = 23, $out += $escape(checking.punishMoney), $out += '"/></span>', $line = 23) : ($out += '<input type="text" class="money F-float F-money" name="settlementMoney" value="', 
                $line = 23, $out += $escape(checking.punishMoney), $out += '" />', $line = 23), 
                $out += '</td> <td><span class="settlementMoney F-float F-money">', $line = 24, 
                $out += $escape(checking.settlementMoney), $out += '</span></td> <td><span class="unPayedMoney F-float F-money">', 
                $line = 25, $out += $escape(checking.unPayedMoney), $out += "</span></td> <td>", 
                $line = 26, 1 == checking.isConfirmAccount ? ($out += '<span><input type="text" readonly="readonly" name="checkRemark" value="', 
                $line = 26, $out += $escape(checking.checkRemark), $out += '">', $line = 26) : ($out += '<input type="text" name="checkRemark" value="', 
                $line = 26, $out += $escape(checking.checkRemark), $out += '">', $line = 26), $out += "</td> <td>", 
                $line = 27, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", $line = 27) : ($line = 27, 
                null == checking.checkTime || "" == checking.checkTime ? ($out += "-", $line = 27) : ($line = 27, 
                $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 27), $line = 27), $out += "</td> <td>", $line = 28, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 28) : ($line = 28, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 28) : ($line = 28, $out += $escape(checking.checkRealname), $line = 28), 
                $line = 28), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" checkStatus="', 
                $line = 31, $out += $escape(checking.isConfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 32, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 32), 
                $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 56, $each(checking.touristGroupMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 58, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 59, $out += $escape(visitor.name), $out += "</td> <td>", $line = 60, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 61, 0 == visitor.idCardType && ($out += "身份证", $line = 61), 
                    $line = 61, 1 == visitor.idCardType && ($out += "护照", $line = 61), $line = 61, 2 == visitor.idCardType && ($out += "其他", 
                    $line = 61), $out += "</td> <td>", $line = 62, $out += $escape(visitor.idCardNumber), 
                    $out += "</td> <td>", $line = 63, 1 == visitor.isContactUser && ($out += "是", $line = 63), 
                    $out += "</td> </tr> ", $line = 65;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 70;
>>>>>>> 7002c33acef97545a3e2fbeffcab7ba0fb18d6bf
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
<<<<<<< HEAD
                source: '{{each list as checking index}}\r\n    <tr class="T-checkTr" data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{checking.lineProductName}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">111</td><!-- {{checking.contactUserName}} -->\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}"><a href="#" class="T-seeGroup" data-list="{{checking.touristGroupMemberList}}" title="查看小组">\r\n                <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            </a>\r\n        </td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{checking.operateTransRealname}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}"><span class="transNeedPayMoney F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>{{if checking.innerTransferFeeList.length > 0}}\r\n                {{each checking.innerTransferFeeList as otherFee index}}\r\n                    {{if index == 0}}\r\n                        {{each checking.innerTransferFeeList as otherFee}}\r\n                            {{otherFee.discribe}}:\r\n                            <span class="F-float F-money">{{otherFee.price}}</span>(元)*\r\n                            <span class="F-float F-count">{{otherFee.count}}</span>=\r\n                            <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                        {{/each}}\r\n                    {{/if}}\r\n                {{/each}}\r\n            {{else}}-\r\n            {{/if}}\r\n        </td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">{{checking.payedMoney}}</span></a></td>\r\n        <td>{{if checking.isConfirmAccount == 1}}<span><input class="money" type="text F-float F-money" readonly="readonly" value="{{checking.punishMoney}}"/></span>{{else}}<input type="text" class="money F-float F-money" name="settlementMoney" value="{{checking.punishMoney}}"  />{{/if}}</td>\r\n        <td><span class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</span></td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}"><span class="T-unReceivedMoney F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{if checking.isConfirmAccount == 1}}<span><input type="text" readonly="readonly" name="checkRemark" value="{{checking.checkRemark}}">{{else}}<input type="text"  name="checkRemark" value="{{checking.checkRemark}}">{{/if}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.innerTransferFeeList.length}}">\r\n            <label class="pos-rel">\r\n                <input type="checkbox" checkStatus="{{checking.isConfirmAccount}}" class="ace innerTransferFinancial" \r\n                {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                <span class="lbl">对账</span>\r\n\r\n            </label>\r\n            <label>|</label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n    {{if checking.innerTransferFeeList.length > 1}}\r\n        {{each checking.innerTransferFeeList as otherFee index}}\r\n            {{if index > 0}}\r\n                <tr><td>{{each checking.innerTransferFeeList as otherFee}}\r\n                            {{otherFee.discribe}}:\r\n                            <span class="F-float F-money">{{otherFee.price}}</span>(元)*\r\n                            <span class="F-float F-count">{{otherFee.count}}</span>=\r\n                            <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                        {{/each}}\r\n                    </td>\r\n                    <td>{{if checking.isConfirmAccount == 1}}<span><input class="money" type="text F-float F-money" readonly="readonly" value="{{checking.punishMoney}}"/></span>{{else}}<input type="text" class="money F-float F-money" name="settlementMoney" value="{{checking.punishMoney}}"  />{{/if}}</td>\r\n                    <td><span class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</span></td>\r\n                </tr>\r\n            {{/if}}\r\n        {{/each}}\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
=======
                source: '{{each list as checking index}}\r\n    <tr class="T-checkTr" data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td>{{checking.lineProductName}}</td>\r\n        <td>{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>111</td><!-- {{checking.contactUserName}} -->\r\n        <td><span class="F-float F-count">{{checking.adultCount}}</span>大\r\n            <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            <a href="#" class="T-seeGroup" style="margin-left:5px">展开</a>\r\n        </td>\r\n        <td>{{checking.operateTransRealname}}</td>\r\n        <td>{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="transNeedPayMoney F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>{{if checking.innerTransferFeeList.length != 0}}\r\n                {{each checking.innerTransferFeeList as otherFee}}\r\n                    {{otherFee.discribe}}:\r\n                    <span class="F-float F-money">{{otherFee.price}}</span>(元)*\r\n                    <span class="F-float F-count">{{otherFee.count}}</span>=\r\n                    <span class="F-float F-money">{{otherFee.price*otherFee.count}}</span><br>\r\n                {{/each}}\r\n            {{/if}}\r\n        </td>\r\n        <td><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">{{checking.payedMoney}}</span></a></td>\r\n        <td>{{if checking.isConfirmAccount == 1}}<span><input class="money" type="text F-float F-money" readonly="readonly" value="{{checking.punishMoney}}"/></span>{{else}}<input type="text" class="money F-float F-money" name="settlementMoney" value="{{checking.punishMoney}}"  />{{/if}}</td>\r\n        <td><span class="settlementMoney F-float F-money">{{checking.settlementMoney}}</span></td>\r\n        <td><span class="unPayedMoney F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td>{{if checking.isConfirmAccount == 1}}<span><input type="text" readonly="readonly" name="checkRemark" value="{{checking.checkRemark}}">{{else}}<input type="text"  name="checkRemark" value="{{checking.checkRemark}}">{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td>{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <input type="checkbox" checkStatus="{{checking.isConfirmAccount}}" class="ace innerTransferFinancial" \r\n                {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                <span class="lbl">对账</span>\r\n\r\n            </label>\r\n                <label>|</label>\r\n                <label>\r\n                    <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n                </label>\r\n        </td>\r\n    </tr>\r\n    <tr class="hide">\r\n        <td colspan="17">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">序号</th>\r\n                            <th class="th-border">姓名</th>\r\n                            <th class="th-border">联系电话</th>\r\n                            <th class="th-border">证件类型</th>\r\n                            <th class="th-border">证件号</th>\r\n                            <th class="th-border">是否联系人</th>\r\n                        </tr>\r\n                    </thead>  \r\n                    <tbody>\r\n                       {{each checking.touristGroupMemberList as visitor index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{visitor.name}}</td>\r\n                            <td>{{visitor.mobileNumber}}</td>\r\n                            <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                            <td>{{visitor.idCardNumber}}</td>\r\n                            <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                        </tr>\r\n                      {{/each}} \r\n                    </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
>>>>>>> 7002c33acef97545a3e2fbeffcab7ba0fb18d6bf
            };
        }
    });
});