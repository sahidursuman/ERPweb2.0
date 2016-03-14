/*TMODJS:{"debug":true,"version":121,"md5":"1a2c795d8f8e575fc7037d93f61ba1e0"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/ticketArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, ticketArrangeList = $data.ticketArrangeList, $escape = ($data.ticketArrange, 
            $data.$index, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>票务 <a href="javascript:void(0)" class="T-ticket-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="overflow-x min-w-1050"> <table class="table overflow-table table-striped table-bordered table-hover w-1500"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务商家</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"><span class="necessary">*</span>日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border"><span class="necessary">*</span>座位级别</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-ticket"> ', 
            $line = 36, $each(ticketArrangeList, function(ticketArrange) {
                $out += " ", $line = 37, $each(ticketArrange.ticketArrangeList, function(arrange, index) {
                    $out += ' <tr badStatus = "', $line = 38, $out += $escape(arrange.badStatus), $out += '" ticketArrangeId="', 
                    $line = 38, $out += $escape(arrange.id), $out += '" ticketId="', $line = 38, $out += $escape(arrange.ticket.id), 
                    $out += '" itemId="', $line = 38, $out += $escape(arrange.id), $out += '"> ', $line = 39, 
                    0 == index && ($out += '<td rowspan="', $line = 39, $out += $escape(ticketArrange.ticketArrangeList.length), 
                    $out += '">', $line = 39, null != arrange.ticket && ($line = 39, $out += $escape(arrange.ticket.name), 
                    $line = 39), $out += "</td>", $line = 39), $out += " ", $line = 41, 0 == index && ($out += '<td rowspan="', 
                    $line = 41, $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', 
                    $line = 41, 1 == arrange.type ? ($out += "机票", $line = 41) : 2 == arrange.type ? ($out += "汽车票", 
                    $line = 41) : 3 == arrange.type ? ($out += "火车票", $line = 41) : 4 == arrange.type && ($out += "轮船票", 
                    $line = 41), $out += "</td>", $line = 41), $out += " ", $line = 43, 0 == index && ($out += '<td rowspan="', 
                    $line = 43, $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', 
                    $line = 43, $out += $escape(arrange.startTime), $out += "</td>", $line = 43), $out += " ", 
                    $line = 45, 0 == index && ($out += '<td rowspan="', $line = 45, $out += $escape(ticketArrange.ticketArrangeList.length), 
                    $out += '">', $line = 45, $out += $escape(arrange.startingCity), $out += "</td>", 
                    $line = 45), $out += " ", $line = 47, 0 == index && ($out += '<td rowspan="', $line = 47, 
                    $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', $line = 47, 
                    $out += $escape(arrange.arriveCity), $out += "</td>", $line = 47), $out += " <td>", 
                    $line = 49, $out += $escape(arrange.shift), $out += "</td> <td>", $line = 51, $out += $escape(arrange.seatLevel), 
                    $out += "</td> <td>", $line = 53, 1 == arrange.badStatus && ($out += '<input type="text" name="price" value="', 
                    $line = 53, $out += $escape(arrange.price), $out += '" class="w-80" readOnly="readOnly"/>', 
                    $line = 53), $out += ' <input type="text" name="price" value="', $line = 54, $out += $escape(arrange.price), 
                    $out += '" class="w-80"/></td> <td>', $line = 56, 1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', 
                    $line = 56, $out += $escape(arrange.memberCount), $out += "</span>", $line = 56) : ($out += '<input class="F-float F-count w-50" name="realCount" type="text" ', 
                    $line = 56, null != arrange.billUpdateTime ? ($out += 'value="', $line = 56, $out += $escape(arrange.realCount), 
                    $out += '" ', $line = 56) : ($out += 'value="', $line = 56, $out += $escape(arrange.memberCount), 
                    $out += '"', $line = 56), $out += ' old="', $line = 56, $out += $escape(arrange.realCount), 
                    $out += '" maxlength="5" ', $line = 57, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 57), $out += "/>", $line = 57), $out += " </td> <td>", $line = 60, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 60, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 60) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="', 
                    $line = 60, $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 61, 
                    1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 61), $out += " />", 
                    $line = 62), $out += " </td> <td>", $line = 65, 1 == arrange.badStatus ? ($out += '<span class="ticketneedPayMoney F-float F-money">', 
                    $line = 65, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                    $line = 65) : ($out += '<span class="ticketneedPayMoney F-float F-money"></span>', 
                    $line = 65), $out += ' <input type="hidden" value="', $line = 66, $out += $escape(arrange.needPayMoney), 
                    $out += '" name="needPayMoney"></td> <td><span class="F-float F-money">', $line = 68, 
                    $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex"> ', 
                    $line = 71, 1 == arrange.badStatus ? ($out += " <span> ", $line = 73, 0 == arrange.payType ? ($out += " 现金 ", 
                    $line = 75) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 77) : 2 == arrange.payType && ($out += " 签单 ", 
                    $line = 79), $out += ' </span> &nbsp;<span class="F-float F-money">', $line = 81, 
                    2 == arrange.payType ? ($line = 81, $out += $escape(arrange.signMoney), $line = 81) : ($line = 81, 
                    $out += $escape(arrange.realGuidePayMoney), $line = 81), $out += "</span>", $line = 81) : ($out += ' <select name="payType"> <option value="0" ', 
                    $line = 83, 0 == arrange.payType && ($out += 'selected="selected"', $line = 83), 
                    $out += '>现金</option> <option value="1" ', $line = 84, 1 == arrange.payType && ($out += 'selected="selected"', 
                    $line = 84), $out += '>刷卡</option> <option value="2" ', $line = 85, 2 == arrange.payType && ($out += 'selected="selected"', 
                    $line = 85), $out += '>签单</option> </select> &nbsp; <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" ', 
                    $line = 88, 2 == arrange.payType ? ($out += ' value="', $line = 89, $out += $escape(arrange.signMoney), 
                    $out += '"', $line = 89) : ($line = 89, null != arrange.billUpdateTime ? ($out += 'value="', 
                    $line = 89, $out += $escape(arrange.realGuidePayMoney), $out += '" ', $line = 89) : ($out += 'value="', 
                    $line = 89, $out += $escape(arrange.guidePayMoney), $out += '"', $line = 89), $out += ' maxlength="11" ', 
                    $line = 89, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 89), 
                    $line = 89), $out += "/>", $line = 89), $out += ' <input type="hidden" name="payedMoney" value="', 
                    $line = 90, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                    $line = 91, $out += $escape(arrange.guidePayMoney), $out += '" /></div></td> <td>', 
                    $line = 94, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 95, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 96) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 98), $out += ' </td> <td><span class="difference"></span></td> <td><input value="', 
                    $line = 103, $out += $escape(arrange.billRemark), $out += '" name="billRemark" type="text" ', 
                    $line = 103, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 103), 
                    $out += "></td> <td>", $line = 105, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                    $line = 105) : ($out += "已对账", $line = 105), $out += "</td> </tr> ", $line = 107;
                }), $out += " ", $line = 108;
            }), $out += " </tbody> </table> </div> ", $line = 112, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 116, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 116), $out += ' type="text" style="width:30%;" value="', $line = 116, remarkArrangeList.ticketRemark.length > 0 && ($line = 116, 
            $out += $escape(remarkArrangeList.ticketRemark[0].opCheckRemark), $line = 116), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 119, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 119), $out += ' type="text" style="width:30%;" value="', $line = 119, remarkArrangeList.ticketRemark.length > 0 && ($line = 119, 
            $out += $escape(remarkArrangeList.ticketRemark[0].financeCheckRemark), $line = 119), 
            $out += '" /> </div> </div> ', $line = 122), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>票务\r\n        <a href="javascript:void(0)" class="T-ticket-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n<table class="table overflow-table table-striped table-bordered table-hover w-1500">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>票务商家</th>\r\n        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n        <th class="th-border"><span class="necessary">*</span>日期</th>\r\n        <th class="th-border">出发地</th>\r\n        <th class="th-border">目的地</th>\r\n        <th class="th-border">班次</th>\r\n        <th class="th-border"><span class="necessary">*</span>座位级别</th>\r\n        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th>\r\n        <th class="th-border" rowspan="2">是否对账</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-ticket">\r\n    {{each ticketArrangeList as ticketArrange}}\r\n    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n\r\n    <td>{{arrange.shift}}</td>\r\n\r\n    <td>{{arrange.seatLevel}}</td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<input type="text" name="price" value="{{arrange.price}}" class="w-80" readOnly="readOnly"/>{{/if}}\r\n        <input type="text" name="price" value="{{arrange.price}}" class="w-80"/></td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input class="F-float F-count w-50" name="realCount" type="text" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5" \r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money w-80" value="{{arrange.realReduceMoney}}"\r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n        />{{/if}}\r\n        </td>\r\n\r\n        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n        \r\n        <td><div class="inline-flex">\r\n        {{if arrange.badStatus == 1}}\r\n        <span>\r\n            {{if arrange.payType == 0}}\r\n                现金\r\n                {{else if arrange.payType == 1}}\r\n                刷卡\r\n                {{else if arrange.payType == 2}}\r\n                签单\r\n            {{/if}}\r\n        </span>\r\n        &nbsp;<span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}} \r\n        <select name="payType">\r\n            <option value="0" {{if arrange.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n            <option value="1" {{if arrange.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n            <option value="2" {{if arrange.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n        </select>\r\n        &nbsp;\r\n        <input class="F-float F-money w-80" type="text" name="realGuidePayMoney" {{if arrange.payType == 2}}\r\n        value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime != null}}value="{{arrange.realGuidePayMoney}}" {{else}}value="{{arrange.guidePayMoney}}"{{/if}}  maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}{{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></div></td>\r\n\r\n\r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n\r\n        <td><span class="difference"></span></td>\r\n\r\n        <td><input value="{{arrange.billRemark}}" name="billRemark" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}></td>\r\n\r\n        <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n    </tr>\r\n    {{/each}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n</div>\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});