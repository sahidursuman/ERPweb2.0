/*TMODJS:{"debug":true,"version":36,"md5":"ba9b8a382f89e7d76146de6632c0e22b"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/busArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, busCompanyArrange = $data.busCompanyArrange, $escape = ($data.busCompany, 
            $data.$index, $utils.$escape), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 车费 <a href="javascript:void(0)" class="T-buspay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border"><span class="necessary">*</span>车牌号</th> <th class="th-border"><span class="necessary">*</span>座位数</th> <th class="th-border"><span class="necessary">*</span>车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ', 
            $line = 26, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 26), $out += ' </tr> </thead> <tbody class="T-count-bus"> ', $line = 31, 
            $each(busCompanyArrange, function(busCompany) {
                $out += " ", $line = 32, null != busCompany && ($out += ' <tr busCompanyArrangeId="', 
                $line = 33, $out += $escape(busCompany.id), $out += '" badStatus = "', $line = 33, 
                $out += $escape(busCompany.badStatus), $out += '"> <td>', $line = 34, null != busCompany.busCompany && ($line = 34, 
                $out += $escape(busCompany.busCompany.companyName), $line = 34), $out += "</td> <td>", 
                $line = 35, null != busCompany.bus && ($line = 35, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 35), $out += "</td> <td>", $line = 36, null != busCompany.bus && ($out += '<span calss="F-float F-count">', 
                $line = 36, $out += $escape(busCompany.bus.seatCount), $out += "</span>", $line = 36), 
                $out += "</td> <td>", $line = 37, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money">', 
                $line = 37, $out += $escape(busCompany.price), $out += "</span>", $line = 37) : ($out += '<input type="text" name="price" value="', 
                $line = 37, $out += $escape(busCompany.price), $out += '" class="F-float F-money"/>', 
                $line = 37), $out += '<input type="hidden" name="price" value="', $line = 37, $out += $escape(busCompany.price), 
                $out += '" /><input type="hidden" name="realPrice" value="', $line = 37, $out += $escape(busCompany.price), 
                $out += '" /><input type="hidden" name="realCount" value="1" /></td> <td>', $line = 38, 
                1 == busCompany.badStatus ? ($out += '<span class="F-float F-money"> ', $line = 38, 
                $out += $escape(busCompany.realReduceMoney), $out += "</span>", $line = 38) : ($out += '<input type="text" class="F-float F-money" name="realReduceMoney" value="', 
                $line = 38, $out += $escape(busCompany.realReduceMoney), $out += '" old="', $line = 38, 
                $out += $escape(busCompany.realReduceMoney), $out += '"/>', $line = 38), $out += "</td> <td>", 
                $line = 39, 1 == busCompany.badStatus ? ($out += '<span class="BusneedPayMoney F-float F-money">', 
                $line = 39, $out += $escape(busCompany.payedMoney + busCompany.realGuidePayMoney), 
                $out += "</span>", $line = 39) : ($out += '<span class="BusneedPayMoney F-float F-money"></span>', 
                $line = 39), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 40, 
                $out += $escape(busCompany.needPayMoney), $out += '"/></td> <td><span class="F-float F-money">', 
                $line = 41, $out += $escape(busCompany.payedMoney), $out += "</span></td> <td>", 
                $line = 42, 1 == busCompany.badStatus ? ($out += '<span class="F-float F-money">', 
                $line = 42, $out += $escape(busCompany.realGuidePayMoney), $out += "</span>", $line = 42) : ($out += '<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                $line = 42, null != busCompany.billUpdateTime ? ($out += 'value="', $line = 42, 
                $out += $escape(busCompany.realGuidePayMoney), $out += '"', $line = 42) : ($out += "value=0 ", 
                $line = 42), $out += ' old="', $line = 42, $out += $escape(busCompany.realGuidePayMoney), 
                $out += '" maxlength="11" ', $line = 42, 1 == busCompany.isConfirmAccount && ($out += ' readOnly="readOnly" ', 
                $line = 42), $out += "/>", $line = 42), $out += ' <input type="hidden" name="payedMoney" value="', 
                $line = 43, $out += $escape(busCompany.payedMoney), $out += '" ', $line = 43, 1 == busCompany.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 43), $out += '/> <input type="hidden" name="guidePayMoney" value="', $line = 44, 
                $out += $escape(busCompany.guidePayMoney), $out += '" /></td> <td>', $line = 45, 
                null != busCompany.billImage && "" != busCompany.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 46, $out += $escape(busCompany.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 47) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 49), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td>', 
                $line = 52, $out += $escape(busCompany.billRemark), $out += "</td> ", $line = 53, 
                2 == tripPlan.billStatus && ($out += "<td>", $line = 53, 0 == busCompany.isConfirmAccount ? ($out += "未对账", 
                $line = 53) : ($out += "已对账", $line = 53), $out += "</td>", $line = 53), $out += " </tr> ", 
                $line = 55), $out += " ", $line = 56;
            }), $out += " </tbody> </table> ", $line = 60, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 64, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 64), $out += ' type="text" style="width:30%;" value="', $line = 64, null != remarkArrangeList[4] && ($line = 64, 
            $out += $escape(remarkArrangeList[4].opCheckRemark), $line = 64), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 67, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 67), $out += ' type="text" style="width:30%;" value="', $line = 67, null != remarkArrangeList[4] && ($line = 67, 
            $out += $escape(remarkArrangeList[4].financeCheckRemark), $line = 67), $out += '" /> </div> </div> ', 
            $line = 70), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 车费\r\n        <a href="javascript:void(0)" class="T-buspay-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n        <th class="th-border"><span class="necessary">*</span>车牌号</th>\r\n        <th class="th-border"><span class="necessary">*</span>座位数</th>\r\n        <th class="th-border"><span class="necessary">*</span>车费</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th>\r\n        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-bus">\r\n    {{each busCompanyArrange as busCompany}}\r\n    {{if busCompany != null}}\r\n    <tr busCompanyArrangeId="{{busCompany.id}}" badStatus = "{{busCompany.badStatus}}">\r\n        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n        <td>{{if busCompany.bus != null}}<span calss="F-float F-count">{{busCompany.bus.seatCount}}</span>{{/if}}</td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money">{{busCompany.price}}</span>{{else}}<input type="text" name="price" value="{{busCompany.price}}" class="F-float F-money"/>{{/if}}<input type="hidden" name="price" value="{{busCompany.price}}" /><input type="hidden" name="realPrice" value="{{busCompany.price}}" /><input type="hidden" name="realCount" value="1" /></td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money"> {{busCompany.realReduceMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/>{{/if}}</td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney F-float F-money">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" name="needPayMoney" value="{{busCompany.needPayMoney}}"/></td>\r\n        <td><span class="F-float F-money">{{busCompany.payedMoney}}</span></td>\r\n        <td>{{if busCompany.badStatus == 1}}<span class="F-float F-money">{{busCompany.realGuidePayMoney}}</span>{{else}}<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if busCompany.billUpdateTime != null}}value="{{busCompany.realGuidePayMoney}}"{{else}}value=0 {{/if}} old="{{busCompany.realGuidePayMoney}}" maxlength="11" {{if busCompany.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></td>\r\n         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference F-float F-money"></span></td>\r\n        <td>{{busCompany.billRemark}}</td>\r\n        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[4] != null}}{{remarkArrangeList[4].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[4] != null}}{{remarkArrangeList[4].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});