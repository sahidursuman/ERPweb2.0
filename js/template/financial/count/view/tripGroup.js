/*TMODJS:{"debug":true,"version":33,"md5":"d4e53ce3120b2728d6b87243a44123eb"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/tripGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), touristGroup = $data.touristGroup, $each = $utils.$each, $escape = ($data.index, 
            $utils.$escape), editStatus = $data.editStatus, guideCount = $data.guideCount, guideArrange = $data.guideArrange, tripPlan = ($data.touristGroupFee, 
            $data.$index, $data.tripPlan), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover w-1400"> <thead> <tr class="bg-blur"> <th>序号</th> <th>客户</th> <th>收客信息</th> <th>游客信息</th>  <th>备注</th> <th>应收</th>  <th>现收</th> <th>明细</th> <th>是否对账</th> </tr> </thead> <tbody class="T-tripDetail"> ', 
            $line = 18, touristGroup.touristGroups.length && ($out += " ", $line = 19, $each(touristGroup.touristGroups, function(touristGroup, index) {
                $out += ' <tr id="', $line = 20, $out += $escape(touristGroup.id), $out += '"> <td>', 
                $line = 21, $out += $escape(index + 1), $out += "</td> <td>", $line = 22, $out += $escape(touristGroup.partnerAgencyName), 
                $out += "</td> <td>", $line = 23, $out += $escape(touristGroup.orderNumber), $out += "</td> <td> <span>", 
                $line = 25, $out += $escape(touristGroup.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 25, $out += $escape(touristGroup.childCount), $out += "</span>小</span> <br/> <span>", 
                $line = 27, $out += $escape(touristGroup.contactName), $out += "</span> <br/> <span>", 
                $line = 29, $out += $escape(touristGroup.mobileNumber), $out += "</span> <br/> </td> <!-- <td> ", 
                $line = 33, $out += $escape(touristGroup.includeSelfPay), $out += ' </td> --> <td style="max-width:200px;"> <span>', 
                $line = 36, $out += $escape(touristGroup.remark), $out += '</span> </td> <td> <span class="F-float F-money">', 
                $line = 39, $out += $escape(touristGroup.needPayAllMoney), $out += '</span> </td> <!-- <td><span class="F-float F-money">', 
                $line = 41, $out += $escape(touristGroup.payedMoney), $out += '</span></td> --> <td> <div class="inline-flex"> ', 
                $line = 44, 2 == editStatus ? ($out += " ", $line = 45, guideCount > 1 ? ($out += ' <span class="guideName">', 
                $line = 46, $out += $escape(touristGroup.guideName), $out += "</span> ", $line = 47) : ($out += " <span>", 
                $line = 48, $out += $escape(guideArrange.listMap[0].guideName), $out += '</span> <input name="guideArrangeId" type="hidden" value="', 
                $line = 49, $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 50), 
                $out += ' <span class="F-float F-money mar-l-5">', $line = 51, $out += $escape(touristGroup.currentNeedPayMoney), 
                $out += "</span>&nbsp;&nbsp; ", $line = 52, 0 == touristGroup.isReceived ? ($out += " 未收到 ", 
                $line = 54) : 1 == touristGroup.isReceived && ($out += " 已收到 ", $line = 56), $out += " ", 
                $line = 57) : ($out += " ", $line = 58, guideCount > 1 ? ($out += " ", $line = 59, 
                "" == touristGroup.guideName ? ($out += ' <input name="guideArrangeId" type="hidden" /> <input name="guideName" type="text" class="w-80" ', 
                $line = 62, 1 == touristGroup.isConfirmAccount && ($out += 'disabled="disabled" ', 
                $line = 62), $out += " /> ", $line = 64) : ($out += ' <span class="guideName">', 
                $line = 65, $out += $escape(touristGroup.guideName), $out += '</span> <input name="guideArrangeId" type="hidden" value="', 
                $line = 66, $out += $escape(touristGroup.guideArrangeId), $out += '" /> ', $line = 67), 
                $out += " ", $line = 68) : ($out += " <span>", $line = 69, $out += $escape(guideArrange.listMap[0].guideName), 
                $out += '</span> <input name="guideArrangeId" type="hidden" value="', $line = 70, 
                $out += $escape(guideArrange.listMap[0].id), $out += '"/> ', $line = 71), $out += ' <input class="F-float F-money w-80 mar-l-5" name="currentNeedPayMoney" value="', 
                $line = 73, $out += $escape(touristGroup.currentNeedPayMoney), $out += '" maxlength="12" ', 
                $line = 73, 1 == touristGroup.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 73), $out += '/> &nbsp;&nbsp; <select name="receiveStatus" ', $line = 75, 
                1 == touristGroup.isConfirmAccount && ($out += 'disabled="disabled"', $line = 75), 
                $out += '> <option value="0" ', $line = 76, 0 == touristGroup.isReceived && ($out += 'selected="selected"', 
                $line = 76), $out += '>未收到</option> <option value="1" ', $line = 77, 1 == touristGroup.isReceived && ($out += 'selected="selected"', 
                $line = 77), $out += ">已收到</option> </select> ", $line = 79), $out += " </div> <td> ", 
                $line = 82, touristGroup.feeList && ($out += " ", $line = 83, touristGroup.feeList.length ? ($out += ' <a href="#" class="T-viewCostDetail"> ', 
                $line = 85, $each(touristGroup.feeList, function(touristGroupFee) {
                    $out += " ", $line = 86, $out += $escape(touristGroupFee.name), $out += ' ： <span class="F-float F-money">', 
                    $line = 87, $out += $escape(touristGroupFee.price), $out += '</span>&nbsp;X&nbsp;<span class="F-float F-count">', 
                    $line = 87, $out += $escape(touristGroupFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 88, $out += $escape(touristGroupFee.price * touristGroupFee.count), $out += "</span><br /> ", 
                    $line = 89;
                }), $out += " ", $line = 90) : ($out += " ", $line = 91, $each(touristGroup.touristGroupSubFeeList, function(touristGroupFee) {
                    $out += " ", $line = 92, $out += $escape(touristGroupFee.name), $out += ' ： <span class="F-float F-money">', 
                    $line = 93, $out += $escape(touristGroupFee.price), $out += '</span>&nbsp;X&nbsp;<span class="F-float F-count">', 
                    $line = 93, $out += $escape(touristGroupFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 94, $out += $escape(touristGroupFee.price * touristGroupFee.count), $out += "</span><br /> ", 
                    $line = 95;
                }), $out += " ", $line = 96), $out += " ", $line = 97), $out += " </a> ", $line = 99, 
                0 == touristGroup.isConfirmAccount && 2 != editStatus && ($out += ' <a data-status="0" class="cursor T-addFee R-right" data-right="1190005">[费用调整]</a> ', 
                $line = 101), $out += " </td> <td> ", $line = 104, 0 == touristGroup.isConfirmAccount ? ($out += " 未对账 ", 
                $line = 106) : ($out += " 已对账 ", $line = 108), $out += " </td> </tr> ", $line = 111;
            }), $out += " ", $line = 112), $out += " </tbody> </table> ", $line = 115, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 119, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 119), $out += ' type="text" style="width:30%;" value="', $line = 119, remarkArrangeList.tripDetailRemark.length > 0 && ($line = 119, 
            $out += $escape(remarkArrangeList.tripDetailRemark[0].opCheckRemark), $line = 119), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 122, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 122), $out += ' type="text" style="width:30%;" value="', $line = 122, remarkArrangeList.tripDetailRemark.length > 0 && ($line = 122, 
            $out += $escape(remarkArrangeList.tripDetailRemark[0].financeCheckRemark), $line = 122), 
            $out += '"/> </div> </div> ', $line = 125), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover w-1400">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>序号</th>\r\n            <th>客户</th>\r\n            <th>收客信息</th>\r\n            <th>游客信息</th>\r\n            <!-- <th>包含自费</th> -->\r\n            <th>备注</th>\r\n            <th>应收</th>\r\n            <!-- <th>社收</th> -->\r\n            <th>现收</th>\r\n            <th>明细</th>\r\n            <th>是否对账</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tripDetail">\r\n    {{if touristGroup.touristGroups.length}}\r\n        {{each touristGroup.touristGroups as touristGroup index}}\r\n            <tr id="{{touristGroup.id}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{touristGroup.partnerAgencyName}}</td>\r\n                <td>{{touristGroup.orderNumber}}</td>\r\n                <td>\r\n                    <span>{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</span>\r\n                    <br/>\r\n                    <span>{{touristGroup.contactName}}</span>\r\n                    <br/>\r\n                    <span>{{touristGroup.mobileNumber}}</span>\r\n                    <br/>\r\n                </td>\r\n                <!-- <td>\r\n                    {{touristGroup.includeSelfPay}}\r\n                </td> -->\r\n                <td style="max-width:200px;">\r\n                    <span>{{touristGroup.remark}}</span>\r\n                </td>\r\n                <td>\r\n                    <span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n                </td>\r\n                <!-- <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td> -->\r\n                <td>\r\n                    <div class="inline-flex">\r\n                    {{if editStatus == 2}}\r\n                        {{if guideCount > 1}}\r\n                            <span class="guideName">{{touristGroup.guideName}}</span>\r\n                        {{else}}\r\n                            <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                            <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                        {{/if}}\r\n                        <span class="F-float F-money mar-l-5">{{touristGroup.currentNeedPayMoney}}</span>&nbsp;&nbsp;\r\n                        {{if touristGroup.isReceived == 0}}\r\n                            未收到\r\n                        {{else if touristGroup.isReceived == 1}}\r\n                            已收到\r\n                        {{/if}}\r\n                    {{else}}\r\n                        {{if guideCount > 1}}\r\n                            {{if touristGroup.guideName == \'\'}}\r\n                                <input name="guideArrangeId" type="hidden" />\r\n                                <input name="guideName"  type="text" class="w-80" \r\n                                {{if touristGroup.isConfirmAccount==1 }}disabled="disabled" {{/if}}\r\n                                />\r\n                            {{else}}\r\n                                <span class="guideName">{{touristGroup.guideName}}</span>\r\n                                <input name="guideArrangeId" type="hidden" value="{{touristGroup.guideArrangeId}}" />\r\n                            {{/if}}\r\n                        {{else}}\r\n                            <span>{{guideArrange.listMap[0].guideName}}</span>\r\n                            <input name="guideArrangeId" type="hidden" value="{{guideArrange.listMap[0].id}}"/>\r\n                        {{/if}}\r\n                        \r\n                        <input class="F-float F-money w-80 mar-l-5" name="currentNeedPayMoney" value="{{touristGroup.currentNeedPayMoney}}" maxlength="12" {{if touristGroup.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                        &nbsp;&nbsp;\r\n                        <select name="receiveStatus" {{if touristGroup.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                            <option value="0" {{if touristGroup.isReceived == 0}}selected="selected"{{/if}}>未收到</option>\r\n                            <option value="1" {{if touristGroup.isReceived == 1}}selected="selected"{{/if}}>已收到</option>\r\n                        </select>\r\n                    {{/if}}\r\n                    </div>\r\n                <td>\r\n                    {{if !!touristGroup.feeList}}\r\n                        {{if touristGroup.feeList.length}}\r\n                        <a href="#" class="T-viewCostDetail">\r\n                            {{each touristGroup.feeList as touristGroupFee}}\r\n                                {{touristGroupFee.name}} ：\r\n                                <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                            {{/each}}\r\n                        {{else}}\r\n                            {{each touristGroup.touristGroupSubFeeList as touristGroupFee}}\r\n                                {{touristGroupFee.name}} ：\r\n                                <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                            {{/each}}\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </a>\r\n                {{if touristGroup.isConfirmAccount == 0 && editStatus != 2}}\r\n                    <a data-status="0" class="cursor T-addFee R-right" data-right="1190005">[费用调整]</a>\r\n                {{/if}}\r\n            </td>\r\n            <td>\r\n                {{if touristGroup.isConfirmAccount == 0}}\r\n                    未对账\r\n                {{else}}\r\n                    已对账\r\n                {{/if}}\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n    {{/if}}\r\n    </tbody>\r\n</table>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].financeCheckRemark}}{{/if}}"/>\r\n        </div>\r\n    </div>\r\n{{/if}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});