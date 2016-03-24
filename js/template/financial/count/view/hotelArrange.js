/*TMODJS:{"debug":true,"version":166,"md5":"825dc9e097e5692c6e4182d2ad0b6321"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/hotelArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>房费 <a href="javascript:void(0)" class="T-hotel-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-hotel"> ', 
            $line = 32, $each(dayList, function(day) {
                $out += " ", $line = 33, null != day.hotelArrange && ($out += " ", $line = 34, $each(day.hotelArrange, function(arrangeList) {
                    $out += " ", $line = 35, $each(arrangeList.hotelArrangeList, function(arrange, index) {
                        $out += " ", $line = 36, null != arrange && ($out += ' <tr badStatus = "', $line = 37, 
                        $out += $escape(arrange.badStatus), $out += '" hotelArrangeId="', $line = 37, $out += $escape(arrange.id), 
                        $out += '" hotelId="', $line = 37, null != arrange.hotel && ($line = 37, $out += $escape(arrange.hotel.id), 
                        $line = 37), $out += '" restaurantStandardId="', $line = 37, null != arrange.hotelRoom && ($line = 37, 
                        $out += $escape(arrange.hotelRoom.id), $line = 37), $out += '" whichDay = "', $line = 37, 
                        $out += $escape(arrange.whichDay), $out += '"> ', $line = 38, 0 == index && ($out += '<td rowspan="', 
                        $line = 38, $out += $escape(arrangeList.hotelArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 38), $out += " ", $line = 40, 0 == index && ($out += ' <td rowspan="', $line = 41, 
                        $out += $escape(arrangeList.hotelArrangeList.length), $out += '"> ', $line = 42, 
                        null != arrange.hotel && ($out += ' <span class="nameType"> ', $line = 44, $out += $escape(arrange.hotel.name), 
                        $out += " </span> ", $line = 46), $out += " </td> ", $line = 48), $out += " <td>", 
                        $line = 50, null != arrange.hotelRoom && ($line = 50, $out += $escape(arrange.hotelRoom.type), 
                        $line = 50), $out += "</td> <td> ", $line = 53, -1 == tripPlan.billStatus ? ($out += " ", 
                        $line = 54, 1 == arrange.badStatus ? ($out += ' <span class="F-float F-money">', 
                        $line = 55, $out += $escape(arrange.realPrice), $out += "</span> ", $line = 56) : ($out += ' <span class="F-float F-money">', 
                        $line = 57, $out += $escape(arrange.realPrice), $out += '</span> <input type="hidden" name="price" value="', 
                        $line = 58, $out += $escape(arrange.realPrice), $out += '" /> ', $line = 59), $out += " ", 
                        $line = 60) : ($out += " ", $line = 61, 1 == arrange.badStatus ? ($out += ' <input type="hidden" name="price" value="', 
                        $line = 62, $out += $escape(arrange.realPrice), $out += '" readOnly="readOnly"/> ', 
                        $line = 63) : ($out += ' <input type="text" name="price" value="', $line = 64, $out += $escape(arrange.realPrice), 
                        $out += '" class="w-80" ', $line = 64, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 64), $out += "/> ", $line = 65), $out += " ", $line = 66), $out += " </td> <td>", 
                        $line = 69, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                        $line = 69, $out += $escape(arrange.memberCount), $out += "</span>", $line = 69) : ($out += '<input class="F-float F-count w-50" type="text" name="realCount" ', 
                        $line = 69, null != arrange.billUpdateTime ? ($out += 'value="', $line = 69, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 69) : ($out += 'value="', $line = 69, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 69), $out += ' maxlength="5" ', $line = 70, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 70), $out += "/>", $line = 70), $out += " </td> <td>", $line = 73, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 73, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 73) : ($out += '<input type="text" class="F-float F-money w-80" name="realReduceMoney" value="', 
                        $line = 73, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 73, 
                        $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 73, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 73), $out += "/>", $line = 73), $out += " </td> <td>", $line = 76, 1 == arrange.badStatus ? ($out += '<span class="hotelneedPayMoney F-float F-money">', 
                        $line = 76, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 76) : ($out += '<span class="hotelneedPayMoney"></span><input name="needPayMoney" type="hidden" value="', 
                        $line = 76, $out += $escape(arrange.needPayMoney), $out += '">', $line = 76), $out += ' </td> <td><span class="F-float F-money">', 
                        $line = 79, $out += $escape(arrange.payedMoney), $out += '</span></td> <td> <div class="inline-flex"> ', 
                        $line = 83, 1 == arrange.badStatus ? ($out += " <span> ", $line = 85, 0 == arrange.realPayType ? ($out += " 现金 ", 
                        $line = 87) : 1 == arrange.realPayType ? ($out += " 刷卡 ", $line = 89) : 2 == arrange.realPayType && ($out += " 签单 ", 
                        $line = 91), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 94, 
                        2 == arrange.realPayType ? ($line = 94, $out += $escape(arrange.realSignMoney), 
                        $line = 94) : ($line = 94, $out += $escape(arrange.realGuidePayMoney), $line = 94), 
                        $out += "</span>", $line = 94) : ($out += ' <select name="payType" ', $line = 95, 
                        1 == arrange.isConfirmAccount && ($out += 'disabled="disabled"', $line = 95), $out += '> <option value="0" ', 
                        $line = 96, 0 == arrange.realPayType && ($out += 'selected="selected"', $line = 96), 
                        $out += '>现金</option> <option value="1" ', $line = 97, 1 == arrange.realPayType && ($out += 'selected="selected"', 
                        $line = 97), $out += '>刷卡</option> <option value="2" ', $line = 98, 2 == arrange.realPayType && ($out += 'selected="selected"', 
                        $line = 98), $out += '>签单</option> </select> &nbsp; <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" ', 
                        $line = 102, 2 == arrange.realPayType ? ($out += 'value="', $line = 102, $out += $escape(arrange.realSignMoney), 
                        $out += '"', $line = 102) : ($line = 102, null != arrange.billUpdateTime ? ($out += ' value="', 
                        $line = 102, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 102) : ($out += 'value="', 
                        $line = 102, $out += $escape(arrange.guidePayMoney), $out += '" ', $line = 102), 
                        $out += ' maxlength="11" ', $line = 102), $out += " ", $line = 102, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly" ', 
                        $line = 102), $out += "/>", $line = 102), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 103, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 104, $out += $escape(arrange.guidePayMoney), $out += '" /></div></td> <td>', 
                        $line = 106, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 107, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 108) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 110), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td><input name="billRemark" value="', 
                        $line = 113, $out += $escape(arrange.billRemark), $out += '" maxlength="1000"</td> <td> ', 
                        $line = 115, 0 == arrange.isConfirmAccount ? ($out += " 未对账 ", $line = 117) : ($out += " 已对账 ", 
                        $line = 119), $out += " &nbsp;&nbsp; ", $line = 121, 0 == arrange.payedMoney && 0 == arrange.isConfirmAccount ? ($out += ' <a href="javascript:void(0)" class="T-hotelArrDel">删除</a> ', 
                        $line = 123) : ($out += ' <span style="color:#bbb;">删除</span> ', $line = 125), $out += " </td> </tr> ", 
                        $line = 128), $out += " ", $line = 129;
                    }), $out += " ", $line = 130;
                }), $out += " ", $line = 131), $out += " ", $line = 132;
            }), $out += " </tbody> </table> </div> ", $line = 136, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 140, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 140), $out += ' type="text" style="width:30%;" value="', $line = 140, remarkArrangeList.hotelRemark.length > 0 && ($line = 140, 
            $out += $escape(remarkArrangeList.hotelRemark[0].opCheckRemark), $line = 140), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 143, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 143), $out += ' type="text" style="width:30%;" value="', $line = 143, remarkArrangeList.hotelRemark.length > 0 && ($line = 143, 
            $out += $escape(remarkArrangeList.hotelRemark[0].financeCheckRemark), $line = 143), 
            $out += '" /> </div> </div> ', $line = 146), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i>房费\r\n            <a href="javascript:void(0)" class="T-hotel-add">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table overflow-table table-striped table-bordered table-hover w-1500">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>间数</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付</th>\r\n                <th class="th-border">已付</th>\r\n                <th class="th-border">导付</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">差额</th>\r\n                <th class="th-border">导游报账备注</th>\r\n                <th class="th-border" rowspan="2">是否对账</th>\r\n            </tr> \r\n        </thead>\r\n        <tbody class="T-count-hotel">\r\n            {{each dayList as day}}\r\n            {{if day.hotelArrange != null}}\r\n            {{each day.hotelArrange as arrangeList}}\r\n            {{each arrangeList.hotelArrangeList as arrange index}}\r\n            {{if arrange != null}}\r\n                <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}" whichDay = "{{arrange.whichDay}}">\r\n                    {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n\r\n                    {{if index == 0}}\r\n                        <td rowspan="{{arrangeList.hotelArrangeList.length}}">\r\n                            {{if arrange.hotel != null}}\r\n                                <span class="nameType">\r\n                                    {{arrange.hotel.name}}\r\n                                </span>\r\n                            {{/if}}\r\n                        </td>\r\n                    {{/if}}\r\n\r\n                    <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n\r\n                    <td>\r\n                        {{if tripPlan.billStatus == -1}}\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                            {{else}}\r\n                                <span class="F-float F-money">{{arrange.realPrice}}</span>\r\n                                <input type="hidden" name="price" value="{{arrange.realPrice}}" />\r\n                            {{/if}}\r\n                        {{else}}\r\n                            {{if arrange.badStatus == 1}}\r\n                                <input type="hidden" name="price" value="{{arrange.realPrice}}" readOnly="readOnly"/>\r\n                            {{else}}\r\n                                <input type="text" name="price" value="{{arrange.realPrice}}" class="w-80" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            {{/if}}\r\n                        {{/if}}\r\n                    </td>\r\n\r\n                    <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input  class="F-float F-count w-50" type="text" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5" \r\n                    {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                    </td>\r\n\r\n                    <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" class="F-float F-money w-80" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                    </td>\r\n\r\n                    <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span><input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}">{{/if}}\r\n                    </td>\r\n\r\n                    <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n\r\n                    <td>\r\n                    <div class="inline-flex">\r\n                    {{if arrange.badStatus == 1}}\r\n                    <span>\r\n                        {{if arrange.realPayType == 0}}\r\n                            现金\r\n                            {{else if arrange.realPayType == 1}}\r\n                            刷卡\r\n                            {{else if arrange.realPayType == 2}}\r\n                            签单\r\n                        {{/if}}\r\n                    </span>\r\n                    &nbsp;\r\n                    <span class="F-float F-money">{{if arrange.realPayType == 2}}{{arrange.realSignMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n                    <select name="payType" {{if arrange.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                        <option value="0" {{if arrange.realPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                        <option value="1" {{if arrange.realPayType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                        <option value="2" {{if arrange.realPayType == 2}}selected="selected"{{/if}}>签单</option>\r\n                    </select>\r\n                    &nbsp;\r\n                    <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" \r\n                    {{if arrange.realPayType == 2}}value="{{arrange.realSignMoney}}"{{else}}{{if arrange.billUpdateTime != null }} value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}" {{/if}}  maxlength="11" {{/if}} {{if arrange.isConfirmAccount==1 }}readOnly="readOnly" {{/if}}/>{{/if}}\r\n                        <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                        <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></div></td>\r\n\r\n                    <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                            <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                        {{else}}\r\n                            <span style="color:#bbb;">查看</span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td><span class="difference F-float F-money"></span></td>\r\n                    <td><input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000"</td>\r\n                    <td>\r\n                        {{if arrange.isConfirmAccount == 0}}\r\n                            未对账\r\n                        {{else}}\r\n                            已对账\r\n                        {{/if}}\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.payedMoney == 0 &&　arrange.isConfirmAccount == 0}}\r\n                            <a href="javascript:void(0)" class="T-hotelArrDel">删除</a>\r\n                        {{else}}\r\n                            <span style="color:#bbb;">删除</span>\r\n                        {{/if}}\r\n                    </td>\r\n                </tr>\r\n            {{/if}}\r\n            {{/each}}\r\n            {{/each}}\r\n            {{/if}}\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].opCheckRemark}}{{/if}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}{{/if}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});