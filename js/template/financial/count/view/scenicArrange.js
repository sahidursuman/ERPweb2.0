/*TMODJS:{"debug":true,"version":4,"md5":"b41303593f5a010c146dd0c334116651"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/scenicArrange", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, dayList = $data.dayList, $escape = ($data.day, 
            $data.$index, $data.arrangeList, $data.arrange, $data.index, $utils.$escape), isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i>景区 <a href="javascript:void(0)" class="T-scenic-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ', 
            $line = 27, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 27), $out += ' </tr> </thead> <tbody class="T-count-scenic"> ', $line = 31, 
            $each(dayList, function(day) {
                $out += " ", $line = 32, null != day.scenicArrange && ($out += " ", $line = 33, 
                $each(day.scenicArrange, function(arrangeList) {
                    $out += " ", $line = 34, $each(arrangeList.scenicArrangeList, function(arrange, index) {
                        $out += " ", $line = 35, null != arrange && ($out += ' <tr badStatus = "', $line = 36, 
                        $out += $escape(arrange.badStatus), $out += '" scenicArrangeId="', $line = 36, $out += $escape(arrange.id), 
                        $out += '" scenicId="', $line = 36, $out += $escape(arrange.scenicId), $out += '" scenicItemId="', 
                        $line = 36, $out += $escape(arrange.hotelRoomId), $out += '"> ', $line = 37, 0 == index && ($out += '<td rowspan="', 
                        $line = 37, $out += $escape(arrangeList.scenicArrangeList.length), $out += '">第', 
                        $line = 37, $out += $escape(arrange.whichDay), $out += "天</td>", $line = 37), $out += " ", 
                        $line = 38, 0 == index && ($out += '<td rowspan="', $line = 38, $out += $escape(arrangeList.scenicArrangeList.length), 
                        $out += '">', $line = 38, null != arrange.scenic && ($line = 38, $out += $escape(arrange.scenic.name), 
                        $line = 38), $out += "</td>", $line = 38), $out += " <td>", $line = 39, null != arrange.scenicItem && ($line = 39, 
                        $out += $escape(arrange.scenicItem.name), $line = 39), $out += "</td> <td>", $line = 40, 
                        1 == arrange.badStatus ? ($out += "<span>", $line = 40, $out += $escape(arrange.price), 
                        $out += "</span>", $line = 40) : ($out += "<span>", $line = 40, $out += $escape(arrange.price), 
                        $out += "</span>", $line = 40), $out += ' <input type="hidden" name="price" value="', 
                        $line = 41, $out += $escape(arrange.price), $out += '" /></td> <td>', $line = 42, 
                        1 == arrange.badStatus ? ($out += "<span>", $line = 42, $out += $escape(arrange.memberCount), 
                        $out += "</span>", $line = 42) : ($out += '<input style="width:90px;" type="text" name="realCount" ', 
                        $line = 42, null != arrange.billUpdateTime ? ($out += 'value="', $line = 42, $out += $escape(arrange.realCount), 
                        $out += '" ', $line = 42) : ($out += 'value="', $line = 42, $out += $escape(arrange.memberCount), 
                        $out += '"', $line = 42), $out += ' old="', $line = 42, $out += $escape(arrange.realCount), 
                        $out += '" maxlength="5" ', $line = 43, 1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                        $line = 43), $out += "/>", $line = 43), $out += " </td> <td>", $line = 45, 1 == arrange.badStatus ? ($out += "<span>{arrange.realReduceMoney}</span>", 
                        $line = 45) : ($out += '<input type="text" name="realReduceMoney" value="', $line = 45, 
                        $out += $escape(arrange.realReduceMoney), $out += '" old="', $line = 45, $out += $escape(arrange.realReduceMoney), 
                        $out += '"/>', $line = 45), $out += " </td> <td>", $line = 47, 1 == arrange.badStatus ? ($out += '<span class="scenicneedPayMoney">', 
                        $line = 47, $out += $escape(arrange.payedMoney + arrange.realGuidePayMoney), $out += "</span>", 
                        $line = 47) : ($out += '<span class="scenicneedPayMoney"></span>', $line = 47), 
                        $out += ' <input type="hidden" name="needPayMoney" value="', $line = 48, $out += $escape(arrange.needPayMoney), 
                        $out += '"></td> <td> ', $line = 50, $out += $escape(arrange.payedMoney), $out += "</td> <td>", 
                        $line = 51, 1 == arrange.badStatus ? ($out += "<span>", $line = 51, $out += $escape(arrange.needPayMoney), 
                        $out += "</span>", $line = 51) : ($out += '<input style="width:90px;" type="text" name="realGuidePayMoney" ', 
                        $line = 51, null != arrange.billUpdateTime ? ($out += ' value="', $line = 51, $out += $escape(arrange.realGuidePayMoney), 
                        $out += '"', $line = 51) : ($out += "value=0", $line = 51), $out += ' old="', $line = 51, 
                        $out += $escape(arrange.realGuidePayMoney), $out += '" maxlength="11" ', $line = 51, 
                        1 == arrange.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 51), $out += "/>", 
                        $line = 51), $out += ' <input type="hidden" name="payedMoney" value="', $line = 52, 
                        $out += $escape(arrange.payedMoney), $out += '" /> <input type="hidden" name="guidePayMoney" value="', 
                        $line = 53, $out += $escape(arrange.guidePayMoney), $out += '" /></td> <td>', $line = 54, 
                        null != arrange.billImage && "" != arrange.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                        $line = 55, $out += $escape(arrange.billImage), $out += '" class="btn-view">查看</a> ', 
                        $line = 56) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 58), $out += ' </td> <td><span class="difference"></span></td> <td>', 
                        $line = 61, $out += $escape(arrange.billRemark), $out += "</td> ", $line = 62, 2 == tripPlan.billStatus && ($out += "<td>", 
                        $line = 62, 0 == arrange.isConfirmAccount ? ($out += "未对账", $line = 62) : ($out += "已对账", 
                        $line = 62), $out += "</td>", $line = 62), $out += " </tr> ", $line = 64), $out += " ", 
                        $line = 65;
                    }), $out += " ", $line = 66;
                }), $out += " ", $line = 67), $out += " ", $line = 68;
            }), $out += " </tbody> </table> ", $line = 72, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 75, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 75), $out += ' type="text" style="width:30%;" value="', $line = 75, null != remarkArrangeList[7] && ($line = 75, 
            $out += $escape(remarkArrangeList[7].opCheckRemark), $line = 75), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 78, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 78), $out += ' type="text" style="width:30%;" value="', $line = 78, null != remarkArrangeList[7] && ($line = 78, 
            $out += $escape(remarkArrangeList[7].financeCheckRemark), $line = 78), $out += '" /> </div> </div>', 
            $line = 80), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i>景区\r\n                        <a href="javascript:void(0)" class="T-scenic-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>景区</th>\r\n                        <th class="th-border"><span class="necessary">*</span>收费项目</th>\r\n                        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<input style="width:90px;" type="text" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                        </td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{arrange.realReduceMoney}</span>{{else}}<input type="text" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/>{{/if}}\r\n                        </td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>\r\n                        {{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.needPayMoney}}</span>{{else}}<input style="width:90px;" type="text" name="realGuidePayMoney" {{if arrange.billUpdateTime != null}} value="{{arrange.realGuidePayMoney}}"{{else}}value=0{{/if}} old="{{arrange.realGuidePayMoney}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[7] != null}}{{remarkArrangeList[7].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[7] != null}}{{remarkArrangeList[7].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});