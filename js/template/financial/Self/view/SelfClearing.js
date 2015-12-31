/*TMODJS:{"debug":true,"version":170,"md5":"3074136391cb7687b72539087df84c16"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, sumPayMoney = $data.sumPayMoney, showBtnFlag = $data.showBtnFlag, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, isAutoPay = $data.isAutoPay, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>自费商家：', 
            $line = 6, $out += $escape(selfPayName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="tripInfo" placeholder="团信息" type="text" value="', 
            $line = 12, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <button class="btn-height btn-sm search-btn T-search marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd T-count"> <label>账面应付合计：', 
            $line = 21, $out += $escape(sumData.needPayMoney), $out += '元 </label> <label class="marginLeft-30">已付金额合计：', 
            $line = 22, $out += $escape(sumData.payedMoney), $out += ' </label> <label class="marginLeft-30">结算金额合计：', 
            $line = 23, $out += $escape(sumData.settlementMoney), $out += '</label> <label class="marginLeft-30">未付金额合计：', 
            $line = 24, $out += $escape(sumData.unPayedMoney), $out += '</label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 25, $out += $escape(sumData.unPayedMoneyConfirmed), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money" value="', 
            $line = 33, $out += $escape(sumPayMoney), $out += '" ', $line = 33, 1 == showBtnFlag && ($out += 'readonly="true"', 
            $line = 33), $out += " > </label> </div> ", $line = 37, showBtnFlag || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> ', 
            $line = 46), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 51, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-l-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 58, $out += $escape(bankNo), $out += '" class="money" style="width:230px;"> <input type="hidden" name="card-id" value="', 
            $line = 59, $out += $escape(bankId), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 65, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 71, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input name="sumPayRemark" type="text" value="', 
            $line = 79, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <input type="hidden" name="isAutoPay" value="', 
            $line = 83, $out += $escape(isAutoPay), $out += '" /> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">底价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"> <span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 105, $each(list, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 106, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 106, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 107, $out += $escape(rs.tripNumber), $line = 107, $out += $escape("，"), 
                $line = 107, $out += $escape(rs.lineProductName), $line = 107, $out += $escape("，"), 
                $line = 107, $out += $escape(rs.guideName), $out += "</td> <td>", $line = 108, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 108) : ($line = 108, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 108), $out += "</td> <td>", $line = 109, $out += $escape(rs.lowestPrice), 
                $out += "</td> <td>", $line = 110, $out += $escape(rs.realCount), $out += "</td> <td>", 
                $line = 111, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 112, 
                $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 113, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '">', $line = 113, 
                $out += $escape("社付："), $line = 113, $out += $escape(rs.payedMoney), $line = 113, 
                $out += $escape("，"), $line = 113, $out += $escape("导付："), $line = 113, $out += $escape(rs.guidePayMoney), 
                $out += "</a></td> <td>", $line = 114, null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 114, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 114) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 114), $out += "</td> <td>", $line = 115, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 116, $out += $escape(rs.unPayedMoney), $out += '</td> <td> <input name="payMoney" class="money" type="text" value="', 
                $line = 118, $out += $escape(rs.payMoney), $out += '" data-le="', $line = 118, $out += $escape(rs.unPayedMoney), 
                $out += '" maxlength="9" ', $line = 118, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 118), $out += '> </td> <td> <input type="text" maxlength="1000" name="payRemark" value="', 
                $line = 121, $out += $escape(rs.payRemark), $out += '" style="text-align:center" ', 
                $line = 121, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 121), 
                $out += "/> </td> <td>", $line = 123, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 123) : ($line = 123, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 123), $out += "</td> <td>", $line = 124, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 124) : ($line = 124, $out += $escape(rs.checkUser), $line = 124), $out += "</td> <td>", 
                $line = 125, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 125) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 125), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 130;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 135, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group">\r\n                    <label>自费商家：{{selfPayName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="tripInfo" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n                    <button class="btn-height btn-sm search-btn T-search marginLeft-30">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd T-count">\r\n                <label>账面应付合计：{{sumData.needPayMoney}}元 </label>\r\n                <label class="marginLeft-30">已付金额合计：{{sumData.payedMoney}} </label>\r\n                <label class="marginLeft-30">结算金额合计：{{sumData.settlementMoney}}</label>\r\n                <label class="marginLeft-30">未付金额合计：{{sumData.unPayedMoney}}</label>\r\n                <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">{{sumData.unPayedMoneyConfirmed}}</span></label>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money"  value="{{sumPayMoney}}"  {{if showBtnFlag == true}}readonly="true"{{/if}} >\r\n                </label>\r\n            </div>\r\n                \r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-primary T-clear-auto">\r\n                        <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                    </button>\r\n                    <button class="btn btn-warning T-cancel-auto">\r\n                        <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                    </button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <input type="hidden" name="isAutoPay" value="{{isAutoPay}}" />\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">底价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"> <span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each list as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{rs.lowestPrice}}</td>\r\n                <td>{{rs.realCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.guidePayMoney}}</a></td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td>\r\n                    <input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" data-le="{{rs.unPayedMoney}}" maxlength="9" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}>\r\n                </td>\r\n                <td>\r\n                    <input type="text" maxlength="1000" name="payRemark" value="{{rs.payRemark}}" style="text-align:center"  {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}/>\r\n                </td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n                <td>{{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});