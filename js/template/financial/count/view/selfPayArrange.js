/*TMODJS:{"debug":true,"version":134,"md5":"5e93307c69c1b257895e7b998c1e8a63"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/selfPayArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 自费安排 <a href="javascript:void(0)" class="T-addSelf"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border" colspan="15">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>自费商家</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>应收数量</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border"><span class="necessary">*</span>底价</th> <th class="th-border"><span class="necessary">*</span>应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ', 
            $line = 44, $each(dayList, function(day) {
                $out += " ", $line = 45, null != day.selfPayArrange && ($out += " ", $line = 46, 
                $each(day.selfPayArrange, function(arrangeList) {
                    $out += " ", $line = 47, $each(arrangeList.selfPayArrangeList, function(arrange, index) {
                        $out += " ", $line = 48, null != arrange && ($out += ' <tr selfPayArrangeId="', 
                        $line = 49, $out += $escape(arrange.id), $out += '" selfPayId="', $line = 49, $out += $escape(arrange.selfPayId), 
                        $out += '" badStatus = "', $line = 49, $out += $escape(arrange.badStatus), $out += '" whichDay = ', 
                        $line = 49, $out += $escape(arrange.whichDay), $out += "> ", $line = 50, 0 == index && ($out += '<td rowspan="', 
                        $line = 50, $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 50), $out += " ", $line = 51, 0 == index && ($out += '<td rowspan="', $line = 51, 
                        $out += $escape(arrangeList.selfPayArrangeList.length), $out += '">', $line = 51, 
                        $out += $escape(arrange.selfPay.name), $out += "</td>", $line = 51), $out += " <td>", 
                        $line = 52, null != arrange.selfPayItem ? ($line = 52, null != arrange.selfPayItem && ($line = 52, 
                        $out += $escape(arrange.selfPayItem.name), $line = 52), $out += " ", $line = 53) : ($out += '<input name="selfPayItemName" value="" type="text" ', 
                        $line = 53, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 53), 
                        $out += '><input name="selfPayItemId" type="hidden">', $line = 53), $out += "</td> <td> ", 
                        $line = 55, 1 == arrange.badStatus ? ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 55, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 55) : ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 55, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 55), 
                        $out += ' <input type="hidden" name="marketPrice" value="', $line = 56, $out += $escape(arrange.marketPrice), 
                        $out += '"/></td> <td><span class="needCount"></span></td> <td>', $line = 60, 1 == arrange.badStatus ? ($out += '<span class="needIncome F-float F-money"></span>', 
                        $line = 60) : ($out += '<span class="needIncome F-float F-money"></span>', $line = 60), 
                        $out += " </td> <td>", $line = 63, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 63, $out += $escape(arrange.realGetMoney), $out += "</span>", $line = 63) : ($out += '<input type="text" class="F-float F-money" name="realGetMoney" value="', 
                        $line = 63, $out += $escape(arrange.realGetMoney), $out += '" style="width:60px;" ', 
                        $line = 63, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 63), 
                        $out += "/>", $line = 63), $out += " </td> <td>", $line = 66, 1 == arrange.badStatus ? ($out += '<span class="price F-float F-money">', 
                        $line = 66, $out += $escape(arrange.price), $out += "</span>", $line = 66) : ($out += '<span class="price F-float F-money">', 
                        $line = 66, $out += $escape(arrange.price), $out += "</span>", $line = 66), $out += ' <input type="hidden" name="price" value="', 
                        $line = 67, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 71, 
                        1 == arrange.badStatus ? ($out += " <span class='F-floatF-count'>", $line = 72, 
                        $out += $escape(arrange.memberCount), $out += "</span>", $line = 72) : ($out += '<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" ', 
                        $line = 72, null != arrange.billUpdateTime ? ($out += 'value="', $line = 72, $out += $escape(arrange.realCount), 
                        $out += '"', $line = 72) : ($out += 'value="', $line = 72, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 72), $out += ' maxlength="5"/>', $line = 72), $out += '<input type="hidden" name="memberCount" value="', 
                        $line = 72, $out += $escape(arrange.memberCount), $out += '" ', $line = 72, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 72), $out += " /></td> <td>", $line = 74, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 74, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 74) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                        $line = 74, $out += $escape(arrange.realReduceMoney), $out += '" style="width:60px;" ', 
                        $line = 74, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 74), 
                        $out += "/>", $line = 74), $out += ' </td> <td><span class="needPayMoney F-float F-money" >', 
                        $line = 77, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += '</span><input type="hidden" class="selfMoney"></td> <td><span class="F-float F-money">', 
                        $line = 79, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 81, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 81, 
                        $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 81) : ($out += '<input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" ', 
                        $line = 81, null != arrange.billUpdateTime ? ($out += 'value="', $line = 81, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '"', $line = 81) : ($out += 'value="', $line = 81, $out += $escape(arrange.guidePayMoney), 
                        $out += '" ', $line = 81), $out += ' old="', $line = 81, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '" maxlength="11" ', $line = 81, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 81), $out += " />", $line = 81), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 83, $out += $escape(arrange.payedMoney), $out += '" ', $line = 83, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 83), $out += ' /> <input type="hidden" name="guidePayMoney" value="', $line = 84, 
                        $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 84, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 84), $out += " /> </td> <td>", $line = 89, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 90, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 91) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 93), $out += " </td> <td>", 
                        $line = 96, 1 == arrange.badStatus ? ($out += '<span class="customerRebateMoney F-float F-money">', 
                        $line = 96, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 96) : ($out += '<span class="customerRebateMoney">', 
                        $line = 96, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 96), 
                        $out += "</td> <td>", $line = 98, 1 == arrange.badStatus ? ($out += "<span>", $line = 98, 
                        $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), $out += "</span>", 
                        $line = 98) : ($out += '<input style="width:90px;" type="text" name="travelAgencyRate" value="', 
                        $line = 98, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += '" old="', $line = 98, $out += $escape(arrange.travelAgencyRate), $out += '" maxlength="5" ', 
                        $line = 98, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 98), 
                        $out += " />", $line = 98), $out += " </td> <td>", $line = 101, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 101, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 101) : ($out += '<span class="travelAgencyRebateMoney F-float F-money">', 
                        $line = 101, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 101), $out += ' <input type="hidden" name="travelAgencyRebateMoney" value="', 
                        $line = 102, $out += $escape(arrange.travelAgencyRebateMoney), $out += '" ', $line = 102, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 102), $out += " /></td> <td>", 
                        $line = 104, 1 == arrange.badStatus ? ($out += "<span>", $line = 104, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), 
                        $out += "</span>", $line = 104) : ($out += '<input style="width:90px;" type="text" name="guideRate" value="', 
                        $line = 104, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += '" old="', 
                        $line = 104, $out += $escape(arrange.guideRate), $out += '" maxlength="5" ', $line = 105, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 105), $out += "/>", 
                        $line = 105), $out += " </td> <td>", $line = 108, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 108, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 108) : ($out += ' <span class="guideRebateMoney F-float F-money">', 
                        $line = 108, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 108), 
                        $out += ' <input type="hidden" name="guideRebateMoney" value="', $line = 109, $out += $escape(arrange.guideRebateMoney), 
                        $out += '" ', $line = 109, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 109), $out += " /></td> <td>", $line = 111, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 111, null != arrange.selfPayItem ? ($line = 111, $out += $escape(arrange.selfPayItem.remark), 
                        $line = 111) : ($line = 111, $out += $escape(arrange.billRemark), $line = 111), 
                        $out += '" maxlength="1000" ', $line = 111, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 111), $out += "/>", $line = 111) : ($line = 111, null != arrange.selfPayItem ? ($line = 111, 
                        $out += $escape(arrange.selfPayItem.remark), $line = 111) : ($line = 111, $out += $escape(arrange.billRemark), 
                        $line = 111), $line = 111), $out += "</td> <td>", $line = 113, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 113) : ($out += "已对账", $line = 113), $out += "</td> </tr> ", $line = 115), 
                        $out += " ", $line = 116;
                    }), $out += " ", $line = 117;
                }), $out += " ", $line = 118), $out += " ", $line = 119;
            }), $out += " </tbody> </table> ", $line = 123, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 127, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 127), $out += ' type="text" style="width:30%;" value="', $line = 127, remarkArrangeList.selfRemark.length > 0 && ($line = 127, 
            $out += $escape(remarkArrangeList.selfRemark[0].opCheckRemark), $line = 127), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 130, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 130), $out += ' type="text" style="width:30%;" value="', $line = 130, remarkArrangeList.selfRemark.length > 0 && ($line = 130, 
            $out += $escape(remarkArrangeList.selfRemark[0].financeCheckRemark), $line = 130), 
            $out += '" /> </div> </div> ', $line = 133), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 自费安排\r\n        <a href="javascript:void(0)" class="T-addSelf">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table overflow-table table-striped table-bordered table-hover ">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border" colspan="15">消费</th>\r\n        <th class="th-border" colspan="2">社佣</th>\r\n        <th class="th-border" colspan="2">导佣</th>\r\n        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n        <th class="th-border" rowspan="2">导游报账备注</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    <tr>\r\n      <th class="th-border"><span class="necessary">*</span>时间</th>\r\n      <th class="th-border"><span class="necessary">*</span>自费商家</th>\r\n      <th class="th-border"><span class="necessary">*</span>项目</th>\r\n      <th class="th-border"><span class="necessary">*</span>单价</th>\r\n      <th class="th-border"><span class="necessary">*</span>应收数量</th>\r\n      <th class="th-border">应收</th>\r\n      <th class="th-border">现收</th>\r\n      <th class="th-border"><span class="necessary">*</span>底价</th>\r\n      <th class="th-border"><span class="necessary">*</span>应付数量</th>\r\n      <th class="th-border">优惠</th>\r\n      <th class="th-border">应付</th>\r\n      <th class="th-border">已付</th>\r\n      <th class="th-border">导付</th>\r\n      <th class="th-border">单据</th>\r\n      <th class="th-border">人数返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n    </tr></thead>\r\n    <tbody class="T-count-selfPay">\r\n    {{each dayList as day}}\r\n    {{if day.selfPayArrange != null}}\r\n    {{each day.selfPayArrange as arrangeList}}\r\n    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" badStatus = "{{arrange.badStatus}}" whichDay = {{arrange.whichDay}}>\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n            <td>{{if arrange.selfPayItem != null}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.name}}{{/if}}\r\n                {{else}}<input name="selfPayItemName" value="" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}><input name="selfPayItemId" type="hidden">{{/if}}</td>\r\n            <td>\r\n            {{if arrange.badStatus == 1}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{else}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{/if}}\r\n            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n            \r\n            <td><span class="needCount"></span></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="needIncome F-float F-money"></span>{{else}}<span class="needIncome F-float F-money"></span>{{/if}}\r\n            </td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGetMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realGetMoney" value="{{arrange.realGetMoney}}" style="width:60px;" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n           \r\n            <td>{{if arrange.badStatus == 1}}<span class="price F-float F-money">{{arrange.price}}</span>{{else}}<span class="price F-float F-money">{{arrange.price}}</span>{{/if}}\r\n            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n            \r\n            \r\n            \r\n            <td>{{if arrange.badStatus == 1}}\r\n            <span class=\'F-floatF-count\'>{{arrange.memberCount}}</span>{{else}}<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/>{{/if}}<input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" style="width:60px;" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n            \r\n            <td><span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n            \r\n            <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}<input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" {{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                \r\n                <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                </td>\r\n            \r\n            \r\n            \r\n            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}\r\n            </td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span class="customerRebateMoney F-float F-money">{{arrange.customerRebateMoney}}</span>{{else}}<span class="customerRebateMoney">{{arrange.customerRebateMoney}}</span>{{/if}}</td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                </td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"\r\n            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.guideRebateMoney}}</span>{{else}} <span class="guideRebateMoney F-float F-money">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if editStatus == 1}}<input name="billRemark" value="{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}</td>\r\n            \r\n            <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>                             \r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});