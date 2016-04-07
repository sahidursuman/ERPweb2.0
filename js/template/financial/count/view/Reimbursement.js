/*TMODJS:{"debug":true,"version":742,"md5":"34fc4297f488448daa67df187d98f748"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/Reimbursement", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, busCompanyArranges = $data.busCompanyArranges, touristGroup = $data.touristGroup, guideArrange = $data.guideArrange, insurancePrice = $data.insurancePrice, isOp = $data.isOp, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, financialTripPlanId = $data.financialTripPlanId, $each = $utils.$each, $out = ($data.index, 
            $data.touristGroupFee, $data.$index, "");
            return $out += '<div class="col-sm-12 countReimbursement"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr> <td style="text-align:left"><label style="font-weight: bold;">线路：', 
            $line = 5, $out += $escape(tripPlan.lineProductName), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">类别：', 
            $line = 6, $out += $escape(tripPlan.lineProductType), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">针对客源：', 
            $line = 7, 1 == tripPlan.tripPlanType ? ($out += "团体", $line = 7) : 0 == tripPlan.tripPlanType && ($out += "散客", 
            $line = 7), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">', 
            $line = 8, $out += $escape(tripPlan.days), $out += '</span></label></td> </tr> <tr> <td style="text-align:left"><label style="font-weight: bold;">团号：', 
            $line = 11, $out += $escape(tripPlan.tripNumber), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">', 
            $line = 12, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span></label></td> <td style="text-align:left"><label style="font-weight: bold;">完团日期：', 
            $line = 13, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">团队人数：', 
            $line = 14, $out += $escape(tripPlan.touristAdultCount), $out += "大", $line = 14, 
            $out += $escape(tripPlan.touristChildCount), $out += '小</label></td> </tr> <tr> <td style="text-align:left"> <label style="font-weight: bold;">导游：', 
            $line = 17, null != tripPlan.guideName && ($line = 17, $out += $escape(tripPlan.guideName), 
            $line = 17), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">全陪：', 
            $line = 18, $out += $escape(tripPlan.accompanyGuideName), $out += '</label></td> <td style="text-align:left"></td> <td style="text-align:left"></td> </tr> </tbody> </table> <input type="hidden" name="totalPersonCount" value="', 
            $line = 24, $out += $escape(tripPlan.adultCount + tripPlan.childCount), $out += '"/> <input type="hidden" name=\'busNumber\' class="busNumber" value="', 
            $line = 25, $out += $escape(busCompanyArranges.listMap.length), $out += '"> <input type="hidden" name=\'maxDay\' value="', 
            $line = 26, $out += $escape(tripPlan.maxDay), $out += '"> <input type="hidden" name=\'minDay\' value="', 
            $line = 27, $out += $escape(tripPlan.minDay), $out += '"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr > <td colspan="8"> <div style="float: left;margin-left:10px;"> <input type="hidden" class="financial-tripPlanId" value="', 
            $line = 33, $out += $escape(tripPlan.id), $out += '" /> <input type="hidden" class="tripPlanAdultCount" value="', 
            $line = 34, $out += $escape(tripPlan.adultCount), $out += '" /> <input type="hidden" class="tripPlanChildCount" value="', 
            $line = 35, $out += $escape(tripPlan.childCount), $out += '" /> <input type="hidden" class="tripPlanStartTime" value="', 
            $line = 36, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">', 
            $line = 39, $out += $escape(tripPlan.guideAllPreMoney), $out += '</span></label> </div></td> </tr> <tr > <td colspan="2"><label style="font-weight: bold;">收入：<span class="F-float F-money tripIncome">0</span></label></td> <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td> <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td> </tr> <tr> <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">', 
            $line = 49, $out += $escape(touristGroup.needPayAllMoney), $out += '</span></label></td> <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td> <td style="text-align:left"><label>导服费：<span class="F-float F-money tripCost-guideArrangePrice">', 
            $line = 51, $out += $escape(guideArrange.price), $out += '</span></label></td> <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">', 
            $line = 52, $out += $escape(insurancePrice), $out += '</span></label></td> <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td> <td style="text-align:left"><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">', 
            $line = 55, $out += $escape(touristGroup.outBusMoney), $out += '</span></label></td> <td style="text-align:left"><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">', 
            $line = 56, $out += $escape(touristGroup.outRestaurantMoney), $out += '</span></label></td> </tr> <tr> <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td> <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td> <td style="text-align:left"><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">', 
            $line = 65, $out += $escape(touristGroup.outHotelMoney), $out += '</span></label></td> <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">', 
            $line = 66, $out += $escape(touristGroup.outOtherMoney), $out += '</span></label></td> </tr> <tr> <td style="text-align:left"><label>导游管理费：<span class="F-float F-money tripIncome-guideManageMoney">', 
            $line = 69, $out += $escape(guideArrange.manageFee), $out += '</span></label></td> <td style="text-align:left"></td> <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>其它费用：<span class="F-float F-money F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td> <td style="text-align:left"><label>票务费用', 
            $line = 75, $out += $escape(isOp), $out += '：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">', 
            $line = 75, $out += $escape(touristGroup.outTicketMoney), $out += '</span></label></td> <td></td> </tr> </tbody> </table> <input type="hidden" value="', 
            $line = 80, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 81, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="row" style="margin-bottom:15px;"> <div style="float:left;"> <button data-entity-id="', 
            $line = 85, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 85, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-primary btn-transfter T-saveCount" style="margin-left: 20px;"> <i class="ace-icon fa fa-save"></i>保存信息 </button> <button data-entity-id="', 
            $line = 88, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 88, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-success btn-transfter T-fanishAccount" style="margin-left: 20px;"> <i class="ace-icon fa fa-check-circle"></i>报账完成 </button> </div>  <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripPlanArrange" style="margin-left: 20px;">安排预算表</a> </div> </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-other-incoming" aria-expanded="true">其它收入</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-otherpay" aria-expanded="true">其它支出</a> </li> ', 
            $line = 133, null != touristGroup && ($out += ' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-outarrangepay" aria-expanded="true">中转</a> </li> ', 
            $line = 137), $out += ' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-other-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-guide" aria-expanded="true">导游</a> </li> </ul> <div class="tab-content financial-count-reimbursement-reimbursement-tab T-list" style="position: relative;top:-2px">  <div id="financial-count-reimbursement-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">客户</th> <th class="th-border">收客信息</th> <th class="th-border">游客信息</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">应收</th> <th class="th-border">社收</th> <th class="th-border">现收</th> <th class="th-border">明细</th> <th class="th-border">是否对账</th> </tr> </thead> <tbody class="T-tripDetail"> ', 
            $line = 165, touristGroup.touristGroups.length && ($out += " ", $line = 166, $each(touristGroup.touristGroups, function(touristGroup, index) {
                $out += ' <tr id="', $line = 167, $out += $escape(touristGroup.id), $out += '"> <td>', 
                $line = 168, $out += $escape(index + 1), $out += "</td> <td>", $line = 169, $out += $escape(touristGroup.partnerAgencyName), 
                $out += "</td> <td>", $line = 170, $out += $escape(touristGroup.orderNumber), $out += "</td> <td> <span>", 
                $line = 172, $out += $escape(touristGroup.adultCount), $out += '</span>大<span class="F-float F-count">', 
                $line = 172, $out += $escape(touristGroup.childCount), $out += "</span>小</span> <br/> <span>", 
                $line = 174, $out += $escape(touristGroup.contactName), $out += "</span> <br/> <span>", 
                $line = 176, $out += $escape(touristGroup.mobileNumber), $out += "</span> <br/> </td> <td> ", 
                $line = 180, $out += $escape(touristGroup.includeSelfPay), $out += " </td> <td> ", 
                $line = 183, $out += $escape(touristGroup.remark), $out += ' </td> <td> <span class="F-float F-money">', 
                $line = 186, $out += $escape(touristGroup.needPayAllMoney), $out += '</span> </td> <td><span class="F-float F-money">', 
                $line = 188, $out += $escape(touristGroup.payedMoney), $out += '</span></td> <td> <div class="inline-flex"> <span>', 
                $line = 191, $out += $escape(touristGroup.guideName), $out += '</span> <input class="F-float F-money w-80" name="currentNeedPayMoney" value="', 
                $line = 192, $out += $escape(touristGroup.currentNeedPayMoney), $out += '" maxlength="12" ', 
                $line = 192, 1 == touristGroup.isConfirmAccount && ($out += 'readOnly="readOnly"', 
                $line = 192), $out += '/> &nbsp;&nbsp; <select name="receiveStatus" ', $line = 194, 
                1 == touristGroup.isConfirmAccount && ($out += 'disabled="disabled"', $line = 194), 
                $out += '> <option value="0" ', $line = 195, 0 == touristGroup.isReceived && ($out += 'selected="selected"', 
                $line = 195), $out += '>未收到</option> <option value="1" ', $line = 196, 1 == touristGroup.isReceived && ($out += 'selected="selected"', 
                $line = 196), $out += ">已收到</option> </select> </div> <td> ", $line = 200, touristGroup.feeList.length ? ($out += ' <a href="#" class="T-viewCostDetail"> ', 
                $line = 202, $each(touristGroup.feeList, function(touristGroupFee) {
                    $out += " ", $line = 203, $out += $escape(touristGroupFee.name), $out += ' ： <span class="F-float F-money">', 
                    $line = 204, $out += $escape(touristGroupFee.price), $out += '</span>&nbsp;X&nbsp;<span class="F-float F-count">', 
                    $line = 204, $out += $escape(touristGroupFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 205, $out += $escape(touristGroupFee.price * touristGroupFee.count), $out += "</span><br /> ", 
                    $line = 206;
                }), $out += " ", $line = 207) : ($out += " ", $line = 208, $each(touristGroup.touristGroupSubFeeList, function(touristGroupFee) {
                    $out += " ", $line = 209, $out += $escape(touristGroupFee.name), $out += ' ： <span class="F-float F-money">', 
                    $line = 210, $out += $escape(touristGroupFee.price), $out += '</span>&nbsp;X&nbsp;<span class="F-float F-count">', 
                    $line = 210, $out += $escape(touristGroupFee.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 211, $out += $escape(touristGroupFee.price * touristGroupFee.count), $out += "</span><br /> ", 
                    $line = 212;
                }), $out += " ", $line = 213), $out += " </a> ", $line = 215, 0 == touristGroup.isConfirmAccount && ($out += ' <a data-status="0" class="cursor T-addFee R-right" data-right="1190005">[费用调整]</a> ', 
                $line = 217), $out += " </td> <td> ", $line = 220, 0 == touristGroup.isConfirmAccount ? ($out += " 未对账 ", 
                $line = 222) : ($out += " 已对账 ", $line = 224), $out += " </td> </tr> ", $line = 227;
            }), $out += " ", $line = 228), $out += ' </tbody> </table> </div>  <div id="financial-count-reimbursement-shop" class="tab-pane fade T-shop-add"> </div>  <div id="financial-count-reimbursement-selfpay" class="tab-pane fade T-self-add"> </div>  <div id="financial-count-reimbursement-other-incoming" class="tab-pane fade T-income"> </div>  <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance"> </div>  <div id="financial-count-reimbursement-buspay" class="tab-pane fade T-bus"> </div>  <div id="financial-count-reimbursement-restaurantpay" class="tab-pane fade T-restaurant"> </div>  <div id="financial-count-reimbursement-hotelpay" class="tab-pane fade T-hotel"> </div>  <div id="financial-count-reimbursement-scenicpay" class="tab-pane fade T-scenic"> </div>  <div id="financial-count-reimbursement-ticketpay" class="tab-pane fade T-ticket"> </div>  <div id="financial-count-reimbursement-otherpay" class="tab-pane fade T-otherOut"> </div>  <div id="financial-count-reimbursement-outarrangepay" class="tab-pane fade T-transit"> </div>  <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance"> </div>  <div id="financial-count-reimbursement-guide" class="tab-pane fade T-guide"> </div> </div> </div> <div style="height:30px;"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 countReimbursement">\r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">线路：{{tripPlan.lineProductName}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">类别：{{tripPlan.lineProductType}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">针对客源：{{if tripPlan.tripPlanType == 1}}团体{{else if tripPlan.tripPlanType == 0}}散客{{/if}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td style="text-align:left"><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"> <label  style="font-weight: bold;">导游：{{if tripPlan.guideName != null}}{{tripPlan.guideName}}{{/if}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td style="text-align:left"></td>\r\n                <td style="text-align:left"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.adultCount+tripPlan.childCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArranges.listMap.length}}">\r\n    <input type="hidden" name=\'maxDay\' value="{{tripPlan.maxDay}}">\r\n    <input type="hidden" name=\'minDay\' value="{{tripPlan.minDay}}">\r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr >\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.adultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.childCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr >\r\n            <td colspan="2"><label style="font-weight: bold;">收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导服费：<span class="F-float F-money tripCost-guideArrangePrice">{{guideArrange.price}}</span></label></td>\r\n            <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td style="text-align:left"><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td style="text-align:left"><label>导游管理费：<span class="F-float F-money tripIncome-guideManageMoney">{{guideArrange.manageFee}}</span></label></td>\r\n            <td style="text-align:left"></td>\r\n            <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它费用：<span class="F-float F-money F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td style="text-align:left"><label>票务费用{{isOp}}：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" /> \r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n\r\n    <div class="row" style="margin-bottom:15px;">\r\n                <div style="float:left;">  \r\n                <button data-entity-id="{{tripPlan.id}}"  data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-primary btn-transfter T-saveCount" style="margin-left: 20px;">\r\n                    <i class="ace-icon fa fa-save"></i>保存信息\r\n                </button>\r\n                <button data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-success btn-transfter T-fanishAccount" style="margin-left: 20px;">\r\n                    <i class="ace-icon fa fa-check-circle"></i>报账完成\r\n                </button>\r\n            </div>\r\n        <!-- <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>-->\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange" style="margin-left: 20px;">安排预算表</a>\r\n        </div> \r\n    </div>\r\n\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-other-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content financial-count-reimbursement-reimbursement-tab T-list" style="position: relative;top:-2px"> \r\n            <!-- 团款 -->\r\n            <div id="financial-count-reimbursement-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">序号</th>\r\n                            <th class="th-border">客户</th>\r\n                            <th class="th-border">收客信息</th>\r\n                            <th class="th-border">游客信息</th>\r\n                            <th class="th-border">包含自费</th>\r\n                            <th class="th-border">备注</th>\r\n                            <th class="th-border">应收</th>\r\n                            <th class="th-border">社收</th>\r\n                            <th class="th-border">现收</th>\r\n                            <th class="th-border">明细</th>\r\n                            <th class="th-border">是否对账</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-tripDetail">\r\n                    {{if touristGroup.touristGroups.length}}\r\n                        {{each touristGroup.touristGroups as touristGroup index}}\r\n                            <tr id="{{touristGroup.id}}">\r\n                                <td>{{index+1}}</td>\r\n                                <td>{{touristGroup.partnerAgencyName}}</td>\r\n                                <td>{{touristGroup.orderNumber}}</td>\r\n                                <td>\r\n                                    <span>{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</span>\r\n                                    <br/>\r\n                                    <span>{{touristGroup.contactName}}</span>\r\n                                    <br/>\r\n                                    <span>{{touristGroup.mobileNumber}}</span>\r\n                                    <br/>\r\n                                </td>\r\n                                <td>\r\n                                    {{touristGroup.includeSelfPay}}\r\n                                </td>\r\n                                <td>\r\n                                    {{touristGroup.remark}}\r\n                                </td>\r\n                                <td>\r\n                                    <span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n                                </td>\r\n                                <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                                <td>\r\n                                    <div class="inline-flex">\r\n                                        <span>{{touristGroup.guideName}}</span>\r\n                                        <input class="F-float F-money w-80" name="currentNeedPayMoney" value="{{touristGroup.currentNeedPayMoney}}" maxlength="12" {{if touristGroup.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                        &nbsp;&nbsp;\r\n                                        <select name="receiveStatus" {{if touristGroup.isConfirmAccount == 1}}disabled="disabled"{{/if}}>\r\n                                            <option value="0" {{if touristGroup.isReceived == 0}}selected="selected"{{/if}}>未收到</option>\r\n                                            <option value="1" {{if touristGroup.isReceived == 1}}selected="selected"{{/if}}>已收到</option>\r\n                                        </select>\r\n                                    </div>\r\n                                <td>\r\n                                    {{if touristGroup.feeList.length}}\r\n                                    <a href="#" class="T-viewCostDetail">\r\n                                        {{each touristGroup.feeList as touristGroupFee}}\r\n                                            {{touristGroupFee.name}} ：\r\n                                            <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                            <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                        {{/each}}\r\n                                    {{else}}\r\n                                        {{each touristGroup.touristGroupSubFeeList as touristGroupFee}}\r\n                                            {{touristGroupFee.name}} ：\r\n                                            <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                            <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                        {{/each}}\r\n                                    {{/if}}\r\n                                </a>\r\n                                {{if touristGroup.isConfirmAccount == 0}}\r\n                                    <a data-status="0" class="cursor T-addFee R-right" data-right="1190005">[费用调整]</a>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>\r\n                                {{if touristGroup.isConfirmAccount == 0}}\r\n                                    未对账\r\n                                {{else}}\r\n                                    已对账\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                        {{/each}}\r\n                    {{/if}}\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-reimbursement-shop" class="tab-pane fade T-shop-add">\r\n            </div>\r\n\r\n            <!-- 自费 -->\r\n            <div id="financial-count-reimbursement-selfpay" class="tab-pane fade T-self-add">\r\n               \r\n            </div>\r\n\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-reimbursement-other-incoming" class="tab-pane fade T-income">\r\n               \r\n            </div>\r\n\r\n            <!-- 保险 -->\r\n            <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance">\r\n            </div>\r\n            <!-- 车费 -->\r\n            <div id="financial-count-reimbursement-buspay" class="tab-pane fade T-bus">\r\n                \r\n            </div>\r\n\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-reimbursement-restaurantpay" class="tab-pane fade T-restaurant">\r\n               \r\n            </div>\r\n\r\n            <!-- 房费 -->\r\n            <div id="financial-count-reimbursement-hotelpay" class="tab-pane fade T-hotel">\r\n               \r\n            </div>\r\n\r\n            <!-- 景区 -->\r\n            <div id="financial-count-reimbursement-scenicpay" class="tab-pane fade T-scenic">\r\n               \r\n            </div>\r\n\r\n            <!-- 票务 -->\r\n            <div id="financial-count-reimbursement-ticketpay" class="tab-pane fade T-ticket">\r\n                \r\n            </div>\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-reimbursement-otherpay" class="tab-pane fade T-otherOut">\r\n                \r\n            </div>\r\n\r\n            <!-- 中转 -->\r\n            <div id="financial-count-reimbursement-outarrangepay" class="tab-pane fade T-transit">\r\n                \r\n            </div>\r\n             <!-- 保险 -->\r\n            <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance">\r\n            </div>\r\n            <!-- 导游 -->\r\n            <div id="financial-count-reimbursement-guide" class="tab-pane fade T-guide">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});