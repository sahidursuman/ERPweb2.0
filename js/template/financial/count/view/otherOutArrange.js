/*TMODJS:{"debug":true,"version":119,"md5":"e07accfafe6d19b872ee1ff423744706"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/otherOutArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>其它支出 <a href="javascript:void(0)" class="T-otherOut-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-otherOut"> ', 
            $line = 31, $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.otherArrange && ($out += " ", $line = 33, $each(day.otherArrange, function(arrange) {
                    $out += " ", $line = 34, null != arrange && ($out += ' <tr otherArrangeId="', $line = 35, 
                    $out += $escape(arrange.id), $out += '" badStatus = "', $line = 35, $out += $escape(arrange.badStatus), 
                    $out += '" whichDay="', $line = 35, $out += $escape(arrange.whichDay), $out += '"> <td><span class="whichDay"></span></td> <td>', 
                    $line = 38, $out += $escape(arrange.name), $out += "</td> <td> ", $line = 41, -1 == tripPlan.billStatus ? ($out += " ", 
                    $line = 42, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                    $line = 43, $out += $escape(arrange.price), $out += "</span> ", $line = 44) : ($out += ' <span class="price F-float F-money">', 
                    $line = 45, $out += $escape(arrange.price), $out += "</span> ", $line = 46), $out += ' <input type="hidden" name="price" value="', 
                    $line = 47, $out += $escape(arrange.price), $out += '"/> ', $line = 48) : ($out += " ", 
                    $line = 49, 1 == arrange.badStatus ? ($out += ' <input type="text" name="price" value="', 
                    $line = 50, $out += $escape(arrange.price), $out += '"readOnly="readOnly" class="w-80" /> ', 
                    $line = 51) : ($out += ' <input type="text" name="price" class="w-80" value="', 
                    $line = 52, $out += $escape(arrange.price), $out += '" ', $line = 53, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 53), $out += "/> ", $line = 54), $out += " ", $line = 55), $out += " </td> <td>", 
                    $line = 58, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                    $line = 58, $out += $escape(arrange.memberCount), $out += "</span>", $line = 58) : ($out += ' <input type="text" class="F-float F-count w-50" name="realCount" ', 
                    $line = 58, arrange.billUpdateTime ? ($out += 'value="', $line = 58, $out += $escape(arrange.realCount), 
                    $out += '"', $line = 58) : ($out += 'value="', $line = 58, $out += $escape(arrange.memberCount), 
                    $out += '" ', $line = 58), $out += ' old="', $line = 58, $out += $escape(arrange.realCount), 
                    $out += '" maxlength="5" ', $line = 59, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 59), $out += "/>", $line = 59), $out += " </td> <td>", $line = 62, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 62, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 62) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                    $line = 62, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 62, 
                    1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 62), $out += "/>", 
                    $line = 62), $out += " </td> <td>", $line = 65, 1 == arrange.badStatus ? ($out += '<span class="otherOutNeedPayMoney F-float F-money">', 
                    $line = 65, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                    $line = 65) : ($out += '<span class="otherOutNeedPayMoney F-float F-money"></span>', 
                    $line = 65), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 66, 
                    $out += $escape(arrange.needPayMoney), $out += '"></td> <td><span class="F-float F-money">', 
                    $line = 68, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex">', 
                    $line = 70, 1 == arrange.badStatus ? ($out += " <span> ", $line = 72, 0 == arrange.realPayType ? ($out += " 现金 ", 
                    $line = 74) : 1 == arrange.realPayType ? ($out += " 刷卡 ", $line = 76) : 2 == arrange.realPayType && ($out += " 签单 ", 
                    $line = 78), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 81, 
                    2 == arrange.realPayType ? ($line = 81, $out += $escape(arrange.realSignMoney), 
                    $line = 81) : ($line = 81, $out += $escape(arrange.realGuidePayMoney), $line = 81), 
                    $out += '</span> <span class="F-float F-money">', $line = 82, $out += $escape(arrange.realGuidePayMoney), 
                    $out += "</span>", $line = 82) : ($out += ' <select name="payType"> <option value="0" ', 
                    $line = 84, 0 == arrange.realPayType && ($out += 'selected="selected"', $line = 84), 
                    $out += '>现金</option> <option value="1" ', $line = 85, 1 == arrange.realPayType && ($out += 'selected="selected"', 
                    $line = 85), $out += '>刷卡</option> <option value="2" ', $line = 86, 2 == arrange.realPayType && ($out += 'selected="selected"', 
                    $line = 86), $out += '>签单</option> </select> &nbsp; <input type="text" class="F-float F-money w-80" name="realGuidePayMoney" ', 
                    $line = 90, 2 == arrange.payType ? ($out += 'value="', $line = 90, $out += $escape(arrange.signMoney), 
                    $out += '"', $line = 90) : ($line = 90, null != arrange.billUpdateTime ? ($out += 'value="', 
                    $line = 90, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 90) : ($out += 'value="', 
                    $line = 90, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 90), $out += ' old="', 
                    $line = 90, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                    $line = 90, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 90), 
                    $out += " ", $line = 90), $out += "/>", $line = 90), $out += ' <input type="hidden" name="payedMoney" value="', 
                    $line = 91, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                    $line = 92, $out += $escape(arrange.guidePayMoney), $out += '" /></div></td> <td>', 
                    $line = 94, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 95, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 96) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 98), $out += ' </td> <td><span class="difference"></span></td> <td>', 
                    $line = 102, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 102, 
                    $out += $escape(arrange.billRemark), $out += '" maxlength="1000" ', $line = 102, 
                    1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 102), $out += "/>", 
                    $line = 102) : ($line = 102, $out += $escape(arrange.billRemark), $line = 102), 
                    $out += "</td> <td>", $line = 104, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                    $line = 104) : ($out += "已对账", $line = 104), $out += "</td> </tr> ", $line = 106), 
                    $out += " ", $line = 107;
                }), $out += " ", $line = 108), $out += " ", $line = 109;
            }), $out += " </tbody> </table> </div> ", $line = 113, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 117, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 117), $out += ' type="text" style="width:30%;" value="', $line = 117, remarkArrangeList.otherOutRemark.length > 0 && ($line = 117, 
            $out += $escape(remarkArrangeList.otherOutRemark[0].opCheckRemark), $line = 117), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 120, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 120), $out += ' type="text" style="width:30%;" value="', $line = 120, remarkArrangeList.otherOutRemark.length > 0 && ($line = 120, 
            $out += $escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark), $line = 120), 
            $out += '" /> </div> </div> ', $line = 123), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>其它支出\r\n        <a href="javascript:void(0)" class="T-otherOut-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n<table class="table table-striped table-bordered table-hover w-1500">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th> \r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-otherOut"> \r\n    {{each dayList as day}}\r\n    {{if day.otherArrange != null}}\r\n    {{each day.otherArrange as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr otherArrangeId="{{arrange.id}}" badStatus = "{{arrange.badStatus}}" whichDay="{{arrange.whichDay}}">\r\n        <td><span class="whichDay"></span></td>\r\n\r\n        <td>{{arrange.name}}</td>\r\n\r\n        <td>\r\n            {{if tripPlan.billStatus == -1}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <span class="F-float F-money">{{arrange.price}}</span>\r\n                {{else}} \r\n                    <span class="price F-float F-money">{{arrange.price}}</span>\r\n                {{/if}}\r\n                    <input type="hidden" name="price" value="{{arrange.price}}"/>\r\n            {{else}}\r\n                {{if arrange.badStatus == 1}}\r\n                    <input type="text" name="price" value="{{arrange.price}}"readOnly="readOnly" class="w-80" />\r\n                {{else}}\r\n                    <input type="text" name="price" class="w-80" value="{{arrange.price}}" \r\n                           {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                {{/if}}\r\n            {{/if}}\r\n        </td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}  <input  type="text" class="F-float F-count w-50" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}" {{/if}} old="{{arrange.realCount}}" maxlength="5" \r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n       </td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n\r\n        <td><div class="inline-flex">{{if arrange.badStatus == 1}}\r\n        <span>\r\n            {{if arrange.realPayType == 0}}\r\n                现金\r\n                {{else if arrange.realPayType == 1}}\r\n                刷卡\r\n                {{else if arrange.realPayType == 2}}\r\n                签单\r\n            {{/if}}\r\n        </span>\r\n        &nbsp;\r\n        <span class="F-float F-money">{{if arrange.realPayType == 2}}{{arrange.realSignMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>\r\n        <span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}\r\n        <select name="payType">\r\n            <option value="0" {{if arrange.realPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n            <option value="1" {{if arrange.realPayType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n            <option value="2" {{if arrange.realPayType == 2}}selected="selected"{{/if}}>签单</option>\r\n        </select>\r\n        &nbsp;\r\n        <input  type="text" class="F-float F-money w-80" name="realGuidePayMoney" \r\n            {{if arrange.payType == 2}}value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime!=null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} {{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></div></td>\r\n\r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference"></span></td>\r\n\r\n        <td>{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{arrange.billRemark}}{{/if}}</td>\r\n\r\n        <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});