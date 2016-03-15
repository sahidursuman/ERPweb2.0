/*TMODJS:{"debug":true,"version":152,"md5":"6a23c3acc2ab3a0a3352ee73ca97190e"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/busArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busCompanyArrange = $data.busCompanyArrange, $escape = ($data.busCompany, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 车费 <a href="javascript:void(0)" class="T-buspay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>开始时间</th> <th class="th-border"><span class="necessary">*</span>结束时间</th> <th class="th-border"><span class="necessary">*</span>任务</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border"><span class="necessary">*</span>车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-bus"> ', 
            $line = 35, $each(busCompanyArrange, function(busCompany) {
                $out += " ", $line = 36, null != busCompany && ($out += ' <tr busCompanyArrangeId="', 
                $line = 37, $out += $escape(busCompany.id), $out += '" badStatus = "', $line = 37, 
                $out += $escape(busCompany.badStatus), $out += '"> <td>', $line = 38, null != busCompany.busCompany && ($line = 38, 
                $out += $escape($helpers.dateFormat(busCompany.startTime, "yyyy-MM-dd")), $line = 38), 
                $out += "</td> <td>", $line = 40, null != busCompany.busCompany && ($line = 40, 
                $out += $escape($helpers.dateFormat(busCompany.endTime, "yyyy-MM-dd")), $line = 40), 
                $out += "</td> <td>", $line = 42, null != busCompany.busCompany && ($out += " ", 
                $line = 43, 0 == busCompany.taskType ? ($out += " 全程 ", $line = 45) : 1 == busCompany.taskType ? ($out += " 接机 ", 
                $line = 47) : 2 == busCompany.taskType ? ($out += " 送机 ", $line = 49) : 3 == busCompany.taskType ? ($out += " 前段 ", 
                $line = 51) : 4 == busCompany.taskType ? ($out += " 中段 ", $line = 53) : 5 == busCompany.taskType && ($out += " 后段 ", 
                $line = 55), $out += " ", $line = 56), $out += "</td> <td>", $line = 58, null != busCompany.busCompany && ($line = 58, 
                $out += $escape(busCompany.busCompany.companyName), $line = 58), $out += "</td> <td>", 
                $line = 60, null != busCompany.bus && ($line = 60, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 60), $out += "</td> <td>", $line = 62, null != busCompany.bus && ($out += '<span calss="F-float F-count">', 
                $line = 62, $out += $escape(busCompany.bus.seatCount), $out += "</span>", $line = 62), 
                $out += "</td> <td>", $line = 64, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money">', 
                $line = 64, $out += $escape(busCompany.price), $out += "</span>", $line = 64) : ($out += '<input type="text" name="price" value="', 
                $line = 64, $out += $escape(busCompany.price), $out += '" class="w-80 F-float F-money" ', 
                $line = 65, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 65), $out += "/>", $line = 65), $out += '<input type="hidden" name="price" value="', 
                $line = 65, $out += $escape(busCompany.price), $out += '" /><input type="hidden" name="realPrice" value="', 
                $line = 65, $out += $escape(busCompany.price), $out += '" /><input type="hidden" name="realCount" value="1" /></td> <td>', 
                $line = 67, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money"> ', 
                $line = 67, $out += $escape(busCompany.realReduceMoney), $out += "</span>", $line = 67) : ($out += '<input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="', 
                $line = 67, $out += $escape(busCompany.realReduceMoney), $out += '" old="', $line = 67, 
                $out += $escape(busCompany.realReduceMoney), $out += '"', $line = 67, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 67), $out += "/>", $line = 67), $out += "</td> <td>", $line = 69, 1 == busCompany.badStatus ? ($out += '<span class="BusneedPayMoney F-float F-money">', 
                $line = 69, $out += $escape(busCompany.payedMoney + busCompany.realGuidePayMoney), 
                $out += "</span>", $line = 69) : ($out += '<span class="BusneedPayMoney F-float F-money"></span>', 
                $line = 69), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 70, 
                $out += $escape(busCompany.needPayMoney), $out += '"/></td> <td><span class="F-float F-money">', 
                $line = 72, $out += $escape(busCompany.payedMoney), $out += '</span></td> <td><div class="inline-flex"> ', 
                $line = 76, 1 == busCompany.badStatus ? ($out += " <span> ", $line = 78, 0 == busCompany.realPayType ? ($out += " 现金 ", 
                $line = 80) : 1 == busCompany.realPayType ? ($out += " 刷卡 ", $line = 82) : 2 == busCompany.realPayType && ($out += " 签单 ", 
                $line = 84), $out += ' </span> &nbsp; <span class="F-float F-money"> ', $line = 88, 
                2 == busCompany.realPayType ? ($line = 88, $out += $escape(busCompany.realSignMoney), 
                $line = 88) : ($line = 88, $out += $escape(busCompany.realGuidePayMoney), $line = 88), 
                $out += " </span> ", $line = 90) : ($out += ' <select name="payType"> <option value="0" ', 
                $line = 92, 0 == busCompany.realPayType && ($out += 'selected="selected"', $line = 92), 
                $out += '>现金</option> <option value="1" ', $line = 93, 1 == busCompany.realPayType && ($out += 'selected="selected"', 
                $line = 93), $out += '>刷卡</option> <option value="2" ', $line = 94, 2 == busCompany.realPayType && ($out += 'selected="selected"', 
                $line = 94), $out += '>签单</option> </select> &nbsp; <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" ', 
                $line = 98, null != busCompany.billUpdateTime ? ($line = 98, 2 == busCompany.payType ? ($out += 'value="', 
                $line = 98, $out += $escape(busCompany.signMoney), $out += '"', $line = 98) : ($out += 'value="', 
                $line = 98, $out += $escape(busCompany.realGuidePayMoney), $out += '"', $line = 98), 
                $line = 98) : ($out += " ", $line = 99, 2 == busCompany.payType ? ($out += 'value="', 
                $line = 99, $out += $escape(busCompany.signMoney), $out += '"', $line = 99) : ($out += 'value="', 
                $line = 99, $out += $escape(busCompany.guidePayMoney), $out += '" ', $line = 99), 
                $out += " ", $line = 100), $out += ' old="', $line = 101, $out += $escape(busCompany.realGuidePayMoney), 
                $out += '" maxlength="11" ', $line = 101, 1 == busCompany.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                $line = 101), $out += "/>", $line = 101), $out += ' <input type="hidden" name="payedMoney" value="', 
                $line = 102, $out += $escape(busCompany.payedMoney), $out += '" ', $line = 102, 
                1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 102), 
                $out += '/> <input type="hidden" name="guidePayMoney" value="', $line = 103, $out += $escape(busCompany.guidePayMoney), 
                $out += '" /></div></td> <td>', $line = 105, null != busCompany.billImage && "" != busCompany.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 106, $out += $escape(busCompany.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 107) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 109), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td><input value="', 
                $line = 114, $out += $escape(busCompany.billRemark), $out += '" name="billRemark" type="text" ></td> <td>', 
                $line = 116, 0 == busCompany.isConfirmAccount ? ($out += "未对账", $line = 116) : ($out += "已对账", 
                $line = 116), $out += "</td> </tr> ", $line = 118), $out += " ", $line = 119;
            }), $out += " </tbody> </table> </div> ", $line = 124, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 128, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 128), $out += ' type="text" style="width:30%;" value="', $line = 128, remarkArrangeList.busRemark.length > 0 && ($line = 128, 
            $out += $escape(remarkArrangeList.busRemark[0].opCheckRemark), $line = 128), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 131, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 131), $out += ' type="text" style="width:30%;" value="', $line = 131, remarkArrangeList.busRemark.length > 0 && ($line = 131, 
            $out += $escape(remarkArrangeList.busRemark[0].financeCheckRemark), $line = 131), 
            $out += '" /> </div> </div> ', $line = 134), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 车费\r\n        <a href="javascript:void(0)" class="T-buspay-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table  table-striped table-bordered table-hover w-1500">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border"><span class="necessary">*</span>开始时间</th>\r\n            <th class="th-border"><span class="necessary">*</span>结束时间</th>\r\n            <th class="th-border"><span class="necessary">*</span>任务</th>\r\n            <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n            <th class="th-border">车牌号</th>\r\n            <th class="th-border">座位数</th>\r\n            <th class="th-border"><span class="necessary">*</span>车费</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">应付</th>\r\n            <th class="th-border">已付</th>\r\n            <th class="th-border">导付</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">差额</th>\r\n            <th class="th-border">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n    \r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-count-bus">\r\n        {{each busCompanyArrange as busCompany}}\r\n        {{if busCompany != null}}\r\n        <tr busCompanyArrangeId="{{busCompany.id}}" badStatus = "{{busCompany.badStatus}}">\r\n            <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n\r\n            <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n\r\n            <td>{{if busCompany.busCompany != null}}\r\n                {{ if busCompany.taskType == 0}}\r\n                        全程\r\n                    {{else if busCompany.taskType == 1}}\r\n                        接机\r\n                    {{else if busCompany.taskType == 2}}\r\n                        送机\r\n                    {{else if busCompany.taskType == 3}}\r\n                        前段\r\n                    {{else if busCompany.taskType == 4}}\r\n                        中段\r\n                    {{else if busCompany.taskType == 5}}\r\n                        后段\r\n                {{/if}}\r\n            {{/if}}</td>\r\n\r\n            <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n\r\n            <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n\r\n            <td>{{if busCompany.bus != null}}<span calss="F-float F-count">{{busCompany.bus.seatCount}}</span>{{/if}}</td>\r\n\r\n            <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money">{{busCompany.price}}</span>{{else}}<input type="text" name="price" value="{{busCompany.price}}" class="w-80 F-float F-money" \r\n            {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}<input type="hidden" name="price" value="{{busCompany.price}}" /><input type="hidden" name="realPrice" value="{{busCompany.price}}" /><input type="hidden" name="realCount" value="1" /></td>\r\n\r\n            <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money"> {{busCompany.realReduceMoney}}</span>{{else}}<input type="text" class="w-80 F-float F-money" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"{{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}</td>\r\n\r\n            <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney F-float F-money">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney F-float F-money"></span>{{/if}}\r\n            <input type="hidden" name="needPayMoney" value="{{busCompany.needPayMoney}}"/></td>\r\n\r\n            <td><span class="F-float F-money">{{busCompany.payedMoney}}</span></td>\r\n            \r\n            <td><div class="inline-flex">\r\n    \r\n            {{if busCompany.badStatus == 1}}\r\n            <span>\r\n                {{if busCompany.realPayType == 0}}\r\n                    现金\r\n                    {{else if busCompany.realPayType == 1}}\r\n                    刷卡\r\n                    {{else if busCompany.realPayType == 2}}\r\n                    签单\r\n                {{/if}}\r\n            </span>\r\n            &nbsp;\r\n            <span class="F-float F-money">\r\n                {{if busCompany.realPayType == 2}}{{busCompany.realSignMoney}}{{else}}{{busCompany.realGuidePayMoney}}{{/if}}\r\n            </span>\r\n            {{else}}\r\n            <select name="payType">\r\n                <option value="0" {{if busCompany.realPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                <option value="1" {{if busCompany.realPayType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                <option value="2" {{if busCompany.realPayType == 2}}selected="selected"{{/if}}>签单</option>\r\n            </select>\r\n            &nbsp;\r\n            <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" \r\n            {{if busCompany.billUpdateTime != null}}{{if busCompany.payType == 2}}value="{{busCompany.signMoney}}"{{else}}value="{{busCompany.realGuidePayMoney}}"{{/if}}{{else}}\r\n            {{if busCompany.payType == 2}}value="{{busCompany.signMoney}}"{{else}}value="{{busCompany.guidePayMoney}}" {{/if}}\r\n            {{/if}} \r\n            old="{{busCompany.realGuidePayMoney}}" maxlength="11" {{if busCompany.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/>{{/if}}\r\n                <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></div></td>\r\n\r\n             <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                {{else}}\r\n                    <span style="color:#bbb;">查看</span>\r\n                {{/if}}\r\n            </td>\r\n\r\n            <td><span class="difference F-float F-money"></span></td>\r\n\r\n            <td><input value="{{busCompany.billRemark}}" name="billRemark" type="text" ></td>\r\n\r\n            <td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});