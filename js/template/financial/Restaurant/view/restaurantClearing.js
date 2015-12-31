/*TMODJS:{"debug":true,"version":450,"md5":"653e49b8dfeaedf4fe7b89900c523d7e"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, restaurantName = $data.restaurantName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, isAutoPay = ($data.rs, 
            $data.index, $data.isAutoPay), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.restaurantId), 
            $out += '" data-name="', $line = 1, $out += $escape(restaurantName), $out += '"> <div class="col-sm-12 T-search-area"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label> 餐厅：', 
            $line = 5, $out += $escape(restaurantName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 7, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 12, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd"> <div class="pull-left" style="margin:3px 30px 0px 0px;"> <label>账面应付合计：', 
            $line = 23, $out += $escape(sumNeedPayMoney), $out += '元 </label> <label class="marginLeft-30">已付金额合计：', 
            $line = 24, $out += $escape(sumPayedMoney), $out += ' </label> <label class="marginLeft-30">结算金额合计：', 
            $line = 25, $out += $escape(sumSettlementMoney), $out += '</label> <label class="marginLeft-30">未付金额合计：', 
            $line = 26, $out += $escape(sumUnPayedMoney), $out += '</label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 27, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money" value="', 
            $line = 36, $out += $escape(sumPayMoney), $out += '"> </label> </div> <div class="form-group mar-l-10"> <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 52, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-l-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 59, $out += $escape(bankNo), $out += '" class="money" style="width:230px;"> <input type="hidden" name="card-id" value="', 
            $line = 60, $out += $escape(bankId), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 66, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 72, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" value="', 
            $line = 80, $out += $escape(sumPayRemark), $out += '" class="T-remark" style="width:900px;"> </label> </div> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr><th class="th-border">账务类别</th> <th class="th-border">用餐日期<br />(账期)</th> <th class="th-border">用餐类型</th> <th class="th-border">餐标<br /><span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border" width="45">单据</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 106, $each(financialRestaurantList, function(rs) {
                $out += ' <tr class="T-clearTr', $line = 107, $out += $escape(rs.id), $out += '" data-id="', 
                $line = 107, $out += $escape(rs.id), $out += '" style="border:none"> <td>', $line = 108, 
                $out += $escape(rs.tripNumber), $line = 108, $out += $escape("，"), $line = 108, 
                $out += $escape(rs.lineProductName), $line = 108, $out += $escape("，"), $line = 108, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 109, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 109) : ($line = 109, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 109), $out += "</td> <td>", $line = 110, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 110) : ($line = 110, $out += $escape(rs.type), $line = 110), $out += "</td> <td>", 
                $line = 111, $out += $escape(rs.price), $out += "</td> <td>", $line = 112, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 113, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 114, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 115, $out += $escape("社付："), $line = 115, $out += $escape(rs.payedMoney), 
                $line = 115, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 115, $out += $escape("，"), 
                $line = 115, $out += $escape("导付："), $line = 115, $out += $escape(rs.realGuidePayMoney), 
                $line = 115), $out += "</a></td> <td>", $line = 116, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 117, $out += $escape(rs.unPayedMoney), $out += "</td> <td>", 
                $line = 118, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-restaurantImg" url="', 
                $line = 118, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 118) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 118), $out += '</td> <td><input name="payMoney" class="money" type="text" value="', 
                $line = 119, $out += $escape(rs.payMoney), $out += '" maxlength="9" data-le="', 
                $line = 119, $out += $escape(rs.unPayedMoney), $out += '" ', $line = 119, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 119), $out += '></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 120, $out += $escape(rs.payRemark), $out += '" maxlength="1000" ', $line = 120, 
                2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 120), $out += "></td> <td>", 
                $line = 121, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 121) : ($line = 121, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 121), 
                $out += "</td> <td>", $line = 122, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 122) : ($line = 122, $out += $escape(rs.checkUserName), $line = 122), $out += "</td> <td> ", 
                $line = 124, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 124) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 124), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 129;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 135, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.restaurantId}}" data-name="{{restaurantName}}">\r\n    <div class="col-sm-12 T-search-area">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group"> \r\n                <label> 餐厅：{{restaurantName}}</label>\r\n                <label class="marginLeft-30">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                <label class="marginLeft-30">账务类别：</label>\r\n                <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                \r\n                <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd">\r\n                <div class="pull-left" style="margin:3px 30px 0px 0px;">\r\n                    <label>账面应付合计：{{sumNeedPayMoney}}元 </label>\r\n                    <label class="marginLeft-30">已付金额合计：{{sumPayedMoney}} </label>\r\n                    <label class="marginLeft-30">结算金额合计：{{sumSettlementMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计：{{sumUnPayedMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">{{checkedUnPayedMoney}}</span></label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money"  value="{{sumPayMoney}}">\r\n                </label>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-primary T-clear-auto">\r\n                        <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                    </button>\r\n                    <button class="btn btn-warning T-cancel-auto">\r\n                        <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                    </button>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="payType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}"  style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="remark" value="{{sumPayRemark}}" class="T-remark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr><th class="th-border">账务类别</th>\r\n                <th class="th-border">用餐日期<br />(账期)</th>\r\n                <th class="th-border">用餐类型</th>\r\n                <th class="th-border">餐标<br /><span style="font-size:12px;">(元/人)</span></th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border" width="45">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialRestaurantList as rs index}}\r\n            <tr class="T-clearTr{{rs.id}}" data-id="{{rs.id}}" style="border:none">\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}{{/if}}</a></td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-restaurantImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" maxlength="9" data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000"  {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear marginLeft-30">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});