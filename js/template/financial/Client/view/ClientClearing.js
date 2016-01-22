/*TMODJS:{"debug":true,"version":241,"md5":"f404e93a5692b075f4a180e667865a12"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, totalList = $data.totalList, type = $data.type, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.index, $data.tf, $data.$index, $data.temp, $data.of, $data.message), fromPartnerAgencyId = $data.fromPartnerAgencyId, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label">客户：</label> <label class="control-label T-partnerAgencyName">', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">组团单号：</label> <input type="text" class="form-control T-search-number" placeholder="组团单号" value="', 
            $line = 15, $out += $escape(searchParam.otaOrderNumber), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">线路名称：</label> <input type="text" class="form-control T-search-line" data-id="', 
            $line = 19, $out += $escape(searchParam.lineProductId), $out += '" value="', $line = 19, 
            $out += $escape(searchParam.lineProductName), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" data-id="', 
            $line = 23, $out += $escape(searchParam.creatorId), $out += '" value="', $line = 23, 
            $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline"> <div class="form-group"> <label class="control-label">人数合计：</label> <label class="control-label F-float F-count">', 
            $line = 34, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 38, $out += $escape(totalList.sumContractMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 42, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返款金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 46, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 50, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 54, $out += $escape(totalList.sumUnReceivedMoney), $out += '</label> </div> <div class="form-group"> <label class="control-label">未收金额合计(已对账)：</label> <label class="control-label T-unpayMoney F-float F-money">', 
            $line = 58, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money" ', 
            $line = 66, type && ($out += "disabled ", $line = 66), $out += "> </label> </div> ", 
            $line = 70, type || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 74), $out += ' <div class="form-group mar-l-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 79, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div class="row" style="margin-top: 10px"> <table class="table table-striped table-bordered table-hover hct_align_middle"> <thead> <tr> <th class="th-border">组团单号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期（账期）</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">录入人</th> <th class="th-border">录入时间</th> <th class="th-border">合同金额</th> <th class="th-border">明细</th> <th class="th-border">已收金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未收金额</th> <th class="th-border">本次收款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="min-width: 100px;">对账</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 136, null != customerAccountList ? ($out += " ", $line = 137, $each(customerAccountList, function(rs) {
                $out += ' <tr data-gid="', $line = 138, $out += $escape(rs.touristGroupId), $out += '" data-id="', 
                $line = 138, $out += $escape(rs.id), $out += '"> <td rowspan="', $line = 139, $out += $escape(rs.rowLen), 
                $out += '">', $line = 139, null == rs.otaOrderNumber || "" == rs.otaOrderNumber ? ($out += "-", 
                $line = 139) : ($line = 139, $out += $escape(rs.otaOrderNumber), $line = 139), $out += '</td> <td rowspan="', 
                $line = 140, $out += $escape(rs.rowLen), $out += '">', $line = 140, $out += $escape(rs.lineProductName), 
                $out += '</td> <td rowspan="', $line = 141, $out += $escape(rs.rowLen), $out += '">', 
                $line = 141, $out += $escape(rs.startTime), $out += '</td> <td rowspan="', $line = 142, 
                $out += $escape(rs.rowLen), $out += '">', $line = 142, $out += $escape(rs.contactName), 
                $out += '</td> <td rowspan="', $line = 143, $out += $escape(rs.rowLen), $out += '" style="white-space: nowrap;"> <a class="cursor T-action T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 145, $out += $escape(rs.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 146, $out += $escape(rs.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 149, $out += $escape(rs.rowLen), $out += '">', $line = 149, $out += $escape(rs.creatorName), 
                $out += '</td> <td rowspan="', $line = 150, $out += $escape(rs.rowLen), $out += '">', 
                $line = 150, $out += $escape($helpers.dateFormat(rs.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += '</td> <td rowspan="', $line = 151, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 151, $out += $escape(rs.contractMoney), $out += "</span></td> <td>", $line = 152, 
                rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", $line = 154, 
                $each(rs.detailList.transitFee.transitFeeList, function(tf) {
                    $out += " ", $line = 155, $out += $escape(tf.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 156, $out += $escape(tf.touristGroupId), $out += '" data-status="3">', $line = 156, 
                    $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', $line = 157, 
                    $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', $line = 158, 
                    $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 159;
                }), $out += " ", $line = 160) : ($out += "  ", $line = 162, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 164, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 165, 0 == index && ($out += " ", $line = 166, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 167, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 168, $out += $escape(of.touristGroupId), $out += '">', $line = 168, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 169, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 170, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 171;
                    }), $out += " ", $line = 172), $out += " ", $line = 173;
                }), $out += " ", $line = 174) : rs.detailList.otherFee.otherFeeList.length > 0 ? ($out += "  ", 
                $line = 176, $each(rs.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 177, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 178, $out += $escape(of.touristGroupId), $out += '">', $line = 178, $out += $escape(of.price), 
                    $out += '</span>x <span class="F-float F-count">', $line = 179, $out += $escape(of.count), 
                    $out += '</span>= <span class="F-float F-money">', $line = 180, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 181;
                }), $out += " ", $line = 182) : ($out += "- ", $line = 183), $out += " ", $line = 184), 
                $out += ' </td> <td rowspan="', $line = 186, $out += $escape(rs.rowLen), $out += '"><a class="cursor T-action T-receive"> 社收<span class="F-float F-money">', 
                $line = 187, $out += $escape(rs.travleReciveMoney), $out += '</span>， 导游现收<span class="F-float F-money">', 
                $line = 188, $out += $escape(rs.guideReciveMoney), $out += "</span> </a> </td> ", 
                $line = 192, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += '  <td><span class="F-float F-money">', 
                $line = 194, $out += $escape(rs.detailList.transitFee.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 195, $out += $escape(rs.detailList.transitFee.settlementMoney), $out += "</span></td> ", 
                $line = 196) : ($out += "  ", $line = 198, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 200, $each(rs.detailList.otherFee, function(of, index) {
                    $out += " ", $line = 201, 0 == index && ($out += ' <td><span class="F-float F-money">', 
                    $line = 202, $out += $escape(of.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 203, $out += $escape(of.settlementMoney), $out += "</span></td> ", $line = 204), 
                    $out += " ", $line = 205;
                }), $out += " ", $line = 206) : rs.detailList.otherFee.otherFeeList.length > 0 ? ($out += ' <td><span class="F-float F-money">', 
                $line = 207, $out += $escape(rs.detailList.otherFee.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 208, $out += $escape(rs.detailList.otherFee.settlementMoney), $out += "</span></td> ", 
                $line = 209) : ($out += '  <td><span class="F-float F-money">', $line = 211, $out += $escape(rs.backMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 212, $out += $escape(rs.settlementMoney), 
                $out += "</span></td> ", $line = 213), $out += " ", $line = 214), $out += ' <td rowspan="', 
                $line = 215, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 215, $out += $escape(rs.unReceivedMoney), $out += '</span></td> <td rowspan="', 
                $line = 216, $out += $escape(rs.rowLen), $out += '"> <input type="text" name="payMoney" data-le="', 
                $line = 217, $out += $escape(rs.unReceivedMoney), $out += '" ', $line = 217, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", 
                $line = 217), $out += ' class="col-sm-12 T-reciveMoney money F-float F-money"> </td> <td rowspan="', 
                $line = 219, $out += $escape(rs.rowLen), $out += '"> <input type="text" class="col-sm-12 T-remark" ', 
                $line = 220, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", $line = 220), 
                $out += '> </td> <td rowspan="', $line = 222, $out += $escape(rs.rowLen), $out += '">', 
                $line = 222, $out += $escape(rs.checkTime), $out += '</td> <td rowspan="', $line = 223, 
                $out += $escape(rs.rowLen), $out += '">', $line = 223, $out += $escape(rs.checkUserName), 
                $out += '</td> <td rowspan="', $line = 224, $out += $escape(rs.rowLen), $out += '"> <label class="pos-rel"> ', 
                $line = 226, rs.isConfirmAccount ? ($out += "已对账", $line = 226) : ($out += "未对账", 
                $line = 226), $out += ' </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view">查看</a> </td> </tr> ', 
                $line = 232, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 234, 5 == rs.status && rs.detailList.otherFee.length > 0 ? ($out += " ", 
                $line = 235, $each(rs.detailList.otherFee, function(temp) {
                    $out += " <tr><td>", $line = 236, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 237, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 238, $out += $escape(of.touristGroupId), $out += '">', $line = 238, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 239, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 240, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 241;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 243, $out += $escape(temp.backMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 244, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 246;
                }), $out += " ", $line = 247) : ($out += " <tr><td>", $line = 248, $each(rs.detailList.otherFee.otherFeeList, function(of) {
                    $out += " ", $line = 249, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 250, $out += $escape(of.touristGroupId), $out += '">', $line = 250, $out += $escape(of.price), 
                    $out += '</span> x <span class="F-float F-count">', $line = 251, $out += $escape(of.count), 
                    $out += '</span> = <span class="F-float F-money">', $line = 252, $out += $escape(of.price * of.count), 
                    $out += "</span><br> ", $line = 253;
                }), $out += ' </td> <td><span class="F-float F-money">', $line = 255, $out += $escape(rs.detailList.otherFee.backMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 256, $out += $escape(rs.detailList.otherFee.settlementMoney), 
                $out += "</span></td> </tr> ", $line = 258), $out += " ", $line = 259) : ($out += " ", 
                $line = 260, 5 == rs.status && ($out += " ", $line = 261, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 262, index > 0 && ($out += " <tr><td>", $line = 263, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 264, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 265, $out += $escape(of.touristGroupId), $out += '">', $line = 265, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 266, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 267, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 268;
                    }), $out += ' </td> <td><span class="F-float F-money">', $line = 270, $out += $escape(temp.backMoney), 
                    $out += '</span></td> <td><span class="F-float F-money">', $line = 271, $out += $escape(temp.settlementMoney), 
                    $out += "</span></td> </tr> ", $line = 273), $out += " ", $line = 274;
                }), $out += " ", $line = 275), $out += " ", $line = 276), $out += " ", $line = 277;
            }), $out += " ", $line = 278) : ($out += ' <tr><td colspan="20">', $line = 279, 
            $out += $escape(message), $out += "</td></tr> ", $line = 280), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 285, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="', 
            $line = 299, $out += $escape(type), $out += '" data-id="', $line = 299, $out += $escape(fromPartnerAgencyId), 
            $out += '" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label class="control-label">客户：</label>\r\n            <label class="control-label T-partnerAgencyName">{{partnerAgencyName}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">组团单号：</label>\r\n            <input type="text" class="form-control T-search-number" placeholder="组团单号" value="{{searchParam.otaOrderNumber}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">线路名称：</label>\r\n            <input type="text" class="form-control T-search-line" data-id="{{searchParam.lineProductId}}" value="{{searchParam.lineProductName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" data-id="{{searchParam.creatorId}}" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label F-float F-count">{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumContractMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumUnReceivedMoney}}</label>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label">未收金额合计(已对账)：</label>\r\n            <label class="control-label T-unpayMoney F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-inline globalAdd" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">本次收款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumPayMoney" class="F-float F-money T-sumReciveMoney money"  {{if type}}disabled {{/if}}>\r\n            </label>\r\n        </div>\r\n\r\n        {{if !type}} \r\n        <div class="form-group mar-l-10">\r\n            <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n\r\n        <div class="form-group mar-l-10">\r\n            <label class="control-label">收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                {{getPayTypeOptions}}\r\n            </select>\r\n        </div>\r\n\r\n        <div class="form-group mar-l-10">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="card-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date"  style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" class="T-sumRemark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 10px">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">组团单号</th>\r\n                <th class="th-border">线路产品</th>\r\n                <th class="th-border">出游日期（账期）</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">录入人</th>\r\n                <th class="th-border">录入时间</th>\r\n                <th class="th-border">合同金额</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">已收金额</th>\r\n                <th class="th-border">返款金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未收金额</th>\r\n                <th class="th-border">本次收款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="min-width: 100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{if customerAccountList != null}} \r\n            {{each customerAccountList as rs index}}\r\n            <tr data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}">\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.otaOrderNumber == null || rs.otaOrderNumber == ""}}-{{else}}{{rs.otaOrderNumber}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.lineProductName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.startTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.contactName}}</td>\r\n                <td rowspan="{{rs.rowLen}}" style="white-space: nowrap;">\r\n                    <a class="cursor T-action T-viewGroup" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.creatorName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.createTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.contractMoney}}</span></td>\r\n                <td>{{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                    <!-- 若有中转结算价 -->\r\n                        {{each rs.detailList.transitFee.transitFeeList as tf}}\r\n                            {{tf.name}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}\r\n                    <!-- 若无中转结算价 -->\r\n                        {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                        <!-- 中转，otherFee中多条数据 -->\r\n                            {{each rs.detailList.otherFee as temp index}}\r\n                                {{if index == 0}}\r\n                                    {{each temp.otherFeeList as of}}\r\n                                        {{of.name}}：\r\n                                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                        <span class="F-float F-count">{{of.count}}</span>=\r\n                                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            {{/each}}\r\n                        {{else if rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                        <!-- 非中转，otherFee中单条数据 -->\r\n                            {{each rs.detailList.otherFee.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                <span class="F-float F-count">{{of.count}}</span>=\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        {{else}}<!-- 若无费用明细 -->-\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}"><a class="cursor T-action T-receive">\r\n                        社收<span class="F-float F-money">{{rs.travleReciveMoney}}</span>，\r\n                        导游现收<span class="F-float F-money">{{rs.guideReciveMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                \r\n                {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                <!-- 若有中转结算价 -->\r\n                    <td><span class="F-float F-money">{{rs.detailList.transitFee.backMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{rs.detailList.transitFee.settlementMoney}}</span></td>\r\n                {{else}}\r\n                <!-- 若无中转结算价 -->\r\n                    {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                    <!-- 中转，otherFee中多条数据 -->\r\n                        {{each rs.detailList.otherFee as of index}}\r\n                            {{if index == 0}}\r\n                                <td><span class="F-float F-money">{{of.backMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{of.settlementMoney}}</span></td>\r\n                            {{/if}}\r\n                        {{/each}}\r\n                    {{else if rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.settlementMoney}}</span></td>\r\n                    {{else}}\r\n                    <!-- 若无费用明细 -->\r\n                        <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                    {{/if}}\r\n                {{/if}}\r\n                <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.unReceivedMoney}}</span></td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <input type="text" name="payMoney" data-le="{{rs.unReceivedMoney}}" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}} class="col-sm-12 T-reciveMoney money F-float F-money">\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <input type="text" class="col-sm-12 T-remark" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}}>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkUserName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <label class="pos-rel">\r\n                        {{if rs.isConfirmAccount}}已对账{{else}}未对账{{/if}}\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                {{if rs.status == 5 && rs.detailList.otherFee.length > 0}}\r\n                    {{each rs.detailList.otherFee as temp}}\r\n                        <tr><td>{{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                    <span class="F-float F-count">{{of.count}}</span> =\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            </td>\r\n                            <td><span class="F-float F-money">{{temp.backMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                        </tr>\r\n                    {{/each}}\r\n                {{else rs.detailList.otherFee.otherFeeList.length > 0}}\r\n                    <tr><td>{{each rs.detailList.otherFee.otherFeeList as of}}\r\n                                {{of.name}}：\r\n                                <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                <span class="F-float F-count">{{of.count}}</span> =\r\n                                <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                            {{/each}}\r\n                        </td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.backMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.detailList.otherFee.settlementMoney}}</span></td>\r\n                    </tr>\r\n                {{/if}}\r\n            {{else}}\r\n                {{if rs.status == 5}}\r\n                    {{each rs.detailList.otherFee as temp index}}\r\n                        {{if index > 0}}\r\n                            <tr><td>{{each temp.otherFeeList as of}}\r\n                                        {{of.name}}：\r\n                                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                        <span class="F-float F-count">{{of.count}}</span> =\r\n                                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                    {{/each}}\r\n                                </td>\r\n                                <td><span class="F-float F-money">{{temp.backMoney}}</span></td>\r\n                                <td><span class="F-float F-money">{{temp.settlementMoney}}</span></td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}\r\n            {{/if}}\r\n            {{/each}} \r\n            {{else}}\r\n                <tr><td colspan="20">{{message}}</td></tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" data-right="1280003" data-type="{{type}}" data-id="{{fromPartnerAgencyId}}" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});