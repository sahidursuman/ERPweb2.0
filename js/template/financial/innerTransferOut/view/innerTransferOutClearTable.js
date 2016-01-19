/*TMODJS:{"debug":true,"version":149,"md5":"69d69dcb232bbe767e4d8df075c01385"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutClearTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, list = $data.list, $escape = ($data.checking, 
            $data.index, $utils.$escape), showBtnFlag = ($data.tf, $data.$index, $data.temp, 
            $data.of, $data.showBtnFlag), $out = "";
            return $line = 1, $each(list, function(checking) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 2, $out += $escape(checking.createTime), $out += '" isComfirmStatus="', 
                $line = 2, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 2, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 2, $out += $escape(checking.checkRemark), $out += '"> <td rowspan="', $line = 3, 
                $out += $escape(checking.rowLen), $out += '">', $line = 3, $out += $escape(checking.lineProductName), 
                $out += '</td> <td rowspan="', $line = 4, $out += $escape(checking.rowLen), $out += '">', 
                $line = 4, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 5, $out += $escape(checking.rowLen), $out += '">111</td><!-- ', 
                $line = 5, $out += $escape(checking.contactUserName), $out += ' --> <td rowspan="', 
                $line = 6, $out += $escape(checking.rowLen), $out += '"><a href="#" class="T-seeGroup" data-list="', 
                $line = 6, $out += $escape(checking.touristGroupMemberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 7, $out += $escape(checking.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 8, $out += $escape(checking.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 11, $out += $escape(checking.rowLen), $out += '">', $line = 11, $out += $escape(checking.operateTransRealname), 
                $out += '</td> <td rowspan="', $line = 12, $out += $escape(checking.rowLen), $out += '">', 
                $line = 12, $out += $escape($helpers.dateFormat(checking.operateTransTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 13, $out += $escape(checking.rowLen), $out += '"><span class="F-float F-money">', 
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
                $out += ' </td> <td rowspan="', $line = 48, $out += $escape(checking.rowLen), $out += '"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">', 
                $line = 48, $out += $escape(checking.payedMoney), $out += "</span><br></a></td> ", 
                $line = 49, checking.detailList.transitFee.transitFeeList.length > 0 ? ($out += '  <td><span class="F-float F-money">', 
                $line = 51, $out += $escape(checking.detailList.transitFee.punishMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 52, $out += $escape(checking.detailList.transitFee.settlementMoney), $out += "</span></td> ", 
                $line = 53) : ($out += "  ", $line = 55, 5 == checking.status && checking.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 57, $each(checking.detailList.otherFee, function(of, index) {
                    $out += " ", $line = 58, 0 == index && ($out += ' <td><span class="F-float F-money">', 
                    $line = 59, $out += $escape(of.punishMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 60, $out += $escape(of.settlementMoney), $out += "</span></td> ", $line = 61), 
                    $out += " ", $line = 62;
                }), $out += " ", $line = 63) : checking.detailList.otherFee.otherFeeList.length > 0 ? ($out += ' <td><span class="F-float F-money">', 
                $line = 64, $out += $escape(checking.detailList.otherFee.punishMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 65, $out += $escape(checking.detailList.otherFee.settlementMoney), $out += "</span></td> ", 
                $line = 66) : ($out += '  <td><span class="F-float F-money">', $line = 68, $out += $escape(checking.punishMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 69, $out += $escape(checking.settlementMoney), 
                $out += "</span></td> ", $line = 70), $out += " ", $line = 71), $out += ' <td rowspan="', 
                $line = 72, $out += $escape(checking.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 72, $out += $escape(checking.unPayedMoney), $out += '</span></td> <td rowspan="', 
                $line = 73, $out += $escape(checking.rowLen), $out += '"><input name="payMoney" type="text" class="money F-float F-money" value="', 
                $line = 73, $out += $escape(checking.payMoney), $out += '" data-le="', $line = 73, 
                $out += $escape(checking.unPayedMoney), $out += '" ', $line = 74, !showBtnFlag && checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 74), $out += '/></td> <td rowspan="', $line = 75, $out += $escape(checking.rowLen), 
                $out += '"><input type="text" maxlength="9" name="payRemark" value="', $line = 75, 
                $out += $escape(checking.payRemark), $out += '" ', $line = 76, !showBtnFlag && checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 76), $out += ' /></td> <td rowspan="', $line = 77, $out += $escape(checking.rowLen), 
                $out += '">', $line = 77, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 77) : ($line = 77, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 77) : ($line = 77, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 77), $line = 77), $out += '</td> <td rowspan="', $line = 78, $out += $escape(checking.rowLen), 
                $out += '">', $line = 78, 0 == checking.isConfirmAccount ? ($out += "<span>-</span>", 
                $line = 78) : ($line = 78, null == checking.checkRealname || "" == checking.checkRealname ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape(checking.checkRealname), $line = 78), 
                $line = 78), $out += '</td> <td rowspan="', $line = 79, $out += $escape(checking.rowLen), 
                $out += '"> <label class="pos-rel"> ', $line = 81, 1 == checking.isConfirmAccount ? ($out += "<span>已对账</span>", 
                $line = 81) : ($out += "<span>未对账</span>", $line = 81), $out += ' </label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> ', 
                $line = 88, checking.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 90, 5 == checking.status && checking.detailList.otherFee.length > 0 ? ($out += " ", 
                $line = 91, $each(checking.detailList.otherFee, function(temp) {
                    $out += " <tr><td>", $line = 92, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 93, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 94, $out += $escape(of.touristGroupId), $out += '">', $line = 94, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 95, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 96, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 97;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 99, $out += $escape(temp.punishMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 100, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 102;
                }), $out += " ", $line = 103) : ($out += " <tr><td>", $line = 104, $each(checking.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 105, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 106, $out += $escape(of.touristGroupId), $out += '">', $line = 106, $out += $escape(of.price), 
                    $out += '</span> x <span class="F-float F-count">', $line = 107, $out += $escape(of.count), 
                    $out += '</span> = <span class="F-float F-money">', $line = 108, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 109;
                }), $out += ' </td> <td><span class="F-float F-money">', $line = 111, $out += $escape(checking.detailList.otherFee.punishMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 112, $out += $escape(checking.detailList.otherFee.settlementMoney), 
                $out += "</span></td> </tr> ", $line = 114), $out += " ", $line = 115) : ($out += " ", 
                $line = 116, 5 == checking.status && ($out += " ", $line = 117, $each(checking.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 118, index > 0 && ($out += " <tr><td>", $line = 119, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 120, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 121, $out += $escape(of.touristGroupId), $out += '">', $line = 121, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 122, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 123, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 124;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 126, $out += $escape(temp.punishMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 127, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 129), $out += " ", $line = 130;
                }), $out += " ", $line = 131), $out += " ", $line = 132), $out += " ", $line = 133;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each list as checking index}}\r\n    <tr data-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" isComfirmStatus="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">\r\n        <td rowspan="{{checking.rowLen}}">{{checking.lineProductName}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}">111</td><!-- {{checking.contactUserName}} -->\r\n        <td rowspan="{{checking.rowLen}}"><a href="#" class="T-seeGroup" data-list="{{checking.touristGroupMemberList}}" title="查看小组">\r\n                <span class="F-float F-count">{{checking.adultCount}}</span>大\r\n                <span class="F-float F-count">{{checking.childCount}}</span>小\r\n            </a>\r\n        </td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransRealname}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{checking.operateTransTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td rowspan="{{checking.rowLen}}"><span class="F-float F-money">{{checking.transNeedPayMoney}}</span></td>\r\n        <td>{{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                {{each checking.detailList.transitFee.transitFeeList as tf}}\r\n                    {{tf.name}}：\r\n                    <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                    <span class="F-float F-count">{{tf.count}}</span> =\r\n                    <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                {{/each}}\r\n            {{else}}\r\n            <!-- 若无中转结算价 -->\r\n                {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n                <!-- 中转，otherFee中多条数据 -->\r\n                    {{each checking.detailList.otherFee as temp index}}\r\n                        {{if index == 0}}\r\n                            {{each temp.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                <span class="F-float F-count">{{of.count}}</span>=\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{else if checking.detailList.otherFee.otherFeeList.length > 0}}\r\n                <!-- 非中转，otherFee中单条数据 -->\r\n                    {{each checking.detailList.otherFee.otherFeeList as of}}\r\n                        {{of.name}}：\r\n                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                        <span class="F-float F-count">{{of.count}}</span>=\r\n                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                    {{/each}}\r\n                {{else}}<!-- 若无费用明细 -->-\r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td rowspan="{{checking.rowLen}}"><a href="javascript:void(0)" class="T-viewDetail">社付：<span class="F-float F-money">{{checking.payedMoney}}</span><br></a></td>\r\n        {{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n        <!-- 若有中转结算价 -->\r\n            <td><span class="F-float F-money">{{checking.detailList.transitFee.punishMoney}}</span></td>\r\n            <td><span class="F-float F-money">{{checking.detailList.transitFee.settlementMoney}}</span></td>\r\n        {{else}}\r\n        <!-- 若无中转结算价 -->\r\n            {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n            <!-- 中转，otherFee中多条数据 -->\r\n                {{each checking.detailList.otherFee as of index}}\r\n                    {{if index == 0}}\r\n                        <td><span class="F-float F-money">{{of.punishMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{of.settlementMoney}}</span></td>\r\n                    {{/if}}\r\n                {{/each}}\r\n            {{else if checking.detailList.otherFee.otherFeeList.length > 0}}\r\n                <td><span class="F-float F-money">{{checking.detailList.otherFee.punishMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{checking.detailList.otherFee.settlementMoney}}</span></td>\r\n            {{else}}\r\n            <!-- 若无费用明细 -->\r\n                <td><span class="F-float F-money">{{checking.punishMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{checking.settlementMoney}}</span></td>\r\n            {{/if}}\r\n        {{/if}}\r\n        <td rowspan="{{checking.rowLen}}"><span class="F-float F-money">{{checking.unPayedMoney}}</span></td>\r\n        <td rowspan="{{checking.rowLen}}"><input name="payMoney" type="text" class="money F-float F-money" value="{{checking.payMoney}}" data-le="{{checking.unPayedMoney}}" \r\n        {{if !showBtnFlag && checking.unPayedMoney<= 0}} disabled {{/if}}/></td>\r\n        <td rowspan="{{checking.rowLen}}"><input type="text" maxlength="9" name="payRemark" value="{{checking.payRemark}}"\r\n        {{if !showBtnFlag && checking.unPayedMoney<= 0}} disabled {{/if}} /></td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">{{if checking.isConfirmAccount == 0}}<span>-</span>{{else}}{{if checking.checkRealname == null || checking.checkRealname == ""}}-{{else}}{{checking.checkRealname}}{{/if}}{{/if}}</td>\r\n        <td rowspan="{{checking.rowLen}}">\r\n            <label class="pos-rel">\r\n            {{if checking.isConfirmAccount == 1}}<span>已对账</span>{{else}}<span>未对账</span>{{/if}}\r\n            </label>\r\n            <label>\r\n                <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n            </label>\r\n        </td>\r\n    </tr>\r\n    {{if checking.detailList.transitFee.transitFeeList.length > 0}}\r\n    <!-- 若有中转结算价 -->\r\n        {{if checking.status == 5 && checking.detailList.otherFee.length > 0}}\r\n            {{each checking.detailList.otherFee as temp}}\r\n                <tr><td>{{each temp.otherFeeList as of}}\r\n                            {{of.name}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                            <span class="F-float F-count">{{of.count}}</span> =\r\n                            <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                        {{/each}}\r\n                    </td>\r\n                    <td><span class="F-float F-money">{{temp.punishMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                </tr>\r\n            {{/each}}\r\n        {{else checking.detailList.otherFee.otherFeeList.length > 0}}\r\n            <tr><td>{{each checking.detailList.otherFee.otherFeeList as of}}\r\n                        {{of.name}}：\r\n                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                        <span class="F-float F-count">{{of.count}}</span> =\r\n                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                    {{/each}}\r\n                </td>\r\n                <td><span class="F-float F-money">{{checking.detailList.otherFee.punishMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{checking.detailList.otherFee.settlementMoney}}</span></td>\r\n            </tr>\r\n        {{/if}}\r\n    {{else}}\r\n        {{if checking.status == 5}}\r\n            {{each checking.detailList.otherFee as temp index}}\r\n                {{if index > 0}}\r\n                    <tr><td>{{each temp.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                <span class="F-float F-count">{{of.count}}</span> =\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        </td>\r\n                        <td><span class="F-float F-money">{{temp.punishMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                    </tr>\r\n                {{/if}}\r\n            {{/each}}\r\n        {{/if}}\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});