/*TMODJS:{"debug":true,"version":325,"md5":"69d2a7dec6963a85ff9fc086e1056a36"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, totalList = $data.totalList, type = $data.type, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.index, $data.tf, $data.$index, $data.temp, $data.of, $data.message), fromPartnerAgencyId = $data.fromPartnerAgencyId, $out = "";
            return $out += '<div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label">客户：</label> <label class="control-label T-partnerAgencyName">', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '</label> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="', 
            $line = 15, $out += $escape(searchParam.orderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">组团单号：</label> <input type="text" class="form-control T-search-number" placeholder="组团单号" value="', 
            $line = 19, $out += $escape(searchParam.otaOrderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">线路名称：</label> <input type="text" class="form-control T-search-line" data-id="', 
            $line = 23, $out += $escape(searchParam.lineProductId), $out += '" value="', $line = 23, 
            $out += $escape(searchParam.lineProductName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" data-id="', 
            $line = 27, $out += $escape(searchParam.creatorId), $out += '" value="', $line = 27, 
            $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">客户联系人：</label> <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="', 
            $line = 31, $out += $escape(searchParam.fromPartnerAgencyContactId), $out += '" value="', 
            $line = 31, $out += $escape(searchParam.contactRealname), $out += '"> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <input name="accountStatus" value="', 
            $line = 39, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline"> <div class="form-group mar-r-20"> <label class="control-label">人数合计：</label> <label class="control-label F-float F-count">', 
            $line = 43, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 47, $out += $escape(totalList.sumContractMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 51, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">返款金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 55, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 59, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 63, $out += $escape(totalList.sumUnReceivedMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label class="control-label">未收金额合计(已对账)：</label> <label class="control-label T-unpayMoney F-float F-money">', 
            $line = 67, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd"> <div class="form-group mar-r-10"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money" ', 
            $line = 75, type && ($out += "disabled ", $line = 75), $out += "> </label> </div> ", 
            $line = 79, type || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 83), $out += ' <div class="form-group mar-r-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 88, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>组团单号</th> <th>线路产品</th> <th>出游日期（账期）</th> <th>客户联系人</th> <th>游客联系人</th> <th>人数</th> <th>录入人</th> <th>录入时间</th> <th>合同金额</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>本次收款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 100px;">对账</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 154, null != customerAccountList ? ($out += " ", $line = 155, $each(customerAccountList, function(rs) {
                $out += ' <tr data-gid="', $line = 156, $out += $escape(rs.touristGroupId), $out += '" data-id="', 
                $line = 156, $out += $escape(rs.id), $out += '"> <td rowspan="', $line = 157, $out += $escape(rs.rowLen), 
                $out += '">', $line = 157, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 157) : ($line = 157, $out += $escape(rs.orderNumber), $line = 157), $out += '</td> <td rowspan="', 
                $line = 158, $out += $escape(rs.rowLen), $out += '">', $line = 158, null == rs.otaOrderNumber || "" == rs.otaOrderNumber ? ($out += "-", 
                $line = 158) : ($line = 158, $out += $escape(rs.otaOrderNumber), $line = 158), $out += '</td> <td rowspan="', 
                $line = 159, $out += $escape(rs.rowLen), $out += '">', $line = 159, $out += $escape(rs.lineProductName), 
                $out += '</td> <td rowspan="', $line = 160, $out += $escape(rs.rowLen), $out += '">', 
                $line = 160, $out += $escape(rs.startTime), $out += '</td> <td rowspan="', $line = 161, 
                $out += $escape(rs.rowLen), $out += '">', $line = 161, rs.partnerAgencyContact && ($line = 161, 
                $out += $escape(rs.partnerAgencyContact.contactRealname), $line = 161), $out += '</td> <td rowspan="', 
                $line = 162, $out += $escape(rs.rowLen), $out += '">', $line = 162, $out += $escape(rs.contactName), 
                $out += '</td> <td rowspan="', $line = 163, $out += $escape(rs.rowLen), $out += '" style="white-space: nowrap;"> <a class="cursor T-action T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 165, $out += $escape(rs.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 166, $out += $escape(rs.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 169, $out += $escape(rs.rowLen), $out += '">', $line = 169, $out += $escape(rs.creatorName), 
                $out += '</td> <td rowspan="', $line = 170, $out += $escape(rs.rowLen), $out += '">', 
                $line = 170, $out += $escape($helpers.dateFormat(rs.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += '</td> <td rowspan="', $line = 171, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 171, $out += $escape(rs.contractMoney), $out += "</span></td> <td>", $line = 172, 
                rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", $line = 174, 
                $each(rs.detailList.transitFee.transitFeeList, function(tf) {
                    $out += " ", $line = 175, $out += $escape(tf.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 176, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 176, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 177, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 178, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 179;
                }), $out += " ", $line = 180) : ($out += "  ", $line = 182, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 184, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 185, 0 == index && ($out += " ", $line = 186, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 187, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 188, $out += $escape(of.touristGroupId), $out += '">', $line = 188, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 189, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 190, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 191;
                    }), $out += " ", $line = 192), $out += " ", $line = 193;
                }), $out += " ", $line = 194) : rs.detailList.otherFee.otherFeeList.length > 0 ? ($out += "  ", 
                $line = 196, $each(rs.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 197, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 198, $out += $escape(of.touristGroupId), $out += '">', $line = 198, $out += $escape(of.price), 
                    $out += '</span>x <span class="F-float F-count">', $line = 199, $out += $escape(of.count), 
                    $out += '</span>= <span class="F-float F-money">', $line = 200, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 201;
                }), $out += " ", $line = 202) : ($out += "- ", $line = 203), $out += " ", $line = 204), 
                $out += ' </td> <td rowspan="', $line = 206, $out += $escape(rs.rowLen), $out += '"><a class="cursor T-action T-receive"> 社收<span class="F-float F-money">', 
                $line = 207, $out += $escape(rs.travleReciveMoney), $out += '</span>， 导游现收<span class="F-float F-money">', 
                $line = 208, $out += $escape(rs.guideReciveMoney), $out += "</span> </a> </td> ", 
                $line = 212, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += '  <td><span class="F-float F-money">', 
                $line = 214, $out += $escape(rs.detailList.transitFee.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 215, $out += $escape(rs.detailList.transitFee.settlementMoney), $out += "</span></td> ", 
                $line = 216) : ($out += "  ", $line = 218, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 220, $each(rs.detailList.otherFee, function(of, index) {
                    $out += " ", $line = 221, 0 == index && ($out += ' <td><span class="F-float F-money">', 
                    $line = 222, $out += $escape(of.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 223, $out += $escape(of.settlementMoney), $out += "</span></td> ", $line = 224), 
                    $out += " ", $line = 225;
                }), $out += " ", $line = 226) : rs.detailList.otherFee.otherFeeList.length > 0 ? ($out += ' <td><span class="F-float F-money">', 
                $line = 227, $out += $escape(rs.detailList.otherFee.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 228, $out += $escape(rs.detailList.otherFee.settlementMoney), $out += "</span></td> ", 
                $line = 229) : ($out += '  <td><span class="F-float F-money">', $line = 231, $out += $escape(rs.backMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 232, $out += $escape(rs.settlementMoney), 
                $out += "</span></td> ", $line = 233), $out += " ", $line = 234), $out += ' <td rowspan="', 
                $line = 235, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 235, $out += $escape(rs.unReceivedMoney), $out += '</span></td> <td rowspan="', 
                $line = 236, $out += $escape(rs.rowLen), $out += '"> <input type="text" name="payMoney" data-le="', 
                $line = 237, $out += $escape(rs.unReceivedMoney), $out += '" ', $line = 237, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", 
                $line = 237), $out += ' class="col-sm-12 T-reciveMoney money F-float F-money"> </td> <td rowspan="', 
                $line = 239, $out += $escape(rs.rowLen), $out += '"> <textarea class="col-sm-12 T-remark hct-textarea" ', 
                $line = 240, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", $line = 240), 
                $out += '></textarea> </td> <td rowspan="', $line = 242, $out += $escape(rs.rowLen), 
                $out += '">', $line = 242, $out += $escape(rs.checkTime), $out += '</td> <td rowspan="', 
                $line = 243, $out += $escape(rs.rowLen), $out += '">', $line = 243, $out += $escape(rs.checkUserName), 
                $out += '</td> <td rowspan="', $line = 244, $out += $escape(rs.rowLen), $out += '"> <label class="pos-rel"> ', 
                $line = 246, rs.isConfirmAccount ? ($out += "已对账", $line = 246) : ($out += "未对账", 
                $line = 246), $out += ' </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view">查看</a> </td> </tr> ', 
                $line = 252, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 254, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += " ", 
                $line = 255, $each(rs.detailList.otherFee, function(temp) {
                    $out += " <tr><td>", $line = 256, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 257, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 258, $out += $escape(of.touristGroupId), $out += '">', $line = 258, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 259, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 260, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 261;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 263, $out += $escape(temp.backMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 264, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 266;
                }), $out += " ", $line = 267) : rs.detailList.otherFee.otherFeeList.length > 0 && ($out += " <tr><td>", 
                $line = 268, $each(rs.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 269, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 270, $out += $escape(of.touristGroupId), $out += '">', $line = 270, $out += $escape(of.price), 
                    $out += '</span> x <span class="F-float F-count">', $line = 271, $out += $escape(of.count), 
                    $out += '</span> = <span class="F-float F-money">', $line = 272, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 273;
                }), $out += ' </td> <td><span class="F-float F-money">', $line = 275, $out += $escape(rs.detailList.otherFee.backMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 276, $out += $escape(rs.detailList.otherFee.settlementMoney), 
                $out += "</span></td> </tr> ", $line = 278), $out += " ", $line = 279) : ($out += " ", 
                $line = 280, 5 == rs.status && ($out += " ", $line = 281, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 282, index > 0 && ($out += " <tr><td>", $line = 283, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 284, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 285, $out += $escape(of.touristGroupId), $out += '">', $line = 285, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 286, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 287, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 288;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 290, $out += $escape(temp.backMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 291, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 293), $out += " ", $line = 294;
                }), $out += " ", $line = 295), $out += " ", $line = 296), $out += " ", $line = 297;
            }), $out += " ", $line = 298) : ($out += ' <tr><td colspan="20">', $line = 299, 
            $out += $escape(message), $out += "</td></tr> ", $line = 300), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 306, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="', 
            $line = 319, $out += $escape(type), $out += '" data-id="', $line = 319, $out += $escape(fromPartnerAgencyId), 
            $out += '" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户：</label>\r\n            <label class="control-label T-partnerAgencyName">{{partnerAgencyName}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收客单号：</label>\r\n            <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="{{searchParam.orderNumber}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">组团单号：</label>\r\n            <input type="text" class="form-control T-search-number" placeholder="组团单号" value="{{searchParam.otaOrderNumber}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">线路名称：</label>\r\n            <input type="text" class="form-control T-search-line" data-id="{{searchParam.lineProductId}}" value="{{searchParam.lineProductName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" data-id="{{searchParam.creatorId}}" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户联系人：</label>\r\n            <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="{{searchParam.fromPartnerAgencyContactId}}" value="{{searchParam.contactRealname}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    <div class="form-inline">\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label F-float F-count">{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumContractMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumUnReceivedMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">未收金额合计(已对账)：</label>\r\n            <label class="control-label T-unpayMoney F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-inline globalAdd">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">本次收款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money"  {{if type}}disabled {{/if}}>\r\n            </label>\r\n        </div>\r\n\r\n        {{if !type}} \r\n        <div class="form-group mar-r-10">\r\n            <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                {{getPayTypeOptions}}\r\n            </select>\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">现金账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="cash-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="card-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date"  style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" class="T-sumRemark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed  bg-blur">\r\n                <th>收客单号</th>\r\n                <th>组团单号</th>\r\n                <th>线路产品</th>\r\n                <th>出游日期（账期）</th>\r\n                <th>客户联系人</th>\r\n                <th>游客联系人</th>\r\n                <th>人数</th>\r\n                <th>录入人</th>\r\n                <th>录入时间</th>\r\n                <th>合同金额</th>\r\n                <th>明细</th>\r\n                <th>已收金额</th>\r\n                <th>返款金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>本次收款金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{if customerAccountList != null}} \r\n            {{each customerAccountList as rs index}}\r\n            <tr data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}">\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.otaOrderNumber == null || rs.otaOrderNumber == ""}}-{{else}}{{rs.otaOrderNumber}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.lineProductName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.startTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if !!rs.partnerAgencyContact}}{{rs.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.contactName}}</td>\r\n                <td rowspan="{{rs.rowLen}}" style="white-space: nowrap;">\r\n                    <a class="cursor T-action T-viewGroup" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.creatorName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.createTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.contractMoney}}</span></td>\r\n                <td>{{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                    <!-- 若有中转结算价 -->\r\n                        {{each rs.detailList.transitFee.transitFeeList as tf}}\r\n                            {{tf.name}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}\r\n                    <!-- 若无中转结算价 -->\r\n                        {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                        <!-- 中转，otherFee中多条数据 -->\r\n                            {{each rs.detailList.otherFee as temp index}}\r\n                                {{if index == 0}}\r\n                                    {{each temp.otherFeeList as of}}\r\n                                        {{of.name}}：\r\n                                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                        <span class="F-float F-count">{{of.count}}</span>=\r\n                                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            {{/each}}\r\n                        {{else if rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                        <!-- 非中转，otherFee中单条数据 -->\r\n                            {{each rs.detailList.otherFee.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                <span class="F-float F-count">{{of.count}}</span>=\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        {{else}}<!-- 若无费用明细 -->-\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}"><a class="cursor T-action T-receive">\r\n                        社收<span class="F-float F-money">{{rs.travleReciveMoney}}</span>，\r\n                        导游现收<span class="F-float F-money">{{rs.guideReciveMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                \r\n                {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                <!-- 若有中转结算价 -->\r\n                    <td><span class="F-float F-money">{{rs.detailList.transitFee.backMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.detailList.transitFee.settlementMoney}}</span></td>\r\n                {{else}}\r\n                <!-- 若无中转结算价 -->\r\n                    {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                    <!-- 中转，otherFee中多条数据 -->\r\n                        {{each rs.detailList.otherFee as of index}}\r\n                            {{if index == 0}}\r\n                                <td><span class="F-float F-money">{{of.backMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{of.settlementMoney}}</span></td>\r\n                            {{/if}}\r\n                        {{/each}}\r\n                    {{else if rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.settlementMoney}}</span></td>\r\n                    {{else}}\r\n                    <!-- 若无费用明细 -->\r\n                        <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                    {{/if}}\r\n                {{/if}}\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.unReceivedMoney}}</span></td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <input type="text" name="payMoney" data-le="{{rs.unReceivedMoney}}" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}} class="col-sm-12 T-reciveMoney money F-float F-money">\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <textarea class="col-sm-12 T-remark hct-textarea" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}}></textarea>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkUserName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <label class="pos-rel">\r\n                        {{if rs.isConfirmAccount}}已对账{{else}}未对账{{/if}}\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                    {{each rs.detailList.otherFee as temp}}\r\n                        <tr><td>{{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                    <span class="F-float F-count">{{of.count}}</span> =\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            </td>\r\n                            <td><span class="F-float F-money">{{temp.backMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                        </tr>\r\n                    {{/each}}\r\n                {{else if rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                    <tr><td>{{each rs.detailList.otherFee.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                <span class="F-float F-count">{{of.count}}</span> =\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        </td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.settlementMoney}}</span></td>\r\n                    </tr>\r\n                {{/if}}\r\n            {{else}}\r\n                {{if rs.status == 5}}\r\n                    {{each rs.detailList.otherFee as temp index}}\r\n                        {{if index > 0}}\r\n                            <tr><td>{{each temp.otherFeeList as of}}\r\n                                        {{of.name}}：\r\n                                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                        <span class="F-float F-count">{{of.count}}</span> =\r\n                                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                    {{/each}}\r\n                                </td>\r\n                                <td><span class="F-float F-money">{{temp.backMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}\r\n            {{/if}}\r\n            {{/each}} \r\n            {{else}}\r\n                <tr><td colspan="20">{{message}}</td></tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-btn-close">\r\n            <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n        </button>\r\n        <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="{{type}}" data-id="{{fromPartnerAgencyId}}" style="margin-left: 20px">\r\n            <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n        </button>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});