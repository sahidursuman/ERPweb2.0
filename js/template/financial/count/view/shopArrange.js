/*TMODJS:{"debug":true,"version":48,"md5":"cdbbc4098dc8b6b4de2ad899258a9dec"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/shopArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.shopArrangeList, $data.arrange, $data.index, $utils.$escape), busCompanyArrange = $data.busCompanyArrange, editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 购物安排 <a href="javascript:void(0)" class="T-addShopping"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="6">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" colspan="2">人数返佣</th> <th class="th-border" colspan="2">停车返佣</th> <th class="th-border" rowspan="2">购物返佣总收入</th>  <th class="th-border" rowspan="2">导游报账备注</th> ', 
            $line = 24, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 24), $out += ' </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border">总金额</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>元/人</th> <th class="th-border">返佣</th> <th class="th-border">元/车</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ', 
            $line = 43, $each(dayList, function(day) {
                $out += " ", $line = 44, null != day.shopArrange && ($out += " ", $line = 45, $each(day.shopArrange, function(shopArrangeList) {
                    $out += " ", $line = 46, $each(shopArrangeList.shopArrangePolicy, function(arrange, index) {
                        $out += " ", $line = 47, null != arrange && ($out += ' <tr shopArrangeId="', $line = 48, 
                        $out += $escape(arrange.id), $out += '" shopId="', $line = 48, $out += $escape(arrange.whichDay), 
                        $out += "_", $line = 48, $out += $escape(arrange.shopId), $out += '" shopArrid = "', 
                        $line = 48, $out += $escape(arrange.shopId), $out += '" whichDay = "', $line = 48, 
                        $out += $escape(arrange.whichDay), $out += '"> ', $line = 49, 0 == index && ($out += '<td rowspan="', 
                        $line = 49, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><span class="whichDay"></span> </td>', 
                        $line = 49), $out += " ", $line = 50, 0 == index && ($out += '<td rowspan="', $line = 50, 
                        $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '">', $line = 50, 
                        $out += $escape(arrange.shop.name), $out += "</td>", $line = 50), $out += " <td>", 
                        $line = 51, null != arrange.shopPolicy ? ($line = 51, $out += $escape(arrange.shopPolicy.name), 
                        $line = 51) : ($out += '<input name="shopPolicyName" value="" type="text"><input name="shopPolicyId" type="hidden">', 
                        $line = 51), $out += '</td> <td><input class="F-float F-money" policyId="', $line = 52, 
                        null != arrange.shopPolicy && ($line = 52, $out += $escape(arrange.shopPolicy.id), 
                        $line = 52), $out += '" name="consumeMoney" style="width:90px;" type="text" value="', 
                        $line = 52, $out += $escape(arrange.consumeMoney), $out += '" old="', $line = 52, 
                        $out += $escape(arrange.consumeMoney), $out += '" maxlength="11" ', $line = 53, 
                        1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 53), 
                        $out += "/></td> <td>", $line = 54, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 55, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 56) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 58), $out += " </td> ", 
                        $line = 60, 0 == index && ($out += '<td rowspan="', $line = 60, $out += $escape(shopArrangeList.shopArrangePolicy.length), 
                        $out += '"><span class="sumMoney', $line = 60, $out += $escape(arrange.whichDay), 
                        $out += "_", $line = 60, $out += $escape(arrange.shopId), $out += ' F-float F-money"></span></td>', 
                        $line = 60), $out += ' <td><input name="travelAgencyRate" style="width:90px;" type="text" value="', 
                        $line = 61, $out += $escape(100 * arrange.travelAgencyRate), $out += '" old="', 
                        $line = 61, $out += $escape(arrange.travelAgencyRate), $out += '" maxlength="5" ', 
                        $line = 61, 1 == arrange.isConfirmAccount && ($out += ' readOnly="readOnly" ', $line = 61), 
                        $out += '/></td> <td><span class="travelAgencyRateMoney F-float F-money">', $line = 62, 
                        $out += $escape(arrange.travelAgencyRateMoney), $out += '</span><input type="hidden" class="travelAgencyRateMoney', 
                        $line = 62, $out += $escape(arrange.whichDay), $out += "_", $line = 62, $out += $escape(arrange.shopId), 
                        $out += '" name="travelAgencyRateMoney" value="', $line = 62, $out += $escape(arrange.travelAgencyRateMoney), 
                        $out += '" ', $line = 62, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 62), $out += '/></td> <td><input name="guideRate" style="width:90px;" type="text" value="', 
                        $line = 63, $out += $escape(100 * arrange.guideRate), $out += '" old="', $line = 63, 
                        $out += $escape(arrange.guideRate), $out += '" maxlength="5" ', $line = 63, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 63), $out += '/></td> <td><span class="guideRateMoney F-float F-money">', 
                        $line = 64, $out += $escape(arrange.guideRkateMoney), $out += '</span><input type="hidden" class="guideRateMoney', 
                        $line = 64, $out += $escape(arrange.whichDay), $out += "_", $line = 64, $out += $escape(arrange.shopId), 
                        $out += '" name="guideRateMoney" value="', $line = 64, $out += $escape(arrange.guideRateMoney), 
                        $out += '" ', $line = 65, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 65), $out += "/></td> ", $line = 66, 0 == index && ($out += '<td rowspan="', 
                        $line = 66, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><input type="text" name="customerRebateMoney', 
                        $line = 66, $out += $escape(arrange.whichDay), $out += "_", $line = 66, $out += $escape(arrange.shopId), 
                        $out += '" value="', $line = 66, arrange.customerRebateMoney < 1 ? ($line = 66, 
                        $out += $escape(arrange.shop.customerRebateMoney), $line = 66) : ($line = 66, $out += $escape(arrange.customerRebateMoney), 
                        $line = 66), $out += '" style="width:90px;" old="', $line = 66, arrange.customerRebateMoney < 1 ? ($line = 66, 
                        $out += $escape(arrange.shop.customerRebateMoney), $line = 66) : ($line = 66, $out += $escape(arrange.customerRebateMoney), 
                        $line = 66), $out += '" maxlength="11" ', $line = 66, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 66), $out += '/><input type="hidden" name="touristAdultCount', $line = 66, 
                        $out += $escape(arrange.whichDay), $out += "_", $line = 66, $out += $escape(arrange.shopId), 
                        $out += '" value="', $line = 66, $out += $escape(tripPlan.touristAdultCount), $out += '" ', 
                        $line = 66, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 66), 
                        $out += "/></td>", $line = 66), $out += " ", $line = 67, 0 == index && ($out += '<td rowspan="', 
                        $line = 67, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><span class="sumCustomerRebateMoney', 
                        $line = 67, $out += $escape(arrange.whichDay), $out += "_", $line = 67, $out += $escape(arrange.shopId), 
                        $out += ' sumCustomerRebateMoney F-float F-money">', $line = 67, $out += $escape(shopArrangeList.customerRebateMoney), 
                        $out += "</span></td>", $line = 67), $out += " ", $line = 68, 0 == index && ($out += '<td rowspan="', 
                        $line = 68, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><input ', 
                        $line = 68, 1 == arrange.isConfirmAccount && ($out += 'readonly="readOnly"', $line = 68), 
                        $out += ' type="text" name="parkingRebateMoney', $line = 68, $out += $escape(arrange.whichDay), 
                        $out += "_", $line = 68, $out += $escape(arrange.shopId), $out += '" value="', $line = 68, 
                        arrange.parkingRebateMoney < 1 ? ($line = 68, $out += $escape(arrange.shop.parkingRebateMoney), 
                        $line = 68) : ($line = 68, $out += $escape(arrange.parkingRebateMoney), $line = 68), 
                        $out += '" style="width:90px;" old="', $line = 68, arrange.parkingRebateMoney < 1 ? ($line = 68, 
                        $out += $escape(arrange.shop.parkingRebateMoney), $line = 68) : ($line = 68, $out += $escape(arrange.parkingRebateMoney), 
                        $line = 68), $out += '" maxlength="11" /><input type="hidden" name="busNumber', 
                        $line = 69, $out += $escape(arrange.whichDay), $out += "_", $line = 69, $out += $escape(arrange.shopId), 
                        $out += '" class="busNumber" value="', $line = 69, $out += $escape(busCompanyArrange.length), 
                        $out += '" ', $line = 69, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 69), $out += " /></td>", $line = 69), $out += " ", $line = 70, 0 == index && ($out += '<td rowspan="', 
                        $line = 70, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><span class="sumParkingRebateMoney', 
                        $line = 70, $out += $escape(arrange.whichDay), $out += "_", $line = 70, $out += $escape(arrange.shopId), 
                        $out += ' sumParkingRebateMoney F-float F-money">', $line = 70, $out += $escape(shopArrangeList.parkingRebateMoney), 
                        $out += "</span></td>", $line = 70), $out += " ", $line = 71, 0 == index && ($out += '<td rowspan="', 
                        $line = 71, $out += $escape(shopArrangeList.shopArrangePolicy.length), $out += '"><span class="T-shopIncome T-shopIncome', 
                        $line = 71, $out += $escape(arrange.whichDay), $out += "_", $line = 71, $out += $escape(arrange.shopId), 
                        $out += ' F-float F-money"></span></td>', $line = 71), $out += " <!-- ", $line = 72, 
                        0 == index && ($out += '<td rowspan="', $line = 72, $out += $escape(shopArrangeList.shopArrangePolicy.length), 
                        $out += '"><input type="text" style="width:90px;"/></td>', $line = 72), $out += " --> ", 
                        $line = 73, 0 == index && ($out += '<td rowspan="', $line = 73, $out += $escape(shopArrangeList.shopArrangePolicy.length), 
                        $out += '">', $line = 73, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 73, $out += $escape(arrange.billRemark), $out += '" maxlength="1000" />', 
                        $line = 73) : ($line = 73, null != arrange.shopPolicy ? ($line = 73, $out += $escape(arrange.shopPolicy.remark), 
                        $line = 73) : ($line = 73, $out += $escape(arrange.billRemark), $line = 73), $line = 73), 
                        $out += "</td>", $line = 73), $out += " ", $line = 74, 2 == tripPlan.billStatus && ($out += "<td>", 
                        $line = 74, 0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 74) : ($out += "已对账", 
                        $line = 74), $out += "</td>", $line = 74), $out += " </tr> ", $line = 76), $out += " ", 
                        $line = 77;
                    }), $out += " ", $line = 78;
                }), $out += " ", $line = 79), $out += " ", $line = 80;
            }), $out += " </tbody> </table> ", $line = 84, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 87, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 87), $out += ' type="text" style="width:30%;" value="', $line = 87, remarkArrangeList.shopReamrk.length > 0 && ($line = 87, 
            $out += $escape(remarkArrangeList.shopReamrk[0].opCheckRemark), $line = 87), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 90, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 90), $out += ' type="text" style="width:30%;" value="', $line = 90, remarkArrangeList.shopReamrk.length > 0 && ($line = 90, 
            $out += $escape(remarkArrangeList.shopReamrk[0].financeCheckRemark), $line = 90), 
            $out += '" /> </div> </div>', $line = 92), $out += " </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div>\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 购物安排\r\n            <a href="javascript:void(0)" class="T-addShopping">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="6">打单</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <th class="th-border" colspan="2">人数返佣</th>\r\n            <th class="th-border" colspan="2">停车返佣</th>\r\n            <th class="th-border" rowspan="2">购物返佣总收入</th>\r\n            <!--  <th class="th-border" rowspan="2">现收</th> -->\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border">总金额</th>\r\n          <th class="th-border">比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>元/人</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border">元/车</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as shopArrangeList}}\r\n        {{each shopArrangeList.shopArrangePolicy as arrange index}}\r\n        {{if arrange != null}}\r\n        <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.whichDay}}_{{arrange.shopId}}" shopArrid = "{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}">\r\n            {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="whichDay"></span> </td>{{/if}}\r\n            {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">{{arrange.shop.name}}</td>{{/if}}\r\n            <td>{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.name}}{{else}}<input name="shopPolicyName" value="" type="text"><input name="shopPolicyId" type="hidden">{{/if}}</td>\r\n            <td><input class="F-float F-money" policyId="{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="text" value="{{arrange.consumeMoney}}" old="{{arrange.consumeMoney}}" maxlength="11" \r\n            {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}\r\n            </td>\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumMoney{{arrange.whichDay}}_{{arrange.shopId}} F-float F-money"></span></td>{{/if}}\r\n            <td><input name="travelAgencyRate" style="width:90px;" type="text" value="{{arrange.travelAgencyRate*100}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n            <td><span class="travelAgencyRateMoney F-float F-money">{{arrange.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{arrange.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n            <td><input name="guideRate" style="width:90px;" type="text" value="{{arrange.guideRate*100}}" old="{{arrange.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n            <td><span class="guideRateMoney F-float F-money">{{arrange.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{arrange.guideRateMoney}}" \r\n            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input type="text" name="customerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/><input type="hidden" name="touristAdultCount{{arrange.whichDay}}_{{arrange.shopId}}" value="{{tripPlan.touristAdultCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumCustomerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumCustomerRebateMoney F-float F-money">{{shopArrangeList.customerRebateMoney}}</span></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input {{if arrange.isConfirmAccount == 1}}readonly="readOnly"{{/if}} type="text" name="parkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" maxlength="11" \r\n            /><input type="hidden" name="busNumber{{arrange.whichDay}}_{{arrange.shopId}}" class="busNumber" value="{{busCompanyArrange.length}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumParkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumParkingRebateMoney F-float F-money">{{shopArrangeList.parkingRebateMoney}}</span></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="T-shopIncome T-shopIncome{{arrange.whichDay}}_{{arrange.shopId}} F-float F-money"></span></td>{{/if}}\r\n            <!-- {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input type="text" style="width:90px;"/></td>{{/if}} -->\r\n            {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" />{{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}</td>{{/if}}\r\n            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    {{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;"><div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n    </div>{{/if}}\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});