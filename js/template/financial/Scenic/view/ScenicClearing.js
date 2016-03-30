/*TMODJS:{"debug":true,"version":128,"md5":"ba5669337936f7b5d152cb6876092228"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/ScenicClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, scenicName = $data.scenicName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, isOuter = $data.isOuter, isAutoPay = $data.isAutoPay, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialScenicListData = $data.financialScenicListData, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.scenicId), 
            $out += '" data-name="', $line = 1, $out += $escape(scenicName), $out += '"> <div class="clearfix globalAdd"> <form class="form-inline T-search-area" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>景区：</label> <input type="text" name="scenicName" value="', 
            $line = 6, $out += $escape(scenicName), $out += '"> <input value="', $line = 7, 
            $out += $escape(searchParam.scenicId), $out += '" name="scenicId" type="hidden"> </div> <div class="form-group input-daterange mar-r-10"> <label>账期：</label> <input type="text" name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label for="">账务类别：</label> <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 17, $out += $escape(searchParam.accountInfo), $out += '" /> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 21, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 23, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 27) : ($out += " 未对账 ", $line = 29) : ($out += " 全部 ", $line = 25), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <input name="accountStatus" value="', 
            $line = 44, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </form> <form class="form-horizontal clearfix" role="form" onsubmit="return false"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 47, $out += $escape(sumNeedPayMoney), $out += '</span>元 </label> <label class="control-label pull-left marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 48, $out += $escape(sumPayedMoney), $out += ' </span></label> <label class="control-label pull-left marginLeft-30">结算金额合计：<span class="F-float F-money">', 
            $line = 49, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">未付金额合计：<span>', 
            $line = 50, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 51, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </form> <div class="form-inline globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group mar-r-10"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 57, $out += $escape(sumPayMoney), $out += '" ', $line = 57, (isOuter || 0 != isAutoPay) && ($out += ' disabled="disabled" ', 
            $line = 57), $out += "> </label> </div> ", $line = 60, isOuter || ($out += ' <div class="form-group mar-r-10"> ', 
            $line = 62, 0 == isAutoPay ? ($out += ' <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> ', 
            $line = 66) : 1 == isAutoPay && ($out += ' <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> ', 
            $line = 70), $out += " </div> ", $line = 72), $out += ' <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 76, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" ', 
            $line = 82, 0 == sumPayType && ($out += 'value="', $line = 82, $out += $escape(bankNo), 
            $out += '"', $line = 82), $out += ' class="money" style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 83, 0 == sumPayType && ($out += 'value="', $line = 83, $out += $escape(bankId), 
            $out += '"', $line = 83), $out += '/> </label> </div> <div class="form-group mar-r-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" ', 
            $line = 89, 0 != sumPayType && ($out += 'value="', $line = 89, $out += $escape(bankNo), 
            $out += '"', $line = 89), $out += ' class="money" style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 90, 0 != sumPayType && ($out += 'value="', $line = 90, $out += $escape(bankId), 
            $out += '"', $line = 90), $out += ' /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 96, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 102, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group "> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" value="', 
            $line = 109, $out += $escape(sumPayRemark), $out += '" class="T-remark" style="width:900px;"> </label> </div> </div> <table class="table table-striped table-bordered table-hover all hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>账务类别</th> <th>游玩日期(账期)</th> <th>收费项</th> <th>订单号</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th><span class="necessary">*</span>本次付款金额</th> <th style="width: 100px">备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:100px">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 136, $each(financialScenicListData, function(rs) {
                $out += ' <tr data-id="', $line = 137, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 138, $out += $escape(rs.tripNumber), $line = 138, $out += $escape("，"), 
                $line = 138, $out += $escape(rs.lineProductName), $line = 138, $out += $escape("，"), 
                $line = 138, $out += $escape(rs.guideName), $out += "</td> <td>", $line = 139, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 139) : ($line = 139, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 139), $out += "</td> <td>", $line = 140, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 141, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 142, 
                $out += $escape(rs.price), $out += "</td> <td>", $line = 143, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 144, null == rs.reduceMoney || "" == rs.reduceMoney ? ($out += "0", 
                $line = 144) : ($line = 144, $out += $escape(rs.reduceMoney), $line = 144), $out += "</td> <td>", 
                $line = 145, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 146, $out += $escape("社付："), $line = 146, $out += $escape(rs.payedMoney), 
                $line = 146, rs.isGuidePay && 1 == rs.isGuidePay || ($out += "，", $line = 146, $out += $escape("导付："), 
                $line = 146, $out += $escape(rs.realGuidePayMoney), $line = 146), $out += "</a></td> <td>", 
                $line = 147, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-scenicImg" url="', 
                $line = 147, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 147) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 147), $out += "</td> <td>", $line = 148, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 149, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input name="payMoney" type="text" value="', 
                $line = 150, $out += $escape(rs.payMoney), $out += '" class="money" maxlength="9" /></td> <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">', 
                $line = 151, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 152, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 152) : ($line = 152, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 152), 
                $out += "</td> <td>", $line = 153, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 153) : ($line = 153, $out += $escape(rs.checkUserName), $line = 153), $out += "</td> <td > ", 
                $line = 155, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 155) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 155), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 160;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 165, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary R-right T-saveClear" data-right="1250003"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.scenicId}}" data-name="{{scenicName}}">\r\n    <div class="clearfix globalAdd">\r\n        <form class="form-inline T-search-area" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-10">\r\n                <label>景区：</label>\r\n                <input type="text" name="scenicName" value="{{scenicName}}">\r\n                <input value="{{searchParam.scenicId}}" name="scenicId" type="hidden">\r\n            </div>\r\n            <div class="form-group input-daterange mar-r-10">\r\n                <label>账期：</label>\r\n                <input type="text" name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label for="">账务类别：</label>\r\n                <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" />\r\n            </div>\r\n            <label class="form-group">对账状态：</label>\r\n            <div class="form-group btn-group T-check-status mar-r-10">\r\n                <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                        {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                            全部\r\n                        {{else if searchParam.isConfirmAccount == 1}}\r\n                            已对账\r\n                        {{else}}\r\n                            未对账\r\n                        {{/if}}\r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn-sm search-btn  T-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n            <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n        </form>\r\n        <form class="form-horizontal clearfix" role="form" onsubmit="return false">\r\n            <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span>元 </label>\r\n            <label class="control-label pull-left marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}} </span></label>\r\n            <label class="control-label pull-left marginLeft-30">结算金额合计：<span class="F-float F-money">{{sumSettlementMoney}}</span></label>\r\n            <label class="control-label pull-left marginLeft-30">未付金额合计：<span>{{sumUnPayedMoney}}</span></label>\r\n            <label class="control-label pull-left marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n        </form>\r\n        <div class="form-inline globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money F-float F-money" value="{{sumPayMoney}}" {{if isOuter || isAutoPay != 0}} disabled="disabled" {{/if}}>\r\n                </label>\r\n            </div>\r\n            {{if (!isOuter)}}\r\n            <div class="form-group mar-r-10">\r\n                {{if isAutoPay == 0}}\r\n                <button class="btn btn-primary T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                {{else if isAutoPay == 1}}\r\n                <button class="btn btn-warning T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n                {{/if}}\r\n            </div>\r\n            {{/if}}\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" {{if sumPayType == 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id" {{if sumPayType == 0}}value="{{bankId}}"{{/if}}/>\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" {{if sumPayType != 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" {{if sumPayType != 0}}value="{{bankId}}"{{/if}} />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class="form-group ">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="remark" value="{{sumPayRemark}}" class="T-remark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>账务类别</th>\r\n                <th>游玩日期(账期)</th>\r\n                <th>收费项</th>\r\n                <th>订单号</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th><span class="necessary">*</span>本次付款金额</th>\r\n                <th style="width: 100px">备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="width:100px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialScenicListData as rs index}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{rs.name}}</td>\r\n                <td>{{rs.orderNumber}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{if rs.reduceMoney==null || rs.reduceMoney == ""}}0{{else}}{{rs.reduceMoney}}{{/if}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{if !rs.isGuidePay || rs.isGuidePay != 1}}，{{"导付："}}{{rs.realGuidePayMoney}}{{/if}}</a></td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-scenicImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td><input name="payMoney" type="text" value="{{rs.payMoney}}" class="money" maxlength="9" /></td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td >\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-saveClear" data-right="1250003">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});