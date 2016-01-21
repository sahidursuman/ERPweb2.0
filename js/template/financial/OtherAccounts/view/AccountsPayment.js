/*TMODJS:{"debug":true,"version":428,"md5":"16a0f7adb6496025b61c65b2a723aab3"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsPayment", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, type = $data.type, showBtnFlag = $data.showBtnFlag, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-AccountsPayment globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>项目名称: <span class="T-name">', 
            $line = 6, $out += $escape(searchParam.name), $out += '</span></label> <input type="hidden" name="itemName" value="', 
            $line = 7, $out += $escape(searchParam.name), $out += '"> <label class="marginLeft-30">账期：</label> <input class="datepicker T-startTime T-time" name="joinTime" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startAccountTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="datepicker T-endTime T-time" name="joinTime" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.endAccountTime), $out += '" style="width:100px;"/> <label class="marginLeft-30">团信息：</label> <input name="tripInfo" placeholder="团信息" type="text" class="T-creatorUserChoose ui-autocomplete-input" name="creator" value="', 
            $line = 12, $out += $escape(searchParam.info), $out += '" style="width:200px;" /> <input type="hidden" name="creatorId" value=""> <button class="btn-height btn-sm search-btn T-paymentSearch marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count"> <label class=" control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 22, $out += $escape(statistics.sumNeedPayMoney), $out += '</span></label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 23, $out += $escape(statistics.sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="F-float F-money">', 
            $line = 24, $out += $escape(statistics.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="F-float F-money">', 
            $line = 25, $out += $escape(statistics.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 26, $out += $escape(statistics.confirmedMoney), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input name="sumPayMoney" type="text" class="T-btn-autofill F-float F-money" ', 
            $line = 33, type && ($out += "disabled ", $line = 33), $out += " ", $line = 33, 
            1 == showBtnFlag && ($out += 'readonly="true" ', $line = 33), $out += "/> </label> </label> </div> ", 
            $line = 37, showBtnFlag || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-clear-auto "><i class="ace-icon fa fa-check-circle"></i>自动下账</button> </div> ', 
            $line = 41), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 45, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-l-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 51, $out += $escape(bankNo), $out += '" class="money" style="width:300px;"> <input type="hidden" name="card-id" value="', 
            $line = 52, $out += $escape(bankId), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 58, $out += $escape(voucher), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 64, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-otherInfo" name="sumPayRemark" value="', 
            $line = 71, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">团队人数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 100, $each(financialOtherDetailsList, function(Checking) {
                $out += ' <tr data-id="', $line = 101, $out += $escape(Checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 101, $out += $escape(Checking.isConfirmAccount), $out += '" data-entity-checkRemark="', 
                $line = 101, $out += $escape(Checking.checkRemark), $out += '" data-entity-settlementMoney="', 
                $line = 101, $out += $escape(Checking.settlementMoney), $out += '"> <td>', $line = 102, 
                $out += $escape(Checking.info), $out += '</td> <td name="startTime">', $line = 103, 
                $out += $escape(Checking.accountTime), $out += '</td> <td><span class="F-float F-count">', 
                $line = 104, $out += $escape(Checking.adultCount), $out += "</span>", $line = 104, 
                $out += $escape("大人"), $out += '<span class="F-float F-count">', $line = 104, $out += $escape(Checking.childCount), 
                $out += "</span>", $line = 104, $out += $escape("小孩"), $out += '</td> <td class="F-float F-money">', 
                $line = 105, $out += $escape(Checking.price), $out += '</td> <td class="F-float F-count">', 
                $line = 106, $out += $escape(Checking.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 107, $out += $escape(Checking.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 108, $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookPay">', 
                $line = 109, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 109, 
                $out += $escape(Checking.agencyPayedMoney), $out += "</span> ", $line = 110, 1 != Checking.isGuidePay && ($line = 110, 
                $out += $escape(";导付："), $out += '<span class="F-float F-money">', $line = 110, 
                $out += $escape(Checking.guidePayedMoney), $out += "</span>", $line = 110), $out += "</a></td> <td>", 
                $line = 111, null != Checking.billImage && "" != Checking.billImage ? ($out += '<a href="#" class="T-action T-viewInsuanceImg" url="', 
                $line = 111, $out += $escape(Checking.billImage), $out += '"><span>查看</span></a>', 
                $line = 111) : ($out += '<span style="color:#bbb">查看</span>', $line = 111), $out += '</td> <td class="F-float F-money"> ', 
                $line = 113, $out += $escape(Checking.settlementMoney), $out += ' </td> <td class="F-float F-money"> ', 
                $line = 116, $out += $escape(Checking.unPayedMoney), $out += " </td> <td>", $line = 118, 
                !showBtnFlag && Checking.unPayedMoney <= 0 ? ($out += '<span class="F-float F-money">', 
                $line = 118, $out += $escape(Checking.payMoney || 0), $out += "</span> ", $line = 119) : ($out += ' <input type="text" name="payMoney" class="F-float F-money" value="', 
                $line = 120, $out += $escape(Checking.payMoney), $out += '" data-le="', $line = 120, 
                $out += $escape(Checking.unPayedMoney), $out += '"> ', $line = 120), $out += ' </td> <td> <input type="text" value="', 
                $line = 123, $out += $escape(Checking.payRemark), $out += '" name="payRemark" ', 
                $line = 123, !showBtnFlag && Checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 123), $out += "> </td> <td>", $line = 125, $out += $escape(Checking.checkTime), 
                $out += "</td> <td>", $line = 126, $out += $escape(Checking.checkUser), $out += "</td> <td> ", 
                $line = 128, 1 == Checking.isConfirmAccount ? ($out += "已对账", $line = 128) : 0 == Checking.isConfirmAccount && ($out += "未对账", 
                $line = 128), $out += ' <label class="padding-right20">|</label> <a class="T-action T-viewhandle">查看</a> </td> </tr> ', 
                $line = 133;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 139, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-AccountsPayment globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group">\r\n                    <label>项目名称: <span class="T-name">{{searchParam.name}}</span></label>\r\n                    <input type="hidden" name="itemName" value="{{searchParam.name}}">\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="datepicker T-startTime T-time" name="joinTime" placeholder="开始日期" type="text" value="{{searchParam.startAccountTime}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="datepicker T-endTime T-time" name="joinTime" placeholder="结束日期" type="text" value="{{searchParam.endAccountTime}}" style="width:100px;"/> <label class="marginLeft-30">团信息：</label>\r\n                    <input name="tripInfo" placeholder="团信息" type="text" class="T-creatorUserChoose ui-autocomplete-input" name="creator" value="{{searchParam.info}}" style="width:200px;" />\r\n                    <input type="hidden" name="creatorId" value="">\r\n                    <button class="btn-height btn-sm search-btn T-paymentSearch marginLeft-30">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count">\r\n                <label class=" control-label pull-left">账面应付合计：<span class="F-float F-money">{{statistics.sumNeedPayMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{statistics.sumPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="F-float F-money">{{statistics.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="F-float F-money">{{statistics.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{statistics.confirmedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input name="sumPayMoney" type="text" class="T-btn-autofill F-float F-money" {{if type}}disabled {{/if}} {{if showBtnFlag==true}}readonly="true" {{/if}}/>\r\n                </label>\r\n                </label>\r\n            </div>\r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-clear-auto "><i class="ace-icon fa fa-check-circle"></i>自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n            <div class="form-group mar-l-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-otherInfo" name="sumPayRemark" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">团队人数</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr data-id="{{Checking.id}}" data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-checkRemark="{{Checking.checkRemark}}" data-entity-settlementMoney="{{Checking.settlementMoney}}">\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td><span class="F-float F-count">{{Checking.adultCount}}</span>{{"大人"}}<span class="F-float F-count">{{Checking.childCount}}</span>{{"小孩"}}</td>\r\n                <td class="F-float F-money">{{Checking.price}}</td>\r\n                <td class="F-float F-count">{{Checking.memberCount}}</td>\r\n                <td class="F-float F-money">{{Checking.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookPay">{{"社付："}}<span class="F-float F-money">{{Checking.agencyPayedMoney}}</span>\r\n                {{if Checking.isGuidePay != 1}}{{";导付："}}<span class="F-float F-money">{{Checking.guidePayedMoney}}</span>{{/if}}</a></td>\r\n                <td>{{if Checking.billImage != null && Checking.billImage !=""}}<a href="#" class="T-action T-viewInsuanceImg" url="{{Checking.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td class="F-float F-money">\r\n                    {{Checking.settlementMoney}}\r\n                </td>\r\n                <td class="F-float F-money">\r\n                    {{Checking.unPayedMoney}}\r\n                </td>\r\n                <td>{{if !showBtnFlag && Checking.unPayedMoney\r\n                    <=0 }}<span class="F-float F-money">{{Checking.payMoney || 0.00}}</span>\r\n                        {{else}}\r\n                        <input type="text" name="payMoney" class="F-float F-money" value="{{Checking.payMoney}}" data-le="{{Checking.unPayedMoney}}"> {{/if}}\r\n                </td>\r\n                <td>\r\n                    <input type="text" value="{{Checking.payRemark}}" name="payRemark" {{if !showBtnFlag && Checking.unPayedMoney <=0 }} disabled {{/if}}>\r\n                </td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    {{if Checking.isConfirmAccount == 1}}已对账{{else if Checking.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <label class="padding-right20">|</label>\r\n                    <a class="T-action T-viewhandle">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});