/*TMODJS:{"debug":true,"version":295,"md5":"dc51b668661d0b3702d407864ee26514"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/selfPayArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 自费安排 <a href="javascript:void(0)" class="T-addSelf"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1400"> <thead> <tr> <th class="th-border" colspan="16">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>自费商家</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>应收数量</th> <th class="th-border">应收优惠</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border"><span class="necessary">*</span>底价</th> <th class="th-border"><span class="necessary">*</span>应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ', 
            $line = 45, $each(dayList, function(day) {
                $out += " ", $line = 46, null != day.selfPayArrange && ($out += " ", $line = 47, 
                $each(day.selfPayArrange, function(arrangeList) {
                    $out += " ", $line = 48, $each(arrangeList.selfPayArrangeList, function(arrange, index) {
                        $out += " ", $line = 49, null != arrange && ($out += ' <tr selfPayArrangeId="', 
                        $line = 50, $out += $escape(arrange.id), $out += '" selfPayId="', $line = 50, $out += $escape(arrange.selfPayId), 
                        $out += '" badStatus = "', $line = 50, $out += $escape(arrange.badStatus), $out += '" whichDay = ', 
                        $line = 50, $out += $escape(arrange.whichDay), $out += " ", $line = 50, 0 == index && ($out += 'rowspan="', 
                        $line = 50, $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"', 
                        $line = 50), $out += "> ", $line = 51, 0 == index && ($out += '<td rowspan="', $line = 51, 
                        $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 51), $out += " ", $line = 52, 0 == index && ($out += ' <td rowspan="', $line = 53, 
                        $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"> <span class="nameType">', 
                        $line = 54, $out += $escape(arrange.selfPay.name), $out += "</span> </td> ", $line = 56), 
                        $out += " <td> ", $line = 58, null != arrange.selfPayItem ? ($out += " ", $line = 59, 
                        null != arrange.selfPayItem && ($out += " ", $line = 60, $out += $escape(arrange.selfPayItem.name), 
                        $out += " ", $line = 61), $out += " ", $line = 62) : ($out += ' <input name="selfPayItemName" value="" type="text" ', 
                        $line = 63, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 63), 
                        $out += '><input name="selfPayItemId" type="hidden"> ', $line = 64), $out += ' </td> <td> <input type="text" name="marketPrice" value="', 
                        $line = 68, $out += $escape(arrange.realMarketPrice), $out += '" class="w-50" ', 
                        $line = 68, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 68), 
                        $out += '/></td> <td><input name="needCount" value="', $line = 70, $out += $escape(arrange.needIncomeCount), 
                        $out += '" type="text" class="w-50" ', $line = 70, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 70), $out += '></td> <td><span class="needInReduceMoney"></span></td> <td>', 
                        $line = 74, 1 == arrange.badStatus ? ($out += '<span class="needIncome F-float F-money"></span>', 
                        $line = 74) : ($out += '<span class="needIncome F-float F-money"></span>', $line = 74), 
                        $out += " </td> <td>", $line = 77, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 77, $out += $escape(arrange.realGetMoney), $out += "</span>", $line = 77) : ($out += '<input type="text" class="F-float F-money w-80" name="realGetMoney" value="', 
                        $line = 77, $out += $escape(arrange.realGetMoney), $out += '" ', $line = 77, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 77), $out += "/>", $line = 77), $out += " </td> <td> ", $line = 82, -1 == tripPlan.billStatus ? ($out += " ", 
                        $line = 83, 1 == arrange.badStatus ? ($out += ' <span class="price F-float F-money">', 
                        $line = 84, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 85) : ($out += ' <span class="price F-float F-money">', 
                        $line = 86, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 87), 
                        $out += ' <input type="hidden" name="price" value="', $line = 88, $out += $escape(arrange.realPrice), 
                        $out += '"/> ', $line = 89) : ($out += ' <input type="text" name="price" value="', 
                        $line = 90, $out += $escape(arrange.realPrice), $out += '" class="w-50" ', $line = 90, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 90), $out += "/> ", 
                        $line = 91), $out += " </td> <td>", $line = 96, 1 == arrange.badStatus ? ($out += " <span class='F-floatF-count'>", 
                        $line = 97, $out += $escape(arrange.memberCount), $out += "</span>", $line = 97) : ($out += '<input class="w-50" type="text" name="realCount" class="F-floatF-count" ', 
                        $line = 97, null != arrange.billUpdateTime ? ($out += 'value="', $line = 97, $out += $escape(arrange.realCount), 
                        $out += '"', $line = 97) : ($out += 'value="', $line = 97, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 97), $out += ' maxlength="5" ', $line = 97, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 97), $out += "/>", $line = 97), $out += '<input type="hidden" name="memberCount" value="', 
                        $line = 97, $out += $escape(arrange.memberCount), $out += '" ', $line = 97, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 97), $out += " /></td> <td>", $line = 99, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 99, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 99) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                        $line = 99, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 99, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 99), $out += "/>", 
                        $line = 99), $out += ' </td> <td><span class="needPayMoney F-float F-money" >', 
                        $line = 102, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += '</span><input type="hidden" class="selfMoney"></td> <td><span class="F-float F-money">', 
                        $line = 104, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex">', 
                        $line = 106, 1 == arrange.badStatus ? ($out += " <span> ", $line = 108, 0 == arrange.realPayType ? ($out += " 现金 ", 
                        $line = 110) : 1 == arrange.realPayType ? ($out += " 刷卡 ", $line = 112) : 2 == arrange.realPayType && ($out += " 签单 ", 
                        $line = 114), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 117, 
                        2 == arrange.realPayType ? ($line = 117, $out += $escape(arrange.realSignMoney), 
                        $line = 117) : ($line = 117, $out += $escape(arrange.realGuidePayMoney), $line = 117), 
                        $out += "</span>", $line = 117) : ($out += ' <select name="payType" ', $line = 118, 
                        1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 118), $out += '> <option value="0" ', 
                        $line = 119, 0 == arrange.realPayType && ($out += 'selected="selected"', $line = 119), 
                        $out += '>现金</option> <option value="1" ', $line = 120, 1 == arrange.realPayType && ($out += 'selected="selected"', 
                        $line = 120), $out += '>刷卡</option> <option value="2" ', $line = 121, 2 == arrange.realPayType && ($out += 'selected="selected"', 
                        $line = 121), $out += '>签单</option> </select> &nbsp; <input type="text" class="F-float F-money w-80" name="realGuidePayMoney" ', 
                        $line = 125, 2 == arrange.realPayType ? ($out += 'value="', $line = 125, $out += $escape(arrange.realSignMoney), 
                        $out += '"', $line = 125) : ($line = 125, null != arrange.billUpdateTime ? ($out += 'value="', 
                        $line = 125, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 125) : ($out += 'value="', 
                        $line = 125, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 125), 
                        $out += ' old="', $line = 125, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                        $line = 125), $out += " ", $line = 125, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                        $line = 125), $out += "/>", $line = 125), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 127, $out += $escape(arrange.payedMoney), $out += '" ', $line = 127, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 127), $out += ' /> <input type="hidden" name="guidePayMoney" value="', $line = 128, 
                        $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 128, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 128), $out += " /> </div> </td> <td>", $line = 134, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 135, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 136) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 138), $out += " </td> <td>", 
                        $line = 141, 1 == arrange.badStatus ? ($out += '<span class="customerRebateMoney F-float F-money">', 
                        $line = 141, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 141) : ($out += '<span class="customerRebateMoney">', 
                        $line = 141, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 141), 
                        $out += "</td> <td>", $line = 143, 1 == arrange.badStatus ? ($out += "<span>", $line = 143, 
                        $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), $out += "</span>", 
                        $line = 143) : ($out += '<input class="w-50" type="text" name="travelAgencyRate" value="', 
                        $line = 143, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += '" maxlength="5" ', $line = 143, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 143), $out += " />", $line = 143), $out += " </td> <td> ", $line = 147, 
                        1 == arrange.badStatus ? ($out += ' <span class="F-float F-money"> ', $line = 149, 
                        $out += $escape(arrange.travelAgencyRebateMoney), $out += " </span> ", $line = 151) : ($out += ' <input name="travelAgencyRebateMoney" value="', 
                        $line = 152, $out += $escape(arrange.travelAgencyRebateMoney), $out += '" type="text" class="w-80" ', 
                        $line = 153, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 153), 
                        $out += "/> ", $line = 154), $out += " </td> <td>", $line = 158, 1 == arrange.badStatus ? ($out += "<span>", 
                        $line = 158, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += "</span>", 
                        $line = 158) : ($out += '<input class="w-50" type="text" name="guideRate" value="', 
                        $line = 158, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += '" maxlength="5" ', 
                        $line = 159, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 159), 
                        $out += "/>", $line = 159), $out += " </td> <td> ", $line = 163, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money"> ', 
                        $line = 165, $out += $escape(arrange.guideRebateMoney), $out += " </span> ", $line = 167) : ($out += ' <input name="guideRebateMoney" value="', 
                        $line = 168, $out += $escape(arrange.guideRebateMoney), $out += '" type="text" class="w-80" ', 
                        $line = 169, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 169), 
                        $out += "/> ", $line = 170), $out += ' </td> <td> <input name="billRemark" value="', 
                        $line = 174, $out += $escape(arrange.billRemark), $out += '" maxlength="1000" ', 
                        $line = 174, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 174), 
                        $out += "/> </td> <td> ", $line = 178, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", 
                        $line = 180) : ($out += " 已对账 ", $line = 182), $out += " &nbsp;&nbsp; ", $line = 184, 
                        0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-selfArrDel">删除</a> ', 
                        $line = 186) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 188), $out += " </td> </tr> ", 
                        $line = 191), $out += " ", $line = 192;
                    }), $out += " ", $line = 193;
                }), $out += " ", $line = 194), $out += " ", $line = 195;
            }), $out += " </tbody> </table> </div> ", $line = 200, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 204, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 204), $out += ' type="text" style="width:30%;" value="', $line = 204, remarkArrangeList.selfRemark.length > 0 && ($line = 204, 
            $out += $escape(remarkArrangeList.selfRemark[0].opCheckRemark), $line = 204), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 207, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 207), $out += ' type="text" style="width:30%;" value="', $line = 207, remarkArrangeList.selfRemark.length > 0 && ($line = 207, 
            $out += $escape(remarkArrangeList.selfRemark[0].financeCheckRemark), $line = 207), 
            $out += '" /> </div> </div> ', $line = 210), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 自费安排\r\n        <a href="javascript:void(0)" class="T-addSelf">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table table-striped table-bordered table-hover w-1400">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="16">消费</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>自费商家</th>\r\n          <th class="th-border"><span class="necessary">*</span>项目</th>\r\n          <th class="th-border"><span class="necessary">*</span>单价</th>\r\n          <th class="th-border"><span class="necessary">*</span>应收数量</th>\r\n          <th class="th-border">应收优惠</th>\r\n          <th class="th-border">应收</th>\r\n          <th class="th-border">现收</th>\r\n          <th class="th-border"><span class="necessary">*</span>底价</th>\r\n          <th class="th-border"><span class="necessary">*</span>应付数量</th>\r\n          <th class="th-border">优惠</th>\r\n          <th class="th-border">应付</th>\r\n          <th class="th-border">已付</th>\r\n          <th class="th-border">导付</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border">人数返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-selfPay">\r\n        {{each dayList as day}}\r\n        {{if day.selfPayArrange != null}}\r\n        {{each day.selfPayArrange as arrangeList}}\r\n        {{each arrangeList.selfPayArrangeList as arrange index}}\r\n        {{if arrange != null}}\r\n        <tr selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" badStatus = "{{arrange.badStatus}}" whichDay = {{arrange.whichDay}} {{if index == 0}}rowspan="{{arrangeList.selfPayArrangeList.length}}"{{/if}}>\r\n                {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                {{if index == 0 }}\r\n                    <td rowspan="{{arrangeList.selfPayArrangeList.length}}">\r\n                        <span class="nameType">{{arrange.selfPay.name}}</span>\r\n                    </td>\r\n                {{/if}}\r\n                <td>\r\n                {{if arrange.selfPayItem != null}}\r\n                    {{if arrange.selfPayItem != null}}\r\n                        {{arrange.selfPayItem.name}}\r\n                    {{/if}}\r\n                {{else}}\r\n                <input name="selfPayItemName" value="" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}><input name="selfPayItemId" type="hidden">\r\n                {{/if}}\r\n                </td>\r\n                <td>\r\n                \r\n                <input type="text" name="marketPrice" value="{{arrange.realMarketPrice}}" class="w-50" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><input name="needCount" value="{{arrange.needIncomeCount}}" type="text" class="w-50" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}></td>\r\n    \r\n                 <td><span class="needInReduceMoney"></span></td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="needIncome F-float F-money"></span>{{else}}<span class="needIncome F-float F-money"></span>{{/if}}\r\n                </td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGetMoney}}</span>{{else}}<input type="text" class="F-float F-money w-80" name="realGetMoney" value="{{arrange.realGetMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n               \r\n                \r\n                <td>\r\n                {{if tripPlan.billStatus == -1}}\r\n                    {{if arrange.badStatus == 1}}\r\n                        <span class="price F-float F-money">{{arrange.realPrice}}</span>\r\n                    {{else}}\r\n                        <span class="price F-float F-money">{{arrange.realPrice}}</span>\r\n                    {{/if}}\r\n                    <input type="hidden" name="price" value="{{arrange.realPrice}}"/>\r\n                {{else}}\r\n                    <input type="text" name="price" value="{{arrange.realPrice}}" class="w-50" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{/if}}\r\n                </td>\r\n                \r\n                \r\n                \r\n                <td>{{if arrange.badStatus == 1}}\r\n                <span class=\'F-floatF-count\'>{{arrange.memberCount}}</span>{{else}}<input class="w-50" type="text" name="realCount" class="F-floatF-count" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}<input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n                \r\n                <td><span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                \r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                \r\n                <td><div  class="inline-flex">{{if arrange.badStatus == 1}}\r\n                <span>\r\n                    {{if arrange.realPayType == 0}}\r\n                        现金\r\n                        {{else if arrange.realPayType == 1}}\r\n                        刷卡\r\n                        {{else if arrange.realPayType == 2}}\r\n                        签单\r\n                    {{/if}}\r\n                </span>\r\n                &nbsp;\r\n                <span class="F-float F-money">{{if arrange.realPayType == 2}}{{arrange.realSignMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n                <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                    <option value="0" {{if arrange.realPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                    <option value="1" {{if arrange.realPayType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                    <option value="2" {{if arrange.realPayType == 2}}selected="selected"{{/if}}>签单</option>\r\n                </select>\r\n                &nbsp;\r\n                <input type="text" class="F-float F-money w-80" name="realGuidePayMoney" \r\n                {{if arrange.realPayType == 2}}value="{{arrange.realSignMoney}}"{{else}}{{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11"  {{/if}} {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>{{/if}}\r\n                    \r\n                    <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                    <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                    </div>\r\n                    </td>\r\n                \r\n                \r\n                \r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span class="customerRebateMoney F-float F-money">{{arrange.customerRebateMoney}}</span>{{else}}<span class="customerRebateMoney">{{arrange.customerRebateMoney}}</span>{{/if}}</td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<input class="w-50" type="text" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                    </td>\r\n                \r\n                <td>\r\n                    {{if arrange.badStatus == 1}}\r\n                        <span class="F-float F-money">\r\n                            {{arrange.travelAgencyRebateMoney}}\r\n                        </span>\r\n                    {{else}}\r\n                        <input name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" type="text" class="w-80"\r\n                            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                    {{/if}}\r\n                    \r\n                </td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRate*100 | parseInt}}</span>{{else}}<input class="w-50" type="text" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" maxlength="5"\r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n                \r\n                <td>\r\n                    {{if arrange.badStatus == 1}}\r\n                        <span class="F-float F-money">\r\n                            {{arrange.guideRebateMoney}}\r\n                        </span>\r\n                    {{else}} \r\n                        <input name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" type="text" class="w-80"\r\n                            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td>\r\n                    <input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                </td>\r\n                \r\n                <td>\r\n                    {{if arrange.isConfirmAccount == 0}}\r\n                        未对账\r\n                    {{else}}\r\n                        已对账\r\n                    {{/if}}\r\n                    &nbsp;&nbsp;\r\n                    {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                        <a href="javascript:void(0)" class="T-selfArrDel">删除</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">删除</span>\r\n                    {{/if}}\r\n                </td>                             \r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});