/*TMODJS:{"debug":true,"version":394,"md5":"779c178e1aa5ef6c11dbaa150e79167a"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsPayment", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, type = $data.type, showBtnFlag = $data.showBtnFlag, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-AccountsPayment globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-horizontal row form-group T-search-area"> <label class="pull-left text-right ">项目名称:</label> <div class="col-sm-1"> <label class="T-name">', 
            $line = 7, $out += $escape(searchParam.name), $out += '</label> <input type="hidden" name="itemName" value="', 
            $line = 8, $out += $escape(searchParam.name), $out += '"> </div> <label class="pull-left text-right">账期:</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-startTime" name="joinTime" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right ">至</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-endTime" name="joinTime" value="', 
            $line = 19, $out += $escape(searchParam.endAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right">团信息:</label> <div class="col-sm-1"> <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off"> <input type="hidden" name="creatorId" value=""> </div> <div class="col-sm-1"> <button class=" btn-sm T-paymentSearch search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count"> <label class=" control-label pull-left">账面应付合计：', 
            $line = 34, $out += $escape(statistics.sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：', 
            $line = 35, $out += $escape(statistics.sumPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">结算金额合计：', 
            $line = 36, $out += $escape(statistics.sumSettlementMoney), $out += '</label> <label class=" control-label marginLeft-30">未付金额合计：', 
            $line = 37, $out += $escape(statistics.sumUnPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney ">', 
            $line = 38, $out += $escape(statistics.confirmedMoney), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额：</label> <label class="control-label"> <input name="sumPayMoney" type="text" class="T-btn-autofill" ', 
            $line = 46, type && ($out += "disabled ", $line = 46), $out += " ", $line = 46, 
            1 == showBtnFlag && ($out += 'readonly="true"', $line = 46), $out += "/></label> </label> </div> ", 
            $line = 50, showBtnFlag || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-clear-auto "><i class="ace-icon fa fa-check-circle"></i>自动下账</button> </div> ', 
            $line = 54), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 59, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-l-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 66, $out += $escape(bankNo), $out += '" class="money" style="width:230px;"> <input type="hidden" name="card-id" value="', 
            $line = 67, $out += $escape(bankId), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 73, $out += $escape(voucher), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 79, $out += $escape(billTime), $out += '" class="datepicker" style="width:100px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-otherInfo" name="sumPayRemark" value="', 
            $line = 87, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">团队人数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 116, $each(financialOtherDetailsList, function(Checking) {
                $out += ' <tr data-id="', $line = 117, $out += $escape(Checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 117, $out += $escape(Checking.isConfirmAccount), $out += '" data-entity-checkRemark="', 
                $line = 117, $out += $escape(Checking.checkRemark), $out += '" data-entity-settlementMoney="', 
                $line = 117, $out += $escape(Checking.settlementMoney), $out += '"> <td>', $line = 118, 
                $out += $escape(Checking.info), $out += '</td> <td name="startTime">', $line = 119, 
                $out += $escape(Checking.accountTime), $out += "</td> <td>", $line = 120, $out += $escape(Checking.adultCount), 
                $line = 120, $out += $escape("大人"), $line = 120, $out += $escape(Checking.childCount), 
                $line = 120, $out += $escape("小孩"), $out += "</td> <td>", $line = 121, $out += $escape(Checking.price), 
                $out += "</td> <td>", $line = 122, $out += $escape(Checking.memberCount), $out += "</td> <td>", 
                $line = 123, $out += $escape(Checking.reduceMoney), $out += "</td> <td>", $line = 124, 
                $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookPay">', 
                $line = 125, $out += $escape("社付："), $line = 125, $out += $escape(Checking.agencyPayedMoney), 
                $line = 125, $out += $escape(";导付："), $line = 125, $out += $escape(Checking.guidePayedMoney), 
                $out += "</a></td> <td>", $line = 126, null != Checking.billImage && "" != Checking.billImage ? ($out += '<a href="#" class="T-action T-viewInsuanceImg" url="', 
                $line = 126, $out += $escape(Checking.billImage), $out += '"><span>查看</span></a>', 
                $line = 126) : ($out += '<span style="color:#bbb">查看</span>', $line = 126), $out += "</td> <td> ", 
                $line = 128, $out += $escape(Checking.settlementMoney), $out += " </td> <td> ", 
                $line = 131, $out += $escape(Checking.unPayedMoney), $out += ' </td> <td> <input type="text" name="payMoney" value="', 
                $line = 134, $out += $escape(Checking.payMoney), $out += '" data-le="', $line = 134, 
                $out += $escape(Checking.unPayedMoney), $out += '" ', $line = 134, !showBtnFlag && Checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 134), $out += '> </td> <td> <input type="text" value="', $line = 137, $out += $escape(Checking.payRemark), 
                $out += '" name="payRemark" ', $line = 137, !showBtnFlag && Checking.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 137), $out += "> </td> <td>", $line = 139, $out += $escape(Checking.checkTime), 
                $out += "</td> <td>", $line = 140, $out += $escape(Checking.checkUser), $out += "</td> <td> ", 
                $line = 142, 1 == Checking.isConfirmAccount ? ($out += "已对账", $line = 142) : 0 == Checking.isConfirmAccount && ($out += "未对账", 
                $line = 142), $out += ' <label class="padding-right20">|</label> <a class="T-action T-viewhandle">查看</a> </td> </tr> ', 
                $line = 147;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 153, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-savePayment"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-AccountsPayment globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-horizontal row form-group T-search-area">\r\n                <label class="pull-left text-right ">项目名称:</label>\r\n                <div class="col-sm-1">\r\n                    <label class="T-name">{{searchParam.name}}</label>\r\n                     <input type="hidden" name="itemName" value="{{searchParam.name}}">\r\n                </div>\r\n                <label class="pull-left text-right">账期:</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-startTime" name="joinTime" value="{{searchParam.startAccountTime}}" type="text">\r\n                    </div>\r\n                </div>\r\n                <label class="pull-left text-right ">至</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker  T-endTime" name="joinTime" value="{{searchParam.endAccountTime}}" type="text">\r\n                        </div>\r\n                </div>\r\n                <label class="pull-left text-right">团信息:</label>\r\n                <div class="col-sm-1">\r\n                    <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off">\r\n                    <input type="hidden" name="creatorId" value="">\r\n                </div>\r\n                <div class="col-sm-1">\r\n                    <button class=" btn-sm T-paymentSearch search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count">\r\n                <label class=" control-label pull-left">账面应付合计：{{statistics.sumNeedPayMoney}}</label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：{{statistics.sumPayedMoney}}</label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：{{statistics.sumSettlementMoney}}</label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：{{statistics.sumUnPayedMoney}}</label>\r\n                 <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney ">{{statistics.confirmedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额：</label>\r\n                <label class="control-label">\r\n                    <input name="sumPayMoney" type="text" class="T-btn-autofill" {{if type}}disabled {{/if}} {{if showBtnFlag == true}}readonly="true"{{/if}}/></label>\r\n                </label>\r\n            </div>\r\n                \r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-clear-auto "><i class="ace-icon fa fa-check-circle"></i>自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" class="datepicker" style="width:100px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-otherInfo" name="sumPayRemark" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">团队人数</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr data-id="{{Checking.id}}" data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-checkRemark="{{Checking.checkRemark}}" data-entity-settlementMoney="{{Checking.settlementMoney}}">\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td>{{Checking.adultCount}}{{"大人"}}{{Checking.childCount}}{{"小孩"}}</td>\r\n                <td>{{Checking.price}}</td>\r\n                <td>{{Checking.memberCount}}</td>\r\n                <td>{{Checking.reduceMoney}}</td>\r\n                <td>{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookPay">{{"社付："}}{{Checking.agencyPayedMoney}}{{";导付："}}{{Checking.guidePayedMoney}}</a></td>\r\n                <td>{{if Checking.billImage != null && Checking.billImage !=""}}<a href="#" class="T-action T-viewInsuanceImg" url="{{Checking.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>\r\n                    {{Checking.settlementMoney}} \r\n                </td>\r\n                <td>\r\n                    {{Checking.unPayedMoney}}\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="payMoney" value="{{Checking.payMoney}}" data-le="{{Checking.unPayedMoney}}" {{if !showBtnFlag && Checking.unPayedMoney <= 0}} disabled {{/if}}>\r\n                </td>\r\n                <td>\r\n                    <input type="text" value="{{Checking.payRemark}}" name="payRemark" {{if !showBtnFlag && Checking.unPayedMoney <= 0}} disabled {{/if}}>\r\n                </td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    {{if Checking.isConfirmAccount == 1}}已对账{{else if Checking.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <label class="padding-right20">|</label>\r\n                    <a class="T-action T-viewhandle">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-savePayment">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});