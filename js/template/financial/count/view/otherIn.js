/*TMODJS:{"debug":true,"version":74,"md5":"ba5b2c9da4bc88bc741f81aa9e3ffb10"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/otherIn", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, arrangeIncomePaymentList = $data.arrangeIncomePaymentList, $escape = ($data.otherInCome, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $out += '<div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 其它收入 <a href="javascript:void(0)" class="T-OtherIn-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> </tr> </thead> <tbody class="T-count-otherIn"> ', 
            $line = 25, $each(arrangeIncomePaymentList, function(otherInCome) {
                $out += " ", $line = 26, null != otherInCome && ($out += ' <tr otherInId="', $line = 27, 
                $out += $escape(otherInCome.id), $out += '" otherIn="', $line = 27, $out += $escape(otherInCome.id), 
                $out += '" whichDay="', $line = 27, $out += $escape(otherInCome.whichDay), $out += '"> <td whichDay="', 
                $line = 28, $out += $escape(otherInCome.whichDay), $out += '"><span class="whichDay"></span></td> <td><span>', 
                $line = 30, $out += $escape(otherInCome.title), $out += '</span><input style="width:90px;" type="hidden" name="title" reset="true" value="', 
                $line = 30, $out += $escape(otherInCome.title), $out += '" old="', $line = 30, $out += $escape(otherInCome.title), 
                $out += '" maxlength="100" ', $line = 30, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 30), $out += "/></td> <td> ", $line = 33, -1 == tripPlan.billStatus ? ($out += " <span>", 
                $line = 34, $out += $escape(otherInCome.price), $out += '</span> <input style="width:90px;" type="hidden" name="price" value="', 
                $line = 35, $out += $escape(otherInCome.price), $out += '" old="', $line = 35, $out += $escape(otherInCome.price), 
                $out += '"/> ', $line = 36) : ($out += ' <input type="text" class="F-float F-money w-80" name="price" value="', 
                $line = 38, $out += $escape(otherInCome.price), $out += '" maxlength="11" ', $line = 39, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 39), 
                $out += "/> ", $line = 40), $out += ' </td> <td><input type="text" class="F-float F-count w-50" name="count" value="', 
                $line = 43, $out += $escape(otherInCome.count), $out += '" old="', $line = 43, $out += $escape(otherInCome.count), 
                $out += '" maxlength="11" ', $line = 44, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 44), $out += '/></td> <td><span class="needPayMoney F-float F-money">', 
                $line = 46, $out += $escape(otherInCome.needPayMoney), $out += '</span><input type="hidden" name="needPayMoney" value="', 
                $line = 46, $out += $escape(otherInCome.needPayMoney), $out += '" ', $line = 47, 
                1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', $line = 47), 
                $out += "/></span></td> <td>", $line = 49, null != otherInCome.billImage && "" != otherInCome.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 50, $out += $escape(otherInCome.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 51) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 53), $out += ' </td> <td><input name="billRemark" value="', 
                $line = 56, $out += $escape(otherInCome.billRemark), $out += '" maxlength="1000"/> &nbsp;&nbsp;<a href="javascript:void(0)" class="T-otherInArrDel">删除</a> </td> </tr> ', 
                $line = 60), $out += " ", $line = 61;
            }), $out += " </tbody> </table> ", $line = 65, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 68, isFinance || ($out += 'readonly="readonly"', $line = 68), $out += ' type="text" style="width:30%;" value="', 
            $line = 68, remarkArrangeList.otherInRemark.length > 0 && ($line = 68, $out += $escape(remarkArrangeList.otherInRemark[0].opCheckRemark), 
            $line = 68), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 71, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 71), $out += ' type="text" style="width:30%;" value="', $line = 71, remarkArrangeList.otherInRemark.length > 0 && ($line = 71, 
            $out += $escape(remarkArrangeList.otherInRemark[0].financeCheckRemark), $line = 71), 
            $out += '" /> </div> </div>', $line = 73), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <i class="ace-icon fa fa-medkit"></i> 其它收入\r\n                        <a href="javascript:void(0)" class="T-OtherIn-add">\r\n                            <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </a>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n                        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n                        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td whichDay="{{otherInCome.whichDay}}"><span class="whichDay"></span></td>\r\n\r\n                        <td><span>{{otherInCome.title}}</span><input style="width:90px;" type="hidden" name="title" reset="true" value="{{otherInCome.title}}" old="{{otherInCome.title}}" maxlength="100" {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                        <td>\r\n                        {{if tripPlan.billStatus == -1}}\r\n                            <span>{{otherInCome.price}}</span>\r\n                            <input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}"/>\r\n                        {{else}}\r\n                            <input  type="text" class="F-float F-money w-80" \r\n                            name="price" value="{{otherInCome.price}}"  maxlength="11"\r\n                            {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                        {{/if}}\r\n                        </td>\r\n\r\n                        <td><input type="text" class="F-float F-count w-50" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                        <td><span class="needPayMoney F-float F-money">{{otherInCome.needPayMoney}}</span><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n\r\n                        <td><input name="billRemark" value="{{otherInCome.billRemark}}" maxlength="1000"/>\r\n                        &nbsp;&nbsp;<a href="javascript:void(0)" class="T-otherInArrDel">删除</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if !isFinance }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});