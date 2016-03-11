/*TMODJS:{"debug":true,"version":81,"md5":"938bc6e494d87721179563ad16950246"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.i, $utils.$escape), editStatus = ($data.itemSet, 
            $data.index, $data.editStatus), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" colspan="2">现收</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ', 
            $line = 35, $each(dayList, function(day) {
                $out += " ", $line = 36, null != day.shopArrange && ($out += " ", $line = 37, $each(day.shopArrange, function(arrangeList) {
                    $out += " ", $line = 38, $each(arrangeList.shopArrangeList, function(arrange) {
                        $out += " ", $line = 40, null != arrange && ($out += ' <tr class="oldData" shopArrangeId="', 
                        $line = 41, $out += $escape(arrange.id), $out += '" shopId="', $line = 41, $out += $escape(arrange.shopId), 
                        $out += '" whichDay = "', $line = 41, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                        $line = 41, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"> <td rowspan="', 
                        $line = 42, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"><span class="whichDay"></span> </td> <td rowspan="', 
                        $line = 43, $out += $escape(arrange.shopArrangeItemSet.length), $out += '">', $line = 43, 
                        $out += $escape(arrange.shop.name), $out += '<input type="hidden" name="shopId" value="', 
                        $line = 43, $out += $escape(arrange.shopId), $out += '"></td> ', $line = 44, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 45, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 46, 0 == index && ($out += ' <td><span><input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 48, $out += $escape(itemSet.id), $out += '">', $line = 48, null != itemSet.shopPolicy ? ($line = 48, 
                            $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 49) : ($line = 49, 
                            $out += $escape(itemSet.name), $out += '<input type="hidden" name="shopPolicy" value="', 
                            $line = 49, $out += $escape(itemSet.name), $out += '"></span>', $line = 49), $out += ' </td> <td><input class="F-float F-money" policyId="', 
                            $line = 52, null != itemSet.shopPolicy && ($line = 52, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 52), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                            $line = 52, $out += $escape(itemSet.consumeMoney), $out += '" maxlength="11" ', 
                            $line = 53, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 53), 
                            $out += "/></td> <td>", $line = 54, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 55, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 56) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 58), $out += ' </td> <td><input name="travelAgencyRate" type="text" value="', 
                            $line = 61, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 61, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 61), 
                            $out += ' style="width:50px;"/></td> <td><input type="text" class="travelAgencyRateMoney', 
                            $line = 63, $out += $escape(arrange.whichDay), $out += "_", $line = 63, $out += $escape(arrange.shopId), 
                            $out += '" name="travelAgencyRateMoney" value="', $line = 63, $out += $escape(itemSet.travelAgencyRateMoney), 
                            $out += '" ', $line = 63, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 63), $out += ' style="width:80px;"/></td> <td><input name="guideRate" type="text" value="', 
                            $line = 65, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 65, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 65), 
                            $out += ' style="width:50px;"/></td> <td><input type="text" class="guideRateMoney', 
                            $line = 67, $out += $escape(arrange.whichDay), $out += "_", $line = 67, $out += $escape(arrange.shopId), 
                            $out += '" name="guideRateMoney" value="', $line = 67, $out += $escape(itemSet.guideRateMoney), 
                            $out += '" ', $line = 68, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 68), $out += ' style="width:80px;"/></td> <td rowspan="', $line = 70, $out += $escape(arrange.shopArrangeItemSet.length), 
                            $out += '"><input name="currInCome" value="" type="text" style="width:90px;"></td> <td > ', 
                            $line = 73, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 74, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" /> ', 
                            $line = 75) : ($line = 75, null != arrange.shopPolicy ? ($line = 75, $out += $escape(arrange.shopPolicy.remark), 
                            $line = 75) : ($line = 75, $out += $escape(itemSet.billRemark), $line = 75), $line = 75), 
                            $out += " </td> ", $line = 77), $out += " ", $line = 78;
                        }), $out += " ", $line = 79), $out += ' <td rowspan="', $line = 80, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '">', $line = 80, 0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 80) : ($out += "已对账", 
                        $line = 80), $out += "</td> </tr> ", $line = 82, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 83, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 84, index > 0 && ($out += ' <tr shopArrangeId="', $line = 85, 
                            $out += $escape(arrange.id), $out += '" shopId="', $line = 85, $out += $escape(arrange.shopId), 
                            $out += '" whichDay = "', $line = 85, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                            $line = 85, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"> <td><span> <input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 87, $out += $escape(itemSet.id), $out += '"> <input type="hidden" name="shopPolicy" value="', 
                            $line = 89, null != itemSet.shopPolicy ? ($out += " ", $line = 90, $out += $escape(itemSet.shopPolicy.name), 
                            $line = 90) : ($out += " ", $line = 91, $out += $escape(itemSet.name), $out += " ", 
                            $line = 92), $out += '"> <input type="hidden" name="shopPolicyId" value="', $line = 93, 
                            null != itemSet.shopPolicy && ($out += " ", $line = 94, $out += $escape(itemSet.shopPolicy.id), 
                            $out += " ", $line = 95), $out += '"> ', $line = 96, null != itemSet.shopPolicy ? ($line = 96, 
                            $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 98) : ($line = 98, 
                            $out += $escape(itemSet.name), $out += " ", $line = 100, 1 == index && ($out += '</a> <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button> ', 
                            $line = 102), $out += "</span>", $line = 102), $out += ' </td> <td><input class="F-float F-money" policyId="', 
                            $line = 106, null != itemSet.shopPolicy && ($line = 106, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 106), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                            $line = 106, $out += $escape(itemSet.consumeMoney), $out += '" old="', $line = 106, 
                            $out += $escape(itemSet.consumeMoney), $out += '" maxlength="11" ', $line = 107, 
                            1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 107), 
                            $out += "/></td> <td>", $line = 108, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 109, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 110) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 112), $out += ' </td> <td><input name="travelAgencyRate" type="text" value="', 
                            $line = 115, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 115, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                            $line = 115), $out += ' style="width:50px;"/></td> <td><input type="text" class="travelAgencyRateMoney', 
                            $line = 117, $out += $escape(arrange.whichDay), $out += "_", $line = 117, $out += $escape(arrange.shopId), 
                            $out += '" name="travelAgencyRateMoney" value="', $line = 117, $out += $escape(itemSet.travelAgencyRateMoney), 
                            $out += '" ', $line = 117, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 117), $out += ' style="width:80px;"/></td> <td><input name="guideRate" type="text" value="', 
                            $line = 119, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 119, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 119), 
                            $out += ' style="width:50px;"/></td> <td><input type="text" class="guideRateMoney', 
                            $line = 121, $out += $escape(arrange.whichDay), $out += "_", $line = 121, $out += $escape(arrange.shopId), 
                            $out += '" name="guideRateMoney" value="', $line = 121, $out += $escape(itemSet.guideRateMoney), 
                            $out += '" ', $line = 122, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 122), $out += ' style="width:80px;"/></td> <td > ', $line = 125, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 126, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" ', 
                            $line = 126, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 126), 
                            $out += "/> ", $line = 127) : ($line = 127, null != arrange.shopPolicy ? ($line = 127, 
                            $out += $escape(arrange.shopPolicy.remark), $line = 127) : ($line = 127, $out += $escape(itemSet.billRemark), 
                            $line = 127), $line = 127), $out += " </td></tr> ", $line = 129), $out += " ", $line = 130;
                        }), $out += " ", $line = 131), $out += " ", $line = 132), $out += " ", $line = 133;
                    }), $out += " ", $line = 134;
                }), $out += " ", $line = 135), $out += " ", $line = 136;
            }), $out += " </tbody> </table> ", $line = 140, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 143, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 143), $out += ' type="text" style="width:30%;" value="', $line = 143, remarkArrangeList.shopReamrk.length > 0 && ($line = 143, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 143), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 146, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 146), $out += ' type="text" style="width:30%;" value="', $line = 146, remarkArrangeList.shopReamrk.length > 0 && ($line = 146, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 146), 
            $out += '" /> </div> </div>', $line = 148), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n    <table class="table overflow-table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="5">打单</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <th class="th-border" colspan="2">现收</th>\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange i}}\r\n\r\n        {{if arrange != null}}\r\n        <tr class="oldData" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}<input type="hidden" name="shopId" value="{{arrange.shopId}}"></td>\r\n            {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index == 0}}\r\n\r\n                <td><span><input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                {{else}}{{itemSet.name}}<input type="hidden" name="shopPolicy" value="{{itemSet.name}}"></span>{{/if}}\r\n                </td>\r\n\r\n                <td><input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}} style="width:50px;"/></td>\r\n                \r\n                <td><input type="text" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:80px;"/></td>\r\n                \r\n                <td><input name="guideRate"  type="text" value="{{itemSet.guideRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:50px;"/></td>\r\n                \r\n                <td><input type="text" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:80px;"/></td>\r\n\r\n                <td rowspan="{{arrange.shopArrangeItemSet.length}}"><input name="currInCome" value="" type="text" style="width:90px;"></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" />\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n        {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index > 0}}\r\n            <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n                <td><span>\r\n                <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                <input type="hidden" name="shopPolicy" \r\n                value="{{if itemSet.shopPolicy != null }}\r\n                    {{itemSet.shopPolicy.name}}{{else}}\r\n                {{itemSet.name}}\r\n                {{/if}}">\r\n                <input type="hidden" name="shopPolicyId" value="{{if itemSet.shopPolicy != null }}\r\n                {{itemSet.shopPolicy.id}}\r\n                {{/if}}">\r\n                {{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n\r\n                {{else}}{{itemSet.name}}\r\n                \r\n                {{if index==1}}</a>\r\n                    <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>\r\n                {{/if}}</span>{{/if}}\r\n\r\n                </td>\r\n\r\n                <td><input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                 <td>{{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}} style="width:50px;"/></td>\r\n                \r\n                <td><input type="text" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:80px;"/></td>\r\n                \r\n                <td><input name="guideRate" type="text" value="{{itemSet.guideRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:50px;"/></td>\r\n                \r\n                <td><input type="text" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} style="width:80px;"/></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td></tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});