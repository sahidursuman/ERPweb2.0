/*TMODJS:{"debug":true,"version":49,"md5":"bc6bfe76f5ad473b0fecdf3dad9ffa4b"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/otherOutArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>其它支出 <a href="javascript:void(0)" class="T-otherOut-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-otherOut"> ', 
            $line = 30, $each(dayList, function(day) {
                $out += " ", $line = 31, null != day.otherArrange && ($out += " ", $line = 32, $each(day.otherArrange, function(arrange) {
                    $out += " ", $line = 33, null != arrange && ($out += ' <tr otherArrangeId="', $line = 34, 
                    $out += $escape(arrange.id), $out += '" badStatus = "', $line = 34, $out += $escape(arrange.badStatus), 
                    $out += '" whichDay="', $line = 34, $out += $escape(arrange.whichDay), $out += '"> <td><span class="whichDay"></span></td></td> <td>', 
                    $line = 36, $out += $escape(arrange.name), $out += "</td> <td>", $line = 37, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 37, $out += $escape(arrange.price), $out += "</span>", $line = 37) : ($out += ' <span class="price F-float F-money">', 
                    $line = 37, $out += $escape(arrange.price), $out += "</span>", $line = 37), $out += ' <input type="hidden" name="price" value="', 
                    $line = 38, $out += $escape(arrange.price), $out += '" ', $line = 38, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 38), $out += "/></td> <td>", $line = 39, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                    $line = 39, $out += $escape(arrange.memberCount), $out += "</span>", $line = 39) : ($out += ' <input style="width:90px;" type="text" class="F-float F-count" name="realCount" ', 
                    $line = 39, arrange.billUpdateTime ? ($out += 'value="', $line = 39, $out += $escape(arrange.realCount), 
                    $out += '"', $line = 39) : ($out += 'value="', $line = 39, $out += $escape(arrange.memberCount), 
                    $out += '" ', $line = 39), $out += ' old="', $line = 39, $out += $escape(arrange.realCount), 
                    $out += '" old="', $line = 39, $out += $escape(arrange.realCount), $out += '" maxlength="5" ', 
                    $line = 40, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 40), 
                    $out += "/>", $line = 40), $out += " </td> <td>", $line = 42, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 42, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 42) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                    $line = 42, $out += $escape(arrange.realReduceMoney), $out += '"/>', $line = 42), 
                    $out += " </td> <td>", $line = 44, 1 == arrange.badStatus ? ($out += '<span class="otherOutNeedPayMoney F-float F-money">', 
                    $line = 44, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                    $line = 44) : ($out += '<span class="otherOutNeedPayMoney F-float F-money"></span>', 
                    $line = 44), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 45, 
                    $out += $escape(arrange.needPayMoney), $out += '"></td> <td><span class="F-float F-money">', 
                    $line = 46, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 47, 
                    1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 47, 
                    $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 47) : ($out += '<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                    $line = 47, null != arrange.billUpdateTime ? ($out += 'value="', $line = 47, $out += $escape(arrange.realGuidePayMoney), 
                    $out += '" ', $line = 47) : ($out += 'value="', $line = 47, $out += $escape(arrange.guidePayMoney), 
                    $out += '"', $line = 47), $out += ' old="', $line = 47, $out += $escape(arrange.realGuidePayMoney), 
                    $out += '" maxlength="11" ', $line = 47, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 47), $out += "/>", $line = 47), $out += ' <input type="hidden" name="payedMoney" value="', 
                    $line = 48, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                    $line = 49, $out += $escape(arrange.guidePayMoney), $out += '" /></td> <td>', $line = 50, 
                    null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 51, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 52) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 54), $out += ' </td> <td><span class="difference"></span></td> <td>', 
                    $line = 57, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 57, 
                    $out += $escape(arrange.billRemark), $out += '" maxlength="1000" />', $line = 57) : ($line = 57, 
                    $out += $escape(arrange.billRemark), $line = 57), $out += "</td> <td>", $line = 58, 
                    0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 58) : ($out += "已对账", $line = 58), 
                    $out += "</td> </tr> ", $line = 60), $out += " ", $line = 61;
                }), $out += " ", $line = 62), $out += " ", $line = 63;
            }), $out += " </tbody> </table> ", $line = 67, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 71, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 71), $out += ' type="text" style="width:30%;" value="', $line = 71, remarkArrangeList.otherOutRemark.length > 0 && ($line = 71, 
            $out += $escape(remarkArrangeList.otherOutRemark[0].opCheckRemark), $line = 71), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 74, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 74), $out += ' type="text" style="width:30%;" value="', $line = 74, remarkArrangeList.otherOutRemark.length > 0 && ($line = 74, 
            $out += $escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark), $line = 74), 
            $out += '" /> </div> </div> ', $line = 77), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>其它支出\r\n        <a href="javascript:void(0)" class="T-otherOut-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th> \r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-otherOut"> \r\n    {{each dayList as day}}\r\n    {{if day.otherArrange != null}}\r\n    {{each day.otherArrange as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr otherArrangeId="{{arrange.id}}" badStatus = "{{arrange.badStatus}}" whichDay="{{arrange.whichDay}}">\r\n        <td><span class="whichDay"></span></td></td>\r\n        <td>{{arrange.name}}</td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}} <span class="price F-float F-money">{{arrange.price}}</span>{{/if}}\r\n        <input type="hidden" name="price" value="{{arrange.price}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}  <input style="width:90px;" type="text" class="F-float F-count" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}" {{/if}} old="{{arrange.realCount}}" old="{{arrange.realCount}}" maxlength="5" \r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n       </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}"/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if arrange.billUpdateTime != null}}value="{{arrange.realGuidePayMoney}}" {{else}}value="{{arrange.guidePayMoney}}"{{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference"></span></td>\r\n        <td>{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" />{{else}}{{arrange.billRemark}}{{/if}}</td>\r\n        <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});