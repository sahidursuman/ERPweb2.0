/*TMODJS:{"debug":true,"version":64,"md5":"aa24930f2629dabff15bffe22cb47922"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/otherIn", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), tripPlan = $data.tripPlan, $each = $utils.$each, arrangeIncomePaymentList = $data.arrangeIncomePaymentList, $escape = ($data.otherInCome, 
            $data.$index, $utils.$escape), editStatus = $data.editStatus, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 其它收入 <a href="javascript:void(0)" class="T-OtherIn-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ', 
            $line = 22, 2 == tripPlan.billStatus && ($out += '<th class="th-border" rowspan="2">是否对账</th>', 
            $line = 22), $out += ' </tr> </thead> <tbody class="T-count-otherIn"> ', $line = 26, 
            $each(arrangeIncomePaymentList, function(otherInCome) {
                $out += " ", $line = 27, null != otherInCome && ($out += ' <tr otherInId="', $line = 28, 
                $out += $escape(otherInCome.id), $out += '" otherIn="', $line = 28, $out += $escape(otherInCome.id), 
                $out += '" whichDay="', $line = 28, $out += $escape(otherInCome.whichDay), $out += '"> <td whichDay="', 
                $line = 29, $out += $escape(otherInCome.whichDay), $out += '"><span class="whichDay"></span></td> <td><span>', 
                $line = 31, $out += $escape(otherInCome.title), $out += '</span><input style="width:90px;" type="hidden" name="title" reset="true" value="', 
                $line = 31, $out += $escape(otherInCome.title), $out += '" old="', $line = 31, $out += $escape(otherInCome.title), 
                $out += '" maxlength="100" ', $line = 31, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 31), $out += "/></td> <td> ", $line = 34, -1 == tripPlan.billStatus ? ($out += " <span>", 
                $line = 35, $out += $escape(otherInCome.price), $out += '</span> <input style="width:90px;" type="hidden" name="price" value="', 
                $line = 36, $out += $escape(otherInCome.price), $out += '" old="', $line = 36, $out += $escape(otherInCome.price), 
                $out += '"/> ', $line = 37) : ($out += ' <input type="text" class="F-float F-money w-80" name="price" value="', 
                $line = 39, $out += $escape(otherInCome.price), $out += '" maxlength="11" ', $line = 40, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 40), 
                $out += "/> ", $line = 41), $out += ' </td> <td><input type="text" class="F-float F-count w-50" name="count" value="', 
                $line = 44, $out += $escape(otherInCome.count), $out += '" old="', $line = 44, $out += $escape(otherInCome.count), 
                $out += '" maxlength="11" ', $line = 45, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 45), $out += '/></td> <td><span class="needPayMoney F-float F-money">', 
                $line = 47, $out += $escape(otherInCome.needPayMoney), $out += '</span><input type="hidden" name="needPayMoney" value="', 
                $line = 47, $out += $escape(otherInCome.needPayMoney), $out += '" ', $line = 48, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 48), 
                $out += "/></span></td> <td>", $line = 50, null != otherInCome.billImage && "" != otherInCome.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 51, $out += $escape(otherInCome.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 52) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 54), $out += " </td> <td>", 
                $line = 57, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 57, 
                $out += $escape(otherInCome.billRemark), $out += '" maxlength="1000" ', $line = 57, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 57), 
                $out += "/>", $line = 57) : ($line = 57, $out += $escape(otherInCome.billRemark), 
                $line = 57), $out += "</td> ", $line = 59, 2 == tripPlan.billStatus && ($out += "<td>", 
                $line = 59, 0 == otherInCome.isConfirmAccount ? ($out += "未对账", $line = 59) : ($out += "已对账", 
                $line = 59), $out += "</td>", $line = 59), $out += " </tr> ", $line = 61), $out += " ", 
                $line = 62;
            }), $out += " </tbody> </table> ", $line = 66, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 69, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 69), $out += ' type="text" style="width:30%;" value="', $line = 69, remarkArrangeList.otherInRemark.length > 0 && ($line = 69, 
            $out += $escape(remarkArrangeList.otherInRemark[0].opCheckRemark), $line = 69), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 72, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 72), $out += ' type="text" style="width:30%;" value="', $line = 72, remarkArrangeList.otherInRemark.length > 0 && ($line = 72, 
            $out += $escape(remarkArrangeList.otherInRemark[0].financeCheckRemark), $line = 72), 
            $out += '" /> </div> </div>', $line = 74), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i> 其它收入\r\n                        <a href="javascript:void(0)" class="T-OtherIn-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n                        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td whichDay="{{otherInCome.whichDay}}"><span class="whichDay"></span></td>\r\n\r\n                        <td><span>{{otherInCome.title}}</span><input style="width:90px;" type="hidden" name="title" reset="true" value="{{otherInCome.title}}" old="{{otherInCome.title}}" maxlength="100" {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                        <td>\r\n                        {{if tripPlan.billStatus == -1}}\r\n                            <span>{{otherInCome.price}}</span>\r\n                            <input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}"/>\r\n                        {{else}}\r\n                            <input  type="text" class="F-float F-money w-80" \r\n                            name="price" value="{{otherInCome.price}}"  maxlength="11"\r\n                            {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                        {{/if}}\r\n                        </td>\r\n\r\n                        <td><input type="text" class="F-float F-count w-50" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                        <td><span class="needPayMoney F-float F-money">{{otherInCome.needPayMoney}}</span><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n\r\n                        <td>{{if editStatus == 1}}<input name="billRemark" value="{{otherInCome.billRemark}}" maxlength="1000" {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>{{else}}{{otherInCome.billRemark}}{{/if}}</td>\r\n\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});