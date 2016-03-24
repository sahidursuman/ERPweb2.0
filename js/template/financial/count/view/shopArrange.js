/*TMODJS:{"debug":true,"version":8,"md5":"8aef88cb609ce617a5a7ee839bee9b93"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.i, $utils.$escape), editStatus = ($data.itemSet, 
            $data.index, $data.editStatus), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> <span style="color:#000;margin-left:20px;"> 购物合计：<span class="T-sumShopMoney F-float F-money">0</span> &nbsp;&nbsp; 社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span> &nbsp;&nbsp; 导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span> </span> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border hidden" rowspan="2">现收</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">操作</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border"> <span>返佣</span>  <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border"> <span>返佣</span>  </tr></thead> <tbody class="T-count-shopping"> ', 
            $line = 58, $each(dayList, function(day) {
                $out += " ", $line = 59, null != day.shopArrange && ($out += " ", $line = 60, $each(day.shopArrange, function(arrangeList) {
                    $out += " ", $line = 61, $each(arrangeList.shopArrangeList, function(arrange) {
                        $out += " ", $line = 63, null != arrange && ($out += ' <tr class="oldData noSumRate" shopArrangeId="', 
                        $line = 64, $out += $escape(arrange.id), $out += '" shopId="', $line = 64, $out += $escape(arrange.shopId), 
                        $out += '" whichDay = "', $line = 64, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                        $line = 64, $out += $escape(arrange.shopArrangeItemSet.length), $out += '" ', $line = 64, 
                        1 == arrange.isConfirmAccount && ($out += 'class="T-noSubmit"', $line = 64), $out += '> <td rowspan="', 
                        $line = 65, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"><span class="whichDay"></span> </td> <td rowspan="', 
                        $line = 66, $out += $escape(arrange.shopArrangeItemSet.length), $out += '">', $line = 66, 
                        $out += $escape(arrange.shop.name), $out += '<input type="hidden" name="shopId" value="', 
                        $line = 66, $out += $escape(arrange.shopId), $out += '"></td> ', $line = 67, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 68, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 69, 0 == index && ($out += ' <td><span class="span_shopPolicy"><input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 71, $out += $escape(itemSet.id), $out += '">', $line = 71, null != itemSet.shopPolicy ? ($line = 71, 
                            $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 72) : ($line = 72, 
                            $out += $escape(itemSet.name), $out += '<input type="hidden" name="shopPolicy" value="', 
                            $line = 72, $out += $escape(itemSet.name), $out += '"></span>', $line = 72), $out += ' </td> <td><input class="F-float F-money w-80" policyId="', 
                            $line = 75, null != itemSet.shopPolicy && ($line = 75, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 75), $out += '" name="consumeMoney" type="text" value="', $line = 75, $out += $escape(itemSet.consumeMoney), 
                            $out += '" maxlength="11" ', $line = 76, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                            $line = 76), $out += "/></td> <td>", $line = 77, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 78, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 79) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 81), $out += ' </td> <td><input name="travelAgencyRate" type="text" value="', 
                            $line = 84, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 84, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 84), 
                            $out += ' class="w-50"/></td> <td><input type="text" class="travelAgencyRateMoney', 
                            $line = 86, $out += $escape(arrange.whichDay), $out += "_", $line = 86, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="travelAgencyRateMoney" value="', $line = 86, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" old = "', $line = 86, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" ', $line = 86, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 86), $out += ' /></td> <td><input name="guideRate" type="text" value="', 
                            $line = 88, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 88, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 88), 
                            $out += ' class="w-50" /></td> <td><input type="text" class="guideRateMoney', $line = 90, 
                            $out += $escape(arrange.whichDay), $out += "_", $line = 90, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="guideRateMoney" value="', $line = 90, $out += $escape(itemSet.guideRebateMoney), 
                            $out += '" old = "', $line = 90, $out += $escape(itemSet.guideRebateMoney), $out += '" ', 
                            $line = 90, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 90), 
                            $out += ' /></td> <td rowspan="', $line = 92, $out += $escape(arrange.shopArrangeItemSet.length), 
                            $out += '" class="hidden"> <input name="currInCome" value="', $line = 93, $out += $escape(arrange.rebateCurrentIncomeMoney), 
                            $out += '" type="text" class="w-80" ', $line = 94, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 94), $out += "/> </td> <td > ", $line = 98, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 99, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" ', 
                            $line = 99, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 99), 
                            $out += "/> ", $line = 100) : ($line = 100, null != arrange.shopPolicy ? ($line = 100, 
                            $out += $escape(arrange.shopPolicy.remark), $line = 100) : ($line = 100, $out += $escape(itemSet.billRemark), 
                            $line = 100), $line = 100), $out += " </td> ", $line = 103), $out += " ", $line = 104;
                        }), $out += " ", $line = 105), $out += ' <td rowspan="', $line = 107, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '"> ', $line = 108, 0 == arrange.incomeStatus && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-shopArrDelAll">删除</a> ', 
                        $line = 110) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 112), $out += ' </td> <td rowspan="', 
                        $line = 115, $out += $escape(arrange.shopArrangeItemSet.length), $out += '">', $line = 115, 
                        0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 115) : ($out += "已对账", $line = 115), 
                        $out += " </td> </tr> ", $line = 119, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 120, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 121, index > 0 && ($out += ' <tr shopArrangeId="', $line = 122, 
                            $out += $escape(arrange.id), $out += '" shopId="', $line = 122, $out += $escape(arrange.shopId), 
                            $out += '" whichDay = "', $line = 122, $out += $escape(arrange.whichDay), $out += '" rowspan = "', 
                            $line = 122, $out += $escape(arrange.shopArrangeItemSet.length), $out += '" oldMoney="', 
                            $line = 122, $out += $escape(itemSet.travelAgencyRebateMoney), $out += '" itemsId = "', 
                            $line = 122, $out += $escape(itemSet.id), $out += '" ', $line = 123, 1 == index && ($out += 'class="noSumRate"', 
                            $line = 123), $out += " ", $line = 123, 1 == arrange.isConfirmAccount && ($out += 'class="T-noSubmit"', 
                            $line = 123), $out += '> <td> <span class="span_shopPolicy"> <input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 126, $out += $escape(itemSet.id), $out += '"> <input type="hidden" name="shopPolicy" value="', 
                            $line = 128, null != itemSet.shopPolicy ? ($line = 128, $out += $escape(itemSet.shopPolicy.name), 
                            $line = 128) : ($line = 128, $out += $escape(itemSet.name), $line = 128), $out += '"> <input type="hidden" name="shopPolicyId" value="', 
                            $line = 129, null != itemSet.shopPolicy && ($out += " ", $line = 130, $out += $escape(itemSet.shopPolicy.id), 
                            $out += " ", $line = 131), $out += '"> ', $line = 132, null != itemSet.shopPolicy ? ($line = 132, 
                            $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 134) : ($line = 134, 
                            $out += $escape(itemSet.name), $out += " ", $line = 136, 1 == index && 0 == arrange.isConfirmAccount && ($out += ' <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button> ', 
                            $line = 138), $out += " </span> ", $line = 140), $out += " &nbsp;&nbsp; ", $line = 142, 
                            index > 1 && ($out += " ", $line = 143, 0 == arrange.incomeStatus && 0 == arrange.isConfirmAccount && ($out += ' &nbsp;&nbsp;<button class="btn btn-danger btn-sm btn-white T-shopArrDelItem"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button> ', 
                            $line = 145), $out += " ", $line = 146), $out += ' </td> <td><input class="F-float F-money w-80" policyId="', 
                            $line = 149, null != itemSet.shopPolicy && ($line = 149, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 149), $out += '" name="consumeMoney" type="text" value="', $line = 149, 
                            $out += $escape(itemSet.consumeMoney), $out += '" old="', $line = 149, $out += $escape(itemSet.consumeMoney), 
                            $out += '" maxlength="11" ', $line = 150, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                            $line = 150), $out += "/></td> <td>", $line = 151, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 152, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 153) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 155), $out += ' </td> <td><input name="travelAgencyRate" type="text" value="', 
                            $line = 158, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 158, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                            $line = 158), $out += ' class="w-50" /></td> <td><input type="text" class="travelAgencyRateMoney', 
                            $line = 160, $out += $escape(arrange.whichDay), $out += "_", $line = 160, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="travelAgencyRateMoney" value="', $line = 160, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" old="', $line = 160, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" ', $line = 160, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                            $line = 160), $out += ' /></td> <td><input name="guideRate" type="text" value="', 
                            $line = 162, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 162, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 162), 
                            $out += ' class="w-50" /></td> <td><input type="text" class="guideRateMoney', $line = 164, 
                            $out += $escape(arrange.whichDay), $out += "_", $line = 164, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="guideRateMoney" value="', $line = 164, $out += $escape(itemSet.guideRebateMoney), 
                            $out += '" old="', $line = 164, $out += $escape(itemSet.guideRebateMoney), $out += '" ', 
                            $line = 165, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 165), 
                            $out += " /></td> <td > ", $line = 168, 1 == editStatus ? ($out += ' <input name="billRemark" type="text" value="', 
                            $line = 169, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" ', 
                            $line = 169, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 169), 
                            $out += "/> ", $line = 171) : ($line = 171, null != arrange.shopPolicy ? ($line = 171, 
                            $out += $escape(arrange.shopPolicy.remark), $line = 171) : ($line = 171, $out += $escape(itemSet.billRemark), 
                            $line = 171), $line = 171), $out += " </td></tr> ", $line = 174), $out += " ", $line = 175;
                        }), $out += " ", $line = 176), $out += " ", $line = 177), $out += ' <tr class="sumMoney" shopArrangeId="', 
                        $line = 178, $out += $escape(arrange.id), $out += '" shopId="', $line = 178, $out += $escape(arrange.shopId), 
                        $out += '" whichDay = "', $line = 178, $out += $escape(arrange.whichDay), $out += '"> <td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalMoney"></span></td> <td style="font-weight: bold;text-align:right;" colspan="2">社佣小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalTravelMoney"></span></td> <td style="font-weight: bold;text-align:right;">导佣小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalGuideMoney"></span></td> <td style="font-weight: bold;text-align:right;">佣金小计：</td> <td style="font-weight: bold;text-align:left;" colspan="2">&nbsp;&nbsp;<span class="F-float F-money T-sumRebeMoney "></span></td> </tr> ', 
                        $line = 188;
                    }), $out += " ", $line = 189;
                }), $out += " ", $line = 190), $out += " ", $line = 191;
            }), $out += " </tbody> </table> ", $line = 195, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 198, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 198), $out += ' type="text" style="width:30%;" value="', $line = 198, remarkArrangeList.shopReamrk.length > 0 && ($line = 198, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 198), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 201, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 201), $out += ' type="text" style="width:30%;" value="', $line = 201, remarkArrangeList.shopReamrk.length > 0 && ($line = 201, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 201), 
            $out += '" /> </div> </div>', $line = 203), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n            <span style="color:#000;margin-left:20px;">\r\n                购物合计：<span class="T-sumShopMoney F-float F-money">0</span>\r\n                &nbsp;&nbsp;\r\n                社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span>\r\n                &nbsp;&nbsp;\r\n                导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span>\r\n            </span>\r\n        </h5>\r\n\r\n    </div>\r\n    <table class="table overflow-table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="5">打单</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <th class="th-border hidden" rowspan="2">现收</th>\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">操作</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border"> \r\n                <span>返佣</span>\r\n                <!-- <div style="float:right">\r\n                    <input type="checkbox" class="ace T-travelCheckbox"/>\r\n                    <span class="lbl"></span>清除小数\r\n                    &nbsp;\r\n                    </th>\r\n                </div> -->\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border"> \r\n                <span>返佣</span>\r\n                <!-- <div style="float:right">\r\n                    <input type="checkbox" class="ace T-guideCheckbox"/>\r\n                    <span class="lbl"></span>清除小数\r\n                    &nbsp;\r\n                    </th>\r\n                </div> -->\r\n        </tr></thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange i}}\r\n\r\n        {{if arrange != null}}\r\n        <tr class="oldData noSumRate" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}" {{if arrange.isConfirmAccount == 1}}class="T-noSubmit"{{/if}}>\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}<input type="hidden" name="shopId" value="{{arrange.shopId}}"></td>\r\n            {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index == 0}}\r\n\r\n                <td><span class="span_shopPolicy"><input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                {{else}}{{itemSet.name}}<input type="hidden" name="shopPolicy" value="{{itemSet.name}}"></span>{{/if}}\r\n                </td>\r\n\r\n                <td><input class="F-float F-money w-80" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney"  type="text" value="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}} class="w-50"/></td>\r\n                \r\n                <td><input type="text" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRebateMoney}}" old = "{{itemSet.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td><input name="guideRate"  type="text" value="{{itemSet.guideRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} class="w-50" /></td>\r\n                \r\n                <td><input type="text" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="guideRateMoney" value="{{itemSet.guideRebateMoney}}" old = "{{itemSet.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n\r\n                <td rowspan="{{arrange.shopArrangeItemSet.length}}" class="hidden">\r\n                    <input name="currInCome" value="{{arrange.rebateCurrentIncomeMoney}}" type="text" class="w-80" \r\n                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                </td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n\r\n                </td>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n            \r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">\r\n                {{if arrange.incomeStatus == 0 && arrange.isConfirmAccount == 0}}\r\n                   <a href="javascript:void(0)" class="T-shopArrDelAll">删除</a>\r\n                {{else}}\r\n                   <span style="color:#bbb;">删除</span>\r\n                {{/if}}\r\n            </td>\r\n\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}\r\n            \r\n            </td>\r\n        </tr>\r\n        {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index > 0}}\r\n            <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}" oldMoney="{{itemSet.travelAgencyRebateMoney}}" itemsId = "{{itemSet.id}}"\r\n            {{if index == 1}}class="noSumRate"{{/if }} {{if arrange.isConfirmAccount == 1}}class="T-noSubmit"{{/if}}>\r\n                <td>\r\n                <span class="span_shopPolicy">\r\n                    <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                    <input type="hidden" name="shopPolicy" \r\n                    value="{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}{{else}}{{itemSet.name}}{{/if}}">\r\n                    <input type="hidden" name="shopPolicyId" value="{{if itemSet.shopPolicy != null }}\r\n                    {{itemSet.shopPolicy.id}}\r\n                    {{/if}}">\r\n                    {{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n\r\n                    {{else}}{{itemSet.name}}\r\n                    \r\n                    {{if index==1 && arrange.isConfirmAccount == 0}}\r\n                        <button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>\r\n                    {{/if}}\r\n                    </span>\r\n                    {{/if}}\r\n                    &nbsp;&nbsp;\r\n                    {{if index > 1}}\r\n                        {{if arrange.incomeStatus == 0 && arrange.isConfirmAccount == 0}}\r\n                           &nbsp;&nbsp;<button class="btn btn-danger btn-sm btn-white T-shopArrDelItem"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button>\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </td>\r\n\r\n                <td><input class="F-float F-money w-80" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" type="text" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                 <td>{{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}} class="w-50" /></td>\r\n                \r\n                <td><input type="text" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRebateMoney}}" old="{{itemSet.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td><input name="guideRate" type="text" value="{{itemSet.guideRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} class="w-50" /></td>\r\n                \r\n                <td><input type="text" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="guideRateMoney" value="{{itemSet.guideRebateMoney}}" old="{{itemSet.guideRebateMoney}}"\r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/> \r\n                    \r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n\r\n                </td></tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        <tr class="sumMoney" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}">\r\n            <td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;" colspan="2">社佣小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalTravelMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;">导佣小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalGuideMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;">佣金小计：</td>\r\n            <td style="font-weight: bold;text-align:left;" colspan="2">&nbsp;&nbsp;<span class="F-float F-money T-sumRebeMoney "></span></td>\r\n        </tr>\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});