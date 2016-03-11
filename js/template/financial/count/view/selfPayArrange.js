/*TMODJS:{"debug":true,"version":174,"md5":"ae5cb7241eb16b56b06c27c5ebbc76ff"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/selfPayArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 自费安排 <a href="javascript:void(0)" class="T-addSelf"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1400"> <thead> <tr> <th class="th-border" colspan="16">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>自费商家</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>应收数量</th> <th class="th-border">应收优惠</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border"><span class="necessary">*</span>底价</th> <th class="th-border"><span class="necessary">*</span>应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ', 
            $line = 46, $each(dayList, function(day) {
                $out += " ", $line = 47, null != day.selfPayArrange && ($out += " ", $line = 48, 
                $each(day.selfPayArrange, function(arrangeList) {
                    $out += " ", $line = 49, $each(arrangeList.selfPayArrangeList, function(arrange, index) {
                        $out += " ", $line = 50, null != arrange && ($out += ' <tr selfPayArrangeId="', 
                        $line = 51, $out += $escape(arrange.id), $out += '" selfPayId="', $line = 51, $out += $escape(arrange.selfPayId), 
                        $out += '" badStatus = "', $line = 51, $out += $escape(arrange.badStatus), $out += '" whichDay = ', 
                        $line = 51, $out += $escape(arrange.whichDay), $out += "> ", $line = 52, 0 == index && ($out += '<td rowspan="', 
                        $line = 52, $out += $escape(arrangeList.selfPayArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 52), $out += " ", $line = 53, 0 == index && ($out += '<td rowspan="', $line = 53, 
                        $out += $escape(arrangeList.selfPayArrangeList.length), $out += '">', $line = 53, 
                        $out += $escape(arrange.selfPay.name), $out += "</td>", $line = 53), $out += " <td>", 
                        $line = 54, null != arrange.selfPayItem ? ($line = 54, null != arrange.selfPayItem && ($line = 54, 
                        $out += $escape(arrange.selfPayItem.name), $line = 54), $out += " ", $line = 55) : ($out += '<input name="selfPayItemName" value="" type="text" ', 
                        $line = 55, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 55), 
                        $out += '><input name="selfPayItemId" type="hidden">', $line = 55), $out += '</td> <td> <input type="text" name="marketPrice" value="', 
                        $line = 58, $out += $escape(arrange.marketPrice), $out += '" class="w-50"/></td> <td><input name="needCount" value="', 
                        $line = 60, $out += $escape(arrange.needIncomeCount), $out += '" type="text" class="w-50"></td> <td><span class="needInReduceMoney"></span></td> <td>', 
                        $line = 64, 1 == arrange.badStatus ? ($out += '<span class="needIncome F-float F-money"></span>', 
                        $line = 64) : ($out += '<span class="needIncome F-float F-money"></span>', $line = 64), 
                        $out += " </td> <td>", $line = 67, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 67, $out += $escape(arrange.realGetMoney), $out += "</span>", $line = 67) : ($out += '<input type="text" class="F-float F-money w-80" name="realGetMoney" value="', 
                        $line = 67, $out += $escape(arrange.realGetMoney), $out += '" ', $line = 67, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 67), $out += "/>", $line = 67), $out += ' </td> <td> <input type="text" name="price" value="', 
                        $line = 71, $out += $escape(arrange.price), $out += '" class="w-50"/></td> <td>', 
                        $line = 75, 1 == arrange.badStatus ? ($out += " <span class='F-floatF-count'>", 
                        $line = 76, $out += $escape(arrange.memberCount), $out += "</span>", $line = 76) : ($out += '<input class="w-50" type="text" name="realCount" class="F-floatF-count" ', 
                        $line = 76, null != arrange.billUpdateTime ? ($out += 'value="', $line = 76, $out += $escape(arrange.realCount), 
                        $out += '"', $line = 76) : ($out += 'value="', $line = 76, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 76), $out += ' maxlength="5"/>', $line = 76), $out += '<input type="hidden" name="memberCount" value="', 
                        $line = 76, $out += $escape(arrange.memberCount), $out += '" ', $line = 76, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 76), $out += " /></td> <td>", $line = 78, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 78, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 78) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                        $line = 78, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 78, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 78), $out += "/>", 
                        $line = 78), $out += ' </td> <td><span class="needPayMoney F-float F-money" >', 
                        $line = 81, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += '</span><input type="hidden" class="selfMoney"></td> <td><span class="F-float F-money">', 
                        $line = 83, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex">', 
                        $line = 85, 1 == arrange.badStatus ? ($out += " <span> ", $line = 87, 0 == arrange.payType ? ($out += " 现金 ", 
                        $line = 89) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 91) : 2 == arrange.payType && ($out += " 签单 ", 
                        $line = 93), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 96, 
                        2 == arrange.payType ? ($line = 96, $out += $escape(arrange.signMoney), $line = 96) : ($line = 96, 
                        $out += $escape(arrange.realGuidePayMoney), $line = 96), $out += "</span>", $line = 96) : ($out += ' <select name="payType"> <option value="0" ', 
                        $line = 98, 0 == arrange.payType && ($out += 'selected="selected"', $line = 98), 
                        $out += '>现金</option> <option value="1" ', $line = 99, 1 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 99), $out += '>刷卡</option> <option value="2" ', $line = 100, 2 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 100), $out += '>签单</option> </select> &nbsp; <input type="text" class="F-float F-money w-80" name="realGuidePayMoney" ', 
                        $line = 104, 2 == arrange.payType ? ($out += 'value="', $line = 104, $out += $escape(arrange.signMoney), 
                        $out += '"', $line = 104) : ($line = 104, null != arrange.billUpdateTime ? ($out += 'value="', 
                        $line = 104, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 104) : ($out += 'value="', 
                        $line = 104, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 104), 
                        $out += ' old="', $line = 104, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                        $line = 104, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 104), 
                        $out += " ", $line = 104), $out += "/>", $line = 104), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 106, $out += $escape(arrange.payedMoney), $out += '" ', $line = 106, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 106), $out += ' /> <input type="hidden" name="guidePayMoney" value="', $line = 107, 
                        $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 107, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 107), $out += " /> </div> </td> <td>", $line = 113, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 114, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 115) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 117), $out += " </td> <td>", 
                        $line = 120, 1 == arrange.badStatus ? ($out += '<span class="customerRebateMoney F-float F-money">', 
                        $line = 120, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 120) : ($out += '<span class="customerRebateMoney">', 
                        $line = 120, $out += $escape(arrange.customerRebateMoney), $out += "</span>", $line = 120), 
                        $out += "</td> <td>", $line = 122, 1 == arrange.badStatus ? ($out += "<span>", $line = 122, 
                        $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), $out += "</span>", 
                        $line = 122) : ($out += '<input class="w-50" type="text" name="travelAgencyRate" value="', 
                        $line = 122, $out += $escape($helpers.parseInt(100 * arrange.travelAgencyRate)), 
                        $out += '" maxlength="5" ', $line = 122, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 122), $out += " />", $line = 122), $out += " </td> <td>", $line = 125, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 125, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 125) : ($out += '<span class="travelAgencyRebateMoney F-float F-money">', 
                        $line = 125, $out += $escape(arrange.travelAgencyRebateMoney), $out += "</span>", 
                        $line = 125), $out += ' <input type="hidden" name="travelAgencyRebateMoney" value="', 
                        $line = 126, $out += $escape(arrange.travelAgencyRebateMoney), $out += '" ', $line = 126, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 126), $out += " /></td> <td>", 
                        $line = 128, 1 == arrange.badStatus ? ($out += "<span>", $line = 128, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), 
                        $out += "</span>", $line = 128) : ($out += '<input class="w-50" type="text" name="guideRate" value="', 
                        $line = 128, $out += $escape($helpers.parseInt(100 * arrange.guideRate)), $out += '" maxlength="5" ', 
                        $line = 129, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 129), 
                        $out += "/>", $line = 129), $out += " </td> <td>", $line = 132, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 132, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 132) : ($out += ' <span class="guideRebateMoney F-float F-money">', 
                        $line = 132, $out += $escape(arrange.guideRebateMoney), $out += "</span>", $line = 132), 
                        $out += ' <input type="hidden" name="guideRebateMoney" value="', $line = 133, $out += $escape(arrange.guideRebateMoney), 
                        $out += '" ', $line = 133, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 133), $out += " /></td> <td>", $line = 135, 1 == editStatus ? ($out += '<input name="billRemark" value="', 
                        $line = 135, null != arrange.selfPayItem ? ($line = 135, $out += $escape(arrange.selfPayItem.remark), 
                        $line = 135) : ($line = 135, $out += $escape(arrange.billRemark), $line = 135), 
                        $out += '" maxlength="1000" ', $line = 135, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 135), $out += "/>", $line = 135) : ($line = 135, null != arrange.selfPayItem ? ($line = 135, 
                        $out += $escape(arrange.selfPayItem.remark), $line = 135) : ($line = 135, $out += $escape(arrange.billRemark), 
                        $line = 135), $line = 135), $out += "&nbsp;&nbsp;", $line = 135, null == arrange.selfPayItem && ($out += '<a href="javascript:void(0)" class="T-selfArrDel">删除</a>', 
                        $line = 135), $out += "</td> <td>", $line = 137, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 137) : ($out += "已对账", $line = 137), $out += "</td> </tr> ", $line = 139), 
                        $out += " ", $line = 140;
                    }), $out += " ", $line = 141;
                }), $out += " ", $line = 142), $out += " ", $line = 143;
            }), $out += " </tbody> </table> </div> ", $line = 148, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 152, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 152), $out += ' type="text" style="width:30%;" value="', $line = 152, remarkArrangeList.selfRemark.length > 0 && ($line = 152, 
            $out += $escape(remarkArrangeList.selfRemark[0].opCheckRemark), $line = 152), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 155, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 155), $out += ' type="text" style="width:30%;" value="', $line = 155, remarkArrangeList.selfRemark.length > 0 && ($line = 155, 
            $out += $escape(remarkArrangeList.selfRemark[0].financeCheckRemark), $line = 155), 
            $out += '" /> </div> </div> ', $line = 158), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 自费安排\r\n        <a href="javascript:void(0)" class="T-addSelf">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table table-striped table-bordered table-hover w-1400">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border" colspan="16">消费</th>\r\n            <th class="th-border" colspan="2">社佣</th>\r\n            <th class="th-border" colspan="2">导佣</th>\r\n            <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n            <th class="th-border" rowspan="2">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n        <tr>\r\n          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n          <th class="th-border"><span class="necessary">*</span>自费商家</th>\r\n          <th class="th-border"><span class="necessary">*</span>项目</th>\r\n          <th class="th-border"><span class="necessary">*</span>单价</th>\r\n          <th class="th-border"><span class="necessary">*</span>应收数量</th>\r\n          <th class="th-border">应收优惠</th>\r\n          <th class="th-border">应收</th>\r\n          <th class="th-border">现收</th>\r\n          <th class="th-border"><span class="necessary">*</span>底价</th>\r\n          <th class="th-border"><span class="necessary">*</span>应付数量</th>\r\n          <th class="th-border">优惠</th>\r\n          <th class="th-border">应付</th>\r\n          <th class="th-border">已付</th>\r\n          <th class="th-border">导付</th>\r\n          <th class="th-border">单据</th>\r\n          <th class="th-border">人数返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n          <th class="th-border">返佣</th>\r\n        </tr></thead>\r\n        <tbody class="T-count-selfPay">\r\n        {{each dayList as day}}\r\n        {{if day.selfPayArrange != null}}\r\n        {{each day.selfPayArrange as arrangeList}}\r\n        {{each arrangeList.selfPayArrangeList as arrange index}}\r\n        {{if arrange != null}}\r\n        <tr selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" badStatus = "{{arrange.badStatus}}" whichDay = {{arrange.whichDay}}>\r\n                {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                <td>{{if arrange.selfPayItem != null}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.name}}{{/if}}\r\n                    {{else}}<input name="selfPayItemName" value="" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}><input name="selfPayItemId" type="hidden">{{/if}}</td>\r\n                <td>\r\n                \r\n                <input type="text" name="marketPrice" value="{{arrange.marketPrice}}" class="w-50"/></td>\r\n                \r\n                <td><input name="needCount" value="{{arrange.needIncomeCount}}" type="text" class="w-50"></td>\r\n    \r\n                 <td><span class="needInReduceMoney"></span></td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="needIncome F-float F-money"></span>{{else}}<span class="needIncome F-float F-money"></span>{{/if}}\r\n                </td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGetMoney}}</span>{{else}}<input type="text" class="F-float F-money w-80" name="realGetMoney" value="{{arrange.realGetMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n               \r\n                <td>\r\n                <input type="text" name="price" value="{{arrange.price}}" class="w-50"/></td>\r\n                \r\n                \r\n                \r\n                <td>{{if arrange.badStatus == 1}}\r\n                <span class=\'F-floatF-count\'>{{arrange.memberCount}}</span>{{else}}<input class="w-50" type="text" name="realCount" class="F-floatF-count" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/>{{/if}}<input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n                \r\n                <td><span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                \r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                \r\n                <td><div  class="inline-flex">{{if arrange.badStatus == 1}}\r\n                <span>\r\n                    {{if arrange.payType == 0}}\r\n                        现金\r\n                        {{else if arrange.payType == 1}}\r\n                        刷卡\r\n                        {{else if arrange.payType == 2}}\r\n                        签单\r\n                    {{/if}}\r\n                </span>\r\n                &nbsp;\r\n                <span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n                <select name="payType">\r\n                    <option value="0" {{if arrange.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n                    <option value="1" {{if arrange.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                    <option value="2" {{if arrange.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n                </select>\r\n                &nbsp;\r\n                <input type="text" class="F-float F-money w-80" name="realGuidePayMoney" \r\n                {{if arrange.payType == 2}}value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} {{/if}}/>{{/if}}\r\n                    \r\n                    <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                    <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />\r\n                    </div>\r\n                    </td>\r\n                \r\n                \r\n                \r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span class="customerRebateMoney F-float F-money">{{arrange.customerRebateMoney}}</span>{{else}}<span class="customerRebateMoney">{{arrange.customerRebateMoney}}</span>{{/if}}</td>\r\n    \r\n                <td>{{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<input class="w-50" type="text" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} />{{/if}}\r\n                    </td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney F-float F-money">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                    <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRate*100 | parseInt}}</span>{{else}}<input class="w-50" type="text" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" maxlength="5"\r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n                \r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.guideRebateMoney}}</span>{{else}} <span class="guideRebateMoney F-float F-money">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                    <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                \r\n                <td>{{if editStatus == 1}}<input name="billRemark" value="{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{if arrange.selfPayItem != null}}{{arrange.selfPayItem.remark}}{{else}}{{arrange.billRemark}}{{/if}}{{/if}}&nbsp;&nbsp;{{if arrange.selfPayItem == null}}<a href="javascript:void(0)" class="T-selfArrDel">删除</a>{{/if}}</td>\r\n                \r\n                <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>                             \r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});