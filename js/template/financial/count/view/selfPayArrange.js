/*TMODJS:{"debug":true,"version":159,"md5":"634270daa5cbd0f406c97d5685d2e26d"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/selfPayArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 自费安排 <a href="javascript:void(0)" class="T-addSelf"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border" colspan="16">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>自费商家</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>应收数量</th> <th class="th-border">应收优惠</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border"><span class="necessary">*</span>底价</th> <th class="th-border"><span class="necessary">*</span>应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ', 
            $line = 45, $each(dayList, function(day) {
                $out += " ", $line = 46, null != day.selfPayArrange && ($out += " ", $line = 47, 
                $each(day.selfPayArrange, function(arrangeList) {
                    $out += " ", $line = 48, $each(arrangeList.selfPayArrangeList, function(arrange, index) {
                        $out += " ", $line = 49, null != arrange && ($out += ' <tr selfPayArrangeId="', 
                        $line = 50, $out += $escape(arrange.id), $out += '" selfPayId="', $line = 50, $out += $escape(arrange.selfPayId), 
                        $out += '" badStatus = "', $line = 50, $out += $escape(arrange.badStatus), $out += '" whichDay = ', 
                        $line = 50, $out += $escape(arrange.whichDay), $out += "> ", $line = 51, 0 == index && ($out += '<td rowspan="', 
                        $line = 51, $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 51), $out += " ", $line = 52, 0 == index && ($out += '<td rowspan="', $line = 52, 
                        $out += $escape(arrangeList.selfPayArrangeList.length), $out += '">', $line = 52, 
                        $out += $escape(arrange.selfPay.name), $out += "</td>", $line = 52), $out += " <td>", 
                        $line = 53, null != arrange.selfPayItem ? ($line = 53, null != arrange.selfPayItem && ($line = 53, 
                        $out += $escape(arrange.selfPayItem.name), $line = 53), $out += " ", $line = 54) : ($out += '<input name="selfPayItemName" value="" type="text" ', 
                        $line = 54, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 54), 
                        $out += '><input name="selfPayItemId" type="hidden">', $line = 54), $out += "</td> <td> ", 
                        $line = 56, 1 == arrange.badStatus ? ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 56, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 56) : ($out += '<span class="marketPrice F-float F-money">', 
                        $line = 56, $out += $escape(arrange.marketPrice), $out += "</span>", $line = 56), 
                        $out += ' <input type="hidden" name="marketPrice" value="', $line = 57, $out += $escape(arrange.marketPrice), 
                        $out += '"/></td> <td><input name="needCount" value="', $line = 59, $out += $escape(arrange.needIncomeCount), 
                        $out += '" type="text"></td> <td><span class="needInReduceMoney"></span></td> <td>', 
                        $line = 63, 1 == arrange.badStatus ? ($out += '<span class="needIncome F-float F-money"></span>', 
                        $line = 63) : ($out += '<span class="needIncome F-float F-money"></span>', $line = 63), 
                        $out += " </td> <td>", $line = 66, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 66, $out += $escape(arrange.realGetMoney), $out += "</span>", $line = 66) : ($out += '<input type="text" class="F-float F-money" name="realGetMoney" value="', 
                        $line = 66, $out += $escape(arrange.realGetMoney), $out += '" style="width:60px;" ', 
                        $line = 66, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 66), 
                        $out += "/>", $line = 66), $out += " </td> <td>", $line = 69, 1 == arrange.badStatus ? ($out += '<span class="price F-float F-money">', 
                        $line = 69, $out += $escape(arrange.price), $out += "</span>", $line = 69) : ($out += '<span class="price F-float F-money">', 
                        $line = 69, $out += $escape(arrange.price), $out += "</span>", $line = 69), $out += ' <input type="hidden" name="price" value="', 
                        $line = 70, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 74, 
                        1 == arrange.badStatus ? ($out += " <span class='F-floatF-count'>", $line = 75, 
                        $out += $escape(arrange.memberCount), $out += "</span>", $line = 75) : ($out += '<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" ', 
                        $line = 75, null != arrange.billUpdateTime ? ($out += 'value="', $line = 75, $out += $escape(arrange.realCount), 
                        $out += '"', $line = 75) : ($out += 'value="', $line = 75, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 75), $out += ' maxlength="5"/>', $line = 75), $out += '<input type="hidden" name="memberCount" value="', 
                        $line = 75, $out += $escape(arrange.memberCount), $out += '" ', $line = 75, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 75), $out += " /></td> <td>", $line = 77, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 77, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 77) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                        $line = 77, $out += $escape(arrange.realReduceMoney), $out += '" style="width:60px;" ', 
                        $line = 77, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 77), 
                        $out += "/>", $line = 77), $out += ' </td> <td><span class="needPayMoney F-float F-money" >', 
                        $line = 80, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += '</span><input type="hidden" class="selfMoney"></td> <td><span class="F-float F-money">', 
                        $line = 82, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex col-xs-12">', 
                        $line = 84, 1 == arrange.badStatus ? ($out += " <span> ", $line = 86, 0 == arrange.payType ? ($out += " 现金 ", 
                        $line = 88) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 90) : 2 == arrange.payType && ($out += " 签单 ", 
                        $line = 92), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 95, 
                        2 == arrange.payType ? ($line = 95, $out += $escape(arrange.signMoney), $line = 95) : ($line = 95, 
                        $out += $escape(arrange.realGuidePayMoney), $line = 95), $out += "</span>", $line = 95) : ($out += ' <select name="payType"> <option value="0" ', 
                        $line = 97, 0 == arrange.payType && ($out += 'selected="selected"', $line = 97), 
                        $out += '>现金</option> <option value="1" ', $line = 98, 1 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 98), $out += '>刷卡</option> <option value="2" ', $line = 99, 2 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 99), $out += '>签单</option> </select> &nbsp; <input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" ', 
                        $line = 103, 2 == arrange.payType ? ($out += 'value="', $line = 103, $out += $escape(arrange.signMoney), 
                        $out += '"', $line = 103) : ($line = 103, null != arrange.billUpdateTime ? ($out += 'value="', 
                        $line = 103, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 103) : ($out += 'value="', 
                        $line = 103, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 103), 
                        $out += ' old="', $line = 103, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                        $line = 103, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 103), 
                        $out += " ", $line = 103), $out += "/>", $line = 103), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 105, $out += $escape(arrange.payedMoney), $out += '" ', $line = 105, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 105), $out += ' /> <input type="hidden" name="guidePayMoney" value="', $line = 106, 
                        $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 106, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 106), $out += " /> </div> </td> <td>", $line = 112, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 113, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 114) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 116), $out += " </td> <td>", 
                        $line = 119, 1 == arrange.badStatus ? ($out += '<span class="customerRebateMoney F-float F-money">', 
                        $line = 119, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 119) : ($out += '<span class="customerRebateMoney">', 
                        $line = 119, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 119), 
                        $out += "</td> <td>", $line = 121, 1 == arrange.badStatus ? ($out += "<span>", $line = 121, 
                        $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), $out += "</span>", 
                        $line = 121) : ($out += '<input style="width:90px;" type="text" name="travelAgencyRate" value="', 
                        $line = 121, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += '" old="', $line = 121, $out += $escape(arrange.travelAgencyRate), $out += '" maxlength="5" ', 
                        $line = 121, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 121), 
                        $out += " />", $line = 121), $out += " </td> <td>", $line = 124, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 124, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 124) : ($out += '<span class="travelAgencyRebateMoney F-float F-money">', 
                        $line = 124, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 124), $out += ' <input type="hidden" name="travelAgencyRebateMoney" value="', 
                        $line = 125, $out += $escape(arrange.travelAgencyRebateMoney), $out += '" ', $line = 125, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 125), $out += " /></td> <td>", 
                        $line = 127, 1 == arrange.badStatus ? ($out += "<span>", $line = 127, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), 
                        $out += "</span>", $line = 127) : ($out += '<input style="width:90px;" type="text" name="guideRate" value="', 
                        $line = 127, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += '" old="', 
                        $line = 127, $out += $escape(arrange.guideRate), $out += '" maxlength="5" ', $line = 128, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 128), $out += "/>", 
                        $line = 128), $out += " </td> <td>", $line = 131, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 131, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 131) : ($out += ' <span class="guideRebateMoney F-float F-money">', 
                        $line = 131, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 131), 
                        $out += ' <input type="hidden" name="guideRebateMoney" value="', $line = 132, $out += $escape(arrange.guideRebateMoney), 
                        $out += '" ', $line = 132, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 132), $out += " /></td> <td>", $line = 134, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 134, null != arrange.selfPayItem ? ($line = 134, $out += $escape(arrange.selfPayItem.remark), 
                        $line = 134) : ($line = 134, $out += $escape(arrange.billRemark), $line = 134), 
                        $out += '" maxlength="1000" ', $line = 134, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 134), $out += "/>", $line = 134) : ($line = 134, null != arrange.selfPayItem ? ($line = 134, 
                        $out += $escape(arrange.selfPayItem.remark), $line = 134) : ($line = 134, $out += $escape(arrange.billRemark), 
                        $line = 134), $line = 134), $out += "</td> <td>", $line = 136, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 136) : ($out += "已对账", $line = 136), $out += "</td> </tr> ", $line = 138), 
                        $out += " ", $line = 139;
                    }), $out += " ", $line = 140;
                }), $out += " ", $line = 141), $out += " ", $line = 142;
            }), $out += " </tbody> </table> ", $line = 146, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 150, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 150), $out += ' type="text" style="width:30%;" value="', $line = 150, remarkArrangeList.selfRemark.length > 0 && ($line = 150, 
            $out += $escape(remarkArrangeList.selfRemark[0].opCheckRemark), $line = 150), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 153, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 153), $out += ' type="text" style="width:30%;" value="', $line = 153, remarkArrangeList.selfRemark.length > 0 && ($line = 153, 
            $out += $escape(remarkArrangeList.selfRemark[0].financeCheckRemark), $line = 153), 
            $out += '" /> </div> </div> ', $line = 156), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 自费安排\r\n        <a href="javascript:void(0)" class="T-addSelf">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table overflow-table table-striped table-bordered table-hover ">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border" colspan="16">消费</th>\r\n        <th class="th-border" colspan="2">社佣</th>\r\n        <th class="th-border" colspan="2">导佣</th>\r\n        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n        <th class="th-border" rowspan="2">导游报账备注</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    <tr>\r\n      <th class="th-border"><span class="necessary">*</span>时间</th>\r\n      <th class="th-border"><span class="necessary">*</span>自费商家</th>\r\n      <th class="th-border"><span class="necessary">*</span>项目</th>\r\n      <th class="th-border"><span class="necessary">*</span>单价</th>\r\n      <th class="th-border"><span class="necessary">*</span>应收数量</th>\r\n      <th class="th-border">应收优惠</th>\r\n      <th class="th-border">应收</th>\r\n      <th class="th-border">现收</th>\r\n      <th class="th-border"><span class="necessary">*</span>底价</th>\r\n      <th class="th-border"><span class="necessary">*</span>应付数量</th>\r\n      <th class="th-border">优惠</th>\r\n      <th class="th-border">应付</th>\r\n      <th class="th-border">已付</th>\r\n      <th class="th-border">导付</th>\r\n      <th class="th-border">单据</th>\r\n      <th class="th-border">人数返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n      <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n      <th class="th-border">返佣</th>\r\n    </tr></thead>\r\n    <tbody class="T-count-selfPay">\r\n    {{each dayList as day}}\r\n    {{if day.selfPayArrange != null}}\r\n    {{each day.selfPayArrange as arrangeList}}\r\n    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" badStatus = "{{arrange.badStatus}}" whichDay = {{arrange.whichDay}}>\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n            <td>{{if arrange.selfPayItem != null}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.name}}{{/if}}\r\n                {{else}}<input name="selfPayItemName" value="" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}><input name="selfPayItemId" type="hidden">{{/if}}</td>\r\n            <td>\r\n            {{if arrange.badStatus == 1}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{else}}<span class="marketPrice F-float F-money">{{arrange.marketPrice}}</span>{{/if}}\r\n            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n            \r\n            <td><input name="needCount" value="{{arrange.needIncomeCount}}" type="text"></td>\r\n\r\n             <td><span class="needInReduceMoney"></span></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="needIncome F-float F-money"></span>{{else}}<span class="needIncome F-float F-money"></span>{{/if}}\r\n            </td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGetMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realGetMoney" value="{{arrange.realGetMoney}}" style="width:60px;" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n           \r\n            <td>{{if arrange.badStatus == 1}}<span class="price F-float F-money">{{arrange.price}}</span>{{else}}<span class="price F-float F-money">{{arrange.price}}</span>{{/if}}\r\n            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n            \r\n            \r\n            \r\n            <td>{{if arrange.badStatus == 1}}\r\n            <span class=\'F-floatF-count\'>{{arrange.memberCount}}</span>{{else}}<input style="width:60px;" type="text" name="realCount" class="F-floatF-count" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/>{{/if}}<input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" style="width:60px;" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n            \r\n            <td><span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n            \r\n            <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n            \r\n            <td><div  class="inline-flex col-xs-12">{{if arrange.badStatus == 1}}\r\n            <span>\r\n                {{if arrange.payType == 0}}\r\n                    现金\r\n                    {{else if arrange.payType == 1}}\r\n                    刷卡\r\n                    {{else if arrange.payType == 2}}\r\n                    签单\r\n                {{/if}}\r\n            </span>\r\n            &nbsp;\r\n            <span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n            <select name="payType">\r\n                <option value="0" {{if arrange.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n                <option value="1" {{if arrange.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                <option value="2" {{if arrange.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n            </select>\r\n            &nbsp;\r\n            <input style="width:60px;" type="text" class="F-float F-money" name="realGuidePayMoney" \r\n            {{if arrange.payType == 2}}value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} {{/if}}/>{{/if}}\r\n                \r\n                <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                </div>\r\n                </td>\r\n            \r\n            \r\n            \r\n            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}\r\n            </td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span class="customerRebateMoney F-float F-money">{{arrange.customerRebateMoney}}</span>{{else}}<span class="customerRebateMoney">{{arrange.customerRebateMoney}}</span>{{/if}}</td>\r\n\r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                </td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRate*100 | parseInt}}</span>{{else}}<input style="width:90px;" type="text" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"\r\n            {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            </td>\r\n            \r\n            <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.guideRebateMoney}}</span>{{else}} <span class="guideRebateMoney F-float F-money">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n            \r\n            <td>{{if editStatus == 1}}<input name="billRemark" value="{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}</td>\r\n            \r\n            <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>                             \r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});