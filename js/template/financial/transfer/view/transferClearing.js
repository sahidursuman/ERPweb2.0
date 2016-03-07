/*TMODJS:{"debug":true,"version":275,"md5":"c41965e28530f57a399bb4024b7ccd6a"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/transferClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, partnerAgencyName = $data.partnerAgencyName, sumPerson = $data.sumPerson, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumPunishMoney = $data.sumPunishMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, type = $data.type, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, isAutoPay = $data.isAutoPay, $each = $utils.$each, financialTransferList = $data.financialTransferList, $out = ($data.rs, 
            $data.$index, $data.tf, $data.of, $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.partnerAgencyId), 
            $out += '" data-name="', $line = 1, $out += $escape(partnerAgencyName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area"> <div class="form-group T-search-area"> <label> 同行地接：', 
            $line = 6, $out += $escape(partnerAgencyName), $out += '</label> <label>账期：</label> <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label>线路名称：</label> <input name="lineProductName" class="mar-r-10" placeholder="线路名称" type="text" value="', 
            $line = 13, "" == searchParam.lineProductName ? ($out += "全部", $line = 13) : ($line = 13, 
            $out += $escape(searchParam.lineProductName), $line = 13), $out += '" style="width:200px;" /> <label>操作人：</label> <input name="operateName" type="text" class="" value="', 
            $line = 16, "" == searchParam.operateName ? ($out += "全部", $line = 16) : ($line = 16, 
            $out += $escape(searchParam.operateName), $line = 16), $out += '" style="width:100px;" /> <input name="operateId" type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.operateId), $out += '" /> <label>收客单号：</label> <input name="orderNumber" type="text" class="mar-r-10" value="', 
            $line = 19, $out += $escape(searchParam.orderNumber), $out += '" style="width:100px;" /> <button class="btn-height btn-sm search-btn T-search" > <i class="ace-icon fa fa-search"></i>搜索 </button> <input name="accountStatus" value="', 
            $line = 24, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count" style="padding-bottom: 0"> <label>人数合计：<span class="F-float F-count">', 
            $line = 30, $out += $escape(sumPerson), $out += '</span></label> <label class="mar-r2-0">外转金额合计：<span class="F-float F-money">', 
            $line = 31, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="mar-r2-0">已付金额合计：<span class="F-float F-money">', 
            $line = 32, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="mar-r2-0">返款金额合计：<span class="F-float F-money">', 
            $line = 33, $out += $escape(sumPunishMoney), $out += '</span></label> <label class="mar-r2-0">结算金额合计：<span class="F-float F-money">', 
            $line = 34, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="mar-r2-0">未付金额合计：<span class="F-float F-money">', 
            $line = 35, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label >未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 36, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary"> <div class="form-group mar-r-10"> <label class="control-label">本次付款金额：</label> <label class="control-label"> <input name="sumPayMoney" type="text" value="', 
            $line = 43, $out += $escape(sumPayMoney), $out += '" class="T-sumReciveMoney money F-float F-money" ', 
            $line = 43, type && ($out += "disabled ", $line = 43), $out += "> </label> </div> ", 
            $line = 47, type || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-xs btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> ', 
            $line = 56), $out += ' <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control" name="sumPayType"> ', 
            $line = 61, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" value="', 
            $line = 75, $out += $escape(bankNo), $out += '" class="money" style="width:300px;"> <input type="hidden" name="card-id" value="', 
            $line = 76, $out += $escape(bankId), $out += '" /> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 82, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 88, $out += $escape(billTime), $out += '" class="datepicker" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" name="sumPayRemark" value="', 
            $line = 96, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <input type="hidden" name="isAutoPay" value="', 
            $line = 100, $out += $escape(isAutoPay), $out += '" /> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr><th class="th-border">收客单号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">客户</th> <th class="th-border">人数</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">外转金额</th> <th class="th-border">明细</th> <th class="th-border">已付金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 125, $each(financialTransferList, function(rs) {
                $out += ' <tr data-id="', $line = 126, $out += $escape(rs.id), $out += '"> <td rowspan="', 
                $line = 127, $out += $escape(rs.rowLen), $out += '"><a class="T-option T-orderNumber" data-id="', 
                $line = 127, $out += $escape(rs.arrangeId), $out += '">', $line = 127, $out += $escape(rs.orderNumber), 
                $out += '</a></td> <td rowspan="', $line = 128, $out += $escape(rs.rowLen), $out += '">', 
                $line = 128, $out += $escape(rs.lineProductName), $out += '</td> <td rowspan="', 
                $line = 129, $out += $escape(rs.rowLen), $out += '">', $line = 129, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 130, $out += $escape(rs.rowLen), $out += '">', 
                $line = 130, null == rs.partnerAgencyName || "" == rs.partnerAgencyName ? ($out += "-", 
                $line = 130) : ($line = 130, $out += $escape(rs.partnerAgencyName), $line = 130), 
                $out += '</td> <td rowspan="', $line = 131, $out += $escape(rs.rowLen), $out += '"><a href="#" class="T-option T-viewGroup" data-list="', 
                $line = 131, $out += $escape(rs.memberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 132, $out += $escape(rs.adultCount), $out += '</span> 大 <span class="F-float F-count">', 
                $line = 133, $out += $escape(rs.childCount), $out += '</span> 小 </a> </td> <td rowspan="', 
                $line = 136, $out += $escape(rs.rowLen), $out += '">', $line = 136, $out += $escape(rs.operateName), 
                $out += '</td> <td rowspan="', $line = 137, $out += $escape(rs.rowLen), $out += '">', 
                $line = 137, $out += $escape($helpers.dateFormat(rs.operateTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 138, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 138, $out += $escape(rs.needPayMoney), $out += "</span></td> <td>", $line = 139, 
                rs.outFeeList.length > 0 ? ($out += "  ", $line = 141, $each(rs.outFeeList, function(tf) {
                    $out += " ", $line = 142, $out += $escape(tf.describe), $out += '： <span class="F-float F-money">', 
                    $line = 143, $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', 
                    $line = 144, $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 145, $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 146;
                }), $out += " ", $line = 147) : rs.otherFeeList.length > 0 ? ($out += "  ", $line = 149, 
                $each(rs.otherFeeList, function(of) {
                    $out += " ", $line = 150, $out += $escape(of.describe), $out += '： <span class="F-float F-money">', 
                    $line = 151, $out += $escape(of.price), $out += '</span>x <span class="F-float F-count">', 
                    $line = 152, $out += $escape(of.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 153, $out += $escape(of.price * of.count), $out += "</span><br> ", $line = 154;
                }), $out += " ", $line = 155) : ($out += "- ", $line = 156), $out += ' </td> <td rowspan="', 
                $line = 158, $out += $escape(rs.rowLen), $out += '"><a class="T-option T-payedDetail" data-money="', 
                $line = 158, $out += $escape(rs.payedMoney), $out += '">', $line = 158, $out += $escape("社付："), 
                $out += '<span class="F-float F-money">', $line = 158, $out += $escape(rs.payedMoney), 
                $out += "</span></a></td> ", $line = 159, rs.outFeeList.length > 0 ? ($out += '  <td><span class="F-float F-money">', 
                $line = 161, $out += $escape(rs.outTransferBackMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 162, $out += $escape(rs.outTransferSettlementMoney), $out += "</span></td> ", 
                $line = 163) : ($out += '  <td><span class="F-float F-money">', $line = 165, $out += $escape(rs.punishMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 166, $out += $escape(rs.settlementMoney), 
                $out += "</span></td> ", $line = 167), $out += ' <td rowspan="', $line = 168, $out += $escape(rs.rowLen), 
                $out += '"><span class="F-float F-money">', $line = 168, $out += $escape(rs.unPayedMoney), 
                $out += '</span></td> <td rowspan="', $line = 169, $out += $escape(rs.rowLen), $out += '"><input name="payMoney" class="money F-float F-money" type="text" value="', 
                $line = 169, $out += $escape(rs.payMoney), $out += '" maxlength="9" data-le="', 
                $line = 170, $out += $escape(rs.unPayedMoney), $out += '" ', $line = 170, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 170), $out += '></td> <td rowspan="', $line = 171, $out += $escape(rs.rowLen), 
                $out += '"><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000" ', 
                $line = 171, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 171), 
                $out += ">", $line = 171, $out += $escape(rs.payRemark), $out += '</textarea></td> <td rowspan="', 
                $line = 172, $out += $escape(rs.rowLen), $out += '">', $line = 172, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 172) : ($line = 172, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 172), $out += '</td> <td rowspan="', $line = 173, $out += $escape(rs.rowLen), 
                $out += '">', $line = 173, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 173) : ($line = 173, $out += $escape(rs.checkUserName), $line = 173), $out += '</td> <td rowspan="', 
                $line = 174, $out += $escape(rs.rowLen), $out += '"> ', $line = 175, 1 == rs.isConfirmAccount ? ($out += "已对账", 
                $line = 175) : 0 == rs.isConfirmAccount && ($out += "未对账", $line = 175), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 180, rs.outFeeList.length > 0 && rs.otherFeeList.length > 0 && ($out += "  <tr><td>", 
                $line = 182, $each(rs.otherFeeList, function(of) {
                    $out += " ", $line = 183, $out += $escape(of.describe), $out += '： <span class="F-float F-money">', 
                    $line = 184, $out += $escape(of.price), $out += '</span> x <span class="F-float F-count">', 
                    $line = 185, $out += $escape(of.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 186, $out += $escape(of.price * of.count), $out += "</span><br> ", $line = 187;
                }), $out += ' </td> <td><span class="F-float F-money">', $line = 189, $out += $escape(rs.punishMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 190, $out += $escape(rs.settlementMoney), 
                $out += "</span></td> </tr> ", $line = 192), $out += " ", $line = 193;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计 ', 
            $line = 199, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.partnerAgencyId}}" data-name="{{partnerAgencyName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area">\r\n                <div class="form-group  T-search-area"> \r\n                    <label> 同行地接：{{partnerAgencyName}}</label>\r\n                    <label>账期：</label>\r\n                    <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />  \r\n\r\n                    <label>线路名称：</label>\r\n                    <input name="lineProductName" class="mar-r-10" placeholder="线路名称" type="text" value="{{if searchParam.lineProductName == ""}}全部{{else}}{{searchParam.lineProductName}}{{/if}}" style="width:200px;" />\r\n\r\n                    <label>操作人：</label>\r\n                    <input name="operateName" type="text" class="" value="{{if searchParam.operateName == ""}}全部{{else}}{{searchParam.operateName}}{{/if}}" style="width:100px;" />\r\n                    <input name="operateId" type="hidden" value="{{searchParam.operateId}}" />\r\n                    <label>收客单号：</label>\r\n                    <input name="orderNumber" type="text" class="mar-r-10" value="{{searchParam.orderNumber}}" style="width:100px;" />\r\n\r\n                    <button class="btn-height btn-sm search-btn T-search" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count" style="padding-bottom: 0">\r\n                <label>人数合计：<span class="F-float F-count">{{sumPerson}}</span></label>\r\n                <label class="mar-r2-0">外转金额合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="mar-r2-0">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="mar-r2-0">返款金额合计：<span class="F-float F-money">{{sumPunishMoney}}</span></label>\r\n                <label class="mar-r2-0">结算金额合计：<span class="F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="mar-r2-0">未付金额合计：<span class="F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label >未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline row globalAdd T-summary">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">本次付款金额：</label>\r\n                <label class="control-label">\r\n                    <input name="sumPayMoney" type="text" value="{{sumPayMoney}}" class="T-sumReciveMoney money F-float F-money"  {{if type}}disabled {{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !type}} \r\n            <div class="form-group mar-r-10">\r\n                <button class="btn btn-xs btn-primary T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                <button class="btn btn-xs btn-warning T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select  class="form-control" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" value="{{bankNo}}" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" class="datepicker" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-sumRemark" name="sumPayRemark" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <input type="hidden" name="isAutoPay" value="{{isAutoPay}}" />\r\n    <div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n        <thead>\r\n            <tr><th class="th-border">收客单号</th>\r\n                <th class="th-border">线路产品</th>\r\n                <th class="th-border">出游日期</th>\r\n                <th class="th-border">客户</th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n                <th class="th-border">外转金额</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">返款金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialTransferList as rs}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td rowspan="{{rs.rowLen}}"><a class="T-option T-orderNumber" data-id="{{rs.arrangeId}}">{{rs.orderNumber}}</a></td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.lineProductName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.partnerAgencyName == null || rs.partnerAgencyName == ""}}-{{else}}{{rs.partnerAgencyName}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}"><a href="#" class="T-option T-viewGroup" data-list="{{rs.memberList}}" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span> 大 \r\n                        <span class="F-float F-count">{{rs.childCount}}</span> 小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.operateName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.operateTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                <td>{{if rs.outFeeList.length > 0}}\r\n                    <!-- 若有中转结算价 -->\r\n                        {{each rs.outFeeList as tf}}\r\n                            {{tf.describe}}：\r\n                            <span class="F-float F-money">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else if rs.otherFeeList.length > 0}}\r\n                    <!-- 若无中转结算价 -->\r\n                        {{each rs.otherFeeList as of index}}\r\n                            {{of.describe}}：\r\n                            <span class="F-float F-money">{{of.price}}</span>x\r\n                            <span class="F-float F-count">{{of.count}}</span>=\r\n                            <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}<!-- 若无费用明细 -->-\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}"><a class="T-option T-payedDetail" data-money="{{rs.payedMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></a></td> \r\n                {{if rs.outFeeList.length > 0}}\r\n                <!-- 若有中转结算价 -->\r\n                    <td><span class="F-float F-money">{{rs.outTransferBackMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.outTransferSettlementMoney}}</span></td>\r\n                {{else}}\r\n                <!-- 若无费用明细 -->\r\n                    <td><span class="F-float F-money">{{rs.punishMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                {{/if}}\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.unPayedMoney}}</span></td>\r\n                <td rowspan="{{rs.rowLen}}"><input name="payMoney" class="money F-float F-money" type="text" value="{{rs.payMoney}}" maxlength="9"\r\n                 data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td rowspan="{{rs.rowLen}}"><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}>{{rs.payRemark}}</textarea></td>\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.outFeeList.length > 0 && rs.otherFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                <tr><td>{{each rs.otherFeeList as of}}\r\n                            {{of.describe}}：\r\n                            <span class="F-float F-money">{{of.price}}</span> x\r\n                            <span class="F-float F-count">{{of.count}}</span> =\r\n                            <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                        {{/each}}\r\n                    </td>\r\n                    <td><span class="F-float F-money">{{rs.punishMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                </tr>\r\n            {{/if}}\r\n            {{/each}} \r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});