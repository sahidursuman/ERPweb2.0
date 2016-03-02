/*TMODJS:{"debug":true,"version":63,"md5":"11566b8ece920a38b0bf7aabad402bbf"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/scenicArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>景区 <a href="javascript:void(0)" class="T-scenic-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> </thead> <tbody class="T-count-scenic"> ', 
            $line = 31, $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.scenicArrange && ($out += " ", $line = 33, 
                $each(day.scenicArrange, function(arrangeList) {
                    $out += " ", $line = 34, $each(arrangeList.scenicArrangeList, function(arrange, index) {
                        $out += " ", $line = 35, null != arrange && ($out += ' <tr badStatus = "', $line = 36, 
                        $out += $escape(arrange.badStatus), $out += '" scenicArrangeId="', $line = 36, $out += $escape(arrange.id), 
                        $out += '" scenicId="', $line = 36, $out += $escape(arrange.scenicId), $out += '" scenicItemId="', 
                        $line = 36, $out += $escape(arrange.hotelRoomId), $out += '" whichDay="', $line = 36, 
                        $out += $escape(arrange.whichDay), $out += '"> ', $line = 37, 0 == index && ($out += '<td rowspan="', 
                        $line = 37, $out += $escape(arrangeList.scenicArrangeList.length), $out += '"><span class="whichDay"></span></td>', 
                        $line = 37), $out += " ", $line = 38, 0 == index && ($out += '<td rowspan="', $line = 38, 
                        $out += $escape(arrangeList.scenicArrangeList.length), $out += '">', $line = 38, 
                        null != arrange.scenic && ($line = 38, $out += $escape(arrange.scenic.name), $line = 38), 
                        $out += "</td>", $line = 38), $out += " <td>", $line = 39, null != arrange.scenicItem && ($line = 39, 
                        $out += $escape(arrange.scenicItem.name), $line = 39), $out += "</td> <td>", $line = 40, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', $line = 40, 
                        $out += $escape(arrange.price), $out += "</span>", $line = 40) : ($out += '<span class="F-float F-money">', 
                        $line = 40, $out += $escape(arrange.price), $out += "</span>", $line = 40), $out += ' <input type="hidden" name="price" value="', 
                        $line = 41, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 42, 
                        1 == arrange.badStatus ? ($out += '<span class="F-float F-count">', $line = 42, 
                        $out += $escape(arrange.memberCount), $out += "</span>", $line = 42) : ($out += '<input style="width:90px;" class="F-float F-count" type="text" name="realCount" ', 
                        $line = 42, null != arrange.billUpdateTime ? ($out += 'value="', $line = 42, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 42) : ($out += 'value="', $line = 42, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 42), $out += ' old="', $line = 42, $out += $escape(arrange.realCount), 
                        $out += '" maxlength="5" ', $line = 43, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 43), $out += "/>", $line = 43), $out += " </td> <td>", $line = 45, 1 == arrange.badStatus ? ($out += '<span class="F-float F-money">', 
                        $line = 45, $out += $escape(arrange.realReduceMoney), $out += "</span>", $line = 45) : ($out += '<input type="text" class="F-float F-money" name="realReduceMoney" value="', 
                        $line = 45, $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 45, 
                        $out += $escape(arrange.realReduceMoney), $out += '" ', $line = 45, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 45), $out += "/>", $line = 45), $out += " </td> <td>", $line = 47, 1 == arrange.badStatus ? ($out += '<span class="scenicneedPayMoney F-float F-money">', 
                        $line = 47, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 47) : ($out += '<span class="scenicneedPayMoney F-float F-money"></span>', 
                        $line = 47), $out += ' <input type="hidden" name="needPayMoney" value="', $line = 48, 
                        $out += $escape(arrange.needPayMoney), $out += '"></td> <td><span class="F-float F-money">', 
                        $line = 49, $out += $escape(arrange.payedMoney), $out += '</span></td> <td><div class="inline-flex col-xs-12"> ', 
                        $line = 53, 1 == arrange.badStatus ? ($out += " <span> ", $line = 55, 0 == arrange.payType ? ($out += " 现金 ", 
                        $line = 57) : 1 == arrange.payType ? ($out += " 刷卡 ", $line = 59) : 2 == arrange.payType && ($out += " 签单 ", 
                        $line = 61), $out += ' </span> &nbsp; <span class="F-float F-money">', $line = 64, 
                        2 == arrange.payType ? ($line = 64, $out += $escape(arrange.signMoney), $line = 64) : ($line = 64, 
                        $out += $escape(arrange.realGuidePayMoney), $line = 64), $out += "</span>", $line = 64) : ($out += ' <select name="payType"> <option value="0" ', 
                        $line = 66, 0 == arrange.payType && ($out += 'selected="selected"', $line = 66), 
                        $out += '>现金</option> <option value="1" ', $line = 67, 1 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 67), $out += '>刷卡</option> <option value="2" ', $line = 68, 2 == arrange.payType && ($out += 'selected="selected"', 
                        $line = 68), $out += '>签单</option> </select> &nbsp; <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" ', 
                        $line = 71, 2 == arrange.payType ? ($out += 'value="', $line = 71, $out += $escape(arrange.signMoney), 
                        $out += '"', $line = 71) : ($line = 71, null != arrange.billUpdateTime ? ($out += ' value="', 
                        $line = 71, $out += $escape(arrange.realGuidePayMoney), $out += '"', $line = 71) : ($out += 'value="', 
                        $line = 71, $out += $escape(arrange.guidePayMoney), $out += '"', $line = 71), $out += ' old="', 
                        $line = 71, $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', 
                        $line = 71, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 71), 
                        $line = 71), $out += "/>", $line = 71), $out += ' <input type="hidden" name="payedMoney" value="', 
                        $line = 72, $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 73, $out += $escape(arrange.guidePayMoney), $out += '" /></div></td> <td>', 
                        $line = 75, null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 76, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 77) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 79), $out += ' </td> <td><span class="difference F-float F-money"></span></td> <td><input value="', 
                        $line = 82, $out += $escape(arrange.billRemark), $out += '" name="billRemark" type="text" ', 
                        $line = 82, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 82), 
                        $out += "></td> <td>", $line = 83, 0 == arrange.isConfirmAccount ? ($out += "未对账", 
                        $line = 83) : ($out += "已对账", $line = 83), $out += "</td> </tr> ", $line = 85), 
                        $out += " ", $line = 86;
                    }), $out += " ", $line = 87;
                }), $out += " ", $line = 88), $out += " ", $line = 89;
            }), $out += " </tbody> </table> ", $line = 93, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 96, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 96), $out += ' type="text" style="width:30%;" value="', $line = 96, remarkArrangeList.scenicRemark.length > 0 && ($line = 96, 
            $out += $escape(remarkArrangeList.scenicRemark[0].opCheckRemark), $line = 96), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 99, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 99), $out += ' type="text" style="width:30%;" value="', $line = 99, remarkArrangeList.scenicRemark.length > 0 && ($line = 99, 
            $out += $escape(remarkArrangeList.scenicRemark[0].financeCheckRemark), $line = 99), 
            $out += '" /> </div> </div>', $line = 101), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i>景区\r\n                        <a href="javascript:void(0)" class="T-scenic-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>景区</th>\r\n                        <th class="th-border"><span class="necessary">*</span>收费项目</th>\r\n                        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        <th class="th-border" rowspan="2">是否对账</th>\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.price}}</span>{{else}}<span class="F-float F-money">{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="F-float F-count">{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" class="F-float F-count" type="text" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                        </td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="F-float F-money">{{arrange.realReduceMoney}}</span>{{else}}<input type="text" class="F-float F-money" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                        </td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney F-float F-money"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td><span class="F-float F-money">{{arrange.payedMoney}}</span></td>\r\n\r\n                        <td><div class="inline-flex col-xs-12">\r\n                        \r\n                        {{if arrange.badStatus == 1}}\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;\r\n                        <span class="F-float F-money">{{if arrange.payType == 2}}{{arrange.signMoney}}{{else}}{{arrange.realGuidePayMoney}}{{/if}}</span>{{else}}\r\n                        <select name="payType">\r\n                            <option value="0" {{if arrange.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n                            <option value="1" {{if arrange.payType == 1}}selected="selected"{{/if}}>刷卡</option>\r\n                            <option value="2" {{if arrange.payType == 2}}selected="selected"{{/if}}>签单</option>\r\n                        </select>\r\n                        &nbsp;\r\n                        <input style="width:90px;" class="F-float F-money" type="text" name="realGuidePayMoney" {{if arrange.payType == 2}}value="{{arrange.signMoney}}"{{else}}{{if arrange.billUpdateTime != null}} value="{{arrange.realGuidePayMoney}}"{{else}}value="{{arrange.guidePayMoney}}"{{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}{{/if}}/>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></div></td>\r\n\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference F-float F-money"></span></td>\r\n                        <td><input value="{{arrange.billRemark}}" name="billRemark" type="text" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}></td>\r\n                        <td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});