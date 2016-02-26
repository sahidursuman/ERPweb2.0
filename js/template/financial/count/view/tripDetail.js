/*TMODJS:{"debug":true,"version":170,"md5":"311dfefb4b8788e4a89d7b05e118c564"}*/
define(function(require){return require('../../../template')('financial/count/view/tripDetail', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,tripPlan=$data.tripPlan,busCompanyArrange=$data.busCompanyArrange,touristGroup=$data.touristGroup,guideArrange=$data.guideArrange,insurancePrice=$data.insurancePrice,isOp=$data.isOp,WEB_IMG_URL_BIG=$data.WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL=$data.WEB_IMG_URL_SMALL,$each=$utils.$each,touristGroups=$data.touristGroups,index=$data.index,touristGroupFee=$data.touristGroupFee,$index=$data.$index,isFinance=$data.isFinance,remarkArrangeList=$data.remarkArrangeList,dayList=$data.dayList,day=$data.day,arrangeList=$data.arrangeList,arrange=$data.arrange,i=$data.i,itemSet=$data.itemSet,editStatus=$data.editStatus,arrangeIncomePaymentList=$data.arrangeIncomePaymentList,otherInCome=$data.otherInCome,busCompany=$data.busCompany,ticketArrangeList=$data.ticketArrangeList,ticketArrange=$data.ticketArrange,insuranceArrangeList=$data.insuranceArrangeList,insuranceArrange=$data.insuranceArrange,guideArranges=$data.guideArranges,rs=$data.rs,$out='';$out+='<div class="col-sm-12 financialTripDetail"> <div> <button data-entity-id="';
$line=3;$out+=$escape(tripPlan.id);
$out+='" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;"> <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格 </button> </div> <div class="col-xs-12 border"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr style=""> <td><label style="font-weight: bold;">线路：';
$line=11;$out+=$escape(tripPlan.lineProduct.name);
$out+='</label></td> <td><label style="font-weight: bold;">类别：';
$line=12;$out+=$escape(tripPlan.lineProduct.type);
$out+='</label></td> <td><label style="font-weight: bold;">针对客源：';
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
$out+='" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">';
$line=46;$out+=$escape(tripPlan.guideAllPreMoney);
$out+='</span></label> </div></td> </tr> <tr class="T-title"> <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td> <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td> <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td> </tr> <tr > <td><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">';
$line=56;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span></label></td> <td><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td> <td><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">';
$line=58;$out+=$escape(guideArrange.price);
$out+='</span></label></td> <td><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">';
$line=59;$out+=$escape(insurancePrice);
$out+='</span></label></td> <td><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td> <td><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td> <td><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">';
$line=62;$out+=$escape(touristGroup.outBusMoney);
$out+='</span></label></td> <td><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">';
$line=63;$out+=$escape(touristGroup.outRestaurantMoney);
$out+='</span></label></td> </tr> <tr> <td><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td> <td><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td> <td><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">';
$line=72;$out+=$escape(touristGroup.outHotelMoney);
$out+='</span></label></td> <td><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">';
$line=73;$out+=$escape(touristGroup.outOtherMoney);
$out+='</span></label></td> </tr> <tr> <td><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">';
$line=76;$out+=$escape(guideArrange.manageFee);
$out+='</span></label></td> <td></td> <td><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td> <td><label>票务费用';
$line=82;$out+=$escape(isOp);
$out+='：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">';
$line=82;$out+=$escape(touristGroup.outTicketMoney);
$out+='</span></label></td> <td></td> </tr> </tbody> </table> <input type="hidden" value="';
$line=87;$out+=$escape(WEB_IMG_URL_BIG);
$out+='" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="';
$line=88;$out+=$escape(WEB_IMG_URL_SMALL);
$out+='" name="WEB_IMG_URL_SMALL" /> <div class="row" style="margin-bottom:15px;"> <div class="col-md-1"> <a href="javascript:void(0);" class="btn-financialLog">操作记录</a> </div> <div class="col-md-1"> <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a> </div> </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a> </li> ';
$line=130;if(touristGroup != null){
$out+=' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a> </li> ';
$line=134;}
$out+=' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a> </li> </ul> <div class="tab-content T-list" style="position:relative;top: -2px">  <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <tbody class="T-tripDetail"> <tr> <td>序号</td> <td>客户</td> <th>收客单号</th> <td>小组联系人</td> <td>联系电话</td> <td>人数</td> <td>应收</td> <td>社收</td> <td>现收</td> <td>明细</td> ';
$line=158;$each(touristGroups,function(touristGroup,index){
$out+=' <tr> <td>';
$line=160;$out+=$escape(index+1);
$out+='</td> <td>';
$line=161;if(touristGroup.partnerAgency){
$line=161;$out+=$escape(touristGroup.partnerAgency.travelAgencyName);
$line=161;}
$out+='</td> <td>';
$line=162;$out+=$escape(touristGroup.orderNumber);
$out+='</td> <td>';
$line=163;if(touristGroup.touristGroupMember != null){
$line=163;$out+=$escape(touristGroup.touristGroupMember.name);
$line=163;}
$out+='</td> <td>';
$line=164;if(touristGroup.touristGroupMember != null){
$line=164;$out+=$escape(touristGroup.touristGroupMember.mobileNumber);
$line=164;}
$out+='</td> <td><span class="F-float F-count">';
$line=165;$out+=$escape(touristGroup.adultCount);
$out+='</span>大<span class="F-float F-count">';
$line=165;$out+=$escape(touristGroup.childCount);
$out+='</span>小</td> <td><span class="F-float F-money">';
$line=166;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span></td> <td><span class="F-float F-money">';
$line=167;$out+=$escape(touristGroup.payedMoney);
$out+='</span></td> <td><span class="F-float F-money">';
$line=168;$out+=$escape(touristGroup.currentNeedPayMoney);
$out+='</span></td> <td> ';
$line=170;if(touristGroup.subStatus == 0){
$out+=' ';
$line=171;$each(touristGroup.touristGroupFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=172;$out+=$escape(touristGroupFee.name);
$out+=' ： <span class="F-float F-money">';
$line=173;$out+=$escape(touristGroupFee.price);
$out+='</span>&nbsp;X&nbsp;<span class="F-float F-count">';
$line=173;$out+=$escape(touristGroupFee.count);
$out+='</span>= <span class="F-float F-money">';
$line=174;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='</span><br /> ';
$line=175;});
$out+=' ';
$line=176;}else{
$out+=' ';
$line=177;$each(touristGroup.touristGroupSubFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=178;$out+=$escape(touristGroupFee.name);
$out+=' ： <span class="F-float F-money">';
$line=179;$out+=$escape(touristGroupFee.price);
$out+='</span>&nbsp;X&nbsp;<span class="F-float F-count">';
$line=179;$out+=$escape(touristGroupFee.count);
$out+='</span>= <span class="F-float F-money">';
$line=180;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='</span><br /> ';
$line=181;});
$out+=' ';
$line=182;}
$out+=' </td> </td> </tr> ';
$line=186;});
$out+=' </tbody> </table> ';
$line=190;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=193;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=193;}
$out+=' type="text" style="width:30%;" value="';
$line=193;if(remarkArrangeList.tripDetailRemark.length>0){
$line=193;$out+=$escape(remarkArrangeList.tripDetailRemark[0].opCheckRemark);
$line=193;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=196;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=196;}
$out+=' type="text" style="width:30%;" value="';
$line=196;if(remarkArrangeList.tripDetailRemark.length>0){
$line=196;$out+=$escape(remarkArrangeList.tripDetailRemark[0].financeCheckRemark);
$line=196;}
$out+='"/> </div> </div>';
$line=198;}
$out+=' </div>  <div id="financial-count-tripdetail-shop" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border"><span class="necessary">*</span>商品</th> <th class="th-border"><span class="necessary">*</span>金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> <th class="th-border"><span class="necessary">*</span>比例%</th> <th class="th-border">返佣</th> </tr> </thead> <tbody class="T-count-shopping"> ';
$line=224;$each(dayList,function(day,$index){
$out+=' ';
$line=225;if(day.shopArrange != null){
$out+=' ';
$line=226;$each(day.shopArrange,function(arrangeList,$index){
$out+=' ';
$line=227;$each(arrangeList.shopArrangeList,function(arrange,i){
$out+=' ';
$line=229;if(arrange != null){
$out+=' <tr class="oldData" shopArrangeId="';
$line=230;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=230;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=230;$out+=$escape(arrange.whichDay);
$out+='" rowspan = "';
$line=230;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"> <td rowspan="';
$line=231;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"><span class="whichDay"></span> </td> <td rowspan="';
$line=232;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='">';
$line=232;$out+=$escape(arrange.shop.name);
$out+='<input type="hidden" name="shopId" value="';
$line=232;$out+=$escape(arrange.shopId);
$out+='"></td> ';
$line=233;if(arrange.shopArrangeItemSet != null){
$out+=' ';
$line=234;$each(arrange.shopArrangeItemSet,function(itemSet,index){
$out+=' ';
$line=235;if(index == 0){
$out+=' <td><span><input type="hidden" name="shopPolicyArrId" value="';
$line=237;$out+=$escape(itemSet.id);
$out+='">';
$line=237;if(itemSet.shopPolicy != null ){
$line=237;$out+=$escape(itemSet.shopPolicy.name);
$out+=' ';
$line=238;}else{
$line=238;$out+=$escape(itemSet.name);
$out+='<input type="hidden" name="shopPolicy" value="';
$line=238;$out+=$escape(itemSet.name);
$out+='"></span>';
$line=238;}
$out+=' </td> <td>';
$line=241;$out+=$escape(itemSet.consumeMoney);
$out+='<input class="F-float F-money" policyId="';
$line=241;if(itemSet.shopPolicy != null){
$line=241;$out+=$escape(itemSet.shopPolicy.id);
$line=241;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=241;$out+=$escape(itemSet.consumeMoney);
$out+='" old="';
$line=241;$out+=$escape(itemSet.consumeMoney);
$out+='" maxlength="11" ';
$line=242;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=242;}
$out+='/></td> <td>';
$line=243;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=244;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=245;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=247;}
$out+=' </td> <td><span class="F-float F-count">';
$line=250;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=250;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='" old="';
$line=250;$out+=$escape(itemSet.travelAgencyRate);
$out+='" maxlength="5" ';
$line=250;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=250;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=252;$out+=$escape(itemSet.travelAgencyRateMoney);
$out+='</span><input type="hidden" class="travelAgencyRateMoney';
$line=252;$out+=$escape(arrange.whichDay);
$out+='_';
$line=252;$out+=$escape(arrange.shopId);
$out+='" name="travelAgencyRateMoney" value="';
$line=252;$out+=$escape(itemSet.travelAgencyRateMoney);
$out+='" ';
$line=252;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=252;}
$out+='/></td> <td><span class="F-float F-count">';
$line=254;$out+=$escape(itemSet.guideRate*100);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" value="';
$line=254;$out+=$escape(itemSet.guideRate*100);
$out+='" old="';
$line=254;$out+=$escape(itemSet.guideRate);
$out+='" maxlength="5" ';
$line=254;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=254;}
$out+='/></td> <td><span class="guideRateMoney F-float F-money">';
$line=256;$out+=$escape(itemSet.guideRkateMoney);
$out+='</span><input type="hidden" class="guideRateMoney';
$line=256;$out+=$escape(arrange.whichDay);
$out+='_';
$line=256;$out+=$escape(arrange.shopId);
$out+='" name="guideRateMoney" value="';
$line=256;$out+=$escape(itemSet.guideRateMoney);
$out+='" ';
$line=257;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=257;}
$out+='/></td> <td > ';
$line=260;if(editStatus == 1){
$out+=' ';
$line=261;$out+=$escape(itemSet.billRemark);
$out+=' ';
$line=262;}else{
$line=262;if(arrange.shopPolicy != null){
$line=262;$out+=$escape(arrange.shopPolicy.remark);
$line=262;}else{
$line=262;$out+=$escape(itemSet.billRemark);
$line=262;}
$line=262;}
$out+=' </td> ';
$line=264;}
$out+=' ';
$line=265;});
$out+=' ';
$line=266;}
$out+=' <td rowspan="';
$line=267;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='">';
$line=267;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=267;}else{
$out+='已对账';
$line=267;}
$out+='</td> </tr> ';
$line=269;if(arrange.shopArrangeItemSet != null){
$out+=' ';
$line=270;$each(arrange.shopArrangeItemSet,function(itemSet,index){
$out+=' ';
$line=271;if(index > 0){
$out+=' <tr shopArrangeId="';
$line=272;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=272;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=272;$out+=$escape(arrange.whichDay);
$out+='" rowspan = "';
$line=272;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"> <td><span> <input type="hidden" name="shopPolicyArrId" value="';
$line=274;$out+=$escape(itemSet.id);
$out+='"> <input type="hidden" name="shopPolicy" value="';
$line=276;if(itemSet.shopPolicy != null ){
$out+=' ';
$line=277;$out+=$escape(itemSet.shopPolicy.name);
$line=277;}else{
$out+=' ';
$line=278;$out+=$escape(itemSet.name);
$out+=' ';
$line=279;}
$out+='"> <input type="hidden" name="shopPolicyId" value="';
$line=280;if(itemSet.shopPolicy != null ){
$out+=' ';
$line=281;$out+=$escape(itemSet.shopPolicy.id);
$out+=' ';
$line=282;}
$out+='"> ';
$line=283;if(itemSet.shopPolicy != null ){
$line=283;$out+=$escape(itemSet.shopPolicy.name);
$out+=' ';
$line=285;}else{
$line=285;$out+=$escape(itemSet.name);
$out+=' ';
$line=287;}
$out+=' </td> <td>';
$line=291;$out+=$escape(itemSet.consumeMoney);
$out+='<input class="F-float F-money" policyId="';
$line=291;if(itemSet.shopPolicy != null){
$line=291;$out+=$escape(itemSet.shopPolicy.id);
$line=291;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=291;$out+=$escape(itemSet.consumeMoney);
$out+='" old="';
$line=291;$out+=$escape(itemSet.consumeMoney);
$out+='" maxlength="11" ';
$line=292;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=292;}
$out+='/></td> <td>';
$line=293;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=294;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=295;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=297;}
$out+=' </td> <td><span class="F-float F-count">';
$line=300;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=300;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='" old="';
$line=300;$out+=$escape(itemSet.travelAgencyRate);
$out+='" maxlength="5" ';
$line=300;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=300;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=302;$out+=$escape(itemSet.travelAgencyRateMoney);
$out+='</span><input type="hidden" class="travelAgencyRateMoney';
$line=302;$out+=$escape(arrange.whichDay);
$out+='_';
$line=302;$out+=$escape(arrange.shopId);
$out+='" name="travelAgencyRateMoney" value="';
$line=302;$out+=$escape(itemSet.travelAgencyRateMoney);
$out+='" ';
$line=302;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=302;}
$out+='/></td> <td><span class="F-float F-count">';
$line=304;$out+=$escape(itemSet.guideRate * 100);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" value="';
$line=304;$out+=$escape(itemSet.guideRate*100);
$out+='" old="';
$line=304;$out+=$escape(itemSet.guideRate);
$out+='" maxlength="5" ';
$line=304;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=304;}
$out+='/></td> <td><span class="guideRateMoney F-float F-money">';
$line=306;$out+=$escape(itemSet.guideRkateMoney);
$out+='</span><input type="hidden" class="guideRateMoney';
$line=306;$out+=$escape(arrange.whichDay);
$out+='_';
$line=306;$out+=$escape(arrange.shopId);
$out+='" name="guideRateMoney" value="';
$line=306;$out+=$escape(itemSet.guideRateMoney);
$out+='" ';
$line=307;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=307;}
$out+='/></td> <td > ';
$line=310;if(editStatus == 1){
$out+=' ';
$line=311;$out+=$escape(itemSet.billRemark);
$out+=' ';
$line=312;}else{
$line=312;if(arrange.shopPolicy != null){
$line=312;$out+=$escape(arrange.shopPolicy.remark);
$line=312;}else{
$line=312;$out+=$escape(itemSet.billRemark);
$line=312;}
$line=312;}
$out+=' </td></tr> ';
$line=314;}
$out+=' ';
$line=315;});
$out+=' ';
$line=316;}
$out+=' ';
$line=317;}
$out+=' ';
$line=318;});
$out+=' ';
$line=319;});
$out+=' ';
$line=320;}
$out+=' ';
$line=321;});
$out+=' </tbody> </table> ';
$line=324;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=327;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=327;}
$out+=' type="text" style="width:30%;" value="';
$line=327;if(remarkArrangeList.shopReamrk.length>0){
$line=327;$out+=$escape(remarkArrangeList.shopReamrk[0].opCheckRemark);
$line=327;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=330;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=330;}
$out+=' type="text" style="width:30%;" value="';
$line=330;if(remarkArrangeList.shopReamrk.length>0){
$line=330;$out+=$escape(remarkArrangeList.shopReamrk[0].financeCheckRemark);
$line=330;}
$out+='" /> </div> </div>';
$line=332;}
$out+=' </div>  <div id="financial-count-tripdetail-selfpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="16">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=344;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=344;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">自费商家</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">应收数量</th> <th class="th-border">应收优惠</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border">底价</th> <th class="th-border">应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ';
$line=369;$each(dayList,function(day,$index){
$out+=' ';
$line=370;if(day.selfPayArrange != null){
$out+=' ';
$line=371;$each(day.selfPayArrange,function(arrangeList,$index){
$out+=' ';
$line=372;$each(arrangeList.selfPayArrangeList,function(arrange,index){
$out+=' ';
$line=373;if(arrange != null){
$out+=' <tr badStatus = "';
$line=374;$out+=$escape(arrange.badStatus);
$out+='" selfPayArrangeId="';
$line=374;$out+=$escape(arrange.id);
$out+='" selfPayId="';
$line=374;$out+=$escape(arrange.selfPayId);
$out+='"> ';
$line=375;if(index == 0 ){
$out+='<td rowspan="';
$line=375;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=375;}
$out+=' ';
$line=376;if(index == 0 ){
$out+='<td rowspan="';
$line=376;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=376;$out+=$escape(arrange.selfPay.name);
$out+='</td>';
$line=376;}
$out+=' <td>';
$line=377;if(arrange.selfPayItem != null ){
$line=377;$out+=$escape(arrange.selfPayItem.name);
$line=377;}
$out+='</td> <td>';
$line=378;if(arrange.badStatus == 1){
$out+='<span>';
$line=378;$out+=$escape(arrange.marketPrice);
$out+='</span>';
$line=378;}else{
$line=378;$out+=$escape(arrange.marketPrice);
$line=378;}
$out+=' <input type="hidden" name="marketPrice" value="';
$line=379;$out+=$escape(arrange.marketPrice);
$out+='"/></td> <td><span class="needIncomeCount">';
$line=381;$out+=$escape(arrange.needIncomeCount);
$out+='</span></td> <td><span class="needInReduceMoney"></span></td> <td> ';
$line=386;if(arrange.badStatus == 1){
$out+='<span class="needIncome">';
$line=386;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=386;}else{
$out+='<span class="needIncome">';
$line=386;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=386;}
$out+='</td> <td> ';
$line=388;if(arrange.badStatus == 1){
$out+='<span class="realGetMoney">';
$line=388;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=388;}else{
$out+=' <span class="realGetMoney">';
$line=389;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=389;}
$out+=' </td> <td>';
$line=392;if(arrange.badStatus == 1){
$out+='<span>';
$line=392;$out+=$escape(arrange.price);
$out+='</span>';
$line=392;}else{
$line=392;$out+=$escape(arrange.price);
$line=392;}
$out+=' <input type="hidden" name="price" value="';
$line=393;$out+=$escape(arrange.price);
$out+='" /></td> <td> ';
$line=396;if(arrange.badStatus == 1){
$out+='<span>';
$line=396;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=396;}else{
$out+='<span>';
$line=396;if(arrange.billUpdateTime != null){
$line=396;$out+=$escape(arrange.realCount);
$line=396;}else{
$line=396;$out+=$escape(arrange.memberCount);
$line=396;}
$out+='</span>';
$line=396;}
$out+=' <input style="width:60px;" type="hidden" name="realCount" ';
$line=397;if(arrange.billUpdateTime != null){
$out+='value="';
$line=397;$out+=$escape(arrange.realCount);
$out+='"';
$line=397;}else{
$out+='value="';
$line=397;$out+=$escape(arrange.memberCount);
$out+='"';
$line=397;}
$out+=' maxlength="5"/><input type="hidden" name="memberCount" value="';
$line=397;$out+=$escape(arrange.memberCount);
$out+='" ';
$line=397;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=397;}
$out+=' /></td> <td> ';
$line=399;if(arrange.badStatus == 1){
$out+='<span>';
$line=399;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=399;}else{
$out+='<span>';
$line=399;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=399;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=400;$out+=$escape(arrange.realReduceMoney);
$out+='" style="width:60px;"/></td> <td><span class="needPayMoney" >';
$line=401;$out+=$escape(arrange.needPayMoney);
$out+='</span><input type="hidden" class="selfMoney"></td> <td>';
$line=402;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> ';
$line=404;if(arrange.badStatus == 1){
$out+='<span>';
$line=404;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=404;}else{
$out+=' <span> ';
$line=406;if(arrange.payType == 0){
$out+=' 现金 ';
$line=408;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=410;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=412;}
$out+=' </span> &nbsp;&nbsp; <span>';
$line=415;if(arrange.billUpdateTime != null){
$line=415;$out+=$escape(arrange.realGuidePayMoney);
$line=415;}else{
$line=415;$out+=$escape(arrange.guidePayMoney);
$line=415;}
$out+='</span>';
$line=415;}
$out+=' </td> <td>';
$line=418;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=419;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=420;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=422;}
$out+=' </td> <td>';
$line=424;$out+=$escape(arrange.customerRebateMoney);
$out+='</td> <td> ';
$line=426;if(arrange.badStatus == 1){
$out+='<span>';
$line=426;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=426;}else{
$out+='<span>';
$line=426;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=426;}
$out+=' <input style="width:90px;" type="hidden" name="travelAgencyRate" value="';
$line=427;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='" old="';
$line=427;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=427;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=427;}
$out+=' /></td> <td> ';
$line=429;if(arrange.badStatus == 1){
$out+='<span>';
$line=429;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=429;}else{
$out+='<span class="travelAgencyRebateMoney">';
$line=429;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=429;}
$out+=' <input type="hidden" name="travelAgencyRebateMoney" value="';
$line=431;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='" ';
$line=431;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=431;}
$out+=' /></td> <td><span>';
$line=432;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='</span> <input style="width:90px;" type="hidden" name="guideRate" value="';
$line=433;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='" old="';
$line=433;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5"/> </td> <td>';
$line=435;if(arrange.badStatus == 1){
$out+='<span>';
$line=435;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=435;}else{
$out+='<span class="guideRebateMoney">';
$line=435;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=435;}
$out+=' <input type="hidden" name="guideRebateMoney" value="';
$line=437;$out+=$escape(arrange.guideRebateMoney);
$out+='" ';
$line=437;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=437;}
$out+=' /></td> <!-- <td> <span class="guideRate">';
$line=439;$out+=$escape(arrange.customerRebateMoney);
$out+='</span> <input type="hidden" name="guideRate" value="';
$line=440;$out+=$escape(arrange.customerRebateMoney);
$out+='" ';
$line=440;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=440;}
$out+=' /></td> ';
$line=441;if(index == 0 ){
$out+='<td rowspan="';
$line=441;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=441;$out+=$escape(arrange.customerRebateMoney * tripPlan.touristAdultCount);
$out+='</td>';
$line=441;}
$out+=' --> <td>';
$line=442;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=443;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=443;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=443;}else{
$out+='已对账';
$line=443;}
$out+='</td>';
$line=443;}
$out+=' </tr> ';
$line=445;}
$out+=' ';
$line=446;});
$out+=' ';
$line=447;});
$out+=' ';
$line=448;}
$out+=' ';
$line=449;});
$out+=' </tbody> </table> ';
$line=452;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=456;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=456;}
$out+=' type="text" style="width:30%;" value="';
$line=456;if(remarkArrangeList.selfRemark.length>0){
$line=456;$out+=$escape(remarkArrangeList.selfRemark[0].opCheckRemark);
$line=456;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=459;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=459;}
$out+=' type="text" style="width:30%;" value="';
$line=459;if(remarkArrangeList.selfRemark.length>0){
$line=459;$out+=$escape(remarkArrangeList.selfRemark[0].financeCheckRemark);
$line=459;}
$out+='" /> </div> </div> ';
$line=462;}
$out+=' </div>  <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=476;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=476;}
$out+=' </tr> </thead> <tbody class="T-count-otherIn"> ';
$line=480;$each(arrangeIncomePaymentList,function(otherInCome,$index){
$out+=' ';
$line=481;if(otherInCome != null){
$out+=' <tr otherInId="';
$line=482;$out+=$escape(otherInCome.id);
$out+='" otherIn="';
$line=482;$out+=$escape(otherInCome.id);
$out+='" whichDay="';
$line=482;$out+=$escape(otherInCome.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=484;$out+=$escape(otherInCome.title);
$out+='</td> <td><span>';
$line=485;$out+=$escape(otherInCome.price);
$out+='</span><input style="width:90px;" type="hidden" name="price" value="';
$line=485;$out+=$escape(otherInCome.price);
$out+='" old="';
$line=485;$out+=$escape(otherInCome.price);
$out+='" maxlength="11" ';
$line=486;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=486;}
$out+=' /></td> <td><span>';
$line=488;$out+=$escape(otherInCome.count);
$out+='</span><input style="width:90px;" type="hidden" name="count" value="';
$line=488;$out+=$escape(otherInCome.count);
$out+='" old="';
$line=488;$out+=$escape(otherInCome.count);
$out+='" maxlength="11" ';
$line=489;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=489;}
$out+='/></td> <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="';
$line=490;$out+=$escape(otherInCome.needPayMoney);
$out+='" ';
$line=491;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=491;}
$out+='/></span></td> <td>';
$line=492;if(otherInCome.billImage != null && otherInCome.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=493;$out+=$escape(otherInCome.billImage);
$out+='" class="btn-view">查看</a> ';
$line=494;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=496;}
$out+=' </td> <td>';
$line=498;$out+=$escape(otherInCome.billRemark);
$out+='</td> ';
$line=499;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=499;if(otherInCome.isConfirmAccount == 0){
$out+='未对账';
$line=499;}else{
$out+='已对账';
$line=499;}
$out+='</td>';
$line=499;}
$out+=' </tr> ';
$line=501;}
$out+=' ';
$line=502;});
$out+=' </tbody> </table> ';
$line=505;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=508;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=508;}
$out+=' type="text" style="width:30%;" value="';
$line=508;if(remarkArrangeList.otherInRemark.length>0){
$line=508;$out+=$escape(remarkArrangeList.otherInRemark[0].opCheckRemark);
$line=508;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=511;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=511;}
$out+=' type="text" style="width:30%;" value="';
$line=511;if(remarkArrangeList.otherInRemark.length>0){
$line=511;$out+=$escape(remarkArrangeList.otherInRemark[0].financeCheckRemark);
$line=511;}
$out+='" /> </div> </div>';
$line=513;}
$out+=' </div>  <div id="financial-count-tripdetail-buspay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=535;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=535;}
$out+=' </tr> </thead> <tbody class="T-count-bus"> ';
$line=540;$each(busCompanyArrange,function(busCompany,$index){
$out+=' ';
$line=541;if(busCompany != null){
$out+=' <tr badStatus = "';
$line=542;$out+=$escape(busCompany.badStatus);
$out+='" busCompanyArrangeId="';
$line=542;$out+=$escape(busCompany.id);
$out+='" > <td>';
$line=543;if(busCompany.busCompany != null){
$line=543;$out+=$escape($helpers. dateFormat(busCompany.startTime ,  'yyyy-MM-dd'));
$line=543;}
$out+='</td> <td>';
$line=544;if(busCompany.busCompany != null){
$line=544;$out+=$escape($helpers. dateFormat(busCompany.endTime ,  'yyyy-MM-dd'));
$line=544;}
$out+='</td> <td>';
$line=545;if(busCompany.busCompany != null){
$out+=' ';
$line=546;if(busCompany.taskType == 0){
$out+=' 全程 ';
$line=548;}else if(busCompany.taskType == 1){
$out+=' 接机 ';
$line=550;}else if(busCompany.taskType == 2){
$out+=' 送机 ';
$line=552;}else if(busCompany.taskType == 3){
$out+=' 前段 ';
$line=554;}else if(busCompany.taskType == 4){
$out+=' 中段 ';
$line=556;}else if(busCompany.taskType == 5){
$out+=' 后段 ';
$line=558;}
$out+=' ';
$line=559;}
$out+='</td> <td>';
$line=560;if(busCompany.busCompany != null){
$line=560;$out+=$escape(busCompany.busCompany.companyName);
$line=560;}
$out+='</td> <td>';
$line=561;if(busCompany.bus != null){
$line=561;$out+=$escape(busCompany.bus.licenseNumber);
$line=561;}
$out+='</td> <td>';
$line=562;if(busCompany.bus != null){
$line=562;$out+=$escape(busCompany.bus.seatCount);
$line=562;}
$out+='</td> <td>';
$line=563;if(busCompany.badStatus == 1){
$out+='<span>';
$line=563;$out+=$escape(busCompany.price);
$out+='</span>';
$line=563;}else{
$out+='<span>';
$line=563;$out+=$escape(busCompany.price);
$out+='</span>';
$line=563;}
$out+=' <input type="hidden" name="price" value="';
$line=564;$out+=$escape(busCompany.price);
$out+='" /></td> <td>';
$line=565;if(busCompany.badStatus == 1){
$out+='<span>';
$line=565;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=565;}else{
$out+='<span>';
$line=565;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=565;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=566;$out+=$escape(busCompany.realReduceMoney);
$out+='" old="';
$line=566;$out+=$escape(busCompany.realReduceMoney);
$out+='"/></td> <td>';
$line=567;if(busCompany.badStatus == 1){
$out+='<span class="BusneedPayMoney">';
$line=567;$out+=$escape(busCompany.payedMoney+busCompany.realGuidePayMoney);
$out+='</span>';
$line=567;}else{
$out+='<span class="BusneedPayMoney"></span>';
$line=567;}
$out+='</td> <td>';
$line=568;$out+=$escape(busCompany.payedMoney);
$out+='</td> <td>';
$line=569;if(busCompany.badStatus == 1){
$out+='<span>';
$line=569;$out+=$escape(busCompany.realGuidePayMoney);
$out+='</span>';
$line=569;}else{
$out+=' <span> ';
$line=571;if(busCompany.payType == 0){
$out+=' 现金 ';
$line=573;}else if(busCompany.payType == 1){
$out+=' 刷卡 ';
$line=575;}else if(busCompany.payType == 2){
$out+=' 签单 ';
$line=577;}
$out+=' </span> &nbsp;&nbsp; <span> ';
$line=581;if(busCompany.billUpdateTime != null){
$line=581;$out+=$escape(busCompany.realGuidePayMoney);
$line=581;}else{
$line=581;$out+=$escape(busCompany.guidePayMoney);
$line=581;}
$out+='</span>';
$line=581;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=582;$out+=$escape(busCompany.payedMoney);
$out+='" ';
$line=582;if(busCompany.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=582;}
$out+='/> <input type="hidden" name="guidePayMoney" value="';
$line=583;$out+=$escape(busCompany.guidePayMoney);
$out+='" /></td> <td>';
$line=584;if(busCompany.billImage != null && busCompany.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=585;$out+=$escape(busCompany.billImage);
$out+='" class="btn-view">查看</a> ';
$line=586;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=588;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=591;$out+=$escape(busCompany.billRemark);
$out+='</td> ';
$line=592;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=592;if(busCompany.isConfirmAccount == 0){
$out+='未对账';
$line=592;}else{
$out+='已对账';
$line=592;}
$out+='</td>';
$line=592;}
$out+=' </tr> ';
$line=594;}
$out+=' ';
$line=595;});
$out+=' </tbody> </table> ';
$line=598;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=602;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=602;}
$out+=' type="text" style="width:30%;" value="';
$line=602;if(remarkArrangeList.busRemark.length>0){
$line=602;$out+=$escape(remarkArrangeList.busRemark[0].opCheckRemark);
$line=602;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=605;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=605;}
$out+=' type="text" style="width:30%;" value="';
$line=605;if(remarkArrangeList.busRemark.length>0){
$line=605;$out+=$escape(remarkArrangeList.busRemark[0].financeCheckRemark);
$line=605;}
$out+='" /> </div> </div> ';
$line=608;}
$out+=' </div>  <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">餐厅</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=628;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=628;}
$out+=' </tr> </thead> <tbody class="T-count-restaurant"> ';
$line=632;$each(dayList,function(day,$index){
$out+=' ';
$line=633;if(day.restaurantArrange != null){
$out+=' ';
$line=634;$each(day.restaurantArrange,function(arrangeList,$index){
$out+=' ';
$line=635;$each(arrangeList.restaurantArrangeList,function(arrange,index){
$out+=' ';
$line=636;if(arrange != null){
$out+=' <tr badStatus = "';
$line=637;$out+=$escape(arrange.badStatus);
$out+='" restaurantArrangeId="';
$line=637;$out+=$escape(arrange.id);
$out+='" restaurantId="';
$line=637;if(arrange.restaurant != null){
$line=637;$out+=$escape(arrange.restaurant.id);
$line=637;}
$out+='" restaurantStandardId="';
$line=637;if(arrange.restaurantStandard != null){
$line=637;$out+=$escape(arrange.restaurantStandard.id);
$line=637;}
$out+='" whichDay="';
$line=637;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=638;if(index == 0){
$out+='<td rowspan="';
$line=638;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=638;}
$out+=' ';
$line=639;if(index == 0){
$out+='<td rowspan="';
$line=639;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"> ';
$line=640;if(arrange.billUpdateTime != null){
$line=640;if(arrange.restaurant != null){
$line=640;$out+=$escape(arrange.restaurant.name);
$line=640;}
$line=640;}else{
$line=640;if(arrange.isChoose == 1){
$out+='自选';
$line=640;}else{
$line=640;if(arrange.restaurant != null){
$line=640;$out+=$escape(arrange.restaurant.name);
$line=640;}
$line=640;}
$line=640;}
$out+='</td>';
$line=640;}
$out+=' <td>';
$line=641;$out+=$escape(arrange.type);
$out+='</td> <td>';
$line=642;if(arrange.badStatus == 1){
$out+='<span>';
$line=642;$out+=$escape(arrange.price);
$out+='</span>';
$line=642;}else{
$out+='<span class="price">';
$line=642;$out+=$escape(arrange.price);
$out+='</span>';
$line=642;}
$out+='<input type="hidden" name="price" value="';
$line=642;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=643;if(arrange.badStatus == 1){
$out+='<span>';
$line=643;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=643;}else{
$out+='<span>';
$line=643;if(arrange.billUpdateTime != null){
$line=643;$out+=$escape(arrange.realCount);
$line=643;}else{
$line=643;$out+=$escape(arrange.memberCount);
$line=643;}
$out+='</span>';
$line=643;}
$out+='<input style="width:90px;" type="hidden" name="realCount" ';
$line=643;if(arrange.billUpdateTime != null){
$out+='value="';
$line=643;$out+=$escape(arrange.realCount);
$out+='" ';
$line=644;}else{
$out+='value="';
$line=644;$out+=$escape(arrange.memberCount);
$out+='"';
$line=644;}
$out+=' old="';
$line=644;$out+=$escape(arrange.realCount);
$out+='" maxlength="5" ';
$line=645;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=645;}
$out+='/></td> <td>';
$line=646;if(arrange.badStatus == 1){
$out+='<span>';
$line=646;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=646;}else{
$out+='<span>';
$line=646;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=646;}
$out+='<input type="hidden" name="realReduceMoney" value="';
$line=646;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=646;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=647;if(arrange.badStatus == 1){
$out+='<span class="restneedPayMoney">';
$line=647;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=647;}else{
$out+='<span class="restneedPayMoney"></span>';
$line=647;}
$out+='<input type="hidden" value="';
$line=647;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=648;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=649;if(arrange.badStatus == 1){
$out+='<span>';
$line=649;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=649;}else{
$out+=' <span> ';
$line=651;if(arrange.payType == 0){
$out+=' 现金 ';
$line=653;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=655;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=657;}
$out+=' </span> &nbsp;&nbsp; <span>';
$line=660;if(arrange.billUpdateTime != null){
$line=660;$out+=$escape(arrange.realGuidePayMoney);
$line=660;}else{
$line=660;$out+=$escape(arrange.guidePayMoney);
$line=660;}
$out+='</span>';
$line=660;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=662;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=663;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=664;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=665;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=666;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=668;}
$out+=' </td> <td><span class="difference"></span></td> <td><span class="billRemark">';
$line=671;$out+=$escape(arrange.billRemark);
$out+='</span></td> ';
$line=672;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=672;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=672;}else{
$out+='已对账';
$line=672;}
$out+='</td>';
$line=672;}
$out+=' </tr> ';
$line=674;}
$out+=' ';
$line=675;});
$out+=' ';
$line=676;});
$out+=' ';
$line=677;}
$out+=' ';
$line=678;});
$out+=' </tbody> </table> ';
$line=681;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=685;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=685;}
$out+=' type="text" style="width:30%;" value="';
$line=685;if(remarkArrangeList.restRemark.length>0){
$line=685;$out+=$escape(remarkArrangeList.restRemark[0].opCheckRemark);
$line=685;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=688;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=688;}
$out+=' type="text" style="width:30%;" value="';
$line=688;if(remarkArrangeList.restRemark.length>0){
$line=688;$out+=$escape(remarkArrangeList.restRemark[0].financeCheckRemark);
$line=688;}
$out+='" /> </div> </div> ';
$line=691;}
$out+=' </div>  <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=710;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=710;}
$out+=' </tr> </thead> <tbody class="T-count-hotel"> ';
$line=714;$each(dayList,function(day,$index){
$out+=' ';
$line=715;if(day.hotelArrange != null){
$out+=' ';
$line=716;$each(day.hotelArrange,function(arrangeList,$index){
$out+=' ';
$line=717;$each(arrangeList.hotelArrangeList,function(arrange,index){
$out+=' ';
$line=718;if(arrange != null){
$out+=' <tr badStatus = "';
$line=719;$out+=$escape(arrange.badStatus);
$out+='" hotelArrangeId="';
$line=719;$out+=$escape(arrange.id);
$out+='" hotelId="';
$line=719;if(arrange.hotel != null){
$line=719;$out+=$escape(arrange.hotel.id);
$line=719;}
$out+='" restaurantStandardId="';
$line=719;if(arrange.hotelRoom != null){
$line=719;$out+=$escape(arrange.hotelRoom.id);
$line=719;}
$out+='" whichDay="';
$line=719;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=720;if(index == 0){
$out+='<td rowspan="';
$line=720;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=720;}
$out+=' ';
$line=721;if(index == 0){
$out+='<td rowspan="';
$line=721;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">';
$line=721;if(arrange.hotel != null){
$line=721;$out+=$escape(arrange.hotel.name);
$line=721;}
$out+='</td>';
$line=721;}
$out+=' <td>';
$line=722;if(arrange.hotelRoom != null){
$line=722;$out+=$escape(arrange.hotelRoom.type);
$line=722;}
$out+='</td> <td>';
$line=723;if(arrange.badStatus == 1){
$out+='<span>';
$line=723;$out+=$escape(arrange.price);
$out+='</span>';
$line=723;}else{
$out+='<span>';
$line=723;$out+=$escape(arrange.price);
$out+='</span>';
$line=723;}
$out+=' <input type="hidden" name="price" value="';
$line=724;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=725;if(arrange.badStatus == 1){
$out+='<span>';
$line=725;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=725;}else{
$out+='<span>';
$line=725;if(arrange.billUpdateTime != null){
$line=725;$out+=$escape(arrange.realCount);
$line=725;}else{
$line=725;$out+=$escape(arrange.memberCount);
$line=725;}
$out+='</span>';
$line=725;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=726;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=726;$out+=$escape(arrange.realCount);
$out+='" ';
$line=726;}else{
$out+='value="';
$line=726;$out+=$escape(arrange.memberCount);
$out+='"';
$line=726;}
$out+='/></td> <td>';
$line=727;if(arrange.badStatus == 1){
$out+='<span>';
$line=727;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=727;}else{
$out+='<span>';
$line=727;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=727;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=728;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=728;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=729;if(arrange.badStatus == 1){
$out+='<span class="hotelneedPayMoney">';
$line=729;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=729;}else{
$out+='<span class="hotelneedPayMoney"></span>';
$line=729;}
$out+=' <input name="needPayMoney" type="hidden" value="';
$line=730;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=731;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=732;if(arrange.badStatus == 1){
$out+='<span>';
$line=732;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=732;}else{
$out+=' <span> ';
$line=734;if(arrange.payType == 0){
$out+=' 现金 ';
$line=736;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=738;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=740;}
$out+=' </span> &nbsp;&nbsp; <span>';
$line=743;if(arrange.billUpdateTime != null){
$line=743;$out+=$escape(arrange.realGuidePayMoney);
$line=743;}else{
$line=743;$out+=$escape(arrange.guidePayMoney);
$line=743;}
$out+='</span>';
$line=743;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=745;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=746;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=747;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=748;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=749;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=751;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=754;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=755;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=755;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=755;}else{
$out+='已对账';
$line=755;}
$out+='</td>';
$line=755;}
$out+=' </tr> ';
$line=757;}
$out+=' ';
$line=758;});
$out+=' ';
$line=759;});
$out+=' ';
$line=760;}
$out+=' ';
$line=761;});
$out+=' </tbody> </table> ';
$line=764;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=768;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=768;}
$out+=' type="text" style="width:30%;" value="';
$line=768;if(remarkArrangeList.hotelRemark.length>0){
$line=768;$out+=$escape(remarkArrangeList.hotelRemark[0].opCheckRemark);
$line=768;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=771;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=771;}
$out+=' type="text" style="width:30%;" value="';
$line=771;if(remarkArrangeList.hotelRemark.length>0){
$line=771;$out+=$escape(remarkArrangeList.hotelRemark[0].financeCheckRemark);
$line=771;}
$out+='" /> </div> </div> ';
$line=774;}
$out+=' </div>  <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">景区</th> <th class="th-border">收费项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=793;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=793;}
$out+=' </tr> </thead> <tbody class="T-count-scenic"> ';
$line=797;$each(dayList,function(day,$index){
$out+=' ';
$line=798;if(day.scenicArrange != null){
$out+=' ';
$line=799;$each(day.scenicArrange,function(arrangeList,$index){
$out+=' ';
$line=800;$each(arrangeList.scenicArrangeList,function(arrange,index){
$out+=' ';
$line=801;if(arrange != null){
$out+=' <tr badStatus = "';
$line=802;$out+=$escape(arrange.badStatus);
$out+='" scenicArrangeId="';
$line=802;$out+=$escape(arrange.id);
$out+='" scenicId="';
$line=802;$out+=$escape(arrange.scenicId);
$out+='" scenicItemId="';
$line=802;$out+=$escape(arrange.hotelRoomId);
$out+='" whichDay="';
$line=802;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=803;if(index == 0){
$out+='<td rowspan="';
$line=803;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=803;}
$out+=' ';
$line=804;if(index == 0){
$out+='<td rowspan="';
$line=804;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='">';
$line=804;if(arrange.scenic != null){
$line=804;$out+=$escape(arrange.scenic.name);
$line=804;}
$out+='</td>';
$line=804;}
$out+=' <td>';
$line=805;if(arrange.scenicItem != null){
$line=805;$out+=$escape(arrange.scenicItem.name);
$line=805;}
$out+='</td> <td>';
$line=806;if(arrange.badStatus == 1){
$out+='<span>';
$line=806;$out+=$escape(arrange.price);
$out+='</span>';
$line=806;}else{
$out+='<span> ';
$line=806;$out+=$escape(arrange.price);
$out+='</span>';
$line=806;}
$out+=' <input type="hidden" name="price" value="';
$line=807;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=808;if(arrange.badStatus == 1){
$out+='<span>';
$line=808;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=808;}else{
$out+='<span>';
$line=808;if(arrange.billUpdateTime != null){
$line=808;$out+=$escape(arrange.realCount);
$line=808;}else{
$line=808;$out+=$escape(arrange.memberCount);
$line=808;}
$out+='</span>';
$line=808;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=809;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=809;$out+=$escape(arrange.realCount);
$out+='" ';
$line=809;}else{
$out+='value="';
$line=809;$out+=$escape(arrange.memberCount);
$out+='"';
$line=809;}
$out+='/></td> <td>';
$line=810;if(arrange.badStatus == 1){
$out+='<span>';
$line=810;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=810;}else{
$out+='<span>';
$line=810;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=810;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=811;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=811;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=812;if(arrange.badStatus == 1){
$out+='<span class="scenicneedPayMoney">';
$line=812;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=812;}else{
$out+='<span class="scenicneedPayMoney"></span>';
$line=812;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=813;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=814;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=815;if(arrange.badStatus == 1){
$out+='<span>';
$line=815;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=815;}else{
$out+='<span> <span> ';
$line=817;if(arrange.payType == 0){
$out+=' 现金 ';
$line=819;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=821;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=823;}
$out+=' </span> &nbsp;&nbsp; ';
$line=826;if(arrange.billUpdateTime != null){
$line=826;$out+=$escape(arrange.realGuidePayMoney);
$line=826;}else{
$line=826;$out+=$escape(arrange.guidePayMoney);
$line=826;}
$out+='</span>';
$line=826;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=828;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=829;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=830;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=831;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=832;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=834;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=837;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=838;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=838;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=838;}else{
$out+='已对账';
$line=838;}
$out+='</td>';
$line=838;}
$out+=' </tr> ';
$line=840;}
$out+=' ';
$line=841;});
$out+=' ';
$line=842;});
$out+=' ';
$line=843;}
$out+=' ';
$line=844;});
$out+=' </tbody> </table> ';
$line=847;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=850;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=850;}
$out+=' type="text" style="width:30%;" value="';
$line=850;if(remarkArrangeList.scenicRemark.length>0){
$line=850;$out+=$escape(remarkArrangeList.scenicRemark[0].opCheckRemark);
$line=850;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=853;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=853;}
$out+=' type="text" style="width:30%;" value="';
$line=853;if(remarkArrangeList.scenicRemark.length>0){
$line=853;$out+=$escape(remarkArrangeList.scenicRemark[0].financeCheckRemark);
$line=853;}
$out+='" /> </div> </div>';
$line=855;}
$out+=' </div>  <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务商家</th> <th class="th-border">类型</th> <th class="th-border">日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=878;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=878;}
$out+=' </tr> </thead> <tbody class="T-count-ticket"> ';
$line=882;$each(ticketArrangeList,function(ticketArrange,$index){
$out+=' ';
$line=883;$each(ticketArrange.ticketArrangeList,function(arrange,index){
$out+=' <tr badStatus = "';
$line=884;$out+=$escape(arrange.badStatus);
$out+='" ticketArrangeId="';
$line=884;$out+=$escape(arrange.id);
$out+='" ticketId="';
$line=884;$out+=$escape(arrange.ticket.id);
$out+='" itemId="';
$line=884;$out+=$escape(arrange.id);
$out+='"> ';
$line=885;if(index == 0){
$out+='<td rowspan="';
$line=885;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=885;if(arrange.ticket != null){
$line=885;$out+=$escape(arrange.ticket.name);
$line=885;}
$out+='</td>';
$line=885;}
$out+=' ';
$line=886;if(index == 0){
$out+='<td rowspan="';
$line=886;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=886;if(arrange.type == 1){
$out+='机票';
$line=886;}else if(arrange.type== 2){
$out+='汽车票';
$line=886;}else if(arrange.type == 3){
$out+='火车票';
$line=886;}else if(arrange.type == 4){
$out+='轮船票';
$line=886;}
$out+='</td>';
$line=886;}
$out+=' ';
$line=887;if(index == 0){
$out+='<td rowspan="';
$line=887;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=887;$out+=$escape(arrange.startTime);
$out+='</td>';
$line=887;}
$out+=' ';
$line=888;if(index == 0){
$out+='<td rowspan="';
$line=888;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=888;$out+=$escape(arrange.startingCity);
$out+='</td>';
$line=888;}
$out+=' ';
$line=889;if(index == 0){
$out+='<td rowspan="';
$line=889;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=889;$out+=$escape(arrange.arriveCity);
$out+='</td>';
$line=889;}
$out+=' <td>';
$line=890;$out+=$escape(arrange.shift);
$out+='</td> <td>';
$line=891;$out+=$escape(arrange.seatLevel);
$out+='</td> <td>';
$line=892;if(arrange.badStatus == 1){
$out+='<span>';
$line=892;$out+=$escape(arrange.price);
$out+='</span>';
$line=892;}else{
$out+='<span>';
$line=892;$out+=$escape(arrange.price);
$out+='</span>';
$line=892;}
$out+=' <input type="hidden" name="price" value="';
$line=893;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=894;if(arrange.badStatus == 1){
$out+='<span>';
$line=894;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=894;}else{
$out+='<span>';
$line=894;if(arrange.billUpdateTime != null){
$line=894;$out+=$escape(arrange.realCount);
$line=894;}else{
$line=894;$out+=$escape(arrange.memberCount);
$line=894;}
$out+='</span>';
$line=894;}
$out+=' <input style="width:90px;" name="realCount" type="hidden" ';
$line=895;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=895;$out+=$escape(arrange.realCount);
$out+='" ';
$line=895;}else{
$out+='value="';
$line=895;$out+=$escape(arrange.memberCount);
$out+='"';
$line=895;}
$out+=' /></td> <td>';
$line=896;if(arrange.badStatus == 1){
$out+='<span>';
$line=896;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=896;}else{
$out+='<span>';
$line=896;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=896;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=897;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=897;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=898;if(arrange.badStatus == 1){
$out+='<span class="ticketneedPayMoney">';
$line=898;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=898;}else{
$out+='<span class="ticketneedPayMoney"></span>';
$line=898;}
$out+=' <input type="hidden" value="';
$line=899;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=900;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=901;if(arrange.badStatus == 1){
$out+='<span>';
$line=901;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=901;}else{
$out+=' <span> ';
$line=903;if(arrange.payType == 0){
$out+=' 现金 ';
$line=905;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=907;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=909;}
$out+=' </span> &nbsp;&nbsp; <span>';
$line=912;if(arrange.billUpdateTime != null){
$line=912;$out+=$escape(arrange.realGuidePayMoney);
$line=912;}else{
$line=912;$out+=$escape(arrange.guidePayMoney);
$line=912;}
$out+='</span>';
$line=912;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=913;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=914;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=915;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=916;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=917;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=919;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=922;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=923;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=923;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=923;}else{
$out+='已对账';
$line=923;}
$out+='</td>';
$line=923;}
$out+=' </tr> ';
$line=925;});
$out+=' ';
$line=926;});
$out+=' </tbody> </table> ';
$line=929;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=933;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=933;}
$out+=' type="text" style="width:30%;" value="';
$line=933;if(remarkArrangeList.ticketRemark.length>0){
$line=933;$out+=$escape(remarkArrangeList.ticketRemark[0].opCheckRemark);
$line=933;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=936;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=936;}
$out+=' type="text" style="width:30%;" value="';
$line=936;if(remarkArrangeList.ticketRemark.length>0){
$line=936;$out+=$escape(remarkArrangeList.ticketRemark[0].financeCheckRemark);
$line=936;}
$out+='" /> </div> </div> ';
$line=939;}
$out+=' </div>  <div id="financial-count-tripdetail-otherpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=957;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=957;}
$out+=' </tr> </thead> <tbody class="T-count-otherOut"> ';
$line=961;$each(dayList,function(day,$index){
$out+=' ';
$line=962;if(day.otherArrange != null){
$out+=' ';
$line=963;$each(day.otherArrange,function(arrange,index){
$out+=' ';
$line=964;if(arrange != null){
$out+=' <tr badStatus = "';
$line=965;$out+=$escape(arrange.badStatus);
$out+='" otherArrangeId="';
$line=965;$out+=$escape(arrange.id);
$out+='" whichDay="';
$line=965;$out+=$escape(arrange.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=967;$out+=$escape(arrange.name);
$out+='</td> <td>';
$line=968;if(arrange.badStatus == 1){
$out+='<span>';
$line=968;$out+=$escape(arrange.price);
$out+='</span>';
$line=968;}else{
$out+='<span class="price">';
$line=968;$out+=$escape(arrange.price);
$out+='</span>';
$line=968;}
$out+=' <input type="hidden" name="price" value="';
$line=969;$out+=$escape(arrange.price);
$out+='" ';
$line=969;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=969;}
$out+='/></td> <td>';
$line=970;if(arrange.badStatus == 1){
$out+='<span>';
$line=970;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=970;}else{
$out+='<span>';
$line=970;if(arrange.billUpdateTime != null){
$line=970;$out+=$escape(arrange.realCount);
$line=970;}else{
$line=970;$out+=$escape(arrange.memberCount);
$line=970;}
$out+='</span>';
$line=970;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=971;if(arrange.billUpdateTime){
$out+='value="';
$line=971;$out+=$escape(arrange.realCount);
$out+='"';
$line=971;}else{
$out+='value="';
$line=971;$out+=$escape(arrange.memberCount);
$out+='"';
$line=971;}
$out+=' /></td> <td>';
$line=972;if(arrange.badStatus == 1){
$out+='<span>';
$line=972;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=972;}else{
$out+='<span>';
$line=972;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=972;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=973;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=974;if(arrange.badStatus == 1){
$out+='<span class="otherOutNeedPayMoney">';
$line=974;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=974;}else{
$out+='<span class="otherOutNeedPayMoney"></span>';
$line=974;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=975;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=976;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=977;if(arrange.badStatus == 1){
$out+='<span>';
$line=977;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=977;}else{
$out+=' <span> ';
$line=979;if(arrange.payType == 0){
$out+=' 现金 ';
$line=981;}else if(arrange.payType == 1){
$out+=' 刷卡 ';
$line=983;}else if(arrange.payType == 2){
$out+=' 签单 ';
$line=985;}
$out+=' </span> &nbsp;&nbsp; <span>';
$line=988;if(arrange.billUpdateTime != null){
$line=988;$out+=$escape(arrange.realGuidePayMoney);
$line=988;}else{
$line=988;$out+=$escape(arrange.guidePayMoney);
$line=988;}
$out+='</span>';
$line=988;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=990;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=991;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=992;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=993;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=994;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=996;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=999;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=1000;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=1000;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=1000;}else{
$out+='已对账';
$line=1000;}
$out+='</td>';
$line=1000;}
$out+=' </tr> ';
$line=1002;}
$out+=' ';
$line=1003;});
$out+=' ';
$line=1004;}
$out+=' ';
$line=1005;});
$out+=' </tbody> </table> ';
$line=1008;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1012;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1012;}
$out+=' type="text" style="width:30%;" value="';
$line=1012;if(remarkArrangeList.otherOutRemark.length>0){
$line=1012;$out+=$escape(remarkArrangeList.otherOutRemark[0].opCheckRemark);
$line=1012;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1015;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1015;}
$out+=' type="text" style="width:30%;" value="';
$line=1015;if(remarkArrangeList.otherOutRemark.length>0){
$line=1015;$out+=$escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark);
$line=1015;}
$out+='" /> </div> </div> ';
$line=1018;}
$out+=' </div> ';
$line=1020;if(touristGroup != null){
$out+='  <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">客户</th> <th class="th-border">中转单号</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ';
$line=1038;$each(touristGroup.touristGroupList,function(touristGroup,index){
$out+=' <tr> <td>';
$line=1040;$out+=$escape(index+1);
$out+='</td> <td>';
$line=1041;$out+=$escape(touristGroup.partnerAgencyName);
$out+='</td> <td>';
$line=1042;$out+=$escape(touristGroup.orderNumber);
$out+='</td> <td>';
$line=1043;$out+=$escape(touristGroup.name);
$out+='</td> <td>';
$line=1044;$out+=$escape(touristGroup.mobileNumber);
$out+='</td> <td>';
$line=1045;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=1045;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=1046;$out+=$escape(touristGroup.arriveService);
$out+='</td> <td>';
$line=1047;$out+=$escape(touristGroup.leaveService);
$out+='</td> <td><a href="javascript:void(0);" data-entity-id="';
$line=1048;$out+=$escape(touristGroup.id);
$out+='" class="T-viewTripTransit">查看</a></td> </tr> ';
$line=1050;});
$out+=' </tbody> </table> ';
$line=1054;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1057;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1057;}
$out+=' type="text" style="width:30%;" value="';
$line=1057;if(remarkArrangeList.transferRemark.length>0){
$line=1057;$out+=$escape(remarkArrangeList.transferRemark[0].opCheckRemark);
$line=1057;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1059;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1059;}
$out+=' type="text" style="width:30%;" value="';
$line=1059;if(remarkArrangeList.transferRemark.length>0){
$line=1059;$out+=$escape(remarkArrangeList.transferRemark[0].financeCheckRemark);
$line=1059;}
$out+='" /> </div> </div>';
$line=1061;}
$out+=' </div> ';
$line=1063;}
$out+='  <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ';
$line=1077;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=1077;}
$out+=' </tr> </thead> <tbody class="T-count-insurance"> ';
$line=1081;$each(insuranceArrangeList,function(insuranceArrange,$index){
$out+=' <tr> <td>';
$line=1083;$out+=$escape(insuranceArrange.insurance.name);
$out+='</td> <td>';
$line=1084;if(insuranceArrange.type == null){
$line=1084;if(insuranceArrange.insuranceItem != null){
$line=1084;$out+=$escape(insuranceArrange.insuranceItem.name);
$line=1084;}
$line=1084;}else{
$line=1084;$out+=$escape(insuranceArrange.type);
$line=1084;}
$out+='</td> <td>';
$line=1085;$out+=$escape(insuranceArrange.price);
$out+='</td> <td>';
$line=1086;$out+=$escape(insuranceArrange.memberCount);
$out+='</td> <td>';
$line=1087;$out+=$escape(insuranceArrange.needPayMoney);
$out+='</td> <td>';
$line=1088;$out+=$escape(insuranceArrange.payedMoney);
$out+='</td> <td></td> </tr> ';
$line=1091;});
$out+=' </tbody> </table> ';
$line=1095;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1099;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1099;}
$out+=' type="text" style="width:30%;" value="';
$line=1099;if(remarkArrangeList.insuranceRemark.length>0){
$line=1099;$out+=$escape(remarkArrangeList.insuranceRemark[0].opCheckRemark);
$line=1099;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1102;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1102;}
$out+=' type="text" style="width:30%;" value="';
$line=1102;if(remarkArrangeList.insuranceRemark.length>0){
$line=1102;$out+=$escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark);
$line=1102;}
$out+='" /> </div> </div> ';
$line=1105;}
$out+=' </div>  <div id="financial-count-tripdetail-guide" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border"><span class="necessary">*</span>管理费</th> <th class="th-border"><span class="necessary">*</span>导游预支金额</th> <th class="th-border"><span class="necessary">*</span>备注</th> </tr> </thead> <tbody class="T-count-guide"> ';
$line=1124;$each(guideArranges,function(rs,index){
$out+=' <tr guideid = "';
$line=1125;$out+=$escape(rs.guide.id);
$out+='"> <td><input disabled="disabled" type="radio" name="" ';
$line=1126;if(rs.isAccountGuide == 1){
$out+='checked="checked"';
$line=1126;}
$out+='/></td> <td>';
$line=1127;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=1128;$out+=$escape($helpers. dateFormat(rs.endTime ,  'yyyy-MM-dd'));
$out+='</td> <td> ';
$line=1130;if(rs.taskType == 0){
$out+=' 全程 ';
$line=1132;}else if(rs.taskType == 1){
$out+=' 接机 ';
$line=1134;}else if(rs.taskType == 2){
$out+=' 送机 ';
$line=1136;}else if(rs.taskType == 3){
$out+=' 前段 ';
$line=1138;}else if(rs.taskType == 4){
$out+=' 中段 ';
$line=1140;}else if(rs.taskType == 5){
$out+=' 后段 ';
$line=1142;}
$out+=' </td> <td>';
$line=1144;$out+=$escape(rs.guide.realname);
$out+='</td> <td>';
$line=1145;$out+=$escape(rs.price);
$out+='<input value="';
$line=1145;$out+=$escape(rs.price);
$out+='" name="price" type="hidden"></td> <td>';
$line=1146;$out+=$escape(rs.manageFee);
$out+='<input value="';
$line=1146;$out+=$escape(rs.manageFee);
$out+='" name="manageFee" type="hidden"></td> <td>';
$line=1147;$out+=$escape(rs.guideAllPreMoney);
$out+='</td> <td>';
$line=1148;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=1150;});
$out+=' </tbody> </table> ';
$line=1154;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1158;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1158;}
$out+=' type="text" style="width:30%;" value="';
$line=1158;if(remarkArrangeList.guideRemark.length>0){
$line=1158;$out+=$escape(remarkArrangeList.guideRemark[0].opCheckRemark);
$line=1158;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1161;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1161;}
$out+=' type="text" style="width:30%;" value="';
$line=1161;if(remarkArrangeList.guideRemark.length>0){
$line=1161;$out+=$escape(remarkArrangeList.guideRemark[0].financeCheckRemark);
$line=1161;}
$out+='" /> </div> </div> ';
$line=1164;}
$out+=' </div> </div> </div> <div style="height:30px;"></div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="col-sm-12 financialTripDetail">\r\n    <div>\r\n        <button data-entity-id="{{tripPlan.id}}" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;">\r\n            <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格\r\n        </button>\r\n    </div>\r\n    <div class="col-xs-12 border">\r\n        <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr style="">\r\n                <td><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td><label  style="font-weight: bold;">针对客源：{{if tripPlan.lineProduct.customerType == 1}}团体{{else if tripPlan.lineProduct.customerType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr class="T-mainTitle">\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr class="T-title">\r\n            <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr >\r\n            <td><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">{{guideArrange.price}}</span></label></td>\r\n            <td><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">{{guideArrange.manageFee}}</span></label></td>\r\n            <td></td>\r\n            <td><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td><label>票务费用{{isOp}}：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="row" style="margin-bottom:15px;">\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n    </div>\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content T-list" style="position:relative;top: -2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>客户</td>\r\n                        <th>收客单号</th>\r\n                        <td>小组联系人</td>\r\n                        <td>联系电话</td>\r\n                        <td>人数</td>\r\n                        <td>应收</td>\r\n                        <td>社收</td>\r\n                        <td>现收</td>\r\n                        <td>明细</td>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{touristGroup.orderNumber}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                            <td><span class="F-float F-count">{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</td>\r\n                            <td><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span></td>\r\n                            <td>\r\n                                {{if touristGroup.subStatus == 0}}\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                    {{else}}\r\n                                    {{each touristGroup.touristGroupSubFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            </td>\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].financeCheckRemark}}{{/if}}"/>\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-tripdetail-shop" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border" colspan="5">打单</th>\r\n                            <th class="th-border" colspan="2">社佣</th>\r\n                            <th class="th-border" colspan="2">导佣</th>\r\n                            <th class="th-border" rowspan="2">导游报账备注</th>\r\n                            <th class="th-border" rowspan="2">是否对账</th>\r\n                        </tr>\r\n                        <tr>\r\n                          <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                          <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n                          <th class="th-border"><span class="necessary">*</span>商品</th>\r\n                          <th class="th-border"><span class="necessary">*</span>金额</th>\r\n                          <th class="th-border">单据</th>\r\n                          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n                          <th class="th-border">返佣</th>\r\n                          <th class="th-border"><span class="necessary">*</span>比例%</th>\r\n                          <th class="th-border">返佣</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-shopping"> \r\n        {{each dayList as day}}\r\n        {{if day.shopArrange != null}}\r\n        {{each day.shopArrange as arrangeList}}\r\n        {{each arrangeList.shopArrangeList as arrange i}}\r\n\r\n        {{if arrange != null}}\r\n        <tr class="oldData" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}<input type="hidden" name="shopId" value="{{arrange.shopId}}"></td>\r\n            {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index == 0}}\r\n\r\n                <td><span><input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                {{else}}{{itemSet.name}}<input type="hidden" name="shopPolicy" value="{{itemSet.name}}"></span>{{/if}}\r\n                </td>\r\n\r\n                <td>{{itemSet.consumeMoney}}<input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><span class="F-float F-count">{{itemSet.travelAgencyRate*100}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                \r\n                <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="F-float F-count">{{itemSet.guideRate*100}}</span><input name="guideRate" style="width:90px;" type="hidden" value="{{itemSet.guideRate*100}}" old="{{itemSet.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    {{itemSet.billRemark}}\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n            <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n        </tr>\r\n        {{if arrange.shopArrangeItemSet != null}}\r\n            {{each arrange.shopArrangeItemSet as itemSet index}}\r\n            {{if index > 0}}\r\n            <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n                <td><span>\r\n                <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                <input type="hidden" name="shopPolicy" \r\n                value="{{if itemSet.shopPolicy != null }}\r\n                    {{itemSet.shopPolicy.name}}{{else}}\r\n                {{itemSet.name}}\r\n                {{/if}}">\r\n                <input type="hidden" name="shopPolicyId" value="{{if itemSet.shopPolicy != null }}\r\n                {{itemSet.shopPolicy.id}}\r\n                {{/if}}">\r\n                {{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n\r\n                {{else}}{{itemSet.name}}\r\n                \r\n                {{/if}}\r\n\r\n                </td>\r\n\r\n                <td>{{itemSet.consumeMoney}}<input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                        <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                    {{else}}\r\n                        <span style="color:#bbb;">查看</span>\r\n                    {{/if}}\r\n                </td>\r\n                \r\n                <td><span class="F-float F-count">{{itemSet.travelAgencyRate*100}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                \r\n                <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{itemSet.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="F-float F-count">{{itemSet.guideRate * 100}}</span><input name="guideRate" style="width:90px;" type="hidden" value="{{itemSet.guideRate*100}}" old="{{itemSet.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                \r\n                <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{itemSet.guideRateMoney}}" \r\n                {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n\r\n                <td >\r\n                {{if editStatus == 1}}\r\n                    {{itemSet.billRemark}}\r\n                {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                </td></tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/if}}\r\n        {{/if}}\r\n        {{/each}}  \r\n        {{/each}}\r\n        {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 自费 -->\r\n            <div id="financial-count-tripdetail-selfpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="16">消费</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">自费商家</th>\r\n                      <th class="th-border">项目</th>\r\n                      <th class="th-border">单价</th>\r\n                      <th class="th-border">应收数量</th>\r\n                      <th class="th-border">应收优惠</th>\r\n                      <th class="th-border">应收</th>\r\n                      <th class="th-border">现收</th>\r\n                      <th class="th-border">底价</th>\r\n                      <th class="th-border">应付数量</th>\r\n                      <th class="th-border">优惠</th>\r\n                      <th class="th-border">应付</th>\r\n                      <th class="th-border">已付</th>\r\n                      <th class="th-border">导付</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">人数返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-selfPay">\r\n                    {{each dayList as day}}\r\n                    {{if day.selfPayArrange != null}}\r\n                    {{each day.selfPayArrange as arrangeList}}\r\n                    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}">\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                            <td>{{if arrange.selfPayItem != null }}{{arrange.selfPayItem.name}}{{/if}}</td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.marketPrice}}</span>{{else}}{{arrange.marketPrice}}{{/if}}\r\n                            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n                            \r\n                            <td><span class="needIncomeCount">{{arrange.needIncomeCount}}</span></td>\r\n                            \r\n                            <td><span class="needInReduceMoney"></span></td>\r\n\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{else}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{/if}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="realGetMoney">{{arrange.realGetMoney}}</span>{{else}}\r\n                            <span class="realGetMoney">{{arrange.realGetMoney}}</span>{{/if}}\r\n                            </td>\r\n\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}{{arrange.price}}{{/if}}\r\n                            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                            <input style="width:60px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/><input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td> \r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                            <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" style="width:60px;"/></td>\r\n                            <td><span class="needPayMoney" >{{arrange.needPayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                            <td>{{arrange.payedMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}\r\n                            <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                            <span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            </td>\r\n                           \r\n                            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">查看</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{arrange.customerRebateMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{/if}}\r\n                                <input style="width:90px;" type="hidden" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td><span>{{arrange.guideRate*100 | parseInt}}</span>\r\n                                <input style="width:90px;" type="hidden" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>\r\n                            </td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRebateMoney}}</span>{{else}}<span class="guideRebateMoney">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <!-- <td>\r\n                                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n                            <td>{{arrange.billRemark}}</td>\r\n                            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{otherInCome.title}}</td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><span>{{otherInCome.count}}</span><input style="width:90px;" type="hidden" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{otherInCome.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            \r\n            <!-- 车费 -->\r\n            <div id="financial-count-tripdetail-buspay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border">座位数</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-bus">\r\n                    {{each busCompanyArrange as busCompany}}\r\n                    {{if busCompany != null}}\r\n                    <tr badStatus = "{{busCompany.badStatus}}" busCompanyArrangeId="{{busCompany.id}}" >\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}\r\n                            {{ if busCompany.taskType == 0}}\r\n                                    全程\r\n                                {{else if busCompany.taskType == 1}}\r\n                                    接机\r\n                                {{else if busCompany.taskType == 2}}\r\n                                    送机\r\n                                {{else if busCompany.taskType == 3}}\r\n                                    前段\r\n                                {{else if busCompany.taskType == 4}}\r\n                                    中段\r\n                                {{else if busCompany.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        {{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.seatCount}}{{/if}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.price}}</span>{{else}}<span>{{busCompany.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{busCompany.price}}" /></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realReduceMoney}}</span>{{else}}<span>{{busCompany.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney"></span>{{/if}}</td>\r\n                        <td>{{busCompany.payedMoney}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realGuidePayMoney}}</span>{{else}}\r\n                        <span>\r\n                            {{if busCompany.payType == 0}}\r\n                                现金\r\n                                {{else if busCompany.payType == 1}}\r\n                                刷卡\r\n                                {{else if busCompany.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        <span>\r\n                        {{if busCompany.billUpdateTime != null}}{{busCompany.realGuidePayMoney}}{{else}}{{busCompany.guidePayMoney}}{{/if}}</span>{{/if}}  \r\n                            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></td>\r\n                         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{busCompany.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">时间</th>\r\n                            <th class="th-border">餐厅</th>\r\n                            <th class="th-border">类型</th>\r\n                            <th class="th-border">餐标</th>\r\n                            <th class="th-border">人数</th>\r\n                            <th class="th-border">优惠</th>\r\n                            <th class="th-border">应付</th>\r\n                            <th class="th-border">已付</th>\r\n                            <th class="th-border">导付</th>\r\n                            <th class="th-border">单据</th>\r\n                            <th class="th-border">差额</th>\r\n                            <th class="th-border">导游报账备注</th>\r\n                            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-restaurant"> \r\n                    {{each dayList as day}}\r\n                    {{if day.restaurantArrange != null}}\r\n                    {{each day.restaurantArrange as arrangeList}}\r\n                    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n                        {{if arrange.billUpdateTime != null}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{else}}{{if arrange.isChoose == 1}}自选{{else}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{/if}}{{/if}}</td>{{/if}}\r\n                        <td>{{arrange.type}}</td> \r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}<input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n                        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}<input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}<input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        <span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td><span class="billRemark">{{arrange.billRemark}}</span></td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 房费 -->\r\n            <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">酒店</th>\r\n                        <th class="th-border">房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">间数</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr> \r\n                    </thead>\r\n                    <tbody class="T-count-hotel">\r\n                    {{each dayList as day}}\r\n                    {{if day.hotelArrange != null}}\r\n                    {{each day.hotelArrange as arrangeList}}\r\n                    {{each arrangeList.hotelArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span>{{/if}}\r\n                        <input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        <span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 景区 -->\r\n            <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span> {{arrange.price}}</span>{{/if}}\r\n                       <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 票务 -->\r\n            <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">票务商家</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">出发地</th>\r\n                        <th class="th-border">目的地</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-ticket">\r\n                    {{each ticketArrangeList as ticketArrange}}\r\n                    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n                    <td>{{arrange.shift}}</td>\r\n                    <td>{{arrange.seatLevel}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" name="realCount" type="hidden" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        <span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-tripdetail-otherpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th> \r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherOut"> \r\n                    {{each dayList as day}}\r\n                    {{if day.otherArrange != null}}\r\n                    {{each day.otherArrange as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" otherArrangeId="{{arrange.id}}" whichDay="{{arrange.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{arrange.name}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}\r\n                        <span>\r\n                            {{if arrange.payType == 0}}\r\n                                现金\r\n                                {{else if arrange.payType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.payType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        <span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">客户</th>\r\n                        <th class="th-border">中转单号</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.orderNumber}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                     {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].opCheckRemark}}{{/if}}" />\r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n             <!-- 保险 -->\r\n            <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">保险公司</th>\r\n                        <th class="th-border">险种</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-insurance">\r\n                    {{each insuranceArrangeList as insuranceArrange}}\r\n                    <tr>\r\n                    <td>{{insuranceArrange.insurance.name}}</td>\r\n                    <td>{{if insuranceArrange.type == null}}{{if insuranceArrange.insuranceItem != null}}{{insuranceArrange.insuranceItem.name}}{{/if}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n                    <td>{{insuranceArrange.price}}</td>\r\n                    <td>{{insuranceArrange.memberCount}}</td>\r\n                    <td>{{insuranceArrange.needPayMoney}}</td>\r\n                    <td>{{insuranceArrange.payedMoney}}</td>\r\n                    <td></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 导游 -->\r\n            <div id="financial-count-tripdetail-guide" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n                        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                        <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">导游</th>\r\n                        <th class="th-border">导服费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>管理费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>导游预支金额</th>\r\n                        <th class="th-border"><span class="necessary">*</span>备注</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-guide">\r\n                    {{each guideArranges as rs index}}\r\n                        <tr guideid = "{{rs.guide.id}}">\r\n                            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n                            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>\r\n                                {{if rs.taskType == 0}}\r\n                                    全程\r\n                                {{else if rs.taskType == 1}}\r\n                                    接机\r\n                                {{else if rs.taskType == 2}}\r\n                                    送机\r\n                                {{else if rs.taskType == 3}}\r\n                                    前段\r\n                                {{else if rs.taskType == 4}}\r\n                                    中段\r\n                                {{else if rs.taskType == 5}}\r\n                                    后段\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{rs.guide.realname}}</td>\r\n                            <td>{{rs.price}}<input value="{{rs.price}}" name="price" type="hidden"></td>\r\n                            <td>{{rs.manageFee}}<input value="{{rs.manageFee}}" name="manageFee" type="hidden"></td>\r\n                            <td>{{rs.guideAllPreMoney}}</td>\r\n                            <td>{{rs.remark}}</td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});