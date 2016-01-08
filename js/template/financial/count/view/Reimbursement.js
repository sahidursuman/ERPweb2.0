/*TMODJS:{"debug":true,"version":588,"md5":"c5c3f84c4e6ed86a5dfda5506c82bfba"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/Reimbursement", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, busCompanyArrange = $data.busCompanyArrange, touristGroup = $data.touristGroup, guideArrange = $data.guideArrange, insurancePrice = $data.insurancePrice, isOp = $data.isOp, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, financialTripPlanId = $data.financialTripPlanId, $each = $utils.$each, touristGroups = $data.touristGroups, isFinance = ($data.index, 
            $data.touristGroupFee, $data.$index, $data.isFinance), remarkArrangeList = $data.remarkArrangeList, $out = "";
            return $out += '<div class="col-sm-12 countReimbursement"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr style=""> <td><label style="font-weight: bold;">线路：', 
            $line = 5, $out += $escape(tripPlan.lineProduct.name), $out += '</label></td> <td><label style="font-weight: bold;">类别：', 
            $line = 6, $out += $escape(tripPlan.lineProduct.type), $out += '</label></td> <td><label style="font-weight: bold;">应用范围：', 
            $line = 7, 1 == tripPlan.lineProduct.customerType ? ($out += "团体", $line = 7) : 0 == tripPlan.lineProduct.customerType && ($out += "散客", 
            $line = 7), $out += '</label></td> <td><label style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">', 
            $line = 8, $out += $escape(tripPlan.lineProduct.days), $out += '</span></label></td> </tr> <tr> <td><label style="font-weight: bold;">团号：', 
            $line = 11, $out += $escape(tripPlan.tripNumber), $out += '</label></td> <td><label style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">', 
            $line = 12, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span></label></td> <td><label style="font-weight: bold;">完团日期：', $line = 13, 
            $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), $out += '</label></td> <td><label style="font-weight: bold;">团队人数：', 
            $line = 14, $out += $escape(tripPlan.touristAdultCount), $out += "大", $line = 14, 
            $out += $escape(tripPlan.touristChildCount), $out += '小</label></td> </tr> <tr> <td> <label style="font-weight: bold;">导游：', 
            $line = 17, null != tripPlan.guide && ($line = 17, $out += $escape(tripPlan.guide.realname), 
            $line = 17), $out += '</label></td> <td><label style="font-weight: bold;">全陪：', 
            $line = 18, $out += $escape(tripPlan.accompanyGuideName), $out += '</label></td> <td></td> <td></td> </tr> </tbody> </table> <input type="hidden" name="totalPersonCount" value="', 
            $line = 24, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
            $out += '"/> <input type="hidden" name=\'busNumber\' class="busNumber" value="', 
            $line = 25, $out += $escape(busCompanyArrange.length), $out += '"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr > <td colspan="8"> <div style="float: left;margin-left:10px;"> <input type="hidden" class="financial-tripPlanId" value="', 
            $line = 32, $out += $escape(tripPlan.id), $out += '" /> <input type="hidden" class="tripPlanAdultCount" value="', 
            $line = 33, $out += $escape(tripPlan.touristAdultCount), $out += '" /> <input type="hidden" class="tripPlanChildCount" value="', 
            $line = 34, $out += $escape(tripPlan.touristChildCount), $out += '" /> <input type="hidden" class="tripPlanStartTime" value="', 
            $line = 35, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="guideAllPreMoney">', 
            $line = 39, $out += $escape(tripPlan.guideAllPreMoney), $out += '</span></label> </div></td> </tr> <tr > <td colspan="2"><label style="font-weight: bold;">收入：<span class="tripIncome">0</span></label></td> <td colspan="4"><label style="font-weight: bold;">团成本：<span class="tripCost">0</span></label></td> <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="tripTransitCost">0</span></label></td> </tr> <tr> <td><label>应收团款：<span class="tripIncome-getAllMoney">', 
            $line = 49, $out += $escape(touristGroup.needPayAllMoney), $out += '</span></label></td> <td><label>自费返佣：<span class="tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td> <td><label>导服费：<span class="tripCost-guideArrangePrice">', 
            $line = 51, $out += $escape(guideArrange.price), $out += '</span></label></td> <td><label>保险：<span class="tripCost-insuranceArrangeNeedPayMoney">', 
            $line = 52, $out += $escape(insurancePrice), $out += '</span></label></td> <td><label>车费：<span class="tripCost-busCompanyNeedPayMoney">0</span></label></td> <td><label>导游购物返佣：<span class="tripCost-guideshopFee">', 
            $line = 54, $out += $escape(guideArrange.manageFee), $out += '</span></label></td> <td><label>车费：<span class="tripTransitCost-busCompanyNeedPayMoney">', 
            $line = 55, $out += $escape(touristGroup.outBusMoney), $out += '</span></label></td> <td><label>餐食费用：<span class="tripTransitCost-outRestaurantMoney">', 
            $line = 56, $out += $escape(touristGroup.outRestaurantMoney), $out += '</span></label></td> </tr> <tr> <td><label>购物返佣：<span class="tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td><label>其它收入：<span class="tripIncome-otherInCome">0</span></label></td> <td><label>餐费：<span class="tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td><label>房费：<span class="tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td><label>景区费用：<span class="tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td><label>导游自费返佣：<span class="tripCost-guideSelfMoney">', 
            $line = 64, $out += $escape(touristGroup.outBusMoney), $out += '</span></label></td> <td><label>房费：<span class="tripTransitCost-hotelArrangeNeedPayMoney">', 
            $line = 65, $out += $escape(touristGroup.outHotelMoney), $out += '</span></label></td> <td><label>其它费用：<span class="tripTransitCost-outOtherMoney">', 
            $line = 66, $out += $escape(touristGroup.outOtherMoney), $out += '</span></label></td> </tr> <tr> <td><label>导游管理费：<span class="tripIncome-guideManageMoney">', 
            $line = 69, $out += $escape(guideArrange.manageFee), $out += '</span></label></td> <td></td> <td><label>票务费用：<span class="tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td><label>其它费用：<span class="tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td><label>自费费用：<span class="tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td><label style="display: none;">地接费用：<span class="tripCost-groundArrangeNeedPayMoney"></span></label></td> <td><label>票务费用', 
            $line = 75, $out += $escape(isOp), $out += '：<span class="tripTransitCost-ticketArrangeNeedPayMoney">', 
            $line = 75, $out += $escape(touristGroup.outTicketMoney), $out += '</span></label></td> <td></td> </tr> </tbody> </table> <input type="hidden" value="', 
            $line = 80, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 81, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="row" style="margin-bottom:15px;"> <div style="float:left;"> <button data-entity-id="', 
            $line = 85, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 85, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-primary btn-transfter T-saveCount" style="margin-left: 20px;"> <i class="ace-icon fa fa-save"></i>保存信息 </button> <button data-entity-id="', 
            $line = 88, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 88, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-success btn-transfter T-fanishAccount" style="margin-left: 20px;"> <i class="ace-icon fa fa-check-circle"></i>报账完成 </button> </div>  <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripPlanArrange" style="margin-left: 20px;">安排预算表</a> </div> </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-other-incoming" aria-expanded="true">其它收入</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-other-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-otherpay" aria-expanded="true">其它支出</a> </li> ', 
            $line = 135, null != touristGroup && ($out += ' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-outarrangepay" aria-expanded="true">中转</a> </li> ', 
            $line = 139), $out += ' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-reimbursement-guide" aria-expanded="true">导游</a> </li> </ul> <div class="tab-content financial-count-reimbursement-reimbursement-tab T-list" style="position: relative;top:-2px">  <div id="financial-count-reimbursement-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <tbody class="T-tripDetail"> <tr> <td>序号</td> <td>来源</td> <td>小组联系人</td> <td>联系电话</td> <td>人数</td> <td>应收</td> <td>已收</td> <td>现收</td> <td>明细</td> ', 
            $line = 159, $each(touristGroups, function(touristGroup, index) {
                $out += " <tr> <td>", $line = 161, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 162, touristGroup.partnerAgency && ($line = 162, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 162), $out += "</td> <td>", $line = 163, null != touristGroup.touristGroupMember && ($line = 163, 
                $out += $escape(touristGroup.touristGroupMember.name), $line = 163), $out += "</td> <td>", 
                $line = 164, null != touristGroup.touristGroupMember && ($line = 164, $out += $escape(touristGroup.touristGroupMember.mobileNumber), 
                $line = 164), $out += "</td> <td>", $line = 165, $out += $escape(touristGroup.adultCount), 
                $out += "大", $line = 165, $out += $escape(touristGroup.childCount), $out += "小</td> <td>", 
                $line = 166, $out += $escape(touristGroup.needPayAllMoney), $out += "</td> <td>", 
                $line = 167, $out += $escape(touristGroup.payedMoney), $out += "</td> <td>", $line = 168, 
                $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td> ", $line = 170, 
                touristGroup.touristGroupFeeList.length > 0 && ($out += " ", $line = 171, $each(touristGroup.touristGroupFeeList, function(touristGroupFee) {
                    $out += " ", $line = 172, $out += $escape(touristGroupFee.describeInfo), $out += " ：", 
                    $line = 172, $out += $escape(touristGroupFee.price), $out += "&nbsp;X&nbsp;", $line = 172, 
                    $out += $escape(touristGroupFee.count), $out += "=", $line = 172, $out += $escape(touristGroupFee.price * touristGroupFee.count), 
                    $out += "<br /> ", $line = 173;
                }), $out += " ", $line = 174), $out += " </td> </tr> ", $line = 177;
            }), $out += " </tbody> </table> ", $line = 181, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ', 
            $line = 184, 1 == tripPlan.billStatus && isFinance || ($out += 'readonly="readonly"', 
            $line = 184), $out += ' type="text" style="width:30%;" value="', $line = 184, null != remarkArrangeList[0] && ($line = 184, 
            $out += $escape(remarkArrangeList[0].opCheckRemark), $line = 184), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ', 
            $line = 187, 0 == tripPlan.billStatus && isOp || ($out += 'readonly="readonly"', 
            $line = 187), $out += ' type="text" style="width:30%;" value="', $line = 187, null != remarkArrangeList[0] && ($line = 187, 
            $out += $escape(remarkArrangeList[0].financeCheckRemark), $line = 187), $out += '" /> </div> </div>', 
            $line = 189), $out += ' </div>  <div id="financial-count-reimbursement-shop" class="tab-pane fade T-shop-add"> </div>  <div id="financial-count-reimbursement-selfpay" class="tab-pane fade T-self-add"> </div>  <div id="financial-count-reimbursement-other-incoming" class="tab-pane fade T-income"> </div>  <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance"> </div>  <div id="financial-count-reimbursement-buspay" class="tab-pane fade T-bus"> </div>  <div id="financial-count-reimbursement-restaurantpay" class="tab-pane fade T-restaurant"> </div>  <div id="financial-count-reimbursement-hotelpay" class="tab-pane fade T-hotel"> </div>  <div id="financial-count-reimbursement-scenicpay" class="tab-pane fade T-scenic"> </div>  <div id="financial-count-reimbursement-ticketpay" class="tab-pane fade T-ticket"> </div>  <div id="financial-count-reimbursement-otherpay" class="tab-pane fade T-otherOut"> </div> ', 
            $line = 240, null != touristGroup && ($out += '  <div id="financial-count-reimbursement-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">来源</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">小车</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ', 
            $line = 258, $each(touristGroup.touristGroupList, function(touristGroup, index) {
                $out += " <tr> <td>", $line = 260, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 261, $out += $escape(touristGroup.partnerAgencyName), $out += "</td> <td>", 
                $line = 262, $out += $escape(touristGroup.name), $out += "</td> <td>", $line = 263, 
                $out += $escape(touristGroup.mobileNumber), $out += "</td> <td>", $line = 264, $out += $escape(touristGroup.adultCount), 
                $out += "大", $line = 264, $out += $escape(touristGroup.childCount), $out += "小</td> <td>", 
                $line = 265, $out += $escape(touristGroup.arriveService), $out += "</td> <td>", 
                $line = 266, $out += $escape(touristGroup.busService), $out += "</td> <td>", $line = 267, 
                $out += $escape(touristGroup.leaveService), $out += '</td> <td><a href="javascript:void(0);" data-entity-id="', 
                $line = 268, $out += $escape(touristGroup.id), $out += '" class="T-viewTripTransit">查看</a></td> </tr> ', 
                $line = 270;
            }), $out += " </tbody> </table> ", $line = 274, tripPlan.billStatus > -1 && ($out += ' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="', 
            $line = 278, null != remarkArrangeList[10] && ($line = 278, $out += $escape(remarkArrangeList[10].opCheckRemark), 
            $line = 278), $out += '" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="', 
            $line = 280, null != remarkArrangeList[10] && ($line = 280, $out += $escape(remarkArrangeList[10].financeCheckRemark), 
            $line = 280), $out += '" /> </div> </div>', $line = 282), $out += " </div> ", $line = 284), 
            $out += '  <div id="financial-count-reimbursement-guide" class="tab-pane fade T-guide"> </div> </div> </div> <div style="height:30px;"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 countReimbursement">\r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr style="">\r\n                <td><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td><label  style="font-weight: bold;">应用范围：{{if tripPlan.lineProduct.customerType == 1}}团体{{else if tripPlan.lineProduct.customerType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n  \r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr >\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr >\r\n            <td colspan="2"><label style="font-weight: bold;">收入：<span class="tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td><label>应收团款：<span class="tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td><label>自费返佣：<span class="tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td><label>导服费：<span class="tripCost-guideArrangePrice">{{guideArrange.price}}</span></label></td>\r\n            <td><label>保险：<span class="tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td><label>车费：<span class="tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td><label>导游购物返佣：<span class="tripCost-guideshopFee">{{guideArrange.manageFee}}</span></label></td>\r\n            <td><label>车费：<span class="tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>餐食费用：<span class="tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td><label>购物返佣：<span class="tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td><label>其它收入：<span class="tripIncome-otherInCome">0</span></label></td>\r\n            <td><label>餐费：<span class="tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>房费：<span class="tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>景区费用：<span class="tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>导游自费返佣：<span class="tripCost-guideSelfMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>房费：<span class="tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td><label>其它费用：<span class="tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>导游管理费：<span class="tripIncome-guideManageMoney">{{guideArrange.manageFee}}</span></label></td>\r\n            <td></td>\r\n            <td><label>票务费用：<span class="tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>其它费用：<span class="tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>自费费用：<span class="tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label style="display: none;">地接费用：<span class="tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td><label>票务费用{{isOp}}：<span class="tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" /> \r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n\r\n    <div class="row" style="margin-bottom:15px;">\r\n                <div style="float:left;">  \r\n                <button data-entity-id="{{tripPlan.id}}"  data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-primary btn-transfter T-saveCount" style="margin-left: 20px;">\r\n                    <i class="ace-icon fa fa-save"></i>保存信息\r\n                </button>\r\n                <button data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-success btn-transfter T-fanishAccount" style="margin-left: 20px;">\r\n                    <i class="ace-icon fa fa-check-circle"></i>报账完成\r\n                </button>\r\n            </div>\r\n        <!-- <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>-->\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange" style="margin-left: 20px;">安排预算表</a>\r\n        </div> \r\n    </div>\r\n\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-other-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-reimbursement-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content financial-count-reimbursement-reimbursement-tab T-list" style="position: relative;top:-2px"> \r\n            <!-- 团款 -->\r\n            <div id="financial-count-reimbursement-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>来源</td>\r\n                        <td>小组联系人</td>\r\n                        <td>联系电话</td>\r\n                        <td>人数</td>\r\n                        <td>应收</td>\r\n                        <td>已收</td>\r\n                        <td>现收</td>\r\n                        <td>明细</td>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                            <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                            <td>{{touristGroup.needPayAllMoney}}</td>\r\n                            <td>{{touristGroup.payedMoney}}</td>\r\n                            <td>{{touristGroup.currentNeedPayMoney}}</td>\r\n                            <td>\r\n                                {{if touristGroup.touristGroupFeeList.length > 0}}\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.describeInfo}} ：{{touristGroupFee.price}}&nbsp;X&nbsp;{{touristGroupFee.count}}={{touristGroupFee.price * touristGroupFee.count}}<br />\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[0] != null}}{{remarkArrangeList[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[0] != null}}{{remarkArrangeList[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-reimbursement-shop" class="tab-pane fade T-shop-add">\r\n            </div>\r\n\r\n            <!-- 自费 -->\r\n            <div id="financial-count-reimbursement-selfpay" class="tab-pane fade T-self-add">\r\n               \r\n            </div>\r\n\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-reimbursement-other-incoming" class="tab-pane fade T-income">\r\n               \r\n            </div>\r\n\r\n            <!-- 保险 -->\r\n            <div id="financial-count-reimbursement-other-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                \r\n            </div>\r\n            <!-- 车费 -->\r\n            <div id="financial-count-reimbursement-buspay" class="tab-pane fade T-bus">\r\n                \r\n            </div>\r\n\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-reimbursement-restaurantpay" class="tab-pane fade T-restaurant">\r\n               \r\n            </div>\r\n\r\n            <!-- 房费 -->\r\n            <div id="financial-count-reimbursement-hotelpay" class="tab-pane fade T-hotel">\r\n               \r\n            </div>\r\n\r\n            <!-- 景区 -->\r\n            <div id="financial-count-reimbursement-scenicpay" class="tab-pane fade T-scenic">\r\n               \r\n            </div>\r\n\r\n            <!-- 票务 -->\r\n            <div id="financial-count-reimbursement-ticketpay" class="tab-pane fade T-ticket">\r\n                \r\n            </div>\r\n\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-reimbursement-otherpay" class="tab-pane fade T-otherOut">\r\n                \r\n            </div>\r\n\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-reimbursement-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">来源</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">小车</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.busService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[10] != null}}{{remarkArrangeList[10].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[10] != null}}{{remarkArrangeList[10].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n            <!-- 导游 -->\r\n            <div id="financial-count-reimbursement-guide" class="tab-pane fade T-guide">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});