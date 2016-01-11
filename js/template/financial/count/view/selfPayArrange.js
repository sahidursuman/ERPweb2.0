/*TMODJS:{"debug":true,"version":87,"md5":"97291c8f2b8d35ccd610cdad4f9a3842"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/selfPayArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, tripPlan = $data.tripPlan, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 自费安排 <a href="javascript:void(0)" class="T-addSelf"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="14">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ', 
            $line = 20, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 20), $out += ' </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>自费商家</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>底价</th> <th class="th-border">人数返佣</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应收</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">现收</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ', 
            $line = 43, $each(dayList, function(day) {
                $out += " ", $line = 44, null != day.selfPayArrange && ($out += " ", $line = 45, 
                $each(day.selfPayArrange, function(arrangeList) {
                    $out += " ", $line = 46, $each(arrangeList.selfPayArrangeList, function(arrange, index) {
                        $out += " ", $line = 47, null != arrange && ($out += ' <tr selfPayArrangeId="', 
                        $line = 48, $out += $escape(arrange.id), $out += '" selfPayId="', $line = 48, $out += $escape(arrange.selfPayId), 
                        $out += '" badStatus = "', $line = 48, $out += $escape(arrange.badStatus), $out += '" whichDay = ', 
                        $line = 48, $out += $escape(arrange.whichDay), $out += "> ", $line = 49, 0 == index && ($out += '<td rowspan="', 
                        $line = 49, $out += $escape(arrangeList.selfPayArrangeList.length), $out += '">第', 
                        $line = 49, $out += $escape(arrange.whichDay), $out += "天</td>", $line = 49), $out += " ", 
                        $line = 50, 0 == index && ($out += '<td rowspan="', $line = 50, $out += $escape(arrangeList.selfPayArrangeList.length), 
                        $out += '">', $line = 50, $out += $escape(arrange.selfPay.name), $out += "</td>", 
                        $line = 50), $out += " <td>", $line = 51, null != arrange.selfPayItem ? ($line = 51, 
                        null != arrange.selfPayItem && ($line = 51, $out += $escape(arrange.selfPayItem.name), 
                        $line = 51), $line = 51) : ($out += '<input name="selfPayItemName" value="" type="text"><input name="selfPayItemId" type="hidden">', 
                        $line = 51), $out += "</td> <td> ", $line = 53, 1 == arrange.badStatus ? ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 53, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 53) : ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 53, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 53), 
                        $out += ' <input type="hidden" name="marketPrice" value="', $line = 54, $out += $escape(arrange.marketPrice), 
                        $out += '"/></td> <td>', $line = 55, 1 == arrange.badStatus ? ($out += '<span class="price F-float F-money">', 
                        $line = 55, $out += $escape(arrange.price), $out += "</span>", $line = 55) : ($out += '<span class="price F-float F-money">', 
                        $line = 55, $out += $escape(arrange.price), $out += "</span>", $line = 55), $out += ' <input type="hidden" name="price" value="', 
                        $line = 56, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 57, 
                        1 == arrange.badStatus ? ($out += '<span class="customerRebateMoney F-float F-money">', 
                        $line = 57, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 57) : ($out += '<span class="customerRebateMoney">', 
                        $line = 57, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 57), 
                        $out += "</td> <td>", $line = 58, 1 == arrange.badStatus ? ($out += " <span class='F-floatF-count'>", 
                        $line = 59, $out += $escape(arrange.memberCount), $out += "</span>", $line = 59) : ($out += '<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" ', 
                        $line = 59, null != arrange.billUpdateTime ? ($out += 'value="', $line = 59, $out += $escape(arrange.realCount), 
                        $out += '"', $line = 59) : ($out += "value=0", $line = 59), $out += ' maxlength="5"/>', 
                        $line = 59), $out += '<input type="hidden" name="memberCount" value="', $line = 59, 
                        $out += $escape(arrange.memberCount), $out += '" ', $line = 59, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 59), $out += " /></td> <td>", $line = 60, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 60, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 60) : ($out += '<input type="text" name="realrealReduceMoney" class="F-float F-money" value="', 
                        $line = 60, $out += $escape(arrange.realReduceMoney), $out += '" style="width:60px;"/>', 
                        $line = 60), $out += " </td> <td>", $line = 62, 1 == arrange.badStatus ? ($out += '<span class="needIncome F-float F-money"></span>', 
                        $line = 62) : ($out += '<span class="needIncome F-float F-money"></span>', $line = 62), 
                        $out += ' </td> <td><span class="needPayMoney F-float F-money" >', $line = 64, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), 
                        $out += '</span><input type="hidden" class="selfMoney"></td> <td><span class="F-float F-money">', 
                        $line = 65, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 66, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 66, 
                        $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 66) : ($out += '<input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" ', 
                        $line = 66, null != arrange.billUpdateTime ? ($out += 'value="', $line = 66, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '"', $line = 66) : ($out += "value=0 ", $line = 66), $out += ' old="', $line = 66, 
                        $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', $line = 66, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 66), $out += " />", 
                        $line = 66), $out += ' <input type="hidden" name="payedMoney" value="', $line = 68, 
                        $out += $escape(arrange.payedMoney), $out += '" ', $line = 68, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 68), $out += ' /> <input type="hidden" name="guidePayMoney" value="', $line = 69, 
                        $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 69, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 69), $out += " /> </td> <td>", $line = 71, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 71, $out += $escape(arrange.realGetMoney), $out += "</span>", $line = 71) : ($out += '<input type="text" class="F-float F-money" name="realGetMoney" value="', 
                        $line = 71, $out += $escape(arrange.realGetMoney), $out += '" style="width:60px;"/>', 
                        $line = 71), $out += " </td> <td>", $line = 73, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 74, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 75) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 77), $out += " </td> <td>", 
                        $line = 79, 1 == arrange.badStatus ? ($out += "<span>", $line = 79, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += "</span>", $line = 79) : ($out += '<input style="width:90px;" type="text" name="travelAgencyRate" value="', 
                        $line = 79, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += '" old="', $line = 79, $out += $escape(arrange.travelAgencyRate), $out += '" maxlength="5" ', 
                        $line = 79, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 79), 
                        $out += " />", $line = 79), $out += " </td> <td>", $line = 81, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 81, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 81) : ($out += '<span class="travelAgencyRebateMoney F-float F-money">', 
                        $line = 81, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 81), $out += ' <input type="hidden" name="travelAgencyRebateMoney" value="', 
                        $line = 82, $out += $escape(arrange.travelAgencyRebateMoney), $out += '" ', $line = 82, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 82), $out += " /></td> <td>", 
                        $line = 83, 1 == arrange.badStatus ? ($out += "<span>", $line = 83, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), 
                        $out += "</span>", $line = 83) : ($out += '<input style="width:90px;" type="text" name="guideRate" value="', 
                        $line = 83, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += '" old="', 
                        $line = 83, $out += $escape(arrange.guideRate), $out += '" maxlength="5"/>', $line = 83), 
                        $out += " </td> <td>", $line = 85, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 85, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 85) : ($out += ' <span class="guideRebateMoney F-float F-money">', 
                        $line = 85, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 85), 
                        $out += ' <input type="hidden" name="guideRebateMoney" value="', $line = 87, $out += $escape(arrange.guideRebateMoney), 
                        $out += '" ', $line = 87, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 87), $out += ' /></td> <!-- <td> <span class="guideRate">', $line = 89, 
                        $out += $escape(arrange.customerRebateMoney), $out += '</span> <input type="hidden" name="guideRate" value="', 
                        $line = 90, $out += $escape(arrange.customerRebateMoney), $out += '" ', $line = 90, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 90), $out += " /></td> ", 
                        $line = 91, 0 == index && ($out += '<td rowspan="', $line = 91, $out += $escape(arrangeList.selfPayArrangeList.length), 
                        $out += '">', $line = 91, $out += $escape(arrange.customerRebateMoney * tripPlan.touristAdultCount), 
                        $out += "</td>", $line = 91), $out += " --> <td>", $line = 92, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 92, null != arrange.selfPayItem ? ($line = 92, $out += $escape(arrange.selfPayItem.remark), 
                        $line = 92) : ($line = 92, $out += $escape(arrange.billRemark), $line = 92), $out += '" maxlength="1000" />', 
                        $line = 92) : ($line = 92, null != arrange.selfPayItem ? ($line = 92, $out += $escape(arrange.selfPayItem.remark), 
                        $line = 92) : ($line = 92, $out += $escape(arrange.billRemark), $line = 92), $line = 92), 
                        $out += "</td> ", $line = 93, 2 == tripPlan.billStatus && ($out += "<td>", $line = 93, 
                        0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 93) : ($out += "已对账", $line = 93), 
                        $out += "</td>", $line = 93), $out += " </tr> ", $line = 95), $out += " ", $line = 96;
                    }), $out += " ", $line = 97;
                }), $out += " ", $line = 98), $out += " ", $line = 99;
            }), $out += " </tbody> </table> ", $line = 103, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 107, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 107), $out += ' type="text" style="width:30%;" value="', $line = 107, $out += $escape(remarkArrangeList.selfRemark[0].opCheckRemark), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 110, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 110), $out += ' type="text" style="width:30%;" value="', $line = 110, $out += $escape(remarkArrangeList.selfRemark[0].financeCheckRemark), 
            $out += '" /> </div> </div> ', $line = 113), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 自费安排\r\n        <a href="javascript:void(0)" class="T-addSelf">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border" colspan="14">消费</th>\r\n        <th class="th-border" colspan="2">社佣</th>\r\n        <th class="th-border" colspan="2">导佣</th>\r\n        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n        <th class="th-border" rowspan="2">导游报账备注</th>\r\n        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n    </tr>\r\n    <tr>\r\n      <th class="th-border"><span class="necessary">*</span>时间</th>\r\n      <th class="th-border"><span class="necessary">*</span>自费商家</th>\r\n      <th class="th-border"><span class="necessary">*</span>项目</th>\r\n      <th class="th-border"><span class="necessary">*</span>单价</th>\r\n      <th class="th-border"><span class="necessary">*</span>底价</th>\r\n      <th class="th-border">人数返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>数量</th>\r\n      <th class="th-border">优惠</th>\r\n      <th class="th-border">应收</th>\r\n      <th class="th-border">应付</th>\r\n      <th class="th-border">已付</th>\r\n      <th class="th-border">导付</th>\r\n      <th class="th-border">现收</th>\r\n      <th class="th-border">单据</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n    </tr></thead>\r\n    <tbody class="T-count-selfPay">\r\n    {{each dayList as day}}\r\n    {{if day.selfPayArrange != null}}\r\n    {{each day.selfPayArrange as arrangeList}}\r\n    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" badStatus = "{{arrange.badStatus}}" whichDay = {{arrange.whichDay}}>\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n            <td>{{if arrange.selfPayItem != null}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.name}}{{/if}}{{else}}<input name="selfPayItemName" value="" type="text"><input name="selfPayItemId" type="hidden">{{/if}}</td>\r\n            <td>\r\n            {{if arrange.badStatus == 1}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{else}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{/if}}\r\n            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="price F-float F-money">{{arrange.price}}</span>{{else}}<span class="price F-float F-money">{{arrange.price}}</span>{{/if}}\r\n            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="customerRebateMoney F-float F-money">{{arrange.customerRebateMoney}}</span>{{else}}<span class="customerRebateMoney">{{arrange.customerRebateMoney}}</span>{{/if}}</td>\r\n            <td>{{if arrange.badStatus == 1}}\r\n            <span class=\'F-floatF-count\'>{{arrange.memberCount}}</span>{{else}}<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value=0{{/if}} maxlength="5"/>{{/if}}<input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realrealReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" style="width:60px;"/>{{/if}}\r\n            </td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="needIncome F-float F-money"></span>{{else}}<span class="needIncome F-float F-money"></span>{{/if}}\r\n            </td>\r\n            <td><span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n            <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}<input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" {{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value=0 {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                \r\n                <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                </td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGetMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realGetMoney" value="{{arrange.realGetMoney}}" style="width:60px;"/>{{/if}}\r\n            </td>\r\n            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}\r\n            </td>\r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                </td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>{{/if}}\r\n            </td>\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.guideRebateMoney}}</span>{{else}} <span class="guideRebateMoney F-float F-money">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n               \r\n                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            <!-- <td>\r\n                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n            <td>{{if editStatus == 1}}<input name="billRemark" value="{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}" maxlength="1000" />{{else}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}</td>\r\n            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.selfRemark[0].opCheckRemark}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.selfRemark[0].financeCheckRemark}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});