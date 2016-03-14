/*TMODJS:{"debug":true,"version":90,"md5":"7093c6992aa175f4a03b63cc32a9aa5e"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/scenicArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>景区 <a href="javascript:void(0)" class="T-scenic-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover w-1400"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-scenic"> ', 
            $line = 32, $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.scenicArrange && ($out += " ", $line = 32, 
                $each(day.scenicArrange, function(arrangeList) {
                    $out += " ", $line = 32, $each(arrangeList.scenicArrangeList, function(arrange, index) {
                        $out += " ", $line = 32, null != arrange && ($out += ' <tr badStatus="', $line = 33, 
                        $out += $escape(arrange.badStatus), $out += '" scenicArrangeId="', $line = 33, $out += $escape(arrange.id), 
                        $out += '" scenicId="', $line = 33, $out += $escape(arrange.scenicId), $out += '" scenicItemId="', 
                        $line = 33, $out += $escape(arrange.hotelRoomId), $out += '" whichDay="', $line = 33, 
                        $out += $escape(arrange.whichDay), $out += '"> ', $line = 34, 0 == index && ($out += ' <td rowspan="', 
                        $line = 35, $out += $escape(arrangeList.scenicArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 35), $out += " ", $line = 35, 0 == index && ($out += ' <td rowspan="', $line = 37, 
                        $out += $escape(arrangeList.scenicArrangeList.length), $out += '">', $line = 37, 
                        null != arrange.scenic && ($line = 37, $out += $escape(arrange.scenic.name), $line = 37), 
                        $out += "</td>", $line = 37), $out += " <td>", $line = 39, null != arrange.scenicItem && ($line = 39, 
                        $out += $escape(arrange.scenicItem.name), $line = 39), $out += "</td> <td>", $line = 41, 
                        1 == arrange.badStatus && ($out += ' <input type="text" name="price" value="', $line = 41, 
                        $out += $escape(arrange.price), $out += '" readOnly="readOnly"/>', $line = 41), 
                        $out += ' <input type="text" name="price" value="', $line = 42, $out += $escape(arrange.price), 
                        $out += '" class="w-80"/> </td> <td>', $line = 45, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                        $line = 45, $out += $escape(arrange.memberCount), $out += "</span>", $line = 45) : ($out += ' <input class="F-float F-count w-50" type="text" name="realCount" ', 
                        $line = 46, arrange.billUpdateTime ? ($out += 'value="', $line = 46, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 46) : ($out += 'value="', $line = 46, $out += $escape(arrange.memberCount), 
                        $out += '" ', $line = 46), $out += ' maxlength="5" ', $line = 46, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                        $line = 46), $out += "/>", $line = 46), $out += " </td> <td>", $line = 49, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 49, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 49) : ($out += ' <input type="text" class="F-float F-money w-80" name="realReduceMoney" value="', 
                        $line = 50, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 50, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 50), $out += "/>", 
                        $line = 50), $out += " </td> <td>", $line = 53, 1 == arrange.badStatus ? ($out += '<span class="scenicneedPayMoney F-float F-money">', 
                        $line = 53, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 53) : ($out += '<span class="scenicneedPayMoney F-float F-money"></span>', 
                        $line = 53), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 54, 
                        $out += $escape(arrange.needPayMoney), $out += '"> </td> <td><span class="F-float F-money">', 
                        $line = 57, $out += $escape(arrange.payedMoney), $out += '</span></td> <td> <div class="inline-flex"> ', 
                        $line = 61, 1 == arrange.badStatus ? ($out += " <span> ", $line = 63, 0 == arrange.payType ? ($out += " 现金 ", 
                        $line = 65) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 67) : 2 == arrange.payType && ($out += " 签单 ", 
                        $line = 69), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 71, 
                        2 == arrange.payType ? ($line = 71, $out += $escape(arrange.signMoney), $line = 71) : ($line = 71, 
                        $out += $escape(arrange.realGuidePayMoney), $line = 71), $out += "</span>", $line = 71) : ($out += ' <select name="payType"> <option value="0" ', 
                        $line = 73, 0 == arrange.payType && ($out += 'selected="selected" ', $line = 73), 
                        $out += '>现金</option> <option value="1" ', $line = 74, 1 == arrange.payType && ($out += 'selected="selected" ', 
                        $line = 74), $out += '>刷卡</option> <option value="2" ', $line = 75, 2 == arrange.payType && ($out += 'selected="selected" ', 
                        $line = 75), $out += '>签单</option> </select> &nbsp; <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" ', 
                        $line = 78, 2 == arrange.payType ? ($out += 'value="', $line = 78, $out += $escape(arrange.signMoney), 
                        $out += '" ', $line = 78) : ($line = 78, arrange.billUpdateTime ? ($out += ' value="', 
                        $line = 78, $out += $escape(arrange.realGuidePayMoney), $out += '" ', $line = 78) : ($out += 'value="', 
                        $line = 78, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 78), $out += ' maxlength="11" ', 
                        $line = 78, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 78), 
                        $line = 78), $out += "/>", $line = 78), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 79, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 80, $out += $escape(arrange.guidePayMoney), $out += '" /> </div> </td> <td>', 
                        $line = 84, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 85, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 85) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 86), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td> <input value="', 
                        $line = 92, $out += $escape(arrange.billRemark), $out += '" name="billRemark" type="text" ', 
                        $line = 92, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', $line = 92), 
                        $out += "> </td> <td>", $line = 95, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 95) : ($out += "已对账", $line = 95), $out += "</td> </tr> ", $line = 97), 
                        $out += " ", $line = 97;
                    }), $out += " ", $line = 97;
                }), $out += " ", $line = 97), $out += " ", $line = 97;
            }), $out += " </tbody> </table> </div> ", $line = 101, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 105, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly" ', 
            $line = 105), $out += ' type="text" style="width:30%;" value="', $line = 105, remarkArrangeList.scenicRemark.length > 0 && ($line = 105, 
            $out += $escape(remarkArrangeList.scenicRemark[0].opCheckRemark), $line = 105), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 107, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly" ', 
            $line = 107), $out += ' type="text" style="width:30%;" value="', $line = 107, remarkArrangeList.scenicRemark.length > 0 && ($line = 107, 
            $out += $escape(remarkArrangeList.scenicRemark[0].financeCheckRemark), $line = 107), 
            $out += '" /> </div> </div>', $line = 109), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i>景区\r\n                        <a href="javascript:void(0)" class="T-scenic-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover w-1400">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>景区</th>\r\n                <th class="th-border"><span class="necessary">*</span>收费项目</th>\r\n                <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付</th>\r\n                <th class="th-border">已付</th>\r\n                <th class="th-border">导付</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">差额</th>\r\n                <th class="th-border">导游报账备注</th>\r\n                <th class="th-border" rowspan="2">是否对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-count-scenic">\r\n            {{each dayList as day}} {{if day.scenicArrange != null}} {{each day.scenicArrange as arrangeList}} {{each arrangeList.scenicArrangeList as arrange index}} {{if arrange != null}}\r\n            <tr badStatus="{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}">\r\n                {{if index == 0}}\r\n                <td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}} {{if index == 0}}\r\n\r\n                <td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n\r\n                <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n\r\n                <td>{{if arrange.badStatus == 1}} <input type="text" name="price" value="{{arrange.price}}" readOnly="readOnly"/>{{/if}}\r\n                    <input type="text" name="price" value="{{arrange.price}}" class="w-80"/>\r\n                </td>\r\n\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}\r\n                    <input  class="F-float F-count w-50" type="text" name="realCount" {{if !!arrange.billUpdateTime}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}" {{/if}} maxlength="5" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>{{/if}}\r\n                </td>\r\n\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}\r\n                    <input type="text" class="F-float F-money w-80" name="realReduceMoney" value="{{arrange.realReduceMoney}}"  {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>{{/if}}\r\n                </td>\r\n\r\n                <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney F-float F-money"></span>{{/if}}\r\n                    <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}">\r\n                </td>\r\n\r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n\r\n                <td>\r\n                    <div class="inline-flex">\r\n                        {{if arrange.badStatus == 1}}\r\n                        <span>\r\n                                {{if arrange.payType == 0}}\r\n                                    现金\r\n                                    {{else if arrange.payType == 1}}\r\n                                    刷卡\r\n                                    {{else if arrange.payType == 2}}\r\n                                    签单\r\n                                {{/if}}\r\n                            </span> &nbsp;\r\n                        <span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n                        <select name="payType">\r\n                            <option value="0" {{if arrange.payType==0 }}selected="selected" {{/if}}>现金</option>\r\n                            <option value="1" {{if arrange.payType==1 }}selected="selected" {{/if}}>刷卡</option>\r\n                            <option value="2" {{if arrange.payType==2 }}selected="selected" {{/if}}>签单</option>\r\n                        </select>\r\n                        &nbsp;\r\n                        <input  class="F-float F-money w-80" type="text" name="realGuidePayMoney" {{if arrange.payType==2 }}value="{{arrange.signMoney}}" {{else}}{{if !!arrange.billUpdateTime}} value="{{arrange.realGuidePayMoney}}" {{else}}value="{{arrange.guidePayMoney}}" {{/if}}  maxlength="11" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}{{/if}}/>{{/if}}\r\n                        <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                        <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" />\r\n                    </div>\r\n                </td>\r\n\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a> {{else}}\r\n                    <span style="color:#bbb;">查看</span> {{/if}}\r\n                </td>\r\n\r\n                <td><span class="difference F-float F-money"></span></td>\r\n\r\n                <td>\r\n                    <input value="{{arrange.billRemark}}" name="billRemark" type="text" {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}>\r\n                </td>\r\n\r\n                <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n            </tr>\r\n            {{/if}} {{/each}} {{/each}} {{/if}} {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div>\r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus==1 && isFinance)) }}readonly="readonly" {{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus==0 && isOp)) }}readonly="readonly" {{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>{{/if}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});