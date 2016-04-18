/*TMODJS:{"debug":true,"version":131,"md5":"3e5e26e7811f68265de11dd7ccc443b2"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/otherIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, editStatus = $data.editStatus, otherIncome = $data.otherIncome, $each = $utils.$each, $escape = ($data.otherInCome, 
            $data.$index, $utils.$escape), tripPlan = $data.tripPlan, isFinance = $data.isFinance, remarkArrangeList = $data.remarkArrangeList, isOp = $data.isOp, $out = "";
            return $line = 1, 2 != editStatus && ($out += ' <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 其它收入 <a href="javascript:void(0)" class="T-OtherIn-add"> <button class="btn btn-sm btn-success T-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> ', 
            $line = 13), $out += ' <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border"><span class="necessary">*</span>单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">金额</th> <th class="th-border">导游</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> </tr> </thead> <tbody class="T-count-otherIn"> ', 
            $line = 28, null != otherIncome && ($out += " ", $line = 29, otherIncome.listMap.length && ($out += " ", 
            $line = 30, $each(otherIncome.listMap, function(otherInCome) {
                $out += ' <tr otherInId="', $line = 31, $out += $escape(otherInCome.id), $out += '" whichDay="', 
                $line = 31, $out += $escape(otherInCome.whichDay), $out += '"> <td> <span>', $line = 33, 
                $out += $escape($helpers.dateFormat(otherInCome.dateTime, "yyyy-MM-dd")), $out += '</span> </td> <td> <span class="title">', 
                $line = 37, $out += $escape(otherInCome.title), $out += "</span> </td> <td> ", $line = 41, 
                -1 == tripPlan.billStatus ? ($out += " <span>", $line = 42, $out += $escape(otherInCome.realPrice), 
                $out += '</span> <input style="width:90px;" type="hidden" name="price" value="', 
                $line = 43, $out += $escape(otherInCome.realPrice), $out += '" old="', $line = 43, 
                $out += $escape(otherInCome.realPrice), $out += '"/> ', $line = 44) : ($out += " ", 
                $line = 45, 2 == editStatus ? ($out += " <span>", $line = 46, $out += $escape(otherInCome.realPrice), 
                $out += '</span> <input type="hidden" name="price" value="', $line = 47, $out += $escape(otherInCome.realPrice), 
                $out += '"/> ', $line = 48) : ($out += ' <input type="text" class="F-float F-money w-80" name="price" value="', 
                $line = 50, $out += $escape(otherInCome.realPrice), $out += '" maxlength="11" ', 
                $line = 51, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 51), $out += "/> ", $line = 52), $out += " ", $line = 53), $out += " </td> <td> ", 
                $line = 57, 2 == editStatus ? ($out += " <span>", $line = 58, $out += $escape(otherInCome.realCount), 
                $out += '</span> <input type="hidden" name="count" value="', $line = 59, $out += $escape(otherInCome.realCount), 
                $out += '"/> ', $line = 60) : ($out += ' <input type="text" class="F-float F-count w-50" name="count" value="', 
                $line = 61, $out += $escape(otherInCome.realCount), $out += '" ', $line = 62, 1 == otherInCome.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 62), $out += "/> ", $line = 63), $out += ' </td> <td> <span class="F-float F-money realneedPayMoney">', 
                $line = 67, $out += $escape(otherInCome.realneedPayMoney), $out += '</span> <input name="realneedPayMoney" value="', 
                $line = 68, $out += $escape(otherInCome.realneedPayMoney), $out += '" type="hidden" /> </td> <td> <span class="guideName">', 
                $line = 72, $out += $escape(otherInCome.guideName), $out += '</span> <input name="guideArrangeId" value="', 
                $line = 73, $out += $escape(otherInCome.guideArrangeId), $out += '" type="hidden" /> </td> <td> ', 
                $line = 77, null != otherInCome.billImage && "" != otherInCome.billImage ? ($out += ' <a href="javascript:void(0);" url="', 
                $line = 78, $out += $escape(otherInCome.billImage), $out += '" class="btn-view">查看</a> ', 
                $line = 79) : ($out += ' <span style="color:#bbb;">查看</span> ', $line = 81), $out += " </td> <td> ", 
                $line = 85, 2 != editStatus ? ($out += ' <input name="billRemark" value="', $line = 86, 
                $out += $escape(otherInCome.billRemark), $out += '" maxlength="1000"/> &nbsp;&nbsp;<a href="javascript:void(0)" class="T-otherInArrDel">删除</a> ', 
                $line = 88) : ($out += " ", $line = 89, $out += $escape(otherInCome.billRemark), 
                $out += " ", $line = 90), $out += " </td> </tr> ", $line = 93;
            }), $out += " ", $line = 94), $out += " ", $line = 95), $out += " </tbody> </table> ", 
            $line = 99, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 102, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 102), $out += ' type="text" style="width:30%;" value="', $line = 102, remarkArrangeList.otherInRemark.length > 0 && ($line = 102, 
            $out += $escape(remarkArrangeList.otherInRemark[0].opCheckRemark), $line = 102), 
            $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 104, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 104), $out += ' type="text" style="width:30%;" value="', $line = 104, remarkArrangeList.otherInRemark.length > 0 && ($line = 104, 
            $out += $escape(remarkArrangeList.otherInRemark[0].financeCheckRemark), $line = 104), 
            $out += '" /> </div> </div>', $line = 106), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if editStatus != 2}}\r\n    <div class="ui-sortable-handle widget-container-col">\r\n        <h5 class="title-size">\r\n            <i class="ace-icon fa fa-medkit"></i> 其它收入\r\n            <a href="javascript:void(0)" class="T-OtherIn-add">\r\n                <button class="btn btn-sm btn-success T-add" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-plus"></i>\r\n                    新增\r\n                </button>\r\n            </a>\r\n        </h5>\r\n    </div>\r\n{{/if}}\r\n<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n    <tr>\r\n        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n        <th class="th-border"><span class="necessary">*</span>单价</th>\r\n        <th class="th-border"><span class="necessary">*</span>数量</th>\r\n        <th class="th-border">金额</th>\r\n        <th class="th-border">导游</th>\r\n        <th class="th-border">单据</th>\r\n        <th class="th-border">导游报账备注</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-otherIn">\r\n    {{if otherIncome != null}}\r\n        {{if otherIncome.listMap.length}}\r\n            {{each otherIncome.listMap as otherInCome}}\r\n                <tr otherInId="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                    <td>\r\n                        <span>{{otherInCome.dateTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                    </td><!-- 日期 -->\r\n\r\n                    <td>\r\n                        <span class="title">{{otherInCome.title}}</span>\r\n                    </td><!-- 项目 -->\r\n\r\n                    <td>\r\n                        {{if tripPlan.billStatus == -1}}\r\n                            <span>{{otherInCome.realPrice}}</span>\r\n                            <input style="width:90px;" type="hidden" name="price" value="{{otherInCome.realPrice}}" old="{{otherInCome.realPrice}}"/>\r\n                        {{else}}\r\n                            {{if editStatus == 2}}\r\n                                <span>{{otherInCome.realPrice}}</span>\r\n                                <input type="hidden" name="price" value="{{otherInCome.realPrice}}"/>\r\n                            {{else}}\r\n                                <input  type="text" class="F-float F-money w-80" \r\n                                name="price" value="{{otherInCome.realPrice}}"  maxlength="11"\r\n                                {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            {{/if}}\r\n                        {{/if}}\r\n                    </td><!-- 单价 -->\r\n\r\n                    <td>\r\n                        {{if editStatus == 2}}\r\n                            <span>{{otherInCome.realCount}}</span>\r\n                            <input type="hidden" name="count" value="{{otherInCome.realCount}}"/>\r\n                        {{else}}\r\n                            <input type="text" class="F-float F-count w-50" name="count" value="{{otherInCome.realCount}}"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                        {{/if}}\r\n                    </td><!-- 数量 -->\r\n\r\n                    <td>\r\n                        <span class="F-float F-money realneedPayMoney">{{otherInCome.realneedPayMoney}}</span>\r\n                        <input name="realneedPayMoney" value="{{otherInCome.realneedPayMoney}}" type="hidden" />\r\n                    </td><!-- 金额 -->\r\n\r\n                    <td>   \r\n                        <span class="guideName">{{otherInCome.guideName}}</span>\r\n                        <input name="guideArrangeId" value="{{otherInCome.guideArrangeId}}" type="hidden" />\r\n                    </td><!-- 导游 -->\r\n\r\n                    <td>\r\n                        {{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                            <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                        {{else}}\r\n                            <span style="color:#bbb;">查看</span>\r\n                        {{/if}}\r\n                    </td>\r\n\r\n                    <td>\r\n                        {{if editStatus != 2}}\r\n                            <input name="billRemark" value="{{otherInCome.billRemark}}" maxlength="1000"/>\r\n                            &nbsp;&nbsp;<a href="javascript:void(0)" class="T-otherInArrDel">删除</a>\r\n                        {{else}}\r\n                            {{otherInCome.billRemark}}\r\n                        {{/if}}\r\n                    </td>\r\n                </tr>\r\n            {{/each}}\r\n        {{/if}}\r\n    {{/if}}\r\n    </tbody>\r\n</table>\r\n\r\n{{if tripPlan.billStatus > -1}}\r\n<div style="width:60%;"><div> \r\n    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n</div>\r\n</div>{{/if}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});