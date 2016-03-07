/*TMODJS:{"debug":true,"version":127,"md5":"e1290c14e5d3ae92e855a31931ee8058"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/restArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, editStatus = ($data.rs, 
            $data.editStatus), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 餐费 <a href="javascript:void(0)" class="T-restaurantpay-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>餐厅</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"><span class="necessary">*</span>餐标</th> <th class="th-border"><span class="necessary">*</span>人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-restaurant"> ', 
            $line = 32, $each(dayList, function(day) {
                $out += " ", $line = 33, null != day.restaurantArrange && ($out += " ", $line = 34, 
                $each(day.restaurantArrange, function(arrangeList) {
                    $out += " ", $line = 35, $each(arrangeList.restaurantArrangeList, function(arrange, index) {
                        $out += " ", $line = 36, null != arrange && ($out += ' <tr badStatus = "', $line = 37, 
                        $out += $escape(arrange.badStatus), $out += '" isChoose="', $line = 37, $out += $escape(arrange.isChoose), 
                        $out += '" restaurantArrangeId="', $line = 37, $out += $escape(arrange.id), $out += '" restaurantId="', 
                        $line = 37, null != arrange.restaurant && ($line = 37, $out += $escape(arrange.restaurant.id), 
                        $line = 37), $out += '" restaurantStandardId="', $line = 37, null != arrange.restaurantStandard && ($line = 37, 
                        $out += $escape(arrange.restaurantStandard.id), $line = 37), $out += '" whichDay="', 
                        $line = 37, $out += $escape(arrange.whichDay), $out += '"> ', $line = 38, 0 == index && ($out += '<td rowspan="', 
                        $line = 38, $out += $escape(arrangeList.restaurantArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 38), $out += " ", $line = 39, 0 == index && ($out += ' <td rowspan="', $line = 40, 
                        $out += $escape(arrangeList.restaurantArrangeList.length), $out += '"> ', $line = 41, 
                        -1 == tripPlan.billStatus ? ($out += " ", $line = 42, 1 == arrange.isChoose ? ($out += ' <select name="chooseRest"> <option value="">导游自选</option> ', 
                        $line = 45, $each(arrange.restaurantChooseArrangeList, function(rs) {
                            $out += ' <option value="', $line = 46, $out += $escape(rs.restaurantId), $out += '">', 
                            $line = 46, $out += $escape(rs.name), $out += "</option> ", $line = 47;
                        }), $out += " </select> ", $line = 49) : ($out += " ", $line = 50, null != arrange.restaurant && ($out += " <span>", 
                        $line = 51, $out += $escape(arrange.restaurant.name), $out += "</span> ", $line = 52), 
                        $out += " ", $line = 53), $out += " ", $line = 54) : ($out += " ", $line = 55, null != arrange.billUpdateTime ? ($out += " ", 
                        $line = 56, -1 == arrange.restaurantId ? ($out += " 导游自选 ", $line = 58) : ($out += " ", 
                        $line = 59, null != arrange.restaurant && ($out += " ", $line = 60, $out += $escape(arrange.restaurant.name), 
                        $out += " ", $line = 61), $out += " ", $line = 62), $out += " ", $line = 63) : ($out += " ", 
                        $line = 64, -1 == arrange.restaurantId ? ($out += " 导游自选 ", $line = 66) : ($out += " ", 
                        $line = 67, null != arrange.restaurant && ($out += " ", $line = 68, $out += $escape(arrange.restaurant.name), 
                        $out += " ", $line = 69), $out += " ", $line = 70), $out += " ", $line = 71), $out += " ", 
                        $line = 72), $out += " </td> ", $line = 74), $out += " <td>", $line = 75, $out += $escape(arrange.type), 
                        $out += "</td> <td>", $line = 76, -1 == tripPlan.billStatus ? ($line = 76, 1 == arrange.isChoose ? ($out += "<input ", 
                        $line = 76, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 76), 
                        $out += ' value="', $line = 76, $out += $escape(arrange.price), $out += '" type="text" name="price" /> <input type="hidden" name="standardId"><input type="hidden" name="type" value="', 
                        $line = 77, $out += $escape(arrange.type), $out += '">', $line = 77) : ($out += ' <span class="F-float F-money">', 
                        $line = 78, $out += $escape(arrange.price), $out += "</span> ", $line = 79), $line = 79) : ($line = 79, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 79, 
                        $out += $escape(arrange.price), $out += "</span>", $line = 79) : ($out += '<span class="price F-float F-money">', 
                        $line = 79, $out += $escape(arrange.price), $out += "</span>", $line = 79), $line = 79), 
                        $out += ' <input type="hidden" name="price" value="', $line = 80, $out += $escape(arrange.price), 
                        $out += '" /></td> <td>', $line = 81, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                        $line = 81, $out += $escape(arrange.memberCount), $out += "</span>", $line = 81) : ($out += '<input style="width:90px;" type="text" class="F-float F-count" name="realCount" ', 
                        $line = 81, null != arrange.billUpdateTime ? ($out += 'value="', $line = 81, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 82) : ($out += 'value="', $line = 82, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 82), $out += ' old="', $line = 82, $out += $escape(arrange.realCount), 
                        $out += '" maxlength="5" ', $line = 83, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 83), $out += "/>", $line = 83), $out += " </td> <td>", $line = 85, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 85, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 85) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                        $line = 85, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 85, 
                        $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 86, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 86), $out += "/>", $line = 86), $out += " </td> <td>", $line = 88, 1 == arrange.badStatus ? ($out += '<span class="restneedPayMoney F-float F-money">', 
                        $line = 88, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 88) : ($out += '<span class="restneedPayMoney"></span>', $line = 88), $out += ' <input type="hidden" value="', 
                        $line = 89, $out += $escape(arrange.needPayMoney), $out += '" name="needPayMoney"></td> <td><span class="F-float F-money">', 
                        $line = 90, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex col-xs-12"> ', 
                        $line = 94, 1 == arrange.badStatus ? ($out += " <span> ", $line = 96, 0 == arrange.payType ? ($out += " 现金 ", 
                        $line = 98) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 100) : 2 == arrange.payType && ($out += " 签单 ", 
                        $line = 102), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 105, 
                        2 == arrange.payType ? ($line = 105, $out += $escape(arrange.signMoney), $line = 105) : ($line = 105, 
                        $out += $escape(arrange.realGuidePayMoney), $line = 105), $out += "</span>", $line = 105) : ($out += ' <select name="payType"> <option value="0" ', 
                        $line = 107, 0 == arrange.payType && ($out += 'selected="selected"', $line = 107), 
                        $out += '>现金</option> <option value="1" ', $line = 108, 1 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 108), $out += '>刷卡</option> <option value="2" ', $line = 109, 2 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 109), $out += '>签单</option> </select> &nbsp; <input style="width:90px;" type="text" class="F-float F-money" name="realGuidePayMoney" ', 
                        $line = 113, 2 == arrange.payType ? ($out += 'value="', $line = 113, $out += $escape(arrange.signMoney), 
                        $out += '"', $line = 113) : ($line = 113, null != arrange.billUpdateTime ? ($out += 'value="', 
                        $line = 113, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 113) : ($out += 'value="', 
                        $line = 113, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 113), 
                        $out += ' old="', $line = 113, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                        $line = 113, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 113), 
                        $line = 113), $out += "/>", $line = 113), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 114, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 115, $out += $escape(arrange.guidePayMoney), $out += '" /></div></td> <td>', 
                        $line = 117, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 118, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 119) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 121), $out += ' </td> <td><span class="difference"></span></td> <td><span class="billRemark">', 
                        $line = 124, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 124, 
                        $out += $escape(arrange.billRemark), $out += '" maxlength="1000" ', $line = 124, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 124), $out += "/>", 
                        $line = 124) : ($line = 124, $out += $escape(arrange.billRemark), $line = 124), 
                        $out += "</span></td> <td>", $line = 125, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 125) : ($out += "已对账", $line = 125), $out += "</td> </tr> ", $line = 127), 
                        $out += " ", $line = 128;
                    }), $out += " ", $line = 129;
                }), $out += " ", $line = 130), $out += " ", $line = 131;
            }), $out += " </tbody> </table> </div> ", $line = 135, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 139, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 139), $out += ' type="text" style="width:30%;" value="', $line = 139, remarkArrangeList.restRemark.length > 0 && ($line = 139, 
            $out += $escape(remarkArrangeList.restRemark[0].opCheckRemark), $line = 139), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 142, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 142), $out += ' type="text" style="width:30%;" value="', $line = 142, remarkArrangeList.restRemark.length > 0 && ($line = 142, 
            $out += $escape(remarkArrangeList.restRemark[0].financeCheckRemark), $line = 142), 
            $out += '" /> </div> </div> ', $line = 145), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i> 餐费\r\n        <a href="javascript:void(0)" class="T-restaurantpay-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n<table class="table table-striped table-bordered table-hover w-1500">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border"><span class="necessary">*</span>时间</th>\r\n            <th class="th-border"><span class="necessary">*</span>餐厅</th>\r\n            <th class="th-border"><span class="necessary">*</span>类型</th>\r\n            <th class="th-border"><span class="necessary">*</span>餐标</th>\r\n            <th class="th-border"><span class="necessary">*</span>人数</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">应付</th>\r\n            <th class="th-border">已付</th>\r\n            <th class="th-border">导付</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">差额</th>\r\n            <th class="th-border">导游报账备注</th>\r\n            <th class="th-border" rowspan="2">是否对账</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-count-restaurant"> \r\n    {{each dayList as day}}\r\n    {{if day.restaurantArrange != null}}\r\n    {{each day.restaurantArrange as arrangeList}}\r\n    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n    {{if arrange != null}}\r\n    <tr badStatus = "{{arrange.badStatus}}"  isChoose="{{arrange.isChoose}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n        {{if index == 0}}\r\n            <td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n            {{if tripPlan.billStatus == -1}}\r\n                {{if arrange.isChoose == 1}}\r\n                    <select name="chooseRest">\r\n                        <option value="">导游自选</option>\r\n                        {{each arrange.restaurantChooseArrangeList as rs}}\r\n                            <option value="{{rs.restaurantId}}">{{rs.name}}</option>\r\n                        {{/each}}\r\n                    </select>\r\n                {{else}}\r\n                    {{if arrange.restaurant != null}}\r\n                        <span>{{arrange.restaurant.name}}</span>\r\n                    {{/if}}\r\n                {{/if}}\r\n            {{else}}\r\n                {{if arrange.billUpdateTime != null}}\r\n                    {{if arrange.restaurantId == -1}}\r\n                        导游自选\r\n                    {{else}}\r\n                        {{if arrange.restaurant !=null}}\r\n                            {{arrange.restaurant.name}}\r\n                        {{/if}}\r\n                    {{/if}}\r\n                {{else}}\r\n                    {{if arrange.restaurantId == -1}}\r\n                        导游自选\r\n                    {{else}}\r\n                        {{if arrange.restaurant !=null}}\r\n                            {{arrange.restaurant.name}}\r\n                        {{/if}}\r\n                    {{/if}}\r\n                {{/if}}\r\n            {{/if}}\r\n            </td>\r\n        {{/if}}\r\n        <td>{{arrange.type}}</td> \r\n        <td>{{if tripPlan.billStatus == -1}}{{if arrange.isChoose == 1}}<input {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} value="{{arrange.price}}" type="text" name="price" />\r\n        <input type="hidden" name="standardId"><input type="hidden" name="type" value="{{arrange.type}}">{{else}}\r\n            <span class="F-float F-money">{{arrange.price}}</span>\r\n        {{/if}}{{else}}{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}}<span class="price F-float F-money">{{arrange.price}}</span>{{/if}}{{/if}}\r\n        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" type="text" class="F-float F-count" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"\r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}\r\n        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n\r\n        <td><div class="inline-flex col-xs-12">\r\n        \r\n        {{if arrange.badStatus == 1}}\r\n        <span>\r\n            {{if arrange.payType == 0}}\r\n                现金\r\n                {{else if arrange.payType == 1}}\r\n                刷卡\r\n                {{else if arrange.payType == 2}}\r\n                签单\r\n            {{/if}}\r\n        </span>\r\n        &nbsp;\r\n        <span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n        <select name="payType">\r\n            <option value="0" {{if arrange.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n            <option value="1" {{if arrange.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n            <option value="2" {{if arrange.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n        </select>\r\n        &nbsp;\r\n        <input style="width:90px;" type="text" class="F-float F-money" name="realGuidePayMoney" \r\n        {{if arrange.payType == 2}}value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime != null}}value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}{{/if}}/>{{/if}}\r\n        <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n        <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></div></td>\r\n        \r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference"></span></td>\r\n        <td><span class="billRemark">{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{arrange.billRemark}}{{/if}}</span></td>\r\n        <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n    </tr>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{/each}}\r\n    {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});