/*TMODJS:{"debug":true,"version":107,"md5":"102f0a11ed2688df1bf64bd94c3bd79c"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ', 
            $line = 35, $each(dayList, function(day) {
                $out += " ", $line = 36, null != day.shopArrange && ($out += " ", $line = 37, $each(day.shopArrange, function(arrangeList) {
                    $out += " ", $line = 38, $each(arrangeList.shopArrangeList, function(arrange, index) {
                        $out += " ", $line = 39, null != arrange && ($out += ' <tr shopArrangeId="', $line = 40, 
                        $out += $escape(arrange.id), $out += '" shopId="', $line = 40, $out += $escape(arrange.whichDay), 
                        $out += "_", $line = 40, $out += $escape(arrange.shopId), $out += '" shopArrid = "', 
                        $line = 40, $out += $escape(arrange.shopId), $out += '" whichDay = "', $line = 40, 
                        $out += $escape(arrange.whichDay), $out += '" rowspan = "', $line = 40, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '"> ', $line = 41, 0 == index && ($out += '<td rowspan="', $line = 41, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '"><span class="whichDay"></span> </td>', $line = 41), $out += " ", $line = 42, 
                        0 == index && ($out += '<td rowspan="', $line = 42, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '">', $line = 42, $out += $escape(arrange.shop.name), $out += "</td>", $line = 42), 
                        $out += ' <td></td> <td><div data-index="', $line = 45, $out += $escape(index + 1), 
                        $out += '"><input class="F-float F-money" policyId="', $line = 45, null != arrange.shopPolicy && ($line = 45, 
                        $out += $escape(arrange.shopPolicy.id), $line = 45), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                        $line = 45, $out += $escape(arrange.consumeMoney), $out += '" old="', $line = 45, 
                        $out += $escape(arrange.consumeMoney), $out += '" maxlength="11" ', $line = 46, 
                        1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 46), 
                        $out += '/></div></td> <td><div data-index="', $line = 47, $out += $escape(index + 1), 
                        $out += '">', $line = 47, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 48, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 49) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 51), $out += '</div> </td> <td><div data-index="', 
                        $line = 54, $out += $escape(index + 1), $out += '"><input name="travelAgencyRate" style="width:90px;" type="text" value="', 
                        $line = 54, $out += $escape(100 * arrange.travelAgencyRate), $out += '" old="', 
                        $line = 54, $out += $escape(arrange.travelAgencyRate), $out += '" maxlength="5" ', 
                        $line = 54, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 54), 
                        $out += '/></div></td> <td><div data-index="', $line = 56, $out += $escape(index + 1), 
                        $out += '"><span class="travelAgencyRateMoney F-float F-money">', $line = 56, $out += $escape(arrange.travelAgencyRateMoney), 
                        $out += '</span><input type="hidden" class="travelAgencyRateMoney', $line = 56, 
                        $out += $escape(arrange.whichDay), $out += "_", $line = 56, $out += $escape(arrange.shopId), 
                        $out += '" name="travelAgencyRateMoney" value="', $line = 56, $out += $escape(arrange.travelAgencyRateMoney), 
                        $out += '" ', $line = 56, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 56), $out += '/></div></td> <td><div data-index="', $line = 58, $out += $escape(index + 1), 
                        $out += '"><input name="guideRate" style="width:90px;" type="text" value="', $line = 58, 
                        $out += $escape(100 * arrange.guideRate), $out += '" old="', $line = 58, $out += $escape(arrange.guideRate), 
                        $out += '" maxlength="5" ', $line = 58, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 58), $out += '/></div></td> <td><div data-index="', $line = 60, $out += $escape(index + 1), 
                        $out += '"><span class="guideRateMoney F-float F-money">', $line = 60, $out += $escape(arrange.guideRkateMoney), 
                        $out += '</span><input type="hidden" class="guideRateMoney', $line = 60, $out += $escape(arrange.whichDay), 
                        $out += "_", $line = 60, $out += $escape(arrange.shopId), $out += '" name="guideRateMoney" value="', 
                        $line = 60, $out += $escape(arrange.guideRateMoney), $out += '" ', $line = 61, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 61), $out += "/></div></td> ", $line = 63, 0 == index && ($out += '<td ><div data-index="', 
                        $line = 63, $out += $escape(index + 1), $out += '">', $line = 63, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 63, $out += $escape(arrange.billRemark), $out += '" maxlength="1000" />', 
                        $line = 63) : ($line = 63, null != arrange.shopPolicy ? ($line = 63, $out += $escape(arrange.shopPolicy.remark), 
                        $line = 63) : ($line = 63, $out += $escape(arrange.billRemark), $line = 63), $line = 63), 
                        $out += "</div></td>", $line = 63), $out += " <td>", $line = 64, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 64) : ($out += "已对账", $line = 64), $out += "</td> </tr> ", $line = 66), 
                        $out += " ", $line = 67;
                    }), $out += " ", $line = 68;
                }), $out += " ", $line = 69), $out += " ", $line = 70;
            }), $out += " </tbody> </table> ", $line = 74, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 77, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 77), $out += ' type="text" style="width:30%;" value="', $line = 77, remarkArrangeList.shopReamrk.length > 0 && ($line = 77, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 77), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 80, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 80), $out += ' type="text" style="width:30%;" value="', $line = 80, remarkArrangeList.shopReamrk.length > 0 && ($line = 80, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 80), 
            $out += '" /> </div> </div>', $line = 82), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="5">打单</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <!--  <th class="th-border" rowspan="2">现收</th> -->\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange index}}\r\n        {{if arrange != null}}\r\n        <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.whichDay}}_{{arrange.shopId}}" shopArrid = "{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n            {{if index==0}}<td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>{{/if}}\r\n            {{if index==0}}<td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}</td>{{/if}}\r\n\r\n            <td></td>\r\n            <td><div data-index="{{index+1}}"><input class="F-float F-money" policyId="{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{arrange.consumeMoney}}" old="{{arrange.consumeMoney}}" maxlength="11" \r\n            {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></div></td>\r\n            <td><div data-index="{{index+1}}">{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}</div>\r\n            </td>\r\n            \r\n            <td><div data-index="{{index+1}}"><input name="travelAgencyRate" style="width:90px;" type="text" value="{{arrange.travelAgencyRate*100}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></div></td>\r\n            \r\n            <td><div data-index="{{index+1}}"><span class="travelAgencyRateMoney F-float F-money">{{arrange.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{arrange.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></div></td>\r\n            \r\n            <td><div data-index="{{index+1}}"><input name="guideRate" style="width:90px;" type="text" value="{{arrange.guideRate*100}}" old="{{arrange.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></div></td>\r\n            \r\n            <td><div data-index="{{index+1}}"><span class="guideRateMoney F-float F-money">{{arrange.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{arrange.guideRateMoney}}" \r\n            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></div></td>\r\n\r\n            {{if index == 0 }}<td ><div data-index="{{index+1}}">{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" />{{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}</div></td>{{/if}}\r\n            <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});