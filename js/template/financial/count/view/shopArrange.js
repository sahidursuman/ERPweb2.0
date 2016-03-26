/*TMODJS:{"debug":true,"version":135,"md5":"a5bcbd78b042c0c64ddece46c9080391"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.i, $utils.$escape), tripPlan = ($data.itemSet, 
            $data.index, $data.tripPlan), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> <span style="color:#000;margin-left:20px;"> 购物合计：<span class="T-sumShopMoney F-float F-money">0</span> &nbsp;&nbsp; 社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span> &nbsp;&nbsp; 导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span> </span> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" rowspan="2"><span class="necessary">*</span>时间</th> <th class="th-border" rowspan="2"><span class="necessary">*</span>购物店</th> <th class="th-border" colspan="2">现收</th> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">操作</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>导游</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border">金额小计</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border"> <span>返佣</span> <button class="btn btn-xs btn-primary pull-right T-math-round" data-target="travelAgencyRateMoney">四舍五入</button> </th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border"> <span>返佣</span> <button class="btn btn-xs btn-primary pull-right T-math-round" data-target="guideRateMoney">四舍五入</button> </th> </tr> </thead> <tbody class="T-count-shopping"> ', 
            $line = 53, $each(dayList, function(day) {
                $out += " ", $line = 54, null != day.shopArrange && ($out += " ", $line = 55, $each(day.shopArrange, function(arrangeList) {
                    $out += " ", $line = 56, $each(arrangeList.shopArrangeList, function(arrange) {
                        $out += " ", $line = 57, null != arrange && ($out += ' <tr class="oldData noSumRate ', 
                        $line = 58, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += "T-noSubmit", 
                        $line = 58), $out += '" shopArrangeId="', $line = 58, $out += $escape(arrange.id), 
                        $out += '" shopId="', $line = 58, $out += $escape(arrange.shopId), $out += '" whichDay = "', 
                        $line = 58, $out += $escape(arrange.whichDay), $out += '" rowspan = "', $line = 58, 
                        $out += $escape(arrange.shopArrangeItemSet.length), $out += '" > <td rowspan="', 
                        $line = 60, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"><span class="whichDay"></span> </td> <td rowspan="', 
                        $line = 62, $out += $escape(arrange.shopArrangeItemSet.length), $out += '"> ', $line = 63, 
                        $out += $escape(arrange.shop.name), $out += ' <input type="hidden" name="shopId" value="', 
                        $line = 64, $out += $escape(arrange.shopId), $out += '"> </td> <td> <div></div> <div></div> </td> <td> <div></div> <div></div> </td> ', 
                        $line = 77, null != arrange.shopArrangeItemSet && ($out += " ", $line = 78, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 79, 0 == index && ($out += ' <td> <span class="span_shopPolicy"> <input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 83, $out += $escape(itemSet.id), $out += '"> ', $line = 84, null != itemSet.shopPolicy ? ($out += " ", 
                            $line = 85, $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 86) : ($out += " ", 
                            $line = 87, $out += $escape(itemSet.name), $out += ' <input type="hidden" name="shopPolicy" value="', 
                            $line = 88, $out += $escape(itemSet.name), $out += '"> ', $line = 89), $out += ' </span> </td> <td> <div></div> <div></div> </td> <td> - </td> <td> <div></div> <div></div> <!-- <input class="F-float F-money w-80" policyId="', 
                            $line = 105, null != itemSet.shopPolicy && ($line = 105, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 105), $out += '" name="consumeMoney" type="text" value="', $line = 106, 
                            $out += $escape(itemSet.consumeMoney), $out += '" maxlength="11" ', $line = 107, 
                            (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += ' readOnly="readOnly" ', 
                            $line = 109), $out += " /> --> </td> <td> <!-- ", $line = 114, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 115, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 116) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 118), $out += ' --> <div></div> <div></div> </td> <td> <!-- <input name="travelAgencyRate" type="text" value="', 
                            $line = 124, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 125, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += ' readOnly="readOnly" ', 
                            $line = 125), $out += ' class="w-50"/> --> </td> <td> <input name="travelAgencyRate" type="text" value="', 
                            $line = 129, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 130, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += ' readOnly="readOnly" ', 
                            $line = 130), $out += ' class="w-50"/> </td> <td> <input type="text" class="travelAgencyRateMoney', 
                            $line = 134, $out += $escape(arrange.whichDay), $out += "_", $line = 134, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="travelAgencyRateMoney" value="', $line = 134, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" old = "', $line = 134, $out += $escape(itemSet.travelAgencyRebateMoney), 
                            $out += '" ', $line = 134, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 134), $out += ' /> </td> <td> <div></div> <div></div> <!-- <input name="guideRate" type="text" value="', 
                            $line = 140, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 140, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 140), $out += ' class="w-50" /> --> </td> <td> <div></div> <div></div> <!-- <input type="text" class="guideRateMoney', 
                            $line = 146, $out += $escape(arrange.whichDay), $out += "_", $line = 146, $out += $escape(arrange.shopId), 
                            $out += ' w-80" name="guideRateMoney" value="', $line = 146, $out += $escape(itemSet.guideRebateMoney), 
                            $out += '" old = "', $line = 146, $out += $escape(itemSet.guideRebateMoney), $out += '" ', 
                            $line = 146, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 146), $out += ' /> --> </td> <td > <input name="billRemark" type="text" value="', 
                            $line = 150, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" ', 
                            $line = 150, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 150), $out += "/> </td> ", $line = 152), $out += " ", $line = 153;
                        }), $out += " ", $line = 154), $out += ' <td rowspan="', $line = 156, $out += $escape(arrange.shopArrangeItemSet.length), 
                        $out += '"> ', $line = 157, 0 == arrange.incomeStatus && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-shopArrDelAll">删除</a> ', 
                        $line = 159) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 161), $out += ' </td> <td rowspan="', 
                        $line = 164, $out += $escape(arrange.shopArrangeItemSet.length), $out += '">', $line = 164, 
                        0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 164) : ($out += "已对账", $line = 164), 
                        $out += " </td> </tr> ", $line = 167, null != arrange.shopArrangeItemSet && ($out += " ", 
                        $line = 168, $each(arrange.shopArrangeItemSet, function(itemSet, index) {
                            $out += " ", $line = 169, index > 0 && ($out += ' <tr shopArrangeId="', $line = 170, 
                            $out += $escape(arrange.id), $out += '" shopId="', $line = 170, $out += $escape(arrange.shopId), 
                            $out += '" whichDay = "', $line = 170, $out += $escape(arrange.whichDay), $out += '" oldMoney="', 
                            $line = 171, $out += $escape(itemSet.travelAgencyRebateMoney), $out += '" itemsId = "', 
                            $line = 172, $out += $escape(itemSet.id), $out += '" ', $line = 173, 1 == index && ($out += 'class="noSumRate ', 
                            $line = 173, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += "T-noSubmit", 
                            $line = 173), $out += '"', $line = 173), $out += '> <td> <span class="span_shopPolicy"> <input type="hidden" name="shopPolicyArrId" value="', 
                            $line = 176, $out += $escape(itemSet.id), $out += '"> <input type="hidden" name="shopPolicy" value="', 
                            $line = 178, null != itemSet.shopPolicy ? ($line = 178, $out += $escape(itemSet.shopPolicy.name), 
                            $line = 178) : ($line = 178, $out += $escape(itemSet.name), $line = 178), $out += '"> <input type="hidden" name="shopPolicyId" value="', 
                            $line = 179, null != itemSet.shopPolicy && ($line = 179, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 179), $out += '"> ', $line = 180, null != itemSet.shopPolicy ? ($out += " ", 
                            $line = 181, $out += $escape(itemSet.shopPolicy.name), $out += " ", $line = 182) : ($out += " ", 
                            $line = 183, $out += $escape(itemSet.name), $out += " ", $line = 184, 1 == index && 0 == arrange.isConfirmAccount && ($out += ' <button class="btn btn-success btn-sm pull-right btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> ', 
                            $line = 188), $out += " ", $line = 189), $out += " </span> &nbsp;&nbsp; ", $line = 192, 
                            index > 1 && ($out += " ", $line = 193, 0 == arrange.incomeStatus && 0 == arrange.isConfirmAccount && ($out += ' &nbsp;&nbsp; <button class="btn btn-danger btn-sm btn-white T-shopArrDelItem pull-right"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> ', 
                            $line = 198), $out += " ", $line = 199), $out += " </td> <td> ", $line = 203, 1 == index ? ($out += " - ", 
                            $line = 205) : ($out += " <div></div> <div></div> ", $line = 208), $out += " </td> <td> <div></div> </td> <td> <!-- ", 
                            $line = 216, null != itemSet.billImage && "" != itemSet.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                            $line = 217, $out += $escape(itemSet.billImage), $out += '" class="btn-view">查看</a> ', 
                            $line = 218) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 220), $out += ' --> <div></div> </td> <td> <input class="F-float F-money w-80" policyId="', 
                            $line = 225, null != itemSet.shopPolicy && ($line = 225, $out += $escape(itemSet.shopPolicy.id), 
                            $line = 225), $out += '" name="consumeMoney" type="text" value="', $line = 225, 
                            $out += $escape(itemSet.consumeMoney), $out += '" old="', $line = 225, $out += $escape(itemSet.consumeMoney), 
                            $out += '" maxlength="11" ', $line = 226, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += ' readOnly="readOnly" ', 
                            $line = 226), $out += '/> </td> <td> <input name="travelAgencyRate" type="text" value="', 
                            $line = 230, $out += $escape(100 * itemSet.travelAgencyRate), $out += '" maxlength="5" ', 
                            $line = 230, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += ' readOnly="readOnly" ', 
                            $line = 230), $out += ' class="w-50" /> </td> <td> <input type="text" class="travelAgencyRateMoney w-80" name="travelAgencyRateMoney" value="', 
                            $line = 235, $out += $escape(itemSet.travelAgencyRebateMoney), $out += '" old="', 
                            $line = 235, $out += $escape(itemSet.travelAgencyRebateMoney), $out += '" ', $line = 235, 
                            (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 235), $out += ' /> </td> <td> <div></div> <div></div> <!-- <input name="guideRate" type="text" value="', 
                            $line = 241, $out += $escape(100 * itemSet.guideRate), $out += '" maxlength="5" ', 
                            $line = 242, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 242), $out += ' class="w-50" /> --> </td> <td> <div></div> <div></div> <!-- <input type="text" class="guideRateMoney w-80" name="guideRateMoney" value="', 
                            $line = 248, $out += $escape(itemSet.guideRebateMoney), $out += '" ', $line = 249, 
                            (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 249), $out += ' /> --> </td> <td > <input name="billRemark" type="text" value="', 
                            $line = 253, $out += $escape(itemSet.billRemark), $out += '" maxlength="1000" ', 
                            $line = 253, (1 == arrange.isConfirmAccount || 1 == arrange.badStatus) && ($out += 'readOnly="readOnly"', 
                            $line = 253), $out += "/> </td> </tr> ", $line = 256), $out += " ", $line = 257;
                        }), $out += " ", $line = 258), $out += " ", $line = 259), $out += ' <tr class="sumMoney" shopArrangeId="', 
                        $line = 260, $out += $escape(arrange.id), $out += '" shopId="', $line = 260, $out += $escape(arrange.shopId), 
                        $out += '" whichDay = "', $line = 260, $out += $escape(arrange.whichDay), $out += '"> <td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalMoney"></span></td> <td style="font-weight: bold;text-align:right;" colspan="2">社佣小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalTravelMoney"></span></td> <td style="font-weight: bold;text-align:right;">导佣小计：</td> <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalGuideMoney"></span></td> <td style="font-weight: bold;text-align:right;">佣金小计：</td> <td style="font-weight: bold;text-align:left;" colspan="2"> &nbsp;&nbsp; <span class="F-float F-money T-sumRebeMoney "></span> </td> </tr> ', 
                        $line = 273;
                    }), $out += " ", $line = 274;
                }), $out += " ", $line = 275), $out += " ", $line = 276;
            }), $out += " </tbody> </table> ", $line = 280, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 283, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 283), $out += ' type="text" style="width:30%;" value="', $line = 283, remarkArrangeList.shopReamrk.length > 0 && ($line = 283, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 283), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 286, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 286), $out += ' type="text" style="width:30%;" value="', $line = 286, remarkArrangeList.shopReamrk.length > 0 && ($line = 286, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 286), 
            $out += '" /> </div> </div>', $line = 288), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n            <span style="color:#000;margin-left:20px;">\r\n                购物合计：<span class="T-sumShopMoney F-float F-money">0</span>\r\n                &nbsp;&nbsp;\r\n                社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span>\r\n                &nbsp;&nbsp;\r\n                导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span>\r\n            </span>\r\n        </h5>\r\n    </div>\r\n    <table class="table overflow-table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>时间</th>\r\n                <th class="th-border" rowspan="2"><span class="necessary">*</span>购物店</th>\r\n                <th class="th-border" colspan="2">现收</th>\r\n                <th class="th-border" colspan="5">打单</th>\r\n                <th class="th-border" colspan="2">社佣</th>\r\n                <th class="th-border" colspan="2">导佣</th>\r\n                <th class="th-border" rowspan="2">导游报账备注</th>\r\n                \r\n                <th class="th-border" rowspan="2">操作</th>\r\n                <th class="th-border" rowspan="2">是否对账</th>\r\n            </tr>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>商品</th>\r\n                <th class="th-border"><span class="necessary">*</span>导游</th>\r\n                <th class="th-border"><span class="necessary">*</span>金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">金额小计</th>\r\n                <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n                <th class="th-border"> \r\n                    <span>返佣</span>\r\n                    <button class="btn btn-xs btn-primary pull-right T-math-round" data-target="travelAgencyRateMoney">四舍五入</button>\r\n                </th>\r\n                <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n                <th class="th-border"> \r\n                    <span>返佣</span>\r\n                    <button class="btn btn-xs btn-primary pull-right T-math-round" data-target="guideRateMoney">四舍五入</button>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange i}}\r\n        {{if arrange != null}}\r\n        <tr class="oldData noSumRate {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}T-noSubmit{{/if}}" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}" >\r\n\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td><!-- 日期 -->\r\n\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">\r\n                {{arrange.shop.name}}\r\n                <input type="hidden" name="shopId" value="{{arrange.shopId}}">\r\n            </td><!-- 购物店 -->\r\n\r\n            <td>\r\n                <div></div>\r\n                <div></div>\r\n            </td><!-- 现收_导游 -->\r\n\r\n            <td>\r\n                <div></div>\r\n                <div></div>\r\n            </td><!-- 现收_金额 -->\r\n\r\n            {{if arrange.shopArrangeItemSet != null}}\r\n                {{each arrange.shopArrangeItemSet as itemSet index}}\r\n                    {{if index == 0}}\r\n\r\n                        <td>\r\n                            <span class="span_shopPolicy">\r\n                                <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                                {{if itemSet.shopPolicy != null }}\r\n                                    {{itemSet.shopPolicy.name}}\r\n                                {{else}}\r\n                                    {{itemSet.name}}\r\n                                    <input type="hidden" name="shopPolicy" value="{{itemSet.name}}">\r\n                                {{/if}}\r\n                            </span>\r\n                        </td><!-- 商品 -->\r\n\r\n                        <td>\r\n                            <div></div>\r\n                            <div></div>\r\n                        </td><!-- 导游 -->\r\n\r\n                        <td>\r\n                            -                            \r\n                        </td>\r\n                        <td>\r\n                            <div></div>\r\n                            <div></div>\r\n                            <!-- <input class="F-float F-money w-80" \r\n                            policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" \r\n                            name="consumeMoney"  type="text" value="{{itemSet.consumeMoney}}" maxlength="11" \r\n                            {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}} \r\n                                readOnly="readOnly" \r\n                            {{/if}}\r\n                            /> -->\r\n                        </td><!-- 金额 -->\r\n\r\n                        <td>\r\n                            <!-- {{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}} -->\r\n                            <div></div>\r\n                            <div></div>\r\n                        </td><!-- 单据 -->\r\n                \r\n                        <td>\r\n                        <!-- <input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" \r\n                        {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}} readOnly="readOnly" {{/if}} class="w-50"/> -->\r\n                        </td><!-- 金额小计 -->\r\n\r\n                        <td>\r\n                        <input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" \r\n                        {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}} readOnly="readOnly" {{/if}} class="w-50"/>\r\n                        </td><!-- 社佣比例 -->\r\n                \r\n                        <td>\r\n                        <input type="text" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRebateMoney}}" old = "{{itemSet.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} />\r\n                        </td><!-- 社佣金额 -->\r\n                \r\n                        <td>\r\n                            <div></div>\r\n                            <div></div>\r\n                        <!-- <input name="guideRate"  type="text" value="{{itemSet.guideRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} class="w-50" /> -->\r\n                        </td><!-- 导佣比例 -->\r\n                \r\n                        <td>\r\n                            <div></div>\r\n                            <div></div>\r\n                        <!-- <input type="text" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}} w-80" name="guideRateMoney" value="{{itemSet.guideRebateMoney}}" old = "{{itemSet.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} /> -->\r\n                        </td><!-- 导佣金额 -->\r\n\r\n                        <td >\r\n                        <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}}/>\r\n                        </td><!-- 导游报账备注 -->\r\n                    {{/if}}\r\n                {{/each}}\r\n            {{/if}}\r\n            \r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">\r\n                {{if arrange.incomeStatus == 0 && arrange.isConfirmAccount == 0}}\r\n                   <a href="javascript:void(0)" class="T-shopArrDelAll">删除</a>\r\n                {{else}}\r\n                   <span style="color:#bbb;">删除</span>\r\n                {{/if}}\r\n            </td><!-- 操作列 -->\r\n\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}\r\n            </td><!-- 对账状态列 -->\r\n        </tr>\r\n        {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index > 0}}\r\n            <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" \r\n                oldMoney="{{itemSet.travelAgencyRebateMoney}}" \r\n                itemsId = "{{itemSet.id}}"\r\n                {{if index == 1}}class="noSumRate {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}T-noSubmit{{/if}}"{{/if }}>\r\n                <td>\r\n                    <span class="span_shopPolicy">\r\n                        <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                        <input type="hidden" name="shopPolicy" \r\n                        value="{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}{{else}}{{itemSet.name}}{{/if}}">\r\n                        <input type="hidden" name="shopPolicyId" value="{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.id}}{{/if}}">\r\n                        {{if itemSet.shopPolicy != null }}\r\n                            {{itemSet.shopPolicy.name}}\r\n                        {{else}}\r\n                            {{itemSet.name}}\r\n                            {{if index==1 && arrange.isConfirmAccount == 0}}\r\n                                <button class="btn btn-success btn-sm pull-right btn-white T-addShop"> \r\n                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                </button>\r\n                            {{/if}}\r\n                        {{/if}}\r\n                    </span>\r\n                    &nbsp;&nbsp;\r\n                    {{if index > 1}}\r\n                        {{if arrange.incomeStatus == 0 && arrange.isConfirmAccount == 0}}\r\n                           &nbsp;&nbsp;\r\n                           <button class="btn btn-danger btn-sm btn-white T-shopArrDelItem pull-right"> \r\n                                <i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n                           </button>\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </td><!-- 商品 -->\r\n\r\n                <td>\r\n                    {{if index == 1}}\r\n                        -\r\n                    {{else}}\r\n                        <div></div>\r\n                        <div></div>\r\n                    {{/if}}\r\n                </td><!-- 导游 -->\r\n                \r\n                <td>\r\n                    <div></div>\r\n                </td><!-- 金额 -->\r\n\r\n                <td>\r\n                    <!-- {{if itemSet.billImage != null && itemSet.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{itemSet.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}} -->\r\n                    <div></div>\r\n                </td><!-- 单据 -->\r\n\r\n                <td>\r\n                    <input class="F-float F-money w-80" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" type="text" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                    {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}} readOnly="readOnly" {{/if}}/>\r\n                </td><!-- 金额小计 -->\r\n\r\n                <td>\r\n                    <input name="travelAgencyRate" type="text" value="{{itemSet.travelAgencyRate*100}}" maxlength="5" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}} readOnly="readOnly" {{/if}} class="w-50" />\r\n                </td><!-- 社佣比例 -->\r\n                \r\n                <td>\r\n                    <input type="text" class="travelAgencyRateMoney\r\n                     w-80" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRebateMoney}}" old="{{itemSet.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} />\r\n                </td><!-- 社佣金额 -->\r\n                \r\n                <td>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <!-- <input name="guideRate" type="text" value="{{itemSet.guideRate*100}}" maxlength="5" \r\n                    {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} class="w-50" /> -->\r\n                </td><!-- 导佣比例 -->\r\n                \r\n                <td>\r\n                    <div></div>\r\n                    <div></div>\r\n                    <!-- <input type="text" class="guideRateMoney w-80" name="guideRateMoney" value="{{itemSet.guideRebateMoney}}"\r\n                    {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}} /> -->\r\n                </td><!-- 导佣金额 -->\r\n\r\n                <td >\r\n                    <input name="billRemark" type="text" value="{{itemSet.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1 || arrange.badStatus == 1}}readOnly="readOnly"{{/if}}/> \r\n                </td><!-- 报账备注 -->\r\n            </tr>\r\n            {{/if}}\r\n            {{/each}}\r\n        {{/if}}\r\n        {{/if}}\r\n        <tr class="sumMoney" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}">\r\n            <td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;" colspan="2">社佣小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalTravelMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;">导佣小计：</td>\r\n            <td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalGuideMoney"></span></td>\r\n            <td style="font-weight: bold;text-align:right;">佣金小计：</td>\r\n            <td style="font-weight: bold;text-align:left;" colspan="2">\r\n                &nbsp;&nbsp;\r\n                <span class="F-float F-money T-sumRebeMoney "></span>\r\n            </td>\r\n        </tr>\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});