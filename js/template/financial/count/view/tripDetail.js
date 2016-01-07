/*TMODJS:{"debug":true,"version":758,"md5":"17ecc2815ce530b688142f05b7eeb090"}*/
define(function(require){return require('../../../template')('financial/count/view/tripDetail', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,tripPlan=$data.tripPlan,busCompanyArrange=$data.busCompanyArrange,touristGroup=$data.touristGroup,guideArrange=$data.guideArrange,insurancePrice=$data.insurancePrice,isOp=$data.isOp,WEB_IMG_URL_BIG=$data.WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL=$data.WEB_IMG_URL_SMALL,$each=$utils.$each,touristGroups=$data.touristGroups,index=$data.index,touristGroupFee=$data.touristGroupFee,$index=$data.$index,isFinance=$data.isFinance,remarkArrangeList=$data.remarkArrangeList,dayList=$data.dayList,day=$data.day,shopArrangeList=$data.shopArrangeList,arrange=$data.arrange,arrangeList=$data.arrangeList,arrangeIncomePaymentList=$data.arrangeIncomePaymentList,otherInCome=$data.otherInCome,insuranceArrangeList=$data.insuranceArrangeList,insuranceArrange=$data.insuranceArrange,busCompany=$data.busCompany,ticketArrangeList=$data.ticketArrangeList,ticketArrange=$data.ticketArrange,$out='';$out+='<div class="col-sm-12 financialTripDetail"> <div> <button data-entity-id="';
$line=3;$out+=$escape(tripPlan.id);
$out+='" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;"> <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格 </button> </div> <div class="col-xs-12 border"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr style=""> <td><label style="font-weight: bold;">线路：';
$line=11;$out+=$escape(tripPlan.lineProduct.name);
$out+='</label></td> <td><label style="font-weight: bold;">类别：';
$line=12;$out+=$escape(tripPlan.lineProduct.type);
$out+='</label></td> <td><label style="font-weight: bold;">应用范围：';
$line=13;if(tripPlan.lineProduct.customerType == 1){
$out+='团体';
$line=13;}else if(tripPlan.lineProduct.customerType == 0){
$out+='散客';
$line=13;}
$out+='</label></td> <td><label style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">';
$line=14;$out+=$escape(tripPlan.lineProduct.days);
$out+='</span></label></td> </tr> <tr> <td><label style="font-weight: bold;">团号：';
$line=17;$out+=$escape(tripPlan.tripNumber);
$out+='</label></td> <td><label style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">';
$line=18;$out+=$escape($helpers. dateFormat(tripPlan.startTime , 'yyyy-MM-dd'));
$out+='</span></label></td> <td><label style="font-weight: bold;">完团日期：';
$line=19;$out+=$escape($helpers. dateFormat(tripPlan.endTime , 'yyyy-MM-dd'));
$out+='</label></td> <td><label style="font-weight: bold;">团队人数：';
$line=20;$out+=$escape(tripPlan.touristAdultCount);
$out+='大';
$line=20;$out+=$escape(tripPlan.touristChildCount);
$out+='小</label></td> </tr> <tr> <td> <label style="font-weight: bold;">导游：';
$line=23;if(tripPlan.guide != null){
$line=23;$out+=$escape(tripPlan.guide.realname);
$line=23;}
$out+='</label></td> <td><label style="font-weight: bold;">全陪：';
$line=24;$out+=$escape(tripPlan.accompanyGuideName);
$out+='</label></td> <td></td> <td></td> </tr> </tbody> </table> <input type="hidden" name="totalPersonCount" value="';
$line=30;$out+=$escape(tripPlan.touristAdultCount+tripPlan.touristChildCount);
$out+='"/> <input type="hidden" name=\'busNumber\' class="busNumber" value="';
$line=31;$out+=$escape(busCompanyArrange.length);
$out+='"> </div> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;"> <tbody> <tr class="T-mainTitle"> <td colspan="8"> <div style="float: left;margin-left:10px;"> <input type="hidden" class="financial-tripPlanId" value="';
$line=39;$out+=$escape(tripPlan.id);
$out+='" /> <input type="hidden" class="tripPlanAdultCount" value="';
$line=40;$out+=$escape(tripPlan.touristAdultCount);
$out+='" /> <input type="hidden" class="tripPlanChildCount" value="';
$line=41;$out+=$escape(tripPlan.touristChildCount);
$out+='" /> <input type="hidden" class="tripPlanStartTime" value="';
$line=42;$out+=$escape($helpers. dateFormat(tripPlan.startTime , 'yyyy-MM-dd'));
$out+='" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="guideAllPreMoney">';
$line=46;$out+=$escape(tripPlan.guideAllPreMoney);
$out+='</span></label> </div></td> </tr> <tr class="T-title"> <td colspan="2"><label style="font-weight: bold;">团收入：<span class="tripIncome">0</span></label></td> <td colspan="4"><label style="font-weight: bold;">团成本：<span class="tripCost">0</span></label></td> <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="tripTransitCost">0</span></label></td> </tr> <tr > <td><label>应收团款：<span class="tripIncome-getAllMoney">';
$line=56;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span></label></td> <td><label>自费返佣：<span class="tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td> <td><label>导服费：<span class="tripCost-guideArrangePrice">';
$line=58;$out+=$escape(guideArrange.price);
$out+='</span></label></td> <td><label>保险：<span class="tripCost-insuranceArrangeNeedPayMoney">';
$line=59;$out+=$escape(insurancePrice);
$out+='</span></label></td> <td><label>车费：<span class="tripCost-busCompanyNeedPayMoney">0</span></label></td> <td><label>导游购物返佣：<span class="tripCost-guideshopFee">';
$line=61;$out+=$escape(guideArrange.manageFee);
$out+='</span></label></td> <td><label>车费：<span class="tripTransitCost-busCompanyNeedPayMoney">';
$line=62;$out+=$escape(touristGroup.outBusMoney);
$out+='</span></label></td> <td><label>餐食费用：<span class="tripTransitCost-outRestaurantMoney">';
$line=63;$out+=$escape(touristGroup.outRestaurantMoney);
$out+='</span></label></td> </tr> <tr> <td><label>购物返佣：<span class="tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td><label>其他收入：<span class="tripIncome-otherInCome">0</span></label></td> <td><label>餐费：<span class="tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td><label>房费：<span class="tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td><label>景区费用：<span class="tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td><label>导游自费返佣：<span class="tripCost-guideSelfMoney">';
$line=71;$out+=$escape(touristGroup.outBusMoney);
$out+='</span></label></td> <td><label>房费：<span class="tripTransitCost-hotelArrangeNeedPayMoney">';
$line=72;$out+=$escape(touristGroup.outHotelMoney);
$out+='</span></label></td> <td><label>其他费用：<span class="tripTransitCost-outOtherMoney">';
$line=73;$out+=$escape(touristGroup.outOtherMoney);
$out+='</span></label></td> </tr> <tr> <td><label>导游管理费：<span class="tripIncome-guideManageMoney">';
$line=76;$out+=$escape(guideArrange.manageFee);
$out+='</span></label></td> <td></td> <td><label>票务费用：<span class="tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td><label>其他费用：<span class="tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td><label>自费费用：<span class="tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td><label style="display: none;">地接费用：<span class="tripCost-groundArrangeNeedPayMoney"></span></label></td> <td><label>票务费用';
$line=82;$out+=$escape(isOp);
$out+='：<span class="tripTransitCost-ticketArrangeNeedPayMoney">';
$line=82;$out+=$escape(touristGroup.outTicketMoney);
$out+='</span></label></td> <td></td> </tr> </tbody> </table> <input type="hidden" value="';
$line=87;$out+=$escape(WEB_IMG_URL_BIG);
$out+='" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="';
$line=88;$out+=$escape(WEB_IMG_URL_SMALL);
$out+='" name="WEB_IMG_URL_SMALL" /> <div class="row" style="margin-bottom:15px;"> <div class="col-md-1"> <a href="javascript:void(0);" class="btn-financialLog">操作记录</a> </div> <div class="col-md-1"> <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a> </div> </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其他收入</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其他支出</a> </li> ';
$line=132;if(touristGroup != null){
$out+=' <li class="col-sm-1 no-padding align-center"> <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a> </li> ';
$line=136;}
$out+=' </ul> <div class="tab-content T-list" style="position:relative;top: -2px">  <div id="financial-count-update-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <tbody class="T-tripDetail"> <tr> <td>序号</td> <td>来源</td> <td>小组联系人</td> <td>联系电话</td> <td>人数</td> <td>应收</td> <td>已收</td> <td>现收</td> <td>明细</td> ';
$line=153;$each(touristGroups,function(touristGroup,index){
$out+=' <tr> <td>';
$line=155;$out+=$escape(index+1);
$out+='</td> <td>';
$line=156;if(touristGroup.partnerAgency){
$line=156;$out+=$escape(touristGroup.partnerAgency.travelAgencyName);
$line=156;}
$out+='</td> <td>';
$line=157;if(touristGroup.touristGroupMember != null){
$line=157;$out+=$escape(touristGroup.touristGroupMember.name);
$line=157;}
$out+='</td> <td>';
$line=158;if(touristGroup.touristGroupMember != null){
$line=158;$out+=$escape(touristGroup.touristGroupMember.mobileNumber);
$line=158;}
$out+='</td> <td>';
$line=159;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=159;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=160;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</td> <td>';
$line=161;$out+=$escape(touristGroup.payedMoney);
$out+='</td> <td>';
$line=162;$out+=$escape(touristGroup.currentNeedPayMoney);
$out+='</td> <td> ';
$line=164;if(touristGroup.adultCount > 0){
$out+=' 大人：';
$line=165;$out+=$escape(touristGroup.adultPrice);
$out+='X';
$line=165;$out+=$escape(touristGroup.adultCount);
$out+='=';
$line=165;$out+=$escape(touristGroup.adultPrice * touristGroup.adultCount);
$out+='<br /> 小孩：';
$line=166;$out+=$escape(touristGroup.childPrice);
$out+='X';
$line=166;$out+=$escape(touristGroup.childCount);
$out+='=';
$line=166;$out+=$escape(touristGroup.childPrice * touristGroup.childCount);
$out+='<br /> ';
$line=167;$each(touristGroup.touristGroupFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=168;$out+=$escape(touristGroupFee.describeInfo);
$out+=' ：';
$line=168;$out+=$escape(touristGroupFee.price);
$out+='X';
$line=168;$out+=$escape(touristGroupFee.count);
$out+='=';
$line=168;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='<br /> ';
$line=169;});
$out+=' ';
$line=170;}
$out+=' </td> </tr> ';
$line=173;});
$out+=' </tbody> </table> ';
$line=177;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=180;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=180;}
$out+=' type="text" style="width:30%;" value="';
$line=180;if(remarkArrangeList[0] != null){
$line=180;$out+=$escape(remarkArrangeList[0].opCheckRemark);
$line=180;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=183;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=183;}
$out+=' type="text" style="width:30%;" value="';
$line=183;if(remarkArrangeList[0] != null){
$line=183;$out+=$escape(remarkArrangeList[0].financeCheckRemark);
$line=183;}
$out+='" /> </div> </div>';
$line=185;}
$out+=' </div>  <div id="financial-count-tripdetail-shop" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="6">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" colspan="2">人数返佣</th> <th class="th-border" colspan="2">停车返佣</th> <th class="th-border" rowspan="2">购物返佣总收入</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=200;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=200;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">购物店</th> <th class="th-border">商品</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">总金额</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">元/人</th> <th class="th-border">返佣</th> <th class="th-border">元/车</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ';
$line=219;$each(dayList,function(day,$index){
$out+=' ';
$line=220;if(day.shopArrange != null){
$out+=' ';
$line=221;$each(day.shopArrange,function(shopArrangeList,$index){
$out+=' ';
$line=222;$each(shopArrangeList.shopArrangePolicy,function(arrange,index){
$out+=' ';
$line=223;if(arrange != null){
$out+=' <tr shopArrangeId="';
$line=224;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=224;$out+=$escape(arrange.whichDay);
$out+='_';
$line=224;$out+=$escape(arrange.shopId);
$out+='"> ';
$line=225;if(index==0){
$out+='<td rowspan="';
$line=225;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='">第';
$line=225;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=225;}
$out+=' ';
$line=226;if(index==0){
$out+='<td rowspan="';
$line=226;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='">';
$line=226;$out+=$escape(arrange.shop.name);
$out+='</td>';
$line=226;}
$out+=' <td>';
$line=227;$out+=$escape(arrange.shopPolicy.name);
$out+='</td> <td><span>';
$line=228;$out+=$escape(arrange.consumeMoney);
$out+='</span><input policyId="';
$line=228;if(arrange.shopPolicy != null){
$line=228;$out+=$escape(arrange.shopPolicy.id);
$line=228;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=228;$out+=$escape(arrange.consumeMoney);
$out+='" old="';
$line=228;$out+=$escape(arrange.consumeMoney);
$out+='" maxlength="11" ';
$line=229;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=229;}
$out+='/></td> <td>';
$line=230;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=231;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=232;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=234;}
$out+=' </td> ';
$line=236;if(index == 0 ){
$out+='<td rowspan="';
$line=236;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumMoney';
$line=236;$out+=$escape(arrange.whichDay);
$out+='_';
$line=236;$out+=$escape(arrange.shopId);
$out+='"></span></td>';
$line=236;}
$out+=' <td><span>';
$line=237;$out+=$escape(arrange.travelAgencyRate);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=237;$out+=$escape(arrange.travelAgencyRate*100);
$out+='" old="';
$line=237;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=237;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=237;}
$out+='/></td> <td><span class="travelAgencyRateMoney">';
$line=238;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='</span><input type="hidden" class="travelAgencyRateMoney';
$line=238;$out+=$escape(arrange.whichDay);
$out+='_';
$line=238;$out+=$escape(arrange.shopId);
$out+='" name="travelAgencyRateMoney" value="';
$line=238;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='" ';
$line=238;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=238;}
$out+='/></td> <td><span>';
$line=239;$out+=$escape(arrange.guideRate);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="';
$line=239;$out+=$escape(arrange.guideRate*100);
$out+='" old="';
$line=239;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5" ';
$line=239;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=239;}
$out+='/></td> <td><span class="guideRateMoney">';
$line=240;$out+=$escape(arrange.guideRkateMoney);
$out+='</span><input type="hidden" class="guideRateMoney';
$line=240;$out+=$escape(arrange.whichDay);
$out+='_';
$line=240;$out+=$escape(arrange.shopId);
$out+='" name="guideRateMoney" value="';
$line=240;$out+=$escape(arrange.guideRateMoney);
$out+='" ';
$line=241;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=241;}
$out+='/></td> ';
$line=242;if(index == 0 ){
$out+='<td rowspan="';
$line=242;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=242;if(arrange.customerRebateMoney < 1){
$line=242;$out+=$escape(arrange.shop.customerRebateMoney);
$line=242;}else{
$line=242;$out+=$escape(arrange.customerRebateMoney);
$line=242;}
$out+='</span><input type="hidden" name="customerRebateMoney';
$line=242;$out+=$escape(arrange.whichDay);
$out+='_';
$line=242;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=242;if(arrange.customerRebateMoney < 1){
$line=242;$out+=$escape(arrange.shop.customerRebateMoney);
$line=242;}else{
$line=242;$out+=$escape(arrange.customerRebateMoney);
$line=242;}
$out+='" style="width:90px;" old="';
$line=242;if(arrange.customerRebateMoney < 1){
$line=242;$out+=$escape(arrange.shop.customerRebateMoney);
$line=242;}else{
$line=242;$out+=$escape(arrange.customerRebateMoney);
$line=242;}
$out+='" maxlength="11" ';
$line=242;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=242;}
$out+='/><input type="hidden" name="touristAdultCount';
$line=242;$out+=$escape(arrange.whichDay);
$out+='_';
$line=242;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=242;$out+=$escape(tripPlan.touristAdultCount);
$out+='" ';
$line=242;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=242;}
$out+='/></td>';
$line=242;}
$out+=' ';
$line=243;if(index == 0 ){
$out+='<td rowspan="';
$line=243;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumCustomerRebateMoney';
$line=243;$out+=$escape(arrange.whichDay);
$out+='_';
$line=243;$out+=$escape(arrange.shopId);
$out+=' sumCustomerRebateMoney">';
$line=243;$out+=$escape(shopArrangeList.customerRebateMoney);
$out+='</span></td>';
$line=243;}
$out+=' ';
$line=244;if(index == 0 ){
$out+='<td rowspan="';
$line=244;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=244;if(arrange.parkingRebateMoney < 1){
$line=244;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=244;}else{
$line=244;$out+=$escape(arrange.parkingRebateMoney);
$line=244;}
$out+='</span><input ';
$line=244;if(arrange.isConfirmAccount == 1){
$out+='readonly="readOnly"';
$line=244;}
$out+=' type="hidden" name="parkingRebateMoney';
$line=244;$out+=$escape(arrange.whichDay);
$out+='_';
$line=244;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=244;if(arrange.parkingRebateMoney < 1){
$line=244;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=244;}else{
$line=244;$out+=$escape(arrange.parkingRebateMoney);
$line=244;}
$out+='" style="width:90px;" old="';
$line=244;if(arrange.parkingRebateMoney < 1){
$line=244;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=244;}else{
$line=244;$out+=$escape(arrange.parkingRebateMoney);
$line=244;}
$out+='" maxlength="11" /></td>';
$line=245;}
$out+=' ';
$line=246;if(index == 0 ){
$out+='<td rowspan="';
$line=246;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumParkingRebateMoney';
$line=246;$out+=$escape(arrange.whichDay);
$out+='_';
$line=246;$out+=$escape(arrange.shopId);
$out+=' sumParkingRebateMoney">';
$line=246;$out+=$escape(shopArrangeList.parkingRebateMoney);
$out+='</span></td>';
$line=246;}
$out+=' ';
$line=247;if(index == 0 ){
$out+='<td rowspan="';
$line=247;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="T-shopIncome T-shopIncome';
$line=247;$out+=$escape(arrange.whichDay);
$out+='_';
$line=247;$out+=$escape(arrange.shopId);
$out+='"></span></td>';
$line=247;}
$out+=' <!-- ';
$line=248;if(index == 0 ){
$out+='<td rowspan="';
$line=248;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><input type="text" style="width:90px;"/></td>';
$line=248;}
$out+=' --> <td>';
$line=249;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=250;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=250;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=250;}else{
$out+='已对账';
$line=250;}
$out+='</td>';
$line=250;}
$out+=' </tr> ';
$line=252;}
$out+=' ';
$line=253;});
$out+=' ';
$line=254;});
$out+=' ';
$line=255;}
$out+=' ';
$line=256;});
$out+=' </tbody> </table> ';
$line=259;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=263;if(remarkArrangeList[1] != null){
$line=263;$out+=$escape(remarkArrangeList[1].opCheckRemark);
$line=263;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=265;if(remarkArrangeList[1] != null){
$line=265;$out+=$escape(remarkArrangeList[1].financeCheckRemark);
$line=265;}
$out+='" /> </div> </div>';
$line=267;}
$out+=' </div>  <div id="financial-count-tripdetail-selfpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="14">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=279;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=279;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">自费商家</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">人数返佣</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应收</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">现收</th> <th class="th-border">单据</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ';
$line=302;$each(dayList,function(day,$index){
$out+=' ';
$line=303;if(day.selfPayArrange != null){
$out+=' ';
$line=304;$each(day.selfPayArrange,function(arrangeList,$index){
$out+=' ';
$line=305;$each(arrangeList.selfPayArrangeList,function(arrange,index){
$out+=' ';
$line=306;if(arrange != null){
$out+=' <tr badStatus = "';
$line=307;$out+=$escape(arrange.badStatus);
$out+='" selfPayArrangeId="';
$line=307;$out+=$escape(arrange.id);
$out+='" selfPayId="';
$line=307;$out+=$escape(arrange.selfPayId);
$out+='"> ';
$line=308;if(index == 0 ){
$out+='<td rowspan="';
$line=308;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">第';
$line=308;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=308;}
$out+=' ';
$line=309;if(index == 0 ){
$out+='<td rowspan="';
$line=309;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=309;$out+=$escape(arrange.selfPay.name);
$out+='</td>';
$line=309;}
$out+=' <td>';
$line=310;if(arrange.selfPayItem != null ){
$line=310;$out+=$escape(arrange.selfPayItem.name);
$line=310;}
$out+='</td> <td>';
$line=311;if(arrange.badStatus == 1){
$out+='<span>';
$line=311;$out+=$escape(arrange.marketPrice);
$out+='</span>';
$line=311;}else{
$line=311;$out+=$escape(arrange.marketPrice);
$line=311;}
$out+=' <input type="hidden" name="marketPrice" value="';
$line=312;$out+=$escape(arrange.marketPrice);
$out+='"/></td> <td>';
$line=313;if(arrange.badStatus == 1){
$out+='<span>';
$line=313;$out+=$escape(arrange.price);
$out+='</span>';
$line=313;}else{
$line=313;$out+=$escape(arrange.price);
$line=313;}
$out+=' <input type="hidden" name="price" value="';
$line=314;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=315;$out+=$escape(arrange.customerRebateMoney);
$out+='</td> <td> ';
$line=317;if(arrange.badStatus == 1){
$out+='<span>';
$line=317;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=317;}else{
$out+='<span>';
$line=317;if(arrange.billUpdateTime != null){
$line=317;$out+=$escape(arrange.realCount);
$line=317;}else{
$line=317;$out+=$escape(arrange.memberCount);
$line=317;}
$out+='</span>';
$line=317;}
$out+=' <input style="width:60px;" type="hidden" name="realCount" ';
$line=318;if(arrange.billUpdateTime != null){
$out+='value="';
$line=318;$out+=$escape(arrange.realCount);
$out+='"';
$line=318;}else{
$out+='value="';
$line=318;$out+=$escape(arrange.memberCount);
$out+='"';
$line=318;}
$out+=' maxlength="5"/><input type="hidden" name="memberCount" value="';
$line=318;$out+=$escape(arrange.memberCount);
$out+='" ';
$line=318;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=318;}
$out+=' /></td> <td> ';
$line=320;if(arrange.badStatus == 1){
$out+='<span>';
$line=320;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=320;}else{
$out+='<span>';
$line=320;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=320;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=321;$out+=$escape(arrange.realReduceMoney);
$out+='" style="width:60px;"/></td> <td> ';
$line=323;if(arrange.badStatus == 1){
$out+='<span class="needIncome"></span>';
$line=323;}else{
$out+='<span class="needIncome"></span>';
$line=323;}
$out+='</td> <td><span class="needPayMoney" >';
$line=324;$out+=$escape(arrange.needPayMoney);
$out+='</span><input type="hidden" class="selfMoney"></td> <td>';
$line=325;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> ';
$line=327;if(arrange.badStatus == 1){
$out+='<span>';
$line=327;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=327;}else{
$out+='<span>';
$line=327;if(arrange.billUpdateTime != null){
$line=327;$out+=$escape(arrange.realGuidePayMoney);
$line=327;}else{
$line=327;$out+=$escape(arrange.guidePayMoney);
$line=327;}
$out+='</span>';
$line=327;}
$out+=' </td> <td> ';
$line=330;if(arrange.badStatus == 1){
$out+='<span>';
$line=330;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=330;}else{
$out+='<span>';
$line=330;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=330;}
$out+=' </td> <td>';
$line=332;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=333;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=334;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=336;}
$out+=' </td> <td> ';
$line=339;if(arrange.badStatus == 1){
$out+='<span>';
$line=339;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=339;}else{
$out+='<span>';
$line=339;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=339;}
$out+=' <input style="width:90px;" type="hidden" name="travelAgencyRate" value="';
$line=340;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='" old="';
$line=340;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=340;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=340;}
$out+=' /></td> <td> ';
$line=342;if(arrange.badStatus == 1){
$out+='<span>';
$line=342;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=342;}else{
$out+='<span class="travelAgencyRebateMoney">';
$line=342;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=342;}
$out+=' <input type="hidden" name="travelAgencyRebateMoney" value="';
$line=344;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='" ';
$line=344;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=344;}
$out+=' /></td> <td><span>';
$line=345;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='</span> <input style="width:90px;" type="hidden" name="guideRate" value="';
$line=346;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='" old="';
$line=346;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5"/> </td> <td>';
$line=348;if(arrange.badStatus == 1){
$out+='<span>';
$line=348;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=348;}else{
$out+='<span class="guideRebateMoney">';
$line=348;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=348;}
$out+=' <input type="hidden" name="guideRebateMoney" value="';
$line=350;$out+=$escape(arrange.guideRebateMoney);
$out+='" ';
$line=350;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=350;}
$out+=' /></td> <!-- <td> <span class="guideRate">';
$line=352;$out+=$escape(arrange.customerRebateMoney);
$out+='</span> <input type="hidden" name="guideRate" value="';
$line=353;$out+=$escape(arrange.customerRebateMoney);
$out+='" ';
$line=353;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=353;}
$out+=' /></td> ';
$line=354;if(index == 0 ){
$out+='<td rowspan="';
$line=354;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=354;$out+=$escape(arrange.customerRebateMoney * tripPlan.touristAdultCount);
$out+='</td>';
$line=354;}
$out+=' --> <td>';
$line=355;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=356;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=356;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=356;}else{
$out+='已对账';
$line=356;}
$out+='</td>';
$line=356;}
$out+=' </tr> ';
$line=358;}
$out+=' ';
$line=359;});
$out+=' ';
$line=360;});
$out+=' ';
$line=361;}
$out+=' ';
$line=362;});
$out+=' </tbody> </table> ';
$line=365;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=369;if(remarkArrangeList[2] != null){
$line=369;$out+=$escape(remarkArrangeList[2].opCheckRemark);
$line=369;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=371;if(remarkArrangeList[2] != null){
$line=371;$out+=$escape(remarkArrangeList[2].financeCheckRemark);
$line=371;}
$out+='" /> </div> </div>';
$line=373;}
$out+=' </div>  <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=387;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=387;}
$out+=' </tr> </thead> <tbody class="T-count-otherIn"> ';
$line=391;$each(arrangeIncomePaymentList,function(otherInCome,$index){
$out+=' ';
$line=392;if(otherInCome != null){
$out+=' <tr otherInId="';
$line=393;$out+=$escape(otherInCome.id);
$out+='" otherIn="';
$line=393;$out+=$escape(otherInCome.id);
$out+='"> <td whichDay="';
$line=394;$out+=$escape(otherInCome.whichDay);
$out+='">第';
$line=394;$out+=$escape(otherInCome.whichDay);
$out+='天</td> <td>';
$line=395;$out+=$escape(otherInCome.title);
$out+='</td> <td><span>';
$line=396;$out+=$escape(otherInCome.price);
$out+='</span><input style="width:90px;" type="hidden" name="price" value="';
$line=396;$out+=$escape(otherInCome.price);
$out+='" old="';
$line=396;$out+=$escape(otherInCome.price);
$out+='" maxlength="11" ';
$line=397;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=397;}
$out+=' /></td> <td><span>';
$line=399;$out+=$escape(otherInCome.count);
$out+='</span><input style="width:90px;" type="hidden" name="count" value="';
$line=399;$out+=$escape(otherInCome.count);
$out+='" old="';
$line=399;$out+=$escape(otherInCome.count);
$out+='" maxlength="11" ';
$line=400;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=400;}
$out+='/></td> <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="';
$line=401;$out+=$escape(otherInCome.needPayMoney);
$out+='" ';
$line=402;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=402;}
$out+='/></span></td> <td>';
$line=403;if(otherInCome.billImage != null && otherInCome.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=404;$out+=$escape(otherInCome.billImage);
$out+='" class="btn-view">查看</a> ';
$line=405;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=407;}
$out+=' </td> <td>';
$line=409;$out+=$escape(otherInCome.billRemark);
$out+='</td> ';
$line=410;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=410;if(otherInCome.isConfirmAccount == 0){
$out+='未对账';
$line=410;}else{
$out+='已对账';
$line=410;}
$out+='</td>';
$line=410;}
$out+=' </tr> ';
$line=412;}
$out+=' ';
$line=413;});
$out+=' </tbody> </table> ';
$line=416;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=420;if(remarkArrangeList[3] != null){
$line=420;$out+=$escape(remarkArrangeList[3].opCheckRemark);
$line=420;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=422;if(remarkArrangeList[3] != null){
$line=422;$out+=$escape(remarkArrangeList[3].financeCheckRemark);
$line=422;}
$out+='" /> </div> </div>';
$line=424;}
$out+=' </div>  <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ';
$line=439;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=439;}
$out+=' </tr> </thead> <tbody class="T-count-insurance"> ';
$line=443;$each(insuranceArrangeList,function(insuranceArrange,$index){
$out+=' <tr> <td>';
$line=445;$out+=$escape(insuranceArrange.insurance.name);
$out+='</td> <td>';
$line=446;$out+=$escape(insuranceArrange.type);
$out+='</td> <td>';
$line=447;$out+=$escape(insuranceArrange.price);
$out+='</td> <td>';
$line=448;$out+=$escape(insuranceArrange.memberCount);
$out+='</td> <td>';
$line=449;$out+=$escape(insuranceArrange.needPayMoney);
$out+='</td> <td>';
$line=450;$out+=$escape(insuranceArrange.payedMoney);
$out+='</td> <td></td> </tr> ';
$line=453;});
$out+=' </tbody> </table> ';
$line=457;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=460;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=460;}
$out+=' type="text" style="width:30%;" value="';
$line=460;if(remarkArrangeList[11] != null){
$line=460;$out+=$escape(remarkArrangeList[11].opCheckRemark);
$line=460;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=463;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=463;}
$out+=' type="text" style="width:30%;" value="';
$line=463;if(remarkArrangeList[11] != null){
$line=463;$out+=$escape(remarkArrangeList[11].financeCheckRemark);
$line=463;}
$out+='" /> </div> </div>';
$line=465;}
$out+=' </div>  <div id="financial-count-tripdetail-buspay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=483;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=483;}
$out+=' </tr> </thead> <tbody class="T-count-bus"> ';
$line=488;$each(busCompanyArrange,function(busCompany,$index){
$out+=' ';
$line=489;if(busCompany != null){
$out+=' <tr badStatus = "';
$line=490;$out+=$escape(busCompany.badStatus);
$out+='" busCompanyArrangeId="';
$line=490;$out+=$escape(busCompany.id);
$out+='" > <td>';
$line=491;if(busCompany.busCompany != null){
$line=491;$out+=$escape(busCompany.busCompany.companyName);
$line=491;}
$out+='</td> <td>';
$line=492;if(busCompany.bus != null){
$line=492;$out+=$escape(busCompany.bus.licenseNumber);
$line=492;}
$out+='</td> <td>';
$line=493;if(busCompany.bus != null){
$line=493;$out+=$escape(busCompany.bus.seatCount);
$line=493;}
$out+='</td> <td>';
$line=494;if(busCompany.badStatus == 1){
$out+='<span>';
$line=494;$out+=$escape(busCompany.price);
$out+='</span>';
$line=494;}else{
$out+='<span>';
$line=494;$out+=$escape(busCompany.price);
$out+='</span>';
$line=494;}
$out+=' <input type="hidden" name="price" value="';
$line=495;$out+=$escape(busCompany.price);
$out+='" /></td> <td>';
$line=496;if(busCompany.badStatus == 1){
$out+='<span>';
$line=496;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=496;}else{
$out+='<span>';
$line=496;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=496;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=497;$out+=$escape(busCompany.realReduceMoney);
$out+='" old="';
$line=497;$out+=$escape(busCompany.realReduceMoney);
$out+='"/></td> <td>';
$line=498;if(busCompany.badStatus == 1){
$out+='<span class="BusneedPayMoney">';
$line=498;$out+=$escape(busCompany.payedMoney+busCompany.realGuidePayMoney);
$out+='</span>';
$line=498;}else{
$out+='<span class="BusneedPayMoney"></span>';
$line=498;}
$out+='</td> <td>';
$line=499;$out+=$escape(busCompany.payedMoney);
$out+='</td> <td>';
$line=500;if(busCompany.badStatus == 1){
$out+='<span>';
$line=500;$out+=$escape(busCompany.realGuidePayMoney);
$out+='</span>';
$line=500;}else{
$out+='<span>';
$line=500;$out+=$escape(busCompany.realGuidePayMoney);
$out+='</span>';
$line=500;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=501;$out+=$escape(busCompany.payedMoney);
$out+='" ';
$line=501;if(busCompany.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=501;}
$out+='/> <input type="hidden" name="guidePayMoney" value="';
$line=502;$out+=$escape(busCompany.guidePayMoney);
$out+='" /></td> <td>';
$line=503;if(busCompany.billImage != null && busCompany.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=504;$out+=$escape(busCompany.billImage);
$out+='" class="btn-view">查看</a> ';
$line=505;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=507;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=510;$out+=$escape(busCompany.billRemark);
$out+='</td> ';
$line=511;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=511;if(busCompany.isConfirmAccount == 0){
$out+='未对账';
$line=511;}else{
$out+='已对账';
$line=511;}
$out+='</td>';
$line=511;}
$out+=' </tr> ';
$line=513;}
$out+=' ';
$line=514;});
$out+=' </tbody> </table> ';
$line=517;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=521;if(remarkArrangeList[4] != null){
$line=521;$out+=$escape(remarkArrangeList[4].opCheckRemark);
$line=521;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=523;if(remarkArrangeList[4] != null){
$line=523;$out+=$escape(remarkArrangeList[4].financeCheckRemark);
$line=523;}
$out+='" /> </div> </div>';
$line=525;}
$out+=' </div>  <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">餐厅</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=545;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=545;}
$out+=' </tr> </thead> <tbody class="T-count-restaurant"> ';
$line=549;$each(dayList,function(day,$index){
$out+=' ';
$line=550;if(day.restaurantArrange != null){
$out+=' ';
$line=551;$each(day.restaurantArrange,function(arrangeList,$index){
$out+=' ';
$line=552;$each(arrangeList.restaurantArrangeList,function(arrange,index){
$out+=' ';
$line=553;if(arrange != null){
$out+=' <tr badStatus = "';
$line=554;$out+=$escape(arrange.badStatus);
$out+='" restaurantArrangeId="';
$line=554;$out+=$escape(arrange.id);
$out+='" restaurantId="';
$line=554;if(arrange.restaurant != null){
$line=554;$out+=$escape(arrange.restaurant.id);
$line=554;}
$out+='" restaurantStandardId="';
$line=554;if(arrange.restaurantStandard != null){
$line=554;$out+=$escape(arrange.restaurantStandard.id);
$line=554;}
$out+='"> ';
$line=555;if(index == 0){
$out+='<td rowspan="';
$line=555;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='">第';
$line=555;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=555;}
$out+=' ';
$line=556;if(index == 0){
$out+='<td rowspan="';
$line=556;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"> ';
$line=557;if(arrange.billUpdateTime != null){
$line=557;if(arrange.restaurant != null){
$line=557;$out+=$escape(arrange.restaurant.name);
$line=557;}
$line=557;}else{
$line=557;if(arrange.isChoose == 1){
$out+='自选';
$line=557;}else{
$line=557;if(arrange.restaurant != null){
$line=557;$out+=$escape(arrange.restaurant.name);
$line=557;}
$line=557;}
$line=557;}
$out+='</td>';
$line=557;}
$out+=' <td>';
$line=558;$out+=$escape(arrange.type);
$out+='</td> <td>';
$line=559;if(arrange.badStatus == 1){
$out+='<span>';
$line=559;$out+=$escape(arrange.price);
$out+='</span>';
$line=559;}else{
$out+='<span class="price">';
$line=559;$out+=$escape(arrange.price);
$out+='</span>';
$line=559;}
$out+='<input type="hidden" name="price" value="';
$line=559;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=560;if(arrange.badStatus == 1){
$out+='<span>';
$line=560;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=560;}else{
$out+='<span>';
$line=560;if(arrange.billUpdateTime != null){
$line=560;$out+=$escape(arrange.realCount);
$line=560;}else{
$line=560;$out+=$escape(arrange.memberCount);
$line=560;}
$out+='</span>';
$line=560;}
$out+='<input style="width:90px;" type="hidden" name="realCount" ';
$line=560;if(arrange.billUpdateTime != null){
$out+='value="';
$line=560;$out+=$escape(arrange.realCount);
$out+='" ';
$line=561;}else{
$out+='value="';
$line=561;$out+=$escape(arrange.memberCount);
$out+='"';
$line=561;}
$out+=' old="';
$line=561;$out+=$escape(arrange.realCount);
$out+='" maxlength="5" ';
$line=562;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=562;}
$out+='/></td> <td>';
$line=563;if(arrange.badStatus == 1){
$out+='<span>';
$line=563;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=563;}else{
$out+='<span>';
$line=563;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=563;}
$out+='<input type="hidden" name="realReduceMoney" value="';
$line=563;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=563;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=564;if(arrange.badStatus == 1){
$out+='<span class="restneedPayMoney">';
$line=564;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=564;}else{
$out+='<span class="restneedPayMoney"></span>';
$line=564;}
$out+='<input type="hidden" value="';
$line=564;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=565;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=566;if(arrange.badStatus == 1){
$out+='<span>';
$line=566;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=566;}else{
$out+='<span>';
$line=566;if(arrange.billUpdateTime != null){
$line=566;$out+=$escape(arrange.realGuidePayMoney);
$line=566;}else{
$line=566;$out+=$escape(arrange.guidePayMoney);
$line=566;}
$out+='</span>';
$line=566;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=568;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=569;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=570;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=571;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=572;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=574;}
$out+=' </td> <td><span class="difference"></span></td> <td><span class="billRemark">';
$line=577;$out+=$escape(arrange.billRemark);
$out+='</span></td> ';
$line=578;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=578;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=578;}else{
$out+='已对账';
$line=578;}
$out+='</td>';
$line=578;}
$out+=' </tr> ';
$line=580;}
$out+=' ';
$line=581;});
$out+=' ';
$line=582;});
$out+=' ';
$line=583;}
$out+=' ';
$line=584;});
$out+=' </tbody> </table> ';
$line=587;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=591;if(remarkArrangeList[5] != null){
$line=591;$out+=$escape(remarkArrangeList[5].opCheckRemark);
$line=591;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=593;if(remarkArrangeList[5] != null){
$line=593;$out+=$escape(remarkArrangeList[5].financeCheckRemark);
$line=593;}
$out+='" /> </div> </div>';
$line=595;}
$out+=' </div>  <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=614;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=614;}
$out+=' </tr> </thead> <tbody class="T-count-hotel"> ';
$line=618;$each(dayList,function(day,$index){
$out+=' ';
$line=619;if(day.hotelArrange != null){
$out+=' ';
$line=620;$each(day.hotelArrange,function(arrangeList,$index){
$out+=' ';
$line=621;$each(arrangeList.hotelArrangeList,function(arrange,index){
$out+=' ';
$line=622;if(arrange != null){
$out+=' <tr badStatus = "';
$line=623;$out+=$escape(arrange.badStatus);
$out+='" hotelArrangeId="';
$line=623;$out+=$escape(arrange.id);
$out+='" hotelId="';
$line=623;if(arrange.hotel != null){
$line=623;$out+=$escape(arrange.hotel.id);
$line=623;}
$out+='" restaurantStandardId="';
$line=623;if(arrange.hotelRoom != null){
$line=623;$out+=$escape(arrange.hotelRoom.id);
$line=623;}
$out+='"> ';
$line=624;if(index == 0){
$out+='<td rowspan="';
$line=624;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">第';
$line=624;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=624;}
$out+=' ';
$line=625;if(index == 0){
$out+='<td rowspan="';
$line=625;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">';
$line=625;if(arrange.hotel != null){
$line=625;$out+=$escape(arrange.hotel.name);
$line=625;}
$out+='</td>';
$line=625;}
$out+=' <td>';
$line=626;if(arrange.hotelRoom != null){
$line=626;$out+=$escape(arrange.hotelRoom.type);
$line=626;}
$out+='</td> <td>';
$line=627;if(arrange.badStatus == 1){
$out+='<span>';
$line=627;$out+=$escape(arrange.price);
$out+='</span>';
$line=627;}else{
$out+='<span>';
$line=627;$out+=$escape(arrange.price);
$out+='</span>';
$line=627;}
$out+=' <input type="hidden" name="price" value="';
$line=628;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=629;if(arrange.badStatus == 1){
$out+='<span>';
$line=629;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=629;}else{
$out+='<span>';
$line=629;if(arrange.billUpdateTime != null){
$line=629;$out+=$escape(arrange.realCount);
$line=629;}else{
$line=629;$out+=$escape(arrange.memberCount);
$line=629;}
$out+='</span>';
$line=629;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=630;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=630;$out+=$escape(arrange.realCount);
$out+='" ';
$line=630;}else{
$out+='value="';
$line=630;$out+=$escape(arrange.memberCount);
$out+='"';
$line=630;}
$out+='/></td> <td>';
$line=631;if(arrange.badStatus == 1){
$out+='<span>';
$line=631;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=631;}else{
$out+='<span>';
$line=631;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=631;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=632;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=632;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=633;if(arrange.badStatus == 1){
$out+='<span class="hotelneedPayMoney">';
$line=633;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=633;}else{
$out+='<span class="hotelneedPayMoney"></span>';
$line=633;}
$out+=' <input name="needPayMoney" type="hidden" value="';
$line=634;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=635;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=636;if(arrange.badStatus == 1){
$out+='<span>';
$line=636;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=636;}else{
$out+='<span>';
$line=636;if(arrange.billUpdateTime != null){
$line=636;$out+=$escape(arrange.realGuidePayMoney);
$line=636;}else{
$line=636;$out+=$escape(arrange.guidePayMoney);
$line=636;}
$out+='</span>';
$line=636;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=638;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=639;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=640;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=641;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=642;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=644;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=647;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=649;}
$out+=' ';
$line=650;});
$out+=' ';
$line=651;});
$out+=' ';
$line=652;}
$out+=' ';
$line=653;});
$out+=' </tbody> </table> ';
$line=656;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=660;if(remarkArrangeList[6] != null){
$line=660;$out+=$escape(remarkArrangeList[6].opCheckRemark);
$line=660;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=662;if(remarkArrangeList[6] != null){
$line=662;$out+=$escape(remarkArrangeList[6].financeCheckRemark);
$line=662;}
$out+='" /> </div> </div>';
$line=664;}
$out+=' </div>  <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">景区</th> <th class="th-border">收费项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=683;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=683;}
$out+=' </tr> </thead> <tbody class="T-count-scenic"> ';
$line=687;$each(dayList,function(day,$index){
$out+=' ';
$line=688;if(day.scenicArrange != null){
$out+=' ';
$line=689;$each(day.scenicArrange,function(arrangeList,$index){
$out+=' ';
$line=690;$each(arrangeList.scenicArrangeList,function(arrange,index){
$out+=' ';
$line=691;if(arrange != null){
$out+=' <tr badStatus = "';
$line=692;$out+=$escape(arrange.badStatus);
$out+='" scenicArrangeId="';
$line=692;$out+=$escape(arrange.id);
$out+='" scenicId="';
$line=692;$out+=$escape(arrange.scenicId);
$out+='" scenicItemId="';
$line=692;$out+=$escape(arrange.hotelRoomId);
$out+='"> ';
$line=693;if(index == 0){
$out+='<td rowspan="';
$line=693;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='">第';
$line=693;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=693;}
$out+=' ';
$line=694;if(index == 0){
$out+='<td rowspan="';
$line=694;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='">';
$line=694;if(arrange.scenic != null){
$line=694;$out+=$escape(arrange.scenic.name);
$line=694;}
$out+='</td>';
$line=694;}
$out+=' <td>';
$line=695;if(arrange.scenicItem != null){
$line=695;$out+=$escape(arrange.scenicItem.name);
$line=695;}
$out+='</td> <td>';
$line=696;if(arrange.badStatus == 1){
$out+='<span>';
$line=696;$out+=$escape(arrange.price);
$out+='</span>';
$line=696;}else{
$out+='<span> ';
$line=696;$out+=$escape(arrange.price);
$out+='</span>';
$line=696;}
$out+=' <input type="hidden" name="price" value="';
$line=697;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=698;if(arrange.badStatus == 1){
$out+='<span>';
$line=698;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=698;}else{
$out+='<span>';
$line=698;if(arrange.billUpdateTime != null){
$line=698;$out+=$escape(arrange.realCount);
$line=698;}else{
$line=698;$out+=$escape(arrange.memberCount);
$line=698;}
$out+='</span>';
$line=698;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=699;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=699;$out+=$escape(arrange.realCount);
$out+='" ';
$line=699;}else{
$out+='value="';
$line=699;$out+=$escape(arrange.memberCount);
$out+='"';
$line=699;}
$out+='/></td> <td>';
$line=700;if(arrange.badStatus == 1){
$out+='<span>';
$line=700;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=700;}else{
$out+='<span>';
$line=700;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=700;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=701;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=701;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=702;if(arrange.badStatus == 1){
$out+='<span class="scenicneedPayMoney">';
$line=702;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=702;}else{
$out+='<span class="scenicneedPayMoney"></span>';
$line=702;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=703;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=704;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=705;if(arrange.badStatus == 1){
$out+='<span>';
$line=705;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=705;}else{
$out+='<span>';
$line=705;if(arrange.billUpdateTime != null){
$line=705;$out+=$escape(arrange.realGuidePayMoney);
$line=705;}else{
$line=705;$out+=$escape(arrange.guidePayMoney);
$line=705;}
$out+='</span>';
$line=705;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=707;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=708;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=709;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=710;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=711;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=713;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=716;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=717;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=717;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=717;}else{
$out+='已对账';
$line=717;}
$out+='</td>';
$line=717;}
$out+=' </tr> ';
$line=719;}
$out+=' ';
$line=720;});
$out+=' ';
$line=721;});
$out+=' ';
$line=722;}
$out+=' ';
$line=723;});
$out+=' </tbody> </table> ';
$line=726;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=730;if(remarkArrangeList[7] != null){
$line=730;$out+=$escape(remarkArrangeList[7].opCheckRemark);
$line=730;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=732;if(remarkArrangeList[7] != null){
$line=732;$out+=$escape(remarkArrangeList[7].financeCheckRemark);
$line=732;}
$out+='" /> </div> </div>';
$line=734;}
$out+=' </div>  <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务商家</th> <th class="th-border">类型</th> <th class="th-border">日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=757;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=757;}
$out+=' </tr> </thead> <tbody class="T-count-ticket"> ';
$line=761;$each(ticketArrangeList,function(ticketArrange,$index){
$out+=' ';
$line=762;$each(ticketArrange.ticketArrangeList,function(arrange,index){
$out+=' <tr badStatus = "';
$line=763;$out+=$escape(arrange.badStatus);
$out+='" ticketArrangeId="';
$line=763;$out+=$escape(arrange.id);
$out+='" ticketId="';
$line=763;$out+=$escape(arrange.ticket.id);
$out+='" itemId="';
$line=763;$out+=$escape(arrange.id);
$out+='"> ';
$line=764;if(index == 0){
$out+='<td rowspan="';
$line=764;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=764;if(arrange.ticket != null){
$line=764;$out+=$escape(arrange.ticket.name);
$line=764;}
$out+='</td>';
$line=764;}
$out+=' ';
$line=765;if(index == 0){
$out+='<td rowspan="';
$line=765;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=765;if(arrange.type == 1){
$out+='机票';
$line=765;}else if(arrange.type== 2){
$out+='汽车票';
$line=765;}else if(arrange.type == 3){
$out+='火车票';
$line=765;}else if(arrange.type == 4){
$out+='轮船票';
$line=765;}
$out+='</td>';
$line=765;}
$out+=' ';
$line=766;if(index == 0){
$out+='<td rowspan="';
$line=766;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=766;$out+=$escape(arrange.startTime);
$out+='</td>';
$line=766;}
$out+=' ';
$line=767;if(index == 0){
$out+='<td rowspan="';
$line=767;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=767;$out+=$escape(arrange.startingCity);
$out+='</td>';
$line=767;}
$out+=' ';
$line=768;if(index == 0){
$out+='<td rowspan="';
$line=768;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=768;$out+=$escape(arrange.arriveCity);
$out+='</td>';
$line=768;}
$out+=' <td>';
$line=769;$out+=$escape(arrange.shift);
$out+='</td> <td>';
$line=770;$out+=$escape(arrange.seatLevel);
$out+='</td> <td>';
$line=771;if(arrange.badStatus == 1){
$out+='<span>';
$line=771;$out+=$escape(arrange.price);
$out+='</span>';
$line=771;}else{
$out+='<span>';
$line=771;$out+=$escape(arrange.price);
$out+='</span>';
$line=771;}
$out+=' <input type="hidden" name="price" value="';
$line=772;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=773;if(arrange.badStatus == 1){
$out+='<span>';
$line=773;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=773;}else{
$out+='<span>';
$line=773;if(arrange.billUpdateTime != null){
$line=773;$out+=$escape(arrange.realCount);
$line=773;}else{
$line=773;$out+=$escape(arrange.memberCount);
$line=773;}
$out+='</span>';
$line=773;}
$out+=' <input style="width:90px;" name="realCount" type="hidden" ';
$line=774;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=774;$out+=$escape(arrange.realCount);
$out+='" ';
$line=774;}else{
$out+='value="';
$line=774;$out+=$escape(arrange.memberCount);
$out+='"';
$line=774;}
$out+=' /></td> <td>';
$line=775;if(arrange.badStatus == 1){
$out+='<span>';
$line=775;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=775;}else{
$out+='<span>';
$line=775;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=775;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=776;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=776;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=777;if(arrange.badStatus == 1){
$out+='<span class="ticketneedPayMoney">';
$line=777;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=777;}else{
$out+='<span class="ticketneedPayMoney"></span>';
$line=777;}
$out+=' <input type="hidden" value="';
$line=778;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=779;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=780;if(arrange.badStatus == 1){
$out+='<span>';
$line=780;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=780;}else{
$out+='<span>';
$line=780;if(arrange.billUpdateTime != null){
$line=780;$out+=$escape(arrange.realGuidePayMoney);
$line=780;}else{
$line=780;$out+=$escape(arrange.guidePayMoney);
$line=780;}
$out+='</span>';
$line=780;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=781;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=782;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=783;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=784;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=785;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=787;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=790;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=792;});
$out+=' ';
$line=793;});
$out+=' </tbody> </table> ';
$line=796;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=800;if(remarkArrangeList[8] != null){
$line=800;$out+=$escape(remarkArrangeList[8].opCheckRemark);
$line=800;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=802;if(remarkArrangeList[8] != null){
$line=802;$out+=$escape(remarkArrangeList[8].financeCheckRemark);
$line=802;}
$out+='" /> </div> </div>';
$line=804;}
$out+=' </div>  <div id="financial-count-tripdetail-otherpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=822;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=822;}
$out+=' </tr> </thead> <tbody class="T-count-otherOut"> ';
$line=826;$each(dayList,function(day,$index){
$out+=' ';
$line=827;if(day.otherArrange != null){
$out+=' ';
$line=828;$each(day.otherArrange,function(arrange,index){
$out+=' ';
$line=829;if(arrange != null){
$out+=' <tr badStatus = "';
$line=830;$out+=$escape(arrange.badStatus);
$out+='" otherArrangeId="';
$line=830;$out+=$escape(arrange.id);
$out+='"> <td>第';
$line=831;$out+=$escape(arrange.whichDay);
$out+='天</td> <td>';
$line=832;$out+=$escape(arrange.name);
$out+='</td> <td>';
$line=833;if(arrange.badStatus == 1){
$out+='<span>';
$line=833;$out+=$escape(arrange.price);
$out+='</span>';
$line=833;}else{
$out+='<span class="price">';
$line=833;$out+=$escape(arrange.price);
$out+='</span>';
$line=833;}
$out+=' <input type="hidden" name="price" value="';
$line=834;$out+=$escape(arrange.price);
$out+='" ';
$line=834;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=834;}
$out+='/></td> <td>';
$line=835;if(arrange.badStatus == 1){
$out+='<span>';
$line=835;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=835;}else{
$out+='<span>';
$line=835;if(arrange.billUpdateTime != null){
$line=835;$out+=$escape(arrange.realCount);
$line=835;}else{
$line=835;$out+=$escape(arrange.memberCount);
$line=835;}
$out+='</span>';
$line=835;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=836;if(arrange.billUpdateTime){
$out+='value="';
$line=836;$out+=$escape(arrange.realCount);
$out+='"';
$line=836;}else{
$out+='value="';
$line=836;$out+=$escape(arrange.memberCount);
$out+='"';
$line=836;}
$out+=' /></td> <td>';
$line=837;if(arrange.badStatus == 1){
$out+='<span>';
$line=837;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=837;}else{
$out+='<span>';
$line=837;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=837;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=838;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=839;if(arrange.badStatus == 1){
$out+='<span class="otherOutNeedPayMoney">';
$line=839;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=839;}else{
$out+='<span class="otherOutNeedPayMoney"></span>';
$line=839;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=840;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=841;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=842;if(arrange.badStatus == 1){
$out+='<span>';
$line=842;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=842;}else{
$out+='<span>';
$line=842;if(arrange.billUpdateTime != null){
$line=842;$out+=$escape(arrange.realGuidePayMoney);
$line=842;}else{
$line=842;$out+=$escape(arrange.guidePayMoney);
$line=842;}
$out+='</span>';
$line=842;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=844;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=845;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=846;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=847;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=848;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=850;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=853;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=855;}
$out+=' ';
$line=856;});
$out+=' ';
$line=857;}
$out+=' ';
$line=858;});
$out+=' </tbody> </table> ';
$line=861;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=865;if(remarkArrangeList[9] != null){
$line=865;$out+=$escape(remarkArrangeList[9].opCheckRemark);
$line=865;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=867;if(remarkArrangeList[9] != null){
$line=867;$out+=$escape(remarkArrangeList[9].financeCheckRemark);
$line=867;}
$out+='" /> </div> </div>';
$line=869;}
$out+=' </div> ';
$line=871;if(touristGroup != null){
$out+='  <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">来源</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">小车</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ';
$line=889;$each(touristGroup.touristGroupList,function(touristGroup,index){
$out+=' <tr> <td>';
$line=891;$out+=$escape(index+1);
$out+='</td> <td>';
$line=892;$out+=$escape(touristGroup.partnerAgencyName);
$out+='</td> <td>';
$line=893;$out+=$escape(touristGroup.name);
$out+='</td> <td>';
$line=894;$out+=$escape(touristGroup.mobileNumber);
$out+='</td> <td>';
$line=895;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=895;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=896;$out+=$escape(touristGroup.arriveService);
$out+='</td> <td>';
$line=897;$out+=$escape(touristGroup.busService);
$out+='</td> <td>';
$line=898;$out+=$escape(touristGroup.leaveService);
$out+='</td> <td><a href="javascript:void(0);" data-entity-id="';
$line=899;$out+=$escape(touristGroup.id);
$out+='" class="T-viewTripTransit">查看</a></td> </tr> ';
$line=901;});
$out+=' </tbody> </table> ';
$line=905;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=909;if(remarkArrangeList[10] != null){
$line=909;$out+=$escape(remarkArrangeList[10].opCheckRemark);
$line=909;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input readonly="readonly" type="text" style="width:30%;" value="';
$line=911;if(remarkArrangeList[10] != null){
$line=911;$out+=$escape(remarkArrangeList[10].financeCheckRemark);
$line=911;}
$out+='" /> </div> </div>';
$line=913;}
$out+=' </div> ';
$line=915;}
$out+=' </div> </div> <div style="height:30px;"></div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="col-sm-12 financialTripDetail">\r\n    <div>\r\n        <button data-entity-id="{{tripPlan.id}}" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;">\r\n            <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格\r\n        </button>\r\n    </div>\r\n    <div class="col-xs-12 border">\r\n        <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr style="">\r\n                <td><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td><label  style="font-weight: bold;">应用范围：{{if tripPlan.lineProduct.customerType == 1}}团体{{else if tripPlan.lineProduct.customerType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr class="T-mainTitle">\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr class="T-title">\r\n            <td colspan="2"><label style="font-weight: bold;">团收入：<span class="tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr >\r\n            <td><label>应收团款：<span class="tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td><label>自费返佣：<span class="tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td><label>导服费：<span class="tripCost-guideArrangePrice">{{guideArrange.price}}</span></label></td>\r\n            <td><label>保险：<span class="tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td><label>车费：<span class="tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td><label>导游购物返佣：<span class="tripCost-guideshopFee">{{guideArrange.manageFee}}</span></label></td>\r\n            <td><label>车费：<span class="tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>餐食费用：<span class="tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td><label>购物返佣：<span class="tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td><label>其他收入：<span class="tripIncome-otherInCome">0</span></label></td>\r\n            <td><label>餐费：<span class="tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>房费：<span class="tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>景区费用：<span class="tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>导游自费返佣：<span class="tripCost-guideSelfMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>房费：<span class="tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td><label>其他费用：<span class="tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>导游管理费：<span class="tripIncome-guideManageMoney">{{guideArrange.manageFee}}</span></label></td>\r\n            <td></td>\r\n            <td><label>票务费用：<span class="tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>其他费用：<span class="tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>自费费用：<span class="tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label style="display: none;">地接费用：<span class="tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td><label>票务费用{{isOp}}：<span class="tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="row" style="margin-bottom:15px;">\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n    </div>\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其他收入</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其他支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n        </ul>\r\n        <div class="tab-content T-list" style="position:relative;top: -2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-update-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>来源</td>\r\n                        <td>小组联系人</td>\r\n                        <td>联系电话</td>\r\n                        <td>人数</td>\r\n                        <td>应收</td>\r\n                        <td>已收</td>\r\n                        <td>现收</td>\r\n                        <td>明细</td>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                            <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                            <td>{{touristGroup.needPayAllMoney}}</td>\r\n                            <td>{{touristGroup.payedMoney}}</td>\r\n                            <td>{{touristGroup.currentNeedPayMoney}}</td>\r\n                            <td>\r\n                                {{if touristGroup.adultCount > 0}}\r\n                                大人：{{touristGroup.adultPrice}}X{{touristGroup.adultCount}}={{touristGroup.adultPrice * touristGroup.adultCount}}<br />\r\n                                小孩：{{touristGroup.childPrice}}X{{touristGroup.childCount}}={{touristGroup.childPrice * touristGroup.childCount}}<br />\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.describeInfo}} ：{{touristGroupFee.price}}X{{touristGroupFee.count}}={{touristGroupFee.price * touristGroupFee.count}}<br />\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[0] != null}}{{remarkArrangeList[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[0] != null}}{{remarkArrangeList[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-tripdetail-shop" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="6">打单</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <th class="th-border" colspan="2">人数返佣</th>\r\n                        <th class="th-border" colspan="2">停车返佣</th>\r\n                        <th class="th-border" rowspan="2">购物返佣总收入</th>\r\n                        <!--  <th class="th-border" rowspan="2">现收</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">购物店</th>\r\n                      <th class="th-border">商品</th>\r\n                      <th class="th-border">金额</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">总金额</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元/人</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元/车</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-shopping"> \r\n                    {{each dayList as day}}\r\n                    {{if day.shopArrange != null}}\r\n                    {{each day.shopArrange as shopArrangeList}}\r\n                    {{each shopArrangeList.shopArrangePolicy as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.whichDay}}_{{arrange.shopId}}">\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">{{arrange.shop.name}}</td>{{/if}}\r\n                        <td>{{arrange.shopPolicy.name}}</td>\r\n                        <td><span>{{arrange.consumeMoney}}</span><input policyId="{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{arrange.consumeMoney}}" old="{{arrange.consumeMoney}}" maxlength="11" \r\n                        {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumMoney{{arrange.whichDay}}_{{arrange.shopId}}"></span></td>{{/if}}\r\n                        <td><span>{{arrange.travelAgencyRate}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{arrange.travelAgencyRate*100}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td><span class="travelAgencyRateMoney">{{arrange.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{arrange.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span>{{arrange.guideRate}}</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="{{arrange.guideRate*100}}" old="{{arrange.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="guideRateMoney">{{arrange.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{arrange.guideRateMoney}}" \r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}</span><input type="hidden" name="customerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/><input type="hidden" name="touristAdultCount{{arrange.whichDay}}_{{arrange.shopId}}" value="{{tripPlan.touristAdultCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumCustomerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumCustomerRebateMoney">{{shopArrangeList.customerRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}</span><input {{if arrange.isConfirmAccount == 1}}readonly="readOnly"{{/if}} type="hidden" name="parkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" maxlength="11" \r\n                        /></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumParkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumParkingRebateMoney">{{shopArrangeList.parkingRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="T-shopIncome T-shopIncome{{arrange.whichDay}}_{{arrange.shopId}}"></span></td>{{/if}}\r\n                        <!-- {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input type="text" style="width:90px;"/></td>{{/if}} -->\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}  \r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[1] != null}}{{remarkArrangeList[1].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[1] != null}}{{remarkArrangeList[1].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 自费 -->\r\n            <div id="financial-count-tripdetail-selfpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="14">消费</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">自费商家</th>\r\n                      <th class="th-border">项目</th>\r\n                      <th class="th-border">单价</th>\r\n                      <th class="th-border">底价</th>\r\n                      <th class="th-border">人数返佣</th>\r\n                      <th class="th-border">数量</th>\r\n                      <th class="th-border">优惠</th>\r\n                      <th class="th-border">应收</th>\r\n                      <th class="th-border">应付</th>\r\n                      <th class="th-border">已付</th>\r\n                      <th class="th-border">导付</th>\r\n                      <th class="th-border">现收</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-selfPay">\r\n                    {{each dayList as day}}\r\n                    {{if day.selfPayArrange != null}}\r\n                    {{each day.selfPayArrange as arrangeList}}\r\n                    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}">\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                            <td>{{if arrange.selfPayItem != null }}{{arrange.selfPayItem.name}}{{/if}}</td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.marketPrice}}</span>{{else}}{{arrange.marketPrice}}{{/if}}\r\n                            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}{{arrange.price}}{{/if}}\r\n                            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                            <td>{{arrange.customerRebateMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                            <input style="width:60px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/><input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td> \r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                            <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" style="width:60px;"/></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="needIncome"></span>{{else}}<span class="needIncome"></span>{{/if}}</td>\r\n                            <td><span class="needPayMoney" >{{arrange.needPayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                            <td>{{arrange.payedMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            </td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGetMoney}}</span>{{else}}<span>{{arrange.realGetMoney}}</span>{{/if}}\r\n                            </td>\r\n                            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">查看</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{/if}}\r\n                                <input style="width:90px;" type="hidden" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td><span>{{arrange.guideRate*100 | parseInt}}</span>\r\n                                <input style="width:90px;" type="hidden" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>\r\n                            </td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRebateMoney}}</span>{{else}}<span class="guideRebateMoney">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <!-- <td>\r\n                                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n                            <td>{{arrange.billRemark}}</td>\r\n                            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[2] != null}}{{remarkArrangeList[2].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[2] != null}}{{remarkArrangeList[2].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 其他收入 -->\r\n            <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}">\r\n                        <td whichDay="{{otherInCome.whichDay}}">第{{otherInCome.whichDay}}天</td>\r\n                        <td>{{otherInCome.title}}</td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><span>{{otherInCome.count}}</span><input style="width:90px;" type="hidden" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{otherInCome.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[3] != null}}{{remarkArrangeList[3].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[3] != null}}{{remarkArrangeList[3].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n             <!-- 保险 -->\r\n            <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">保险公司</th>\r\n                        <th class="th-border">险种</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-insurance">\r\n                    {{each insuranceArrangeList as insuranceArrange}}\r\n                    <tr>\r\n                    <td>{{insuranceArrange.insurance.name}}</td>\r\n                    <td>{{insuranceArrange.type}}</td>\r\n                    <td>{{insuranceArrange.price}}</td>\r\n                    <td>{{insuranceArrange.memberCount}}</td>\r\n                    <td>{{insuranceArrange.needPayMoney}}</td>\r\n                    <td>{{insuranceArrange.payedMoney}}</td>\r\n                    <td></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[11] != null}}{{remarkArrangeList[11].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList[11] != null}}{{remarkArrangeList[11].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 车费 -->\r\n            <div id="financial-count-tripdetail-buspay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border">座位数</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-bus">\r\n                    {{each busCompanyArrange as busCompany}}\r\n                    {{if busCompany != null}}\r\n                    <tr badStatus = "{{busCompany.badStatus}}" busCompanyArrangeId="{{busCompany.id}}" >\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.seatCount}}{{/if}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.price}}</span>{{else}}<span>{{busCompany.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{busCompany.price}}" /></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realReduceMoney}}</span>{{else}}<span>{{busCompany.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney"></span>{{/if}}</td>\r\n                        <td>{{busCompany.payedMoney}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realGuidePayMoney}}</span>{{else}}<span>{{busCompany.realGuidePayMoney}}</span>{{/if}}  \r\n                            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></td>\r\n                         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{busCompany.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[4] != null}}{{remarkArrangeList[4].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[4] != null}}{{remarkArrangeList[4].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">时间</th>\r\n                            <th class="th-border">餐厅</th>\r\n                            <th class="th-border">类型</th>\r\n                            <th class="th-border">餐标</th>\r\n                            <th class="th-border">人数</th>\r\n                            <th class="th-border">优惠</th>\r\n                            <th class="th-border">应付</th>\r\n                            <th class="th-border">已付</th>\r\n                            <th class="th-border">导付</th>\r\n                            <th class="th-border">单据</th>\r\n                            <th class="th-border">差额</th>\r\n                            <th class="th-border">导游报账备注</th>\r\n                            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-restaurant"> \r\n                    {{each dayList as day}}\r\n                    {{if day.restaurantArrange != null}}\r\n                    {{each day.restaurantArrange as arrangeList}}\r\n                    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n                        {{if arrange.billUpdateTime != null}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{else}}{{if arrange.isChoose == 1}}自选{{else}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{/if}}{{/if}}</td>{{/if}}\r\n                        <td>{{arrange.type}}</td> \r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}<input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n                        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}<input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}<input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td><span class="billRemark">{{arrange.billRemark}}</span></td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[5] != null}}{{remarkArrangeList[5].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[5] != null}}{{remarkArrangeList[5].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 房费 -->\r\n            <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">酒店</th>\r\n                        <th class="th-border">房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">间数</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr> \r\n                    </thead>\r\n                    <tbody class="T-count-hotel">\r\n                    {{each dayList as day}}\r\n                    {{if day.hotelArrange != null}}\r\n                    {{each day.hotelArrange as arrangeList}}\r\n                    {{each arrangeList.hotelArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span>{{/if}}\r\n                        <input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[6] != null}}{{remarkArrangeList[6].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[6] != null}}{{remarkArrangeList[6].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 景区 -->\r\n            <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span> {{arrange.price}}</span>{{/if}}\r\n                       <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[7] != null}}{{remarkArrangeList[7].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[7] != null}}{{remarkArrangeList[7].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 票务 -->\r\n            <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">票务商家</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">出发地</th>\r\n                        <th class="th-border">目的地</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-ticket">\r\n                    {{each ticketArrangeList as ticketArrange}}\r\n                    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n                    <td>{{arrange.shift}}</td>\r\n                    <td>{{arrange.seatLevel}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" name="realCount" type="hidden" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[8] != null}}{{remarkArrangeList[8].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 其他支出 -->\r\n            <div id="financial-count-tripdetail-otherpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th> \r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherOut"> \r\n                    {{each dayList as day}}\r\n                    {{if day.otherArrange != null}}\r\n                    {{each day.otherArrange as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" otherArrangeId="{{arrange.id}}">\r\n                        <td>第{{arrange.whichDay}}天</td>\r\n                        <td>{{arrange.name}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[9] != null}}{{remarkArrangeList[9].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[9] != null}}{{remarkArrangeList[9].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">来源</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">小车</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.busService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                     {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div>\r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[10] != null}}{{remarkArrangeList[10].opCheckRemark}}{{/if}}" />\r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input readonly="readonly" type="text" style="width:30%;" value="{{if remarkArrangeList[10] != null}}{{remarkArrangeList[10].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});