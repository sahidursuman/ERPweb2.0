/*TMODJS:{"debug":true,"version":404,"md5":"88557616d22abf72a2e5273f064403ae"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/Clearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, busCompanyName = $data.busCompanyName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialBusCompanyListData = $data.financialBusCompanyListData, isAutoPay = ($data.rs, 
            $data.index, $data.isAutoPay), $out = "";
            return $out += '<div class="col-sm-12 T-newData" data-id="', $line = 1, $out += $escape(searchParam.busCompanyId), 
            $out += '" data-name="', $line = 1, $out += $escape(busCompanyName), $out += '"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label class="mar-r-20 ">车队：', 
            $line = 5, $out += $escape(busCompanyName), $out += '</label> <label class="mar-r-20 ">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 7, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label class="mar-r-20 ">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 11, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label class="mar-r-20 ">车牌号：</label> <input name="licenseNumber" placeholder="车牌号" type="text" value="', 
            $line = 13, $out += $escape(searchParam.licenseNumber), $out += '" style="width:200px;" /> <button class="btn-sm T-search search-btn btn-height mar-r-20 "> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> <input name="accountStatus" value="', 
            $line = 18, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="pull-left"> <label class="mar-r-20">账面应付合计：<span class="F-float F-money">', 
            $line = 24, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="mar-r-20">已付金额合计：<span class="F-float F-money">', 
            $line = 25, $out += $escape(sumPayedMoney), $out += '</span> </label> <label class="mar-r-20">结算金额合计：<span class="F-float F-money">', 
            $line = 26, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="mar-r-20">未付金额合计：<span class="F-float F-money">', 
            $line = 27, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label>未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 28, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </div> </form> <div class="form-inline row globalAdd T-summary"> <div class="form-group mar-r-10 "> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 36, $out += $escape(sumPayMoney), $out += '"> </label> </div> <div class="form-group mar-r-10"> <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 50, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" ', 
            $line = 56, 0 == sumPayType && ($out += 'value="', $line = 56, $out += $escape(bankNo), 
            $out += '" ', $line = 56), $out += ' class="money" style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 57, 0 == sumPayType && ($out += 'value="', $line = 57, $out += $escape(bankId), 
            $out += '" ', $line = 57), $out += ' /> </label> </div> <div class="form-group mar-r-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" ', 
            $line = 63, 0 != sumPayType && ($out += 'value="', $line = 63, $out += $escape(bankNo), 
            $out += '" ', $line = 63), $out += ' class="money" style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 64, 0 != sumPayType && ($out += 'value="', $line = 64, $out += $escape(bankId), 
            $out += '" ', $line = 64), $out += ' /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 70, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 76, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" value="', 
            $line = 83, $out += $escape(sumPayRemark), $out += '" class="T-remark" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th >账务类别</th> <th width="170">用车时间(账期)</th> <th>人数</th> <th>司机</th> <th>车型</th> <th>车牌号</th> <th>车费</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th width="45">单据</th> <th>结算金额</th> <th>未付金额</th> <th style="width: 80px"><span class="necessary">*</span>本次付款金额</th> <th style="width: 100px!important;">备注</th> <th>对账时间</th> <th>对账人</th> <th width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 113, $each(financialBusCompanyListData, function(rs) {
                $out += ' <tr data-id="', $line = 114, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 115, null != rs.tripNumber && "" != rs.tripNumber && ($line = 115, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 115, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 115), $out += " ", $line = 115), $out += " ", $line = 115, null != rs.lineProductName && "" != rs.lineProductName && ($line = 115, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 115, rs.guideName && ($out += "，", 
                $line = 115), $out += " ", $line = 115), $out += " ", $line = 115, null != rs.guideName && "" != rs.guideName && ($line = 115, 
                $out += $escape(rs.guideName), $line = 115), $out += " </td> <td>", $line = 117, 
                null == rs.startTime || "" == rs.startTime ? ($out += " - ", $line = 117) : ($out += " ", 
                $line = 117, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += " ~ ", 
                $line = 117, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += " ", 
                $line = 117), $out += " </td> <td>", $line = 119, 1 == rs.isMemberCount ? ($out += " - ", 
                $line = 119) : ($out += " ", $line = 119, null == rs.touristAdultCount || "" == rs.touristAdultCount ? ($out += "0", 
                $line = 119) : ($out += '<span class="F-float F-count">', $line = 119, $out += $escape(rs.touristAdultCount), 
                $out += "</span>", $line = 119), $out += " 大 ", $line = 119, null == rs.touristChildCount || "" == rs.touristChildCount ? ($out += "0", 
                $line = 119) : ($out += '<span class="F-float F-count">', $line = 119, $out += $escape(rs.touristChildCount), 
                $out += "</span>", $line = 119), $out += " 小 ", $line = 119), $out += " </td> <td>", 
                $line = 121, null == rs.driverName || "" == rs.driverName ? ($out += "-", $line = 121) : ($line = 121, 
                $out += $escape(rs.driverName), $line = 121), $out += "</td> <td>", $line = 122, 
                null != rs.brand && "" != rs.brand || null != rs.seatCount && "" != rs.seatCount && 0 != rs.seatCount ? ($out += " ", 
                $line = 122, $out += $escape(rs.brand), $out += " ", $line = 122, null != rs.seatCount && "" != rs.seatCount && rs.seatCount > 0 && ($line = 122, 
                $out += $escape(rs.seatCount), $out += "座", $line = 122), $out += " ", $line = 122) : ($out += " - ", 
                $line = 122), $out += " </td> <td>", $line = 124, null == rs.licenseNumber || "" == rs.licenseNumber ? ($out += "-", 
                $line = 124) : ($line = 124, $out += $escape(rs.licenseNumber), $line = 124), $out += '</td> <td><span class="F-float F-money">', 
                $line = 125, $out += $escape(rs.fee), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 126, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 127, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 128, $out += $escape(rs.prePayedMoney), $out += '</span></td> <td><a class="T-option T-payedDetail">', 
                $line = 129, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 129, 
                $out += $escape(rs.payedMoney), $out += "</span>", $line = 129, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 129, 
                $out += $escape("，"), $line = 129, $out += $escape("导付："), $out += '<span class="F-float F-money">', 
                $line = 129, $out += $escape(rs.realGuidePayMoney), $out += "</span>", $line = 129), 
                $out += "</a></td> <td>", $line = 130, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-busCompanyImg" url="', 
                $line = 130, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 130) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 130), $out += '</td> <td><span class="F-float F-money">', $line = 131, $out += $escape(rs.settlementMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 132, $out += $escape(rs.unPayedMoney), 
                $out += '</span></td> <td> <input name="payMoney" type="text" value="', $line = 134, 
                $out += $escape(rs.payMoney), $out += '" class="money F-float F-money" maxlength="9" data-le="', 
                $line = 134, $out += $escape(rs.unPayedMoney), $out += '" ', $line = 134, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 134), $out += ' /> </td> <td> <textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000" ', 
                $line = 137, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 137), 
                $out += ">", $line = 137, $out += $escape(rs.payRemark), $out += "</textarea> </td> <td>", 
                $line = 139, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 139) : ($line = 139, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 139), 
                $out += "</td> <td>", $line = 140, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 140) : ($line = 140, $out += $escape(rs.checkUserName), $line = 140), $out += "</td> <td> ", 
                $line = 142, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 142) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 142), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 147;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计 ', 
            $line = 153, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-newData" data-id="{{searchParam.busCompanyId}}" data-name="{{busCompanyName}}">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="T-search-area">\r\n            <div class="form-group">\r\n                <label class="mar-r-20 ">车队：{{busCompanyName}}</label>\r\n                <label class="mar-r-20 ">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />\r\n                <label class="mar-r-20 ">账务类别：</label>\r\n                <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                <label class="mar-r-20 ">车牌号：</label>\r\n                <input name="licenseNumber" placeholder="车牌号" type="text" value="{{searchParam.licenseNumber}}" style="width:200px;" />\r\n                <button class="btn-sm  T-search search-btn btn-height mar-r-20 ">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n            </div>\r\n            <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <div class="pull-left">\r\n                <label class="mar-r-20">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="mar-r-20">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span> </label>\r\n                <label class="mar-r-20">结算金额合计：<span class="F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="mar-r-20">未付金额合计：<span class="F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label>未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline row globalAdd T-summary">\r\n        <div class="form-group mar-r-10 ">\r\n            <label class="control-label">本次付款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumPayMoney" class="money F-float F-money" value="{{sumPayMoney}}">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn btn-primary T-clear-auto">\r\n                <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n            </button>\r\n            <button class="btn btn-warning T-cancel-auto">\r\n                <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n            </button>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">付款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                {{#sumPayType | getPayTypeOptions}}\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">现金账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" {{if sumPayType==0 }}value="{{bankNo}}" {{/if}} class="money" style="width:300px;">\r\n                <input type="hidden" name="cash-id" {{if sumPayType==0 }}value="{{bankId}}" {{/if}} />\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10 T-bankDiv">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" {{if sumPayType !=0 }}value="{{bankNo}}" {{/if}} class="money" style="width:300px;">\r\n                <input type="hidden" name="card-id" {{if sumPayType !=0 }}value="{{bankId}}" {{/if}} />\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number" value="{{voucher}}" />\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="form-group row">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" name="remark" value="{{sumPayRemark}}" class="T-remark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th >账务类别</th>\r\n                <th width="170">用车时间(账期)</th>\r\n                <th>人数</th>\r\n                <th>司机</th>\r\n                <th>车型</th>\r\n                <th>车牌号</th>\r\n                <th>车费</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th width="45">单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th style="width: 80px"><span class="necessary">*</span>本次付款金额</th>\r\n                <th style="width: 100px!important;">备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialBusCompanyListData as rs index}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}} {{if rs.lineProductName || rs.guideName}}，{{/if}} {{/if}} {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}} {{if rs.guideName}}，{{/if}} {{/if}} {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.startTime == null || rs.startTime == ""}} - {{else}} {{rs.startTime | dateFormat: \'yyyy-MM-dd\'}} ~ {{rs.endTime | dateFormat: \'yyyy-MM-dd\'}} {{/if}}\r\n                </td>\r\n                <td>{{if rs.isMemberCount == 1}} - {{else}} {{if rs.touristAdultCount == null || rs.touristAdultCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristAdultCount}}</span>{{/if}} 大 {{if rs.touristChildCount == null || rs.touristChildCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristChildCount}}</span>{{/if}} 小 {{/if}}\r\n                </td>\r\n                <td>{{if rs.driverName == null || rs.driverName == ""}}-{{else}}{{rs.driverName}}{{/if}}</td>\r\n                <td>{{if (rs.brand == null || rs.brand == "") && (rs.seatCount == null || rs.seatCount == "" || rs.seatCount == 0)}} - {{else}} {{rs.brand}} {{if rs.seatCount != null && rs.seatCount != "" && rs.seatCount > 0 }}{{rs.seatCount}}座{{/if}} {{/if}}\r\n                </td>\r\n                <td>{{if rs.licenseNumber == null || rs.licenseNumber == ""}}-{{else}}{{rs.licenseNumber}}{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.fee}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.prePayedMoney}}</span></td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span>{{/if}}</a></td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-busCompanyImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.unPayedMoney}}</span></td>\r\n                <td>\r\n                    <input name="payMoney" type="text" value="{{rs.payMoney}}" class="money F-float F-money" maxlength="9" data-le="{{rs.unPayedMoney}}" {{if isAutoPay !=2 && rs.unPayedMoney <=0 }} disabled {{/if}} />\r\n                </td>\r\n                <td>\r\n                    <textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000" {{if isAutoPay !=2 && rs.unPayedMoney <=0 }} disabled {{/if}}>{{rs.payRemark}}</textarea>\r\n                </td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode" style="padding-top: 15px;">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n            <i class="ace-icon fa fa-times-circle"></i>关闭\r\n        </button>\r\n        <button class="btn btn-xs btn-primary T-saveClear">\r\n            <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n        </button>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});