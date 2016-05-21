/*TMODJS:{"debug":true,"version":394,"md5":"1907ec1d822a0c09c0dceec33bd25876"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, sumPayMoney = $data.sumPayMoney, type = $data.type, $string = $utils.$string, sumPayType = $data.sumPayType, bankNumber = $data.bankNumber, bankId = $data.bankId, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.listIndex, $data.temp, $data.index, $data.of, $data.$index, $data.message), fromPartnerAgencyId = $data.fromPartnerAgencyId, $out = "";
            return $out += '<div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label">客户：</label> <input type="text" class="control-label T-partnerAgencyName" value="', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-time T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-time T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="', 
            $line = 15, $out += $escape(searchParam.orderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">组团单号：</label> <input type="text" class="form-control T-search-number" placeholder="组团单号" value="', 
            $line = 19, $out += $escape(searchParam.otaOrderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">行程：</label> <input type="text" class="form-control T-search-line" data-id="" value="', 
            $line = 23, $out += $escape(searchParam.lineProductName), $out += '" placeholder="请输入行程"> </div> <div class="form-group mar-r-10"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" data-id="', 
            $line = 27, $out += $escape(searchParam.creatorId), $out += '" value="', $line = 27, 
            $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">客户联系人：</label> <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="', 
            $line = 31, $out += $escape(searchParam.fromPartnerAgencyContactId), $out += '" value="', 
            $line = 31, $out += $escape(searchParam.contactRealname), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">游客：</label> <input type="text" class="form-control T-search-contactInfo" placeholder="联系人或联系电话" value="', 
            $line = 35, $out += $escape(searchParam.contactInfo), $out += '" name="contactInfo"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 39, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 41, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 45) : ($out += " 未对账 ", $line = 47) : ($out += " 全部 ", $line = 43), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <label>对账时间：</label> <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="', 
            $line = 59, $out += $escape(searchParam.startCheck), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-checkTime T-checkEndTime" value="', 
            $line = 61, $out += $escape(searchParam.endCheck), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <input name="accountStatus" value="', 
            $line = 69, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline"> <div class="form-group mar-r-20"> <label class="control-label">人数合计：</label> <label class="control-label F-float F-count T-sumCount"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money T-sumContractMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp;&nbsp; <label class="control-label"> (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp; 导收：<span class="F-float F-money T-guideIncome"></span>) </label> </div> <div class="form-group mar-r-20"> <label class="control-label">返款金额合计：</label> <label class="control-label F-float F-money T-sumBackMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumSettlementMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money T-sumUnReceivedMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">未收金额合计(已对账)：</label> <label class="control-label T-unpayMoney F-float F-money"></label> </div> </div> <div class="form-inline globalAdd"> <div class="form-group mar-r-10"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money" value="', 
            $line = 109, $out += $escape(sumPayMoney), $out += '" ', $line = 109, type && ($out += "disabled ", 
            $line = 109), $out += "> </label> </div> ", $line = 113, type || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 117), $out += ' <div class="form-group mar-r-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 122, $out += $string($helpers.getPayTypeOptions(searchParam.sumPayType, searchParam.isBalance)), 
            $out += ' </select> </div> <div class="form-group mar-r-10 hidden"> <label class="control-label">预收账款余额：</label> <label class="control-label T-balance">', 
            $line = 128, $out += $escape(searchParam.balance), $out += '</label> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" ', 
            $line = 134, 0 == sumPayType && ($out += 'value="', $line = 134, $out += $escape(bankNumber), 
            $out += '"', $line = 134), $out += ' style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 135, 0 == sumPayType && ($out += 'value="', $line = 135, $out += $escape(bankId), 
            $out += '"', $line = 135), $out += '> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" ', 
            $line = 141, 0 != sumPayType && ($out += 'value="', $line = 141, $out += $escape(bankNumber), 
            $out += '"', $line = 141), $out += ' style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 142, 0 != sumPayType && ($out += 'value="', $line = 142, $out += $escape(bankId), 
            $out += '"', $line = 142), $out += '> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>组团单号</th> <th>行程</th> <th>出游日期（账期）</th> <th>客户联系人</th> <th>游客联系人</th> <th>人数</th> <th>录入人</th> <th>录入时间</th> <th>合同金额</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>本次收款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 100px;">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 193, null != customerAccountList ? ($out += " ", $line = 194, $each(customerAccountList, function(rs, listIndex) {
                $out += ' <tr data-gid="', $line = 195, $out += $escape(rs.touristGroupId), $out += '" data-id="', 
                $line = 195, $out += $escape(rs.id), $out += '"> <td>', $line = 196, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 196) : ($out += ' <a class="cursor T-action T-open-tourist" title="查看小组信息">', 
                $line = 197, $out += $escape(rs.orderNumber), $out += "</a> ", $line = 198), $out += "</td> <td>", 
                $line = 199, null == rs.otaOrderNumber || "" == rs.otaOrderNumber ? ($out += "-", 
                $line = 199) : ($line = 199, $out += $escape(rs.otaOrderNumber), $line = 199), $out += "</td> <td>", 
                $line = 200, $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 201, 
                $out += $escape(rs.startTime), $out += "</td> <td>", $line = 202, rs.partnerAgencyContact && ($line = 202, 
                $out += $escape(rs.partnerAgencyContact.contactRealname), $line = 202), $out += "</td> <td>", 
                $line = 203, $out += $escape(rs.contactName), $out += "-", $line = 203, $out += $escape(rs.mobileNumber), 
                $out += '</td> <td style="white-space: nowrap;"> <a class="cursor T-action T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 206, $out += $escape(rs.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 207, $out += $escape(rs.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 210, $out += $escape(rs.rowLen), $out += '">', $line = 210, $out += $escape(rs.creatorName), 
                $out += '</td> <td rowspan="', $line = 211, $out += $escape(rs.rowLen), $out += '">', 
                $line = 211, $out += $escape($helpers.dateTimeFormat(rs.createTime)), $out += '</td> <td rowspan="', 
                $line = 212, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 212, $out += $escape(rs.contractMoney), $out += "</span></td> <td>", $line = 213, 
                rs.detailList.otherFee.length > 0 ? ($out += '  <a class="T-viewFeeDetails" data-index="', 
                $line = 215, $out += $escape(listIndex), $out += '"> ', $line = 216, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 217, 0 == index && ($out += " ", $line = 218, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 219, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 220, $out += $escape(of.touristGroupId), $out += '">', $line = 220, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 221, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 222, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 223;
                    }), $out += " ", $line = 224), $out += " ", $line = 225;
                }), $out += " </a> ", $line = 227) : ($out += "- ", $line = 228), $out += ' </td> <td rowspan="', 
                $line = 230, $out += $escape(rs.rowLen), $out += '" class="align-left"> <a class="T-action T-receive"> <span class="in-block">社收<span class="F-float F-money">', 
                $line = 232, $out += $escape(rs.travleReciveMoney), $out += '</span></span> <span class="in-block">导游现收<span class="F-float F-money">', 
                $line = 233, $out += $escape(rs.guideReciveMoney), $out += '</span></span> </a> </td> <td><span class="F-float F-money">', 
                $line = 236, $out += $escape(rs.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 237, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 238, $out += $escape(rs.unReceivedMoney), $out += '</span></td> <td> <input type="text" name="payMoney" class="col-sm-12 T-reciveMoney money F-float F-money" value="', 
                $line = 240, $out += $escape(rs.payMoney), $out += '"> </td> <td> <textarea class="col-sm-12 T-remark hct-textarea" name="payRemark">', 
                $line = 243, $out += $escape(rs.payRemark), $out += "</textarea> </td> <td>", $line = 245, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 246, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> ', $line = 249, rs.isConfirmAccount ? ($out += "已对账", 
                $line = 249) : ($out += "未对账", $line = 249), $out += ' </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view">查看</a> </td> </tr> ', 
                $line = 255;
            }), $out += " ", $line = 256) : ($out += ' <tr><td colspan="20">', $line = 257, 
            $out += $escape(message), $out += "</td></tr> ", $line = 258), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 264, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="', 
            $line = 277, $out += $escape(type), $out += '" data-id="', $line = 277, $out += $escape(fromPartnerAgencyId), 
            $out += '" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户：</label>\r\n            <input type="text" class="control-label T-partnerAgencyName" value="{{partnerAgencyName}}" />\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-time  T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-time T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收客单号：</label>\r\n            <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="{{searchParam.orderNumber}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">组团单号：</label>\r\n            <input type="text" class="form-control T-search-number" placeholder="组团单号" value="{{searchParam.otaOrderNumber}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">行程：</label>\r\n            <input type="text" class="form-control T-search-line" data-id="" value="{{searchParam.lineProductName}}" placeholder="请输入行程">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" data-id="{{searchParam.creatorId}}" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户联系人：</label>\r\n            <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="{{searchParam.fromPartnerAgencyContactId}}" value="{{searchParam.contactRealname}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">游客：</label>\r\n            <input type="text" class="form-control T-search-contactInfo" placeholder="联系人或联系电话" value="{{searchParam.contactInfo}}" name="contactInfo"> \r\n        </div>\r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>对账时间：</label>\r\n            <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="{{searchParam.startCheck}}" style="width:100px;" />\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input class="date-picker T-checkTime T-checkEndTime" value="{{searchParam.endCheck}}" placeholder="结束日期" type="text" style="width:100px;" />\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    <div class="form-inline">\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label F-float F-count T-sumCount"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumContractMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp;&nbsp;\r\n            <label class="control-label">\r\n            (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp;\r\n            导收：<span class="F-float F-money T-guideIncome"></span>)\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumBackMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumSettlementMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnReceivedMoney"></label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">未收金额合计(已对账)：</label>\r\n            <label class="control-label T-unpayMoney F-float F-money"></label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-inline globalAdd">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">本次收款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money" value="{{sumPayMoney}}" {{if type}}disabled {{/if}}>\r\n            </label>\r\n        </div>\r\n\r\n        {{if !type}} \r\n        <div class="form-group mar-r-10">\r\n            <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="sumPayType">\r\n                {{#searchParam.sumPayType | getPayTypeOptions: searchParam.isBalance}}\r\n            </select>\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10 hidden">\r\n            <label class="control-label">预收账款余额：</label>\r\n            <label class="control-label T-balance">{{searchParam.balance}}</label>\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">现金账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" class="money" {{if sumPayType == 0}}value="{{bankNumber}}"{{/if}} style="width:300px;">\r\n                <input type="hidden" name="cash-id" {{if sumPayType == 0}}value="{{bankId}}"{{/if}}>\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" class="money" {{if sumPayType != 0}}value="{{bankNumber}}"{{/if}} style="width:300px;">\r\n                <input type="hidden" name="card-id" {{if sumPayType != 0}}value="{{bankId}}"{{/if}}>\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date"  style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" class="T-sumRemark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed  bg-blur">\r\n                <th>收客单号</th>\r\n                <th>组团单号</th>\r\n                <th>行程</th>\r\n                <th>出游日期（账期）</th>\r\n                <th>客户联系人</th>\r\n                <th>游客联系人</th>\r\n                <th>人数</th>\r\n                <th>录入人</th>\r\n                <th>录入时间</th>\r\n                <th>合同金额</th>\r\n                <th>明细</th>\r\n                <th>已收金额</th>\r\n                <th>返款金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>本次收款金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{if customerAccountList != null}} \r\n            {{each customerAccountList as rs listIndex}}\r\n            <tr data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}">\r\n                <td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}\r\n                <a class="cursor T-action T-open-tourist" title="查看小组信息">{{rs.orderNumber}}</a>\r\n                {{/if}}</td>\r\n                <td>{{if rs.otaOrderNumber == null || rs.otaOrderNumber == ""}}-{{else}}{{rs.otaOrderNumber}}{{/if}}</td>\r\n                <td>{{rs.lineProductName}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{if !!rs.partnerAgencyContact}}{{rs.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n                <td>{{rs.contactName}}-{{rs.mobileNumber}}</td>\r\n                <td style="white-space: nowrap;">\r\n                    <a class="cursor T-action T-viewGroup" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.creatorName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.createTime | dateTimeFormat}}</td>\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.contractMoney}}</span></td>\r\n                <td>{{if rs.detailList.otherFee.length > 0}}\r\n                    <!-- 中转，otherFee中多条数据 -->\r\n                        <a class="T-viewFeeDetails" data-index="{{listIndex}}">\r\n                        {{each rs.detailList.otherFee as temp index}}\r\n                            {{if index == 0}}\r\n                                {{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                    <span class="F-float F-count">{{of.count}}</span>=\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            {{/if}}\r\n                        {{/each}}\r\n                        </a>\r\n                    {{else}}<!-- 若无费用明细 -->-\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}" class="align-left">\r\n                    <a class="T-action T-receive">\r\n                        <span class="in-block">社收<span class="F-float F-money">{{rs.travleReciveMoney}}</span></span>\r\n                        <span class="in-block">导游现收<span class="F-float F-money">{{rs.guideReciveMoney}}</span></span>\r\n                    </a>\r\n                </td>\r\n                <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.unReceivedMoney}}</span></td>\r\n                <td>\r\n                    <input type="text" name="payMoney" class="col-sm-12 T-reciveMoney money F-float F-money" value="{{rs.payMoney}}">\r\n                </td>\r\n                <td>\r\n                    <textarea class="col-sm-12 T-remark hct-textarea" name="payRemark">{{rs.payRemark}}</textarea>\r\n                </td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        {{if rs.isConfirmAccount}}已对账{{else}}未对账{{/if}}\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}} \r\n            {{else}}\r\n                <tr><td colspan="20">{{message}}</td></tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-btn-close">\r\n            <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n        </button>\r\n        <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="{{type}}" data-id="{{fromPartnerAgencyId}}" style="margin-left: 20px">\r\n            <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n        </button>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});