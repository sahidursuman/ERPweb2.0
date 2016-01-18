/*TMODJS:{"debug":true,"version":349,"md5":"0e1cd6468146d125984876fbb32c78ec"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutCheckTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), $out = ($data.tf, $data.$index, $data.temp, $data.of, 
            "");
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(checking.id), 
                $out += '" data-entity-createTime="', $line = 2, $out += $escape(checking.createTime), 
                $out += '" data-confirm="', $line = 2, $out += $escape(checking.isConfirmAccount), 
                $out += '" data-entity-realUnPayedMoney="', $line = 2, $out += $escape(checking.realUnPayedMoney), 
                $out += '" data-entity-remark="', $line = 2, $out += $escape(checking.checkRemark), 
                $out += '"> <td rowspan="', $line = 3, $out += $escape(checking.rowLen), $out += '">', 
                $line = 3, $out += $escape(checking.lineProductName), $out += '</td> <td rowspan="', 
                $line = 4, $out += $escape(checking.rowLen), $out += '">', $line = 4, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 5, $out += $escape(checking.rowLen), $out += '">111</td><!-- ', 
                $line = 5, $out += $escape(checking.contactUserName), $out += ' --> <td rowspan="', 
                $line = 6, $out += $escape(checking.rowLen), $out += '"><a href="#" class="T-seeGroup" data-list="', 
                $line = 6, $out += $escape(checking.touristGroupMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 7, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 8, $out += $escape(checking.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 11, $out += $escape(checking.rowLen), $out += '">', $line = 11, $out += $escape(checking.operateTransRealname), 
                $out += '</td> <td rowspan="', $line = 12, $out += $escape(checking.rowLen), $out += '">', 
                $line = 12, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 13, $out += $escape(checking.rowLen), $out += '"><span class="transNeedPayMoney F-float F-money">', 
                $line = 13, $out += $escape(checking.transNeedPayMoney), $out += "</span></td> <td>", 
                $line = 14, checking.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 16, $each(checking.detailList.transitFee.transitFeeList, function(tf) {
                    $out += " ", $line = 17, $out += $escape(tf.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 18, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 18, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 19, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 20, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 21;
                }), $out += " ", $line = 22) : ($out += "  ", $line = 24, 5 == checking.status && checking.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 26, $each(checking.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 27, 0 == index && ($out += " ", $line = 28, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 29, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 30, $out += $escape(of.touristGroupId), $out += '">', $line = 30, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 31, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 32, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 33;
                    }), $out += " ", $line = 34), $out += " ", $line = 35;
                }), $out += " ", $line = 36) : checking.detailList.otherFee.otherFeeList.length > 0 ? ($out += "  ", 
                $line = 38, $each(checking.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 39, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 40, $out += $escape(of.touristGroupId), $out += '">', $line = 40, $out += $escape(of.price), 
                    $out += '</span>x <span class="F-float F-count">', $line = 41, $out += $escape(of.count), 
                    $out += '</span>= <span class="F-float F-money">', $line = 42, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 43;
                }), $out += " ", $line = 44) : ($out += "- ", $line = 45), $out += " ", $line = 46), 
                $out += ' </td> <td rowspan="', $line = 48, $out += $escape(checking.rowLen), $out += '"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">', 
                $line = 48, $out += $escape(checking.payedMoney), $out += "</span></a></td> ", $line = 49, 
                checking.detailList.transitFee.transitFeeList.length > 0 ? ($out += '  <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 51, $out += $escape(checking.detailList.transitFee.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 51, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 51), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 52, $out += $escape(checking.detailList.transitFee.settlementMoney), 
                $out += "</td> ", $line = 53) : ($out += "  ", $line = 55, 5 == checking.status && checking.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 57, $each(checking.detailList.otherFee, function(of, index) {
                    $out += " ", $line = 58, 0 == index && ($out += ' <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 59, $out += $escape(of.punishMoney), $out += '" name="settlementMoney" ', 
                    $line = 59, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 59), 
                    $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 60, $out += $escape(of.settlementMoney), 
                    $out += "</td> ", $line = 61), $out += " ", $line = 62;
                }), $out += " ", $line = 63) : checking.detailList.otherFee.otherFeeList.length > 0 ? ($out += ' <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 64, $out += $escape(checking.detailList.otherFee.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 64, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 64), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 65, $out += $escape(checking.detailList.otherFee.settlementMoney), 
                $out += "</td> ", $line = 66) : ($out += '  <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 68, $out += $escape(checking.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 68, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 68), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 69, $out += $escape(checking.settlementMoney), 
                $out += "</td> ", $line = 70), $out += " ", $line = 71), $out += ' <td rowspan="', 
                $line = 72, $out += $escape(checking.rowLen), $out += '"><span class="T-unReceivedMoney F-float F-money">', 
                $line = 72, $out += $escape(checking.unPayedMoney), $out += '</span></td> <td rowspan="', 
                $line = 73, $out += $escape(checking.rowLen), $out += '">', $line = 73, 1 == checking.isConfirmAccount ? ($out += '<span><input type="text" readonly="readonly" name="checkRemark" value="', 
                $line = 73, $out += $escape(checking.checkRemark), $out += '">', $line = 73) : ($out += '<input type="text" name="checkRemark" value="', 
                $line = 73, $out += $escape(checking.checkRemark), $out += '">', $line = 73), $out += '</td> <td rowspan="', 
                $line = 74, $out += $escape(checking.rowLen), $out += '">', $line = 74, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 74) : ($line = 74, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 74) : ($line = 74, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 74), $line = 74), $out += '</td> <td rowspan="', $line = 75, $out += $escape(checking.rowLen), 
                $out += '">', $line = 75, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 75) : ($line = 75, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 75) : ($line = 75, $out += $escape(checking.checkRealname), $line = 75), 
                $line = 75), $out += '</td> <td rowspan="', $line = 76, $out += $escape(checking.rowLen), 
                $out += '"> <label class="pos-rel"> <input type="checkbox" checkStatus="', $line = 78, 
                $out += $escape(checking.isConfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 79, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 79), 
                $out += '/> <span class="lbl">对账</span> </label> <label>|</label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 89, checking.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 91, 5 == checking.status && checking.detailList.otherFee.length > 0 ? ($out += " ", 
                $line = 92, $each(checking.detailList.otherFee, function(temp) {
                    $out += " <tr><td>", $line = 93, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 94, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 95, $out += $escape(of.touristGroupId), $out += '">', $line = 95, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 96, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 97, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 98;
                    }), $out += ' </td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 100, $out += $escape(temp.punishMoney), $out += '" name="settlementMoney" ', 
                    $line = 100, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 100), 
                    $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 101, $out += $escape(temp.settlementMoney), 
                    $out += "</td> </tr> ", $line = 103;
                }), $out += " ", $line = 104) : ($out += " <tr><td>", $line = 105, $each(checking.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 106, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 107, $out += $escape(of.touristGroupId), $out += '">', $line = 107, $out += $escape(of.price), 
                    $out += '</span> x <span class="F-float F-count">', $line = 108, $out += $escape(of.count), 
                    $out += '</span> = <span class="F-float F-money">', $line = 109, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 110;
                }), $out += ' </td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 112, $out += $escape(checking.detailList.otherFee.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 112, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 112), 
                $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 113, $out += $escape(checking.detailList.otherFee.settlementMoney), 
                $out += "</td> </tr> ", $line = 115), $out += " ", $line = 116) : ($out += " ", 
                $line = 117, 5 == checking.status && ($out += " ", $line = 118, $each(checking.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 119, index > 0 && ($out += " <tr><td>", $line = 120, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 121, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 122, $out += $escape(of.touristGroupId), $out += '">', $line = 122, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 123, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 124, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 125;
                    }), $out += ' </td> <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 127, $out += $escape(temp.punishMoney), $out += '" name="settlementMoney" ', 
                    $line = 127, checking.isConfirmAccount && ($out += ' disabled="disabled"', $line = 127), 
                    $out += '></td> <td class="T-settlementMoney F-float F-money">', $line = 128, $out += $escape(temp.settlementMoney), 
                    $out += "</td> </tr> ", $line = 130), $out += " ", $line = 131;
                }), $out += " ", $line = 132), $out += " ", $line = 133), $out += " ", $line = 134;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr class="T-checkTr" data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-confirm="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td rowspan="{{checking.rowLen}}">{{checking.lineProductName}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}">111</td><!-- {{checking.contactUserName}} -->\r\n        <td rowspan="{{checking.rowLen}}"><a href="#" class="T-seeGroup" data-list="{{checking.touristGroupMemberList}}" title="查看小组">\r\n                <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            </a>\r\n        </td> \r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransRealname}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}"><span class="transNeedPayMoney F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>{{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                {{each checking.detailList.transitFee.transitFeeList as tf}}\r\n                    {{tf.name}}：\r\n                    <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                    <span class="F-float F-count">{{tf.count}}</span> =\r\n                    <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                {{/each}}\r\n            {{else}}\r\n            <!-- 若无中转结算价 -->\r\n                {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n                <!-- 中转，otherFee中多条数据 -->\r\n                    {{each checking.detailList.otherFee as temp index}}\r\n                        {{if index == 0}}\r\n                            {{each temp.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                <span class="F-float F-count">{{of.count}}</span>=\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{else if checking.detailList.otherFee.otherFeeList.length > 0}}\r\n                <!-- 非中转，otherFee中单条数据 -->\r\n                    {{each checking.detailList.otherFee.otherFeeList as of}}\r\n                        {{of.name}}：\r\n                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                        <span class="F-float F-count">{{of.count}}</span>=\r\n                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                    {{/each}}\r\n                {{else}}<!-- 若无费用明细 -->-\r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td rowspan="{{checking.rowLen}}"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="travelPayedMoney F-float F-money">{{checking.payedMoney}}</span></a></td>\r\n        {{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n        <!-- 若有中转结算价 -->\r\n            <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.detailList.transitFee.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n            <td class="T-settlementMoney F-float F-money">{{checking.detailList.transitFee.settlementMoney}}</td>\r\n        {{else}}\r\n        <!-- 若无中转结算价 -->\r\n            {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n            <!-- 中转，otherFee中多条数据 -->\r\n                {{each checking.detailList.otherFee as of index}}\r\n                    {{if index == 0}}\r\n                        <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{of.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                        <td class="T-settlementMoney F-float F-money">{{of.settlementMoney}}</td>\r\n                    {{/if}}\r\n                {{/each}}\r\n            {{else if checking.detailList.otherFee.otherFeeList.length > 0}}\r\n                <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.detailList.otherFee.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td class="T-settlementMoney F-float F-money">{{checking.detailList.otherFee.settlementMoney}}</td>\r\n            {{else}}\r\n            <!-- 若无费用明细 -->\r\n                <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td class="T-settlementMoney F-float F-money">{{checking.settlementMoney}}</td>\r\n            {{/if}}\r\n        {{/if}}\r\n        <td rowspan="{{checking.rowLen}}"><span class="T-unReceivedMoney F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 1}}<span><input type="text" readonly="readonly" name="checkRemark" value="{{checking.checkRemark}}">{{else}}<input type="text"  name="checkRemark" value="{{checking.checkRemark}}">{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">\r\n            <label class="pos-rel">\r\n                <input type="checkbox" checkStatus="{{checking.isConfirmAccount}}" class="ace innerTransferFinancial" \r\n                {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                <span class="lbl">对账</span>\r\n\r\n            </label>\r\n            <label>|</label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n    {{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n    <!-- 若有中转结算价 -->\r\n        {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n            {{each checking.detailList.otherFee as temp}}\r\n                <tr><td>{{each temp.otherFeeList as of}}\r\n                            {{of.name}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                            <span class="F-float F-count">{{of.count}}</span> =\r\n                            <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                        {{/each}}\r\n                    </td>\r\n                    <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{temp.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                    <td class="T-settlementMoney F-float F-money">{{temp.settlementMoney}}</td>\r\n                </tr>\r\n            {{/each}}\r\n        {{else checking.detailList.otherFee.otherFeeList.length > 0}}\r\n            <tr><td>{{each checking.detailList.otherFee.otherFeeList as of}}\r\n                    {{of.name}}：\r\n                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                    <span class="F-float F-count">{{of.count}}</span> =\r\n                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                    {{/each}}\r\n                </td>\r\n                <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{checking.detailList.otherFee.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td class="T-settlementMoney F-float F-money">{{checking.detailList.otherFee.settlementMoney}}</td>\r\n            </tr>\r\n        {{/if}}\r\n    {{else}}\r\n        {{if checking.status == 5}}\r\n            {{each checking.detailList.otherFee as temp index}}\r\n                {{if index > 0}}\r\n                    <tr><td>{{each temp.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                <span class="F-float F-count">{{of.count}}</span> =\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        </td>\r\n                        <td><input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{temp.punishMoney}}" name="settlementMoney" {{if checking.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                        <td class="T-settlementMoney F-float F-money">{{temp.settlementMoney}}</td>\r\n                    </tr>\r\n                {{/if}}\r\n            {{/each}}\r\n        {{/if}}\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});