/*TMODJS:{"debug":true,"version":62,"md5":"c0fa745cc55612720c3b7a2963550430"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/restArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = ($data.rs, 
            $data.editStatus), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 餐费 <a href="javascript:void(0)" class="T-restaurantpay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>餐厅</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"><span class="necessary">*</span>餐标</th> <th class="th-border"><span class="necessary">*</span>人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ', 
            $line = 27, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 27), $out += ' </tr> </thead> <tbody class="T-count-restaurant"> ', $line = 31, 
            $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.restaurantArrange && ($out += " ", $line = 33, 
                $each(day.restaurantArrange, function(arrangeList) {
                    $out += " ", $line = 34, $each(arrangeList.restaurantArrangeList, function(arrange, index) {
                        $out += " ", $line = 35, null != arrange && ($out += ' <tr badStatus = "', $line = 36, 
                        $out += $escape(arrange.badStatus), $out += '" isChoose="', $line = 36, $out += $escape(arrange.isChoose), 
                        $out += '" restaurantArrangeId="', $line = 36, $out += $escape(arrange.id), $out += '" restaurantId="', 
                        $line = 36, null != arrange.restaurant && ($line = 36, $out += $escape(arrange.restaurant.id), 
                        $line = 36), $out += '" restaurantStandardId="', $line = 36, null != arrange.restaurantStandard && ($line = 36, 
                        $out += $escape(arrange.restaurantStandard.id), $line = 36), $out += '"> ', $line = 37, 
                        0 == index && ($out += '<td rowspan="', $line = 37, $out += $escape(arrangeList.restaurantArrangeList.length), 
                        $out += '">第', $line = 37, $out += $escape(arrange.whichDay), $out += "天</td>", 
                        $line = 37), $out += " ", $line = 38, 0 == index && ($out += '<td rowspan="', $line = 38, 
                        $out += $escape(arrangeList.restaurantArrangeList.length), $out += '"> ', $line = 39, 
                        -1 == tripPlan.billStatus ? ($out += " ", $line = 40, 1 == arrange.isChoose ? ($out += ' <select name="chooseRest"> ', 
                        $line = 42, $each(arrange.restaurantChooseArrangeList, function(rs) {
                            $out += ' <option value="', $line = 43, $out += $escape(rs.restaurantId), $out += '">', 
                            $line = 43, $out += $escape(rs.name), $out += "</option> ", $line = 44;
                        }), $out += " </select> ", $line = 46) : ($out += " ", $line = 47, null != arrange.restaurant && ($out += " <span>", 
                        $line = 48, $out += $escape(arrange.restaurant.name), $out += "</span> ", $line = 49), 
                        $out += " ", $line = 50), $out += " ", $line = 51) : ($line = 51, null != arrange.billUpdateTime ? ($out += " ", 
                        $line = 52, null != arrange.restaurant && ($line = 52, $out += $escape(arrange.restaurant.name), 
                        $line = 52), $line = 52) : ($line = 52, 1 == arrange.isChoose ? ($out += "自选", $line = 52) : ($line = 52, 
                        null != arrange.restaurant && ($line = 52, $out += $escape(arrange.restaurant.name), 
                        $line = 52), $line = 52), $line = 52), $line = 52), $out += "</td>", $line = 52), 
                        $out += " <td>", $line = 53, $out += $escape(arrange.type), $out += "</td> <td>", 
                        $line = 54, -1 == tripPlan.billStatus ? ($line = 54, 1 == arrange.isChoose ? ($out += '<input value="', 
                        $line = 54, $out += $escape(arrange.price), $out += '" type="text" name="price"/> <input type="hidden" name="standardId"><input type="hidden" name="type" value="', 
                        $line = 55, $out += $escape(arrange.type), $out += '">', $line = 55) : ($out += ' <span class="F-float F-money">', 
                        $line = 56, $out += $escape(arrange.price), $out += "</span> ", $line = 57), $line = 57) : ($line = 57, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 57, 
                        $out += $escape(arrange.price), $out += "</span>", $line = 57) : ($out += '<span class="price F-float F-money">', 
                        $line = 57, $out += $escape(arrange.price), $out += "</span>", $line = 57), $line = 57), 
                        $out += ' <input type="hidden" name="price" value="', $line = 58, $out += $escape(arrange.price), 
                        $out += '" /></td> <td>', $line = 59, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                        $line = 59, $out += $escape(arrange.memberCount), $out += "</span>", $line = 59) : ($out += '<input style="width:90px;" type="text" class="F-float F-count" name="realCount" ', 
                        $line = 59, null != arrange.billUpdateTime ? ($out += 'value="', $line = 59, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 60) : ($out += 'value="', $line = 60, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 60), $out += ' old="', $line = 60, $out += $escape(arrange.realCount), 
                        $out += '" maxlength="5" ', $line = 61, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 61), $out += "/>", $line = 61), $out += " </td> <td>", $line = 63, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 63, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 63) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                        $line = 63, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 63, 
                        $out += $escape(arrange.realReduceMoney), $out += '"/>', $line = 63), $out += " </td> <td>", 
                        $line = 65, 1 == arrange.badStatus ? ($out += '<span class="restneedPayMoney F-float F-money">', 
                        $line = 65, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 65) : ($out += '<span class="restneedPayMoney"></span>', $line = 65), $out += ' <input type="hidden" value="', 
                        $line = 66, $out += $escape(arrange.needPayMoney), $out += '" name="needPayMoney"></td> <td><span class="F-float F-money">', 
                        $line = 67, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 68, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 68, 
                        $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 68) : ($out += '<input style="width:90px;" type="text" class="F-float F-money" name="realGuidePayMoney" ', 
                        $line = 68, null != arrange.billUpdateTime ? ($out += 'value="', $line = 68, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '"', $line = 68) : ($out += 'value="', $line = 68, $out += $escape(arrange.guidePayMoney), 
                        $out += '" ', $line = 68), $out += ' old="', $line = 68, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '" maxlength="11" ', $line = 68, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 68), $out += "/>", $line = 68), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 69, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 70, $out += $escape(arrange.guidePayMoney), $out += '" /></td> <td>', $line = 71, 
                        null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 72, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 73) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 75), $out += ' </td> <td><span class="difference"></span></td> <td><span class="billRemark">', 
                        $line = 78, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 78, 
                        $out += $escape(arrange.billRemark), $out += '" maxlength="1000" />', $line = 78) : ($line = 78, 
                        $out += $escape(arrange.billRemark), $line = 78), $out += "</span></td> ", $line = 79, 
                        2 == tripPlan.billStatus && ($out += "<td>", $line = 79, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 79) : ($out += "已对账", $line = 79), $out += "</td>", $line = 79), $out += " </tr> ", 
                        $line = 81), $out += " ", $line = 82;
                    }), $out += " ", $line = 83;
                }), $out += " ", $line = 84), $out += " ", $line = 85;
            }), $out += " </tbody> </table> ", $line = 89, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 93, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 93), $out += ' type="text" style="width:30%;" value="', $line = 93, remarkArrangeList.restRemark.length > 0 && ($line = 93, 
            $out += $escape(remarkArrangeList.restRemark[0].opCheckRemark), $line = 93), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 96, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 96), $out += ' type="text" style="width:30%;" value="', $line = 96, remarkArrangeList.restRemark.length > 0 && ($line = 96, 
            $out += $escape(remarkArrangeList.restRemark[0].financeCheckRemark), $line = 96), 
            $out += '" /> </div> </div> ', $line = 99), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 餐费\r\n        <a href="javascript:void(0)" class="T-restaurantpay-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border"><span class="necessary">*</span>时间</th>\r\n            <th class="th-border"><span class="necessary">*</span>餐厅</th>\r\n            <th class="th-border"><span class="necessary">*</span>类型</th>\r\n            <th class="th-border"><span class="necessary">*</span>餐标</th>\r\n            <th class="th-border"><span class="necessary">*</span>人数</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">应付</th>\r\n            <th class="th-border">已付</th>\r\n            <th class="th-border">导付</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">差额</th>\r\n            <th class="th-border">导游报账备注</th>\r\n            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-count-restaurant"> \r\n    {{each dayList as day}}\r\n    {{if day.restaurantArrange != null}}\r\n    {{each day.restaurantArrange as arrangeList}}\r\n    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr badStatus = "{{arrange.badStatus}}"  isChoose="{{arrange.isChoose}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}">\r\n        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n        {{if tripPlan.billStatus == -1}}\r\n            {{if arrange.isChoose == 1}}\r\n                <select name="chooseRest">\r\n                    {{each arrange.restaurantChooseArrangeList as rs}}\r\n                        <option value="{{rs.restaurantId}}">{{rs.name}}</option>\r\n                    {{/each}}\r\n                </select>\r\n            {{else}}\r\n                {{if arrange.restaurant != null}}\r\n                    <span>{{arrange.restaurant.name}}</span>\r\n                {{/if}}\r\n            {{/if}}\r\n        {{else}}{{if arrange.billUpdateTime != null}}\r\n        {{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{else}}{{if arrange.isChoose == 1}}自选{{else}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{/if}}{{/if}}{{/if}}</td>{{/if}}\r\n        <td>{{arrange.type}}</td> \r\n        <td>{{if tripPlan.billStatus == -1}}{{if arrange.isChoose == 1}}<input value="{{arrange.price}}" type="text" name="price"/>\r\n        <input type="hidden" name="standardId"><input type="hidden" name="type" value="{{arrange.type}}">{{else}}\r\n            <span class="F-float F-money">{{arrange.price}}</span>\r\n        {{/if}}{{else}}{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}}<span class="price F-float F-money">{{arrange.price}}</span>{{/if}}{{/if}}\r\n        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" type="text" class="F-float F-count" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}\r\n        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}<input style="width:90px;" type="text" class="F-float F-money" name="realGuidePayMoney" {{if arrange.billUpdateTime != null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference"></span></td>\r\n        <td><span class="billRemark">{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" />{{else}}{{arrange.billRemark}}{{/if}}</span></td>\r\n        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});