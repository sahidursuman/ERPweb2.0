/*TMODJS:{"debug":true,"version":34,"md5":"f9fec4b354a2ce3328103d764ed2d8e9"}*/
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
                $out += '" > <td whichDay="', $line = 29, $out += $escape(otherInCome.whichDay), 
                $out += '">第', $line = 29, $out += $escape(otherInCome.whichDay), $out += "天</td> <td><span>", 
                $line = 30, $out += $escape(otherInCome.title), $out += '</span><input style="width:90px;" type="hidden" name="title" reset="true" value="', 
                $line = 30, $out += $escape(otherInCome.title), $out += '" old="', $line = 30, $out += $escape(otherInCome.title), 
                $out += '" maxlength="100" ', $line = 30, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 30), $out += "/></td> <td><span>", $line = 31, $out += $escape(otherInCome.price), 
                $out += '</span><input style="width:90px;" type="hidden" class="F-float F-money" name="price" value="', 
                $line = 31, $out += $escape(otherInCome.price), $out += '" old="', $line = 31, $out += $escape(otherInCome.price), 
                $out += '" maxlength="11" ', $line = 32, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 32), $out += ' /></td> <td><input style="width:90px;" type="text" class="F-float F-count" name="count" value="', 
                $line = 34, $out += $escape(otherInCome.count), $out += '" old="', $line = 34, $out += $escape(otherInCome.count), 
                $out += '" maxlength="11" ', $line = 35, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 35), $out += '/></td> <td><span class="needPayMoney F-float F-money">', 
                $line = 36, $out += $escape(otherInCome.needPayMoney), $out += '</span><input type="hidden" name="needPayMoney" value="', 
                $line = 36, $out += $escape(otherInCome.needPayMoney), $out += '" ', $line = 37, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 37), 
                $out += "/></span></td> <td>", $line = 38, null != otherInCome.billImage && "" != otherInCome.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 39, $out += $escape(otherInCome.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 40) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 42), $out += " </td> <td>", 
                $line = 44, 1 == editStatus ? ($out += '<input name="billRemark" value="', $line = 44, 
                $out += $escape(otherInCome.billRemark), $out += '" maxlength="1000" />', $line = 44) : ($line = 44, 
                $out += $escape(otherInCome.billRemark), $line = 44), $out += "</td> ", $line = 45, 
                2 == tripPlan.billStatus && ($out += "<td>", $line = 45, 0 == otherInCome.isConfirmAccount ? ($out += "未对账", 
                $line = 45) : ($out += "已对账", $line = 45), $out += "</td>", $line = 45), $out += " </tr> ", 
                $line = 47), $out += " ", $line = 48;
            }), $out += " </tbody> </table> ", $line = 52, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 55, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 55), $out += ' type="text" style="width:30%;" value="', $line = 55, remarkArrangeList.otherInRemark.length > 0 && ($line = 55, 
            $out += $escape(remarkArrangeList.otherInRemark[0].opCheckRemark), $line = 55), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 58, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 58), $out += ' type="text" style="width:30%;" value="', $line = 58, remarkArrangeList.otherInRemark.length > 0 && ($line = 58, 
            $out += $escape(remarkArrangeList.otherInRemark[0].financeCheckRemark), $line = 58), 
            $out += '" /> </div> </div>', $line = 60), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i> 其它收入\r\n                        <a href="javascript:void(0)" class="T-OtherIn-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n                        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" >\r\n                        <td whichDay="{{otherInCome.whichDay}}">第{{otherInCome.whichDay}}天</td>\r\n                        <td><span>{{otherInCome.title}}</span><input style="width:90px;" type="hidden" name="title" reset="true" value="{{otherInCome.title}}" old="{{otherInCome.title}}" maxlength="100" {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" class="F-float F-money" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><input style="width:90px;" type="text" class="F-float F-count" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney F-float F-money">{{otherInCome.needPayMoney}}</span><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{if editStatus == 1}}<input name="billRemark" value="{{otherInCome.billRemark}}" maxlength="1000" />{{else}}{{otherInCome.billRemark}}{{/if}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});