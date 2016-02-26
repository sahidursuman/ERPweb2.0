/*TMODJS:{"debug":true,"version":96,"md5":"e0799fb750163aba357f6c23a69d1d2a"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/busArrange", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, busCompanyArrange = $data.busCompanyArrange, $escape = ($data.busCompany, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 车费 <a href="javascript:void(0)" class="T-buspay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>开始时间</th> <th class="th-border"><span class="necessary">*</span>结束时间</th> <th class="th-border"><span class="necessary">*</span>任务</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border"><span class="necessary">*</span>车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-bus"> ', 
            $line = 34, $each(busCompanyArrange, function(busCompany) {
                $out += " ", $line = 35, null != busCompany && ($out += ' <tr busCompanyArrangeId="', 
                $line = 36, $out += $escape(busCompany.id), $out += '" badStatus = "', $line = 36, 
                $out += $escape(busCompany.badStatus), $out += '"> <td>', $line = 37, null != busCompany.busCompany && ($line = 37, 
                $out += $escape($helpers.dateFormat(busCompany.startTime, "yyyy-MM-dd")), $line = 37), 
                $out += "</td> <td>", $line = 38, null != busCompany.busCompany && ($line = 38, 
                $out += $escape($helpers.dateFormat(busCompany.endTime, "yyyy-MM-dd")), $line = 38), 
                $out += "</td> <td>", $line = 39, null != busCompany.busCompany && ($out += " ", 
                $line = 40, 0 == busCompany.taskType ? ($out += " 全程 ", $line = 42) : 1 == busCompany.taskType ? ($out += " 接机 ", 
                $line = 44) : 2 == busCompany.taskType ? ($out += " 送机 ", $line = 46) : 3 == busCompany.taskType ? ($out += " 前段 ", 
                $line = 48) : 4 == busCompany.taskType ? ($out += " 中段 ", $line = 50) : 5 == busCompany.taskType && ($out += " 后段 ", 
                $line = 52), $out += " ", $line = 53), $out += "</td> <td>", $line = 54, null != busCompany.busCompany && ($line = 54, 
                $out += $escape(busCompany.busCompany.companyName), $line = 54), $out += "</td> <td>", 
                $line = 55, null != busCompany.bus && ($line = 55, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 55), $out += "</td> <td>", $line = 56, null != busCompany.bus && ($out += '<span calss="F-float F-count">', 
                $line = 56, $out += $escape(busCompany.bus.seatCount), $out += "</span>", $line = 56), 
                $out += "</td> <td>", $line = 57, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money">', 
                $line = 57, $out += $escape(busCompany.price), $out += "</span>", $line = 57) : ($out += '<input type="text" name="price" value="', 
                $line = 57, $out += $escape(busCompany.price), $out += '" class="F-float F-money" ', 
                $line = 58, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 58), $out += "/>", $line = 58), $out += '<input type="hidden" name="price" value="', 
                $line = 58, $out += $escape(busCompany.price), $out += '" /><input type="hidden" name="realPrice" value="', 
                $line = 58, $out += $escape(busCompany.price), $out += '" /><input type="hidden" name="realCount" value="1" /></td> <td>', 
                $line = 59, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money"> ', 
                $line = 59, $out += $escape(busCompany.realReduceMoney), $out += "</span>", $line = 59) : ($out += '<input type="text" class="F-float F-money" name="realReduceMoney" value="', 
                $line = 59, $out += $escape(busCompany.realReduceMoney), $out += '" old="', $line = 59, 
                $out += $escape(busCompany.realReduceMoney), $out += '"', $line = 59, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 59), $out += "/>", $line = 59), $out += "</td> <td>", $line = 60, 1 == busCompany.badStatus ? ($out += '<span class="BusneedPayMoney F-float F-money">', 
                $line = 60, $out += $escape(busCompany.payedMoney + busCompany.realGuidePayMoney), 
                $out += "</span>", $line = 60) : ($out += '<span class="BusneedPayMoney F-float F-money"></span>', 
                $line = 60), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 61, 
                $out += $escape(busCompany.needPayMoney), $out += '"/></td> <td><span class="F-float F-money">', 
                $line = 62, $out += $escape(busCompany.payedMoney), $out += '</span></td> <td><div class="inline-flex col-xs-12">', 
                $line = 64, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money">', 
                $line = 64, $out += $escape(busCompany.realGuidePayMoney), $out += "</span>", $line = 64) : ($out += ' <select name="payType"> <option value="0" ', 
                $line = 66, 0 == busCompany.payType && ($out += 'selected="selected"', $line = 66), 
                $out += '>现金</option> <option value="1" ', $line = 67, 1 == busCompany.payType && ($out += 'selected="selected"', 
                $line = 67), $out += '>刷卡</option> <option value="2" ', $line = 68, 2 == busCompany.payType && ($out += 'selected="selected"', 
                $line = 68), $out += '>签单</option> </select> &nbsp; <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                $line = 71, null != busCompany.billUpdateTime ? ($out += 'value="', $line = 71, 
                $out += $escape(busCompany.realGuidePayMoney), $out += '"', $line = 71) : ($out += 'value="', 
                $line = 71, $out += $escape(busCompany.guidePayMoney), $out += '" ', $line = 71), 
                $out += ' old="', $line = 71, $out += $escape(busCompany.realGuidePayMoney), $out += '" maxlength="11" ', 
                $line = 71, 1 == busCompany.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                $line = 71), $out += "/>", $line = 71), $out += ' <input type="hidden" name="payedMoney" value="', 
                $line = 72, $out += $escape(busCompany.payedMoney), $out += '" ', $line = 72, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 72), $out += '/> <input type="hidden" name="guidePayMoney" value="', $line = 73, 
                $out += $escape(busCompany.guidePayMoney), $out += '" /></div></td> <td>', $line = 74, 
                null != busCompany.billImage && "" != busCompany.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 75, $out += $escape(busCompany.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 76) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 78), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td><input value="', 
                $line = 81, $out += $escape(busCompany.billRemark), $out += '" name="billRemark" type="text" ></td> <td>', 
                $line = 82, 0 == busCompany.isConfirmAccount ? ($out += "未对账", $line = 82) : ($out += "已对账", 
                $line = 82), $out += "</td> </tr> ", $line = 84), $out += " ", $line = 85;
            }), $out += " </tbody> </table> ", $line = 89, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 93, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 93), $out += ' type="text" style="width:30%;" value="', $line = 93, remarkArrangeList.busRemark.length > 0 && ($line = 93, 
            $out += $escape(remarkArrangeList.busRemark[0].opCheckRemark), $line = 93), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 96, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 96), $out += ' type="text" style="width:30%;" value="', $line = 96, remarkArrangeList.busRemark.length > 0 && ($line = 96, 
            $out += $escape(remarkArrangeList.busRemark[0].financeCheckRemark), $line = 96), 
            $out += '" /> </div> </div> ', $line = 99), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 车费\r\n        <a href="javascript:void(0)" class="T-buspay-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table overflow-table  table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>开始时间</th>\r\n        <th class="th-border"><span class="necessary">*</span>结束时间</th>\r\n        <th class="th-border"><span class="necessary">*</span>任务</th>\r\n        <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n        <th class="th-border">车牌号</th>\r\n        <th class="th-border">座位数</th>\r\n        <th class="th-border"><span class="necessary">*</span>车费</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-bus">\r\n    {{each busCompanyArrange as busCompany}}\r\n    {{if busCompany != null}}\r\n    <tr busCompanyArrangeId="{{busCompany.id}}" badStatus = "{{busCompany.badStatus}}">\r\n        <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n        <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n        <td>{{if busCompany.busCompany != null}}\r\n            {{ if busCompany.taskType == 0}}\r\n                    全程\r\n                {{else if busCompany.taskType == 1}}\r\n                    接机\r\n                {{else if busCompany.taskType == 2}}\r\n                    送机\r\n                {{else if busCompany.taskType == 3}}\r\n                    前段\r\n                {{else if busCompany.taskType == 4}}\r\n                    中段\r\n                {{else if busCompany.taskType == 5}}\r\n                    后段\r\n            {{/if}}\r\n        {{/if}}</td>\r\n        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n        <td>{{if busCompany.bus != null}}<span calss="F-float F-count">{{busCompany.bus.seatCount}}</span>{{/if}}</td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money">{{busCompany.price}}</span>{{else}}<input type="text" name="price" value="{{busCompany.price}}" class="F-float F-money" \r\n        {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}<input type="hidden" name="price" value="{{busCompany.price}}" /><input type="hidden" name="realPrice" value="{{busCompany.price}}" /><input type="hidden" name="realCount" value="1" /></td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money"> {{busCompany.realReduceMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"{{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}</td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney F-float F-money">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" name="needPayMoney" value="{{busCompany.needPayMoney}}"/></td>\r\n        <td><span class="F-float F-money">{{busCompany.payedMoney}}</span></td>\r\n        \r\n        <td><div class="inline-flex col-xs-12">{{if busCompany.badStatus == 1}}<span class="F-float F-money">{{busCompany.realGuidePayMoney}}</span>{{else}}\r\n        <select name="payType">\r\n            <option value="0" {{if busCompany.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n            <option value="1" {{if busCompany.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n            <option value="2" {{if busCompany.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n        </select>\r\n        &nbsp;\r\n        <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if busCompany.billUpdateTime != null}}value="{{busCompany.realGuidePayMoney}}"{{else}}value="{{busCompany.guidePayMoney}}" {{/if}} old="{{busCompany.realGuidePayMoney}}" maxlength="11" {{if busCompany.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></div></td>\r\n         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference F-float F-money"></span></td>\r\n        <td><input value="{{busCompany.billRemark}}" name="billRemark" type="text" ></td>\r\n        <td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});