/*TMODJS:{"debug":true,"version":808,"md5":"7988912f24e5ffd86a9a293f5bab1698"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, view = $data.view, fromPartnerAgencyId = $data.fromPartnerAgencyId, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, totalList = $data.totalList, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.index, $data.tf, $data.$index, $data.temp, $data.of, $data.message), $out = "";
            return $out += '<div class="T-search-area" data-isview="', $line = 1, $out += $escape(view), 
            $out += '" data-id="', $line = 1, $out += $escape(fromPartnerAgencyId), $out += '"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label">客户：</label> <input type="text" class="control-label T-partnerAgencyName" value="', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="', 
            $line = 15, $out += $escape(searchParam.orderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">组团单号：</label> <input type="text" class="form-control T-search-number" placeholder="组团单号" value="', 
            $line = 19, $out += $escape(searchParam.otaOrderNumber), $out += '"> </div><br /> <div class="form-group mar-r-10"> <label class="control-label">线路名称：</label> <input type="text" class="form-control T-search-line" data-id="', 
            $line = 23, $out += $escape(searchParam.lineProductId), $out += '" value="', $line = 23, 
            $out += $escape(searchParam.lineProductName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" data-id="', 
            $line = 27, $out += $escape(searchParam.creatorId), $out += '" value="', $line = 27, 
            $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">客户联系人：</label> <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="', 
            $line = 31, $out += $escape(searchParam.fromPartnerAgencyContactId), $out += '" value="', 
            $line = 31, $out += $escape(searchParam.contactRealname), $out += '"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 35, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 37, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 41) : ($out += " 未对账 ", $line = 43) : ($out += " 全部 ", $line = 39), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 62, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">人数合计：</label> <label class="control-label F-float F-count">', 
            $line = 66, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 70, $out += $escape(totalList.sumContractMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money">', 
            $line = 74, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返款金额合计：</label> <label class="control-label T-sumBackMoney F-float F-money">', 
            $line = 78, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label T-sumSettlementMoney F-float F-money">', 
            $line = 82, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label T-sumUnReceivedMoney F-float F-money">', 
            $line = 86, $out += $escape(totalList.sumUnReceivedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计(已对账)：</label> <label class="control-label T-unpayMoney F-float F-money">', 
            $line = 90, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>组团单号</th> <th>线路产品</th> <th>出游日期（账期）</th> <th>客户联系人</th> <th>游客联系人</th> <th>人数</th> <th>录入人</th> <th>录入时间</th> <th>合同金额</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 115px;">对账</th> </tr> </thead> <tbody class="T-checkList"> ', 
            $line = 120, null != customerAccountList ? ($out += " ", $line = 121, $each(customerAccountList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 122, rs.change && ($out += "success", 
                $line = 122), $out += '" data-gid="', $line = 122, $out += $escape(rs.touristGroupId), 
                $out += '" data-id="', $line = 122, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 122, $out += $escape(rs.isConfirmAccount), $out += '" data-status="', $line = 122, 
                $out += $escape(rs.status), $out += '"> <td rowspan="', $line = 123, $out += $escape(rs.rowLen), 
                $out += '">', $line = 123, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 123) : ($line = 123, $out += $escape(rs.orderNumber), $line = 123), $out += '</td> <td rowspan="', 
                $line = 124, $out += $escape(rs.rowLen), $out += '">', $line = 124, null == rs.otaOrderNumber || "" == rs.otaOrderNumber ? ($out += "-", 
                $line = 124) : ($line = 124, $out += $escape(rs.otaOrderNumber), $line = 124), $out += '</td> <td rowspan="', 
                $line = 125, $out += $escape(rs.rowLen), $out += '">', $line = 125, $out += $escape(rs.lineProductName), 
                $out += '</td> <td rowspan="', $line = 126, $out += $escape(rs.rowLen), $out += '">', 
                $line = 126, $out += $escape(rs.startTime), $out += '</td> <td rowspan="', $line = 127, 
                $out += $escape(rs.rowLen), $out += '">', $line = 127, rs.partnerAgencyContact && ($line = 127, 
                $out += $escape(rs.partnerAgencyContact.contactRealname), $line = 127), $out += '</td> <td rowspan="', 
                $line = 128, $out += $escape(rs.rowLen), $out += '">', $line = 128, $out += $escape(rs.contactName), 
                $out += '</td> <td rowspan="', $line = 129, $out += $escape(rs.rowLen), $out += '"> <a class="cursor T-action T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 131, $out += $escape(rs.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 132, $out += $escape(rs.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 135, $out += $escape(rs.rowLen), $out += '">', $line = 135, $out += $escape(rs.creatorName), 
                $out += '</td> <td rowspan="', $line = 136, $out += $escape(rs.rowLen), $out += '">', 
                $line = 136, $out += $escape($helpers.dateFormat(rs.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += '</td> <td rowspan="', $line = 137, $out += $escape(rs.rowLen), $out += '" class="T-contractMoney F-float F-money">', 
                $line = 137, $out += $escape(rs.contractMoney), $out += "</td> <td>", $line = 138, 
                rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", $line = 140, 
                $each(rs.detailList.transitFee.transitFeeList, function(tf) {
                    $out += " ", $line = 141, $out += $escape(tf.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                    $line = 142, $out += $escape(tf.touristGroupId), $out += '" data-status="3" data-trans="true">', 
                    $line = 142, $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', 
                    $line = 143, $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 144, $out += $escape(tf.price * tf.count), $out += "</span><br> ", $line = 145;
                }), $out += " ", $line = 146) : ($out += "  ", $line = 148, rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 150, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 151, 0 == index && ($out += " ", $line = 152, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 153, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 154, $out += $escape(of.touristGroupId), $out += '">', $line = 154, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 155, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 156, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 157;
                    }), $out += " ", $line = 158), $out += " ", $line = 159;
                }), $out += " ", $line = 160) : ($out += "- ", $line = 161), $out += " ", $line = 162), 
                $out += ' </td> <td rowspan="', $line = 164, $out += $escape(rs.rowLen), $out += '"> <a class="cursor T-action T-receive"> 社收<span class="F-float F-money">', 
                $line = 166, $out += $escape(rs.travleReciveMoney), $out += '</span>， 导游现收<span class="F-float F-money">', 
                $line = 167, $out += $escape(rs.guideReciveMoney), $out += "</span> </a> </td> ", 
                $line = 170, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  <td>", 
                $line = 172, 1 == view ? ($out += '<span class="F-float F-money">', $line = 172, 
                $out += $escape(rs.detailList.transitFee.backMoney), $out += "</span>", $line = 172) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 172, $out += $escape(rs.detailList.transitFee.backMoney), $out += '" name="settlementMoney" ', 
                $line = 172, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 172), 
                $out += ">", $line = 172), $out += '</td> <td class="T-settlementMoney F-float F-money">', 
                $line = 173, $out += $escape(rs.detailList.transitFee.settlementMoney), $out += "</td> ", 
                $line = 174) : ($out += "  ", $line = 176, rs.detailList.otherFee.length > 0 ? ($out += "  ", 
                $line = 178, $each(rs.detailList.otherFee, function(of, index) {
                    $out += " ", $line = 179, 0 == index && ($out += " <td>", $line = 180, 1 == view ? ($out += '<span class="F-float F-money">', 
                    $line = 180, $out += $escape(of.backMoney), $out += "</span>", $line = 180) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 180, $out += $escape(of.backMoney), $out += '" name="settlementMoney" ', 
                    $line = 180, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 180), 
                    $out += ">", $line = 180), $out += '</td> <td class="T-settlementMoney F-float F-money">', 
                    $line = 181, $out += $escape(of.settlementMoney), $out += "</td> ", $line = 182), 
                    $out += " ", $line = 183;
                }), $out += " ", $line = 184) : ($out += "  <td>", $line = 186, 1 == view ? ($out += '<span class="F-float F-money">', 
                $line = 186, $out += $escape(rs.backMoney), $out += "</span>", $line = 186) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 186, $out += $escape(rs.backMoney), $out += '" name="settlementMoney" ', 
                $line = 186, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 186), 
                $out += ">", $line = 186), $out += '</td> <td class="T-settlementMoney F-float F-money">', 
                $line = 187, $out += $escape(rs.settlementMoney), $out += "</td> ", $line = 188), 
                $out += " ", $line = 189), $out += ' <td rowspan="', $line = 190, $out += $escape(rs.rowLen), 
                $out += '" class="T-unReceivedMoney F-float F-money">', $line = 190, $out += $escape(rs.unReceivedMoney), 
                $out += '</td> <td rowspan="', $line = 191, $out += $escape(rs.rowLen), $out += '">', 
                $line = 191, 1 == view ? ($line = 191, $out += $escape(rs.checkRemark), $line = 191) : ($out += ' <textarea class="col-sm-12 T-remark hct-textarea" ', 
                $line = 192, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 192), 
                $out += ">", $line = 192, $out += $escape(rs.checkRemark), $out += "</textarea> ", 
                $line = 193), $out += ' </td> <td rowspan="', $line = 195, $out += $escape(rs.rowLen), 
                $out += '">', $line = 195, $out += $escape(rs.checkTime), $out += '</td> <td rowspan="', 
                $line = 196, $out += $escape(rs.rowLen), $out += '">', $line = 196, $out += $escape(rs.checkUserName), 
                $out += '</td> <td rowspan="', $line = 197, $out += $escape(rs.rowLen), $out += '"> ', 
                $line = 198, 1 == view ? $line = 198 : ($out += ' <label class="pos-rel R-right" ', 
                $line = 199, rs.isConfirmAccount ? ($out += ' data-right="1280005" ', $line = 199) : ($out += ' data-right="1280002" ', 
                $line = 199), $out += '> <input type="checkbox" class="ace T-checkbox" ', $line = 200, 
                (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += ' checked="checked" ', 
                $line = 200), $out += '/> <span class="lbl">对账</span> </label> <label class="cursor R-right"', 
                $line = 203, rs.isConfirmAccount ? ($out += ' data-right="1280005" ', $line = 203) : ($out += ' data-right="1280002" ', 
                $line = 203), $out += "><a> |</a></label>", $line = 203), $out += ' <a class="cursor T-action T-view">查看</a> </td> </tr> ', 
                $line = 207, rs.detailList.transitFee.transitFeeList.length > 0 ? ($out += "  ", 
                $line = 209, rs.detailList.otherFee.length > 0 && ($out += " ", $line = 210, $each(rs.detailList.otherFee, function(temp) {
                    $out += " <tr ", $line = 211, rs.change && ($out += 'class="success"', $line = 211), 
                    $out += "><td>", $line = 211, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 212, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 213, $out += $escape(of.touristGroupId), $out += '">', $line = 213, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 214, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 215, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 216;
                    }), $out += " </td> <td>", $line = 218, 1 == view ? ($out += '<span class="F-float F-money">', 
                    $line = 218, $out += $escape(temp.backMoney), $out += "</span>", $line = 218) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 218, $out += $escape(temp.backMoney), $out += '" name="settlementMoney" ', 
                    $line = 218, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 218), 
                    $out += ">", $line = 218), $out += '</td> <td class="T-settlementMoney F-float F-money">', 
                    $line = 219, $out += $escape(temp.settlementMoney), $out += "</td> </tr> ", $line = 221;
                }), $out += " ", $line = 222), $out += " ", $line = 223) : ($out += " ", $line = 224, 
                $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 225, index > 0 && ($out += " <tr ", $line = 226, rs.change && ($out += 'class="success"', 
                    $line = 226), $out += "><td>", $line = 226, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 227, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 228, $out += $escape(of.touristGroupId), $out += '">', $line = 228, $out += $escape(of.price), 
                        $out += '</span> x <span class="F-float F-count">', $line = 229, $out += $escape(of.count), 
                        $out += '</span> = <span class="F-float F-money">', $line = 230, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 231;
                    }), $out += " </td> <td>", $line = 233, 1 == view ? ($out += '<span class="F-float F-money">', 
                    $line = 233, $out += $escape(temp.backMoney), $out += "</span>", $line = 233) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                    $line = 233, $out += $escape(temp.backMoney), $out += '" name="settlementMoney" ', 
                    $line = 233, rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 233), 
                    $out += ">", $line = 233), $out += '</td> <td class="T-settlementMoney F-float F-money">', 
                    $line = 234, $out += $escape(temp.settlementMoney), $out += "</td> </tr> ", $line = 236), 
                    $out += " ", $line = 237;
                }), $out += " ", $line = 238), $out += " ", $line = 239;
            }), $out += " ", $line = 240) : ($out += ' <tr><td colspan="18">', $line = 241, 
            $out += $escape(message), $out += "</td></tr> ", $line = 242), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 248, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> ', 
            $line = 251, 1 == view ? $line = 251 : ($out += ' <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"/> <span class="lbl">全选</span> </label> ', 
            $line = 256), $out += ' <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> ', 
            $line = 267, 1 == view ? $line = 267 : ($out += ' <button class="btn btn-xs btn-primary T-saveClear" data-right="1280002|1280005" data-id="', 
            $line = 268, $out += $escape(fromPartnerAgencyId), $out += '" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button>', 
            $line = 270), $out += " </div> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area" data-isview="{{view}}" data-id="{{fromPartnerAgencyId}}">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户：</label>\r\n            <input type="text" class="control-label T-partnerAgencyName" value="{{partnerAgencyName}}" />\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收客单号：</label>\r\n            <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="{{searchParam.orderNumber}}">\r\n        </div> \r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">组团单号：</label>\r\n            <input type="text" class="form-control T-search-number" placeholder="组团单号" value="{{searchParam.otaOrderNumber}}">\r\n        </div><br />\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">线路名称：</label>\r\n            <input type="text" class="form-control T-search-line" data-id="{{searchParam.lineProductId}}" value="{{searchParam.lineProductName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" data-id="{{searchParam.creatorId}}" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户联系人：</label>\r\n            <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="{{searchParam.fromPartnerAgencyContactId}}" value="{{searchParam.contactRealname}}">\r\n        </div>\r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n        </div>\r\n    </form>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label F-float F-count">{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumContractMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label T-sumBackMoney F-float F-money">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label T-sumSettlementMoney F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label T-sumUnReceivedMoney F-float F-money">{{totalList.sumUnReceivedMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计(已对账)：</label>\r\n            <label class="control-label T-unpayMoney F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>收客单号</th>\r\n                <th>组团单号</th>\r\n                <th>线路产品</th>\r\n                <th>出游日期（账期）</th>\r\n                <th>客户联系人</th>\r\n                <th>游客联系人</th>\r\n                <th>人数</th>\r\n                <th>录入人</th>\r\n                <th>录入时间</th>\r\n                <th>合同金额</th>\r\n                <th>明细</th>\r\n                <th>已收金额</th>\r\n                <th>返款金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 115px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList">\r\n            {{if customerAccountList != null}}\r\n        	{{each customerAccountList as rs index}}\r\n            <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}" data-status="{{rs.status}}">\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}{{rs.orderNumber}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if rs.otaOrderNumber == null || rs.otaOrderNumber == ""}}-{{else}}{{rs.otaOrderNumber}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.lineProductName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.startTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if !!rs.partnerAgencyContact}}{{rs.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.contactName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <a class="cursor T-action T-viewGroup" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.creatorName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.createTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}</td>\r\n                <td rowspan="{{rs.rowLen}}" class="T-contractMoney F-float F-money">{{rs.contractMoney}}</td>\r\n                <td>{{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                    <!-- 若有中转结算价 -->\r\n                        {{each rs.detailList.transitFee.transitFeeList as tf}}\r\n                            {{tf.name}}：\r\n                            <span class="F-float F-money T-touristGroupId" data-id="{{tf.touristGroupId}}" data-status="3" data-trans="true">{{tf.price}}</span> x\r\n                            <span class="F-float F-count">{{tf.count}}</span> =\r\n                            <span class="F-float F-money">{{tf.price * tf.count}}</span><br>\r\n                        {{/each}}\r\n                    {{else}}\r\n                    <!-- 若无中转结算价 -->\r\n                        {{if rs.detailList.otherFee.length > 0}}\r\n                        <!-- 中转，otherFee中多条数据 -->\r\n                            {{each rs.detailList.otherFee as temp index}}\r\n                                {{if index == 0}}\r\n                                    {{each temp.otherFeeList as of}}\r\n                                        {{of.name}}：\r\n                                        <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                        <span class="F-float F-count">{{of.count}}</span>=\r\n                                        <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            {{/each}}\r\n                        {{else}}<!-- 若无费用明细 -->-\r\n                        {{/if}}\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    <a class="cursor T-action T-receive">\r\n                        社收<span class="F-float F-money">{{rs.travleReciveMoney}}</span>，\r\n                        导游现收<span class="F-float F-money">{{rs.guideReciveMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n                <!-- 若有中转结算价 -->\r\n                    <td>{{if view == 1}}<span class="F-float F-money">{{rs.detailList.transitFee.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.detailList.transitFee.backMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{/if}}</td>\r\n                    <td class="T-settlementMoney F-float F-money">{{rs.detailList.transitFee.settlementMoney}}</td>\r\n                {{else}}\r\n                <!-- 若无中转结算价 -->\r\n                    {{if rs.detailList.otherFee.length > 0}}\r\n                    <!-- 中转，otherFee中多条数据 -->\r\n                        {{each rs.detailList.otherFee as of index}}\r\n                            {{if index == 0}}\r\n                                <td>{{if view == 1}}<span class="F-float F-money">{{of.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{of.backMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{/if}}</td>\r\n                                <td class="T-settlementMoney F-float F-money">{{of.settlementMoney}}</td>\r\n                            {{/if}}\r\n                        {{/each}}\r\n                    {{else}}\r\n                    <!-- 若无费用明细 -->\r\n                        <td>{{if view == 1}}<span class="F-float F-money">{{rs.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.backMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{/if}}</td>\r\n                        <td class="T-settlementMoney F-float F-money">{{rs.settlementMoney}}</td>\r\n                    {{/if}}\r\n                {{/if}}\r\n                <td rowspan="{{rs.rowLen}}" class="T-unReceivedMoney F-float F-money">{{rs.unReceivedMoney}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{if view == 1}}{{rs.checkRemark}}{{else}}\r\n                    <textarea class="col-sm-12 T-remark hct-textarea" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{rs.checkRemark}}</textarea>\r\n                    {{/if}}\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkTime}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.checkUserName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    {{if view == 1}}{{else}}\r\n                    <label class="pos-rel  R-right" {{ if rs.isConfirmAccount }} data-right="1280005" {{else}}  data-right="1280002"  {{/if}}>\r\n                        <input type="checkbox" class="ace T-checkbox"  {{ if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1) }} checked="checked" {{/if}}/> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor R-right"{{ if rs.isConfirmAccount }} data-right="1280005" {{else}}  data-right="1280002"  {{/if}}><a> |</a></label>{{/if}}\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.detailList.transitFee.transitFeeList.length > 0}}\r\n            <!-- 若有中转结算价 -->\r\n                {{if rs.detailList.otherFee.length > 0}}\r\n                    {{each rs.detailList.otherFee as temp}}\r\n                        <tr {{if rs.change}}class="success"{{/if}}><td>{{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                    <span class="F-float F-count">{{of.count}}</span> =\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            </td>\r\n                            <td>{{if view == 1}}<span class="F-float F-money">{{temp.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{temp.backMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{/if}}</td>\r\n                            <td class="T-settlementMoney F-float F-money">{{temp.settlementMoney}}</td>\r\n                        </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n            {{else}}\r\n                {{each rs.detailList.otherFee as temp index}}\r\n                    {{if index > 0}}\r\n                        <tr {{if rs.change}}class="success"{{/if}}><td>{{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span> x\r\n                                    <span class="F-float F-count">{{of.count}}</span> =\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            </td>\r\n                            <td>{{if view == 1}}<span class="F-float F-money">{{temp.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{temp.backMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}>{{/if}}</td>\r\n                            <td class="T-settlementMoney F-float F-money">{{temp.settlementMoney}}</td>\r\n                        </tr>\r\n                    {{/if}}\r\n                {{/each}}\r\n            {{/if}}\r\n            {{/each}}\r\n            {{else}}\r\n                <tr><td colspan="18">{{message}}</td></tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n    {{if view == 1}}{{else}}\r\n        <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n            <input type="checkbox" class="ace T-checkAll"/> \r\n            <span class="lbl">全选</span>\r\n        </label>\r\n        {{/if}}\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-btn-close">\r\n            <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n        </button>\r\n        {{if view == 1}}{{else}}\r\n        <button class="btn btn-xs btn-primary T-saveClear" data-right="1280002|1280005" data-id="{{fromPartnerAgencyId}}" style="margin-left: 20px">\r\n            <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n        </button>{{/if}}\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});