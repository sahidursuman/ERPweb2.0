/*TMODJS:{"debug":true,"version":68,"md5":"1b3f348916bf831309904f77ca440397"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/ticketArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, ticketArrangeList = $data.ticketArrangeList, $escape = ($data.ticketArrange, 
            $data.$index, $data.arrange, $data.index, $utils.$escape), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>票务 <a href="javascript:void(0)" class="T-ticket-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table overflow-table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务商家</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"><span class="necessary">*</span>日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border"><span class="necessary">*</span>座位级别</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ', 
            $line = 31, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 31), $out += ' </tr> </thead> <tbody class="T-count-ticket"> ', $line = 35, 
            $each(ticketArrangeList, function(ticketArrange) {
                $out += " ", $line = 36, $each(ticketArrange.ticketArrangeList, function(arrange, index) {
                    $out += ' <tr badStatus = "', $line = 37, $out += $escape(arrange.badStatus), $out += '" ticketArrangeId="', 
                    $line = 37, $out += $escape(arrange.id), $out += '" ticketId="', $line = 37, $out += $escape(arrange.ticket.id), 
                    $out += '" itemId="', $line = 37, $out += $escape(arrange.id), $out += '"> ', $line = 38, 
                    0 == index && ($out += '<td rowspan="', $line = 38, $out += $escape(ticketArrange.ticketArrangeList.length), 
                    $out += '">', $line = 38, null != arrange.ticket && ($line = 38, $out += $escape(arrange.ticket.name), 
                    $line = 38), $out += "</td>", $line = 38), $out += " ", $line = 39, 0 == index && ($out += '<td rowspan="', 
                    $line = 39, $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', 
                    $line = 39, 1 == arrange.type ? ($out += "机票", $line = 39) : 2 == arrange.type ? ($out += "汽车票", 
                    $line = 39) : 3 == arrange.type ? ($out += "火车票", $line = 39) : 4 == arrange.type && ($out += "轮船票", 
                    $line = 39), $out += "</td>", $line = 39), $out += " ", $line = 40, 0 == index && ($out += '<td rowspan="', 
                    $line = 40, $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', 
                    $line = 40, $out += $escape(arrange.startTime), $out += "</td>", $line = 40), $out += " ", 
                    $line = 41, 0 == index && ($out += '<td rowspan="', $line = 41, $out += $escape(ticketArrange.ticketArrangeList.length), 
                    $out += '">', $line = 41, $out += $escape(arrange.startingCity), $out += "</td>", 
                    $line = 41), $out += " ", $line = 42, 0 == index && ($out += '<td rowspan="', $line = 42, 
                    $out += $escape(ticketArrange.ticketArrangeList.length), $out += '">', $line = 42, 
                    $out += $escape(arrange.arriveCity), $out += "</td>", $line = 42), $out += " <td>", 
                    $line = 43, $out += $escape(arrange.shift), $out += "</td> <td>", $line = 44, $out += $escape(arrange.seatLevel), 
                    $out += "</td> <td>", $line = 45, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 45, $out += $escape(arrange.price), $out += "</span>", $line = 45) : ($out += '<span class="F-float F-money">', 
                    $line = 45, $out += $escape(arrange.price), $out += "</span>", $line = 45), $out += ' <input type="hidden" name="price" value="', 
                    $line = 46, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 47, 
                    1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', $line = 47, 
                    $out += $escape(arrange.memberCount), $out += "</span>", $line = 47) : ($out += '<input style="width:90px;" class="F-float F-count" name="realCount" type="text" ', 
                    $line = 47, null != arrange.billUpdateTime ? ($out += 'value="', $line = 47, $out += $escape(arrange.realCount), 
                    $out += '" ', $line = 47) : ($out += 'value="', $line = 47, $out += $escape(arrange.memberCount), 
                    $out += '"', $line = 47), $out += ' old="', $line = 47, $out += $escape(arrange.realCount), 
                    $out += '" maxlength="5" ', $line = 48, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 48), $out += "/>", $line = 48), $out += " </td> <td>", $line = 50, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 50, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 50) : ($out += '<input type="text" name="realReduceMoney" class="F-float F-money" value="', 
                    $line = 50, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 50, 
                    $out += $escape(arrange.realReduceMoney), $out += '"/>', $line = 50), $out += " </td> <td>", 
                    $line = 52, 1 == arrange.badStatus ? ($out += '<span class="ticketneedPayMoney F-float F-money">', 
                    $line = 52, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                    $line = 52) : ($out += '<span class="ticketneedPayMoney F-float F-money"></span>', 
                    $line = 52), $out += ' <input type="hidden" value="', $line = 53, $out += $escape(arrange.needPayMoney), 
                    $out += '" name="needPayMoney"></td> <td><span class="F-float F-money">', $line = 54, 
                    $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 55, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                    $line = 55, $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 55) : ($out += ' <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                    $line = 55, null != arrange.billUpdateTime ? ($out += 'value="', $line = 55, $out += $escape(arrange.realGuidePayMoney), 
                    $out += '" ', $line = 55) : ($out += 'value="', $line = 55, $out += $escape(arrange.guidePayMoney), 
                    $out += '"', $line = 55), $out += ' old="', $line = 55, $out += $escape(arrange.realGuidePayMoney), 
                    $out += '" maxlength="11" ', $line = 55, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                    $line = 55), $out += "/>", $line = 55), $out += ' <input type="hidden" name="payedMoney" value="', 
                    $line = 56, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                    $line = 57, $out += $escape(arrange.guidePayMoney), $out += '" /></td> <td>', $line = 58, 
                    null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                    $line = 59, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                    $line = 60) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 62), $out += ' </td> <td><span class="difference"></span></td> <td><input value="', 
                    $line = 65, $out += $escape(arrange.billRemark), $out += '" name="billRemark" type="text"></td> ', 
                    $line = 66, 2 == tripPlan.billStatus && ($out += "<td>", $line = 66, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                    $line = 66) : ($out += "已对账", $line = 66), $out += "</td>", $line = 66), $out += " </tr> ", 
                    $line = 68;
                }), $out += " ", $line = 69;
            }), $out += " </tbody> </table> ", $line = 73, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 77, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 77), $out += ' type="text" style="width:30%;" value="', $line = 77, remarkArrangeList.ticketRemark.length > 0 && ($line = 77, 
            $out += $escape(remarkArrangeList.ticketRemark[0].opCheckRemark), $line = 77), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 80, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 80), $out += ' type="text" style="width:30%;" value="', $line = 80, remarkArrangeList.ticketRemark.length > 0 && ($line = 80, 
            $out += $escape(remarkArrangeList.ticketRemark[0].financeCheckRemark), $line = 80), 
            $out += '" /> </div> </div> ', $line = 83), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n    <h5 class="title-size">\r\n        <i class="ace-icon fa fa-medkit"></i>票务\r\n        <a href="javascript:void(0)" class="T-ticket-add">\r\n            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-plus"></i>\r\n                新增\r\n            </button>\r\n        </a>\r\n    </h5>\r\n</div>\r\n<table class="table overflow-table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>票务商家</th>\r\n        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n        <th class="th-border"><span class="necessary">*</span>日期</th>\r\n        <th class="th-border">出发地</th>\r\n        <th class="th-border">目的地</th>\r\n        <th class="th-border">班次</th>\r\n        <th class="th-border"><span class="necessary">*</span>座位级别</th>\r\n        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border">优惠</th>\r\n        <th class="th-border">应付</th>\r\n        <th class="th-border">已付</th>\r\n        <th class="th-border">导付</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">差额</th>\r\n        <th class="th-border">导游报账备注</th>\r\n        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-ticket">\r\n    {{each ticketArrangeList as ticketArrange}}\r\n    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n    <td>{{arrange.shift}}</td>\r\n    <td>{{arrange.seatLevel}}</td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}}<span class="F-float F-money">{{arrange.price}}</span>{{/if}}\r\n        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" class="F-float F-count" name="realCount" type="text" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5" \r\n        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" name="realReduceMoney" class="F-float F-money" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/>{{/if}}\r\n        </td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney F-float F-money"></span>{{/if}}\r\n        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}} <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if arrange.billUpdateTime != null}}value="{{arrange.realGuidePayMoney}}" {{else}}value="{{arrange.guidePayMoney}}"{{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n            {{else}}\r\n                <span style="color:#bbb;">查看</span>\r\n            {{/if}}\r\n        </td>\r\n        <td><span class="difference"></span></td>\r\n        <td><input value="{{arrange.billRemark}}" name="billRemark" type="text"></td>\r\n        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n    </tr>\r\n    {{/each}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n    <div style="width:60%;">\r\n        <div> \r\n            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n        \r\n            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n        </div>\r\n    </div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});