/*TMODJS:{"debug":true,"version":237,"md5":"4924a38f3439d78c7cbe27b59f0fad42"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.i, $utils.$escape), editStatus = ($data.itemSet, 
            $data.index, $data.editStatus), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ', 
            $line = 34, $each(dayList, function(day) {
                $out += " ", $line = 35, null != day.shopArrange && ($out += " ", $line = 36, $each(day.shopArrange, function(arrangeList) {
                    $out += " ", $line = 37, $each(arrangeList.shopArrangeList, function(arrange) {
                        $out += " ", $line = 39, null != arrange && ($out += ' <tr class="oldData" shopArrangeId="', 
                        $line = 40, $out += $escape(arrange.id), $out += '" shopId="', $line = 40, $out += $escape(arrange.shopId), 
                        $out += '" whichDay = "', $line = 40, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                        $line = 40, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"> <td rowspan="', 
                        $line = 41, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"><span class="whichDay"></span> </td> <td rowspan="', 
                        $line = 42, $out += $escape(arrange.shopArrangeItemSet.length), $out += '">', $line = 42, 
                        $out += $escape(arrange.shop.name), $out += '<input type="hidden" name="shopId" value="', 
                        $line = 42, $out += $escape(arrange.shopId), $out += '"></td> ', $line = 43, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 44, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 45, 0 == index && ($out += " <td><span>", $line = 46, null != itemSet.shopPolicy ? ($line = 46, 
                            $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 47) : ($line = 47, 
                            $out += $escape(itemSet.name), $out += '<input type="hidden" name="shopPolicy" value="', 
                            $line = 47, $out += $escape(itemSet.name), $out += '"></span>', $line = 47), $out += ' </td> <td><input class="F-float F-money" policyId="', 
                            $line = 50, null != itemSet.shopPolicy && ($line = 50, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 50), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                            $line = 50, $out += $escape(itemSet.consumeMoney), $out += '" old="', $line = 50, 
                            $out += $escape(itemSet.consumeMoney), $out += '" maxlength="11" ', $line = 51, 
                            1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 51), 
                            $out += "/></td> <td>", $line = 52, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 53, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 54) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 56), $out += ' </td> <td><input name="travelAgencyRate" style="width:90px;" type="text" value="', 
                            $line = 59, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" old="', 
                            $line = 59, $out += $escape(itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 59, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 59), 
                            $out += '/></td> <td><span class="travelAgencyRateMoney F-float F-money">', $line = 61, 
                            $out += $escape(itemSet.travelAgencyRateMoney), $out += '</span><input type="hidden" class="travelAgencyRateMoney', 
                            $line = 61, $out += $escape(arrange.whichDay), $out += "_", $line = 61, $out += $escape(arrange.shopId), 
                            $out += '" name="travelAgencyRateMoney" value="', $line = 61, $out += $escape(itemSet.travelAgencyRateMoney), 
                            $out += '" ', $line = 61, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 61), $out += '/></td> <td><input name="guideRate" style="width:90px;" type="text" value="', 
                            $line = 63, $out += $escape(100 * itemSet.guideRate), $out += '" old="', $line = 63, 
                            $out += $escape(itemSet.guideRate), $out += '" maxlength="5" ', $line = 63, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 63), $out += '/></td> <td><span class="guideRateMoney F-float F-money">', 
                            $line = 65, $out += $escape(itemSet.guideRkateMoney), $out += '</span><input type="hidden" class="guideRateMoney', 
                            $line = 65, $out += $escape(arrange.whichDay), $out += "_", $line = 65, $out += $escape(arrange.shopId), 
                            $out += '" name="guideRateMoney" value="', $line = 65, $out += $escape(itemSet.guideRateMoney), 
                            $out += '" ', $line = 66, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 66), $out += "/></td> <td > ", $line = 69, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 70, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" /> ', 
                            $line = 71) : ($line = 71, null != arrange.shopPolicy ? ($line = 71, $out += $escape(arrange.shopPolicy.remark), 
                            $line = 71) : ($line = 71, $out += $escape(itemSet.billRemark), $line = 71), $line = 71), 
                            $out += " </td> ", $line = 73), $out += " ", $line = 74;
                        }), $out += " ", $line = 75), $out += ' <td rowspan="', $line = 76, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '">', $line = 76, 0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 76) : ($out += "已对账", 
                        $line = 76), $out += "</td> </tr> ", $line = 78, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 79, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 80, index > 0 && ($out += ' <tr shopArrangeId="', $line = 81, 
                            $out += $escape(arrange.id), $out += '" shopId="', $line = 81, $out += $escape(arrange.shopId), 
                            $out += '" whichDay = "', $line = 81, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                            $line = 81, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"> <td><span ', 
                            $line = 82, 1 == index && ($out += 'style="margin-left:20px;"', $line = 82), $out += ">", 
                            $line = 82, null != itemSet.shopPolicy ? ($line = 82, $out += $escape(itemSet.shopPolicy.name), 
                            $out += ' <input type="hidden" name="shopPolicy" value="', $line = 83, $out += $escape(itemSet.shopPolicy.name), 
                            $out += '"> <input type="hidden" name="shopPolicyId" value="', $line = 84, $out += $escape(itemSet.shopPolicy.id), 
                            $out += '"> ', $line = 85) : ($line = 85, $out += $escape(itemSet.name), $out += " ", 
                            $line = 86, 1 == index && ($out += '</a> <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button> ', 
                            $line = 88), $out += "</span>", $line = 88), $out += ' </td> <td><input class="F-float F-money" policyId="', 
                            $line = 92, null != itemSet.shopPolicy && ($line = 92, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 92), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                            $line = 92, $out += $escape(itemSet.consumeMoney), $out += '" old="', $line = 92, 
                            $out += $escape(itemSet.consumeMoney), $out += '" maxlength="11" ', $line = 93, 
                            1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 93), 
                            $out += "/></td> <td>", $line = 94, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 95, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 96) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 98), $out += ' </td> <td><input name="travelAgencyRate" style="width:90px;" type="text" value="', 
                            $line = 101, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" old="', 
                            $line = 101, $out += $escape(itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 101, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                            $line = 101), $out += '/></td> <td><span class="travelAgencyRateMoney F-float F-money">', 
                            $line = 103, $out += $escape(itemSet.travelAgencyRateMoney), $out += '</span><input type="hidden" class="travelAgencyRateMoney', 
                            $line = 103, $out += $escape(arrange.whichDay), $out += "_", $line = 103, $out += $escape(arrange.shopId), 
                            $out += '" name="travelAgencyRateMoney" value="', $line = 103, $out += $escape(itemSet.travelAgencyRateMoney), 
                            $out += '" ', $line = 103, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 103), $out += '/></td> <td><input name="guideRate" style="width:90px;" type="text" value="', 
                            $line = 105, $out += $escape(100 * itemSet.guideRate), $out += '" old="', $line = 105, 
                            $out += $escape(itemSet.guideRate), $out += '" maxlength="5" ', $line = 105, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 105), $out += '/></td> <td><span class="guideRateMoney F-float F-money">', 
                            $line = 107, $out += $escape(itemSet.guideRkateMoney), $out += '</span><input type="hidden" class="guideRateMoney', 
                            $line = 107, $out += $escape(arrange.whichDay), $out += "_", $line = 107, $out += $escape(arrange.shopId), 
                            $out += '" name="guideRateMoney" value="', $line = 107, $out += $escape(itemSet.guideRateMoney), 
                            $out += '" ', $line = 108, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 108), $out += "/></td> <td > ", $line = 111, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 112, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" /> ', 
                            $line = 113) : ($line = 113, null != arrange.shopPolicy ? ($line = 113, $out += $escape(arrange.shopPolicy.remark), 
                            $line = 113) : ($line = 113, $out += $escape(itemSet.billRemark), $line = 113), 
                            $line = 113), $out += " </td></tr> ", $line = 115), $out += " ", $line = 116;
                        }), $out += " ", $line = 117), $out += " ", $line = 118), $out += " ", $line = 119;
                    }), $out += " ", $line = 120;
                }), $out += " ", $line = 121), $out += " ", $line = 122;
            }), $out += " </tbody> </table> ", $line = 126, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 129, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 129), $out += ' type="text" style="width:30%;" value="', $line = 129, remarkArrangeList.shopReamrk.length > 0 && ($line = 129, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 129), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 132, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 132), $out += ' type="text" style="width:30%;" value="', $line = 132, remarkArrangeList.shopReamrk.length > 0 && ($line = 132, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 132), 
            $out += '" /> </div> </div>', $line = 134), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="5">打单</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange i}}\r\n\r\n        {{if arrange != null}}\r\n        <tr class="oldData" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}<input type="hidden" name="shopId" value="{{arrange.shopId}}"></td>\r\n            {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index == 0}}\r\n                <td><span>{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                {{else}}{{itemSet.name}}<input type="hidden" name="shopPolicy" value="{{itemSet.name}}"></span>{{/if}}\r\n                </td>\r\n\r\n                <td><input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" style="width:90px;" type="text" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                \r\n                <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><input name="guideRate" style="width:90px;" type="text" value="{{itemSet.guideRate*100}}" old="{{itemSet.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" />\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n        {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index > 0}}\r\n            <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n                <td><span {{if index==1}}style="margin-left:20px;"{{/if}}>{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                <input type="hidden" name="shopPolicy" value="{{itemSet.shopPolicy.name}}">\r\n                <input type="hidden" name="shopPolicyId" value="{{itemSet.shopPolicy.id}}">\r\n                {{else}}{{itemSet.name}}\r\n                {{if index==1}}</a>\r\n                    <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>\r\n                {{/if}}</span>{{/if}}\r\n\r\n                </td>\r\n\r\n                <td><input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" style="width:90px;" type="text" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                \r\n                <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><input name="guideRate" style="width:90px;" type="text" value="{{itemSet.guideRate*100}}" old="{{itemSet.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" />\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td></tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});