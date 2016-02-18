/*TMODJS:{"debug":true,"version":181,"md5":"492aaf53226810c36716605dc9e36c5d"}*/
define(function(require) {
    return require("../../../template")("financial/insure/view/insureClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, insuranceName = $data.insuranceName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, showBtnFlag = $data.showBtnFlag, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialInsuranceList = $data.financialInsuranceList, isAutoPay = ($data.rs, 
            $data.index, $data.isAutoPay), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.insuranceId), 
            $out += '" data-name="', $line = 1, $out += $escape(insuranceName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label> 保险公司:', 
            $line = 6, $out += $escape(insuranceName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="accountInfo" placeholder="团信息" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class=" btn-sm search-btn btn-height T-search marginLeft-30" > <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd T-count"> <label>账面应付合计：', 
            $line = 23, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 24, $out += $escape(sumPayedMoney), $out += ' </span></label> <label class="marginLeft-30">结算金额合计：<span class="F-float F-money">', 
            $line = 25, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="marginLeft-30">未付金额合计：<span class="F-float F-money">', 
            $line = 26, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 27, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 35, $out += $escape(sumPayMoney), $out += '" ', $line = 35, 1 == showBtnFlag && ($out += 'readonly="true"', 
            $line = 35), $out += " > </label> </div> ", $line = 39, showBtnFlag || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> ', 
            $line = 48), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 53, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-l-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 60, $out += $escape(bankNo), $out += '" class="money" style="width:300px;"> <input type="hidden" name="card-id" value="', 
            $line = 61, $out += $escape(bankId), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 67, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 73, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input name="sumPayRemark" type="text" value="', 
            $line = 81, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <table class="table table-striped table-bordered table-hover all margin-top" > <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="width:100px;">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 108, $each(financialInsuranceList, function(rs) {
                $out += ' <tr class="T-clearTr', $line = 109, $out += $escape(rs.id), $out += '" data-id="', 
                $line = 109, $out += $escape(rs.id), $out += '" style="border:none"> <td>', $line = 110, 
                null != rs.tripNumber && "" != rs.tripNumber && ($line = 110, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 111, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 111), $out += " ", $line = 112), $out += " ", $line = 113, null != rs.lineProductName && "" != rs.lineProductName && ($line = 113, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 114, rs.guideName && ($out += "，", 
                $line = 114), $out += " ", $line = 115), $out += " ", $line = 116, null != rs.guideName && "" != rs.guideName && ($line = 116, 
                $out += $escape(rs.guideName), $line = 116), $out += " </td> <td>", $line = 118, 
                null == rs.accountTime || "" == rs.accountTime ? ($out += " - ", $line = 120) : ($out += " ", 
                $line = 121, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += " ", $line = 122), $out += " </td> <td>", $line = 124, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 124) : ($line = 124, $out += $escape(rs.type), $line = 124), $out += '</td> <td class="F-float F-money">', 
                $line = 125, $out += $escape(rs.price), $out += '</td> <td class="F-float F-count">', 
                $line = 126, $out += $escape(rs.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 127, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 128, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 129, $out += $escape(rs.payedMoney), $out += '">', $line = 129, $out += $escape("社付："), 
                $out += '<span class="F-float F-money">', $line = 129, $out += $escape(rs.payedMoney), 
                $out += "</span></a></td> <td>", $line = 130, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-insuranceImg" url="', 
                $line = 130, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 130) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 130), $out += '</td> <td class="F-float F-money">', $line = 131, $out += $escape(rs.settlementMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 132, $out += $escape(rs.unPayedMoney), 
                $out += '</td> <td><input name="payMoney" class="money F-float F-money" type="text" value="', 
                $line = 133, $out += $escape(rs.payMoney), $out += '" data-le="', $line = 133, $out += $escape(rs.unPayedMoney), 
                $out += '" ', $line = 133, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 133), $out += ' maxlength="9"></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 134, $out += $escape(rs.payRemark), $out += '" maxlength="1000" ', $line = 134, 
                2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 134), $out += "></td> <td>", 
                $line = 135, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 135) : ($line = 135, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 135), 
                $out += "</td> <td>", $line = 136, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 136) : ($line = 136, $out += $escape(rs.checkUserName), $line = 136), $out += "</td> <td>", 
                $line = 137, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 137) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 137), $out += ' <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 141;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 147, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.insuranceId}}" data-name="{{insuranceName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label> 保险公司:{{insuranceName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="accountInfo" placeholder="团信息" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    \r\n                    <button class=" btn-sm search-btn btn-height T-search marginLeft-30" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd T-count">\r\n                <label>账面应付合计：{{sumNeedPayMoney}}</label>\r\n                <label class="marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}} </span></label>\r\n                <label class="marginLeft-30">结算金额合计：<span class="F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="marginLeft-30">未付金额合计：<span class="F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money F-float F-money"  value="{{sumPayMoney}}"  {{if showBtnFlag == true}}readonly="true"{{/if}} >\r\n                </label>\r\n            </div>\r\n                \r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-primary T-clear-auto">\r\n                        <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                    </button>\r\n                    <button class="btn btn-warning T-cancel-auto">\r\n                        <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                    </button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <table class="table table-striped table-bordered table-hover all margin-top" >\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">险种</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="width:100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialInsuranceList as rs index}}\r\n            <tr class="T-clearTr{{rs.id}}" data-id="{{rs.id}}" style="border:none">\r\n                <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td class="F-float F-money">{{rs.price}}</td>\r\n                <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-insuranceImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                <td class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><input name="payMoney" class="money F-float F-money" type="text" value="{{rs.payMoney}}" data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}} maxlength="9"></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>{{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});