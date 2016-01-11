/*TMODJS:{"debug":true,"version":45,"md5":"46c54555baeb8dc522d3d2530188dc64"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/hotelArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>房费 <a href="javascript:void(0)" class="T-hotel-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ', 
            $line = 27, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 27), $out += ' </tr> </thead> <tbody class="T-count-hotel"> ', $line = 31, 
            $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.hotelArrange && ($out += " ", $line = 33, $each(day.hotelArrange, function(arrangeList) {
                    $out += " ", $line = 34, $each(arrangeList.hotelArrangeList, function(arrange, index) {
                        $out += " ", $line = 35, null != arrange && ($out += ' <tr badStatus = "', $line = 36, 
                        $out += $escape(arrange.badStatus), $out += '" hotelArrangeId="', $line = 36, $out += $escape(arrange.id), 
                        $out += '" hotelId="', $line = 36, null != arrange.hotel && ($line = 36, $out += $escape(arrange.hotel.id), 
                        $line = 36), $out += '" restaurantStandardId="', $line = 36, null != arrange.hotelRoom && ($line = 36, 
                        $out += $escape(arrange.hotelRoom.id), $line = 36), $out += '"> ', $line = 37, 0 == index && ($out += '<td rowspan="', 
                        $line = 37, $out += $escape(arrangeList.hotelArrangeList.length), $out += '">第', 
                        $line = 37, $out += $escape(arrange.whichDay), $out += "天</td>", $line = 37), $out += " ", 
                        $line = 38, 0 == index && ($out += '<td rowspan="', $line = 38, $out += $escape(arrangeList.hotelArrangeList.length), 
                        $out += '">', $line = 38, null != arrange.hotel && ($line = 38, $out += $escape(arrange.hotel.name), 
                        $line = 38), $out += "</td>", $line = 38), $out += " <td>", $line = 39, null != arrange.hotelRoom && ($line = 39, 
                        $out += $escape(arrange.hotelRoom.type), $line = 39), $out += "</td> <td>", $line = 40, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 40, 
                        $out += $escape(arrange.price), $out += "</span>", $line = 40) : ($out += '<span class="F-float F-money">', 
                        $line = 40, $out += $escape(arrange.price), $out += "</span>", $line = 40), $out += '<input type="hidden" name="price" value="', 
                        $line = 40, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 41, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', $line = 41, 
                        $out += $escape(arrange.memberCount), $out += "</span>", $line = 41) : ($out += '<input style="width:90px;" class="F-float F-count" type="text" name="realCount" ', 
                        $line = 41, null != arrange.billUpdateTime ? ($out += 'value="', $line = 41, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 41) : ($out += 'value="', $line = 41, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 41), $out += 'oid="', $line = 41, $out += $escape(arrange.realCount), 
                        $out += '" maxlength="5" ', $line = 42, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 42), $out += "/>", $line = 42), $out += " </td> <td>", $line = 44, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 44, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 44) : ($out += '<input type="text" class="F-float F-money" name="realReduceMoney" value="', 
                        $line = 44, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 44, 
                        $out += $escape(arrange.realReduceMoney), $out += '"/>', $line = 44), $out += " </td> <td>", 
                        $line = 46, 1 == arrange.badStatus ? ($out += '<span class="hotelneedPayMoney F-float F-money">', 
                        $line = 46, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 46) : ($out += '<span class="hotelneedPayMoney"></span><input name="needPayMoney" type="hidden" value="', 
                        $line = 46, $out += $escape(arrange.needPayMoney), $out += '">', $line = 46), $out += ' </td> <td><span class="F-float F-money">', 
                        $line = 48, $out += $escape(arrange.payedMoney), $out += "</span></td> <td>", $line = 49, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 49, 
                        $out += $escape(arrange.realGuidePayMoney), $out += "</span>", $line = 49) : ($out += '<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                        $line = 49, null != arrange.billUpdateTime ? ($out += ' value="', $line = 49, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '"', $line = 49) : ($out += "value=0 ", $line = 49), $out += ' oid="', $line = 49, 
                        $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', $line = 49, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 49), $out += "/>", 
                        $line = 49), $out += ' <input type="hidden" name="payedMoney" value="', $line = 50, 
                        $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 51, $out += $escape(arrange.guidePayMoney), $out += '" /></td> <td>', $line = 52, 
                        null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 53, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 54) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 56), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td>', 
                        $line = 59, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 59, 
                        $out += $escape(arrange.billRemark), $out += '" maxlength="1000" />', $line = 59) : ($line = 59, 
                        $out += $escape(arrange.billRemark), $line = 59), $out += "</td> ", $line = 60, 
                        2 == tripPlan.billStatus && ($out += "<td>", $line = 60, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 60) : ($out += "已对账", $line = 60), $out += "</td>", $line = 60), $out += " </tr> ", 
                        $line = 62), $out += " ", $line = 63;
                    }), $out += " ", $line = 64;
                }), $out += " ", $line = 65), $out += " ", $line = 66;
            }), $out += " </tbody> </table> ", $line = 70, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 74, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 74), $out += ' type="text" style="width:30%;" value="', $line = 74, $out += $escape(remarkArrangeList.hotelRemark[0].opCheckRemark), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 77, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 77), $out += ' type="text" style="width:30%;" value="', $line = 77, $out += $escape(remarkArrangeList.hotelRemark[0].financeCheckRemark), 
            $out += '" /> </div> </div> ', $line = 80), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i>房费\r\n            <a href="javascript:void(0)" class="T-hotel-add">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border"><span class="necessary">*</span>时间</th>\r\n            <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n            <th class="th-border"><span class="necessary">*</span>房型</th>\r\n            <th class="th-border"><span class="necessary">*</span>单价</th>\r\n            <th class="th-border"><span class="necessary">*</span>间数</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">应付</th>\r\n            <th class="th-border">已付</th>\r\n            <th class="th-border">导付</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">差额</th>\r\n            <th class="th-border">导游报账备注</th>\r\n            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n        </tr> \r\n    </thead>\r\n    <tbody class="T-count-hotel">\r\n        {{each dayList as day}}\r\n        {{if day.hotelArrange != null}}\r\n        {{each day.hotelArrange as arrangeList}}\r\n        {{each arrangeList.hotelArrangeList as arrange index}}\r\n        {{if arrange != null}}\r\n            <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}">\r\n                {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}}<span class="F-float F-money">{{arrange.price}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" class="F-float F-count" type="text" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}oid="{{arrange.realCount}}" maxlength="5" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                </td>\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/>{{/if}}\r\n                </td>\r\n                <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span><input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}">{{/if}}\r\n                </td>\r\n                <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n                <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realGuidePayMoney}}</span>{{else}}<input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if arrange.billUpdateTime != null }} value="{{arrange.realGuidePayMoney}}"{{else}}value=0 {{/if}} oid="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                    <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                    <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                <td><span class="difference F-float F-money"></span></td>\r\n                <td>{{if editStatus == 1}}<input name="billRemark" value="{{arrange.billRemark}}" maxlength="1000" />{{else}}{{arrange.billRemark}}{{/if}}</td>\r\n                {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n            </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;">\r\n    <div> \r\n        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.hotelRemark[0].opCheckRemark}}" />\r\n    \r\n        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}" />\r\n    </div>\r\n</div>\r\n{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});