/*TMODJS:{"debug":true,"version":888,"md5":"dd3a31cea3585b39c1e9c591ef903651"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, view = $data.view, fromPartnerAgencyId = $data.fromPartnerAgencyId, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, userInfoTravelAgencyId = $data.userInfoTravelAgencyId, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.listIndex, $data.temp, $data.index, $data.of, $data.$index, $data.message), $out = "";
            return $out += '<div class="T-search-area" data-isview="', $line = 1, $out += $escape(view), 
            $out += '" data-id="', $line = 1, $out += $escape(fromPartnerAgencyId), $out += '"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label">客户：</label> <input type="text" class="control-label T-partnerAgencyName" value="', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '" /> <input type="hidden" name="businessName" value="', 
            $line = 6, $out += $escape(searchParam.businessName), $out += '" /> <input type="hidden" name="businessNameId" value="', 
            $line = 7, $out += $escape(searchParam.businessGroupId), $out += '" /> <input type="hidden" name="groupName" value="', 
            $line = 8, $out += $escape(searchParam.groupName), $out += '" /> <input type="hidden" name="groupId" value="', 
            $line = 9, $out += $escape(searchParam.groupId), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-time T-search-start-date" value="', 
            $line = 14, $out += $escape(searchParam.startDate), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-time T-search-end-date" value="', 
            $line = 16, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="', 
            $line = 20, $out += $escape(searchParam.orderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">组团单号：</label> <input type="text" class="form-control T-search-number" placeholder="组团单号" value="', 
            $line = 24, $out += $escape(searchParam.otaOrderNumber), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">行程：</label>  <input type="text" class="form-control T-search-line" data-id="" value="', 
            $line = 29, $out += $escape(searchParam.lineProductName), $out += '" placeholder="请输入行程"> </div> <div class="form-group mar-r-10"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" data-id="', 
            $line = 34, $out += $escape(searchParam.creatorId), $out += '" value="', $line = 34, 
            $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">客户联系人：</label> <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="', 
            $line = 38, $out += $escape(searchParam.fromPartnerAgencyContactId), $out += '" value="', 
            $line = 38, $out += $escape(searchParam.contactRealname), $out += '"> </div> <div class="form-group mar-r-10"> <label class="control-label">游客：</label> <input type="text" class="form-control T-search-contactInfo" placeholder="联系人或联系电话" value="', 
            $line = 42, $out += $escape(searchParam.contactInfo), $out += '" name="contactInfo"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 46, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 48, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 52) : ($out += " 未对账 ", $line = 54) : ($out += " 全部 ", $line = 50), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <label>对账时间：</label> <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="', 
            $line = 66, $out += $escape(searchParam.startCheck), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-checkTime T-checkEndTime" value="', 
            $line = 68, $out += $escape(searchParam.endCheck), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 80, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">人数合计：</label> <label class="control-label F-float F-count T-sumCount"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">合同金额合计：</label> <label class="control-label F-float F-money T-sumContractMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp;&nbsp; <label class="control-label"> (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp; 导收：<span class="F-float F-money T-guideIncome"></span>) </label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返款金额合计：</label> <label class="control-label T-sumBackMoney F-float F-money"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label T-sumSettlementMoney F-float F-money"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label T-sumUnReceivedMoney F-float F-money"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计(已对账)：</label> <label class="control-label T-unpayMoney F-float F-money"></label> </div> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>组团单号</th> <th>行程</th> <th>出游日期（账期）</th> <th>客户联系人</th> <th>游客联系人</th> <th>人数</th> <th>录入人</th> <th>录入时间</th> <th>合同金额</th> ', 
            $line = 130, 9 == userInfoTravelAgencyId && ($out += " <th>明细</th> ", $line = 132), 
            $out += ' <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 115px;">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1280002|1280005"> ', 
            $line = 144, null != customerAccountList ? ($out += " ", $line = 145, $each(customerAccountList, function(rs, listIndex) {
                $out += ' <tr class="T-checkTr ', $line = 146, rs.change && ($out += "success", 
                $line = 146), $out += '" data-gid="', $line = 146, $out += $escape(rs.touristGroupId), 
                $out += '" data-id="', $line = 146, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 146, $out += $escape(rs.isConfirmAccount), $out += '" data-status="', $line = 146, 
                $out += $escape(rs.status), $out += '"> <td>', $line = 147, null == rs.orderNumber || "" == rs.orderNumber ? ($out += "-", 
                $line = 147) : ($out += ' <a class="cursor T-action T-open-tourist" title="查看小组信息">', 
                $line = 148, $out += $escape(rs.orderNumber), $out += "</a> ", $line = 149), $out += "</td> <td>", 
                $line = 150, null == rs.otaOrderNumber || "" == rs.otaOrderNumber ? ($out += "-", 
                $line = 150) : ($line = 150, $out += $escape(rs.otaOrderNumber), $line = 150), $out += "</td> <td>", 
                $line = 151, $out += $escape(rs.lineProductName), $out += "</td> <td>", $line = 152, 
                $out += $escape(rs.startTime), $out += "</td> <td>", $line = 153, rs.partnerAgencyContact && ($line = 153, 
                $out += $escape(rs.partnerAgencyContact.contactRealname), $line = 153), $out += "</td> <td>", 
                $line = 154, $out += $escape(rs.contactName), $out += "-", $line = 154, $out += $escape(rs.mobileNumber), 
                $out += '</td> <td> <a class="cursor T-action T-viewGroup" title="查看小组"> <span class="F-float F-count">', 
                $line = 157, $out += $escape(rs.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 158, $out += $escape(rs.childCount), $out += '</span>小 </a> </td> <td rowspan="', 
                $line = 161, $out += $escape(rs.rowLen), $out += '">', $line = 161, $out += $escape(rs.creatorName), 
                $out += '</td> <td rowspan="', $line = 162, $out += $escape(rs.rowLen), $out += '">', 
                $line = 162, $out += $escape($helpers.dateTimeFormat(rs.createTime)), $out += '</td> <td rowspan="', 
                $line = 163, $out += $escape(rs.rowLen), $out += '"> ', $line = 164, 9 != userInfoTravelAgencyId ? ($out += ' <a class="cursor T-viewFeeDetails T-contractMoney F-float F-money" data-index="', 
                $line = 165, $out += $escape(listIndex), $out += '" title="查看明细">', $line = 165, 
                $out += $escape(rs.contractMoney), $out += "</a> ", $line = 166) : ($out += " ", 
                $line = 167, $out += $escape(rs.contractMoney), $out += " ", $line = 168), $out += " </td> ", 
                $line = 170, 9 == userInfoTravelAgencyId && ($out += " <td> ", $line = 172, rs.detailList.otherFee.length > 0 ? ($out += '  <a class="T-viewFeeDetails" data-index="', 
                $line = 174, $out += $escape(listIndex), $out += '"> ', $line = 175, $each(rs.detailList.otherFee, function(temp, index) {
                    $out += " ", $line = 176, 0 == index && ($out += " ", $line = 177, $each(temp.otherFeeList, function(of) {
                        $out += " ", $line = 178, $out += $escape(of.name), $out += '： <span class="F-float F-money T-touristGroupId" data-id="', 
                        $line = 179, $out += $escape(of.touristGroupId), $out += '">', $line = 179, $out += $escape(of.price), 
                        $out += '</span>x <span class="F-float F-count">', $line = 180, $out += $escape(of.count), 
                        $out += '</span>= <span class="F-float F-money">', $line = 181, $out += $escape(of.price * of.count), 
                        $out += "</span><br> ", $line = 182;
                    }), $out += " ", $line = 183), $out += " ", $line = 184;
                }), $out += " </a> ", $line = 186) : ($out += "- ", $line = 187), $out += " </td> ", 
                $line = 189), $out += ' <td> <a class="cursor T-action T-receive"> 社收<span class="F-float F-money">', 
                $line = 192, $out += $escape(rs.travleReciveMoney), $out += "</span> ", $line = 193, 
                rs.guideReciveMoney && ($out += '， 导游现收<span class="F-float F-money">', $line = 194, 
                $out += $escape(rs.guideReciveMoney), $out += "</span> ", $line = 195), $out += " </a> </td> <td>", 
                $line = 198, 1 == view || rs.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 198, $out += $escape(rs.backMoney), $out += "</span>", $line = 198) : ($out += '<input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 198, $out += $escape(rs.backMoney), $out += '" name="settlementMoney" />', 
                $line = 198), $out += '</td> <td class="T-settlementMoney F-float F-money">', $line = 199, 
                $out += $escape(rs.settlementMoney), $out += '</td> <td class="T-unReceivedMoney F-float F-money">', 
                $line = 200, $out += $escape(rs.unReceivedMoney), $out += "</td> <td>", $line = 201, 
                1 == view || rs.isConfirmAccount ? ($line = 201, $out += $escape(rs.checkRemark), 
                $line = 201) : ($out += ' <textarea class="col-sm-12 T-remark hct-textarea" maxlength="1000">', 
                $line = 202, $out += $escape(rs.checkRemark), $out += "</textarea> ", $line = 203), 
                $out += " </td> <td>", $line = 205, $out += $escape(rs.checkTime), $out += "</td> <td>", 
                $line = 206, $out += $escape(rs.checkUserName), $out += "</td> <td> ", $line = 208, 
                1 == view ? $line = 208 : ($out += ' <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 210, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += ' checked="checked" ', 
                $line = 210), $out += '/> <span class="lbl">对账</span> </label> <label class="cursor"><a> |</a></label>', 
                $line = 213), $out += ' <a class="cursor T-action T-view">查看</a> </td> </tr> ', 
                $line = 217;
            }), $out += " ", $line = 218) : ($out += ' <tr><td colspan="20">', $line = 219, 
            $out += $escape(message), $out += "</td></tr> ", $line = 220), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 226, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> ', 
            $line = 229, 1 == view ? $line = 229 : ($out += ' <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"/> <span class="lbl">全选</span> </label> ', 
            $line = 234), $out += ' <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> ', 
            $line = 245, 1 == view ? $line = 245 : ($out += ' <button class="btn btn-xs btn-primary T-saveClear" data-right="1280002|1280005" data-id="', 
            $line = 246, $out += $escape(fromPartnerAgencyId), $out += '" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button>', 
            $line = 248), $out += " </div> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area" data-isview="{{view}}" data-id="{{fromPartnerAgencyId}}">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户：</label>\r\n            <input type="text" class="control-label T-partnerAgencyName" value="{{partnerAgencyName}}" />\r\n            <input type="hidden" name="businessName" value="{{searchParam.businessName}}" />\r\n            <input type="hidden" name="businessNameId" value="{{searchParam.businessGroupId}}" />\r\n            <input type="hidden" name="groupName" value="{{searchParam.groupName}}" />\r\n            <input type="hidden" name="groupId" value="{{searchParam.groupId}}" />\r\n\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-time T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-time T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">收客单号：</label>\r\n            <input type="text" class="form-control T-search-orderNumber" placeholder="收客单号" value="{{searchParam.orderNumber}}">\r\n        </div> \r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">组团单号：</label>\r\n            <input type="text" class="form-control T-search-number" placeholder="组团单号" value="{{searchParam.otaOrderNumber}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">行程：</label>\r\n            <!-- 为什么把lineProductId去掉 -->\r\n            <input type="text" class="form-control T-search-line" data-id="" value="{{searchParam.lineProductName}}" placeholder="请输入行程">\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" data-id="{{searchParam.creatorId}}" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">客户联系人：</label>\r\n            <input type="text" class="form-control T-search-contact" placeholder="客户联系人" data-id="{{searchParam.fromPartnerAgencyContactId}}" value="{{searchParam.contactRealname}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">游客：</label>\r\n            <input type="text" class="form-control T-search-contactInfo" placeholder="联系人或联系电话" value="{{searchParam.contactInfo}}" name="contactInfo">\r\n        </div> \r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>对账时间：</label>\r\n            <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="{{searchParam.startCheck}}" style="width:100px;" />\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input class="date-picker T-checkTime T-checkEndTime" value="{{searchParam.endCheck}}" placeholder="结束日期" type="text" style="width:100px;" />\r\n        </div>\r\n                \r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n        </div>\r\n    </form>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label F-float F-count T-sumCount"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumContractMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumReceiveMoney"></label>&nbsp;&nbsp;\r\n            <label class="control-label">\r\n            (社收：<span class="F-float F-money T-travelIncome"></span>&nbsp;&nbsp;\r\n            导收：<span class="F-float F-money T-guideIncome"></span>)\r\n            </label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label T-sumBackMoney F-float F-money"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label T-sumSettlementMoney F-float F-money"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label T-sumUnReceivedMoney F-float F-money"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计(已对账)：</label>\r\n            <label class="control-label T-unpayMoney F-float F-money"></label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>收客单号</th>\r\n                <th>组团单号</th>\r\n                <th>行程</th>\r\n                <th>出游日期（账期）</th>\r\n                <th>客户联系人</th>\r\n                <th>游客联系人</th>\r\n                <th>人数</th>\r\n                <th>录入人</th>\r\n                <th>录入时间</th>\r\n                <th>合同金额</th>\r\n                {{if userInfoTravelAgencyId == 9}}\r\n                <th>明细</th>\r\n                {{/if}}\r\n                <th>已收金额</th>\r\n                <th>返款金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 115px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1280002|1280005">\r\n            {{if customerAccountList != null}}\r\n        	{{each customerAccountList as rs listIndex}}\r\n            <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}" data-status="{{rs.status}}">\r\n                <td>{{if rs.orderNumber == null || rs.orderNumber == ""}}-{{else}}\r\n                    <a class="cursor T-action T-open-tourist" title="查看小组信息">{{rs.orderNumber}}</a>\r\n                {{/if}}</td>\r\n                <td>{{if rs.otaOrderNumber == null || rs.otaOrderNumber == ""}}-{{else}}{{rs.otaOrderNumber}}{{/if}}</td>\r\n                <td>{{rs.lineProductName}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{if !!rs.partnerAgencyContact}}{{rs.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n                <td>{{rs.contactName}}-{{rs.mobileNumber}}</td>\r\n                <td>\r\n                    <a class="cursor T-action T-viewGroup" title="查看小组">\r\n                        <span class="F-float F-count">{{rs.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{rs.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.creatorName}}</td>\r\n                <td rowspan="{{rs.rowLen}}">{{rs.createTime | dateTimeFormat}}</td>\r\n                <td rowspan="{{rs.rowLen}}">\r\n                    {{if userInfoTravelAgencyId != 9}}\r\n                    <a class="cursor T-viewFeeDetails T-contractMoney F-float F-money" data-index="{{listIndex}}" title="查看明细">{{rs.contractMoney}}</a>\r\n                    {{else}}\r\n                    {{rs.contractMoney}}\r\n                    {{/if}}\r\n                </td>\r\n                {{if userInfoTravelAgencyId == 9}}\r\n                <td>\r\n                    {{if rs.detailList.otherFee.length > 0}}\r\n                    <!-- 中转，otherFee中多条数据 -->\r\n                        <a class="T-viewFeeDetails" data-index="{{listIndex}}">\r\n                        {{each rs.detailList.otherFee as temp index}}\r\n                            {{if index == 0}}\r\n                                {{each temp.otherFeeList as of}}\r\n                                    {{of.name}}：\r\n                                    <span class="F-float F-money T-touristGroupId" data-id="{{of.touristGroupId}}">{{of.price}}</span>x\r\n                                    <span class="F-float F-count">{{of.count}}</span>=\r\n                                    <span class="F-float F-money">{{of.price * of.count}}</span><br>\r\n                                {{/each}}\r\n                            {{/if}}\r\n                        {{/each}}\r\n                        </a>\r\n                    {{else}}<!-- 若无费用明细 -->-\r\n                    {{/if}}\r\n                </td>\r\n                {{/if}}\r\n                <td>\r\n                    <a class="cursor T-action T-receive">\r\n                        社收<span class="F-float F-money">{{rs.travleReciveMoney}}</span>\r\n                        {{if !!rs.guideReciveMoney}}，\r\n                        导游现收<span class="F-float F-money">{{rs.guideReciveMoney}}</span>\r\n                        {{/if}}\r\n                    </a>\r\n                </td>\r\n                <td>{{if view == 1 || rs.isConfirmAccount}}<span class="F-float F-money">{{rs.backMoney}}</span>{{else}}<input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.backMoney}}" name="settlementMoney" />{{/if}}</td>\r\n                <td class="T-settlementMoney F-float F-money">{{rs.settlementMoney}}</td>\r\n                <td class="T-unReceivedMoney F-float F-money">{{rs.unReceivedMoney}}</td>\r\n                <td>{{if view == 1 || rs.isConfirmAccount}}{{rs.checkRemark}}{{else}}\r\n                    <textarea class="col-sm-12 T-remark hct-textarea" maxlength="1000">{{rs.checkRemark}}</textarea>\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    {{if view == 1}}{{else}}\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox"  {{ if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1) }} checked="checked" {{/if}}/> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"><a> |</a></label>{{/if}}\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}} \r\n            {{else}}\r\n                <tr><td colspan="20">{{message}}</td></tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n    {{if view == 1}}{{else}}\r\n        <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n            <input type="checkbox" class="ace T-checkAll"/> \r\n            <span class="lbl">全选</span>\r\n        </label>\r\n        {{/if}}\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-btn-close">\r\n            <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n        </button>\r\n        {{if view == 1}}{{else}}\r\n        <button class="btn btn-xs btn-primary T-saveClear" data-right="1280002|1280005" data-id="{{fromPartnerAgencyId}}" style="margin-left: 20px">\r\n            <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n        </button>{{/if}}\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});