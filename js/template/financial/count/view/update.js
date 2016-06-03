/*TMODJS:{"debug":true,"version":1529,"md5":"dcc7fbaf3991a939c693217e486274b7"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, busCompanyArranges = $data.busCompanyArranges, touristGroup = $data.touristGroup, isOp = $data.isOp, financialTripPlanId = $data.financialTripPlanId, isFinance = $data.isFinance, $out = "";
            return $out += '<div class="col-sm-12 countUpdate"> <h5 class="base-title">线路信息 <a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a> </h5> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 10px;"> <tbody> <tr> <td style="text-align:left"><label style="font-weight: bold;">线路：', 
            $line = 8, $out += $escape(tripPlan.lineProductName), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">类别：', 
            $line = 9, $out += $escape(tripPlan.lineProductType), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">针对客源：', 
            $line = 10, 1 == tripPlan.tripPlanType ? ($out += "团体", $line = 10) : 0 == tripPlan.tripPlanType && ($out += "散客", 
            $line = 10), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">', 
            $line = 11, $out += $escape(tripPlan.days), $out += '</span></label></td> </tr> <tr> <td style="text-align:left"><label style="font-weight: bold;">团号：', 
            $line = 14, $out += $escape(tripPlan.tripNumber), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">', 
            $line = 15, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span></label></td> <td style="text-align:left"><label style="font-weight: bold;">完团日期：', 
            $line = 16, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">团队人数：', 
            $line = 17, $out += $escape(tripPlan.adultCount), $out += "大", $line = 17, $out += $escape(tripPlan.childCount), 
            $out += '小</label></td> </tr> <tr> <td style="text-align:left"> <label style="font-weight: bold;">导游：', 
            $line = 20, null != tripPlan.guideName && ($line = 20, $out += $escape(tripPlan.guideName), 
            $line = 20), $out += '</label></td> <td style="text-align:left"><label style="font-weight: bold;">全陪：', 
            $line = 21, $out += $escape(tripPlan.accompanyGuideName), $out += '</label></td> <td style="text-align:left"></td> <td style="text-align:left"></td> </tr> </tbody> </table> <input type="hidden" name="totalPersonCount" value="', 
            $line = 27, $out += $escape(tripPlan.adultCount), $out += '"/> <input type="hidden" name=\'busNumber\' class="busNumber" value="', 
            $line = 28, $out += $escape(busCompanyArranges.listMap.length), $out += '"> <input type="hidden" name=\'maxDay\' value="', 
            $line = 29, $out += $escape(tripPlan.maxDay), $out += '"> <input type="hidden" name=\'minDay\' value="', 
            $line = 30, $out += $escape(tripPlan.minDay), $out += '"> <div class="col-sm-12 " style="margin: 20px 0px 20px 0px;display: none;"> billStatus:', 
            $line = 32, "-1" == tripPlan.billStatus ? ($out += "待报账", $line = 32) : "0" == tripPlan.billStatus ? ($out += "待审核（就是已报账）", 
            $line = 32) : "1" == tripPlan.billStatus ? ($out += "计调已审", $line = 32) : "2" == tripPlan.billStatus && ($out += "财务已审", 
            $line = 32), $out += ' <br /> </div> <h5 class="base-title">计费信息 <a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a> </h5> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 5px;"> <tbody> <tr > <td colspan="7"> <div style="float: left;margin-left:10px;"> <input type="hidden" class="financial-tripPlanId" value="', 
            $line = 43, $out += $escape(tripPlan.id), $out += '" /> <input type="hidden" class="tripPlanAdultCount" value="', 
            $line = 44, $out += $escape(tripPlan.adultCount), $out += '" /> <input type="hidden" class="tripPlanChildCount" value="', 
            $line = 45, $out += $escape(tripPlan.childCount), $out += '" /> <input type="hidden" class="tripPlanStartTime" value="', 
            $line = 46, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额： <span class="F-float F-money">', 
            $line = 50, $out += $escape(tripPlan.guideAllPreMoney), $out += '</span> </label> </div></td> </tr> <tr > <td colspan="2"><label style="font-weight: bold;">收入：<span class="F-float F-money tripIncome">0</span></label></td> <td colspan="5"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td> </tr> <tr> <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">', 
            $line = 60, $out += $escape(touristGroup.sumNeedPayAllMoney), $out += '</span></label></td> <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfIcomeMoney">0</span></label></td> <td style="text-align:left"><label>导服费：<span class="F-float F-money tripCost-guideArrangePrice">0</span></label></td> <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td> <td style="text-align:left"><label>全陪购物返佣：<span class="F-float F-money quanpei-shopFee">0</span></label></td> </tr> <tr> <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopIncomeMoney">0</span></label></td> <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td> <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td> <td style="text-align:left"><label>全陪自费返佣：<span class="F-float F-money tripCostQuanpei-SelfFee">0</span></label></td> </tr> <tr> <td style="text-align:left"><label>导游管理费：<span class="F-float F-money tripIncome-guideManageMoney">0</span></label></td> <td style="text-align:left"></td> <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>其它费用：<span class="F-float F-money F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游结算扣款：<span class="F-float F-money tripCost-guidePunishMoney">0</span></label></td> <td style="text-align:left"></td> </tr> </tbody> </table> <div class="row" style="margin-bottom:15px;"> ', 
            $line = 89, isOp && 0 == tripPlan.billStatus ? ($out += ' <div style="float:left;"> <button data-entity-id="', 
            $line = 91, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 91, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;"> <i class="ace-icon fa fa-save"></i>保存信息 </button> <button data-entity-billStatus="', 
            $line = 94, $out += $escape(tripPlan.billStatus), $out += '" data-entity-id="', 
            $line = 94, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 94, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-success btn-transfter btn-accountCheck T-accountCheck" style="margin-left: 15px;"> <i class="ace-icon fa fa-check-circle"></i>审核通过 </button> <button data-entity-billStatus="', 
            $line = 97, $out += $escape(tripPlan.billStatus), $out += '" data-entity-id="', 
            $line = 97, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 97, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-danger btn-transfter T-rebackGuide T-closebtn" style="margin-left: 15px;"> <i class="ace-icon fa fa-mail-reply"></i>退回导游 </button> </div> ', 
            $line = 101) : isFinance && 1 == tripPlan.billStatus ? ($out += ' <div style="float:left;"> <button data-entity-id="', 
            $line = 103, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 103, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;"> <i class="ace-icon fa fa-save"></i>保存信息 </button> <button data-entity-billStatus="', 
            $line = 106, $out += $escape(tripPlan.billStatus), $out += '" data-entity-id="', 
            $line = 106, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 106, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-success btn-transfter T-accountCheck T-closebtn" style="margin-left: 15px;"> <i class="ace-icon fa fa-check-circle"></i>审核通过 </button> <button data-entity-billStatus="', 
            $line = 109, $out += $escape(tripPlan.billStatus), $out += '" data-entity-id="', 
            $line = 109, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 109, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-danger btn-transfter btn-rebackOP T-rebackOP" style="margin-left: 15px;"> <i class="ace-icon fa fa-mail-reply"></i>退回计调 </button> </div> ', 
            $line = 113) : isFinance && 2 == tripPlan.billStatus && ($out += ' <div style="float:left;"> <button data-entity-id="', 
            $line = 115, $out += $escape(tripPlan.id), $out += '" data-entity-financial-id="', 
            $line = 115, $out += $escape(financialTripPlanId), $out += '" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;"> <i class="ace-icon fa fa-save"></i>保存信息 </button> </div> ', 
            $line = 119), $out += ' <input name="financialTripPlanId" value="', $line = 120, 
            $out += $escape(financialTripPlanId), $out += '" type="hidden"> <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="btn-financialLog">操作记录</a> </div> <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a> </div> <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-guideAccount">导游报账表</a> </div> <div style="margin-top:5px;float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripAccount">单团核算表</a> </div> ', 
            $line = 133, isFinance && tripPlan.billStatus > 0 && ($out += ' <div style="margin-top:5px;float:left;margin-left:30px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-edit" ', 
            $line = 136, 1 == tripPlan.isEdit && ($out += 'checked="checked"', $line = 136), 
            $out += '/> <span class="lbl"> 财务审核后不可修改数据</span> </label> </div> ', $line = 140), 
            $out += ' </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-other-incoming" aria-expanded="true">其它收入</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-otherpay" aria-expanded="true">其它支出</a> </li> ', 
            $line = 176, null != touristGroup && ($out += ' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-other-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-update-guide" aria-expanded="true">导游</a> </li> ', 
            $line = 184), $out += ' </ul> <div class="tab-content financial-count-update-update-tab T-list" style="position:relative;top:-2px">  <div id="financial-count-update-money" class="tab-pane fade active in T-tripCost"> </div>  <div id="financial-count-update-shop" class="tab-pane fade T-shop-add"> </div>  <div id="financial-count-update-selfpay" class="tab-pane fade T-self-add"> </div>  <div id="financial-count-update-other-incoming" class="tab-pane fade T-income"> </div>  <div id="financial-count-update-buspay" class="tab-pane fade T-bus"> </div>  <div id="financial-count-update-restaurantpay" class="tab-pane fade T-restaurant"> </div>  <div id="financial-count-update-hotelpay" class="tab-pane fade T-hotel"> </div>  <div id="financial-count-update-scenicpay" class="tab-pane fade T-scenic"> </div>  <div id="financial-count-update-ticketpay" class="tab-pane fade T-ticket"> </div>  <div id="financial-count-update-otherpay" class="tab-pane fade T-otherOut"> </div>  <div id="financial-count-update-other-insurance" class="tab-pane fade T-insurance"> </div>  <div id="financial-count-update-guide" class="tab-pane fade T-guide"> </div> </div> </div> <div style="height:30px;"></div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 countUpdate">\r\n    <h5 class="base-title">线路信息\r\n    <a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a>\r\n    </h5>\r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 10px;">\r\n         <tbody>\r\n            <tr>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">线路：{{tripPlan.lineProductName}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">类别：{{tripPlan.lineProductType}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">针对客源：{{if tripPlan.tripPlanType == 1}}团体{{else if tripPlan.tripPlanType == 0}}散客{{/if}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td style="text-align:left"><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">团队人数：{{tripPlan.adultCount}}大{{tripPlan.childCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"> <label  style="font-weight: bold;">导游：{{if tripPlan.guideName != null}}{{tripPlan.guideName}}{{/if}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td style="text-align:left"></td>\r\n                <td style="text-align:left"></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.adultCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArranges.listMap.length}}">\r\n    <input type="hidden" name=\'maxDay\' value="{{tripPlan.maxDay}}">\r\n    <input type="hidden" name=\'minDay\' value="{{tripPlan.minDay}}">\r\n    <div class="col-sm-12 " style="margin: 20px 0px 20px 0px;display: none;">\r\n        billStatus:{{if tripPlan.billStatus == \'-1\'}}待报账{{else if tripPlan.billStatus == \'0\'}}待审核（就是已报账）{{else if tripPlan.billStatus == \'1\'}}计调已审{{else if tripPlan.billStatus == \'2\'}}财务已审{{/if}}\r\n        <br />\r\n    </div>\r\n    <h5 class="base-title">计费信息\r\n    <a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a>\r\n    </h5>\r\n    <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 5px;">\r\n        <tbody>\r\n        <tr >\r\n            <td colspan="7">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.adultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.childCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：\r\n                    <span class="F-float F-money">{{tripPlan.guideAllPreMoney}}</span>\r\n                </label>\r\n            </div></td> \r\n        </tr>\r\n        <tr >\r\n            <td colspan="2"><label style="font-weight: bold;">收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="5"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.sumNeedPayAllMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfIcomeMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导服费：<span class="F-float F-money tripCost-guideArrangePrice">0</span></label></td>\r\n            <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td style="text-align:left"><label>全陪购物返佣：<span class="F-float F-money quanpei-shopFee">0</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopIncomeMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>全陪自费返佣：<span class="F-float F-money tripCostQuanpei-SelfFee">0</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td style="text-align:left"><label>导游管理费：<span class="F-float F-money tripIncome-guideManageMoney">0</span></label></td>\r\n            <td style="text-align:left"></td>\r\n            <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它费用：<span class="F-float F-money F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游结算扣款：<span class="F-float F-money tripCost-guidePunishMoney">0</span></label></td>\r\n            <td style="text-align:left"></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <div class="row" style="margin-bottom:15px;">\r\n        {{if isOp && tripPlan.billStatus == 0}}\r\n            <div style="float:left;">\r\n                <button data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-save"></i>保存信息\r\n                </button>\r\n                <button data-entity-billStatus="{{tripPlan.billStatus}}"   data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-success btn-transfter btn-accountCheck T-accountCheck" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-check-circle"></i>审核通过\r\n                </button>\r\n                 <button data-entity-billStatus="{{tripPlan.billStatus}}" data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-danger btn-transfter T-rebackGuide T-closebtn" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-mail-reply"></i>退回导游\r\n                </button>\r\n            </div>\r\n        {{else if isFinance && tripPlan.billStatus == 1 }}\r\n            <div style="float:left;">\r\n                <button data-entity-id="{{tripPlan.id}}"   data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-save"></i>保存信息\r\n                </button>\r\n                <button data-entity-billStatus="{{tripPlan.billStatus}}"   data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-success btn-transfter T-accountCheck T-closebtn" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-check-circle"></i>审核通过\r\n                </button>\r\n                <button data-entity-billStatus="{{tripPlan.billStatus}}" data-entity-id="{{tripPlan.id}}" data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-danger btn-transfter btn-rebackOP T-rebackOP" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-mail-reply"></i>退回计调\r\n                </button>\r\n            </div>\r\n        {{else if isFinance && tripPlan.billStatus == 2}}\r\n            <div style="float:left;">\r\n                <button data-entity-id="{{tripPlan.id}}"   data-entity-financial-id="{{financialTripPlanId}}" class="btn btn-xs btn-primary btn-transfter btn-saveCount" style="margin-left: 15px;">\r\n                    <i class="ace-icon fa fa-save"></i>保存信息\r\n                </button>\r\n            </div>\r\n        {{/if}}           \r\n        <input name="financialTripPlanId" value="{{financialTripPlanId}}" type="hidden">\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-guideAccount">导游报账表</a>\r\n        </div>\r\n        <div style="margin-top:5px;float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-tripAccount">单团核算表</a>\r\n        </div>\r\n        {{if isFinance && tripPlan.billStatus > 0}}\r\n        <div style="margin-top:5px;float:left;margin-left:30px;">\r\n            <label class="pos-rel">\r\n                <input type="checkbox" class="ace T-edit" {{if tripPlan.isEdit == 1}}checked="checked"{{/if}}/> \r\n                <span class="lbl"> 财务审核后不可修改数据</span>\r\n            </label>\r\n        </div>\r\n        {{/if}}\r\n    </div>\r\n\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n           \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;"> \r\n                <a data-toggle="tab" href="#financial-count-update-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}            \r\n             <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-other-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-update-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n            {{/if}}\r\n        </ul>\r\n        <div class="tab-content financial-count-update-update-tab T-list" style="position:relative;top:-2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-update-money" class="tab-pane fade active in T-tripCost">\r\n            </div>\r\n\r\n            <!-- 购物 -->\r\n            <div id="financial-count-update-shop" class="tab-pane fade T-shop-add">\r\n                \r\n            </div>\r\n\r\n            <!-- 自费 -->\r\n            <div id="financial-count-update-selfpay" class="tab-pane fade T-self-add">\r\n            </div>\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-update-other-incoming" class="tab-pane fade T-income">\r\n                \r\n            </div>\r\n            \r\n            <!-- 车费 -->\r\n            <div id="financial-count-update-buspay" class="tab-pane fade T-bus">\r\n                \r\n            </div>\r\n\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-update-restaurantpay" class="tab-pane fade T-restaurant">\r\n                \r\n            </div>\r\n\r\n            <!-- 房费 -->\r\n            <div id="financial-count-update-hotelpay" class="tab-pane fade T-hotel">\r\n            </div>\r\n\r\n            <!-- 景区 -->\r\n            <div id="financial-count-update-scenicpay" class="tab-pane fade T-scenic">\r\n                \r\n            </div>\r\n\r\n            <!-- 票务 -->\r\n            <div id="financial-count-update-ticketpay" class="tab-pane fade T-ticket">\r\n                \r\n            </div>\r\n\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-update-otherpay" class="tab-pane fade T-otherOut">\r\n                \r\n            </div>\r\n\r\n            <!-- 保险 -->\r\n            <div id="financial-count-update-other-insurance" class="tab-pane fade T-insurance">\r\n            </div>\r\n\r\n            <!-- 导游 -->\r\n            <div id="financial-count-update-guide" class="tab-pane fade T-guide">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div style="height:30px;"></div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});