/*TMODJS:{"debug":true,"version":348,"md5":"1ea31ef180b36930c034a5e254f08c08"}*/
define(function(require){return require('../../../template')('financial/count/view/tripDetail', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,tripPlan=$data.tripPlan,busCompanyArrange=$data.busCompanyArrange,touristGroup=$data.touristGroup,guideArrange=$data.guideArrange,insurancePrice=$data.insurancePrice,isOp=$data.isOp,WEB_IMG_URL_BIG=$data.WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL=$data.WEB_IMG_URL_SMALL,financialTripPlanId=$data.financialTripPlanId,$each=$utils.$each,touristGroups=$data.touristGroups,index=$data.index,tripCost=$data.tripCost,touristGroupFee=$data.touristGroupFee,$index=$data.$index,isFinance=$data.isFinance,remarkArrangeList=$data.remarkArrangeList,dayList=$data.dayList,day=$data.day,arrangeList=$data.arrangeList,arrange=$data.arrange,i=$data.i,itemSet=$data.itemSet,editStatus=$data.editStatus,arrangeIncomePaymentList=$data.arrangeIncomePaymentList,otherInCome=$data.otherInCome,busCompany=$data.busCompany,ticketArrangeList=$data.ticketArrangeList,ticketArrange=$data.ticketArrange,insuranceArrangeList=$data.insuranceArrangeList,insuranceArrange=$data.insuranceArrange,guideArranges=$data.guideArranges,rs=$data.rs,$out='';$out+='<div class="col-sm-12 financialTripDetail"> <div> <button data-entity-id="';
$line=3;$out+=$escape(tripPlan.id);
$out+='" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;"> <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格 </button> </div> <div class="col-xs-12 border"> <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;"> <tbody> <tr> <td style="text-align:left"><label style="font-weight: bold;">线路：';
$line=11;$out+=$escape(tripPlan.lineProduct.name);
$out+='</label></td> <td style="text-align:left"><label style="font-weight: bold;">类别：';
$line=12;$out+=$escape(tripPlan.lineProduct.type);
$out+='</label></td> <td style="text-align:left"><label style="font-weight: bold;">针对客源：';
$line=13;if(tripPlan.tripPlanType == 1){
$out+='团体';
$line=13;}else if(tripPlan.tripPlanType == 0){
$out+='散客';
$line=13;}
$out+='</label></td> <td><label style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">';
$line=14;$out+=$escape(tripPlan.lineProduct.days);
$out+='</span></label></td> </tr> <tr> <td style="text-align:left"><label style="font-weight: bold;">团号：';
$line=17;$out+=$escape(tripPlan.tripNumber);
$out+='</label></td> <td style="text-align:left"><label style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">';
$line=18;$out+=$escape($helpers. dateFormat(tripPlan.startTime , 'yyyy-MM-dd'));
$out+='</span></label></td> <td style="text-align:left"><label style="font-weight: bold;">完团日期：';
$line=19;$out+=$escape($helpers. dateFormat(tripPlan.endTime , 'yyyy-MM-dd'));
$out+='</label></td> <td style="text-align:left"><label style="font-weight: bold;">团队人数：';
$line=20;$out+=$escape(tripPlan.touristAdultCount);
$out+='大';
$line=20;$out+=$escape(tripPlan.touristChildCount);
$out+='小</label></td> </tr> <tr> <td style="text-align:left"> <label style="font-weight: bold;">导游：';
$line=23;if(tripPlan.guide != null){
$line=23;$out+=$escape(tripPlan.guide.realname);
$line=23;}
$out+='</label></td> <td style="text-align:left"><label style="font-weight: bold;">全陪：';
$line=24;$out+=$escape(tripPlan.accompanyGuideName);
$out+='</label></td> <td></td> <td></td> </tr> </tbody> </table> <input type="hidden" name="totalPersonCount" value="';
$line=30;$out+=$escape(tripPlan.touristAdultCount+tripPlan.touristChildCount);
$out+='"/> <input type="hidden" name=\'busNumber\' class="busNumber" value="';
$line=31;$out+=$escape(busCompanyArrange.length);
$out+='"> <input type="hidden" name=\'maxDay\' value="';
$line=32;$out+=$escape(tripPlan.minDay);
$out+='"> <input type="hidden" name=\'minDay\' value="';
$line=33;$out+=$escape(tripPlan.minDay);
$out+='"> </div> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;"> <tbody> <tr class="T-mainTitle"> <td colspan="8"> <div style="float: left;margin-left:10px;"> <input type="hidden" class="financial-tripPlanId" value="';
$line=41;$out+=$escape(tripPlan.id);
$out+='" /> <input type="hidden" class="tripPlanAdultCount" value="';
$line=42;$out+=$escape(tripPlan.touristAdultCount);
$out+='" /> <input type="hidden" class="tripPlanChildCount" value="';
$line=43;$out+=$escape(tripPlan.touristChildCount);
$out+='" /> <input type="hidden" class="tripPlanStartTime" value="';
$line=44;$out+=$escape($helpers. dateFormat(tripPlan.startTime , 'yyyy-MM-dd'));
$out+='" /> <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label> <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">';
$line=48;$out+=$escape(tripPlan.guideAllPreMoney);
$out+='</span></label> </div></td> </tr> <tr class="T-title"> <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td> <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td> <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td> </tr> <tr > <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">';
$line=58;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span></label></td> <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td> <td style="text-align:left"><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">';
$line=60;$out+=$escape(guideArrange.price);
$out+='</span></label></td> <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">';
$line=61;$out+=$escape(insurancePrice);
$out+='</span></label></td> <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td> <td style="text-align:left"><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">';
$line=64;$out+=$escape(touristGroup.outBusMoney);
$out+='</span></label></td> <td style="text-align:left"><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">';
$line=65;$out+=$escape(touristGroup.outRestaurantMoney);
$out+='</span></label></td> </tr> <tr> <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td> <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td> <td style="text-align:left"><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">';
$line=74;$out+=$escape(touristGroup.outHotelMoney);
$out+='</span></label></td> <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">';
$line=75;$out+=$escape(touristGroup.outOtherMoney);
$out+='</span></label></td> </tr> <tr> <td style="text-align:left"><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">';
$line=78;$out+=$escape(guideArrange.manageFee);
$out+='</span></label></td> <td style="text-align:left"></td> <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td> <td style="text-align:left"><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td> <td style="text-align:left"><label>票务费用';
$line=84;$out+=$escape(isOp);
$out+='：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">';
$line=84;$out+=$escape(touristGroup.outTicketMoney);
$out+='</span></label></td> <td></td> </tr> </tbody> </table> <input type="hidden" value="';
$line=89;$out+=$escape(WEB_IMG_URL_BIG);
$out+='" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="';
$line=90;$out+=$escape(WEB_IMG_URL_SMALL);
$out+='" name="WEB_IMG_URL_SMALL" /> <div class="row" style="margin-bottom:15px;"> <input name="financialTripPlanId" value="';
$line=92;$out+=$escape(financialTripPlanId);
$out+='" type="hidden"> <div style="float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="btn-financialLog">操作记录</a> </div> <div style="float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a> </div> ';
$line=99;if(tripPlan.billStatus > -1){
$out+=' <div style="float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-guideAccount">导游报账表</a> </div> <div style="float:left;width:90px;text-align:center;"> <a href="javascript:void(0);" class="T-tripAccount">单团核算表</a> </div> ';
$line=106;}
$out+=' </div> <div class="tabbable"> <ul class="nav nav-tabs"> <li class="active col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a> </li> ';
$line=141;if(touristGroup != null){
$out+=' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a> </li> ';
$line=145;}
$out+=' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a> </li> </ul> <div class="tab-content T-list" style="position:relative;top: -2px">  <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">客户</th> <th class="th-border">收客单号</th> <th class="th-border">游客信息</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">应收</th> <th class="th-border">社收</th> <th class="th-border">现收</th> <th class="th-border">明细</th> </tr> </thead> <tbody class="T-tripDetail"> <tr> ';
$line=173;$each(touristGroups,function(touristGroup,index){
$out+=' <tr> <td>';
$line=175;$out+=$escape(index+1);
$out+='</td> <td>';
$line=176;if(touristGroup.partnerAgency){
$line=176;$out+=$escape(touristGroup.partnerAgency.travelAgencyName);
$line=176;}
$out+='</td> <td>';
$line=177;$out+=$escape(touristGroup.orderNumber);
$out+='</td> <td> <span>';
$line=179;$out+=$escape(touristGroup.adultCount);
$out+='</span>大<span class="F-float F-count">';
$line=179;$out+=$escape(touristGroup.childCount);
$out+='</span>小</span> <br/> <span>';
$line=181;if(touristGroup.touristGroupMember != null){
$line=181;$out+=$escape(touristGroup.touristGroupMember.name);
$line=181;}
$out+='</span> <br/> <span>';
$line=183;if(touristGroup.touristGroupMember != null){
$line=183;$out+=$escape(touristGroup.touristGroupMember.mobileNumber);
$line=183;}
$out+='</span> <br/> </td> <td> ';
$line=187;if(tripCost.includeSelfPay == null){
$out+=' - ';
$line=189;}else{
$out+=' ';
$line=190;$out+=$escape(tripCost.includeSelfPay);
$out+=' ';
$line=191;}
$out+=' </td> <td> ';
$line=194;if(tripCost.remark == null || tripCost.remark == ""){
$out+=' - ';
$line=196;}else{
$out+=' ';
$line=197;$out+=$escape(tripCost.remark);
$out+=' ';
$line=198;}
$out+=' </td> <td> ';
$line=201;if(touristGroup.isConfirmAccount == 1){
$out+=' <span class="F-float F-money">';
$line=202;$out+=$escape(touristGroup.tempSettlementMoney);
$out+='</span> ';
$line=203;}else{
$out+=' <span class="F-float F-money">';
$line=204;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span> ';
$line=205;}
$out+=' </td> <td><span class="F-float F-money">';
$line=207;$out+=$escape(touristGroup.payedMoney);
$out+='</span></td> <td><span class="F-float F-money">';
$line=208;$out+=$escape(touristGroup.currentNeedPayMoney);
$out+='</span></td> <td> ';
$line=210;if(touristGroup.subStatus == 0 || touristGroup.isConfirmAccount == 1){
$out+=' <a href="#" class="T-viewCostDetail"> ';
$line=212;$each(touristGroup.touristGroupFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=213;$out+=$escape(touristGroupFee.name);
$out+=' ： <span class="F-float F-money">';
$line=214;$out+=$escape(touristGroupFee.price);
$out+='</span>&nbsp;X&nbsp;<span class="F-float F-count">';
$line=214;$out+=$escape(touristGroupFee.count);
$out+='</span>= <span class="F-float F-money">';
$line=215;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='</span><br /> ';
$line=216;});
$out+=' ';
$line=217;}else{
$out+=' ';
$line=218;$each(touristGroup.touristGroupSubFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=219;$out+=$escape(touristGroupFee.name);
$out+=' ： <span class="F-float F-money">';
$line=220;$out+=$escape(touristGroupFee.price);
$out+='</span>&nbsp;X&nbsp;<span class="F-float F-count">';
$line=220;$out+=$escape(touristGroupFee.count);
$out+='</span>= <span class="F-float F-money">';
$line=221;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='</span><br /> ';
$line=222;});
$out+=' </a> ';
$line=224;}
$out+=' </td> </tr> ';
$line=227;});
$out+=' </tbody> </table> ';
$line=231;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=234;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=234;}
$out+=' type="text" style="width:30%;" value="';
$line=234;if(remarkArrangeList.tripDetailRemark.length>0){
$line=234;$out+=$escape(remarkArrangeList.tripDetailRemark[0].opCheckRemark);
$line=234;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=237;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=237;}
$out+=' type="text" style="width:30%;" value="';
$line=237;if(remarkArrangeList.tripDetailRemark.length>0){
$line=237;$out+=$escape(remarkArrangeList.tripDetailRemark[0].financeCheckRemark);
$line=237;}
$out+='"/> </div> </div>';
$line=239;}
$out+=' </div>  <div id="financial-count-tripdetail-shop" class="tab-pane fade"> <div class="ui-sortable-handle widget-container-col"> <h5 class="title-size"> <span style="color:#000;margin-left:20px;"> 购物合计：<span class="T-sumShopMoney F-float F-money">0</span> &nbsp;&nbsp; 社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span> &nbsp;&nbsp; 导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span> </span> </h5> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="5">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border hidden" rowspan="2">现收</th> <th class="th-border" rowspan="2">导游报账备注</th> <th class="th-border" rowspan="2">是否对账</th> </tr> <tr> <th class="th-border">时间</th> <th class="th-border">购物店</th> <th class="th-border">商品</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">%</th> <th class="th-border">返佣</th> </tr> </thead> <tbody class="T-count-shopping"> ';
$line=277;$each(dayList,function(day,$index){
$out+=' ';
$line=278;if(day.shopArrange != null){
$out+=' ';
$line=279;$each(day.shopArrange,function(arrangeList,$index){
$out+=' ';
$line=280;$each(arrangeList.shopArrangeList,function(arrange,i){
$out+=' ';
$line=282;if(arrange != null){
$out+=' <tr class="oldData noSumRate" shopArrangeId="';
$line=283;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=283;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=283;$out+=$escape(arrange.whichDay);
$out+='" rowspan = "';
$line=283;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"> <td rowspan="';
$line=284;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"><span class="whichDay"></span> </td> <td rowspan="';
$line=285;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='">';
$line=285;$out+=$escape(arrange.shop.name);
$out+='<input type="hidden" name="shopId" value="';
$line=285;$out+=$escape(arrange.shopId);
$out+='"></td> ';
$line=286;if(arrange.shopArrangeItemSet != null){
$out+=' ';
$line=287;$each(arrange.shopArrangeItemSet,function(itemSet,index){
$out+=' ';
$line=288;if(index == 0){
$out+=' <td><span><input type="hidden" name="shopPolicyArrId" value="';
$line=290;$out+=$escape(itemSet.id);
$out+='">';
$line=290;if(itemSet.shopPolicy != null ){
$line=290;$out+=$escape(itemSet.shopPolicy.name);
$out+=' ';
$line=291;}else{
$line=291;$out+=$escape(itemSet.name);
$out+='<input type="hidden" name="shopPolicy" value="';
$line=291;$out+=$escape(itemSet.name);
$out+='"></span>';
$line=291;}
$out+=' </td> <td>';
$line=294;$out+=$escape(itemSet.consumeMoney);
$out+='<input class="F-float F-money" policyId="';
$line=294;if(itemSet.shopPolicy != null){
$line=294;$out+=$escape(itemSet.shopPolicy.id);
$line=294;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=294;$out+=$escape(itemSet.consumeMoney);
$out+='" old="';
$line=294;$out+=$escape(itemSet.consumeMoney);
$out+='" maxlength="11" ';
$line=295;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=295;}
$out+='/></td> <td>';
$line=297;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=298;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=299;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=301;}
$out+=' </td> <td><span class="F-float F-count">';
$line=304;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=304;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='" old="';
$line=304;$out+=$escape(itemSet.travelAgencyRate);
$out+='" maxlength="5" ';
$line=304;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=304;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=306;$out+=$escape(itemSet.travelAgencyRebateMoney);
$out+='</span> </td> <td><span class="F-float F-count">';
$line=309;$out+=$escape(itemSet.guideRate*100);
$out+='</span></td> <td><span class="guideRateMoney F-float F-money">';
$line=311;$out+=$escape(itemSet.guideRebateMoney);
$out+='</span> </td> <td class="hidden" rowspan="';
$line=314;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='"> <span class="T-float T-money">';
$line=315;$out+=$escape(arrange.rebateCurrentIncomeMoney);
$out+='</span> </td> <td > ';
$line=319;if(editStatus == 1){
$out+=' ';
$line=320;$out+=$escape(itemSet.billRemark);
$out+=' ';
$line=321;}else{
$line=321;if(arrange.shopPolicy != null){
$line=321;$out+=$escape(arrange.shopPolicy.remark);
$line=321;}else{
$line=321;$out+=$escape(itemSet.billRemark);
$line=321;}
$line=321;}
$out+=' </td> ';
$line=323;}
$out+=' ';
$line=324;});
$out+=' ';
$line=325;}
$out+=' <td rowspan="';
$line=326;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='">';
$line=326;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=326;}else{
$out+='已对账';
$line=326;}
$out+='</td> </tr> ';
$line=328;if(arrange.shopArrangeItemSet != null){
$out+=' ';
$line=329;$each(arrange.shopArrangeItemSet,function(itemSet,index){
$out+=' ';
$line=330;if(index > 0){
$out+=' <tr shopArrangeId="';
$line=331;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=331;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=331;$out+=$escape(arrange.whichDay);
$out+='" rowspan = "';
$line=331;$out+=$escape(arrange.shopArrangeItemSet.length);
$out+='" ';
$line=332;if(index == 1){
$out+='class="noSumRate"';
$line=332;}
$out+='> <td><span> <input type="hidden" name="shopPolicyArrId" value="';
$line=334;$out+=$escape(itemSet.id);
$out+='"> <input type="hidden" name="shopPolicy" value="';
$line=336;if(itemSet.shopPolicy != null ){
$out+=' ';
$line=337;$out+=$escape(itemSet.shopPolicy.name);
$line=337;}else{
$out+=' ';
$line=338;$out+=$escape(itemSet.name);
$out+=' ';
$line=339;}
$out+='"> <input type="hidden" name="shopPolicyId" value="';
$line=340;if(itemSet.shopPolicy != null ){
$out+=' ';
$line=341;$out+=$escape(itemSet.shopPolicy.id);
$out+=' ';
$line=342;}
$out+='"> ';
$line=343;if(itemSet.shopPolicy != null ){
$line=343;$out+=$escape(itemSet.shopPolicy.name);
$out+=' ';
$line=345;}else{
$line=345;$out+=$escape(itemSet.name);
$out+=' ';
$line=347;}
$out+=' </td> <td>';
$line=351;$out+=$escape(itemSet.consumeMoney);
$out+='<input class="F-float F-money" policyId="';
$line=351;if(itemSet.shopPolicy != null){
$line=351;$out+=$escape(itemSet.shopPolicy.id);
$line=351;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=351;$out+=$escape(itemSet.consumeMoney);
$out+='" old="';
$line=351;$out+=$escape(itemSet.consumeMoney);
$out+='" maxlength="11" ';
$line=352;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=352;}
$out+='/></td> <td>';
$line=353;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=354;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=355;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=357;}
$out+=' </td> <td><span class="F-float F-count">';
$line=360;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=360;$out+=$escape(itemSet.travelAgencyRate*100);
$out+='" old="';
$line=360;$out+=$escape(itemSet.travelAgencyRate);
$out+='" maxlength="5" ';
$line=360;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=360;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=362;$out+=$escape(itemSet.travelAgencyRebateMoney);
$out+='</span> </td> <td><span class="F-float F-count">';
$line=365;$out+=$escape(itemSet.guideRate * 100);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" value="';
$line=365;$out+=$escape(itemSet.guideRate*100);
$out+='" old="';
$line=365;$out+=$escape(itemSet.guideRate);
$out+='" maxlength="5" ';
$line=365;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=365;}
$out+='/></td> <td><span class="guideRateMoney F-float F-money">';
$line=367;$out+=$escape(itemSet.guideRebateMoney);
$out+='</span> </td> <td > ';
$line=371;if(editStatus == 1){
$out+=' ';
$line=372;$out+=$escape(itemSet.billRemark);
$out+=' ';
$line=373;}else{
$out+=' ';
$line=374;if(arrange.shopPolicy != null){
$out+=' ';
$line=375;$out+=$escape(arrange.shopPolicy.remark);
$out+=' ';
$line=376;}else{
$out+=' ';
$line=377;$out+=$escape(itemSet.billRemark);
$out+=' ';
$line=378;}
$out+=' ';
$line=379;}
$out+=' </td> </tr> ';
$line=382;}
$out+=' ';
$line=384;});
$out+=' ';
$line=385;}
$out+=' ';
$line=386;}
$out+=' <tr class="sumMoney" shopArrangeId="';
$line=387;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=387;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=387;$out+=$escape(arrange.whichDay);
$out+='"> <td style="font-weight: bold;text-align:right;" colspan="3">合计：</td> <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalMoney"></span></td> <td style="font-weight: bold;text-align:right;" colspan="2">社佣合计：</td> <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalTravelMoney"></span></td> <td style="font-weight: bold;text-align:right;">导佣合计：</td> <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalGuideMoney"></span></td> <td style="font-weight: bold;text-align:right;">佣金小计：</td> <td style="font-weight: bold;text-align:left;" colspan="2"> &nbsp;&nbsp; <span class="F-float F-money T-sumRebeMoney "></span> </td> </tr> ';
$line=400;});
$out+=' ';
$line=401;});
$out+=' ';
$line=402;}
$out+=' ';
$line=403;});
$out+=' </tbody> </table> ';
$line=406;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=409;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=409;}
$out+=' type="text" style="width:30%;" value="';
$line=409;if(remarkArrangeList.shopReamrk.length>0){
$line=409;$out+=$escape(remarkArrangeList.shopReamrk[0].opCheckRemark);
$line=409;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=412;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=412;}
$out+=' type="text" style="width:30%;" value="';
$line=412;if(remarkArrangeList.shopReamrk.length>0){
$line=412;$out+=$escape(remarkArrangeList.shopReamrk[0].financeCheckRemark);
$line=412;}
$out+='" /> </div> </div>';
$line=414;}
$out+=' </div>  <div id="financial-count-tripdetail-selfpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="16">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=426;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=426;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">自费商家</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">应收数量</th> <th class="th-border">应收优惠</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border">底价</th> <th class="th-border">应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ';
$line=451;$each(dayList,function(day,$index){
$out+=' ';
$line=452;if(day.selfPayArrange != null){
$out+=' ';
$line=453;$each(day.selfPayArrange,function(arrangeList,$index){
$out+=' ';
$line=454;$each(arrangeList.selfPayArrangeList,function(arrange,index){
$out+=' ';
$line=455;if(arrange != null){
$out+=' <tr badStatus = "';
$line=456;$out+=$escape(arrange.badStatus);
$out+='" selfPayArrangeId="';
$line=456;$out+=$escape(arrange.id);
$out+='" selfPayId="';
$line=456;$out+=$escape(arrange.selfPayId);
$out+='" whichDay = "';
$line=456;$out+=$escape(arrange.whichDay);
$out+='" isConfirmAccount="';
$line=456;$out+=$escape(arrange.isConfirmAccount);
$out+='"> ';
$line=457;if(index == 0 ){
$out+='<td rowspan="';
$line=457;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='"><span class="whichDay"></span></td></td>';
$line=457;}
$out+=' ';
$line=458;if(index == 0 ){
$out+='<td rowspan="';
$line=458;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=458;$out+=$escape(arrange.selfPay.name);
$out+='</td>';
$line=458;}
$out+=' <td>';
$line=459;if(arrange.selfPayItem != null ){
$line=459;$out+=$escape(arrange.selfPayItem.name);
$line=459;}
$out+='</td> <td>';
$line=460;if(arrange.badStatus == 1){
$out+='<span>';
$line=460;$out+=$escape(arrange.realMarketPrice);
$out+='</span>';
$line=460;}else{
$line=460;$out+=$escape(arrange.realMarketPrice);
$line=460;}
$out+=' <input type="hidden" name="marketPrice" value="';
$line=461;$out+=$escape(arrange.realMarketPrice);
$out+='"/></td> <td><span class="needIncomeCount">';
$line=463;$out+=$escape(arrange.needIncomeCount);
$out+='</span></td> <td><span class="needInReduceMoney"></span></td> <td> ';
$line=468;if(arrange.badStatus == 1){
$out+='<span class="needIncome">';
$line=468;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=468;}else{
$out+='<span class="needIncome">';
$line=468;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=468;}
$out+='</td> <td> ';
$line=470;if(arrange.badStatus == 1){
$out+='<span class="realGetMoney">';
$line=470;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=470;}else{
$out+=' <span class="realGetMoney">';
$line=471;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=471;}
$out+=' </td> <td>';
$line=474;if(arrange.badStatus == 1){
$out+='<span>';
$line=474;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=474;}else{
$line=474;$out+=$escape(arrange.realPrice);
$line=474;}
$out+=' <input type="hidden" name="price" value="';
$line=475;$out+=$escape(arrange.realPrice);
$out+='" /></td> <td> ';
$line=478;if(arrange.badStatus == 1){
$out+='<span>';
$line=478;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=478;}else{
$out+='<span>';
$line=478;if(arrange.billUpdateTime != null){
$line=478;$out+=$escape(arrange.realCount);
$line=478;}else{
$line=478;$out+=$escape(arrange.memberCount);
$line=478;}
$out+='</span>';
$line=478;}
$out+=' <input style="width:60px;" type="hidden" name="realCount" ';
$line=479;if(arrange.billUpdateTime != null){
$out+='value="';
$line=479;$out+=$escape(arrange.realCount);
$out+='"';
$line=479;}else{
$out+='value="';
$line=479;$out+=$escape(arrange.memberCount);
$out+='"';
$line=479;}
$out+=' maxlength="5"/><input type="hidden" name="memberCount" value="';
$line=479;$out+=$escape(arrange.memberCount);
$out+='" ';
$line=479;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=479;}
$out+=' /></td> <td> ';
$line=481;if(arrange.badStatus == 1){
$out+='<span>';
$line=481;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=481;}else{
$out+='<span>';
$line=481;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=481;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=482;$out+=$escape(arrange.realReduceMoney);
$out+='" style="width:60px;"/></td> <td> ';
$line=484;if(arrange.isConfirmAccount == 1){
$out+=' <span class="needPayMoney F-float F-money" >';
$line=485;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=486;}else{
$out+=' <span class="needPayMoney F-float F-money" >';
$line=487;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=488;}
$out+=' <input type="hidden" class="selfMoney"> </td> <td>';
$line=491;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=494;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=496;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=498;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=500;}
$out+=' </span> &nbsp;&nbsp; ';
$line=503;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=505;if(arrange.realPayType == 2){
$out+=' ';
$line=506;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=507;}else{
$out+=' ';
$line=508;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=509;}
$out+=' </span> ';
$line=511;}else{
$out+=' <span> ';
$line=513;if(arrange.billUpdateTime != null){
$out+=' ';
$line=514;if(arrange.realPayType == 2){
$out+=' ';
$line=515;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=516;}else{
$out+=' ';
$line=517;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=518;}
$out+=' ';
$line=519;}else{
$out+=' ';
$line=520;if(arrange.realPayType == 2){
$out+=' ';
$line=521;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=522;}else{
$out+=' ';
$line=523;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=524;}
$out+=' ';
$line=525;}
$out+=' </span> ';
$line=527;}
$out+=' </td> <td>';
$line=530;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=531;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=532;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=534;}
$out+=' </td> <td>';
$line=536;$out+=$escape(arrange.customerRebateMoney);
$out+='</td> <td> ';
$line=538;if(arrange.badStatus == 1){
$out+='<span>';
$line=538;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=538;}else{
$out+='<span>';
$line=538;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=538;}
$out+=' <input style="width:90px;" type="hidden" name="travelAgencyRate" value="';
$line=539;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='" old="';
$line=539;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=539;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=539;}
$out+=' /></td> <td> ';
$line=541;if(arrange.badStatus == 1){
$out+='<span>';
$line=541;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=541;}else{
$out+='<span class="travelAgencyRebateMoney">';
$line=541;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=541;}
$out+=' <input type="hidden" name="travelAgencyRebateMoney" value="';
$line=543;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='" ';
$line=543;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=543;}
$out+=' /></td> <td><span>';
$line=544;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='</span> <input style="width:90px;" type="hidden" name="guideRate" value="';
$line=545;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='" old="';
$line=545;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5"/> </td> <td>';
$line=547;if(arrange.badStatus == 1){
$out+='<span>';
$line=547;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=547;}else{
$out+='<span class="guideRebateMoney">';
$line=547;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=547;}
$out+=' <input type="hidden" name="guideRebateMoney" value="';
$line=549;$out+=$escape(arrange.guideRebateMoney);
$out+='" ';
$line=549;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=549;}
$out+=' /></td> <!-- <td> <span class="guideRate">';
$line=551;$out+=$escape(arrange.customerRebateMoney);
$out+='</span> <input type="hidden" name="guideRate" value="';
$line=552;$out+=$escape(arrange.customerRebateMoney);
$out+='" ';
$line=552;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=552;}
$out+=' /></td> ';
$line=553;if(index == 0 ){
$out+='<td rowspan="';
$line=553;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=553;$out+=$escape(arrange.customerRebateMoney * tripPlan.touristAdultCount);
$out+='</td>';
$line=553;}
$out+=' --> <td>';
$line=554;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=555;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=555;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=555;}else{
$out+='已对账';
$line=555;}
$out+='</td>';
$line=555;}
$out+=' </tr> ';
$line=557;}
$out+=' ';
$line=558;});
$out+=' ';
$line=559;});
$out+=' ';
$line=560;}
$out+=' ';
$line=561;});
$out+=' </tbody> </table> ';
$line=564;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=568;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=568;}
$out+=' type="text" style="width:30%;" value="';
$line=568;if(remarkArrangeList.selfRemark.length>0){
$line=568;$out+=$escape(remarkArrangeList.selfRemark[0].opCheckRemark);
$line=568;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=571;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=571;}
$out+=' type="text" style="width:30%;" value="';
$line=571;if(remarkArrangeList.selfRemark.length>0){
$line=571;$out+=$escape(remarkArrangeList.selfRemark[0].financeCheckRemark);
$line=571;}
$out+='" /> </div> </div> ';
$line=574;}
$out+=' </div>  <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=588;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=588;}
$out+=' </tr> </thead> <tbody class="T-count-otherIn"> ';
$line=592;$each(arrangeIncomePaymentList,function(otherInCome,$index){
$out+=' ';
$line=593;if(otherInCome != null){
$out+=' <tr otherInId="';
$line=594;$out+=$escape(otherInCome.id);
$out+='" otherIn="';
$line=594;$out+=$escape(otherInCome.id);
$out+='" whichDay="';
$line=594;$out+=$escape(otherInCome.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=596;$out+=$escape(otherInCome.title);
$out+='</td> <td><span>';
$line=597;$out+=$escape(otherInCome.price);
$out+='</span><input style="width:90px;" type="hidden" name="price" value="';
$line=597;$out+=$escape(otherInCome.price);
$out+='" old="';
$line=597;$out+=$escape(otherInCome.price);
$out+='" maxlength="11" ';
$line=598;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=598;}
$out+=' /></td> <td><span>';
$line=600;$out+=$escape(otherInCome.count);
$out+='</span><input style="width:90px;" type="hidden" name="count" value="';
$line=600;$out+=$escape(otherInCome.count);
$out+='" old="';
$line=600;$out+=$escape(otherInCome.count);
$out+='" maxlength="11" ';
$line=601;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=601;}
$out+='/></td> <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="';
$line=602;$out+=$escape(otherInCome.needPayMoney);
$out+='" ';
$line=603;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=603;}
$out+='/></span></td> <td>';
$line=604;if(otherInCome.billImage != null && otherInCome.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=605;$out+=$escape(otherInCome.billImage);
$out+='" class="btn-view">查看</a> ';
$line=606;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=608;}
$out+=' </td> <td>';
$line=610;$out+=$escape(otherInCome.billRemark);
$out+='</td> ';
$line=611;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=611;if(otherInCome.isConfirmAccount == 0){
$out+='未对账';
$line=611;}else{
$out+='已对账';
$line=611;}
$out+='</td>';
$line=611;}
$out+=' </tr> ';
$line=613;}
$out+=' ';
$line=614;});
$out+=' </tbody> </table> ';
$line=617;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=620;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=620;}
$out+=' type="text" style="width:30%;" value="';
$line=620;if(remarkArrangeList.otherInRemark.length>0){
$line=620;$out+=$escape(remarkArrangeList.otherInRemark[0].opCheckRemark);
$line=620;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=623;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=623;}
$out+=' type="text" style="width:30%;" value="';
$line=623;if(remarkArrangeList.otherInRemark.length>0){
$line=623;$out+=$escape(remarkArrangeList.otherInRemark[0].financeCheckRemark);
$line=623;}
$out+='" /> </div> </div>';
$line=625;}
$out+=' </div>  <div id="financial-count-tripdetail-buspay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=646;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=646;}
$out+=' </tr> </thead> <tbody class="T-count-bus"> ';
$line=651;$each(busCompanyArrange,function(busCompany,$index){
$out+=' ';
$line=652;if(busCompany != null){
$out+=' <tr badStatus = "';
$line=653;$out+=$escape(busCompany.badStatus);
$out+='" busCompanyArrangeId="';
$line=653;$out+=$escape(busCompany.id);
$out+='" isConfirmAccount="';
$line=654;$out+=$escape(busCompany.isConfirmAccount);
$out+='"> <td>';
$line=655;if(busCompany.busCompany != null){
$line=655;$out+=$escape($helpers. dateFormat(busCompany.startTime ,  'yyyy-MM-dd'));
$line=655;}
$out+='</td> <td>';
$line=656;if(busCompany.busCompany != null){
$line=656;$out+=$escape($helpers. dateFormat(busCompany.endTime ,  'yyyy-MM-dd'));
$line=656;}
$out+='</td> <td>';
$line=657;if(busCompany.busCompany != null){
$out+=' ';
$line=658;if(busCompany.taskType == 0){
$out+=' 全程 ';
$line=660;}else if(busCompany.taskType == 1){
$out+=' 接机 ';
$line=662;}else if(busCompany.taskType == 2){
$out+=' 送机 ';
$line=664;}else if(busCompany.taskType == 3){
$out+=' 前段 ';
$line=666;}else if(busCompany.taskType == 4){
$out+=' 中段 ';
$line=668;}else if(busCompany.taskType == 5){
$out+=' 后段 ';
$line=670;}
$out+=' ';
$line=671;}
$out+='</td> <td>';
$line=672;if(busCompany.busCompany != null){
$line=672;$out+=$escape(busCompany.busCompany.companyName);
$line=672;}
$out+='</td> <td>';
$line=673;if(busCompany.bus != null){
$line=673;$out+=$escape(busCompany.bus.licenseNumber);
$line=673;}
$out+='</td> <td>';
$line=674;if(busCompany.bus != null){
$line=674;$out+=$escape(busCompany.bus.seatCount);
$line=674;}
$out+='</td> <td>';
$line=675;if(busCompany.badStatus == 1){
$out+='<span>';
$line=675;$out+=$escape(busCompany.realPrice);
$out+='</span>';
$line=675;}else{
$out+='<span>';
$line=675;$out+=$escape(busCompany.realPrice);
$out+='</span>';
$line=675;}
$out+=' <input type="hidden" name="price" value="';
$line=676;$out+=$escape(busCompany.realPrice);
$out+='" /></td> <td>';
$line=677;if(busCompany.badStatus == 1){
$out+='<span>';
$line=677;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=677;}else{
$out+='<span>';
$line=677;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=677;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=678;$out+=$escape(busCompany.realReduceMoney);
$out+='" old="';
$line=678;$out+=$escape(busCompany.realReduceMoney);
$out+='"/></td> <td> ';
$line=680;if(busCompany.badStatus == 1){
$out+=' <span class="BusneedPayMoney F-float F-money"> ';
$line=682;$out+=$escape(busCompany.payedMoney+busCompany.realGuidePayMoney);
$out+=' </span> ';
$line=684;}else{
$out+=' ';
$line=685;if(busCompany.isConfirmAccount == 1){
$out+=' <span class="BusneedPayMoney F-float F-money">';
$line=686;$out+=$escape(busCompany.tempSettlementMoney);
$out+='</span> ';
$line=687;}else{
$out+=' <span class="BusneedPayMoney F-float F-money"></span> ';
$line=689;}
$out+=' ';
$line=690;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=691;$out+=$escape(busCompany.needPayMoney);
$out+='"/></td> <td>';
$line=692;$out+=$escape(busCompany.payedMoney);
$out+='</td> <td> <span> ';
$line=695;if(busCompany.realPayType == 0){
$out+=' 现金 ';
$line=697;}else if(busCompany.realPayType == 1){
$out+=' 刷卡 ';
$line=699;}else if(busCompany.realPayType == 2){
$out+=' 签单 ';
$line=701;}
$out+=' </span> &nbsp;&nbsp; ';
$line=704;if(busCompany.badStatus == 1){
$out+=' <span> ';
$line=706;if(busCompany.realPayType == 2){
$out+=' ';
$line=707;$out+=$escape(busCompany.realSignMoney);
$out+=' ';
$line=708;}else{
$out+=' ';
$line=709;$out+=$escape(busCompany.realGuidePayMoney);
$out+=' ';
$line=710;}
$out+=' </span> ';
$line=712;}else{
$out+=' <span> ';
$line=714;if(busCompany.billUpdateTime != null){
$out+=' ';
$line=715;if(busCompany.realPayType == 2){
$out+=' ';
$line=716;$out+=$escape(busCompany.realSignMoney);
$out+=' ';
$line=717;}else{
$out+=' ';
$line=718;$out+=$escape(busCompany.realGuidePayMoney);
$out+=' ';
$line=719;}
$out+=' ';
$line=720;}else{
$out+=' ';
$line=721;if(busCompany.realPayType == 2){
$out+=' ';
$line=722;$out+=$escape(busCompany.realSignMoney);
$out+=' ';
$line=723;}else{
$out+=' ';
$line=724;$out+=$escape(busCompany.guidePayMoney);
$out+=' ';
$line=725;}
$out+=' ';
$line=726;}
$out+=' </span> ';
$line=728;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=729;$out+=$escape(busCompany.payedMoney);
$out+='" ';
$line=729;if(busCompany.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=729;}
$out+='/> <input type="hidden" name="guidePayMoney" value="';
$line=730;$out+=$escape(busCompany.realGuidePayMoney);
$out+='" /> </td> <td>';
$line=732;if(busCompany.billImage != null && busCompany.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=733;$out+=$escape(busCompany.billImage);
$out+='" class="btn-view">查看</a> ';
$line=734;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=736;}
$out+=' </td> <td>';
$line=738;$out+=$escape(busCompany.billRemark);
$out+='</td> ';
$line=739;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=739;if(busCompany.isConfirmAccount == 0){
$out+='未对账';
$line=739;}else{
$out+='已对账';
$line=739;}
$out+='</td>';
$line=739;}
$out+=' </tr> ';
$line=741;}
$out+=' ';
$line=742;});
$out+=' </tbody> </table> ';
$line=745;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=749;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=749;}
$out+=' type="text" style="width:30%;" value="';
$line=749;if(remarkArrangeList.busRemark.length>0){
$line=749;$out+=$escape(remarkArrangeList.busRemark[0].opCheckRemark);
$line=749;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=752;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=752;}
$out+=' type="text" style="width:30%;" value="';
$line=752;if(remarkArrangeList.busRemark.length>0){
$line=752;$out+=$escape(remarkArrangeList.busRemark[0].financeCheckRemark);
$line=752;}
$out+='" /> </div> </div> ';
$line=755;}
$out+=' </div>  <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">餐厅</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=774;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=774;}
$out+=' </tr> </thead> <tbody class="T-count-restaurant"> ';
$line=778;$each(dayList,function(day,$index){
$out+=' ';
$line=779;if(day.restaurantArrange != null){
$out+=' ';
$line=780;$each(day.restaurantArrange,function(arrangeList,$index){
$out+=' ';
$line=781;$each(arrangeList.restaurantArrangeList,function(arrange,index){
$out+=' ';
$line=782;if(arrange != null){
$out+=' <tr badStatus = "';
$line=783;$out+=$escape(arrange.badStatus);
$out+='" restaurantArrangeId="';
$line=783;$out+=$escape(arrange.id);
$out+='" restaurantId="';
$line=783;if(arrange.restaurant != null){
$line=783;$out+=$escape(arrange.restaurant.id);
$line=783;}
$out+='" restaurantStandardId="';
$line=783;if(arrange.restaurantStandard != null){
$line=783;$out+=$escape(arrange.restaurantStandard.id);
$line=783;}
$out+='" whichDay="';
$line=783;$out+=$escape(arrange.whichDay);
$out+='" isConfirmAccount="';
$line=784;$out+=$escape(arrange.isConfirmAccount);
$out+='"> ';
$line=785;if(index == 0){
$out+='<td rowspan="';
$line=785;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=785;}
$out+=' ';
$line=786;if(index == 0){
$out+='<td rowspan="';
$line=786;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"> ';
$line=787;if(arrange.billUpdateTime != null){
$out+=' ';
$line=788;if(arrange.restaurantId == -1){
$out+=' 导游自选 ';
$line=790;}else{
$out+=' ';
$line=791;if(arrange.restaurant != null){
$out+=' ';
$line=792;$out+=$escape(arrange.restaurant.name);
$out+=' ';
$line=793;}
$out+=' ';
$line=794;}
$out+=' ';
$line=795;}else{
$out+=' ';
$line=796;if(arrange.restaurantId == -1){
$out+=' 导游自选 ';
$line=798;}else{
$out+=' ';
$line=799;if(arrange.restaurant != null){
$out+=' ';
$line=800;$out+=$escape(arrange.restaurant.name);
$out+=' ';
$line=801;}
$out+=' ';
$line=802;}
$out+=' ';
$line=803;}
$out+=' </td>';
$line=804;}
$out+=' <td>';
$line=805;$out+=$escape(arrange.type);
$out+='</td> <td>';
$line=806;if(arrange.badStatus == 1){
$out+='<span>';
$line=806;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=806;}else{
$out+='<span class="price">';
$line=806;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=806;}
$out+='<input type="hidden" name="price" value="';
$line=806;$out+=$escape(arrange.realPrice);
$out+='" /></td> <td>';
$line=807;if(arrange.badStatus == 1){
$out+='<span>';
$line=807;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=807;}else{
$out+='<span>';
$line=807;if(arrange.billUpdateTime != null){
$line=807;$out+=$escape(arrange.realCount);
$line=807;}else{
$line=807;$out+=$escape(arrange.memberCount);
$line=807;}
$out+='</span>';
$line=807;}
$out+='<input style="width:90px;" type="hidden" name="realCount" ';
$line=807;if(arrange.billUpdateTime != null){
$out+='value="';
$line=807;$out+=$escape(arrange.realCount);
$out+='" ';
$line=808;}else{
$out+='value="';
$line=808;$out+=$escape(arrange.memberCount);
$out+='"';
$line=808;}
$out+=' old="';
$line=808;$out+=$escape(arrange.realCount);
$out+='" maxlength="5" ';
$line=809;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
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
$out+='<input type="hidden" name="realReduceMoney" value="';
$line=810;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=810;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td> ';
$line=812;if(arrange.badStatus == 1){
$out+=' <span class="restneedPayMoney F-float F-money">';
$line=813;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=814;}else{
$out+=' ';
$line=815;if(arrange.isConfirmAccount == 1){
$out+=' <span class="restneedPayMoney F-float F-money" >';
$line=816;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=817;}else{
$out+=' <span class="restneedPayMoney"></span> ';
$line=819;}
$out+=' ';
$line=821;}
$out+=' <input type="hidden" value="';
$line=822;$out+=$escape(arrange.payedMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=823;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=826;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=828;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=830;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=832;}
$out+=' </span> &nbsp;&nbsp; ';
$line=835;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=837;if(arrange.realPayType == 2){
$out+=' ';
$line=838;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=839;}else{
$out+=' ';
$line=840;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=841;}
$out+=' </span> ';
$line=843;}else{
$out+=' <span> ';
$line=846;if(arrange.billUpdateTime != null){
$out+=' ';
$line=847;if(arrange.realPayType == 2){
$out+=' ';
$line=848;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=849;}else{
$out+=' ';
$line=850;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=851;}
$out+=' ';
$line=852;}else{
$out+=' ';
$line=853;if(arrange.realPayType == 2){
$out+=' ';
$line=854;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=855;}else{
$out+=' ';
$line=856;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=857;}
$out+=' ';
$line=858;}
$out+=' </span> ';
$line=860;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=862;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=863;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=864;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=865;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=866;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=868;}
$out+=' </td> <td><span class="billRemark">';
$line=870;$out+=$escape(arrange.billRemark);
$out+='</span></td> ';
$line=871;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=871;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=871;}else{
$out+='已对账';
$line=871;}
$out+='</td>';
$line=871;}
$out+=' </tr> ';
$line=873;}
$out+=' ';
$line=874;});
$out+=' ';
$line=875;});
$out+=' ';
$line=876;}
$out+=' ';
$line=877;});
$out+=' </tbody> </table> ';
$line=880;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=884;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=884;}
$out+=' type="text" style="width:30%;" value="';
$line=884;if(remarkArrangeList.restRemark.length>0){
$line=884;$out+=$escape(remarkArrangeList.restRemark[0].opCheckRemark);
$line=884;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=887;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=887;}
$out+=' type="text" style="width:30%;" value="';
$line=887;if(remarkArrangeList.restRemark.length>0){
$line=887;$out+=$escape(remarkArrangeList.restRemark[0].financeCheckRemark);
$line=887;}
$out+='" /> </div> </div> ';
$line=890;}
$out+=' </div>  <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=908;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=908;}
$out+=' </tr> </thead> <tbody class="T-count-hotel"> ';
$line=912;$each(dayList,function(day,$index){
$out+=' ';
$line=913;if(day.hotelArrange != null){
$out+=' ';
$line=914;$each(day.hotelArrange,function(arrangeList,$index){
$out+=' ';
$line=915;$each(arrangeList.hotelArrangeList,function(arrange,index){
$out+=' ';
$line=916;if(arrange != null){
$out+=' <tr badStatus = "';
$line=917;$out+=$escape(arrange.badStatus);
$out+='" hotelArrangeId="';
$line=917;$out+=$escape(arrange.id);
$out+='" hotelId="';
$line=917;if(arrange.hotel != null){
$line=917;$out+=$escape(arrange.hotel.id);
$line=917;}
$out+='" restaurantStandardId="';
$line=917;if(arrange.hotelRoom != null){
$line=917;$out+=$escape(arrange.hotelRoom.id);
$line=917;}
$out+='" whichDay="';
$line=917;$out+=$escape(arrange.whichDay);
$out+='" isConfirmAccount="';
$line=917;$out+=$escape(arrange.isConfirmAccount);
$out+='"> ';
$line=918;if(index == 0){
$out+='<td rowspan="';
$line=918;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=918;}
$out+=' ';
$line=919;if(index == 0){
$out+='<td rowspan="';
$line=919;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">';
$line=919;if(arrange.hotel != null){
$line=919;$out+=$escape(arrange.hotel.name);
$line=919;}
$out+='</td>';
$line=919;}
$out+=' <td>';
$line=920;if(arrange.hotelRoom != null){
$line=920;$out+=$escape(arrange.hotelRoom.type);
$line=920;}
$out+='</td> <td>';
$line=921;if(arrange.badStatus == 1){
$out+='<span>';
$line=921;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=921;}else{
$out+='<span>';
$line=921;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=921;}
$out+=' <input type="hidden" name="price" value="';
$line=922;$out+=$escape(arrange.realPrice);
$out+='" /></td> <td>';
$line=923;if(arrange.badStatus == 1){
$out+='<span>';
$line=923;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=923;}else{
$out+='<span>';
$line=923;if(arrange.billUpdateTime != null){
$line=923;$out+=$escape(arrange.realCount);
$line=923;}else{
$line=923;$out+=$escape(arrange.memberCount);
$line=923;}
$out+='</span>';
$line=923;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=924;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=924;$out+=$escape(arrange.realCount);
$out+='" ';
$line=924;}else{
$out+='value="';
$line=924;$out+=$escape(arrange.memberCount);
$out+='"';
$line=924;}
$out+='/></td> <td>';
$line=925;if(arrange.badStatus == 1){
$out+='<span>';
$line=925;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=925;}else{
$out+='<span>';
$line=925;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=925;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=926;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=926;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td> ';
$line=928;if(arrange.badStatus == 1){
$out+=' <span class="hotelneedPayMoney F-float F-money">';
$line=929;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=930;}else{
$out+=' ';
$line=931;if(arrange.isConfirmAccount == 1){
$out+=' <span class="hotelneedPayMoney F-float F-money" >';
$line=932;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=933;}else{
$out+=' <span class="hotelneedPayMoney"></span> <input name="needPayMoney" type="hidden" value="';
$line=935;$out+=$escape(arrange.needPayMoney);
$out+='"> ';
$line=936;}
$out+=' ';
$line=937;}
$out+=' </td> <td>';
$line=939;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=942;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=944;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=946;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=948;}
$out+=' </span> &nbsp;&nbsp; ';
$line=951;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=953;if(arrange.realPayType == 2){
$out+=' ';
$line=954;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=955;}else{
$out+=' ';
$line=956;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=957;}
$out+=' </span> ';
$line=959;}else{
$out+=' <span> ';
$line=962;if(arrange.billUpdateTime != null){
$out+=' ';
$line=963;if(arrange.realPayType == 2){
$out+=' ';
$line=964;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=965;}else{
$out+=' ';
$line=966;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=967;}
$out+=' ';
$line=968;}else{
$out+=' ';
$line=969;if(arrange.realPayType == 2){
$out+=' ';
$line=970;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=971;}else{
$out+=' ';
$line=972;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=973;}
$out+=' ';
$line=974;}
$out+=' </span> ';
$line=976;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=978;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=979;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=980;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=981;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=982;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=984;}
$out+=' </td> <td>';
$line=986;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=987;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=987;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=987;}else{
$out+='已对账';
$line=987;}
$out+='</td>';
$line=987;}
$out+=' </tr> ';
$line=989;}
$out+=' ';
$line=990;});
$out+=' ';
$line=991;});
$out+=' ';
$line=992;}
$out+=' ';
$line=993;});
$out+=' </tbody> </table> ';
$line=996;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1000;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1000;}
$out+=' type="text" style="width:30%;" value="';
$line=1000;if(remarkArrangeList.hotelRemark.length>0){
$line=1000;$out+=$escape(remarkArrangeList.hotelRemark[0].opCheckRemark);
$line=1000;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1003;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1003;}
$out+=' type="text" style="width:30%;" value="';
$line=1003;if(remarkArrangeList.hotelRemark.length>0){
$line=1003;$out+=$escape(remarkArrangeList.hotelRemark[0].financeCheckRemark);
$line=1003;}
$out+='" /> </div> </div> ';
$line=1006;}
$out+=' </div>  <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">景区</th> <th class="th-border">收费项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=1024;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=1024;}
$out+=' </tr> </thead> <tbody class="T-count-scenic"> ';
$line=1028;$each(dayList,function(day,$index){
$out+=' ';
$line=1029;if(day.scenicArrange != null){
$out+=' ';
$line=1030;$each(day.scenicArrange,function(arrangeList,$index){
$out+=' ';
$line=1031;$each(arrangeList.scenicArrangeList,function(arrange,index){
$out+=' ';
$line=1032;if(arrange != null){
$out+=' <tr badStatus = "';
$line=1033;$out+=$escape(arrange.badStatus);
$out+='" scenicArrangeId="';
$line=1033;$out+=$escape(arrange.id);
$out+='" scenicId="';
$line=1033;$out+=$escape(arrange.scenicId);
$out+='" scenicItemId="';
$line=1033;$out+=$escape(arrange.hotelRoomId);
$out+='" whichDay="';
$line=1033;$out+=$escape(arrange.whichDay);
$out+='" isConfirmAccount="';
$line=1033;$out+=$escape(arrange.isConfirmAccount);
$out+='"> ';
$line=1034;if(index == 0){
$out+='<td rowspan="';
$line=1034;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=1034;}
$out+=' ';
$line=1035;if(index == 0){
$out+='<td rowspan="';
$line=1035;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='">';
$line=1035;if(arrange.scenic != null){
$line=1035;$out+=$escape(arrange.scenic.name);
$line=1035;}
$out+='</td>';
$line=1035;}
$out+=' <td>';
$line=1036;if(arrange.scenicItem != null){
$line=1036;$out+=$escape(arrange.scenicItem.name);
$line=1036;}
$out+='</td> <td>';
$line=1037;if(arrange.badStatus == 1){
$out+='<span>';
$line=1037;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1037;}else{
$out+='<span> ';
$line=1037;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1037;}
$out+=' <input type="hidden" name="price" value="';
$line=1038;$out+=$escape(arrange.realPrice);
$out+='" /></td> <td>';
$line=1039;if(arrange.badStatus == 1){
$out+='<span>';
$line=1039;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=1039;}else{
$out+='<span>';
$line=1039;if(arrange.billUpdateTime != null){
$line=1039;$out+=$escape(arrange.realCount);
$line=1039;}else{
$line=1039;$out+=$escape(arrange.memberCount);
$line=1039;}
$out+='</span>';
$line=1039;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=1040;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=1040;$out+=$escape(arrange.realCount);
$out+='" ';
$line=1040;}else{
$out+='value="';
$line=1040;$out+=$escape(arrange.memberCount);
$out+='"';
$line=1040;}
$out+='/></td> <td>';
$line=1041;if(arrange.badStatus == 1){
$out+='<span>';
$line=1041;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1041;}else{
$out+='<span>';
$line=1041;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1041;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=1042;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=1042;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td> ';
$line=1044;if(arrange.badStatus == 1){
$out+=' <span class="scenicneedPayMoney F-float F-money">';
$line=1045;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=1046;}else{
$out+=' ';
$line=1047;if(arrange.isConfirmAccount == 1){
$out+=' <span class="scenicneedPayMoney F-float F-money" >';
$line=1048;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=1049;}else{
$out+=' <span class="scenicneedPayMoney F-float F-money"></span> ';
$line=1051;}
$out+=' ';
$line=1052;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=1053;$out+=$escape(arrange.needPayMoney);
$out+='"> </td> <td>';
$line=1055;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=1058;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=1060;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=1062;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=1064;}
$out+=' </span> &nbsp;&nbsp; ';
$line=1067;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=1069;if(arrange.realPayType == 2){
$out+=' ';
$line=1070;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1071;}else{
$out+=' ';
$line=1072;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1073;}
$out+=' </span> ';
$line=1075;}else{
$out+=' <span> ';
$line=1078;if(arrange.billUpdateTime != null){
$out+=' ';
$line=1079;if(arrange.realPayType == 2){
$out+=' ';
$line=1080;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1081;}else{
$out+=' ';
$line=1082;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1083;}
$out+=' ';
$line=1084;}else{
$out+=' ';
$line=1085;if(arrange.realPayType == 2){
$out+=' ';
$line=1086;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1087;}else{
$out+=' ';
$line=1088;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1089;}
$out+=' ';
$line=1090;}
$out+=' </span> ';
$line=1092;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=1094;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=1095;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=1096;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=1097;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=1098;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=1100;}
$out+=' </td> <td>';
$line=1102;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=1103;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=1103;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=1103;}else{
$out+='已对账';
$line=1103;}
$out+='</td>';
$line=1103;}
$out+=' </tr> ';
$line=1105;}
$out+=' ';
$line=1106;});
$out+=' ';
$line=1107;});
$out+=' ';
$line=1108;}
$out+=' ';
$line=1109;});
$out+=' </tbody> </table> ';
$line=1112;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1115;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1115;}
$out+=' type="text" style="width:30%;" value="';
$line=1115;if(remarkArrangeList.scenicRemark.length>0){
$line=1115;$out+=$escape(remarkArrangeList.scenicRemark[0].opCheckRemark);
$line=1115;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1118;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1118;}
$out+=' type="text" style="width:30%;" value="';
$line=1118;if(remarkArrangeList.scenicRemark.length>0){
$line=1118;$out+=$escape(remarkArrangeList.scenicRemark[0].financeCheckRemark);
$line=1118;}
$out+='" /> </div> </div>';
$line=1120;}
$out+=' </div>  <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务商家</th> <th class="th-border">类型</th> <th class="th-border">日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=1142;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=1142;}
$out+=' </tr> </thead> <tbody class="T-count-ticket"> ';
$line=1146;$each(ticketArrangeList,function(ticketArrange,$index){
$out+=' ';
$line=1147;$each(ticketArrange.ticketArrangeList,function(arrange,index){
$out+=' <tr badStatus = "';
$line=1148;$out+=$escape(arrange.badStatus);
$out+='" ticketArrangeId="';
$line=1148;$out+=$escape(arrange.id);
$out+='" ticketId="';
$line=1148;$out+=$escape(arrange.ticket.id);
$out+='" itemId="';
$line=1148;$out+=$escape(arrange.id);
$out+='" isConfirmAccount="';
$line=1148;$out+=$escape(arrange.isConfirmAccount);
$out+='"> ';
$line=1149;if(index == 0){
$out+='<td rowspan="';
$line=1149;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=1149;if(arrange.ticket != null){
$line=1149;$out+=$escape(arrange.ticket.name);
$line=1149;}
$out+='</td>';
$line=1149;}
$out+=' ';
$line=1150;if(index == 0){
$out+='<td rowspan="';
$line=1150;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=1150;if(arrange.type == 1){
$out+='机票';
$line=1150;}else if(arrange.type== 2){
$out+='汽车票';
$line=1150;}else if(arrange.type == 3){
$out+='火车票';
$line=1150;}else if(arrange.type == 4){
$out+='轮船票';
$line=1150;}
$out+='</td>';
$line=1150;}
$out+=' ';
$line=1151;if(index == 0){
$out+='<td rowspan="';
$line=1151;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=1151;$out+=$escape(arrange.startTime);
$out+='</td>';
$line=1151;}
$out+=' ';
$line=1152;if(index == 0){
$out+='<td rowspan="';
$line=1152;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=1152;$out+=$escape(arrange.startingCity);
$out+='</td>';
$line=1152;}
$out+=' ';
$line=1153;if(index == 0){
$out+='<td rowspan="';
$line=1153;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=1153;$out+=$escape(arrange.arriveCity);
$out+='</td>';
$line=1153;}
$out+=' <td>';
$line=1154;$out+=$escape(arrange.shift);
$out+='</td> <td>';
$line=1155;$out+=$escape(arrange.seatLevel);
$out+='</td> <td>';
$line=1156;if(arrange.badStatus == 1){
$out+='<span>';
$line=1156;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1156;}else{
$out+='<span>';
$line=1156;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1156;}
$out+=' <input type="hidden" name="price" value="';
$line=1157;$out+=$escape(arrange.realPrice);
$out+='" /></td> <td>';
$line=1158;if(arrange.badStatus == 1){
$out+='<span>';
$line=1158;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=1158;}else{
$out+='<span>';
$line=1158;if(arrange.billUpdateTime != null){
$line=1158;$out+=$escape(arrange.realCount);
$line=1158;}else{
$line=1158;$out+=$escape(arrange.memberCount);
$line=1158;}
$out+='</span>';
$line=1158;}
$out+=' <input style="width:90px;" name="realCount" type="hidden" ';
$line=1159;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=1159;$out+=$escape(arrange.realCount);
$out+='" ';
$line=1159;}else{
$out+='value="';
$line=1159;$out+=$escape(arrange.memberCount);
$out+='"';
$line=1159;}
$out+=' /></td> <td>';
$line=1160;if(arrange.badStatus == 1){
$out+='<span>';
$line=1160;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1160;}else{
$out+='<span>';
$line=1160;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1160;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=1161;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=1161;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td> ';
$line=1163;if(arrange.badStatus == 1){
$out+=' <span class="ticketneedPayMoney F-float F-money">';
$line=1164;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=1165;}else{
$out+=' ';
$line=1166;if(arrange.isConfirmAccount == 1){
$out+=' <span class="ticketneedPayMoney F-float F-money" >';
$line=1167;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=1168;}else{
$out+=' <span class="ticketneedPayMoney F-float F-money"></span> ';
$line=1170;}
$out+=' ';
$line=1171;}
$out+=' <input type="hidden" value="';
$line=1172;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"> </td> <td>';
$line=1174;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=1177;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=1179;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=1181;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=1183;}
$out+=' </span> &nbsp;&nbsp; ';
$line=1186;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=1188;if(arrange.realPayType == 2){
$out+=' ';
$line=1189;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1190;}else{
$out+=' ';
$line=1191;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1192;}
$out+=' </span> ';
$line=1194;}else{
$out+=' <span> ';
$line=1197;if(arrange.billUpdateTime != null){
$out+=' ';
$line=1198;if(arrange.realPayType == 2){
$out+=' ';
$line=1199;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1200;}else{
$out+=' ';
$line=1201;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1202;}
$out+=' ';
$line=1203;}else{
$out+=' ';
$line=1204;if(arrange.realPayType == 2){
$out+=' ';
$line=1205;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1206;}else{
$out+=' ';
$line=1207;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1208;}
$out+=' ';
$line=1209;}
$out+=' </span> ';
$line=1211;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=1212;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=1213;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=1214;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=1215;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=1216;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=1218;}
$out+=' </td> <td>';
$line=1220;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=1221;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=1221;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=1221;}else{
$out+='已对账';
$line=1221;}
$out+='</td>';
$line=1221;}
$out+=' </tr> ';
$line=1223;});
$out+=' ';
$line=1224;});
$out+=' </tbody> </table> ';
$line=1227;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1231;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1231;}
$out+=' type="text" style="width:30%;" value="';
$line=1231;if(remarkArrangeList.ticketRemark.length>0){
$line=1231;$out+=$escape(remarkArrangeList.ticketRemark[0].opCheckRemark);
$line=1231;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1234;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1234;}
$out+=' type="text" style="width:30%;" value="';
$line=1234;if(remarkArrangeList.ticketRemark.length>0){
$line=1234;$out+=$escape(remarkArrangeList.ticketRemark[0].financeCheckRemark);
$line=1234;}
$out+='" /> </div> </div> ';
$line=1237;}
$out+=' </div>  <div id="financial-count-tripdetail-otherpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=1254;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=1254;}
$out+=' </tr> </thead> <tbody class="T-count-otherOut"> ';
$line=1258;$each(dayList,function(day,$index){
$out+=' ';
$line=1259;if(day.otherArrange != null){
$out+=' ';
$line=1260;$each(day.otherArrange,function(arrange,index){
$out+=' ';
$line=1261;if(arrange != null){
$out+=' <tr badStatus = "';
$line=1262;$out+=$escape(arrange.badStatus);
$out+='" otherArrangeId="';
$line=1262;$out+=$escape(arrange.id);
$out+='" whichDay="';
$line=1262;$out+=$escape(arrange.whichDay);
$out+='" isConfirmAccount="';
$line=1263;$out+=$escape(arrange.isConfirmAccount);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=1265;$out+=$escape(arrange.name);
$out+='</td> <td>';
$line=1266;if(arrange.badStatus == 1){
$out+='<span>';
$line=1266;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1266;}else{
$out+='<span class="price">';
$line=1266;$out+=$escape(arrange.realPrice);
$out+='</span>';
$line=1266;}
$out+=' <input type="hidden" name="price" value="';
$line=1267;$out+=$escape(arrange.realPrice);
$out+='" ';
$line=1267;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=1267;}
$out+='/></td> <td>';
$line=1268;if(arrange.badStatus == 1){
$out+='<span>';
$line=1268;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=1268;}else{
$out+='<span>';
$line=1268;if(arrange.billUpdateTime != null){
$line=1268;$out+=$escape(arrange.realCount);
$line=1268;}else{
$line=1268;$out+=$escape(arrange.memberCount);
$line=1268;}
$out+='</span>';
$line=1268;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=1269;if(arrange.billUpdateTime){
$out+='value="';
$line=1269;$out+=$escape(arrange.realCount);
$out+='"';
$line=1269;}else{
$out+='value="';
$line=1269;$out+=$escape(arrange.memberCount);
$out+='"';
$line=1269;}
$out+=' /></td> <td>';
$line=1270;if(arrange.badStatus == 1){
$out+='<span>';
$line=1270;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1270;}else{
$out+='<span>';
$line=1270;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=1270;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=1271;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td> ';
$line=1273;if(arrange.badStatus == 1){
$out+=' <span class="otherOutNeedPayMoney F-float F-money">';
$line=1274;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span> ';
$line=1275;}else{
$out+=' ';
$line=1276;if(arrange.isConfirmAccount == 1){
$out+=' <span class="otherOutNeedPayMoney F-float F-money" >';
$line=1277;$out+=$escape(arrange.tempSettlementMoney);
$out+='</span> ';
$line=1278;}else{
$out+=' <span class="otherOutNeedPayMoney F-float F-money"></span> ';
$line=1280;}
$out+=' ';
$line=1281;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=1282;$out+=$escape(arrange.needPayMoney);
$out+='"> </td> <td>';
$line=1284;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> <span> ';
$line=1287;if(arrange.realPayType == 0){
$out+=' 现金 ';
$line=1289;}else if(arrange.realPayType == 1){
$out+=' 刷卡 ';
$line=1291;}else if(arrange.realPayType == 2){
$out+=' 签单 ';
$line=1293;}
$out+=' </span> &nbsp;&nbsp; ';
$line=1296;if(arrange.badStatus == 1){
$out+=' <span> ';
$line=1298;if(arrange.realPayType == 2){
$out+=' ';
$line=1299;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1300;}else{
$out+=' ';
$line=1301;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1302;}
$out+=' </span> ';
$line=1304;}else{
$out+=' <span> ';
$line=1307;if(arrange.billUpdateTime != null){
$out+=' ';
$line=1308;if(arrange.realPayType == 2){
$out+=' ';
$line=1309;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1310;}else{
$out+=' ';
$line=1311;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1312;}
$out+=' ';
$line=1313;}else{
$out+=' ';
$line=1314;if(arrange.realPayType == 2){
$out+=' ';
$line=1315;$out+=$escape(arrange.realSignMoney);
$out+=' ';
$line=1316;}else{
$out+=' ';
$line=1317;$out+=$escape(arrange.realGuidePayMoney);
$out+=' ';
$line=1318;}
$out+=' ';
$line=1319;}
$out+=' </span> ';
$line=1321;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=1323;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=1324;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=1325;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=1326;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=1327;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=1329;}
$out+=' </td> <td>';
$line=1331;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=1332;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=1332;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=1332;}else{
$out+='已对账';
$line=1332;}
$out+='</td>';
$line=1332;}
$out+=' </tr> ';
$line=1334;}
$out+=' ';
$line=1335;});
$out+=' ';
$line=1336;}
$out+=' ';
$line=1337;});
$out+=' </tbody> </table> ';
$line=1340;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1344;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1344;}
$out+=' type="text" style="width:30%;" value="';
$line=1344;if(remarkArrangeList.otherOutRemark.length>0){
$line=1344;$out+=$escape(remarkArrangeList.otherOutRemark[0].opCheckRemark);
$line=1344;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1347;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1347;}
$out+=' type="text" style="width:30%;" value="';
$line=1347;if(remarkArrangeList.otherOutRemark.length>0){
$line=1347;$out+=$escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark);
$line=1347;}
$out+='" /> </div> </div> ';
$line=1350;}
$out+=' </div> ';
$line=1352;if(touristGroup != null){
$out+='  <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">客户</th> <th class="th-border">中转单号</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ';
$line=1370;$each(touristGroup.touristGroupList,function(touristGroup,index){
$out+=' <tr> <td>';
$line=1372;$out+=$escape(index+1);
$out+='</td> <td>';
$line=1373;$out+=$escape(touristGroup.partnerAgencyName);
$out+='</td> <td>';
$line=1374;$out+=$escape(touristGroup.orderNumber);
$out+='</td> <td>';
$line=1375;$out+=$escape(touristGroup.name);
$out+='</td> <td>';
$line=1376;$out+=$escape(touristGroup.mobileNumber);
$out+='</td> <td>';
$line=1377;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=1377;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=1378;$out+=$escape(touristGroup.arriveService);
$out+='</td> <td>';
$line=1379;$out+=$escape(touristGroup.leaveService);
$out+='</td> <td><a href="javascript:void(0);" data-entity-id="';
$line=1380;$out+=$escape(touristGroup.id);
$out+='" class="T-viewTripTransit">查看</a></td> </tr> ';
$line=1382;});
$out+=' </tbody> </table> ';
$line=1386;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1389;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1389;}
$out+=' type="text" style="width:30%;" value="';
$line=1389;if(remarkArrangeList.transferRemark.length>0){
$line=1389;$out+=$escape(remarkArrangeList.transferRemark[0].opCheckRemark);
$line=1389;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1391;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1391;}
$out+=' type="text" style="width:30%;" value="';
$line=1391;if(remarkArrangeList.transferRemark.length>0){
$line=1391;$out+=$escape(remarkArrangeList.transferRemark[0].financeCheckRemark);
$line=1391;}
$out+='" /> </div> </div>';
$line=1393;}
$out+=' </div> ';
$line=1395;}
$out+='  <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ';
$line=1409;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=1409;}
$out+=' </tr> </thead> <tbody class="T-count-insurance"> ';
$line=1413;$each(insuranceArrangeList,function(insuranceArrange,$index){
$out+=' <tr> <td>';
$line=1415;$out+=$escape(insuranceArrange.insurance.name);
$out+='</td> <td>';
$line=1416;if(insuranceArrange.type == null){
$line=1416;if(insuranceArrange.insuranceItem != null){
$line=1416;$out+=$escape(insuranceArrange.insuranceItem.name);
$line=1416;}
$line=1416;}else{
$line=1416;$out+=$escape(insuranceArrange.type);
$line=1416;}
$out+='</td> <td>';
$line=1417;$out+=$escape(insuranceArrange.price);
$out+='</td> <td>';
$line=1418;$out+=$escape(insuranceArrange.memberCount);
$out+='</td> <td>';
$line=1419;$out+=$escape(insuranceArrange.needPayMoney);
$out+='</td> <td>';
$line=1420;$out+=$escape(insuranceArrange.payedMoney);
$out+='</td> <td></td> </tr> ';
$line=1423;});
$out+=' </tbody> </table> ';
$line=1427;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1431;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1431;}
$out+=' type="text" style="width:30%;" value="';
$line=1431;if(remarkArrangeList.insuranceRemark.length>0){
$line=1431;$out+=$escape(remarkArrangeList.insuranceRemark[0].opCheckRemark);
$line=1431;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1434;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1434;}
$out+=' type="text" style="width:30%;" value="';
$line=1434;if(remarkArrangeList.insuranceRemark.length>0){
$line=1434;$out+=$escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark);
$line=1434;}
$out+='" /> </div> </div> ';
$line=1437;}
$out+=' </div>  <div id="financial-count-tripdetail-guide" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">指定导游报账</th> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">导游预支金额</th> <th class="th-border">备注</th> <th class="th-border">对账状态</th> </tr> </thead> <tbody class="T-count-guide"> ';
$line=1457;$each(guideArranges,function(rs,index){
$out+=' <tr guideid = "';
$line=1458;$out+=$escape(rs.guide.id);
$out+='"> <td><input disabled="disabled" type="radio" name="" ';
$line=1459;if(rs.isAccountGuide == 1){
$out+='checked="checked"';
$line=1459;}
$out+='/></td> <td>';
$line=1460;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=1461;$out+=$escape($helpers. dateFormat(rs.endTime ,  'yyyy-MM-dd'));
$out+='</td> <td> ';
$line=1463;if(rs.taskType == 0){
$out+=' 全程 ';
$line=1465;}else if(rs.taskType == 1){
$out+=' 接机 ';
$line=1467;}else if(rs.taskType == 2){
$out+=' 送机 ';
$line=1469;}else if(rs.taskType == 3){
$out+=' 前段 ';
$line=1471;}else if(rs.taskType == 4){
$out+=' 中段 ';
$line=1473;}else if(rs.taskType == 5){
$out+=' 后段 ';
$line=1475;}
$out+=' </td> <td>';
$line=1477;$out+=$escape(rs.guide.realname);
$out+='</td> <td>';
$line=1478;$out+=$escape(rs.price);
$out+='<input value="';
$line=1478;$out+=$escape(rs.price);
$out+='" name="price" type="hidden"></td> <td>';
$line=1479;$out+=$escape(rs.manageFee);
$out+='<input value="';
$line=1479;$out+=$escape(rs.manageFee);
$out+='" name="manageFee" type="hidden"></td> <td>';
$line=1480;$out+=$escape(rs.guideAllPreMoney);
$out+='</td> <td>';
$line=1481;$out+=$escape(rs.remark);
$out+='</td> <td> ';
$line=1483;if(rs.isConfirmAccount == 0){
$out+=' 未对账 ';
$line=1485;}else{
$out+=' 已对账 ';
$line=1487;}
$out+=' </td> </tr> ';
$line=1490;});
$out+=' </tbody> </table> ';
$line=1494;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1498;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1498;}
$out+=' type="text" style="width:30%;" value="';
$line=1498;if(remarkArrangeList.guideRemark.length>0){
$line=1498;$out+=$escape(remarkArrangeList.guideRemark[0].opCheckRemark);
$line=1498;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1501;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1501;}
$out+=' type="text" style="width:30%;" value="';
$line=1501;if(remarkArrangeList.guideRemark.length>0){
$line=1501;$out+=$escape(remarkArrangeList.guideRemark[0].financeCheckRemark);
$line=1501;}
$out+='" /> </div> </div> ';
$line=1504;}
$out+=' </div> </div> </div> <div style="height:30px;"></div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="col-sm-12 financialTripDetail">\r\n    <div>\r\n        <button data-entity-id="{{tripPlan.id}}" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;">\r\n            <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格\r\n        </button>\r\n    </div>\r\n    <div class="col-xs-12 border">\r\n        <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">针对客源：{{if tripPlan.tripPlanType == 1}}团体{{else if tripPlan.tripPlanType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td style="text-align:left"><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td style="text-align:left"> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td style="text-align:left"><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n    <input type="hidden" name=\'maxDay\' value="{{tripPlan.minDay}}">\r\n    <input type="hidden" name=\'minDay\' value="{{tripPlan.minDay}}">\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr class="T-mainTitle">\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr class="T-title">\r\n            <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr >\r\n            <td style="text-align:left"><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">{{guideArrange.price}}</span></label></td>\r\n            <td style="text-align:left"><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td style="text-align:left"><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td style="text-align:left"><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td style="text-align:left"><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td style="text-align:left"><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td style="text-align:left"><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">{{guideArrange.manageFee}}</span></label></td>\r\n            <td style="text-align:left"></td>\r\n            <td style="text-align:left"><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td style="text-align:left"><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td style="text-align:left"><label>票务费用{{isOp}}：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="row" style="margin-bottom:15px;">\r\n        <input name="financialTripPlanId" value="{{financialTripPlanId}}" type="hidden">\r\n        <div style="float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div style="float:left;width:90px;text-align:center;">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n        {{if tripPlan.billStatus > -1}}\r\n            <div style="float:left;width:90px;text-align:center;">\r\n                <a href="javascript:void(0);" class="T-guideAccount">导游报账表</a>\r\n            </div>\r\n            <div style="float:left;width:90px;text-align:center;">\r\n                <a href="javascript:void(0);" class="T-tripAccount">单团核算表</a>\r\n            </div>\r\n        {{/if}}\r\n    </div>\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content T-list" style="position:relative;top: -2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">序号</th>\r\n                            <th class="th-border">客户</th>\r\n                            <th class="th-border">收客单号</th>\r\n                            <th class="th-border">游客信息</th>\r\n                            <th class="th-border">包含自费</th>\r\n                            <th class="th-border">备注</th>\r\n                            <th class="th-border">应收</th>\r\n                            <th class="th-border">社收</th>\r\n                            <th class="th-border">现收</th>\r\n                            <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{touristGroup.orderNumber}}</td>\r\n                            <td>\r\n                                <span>{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</span>\r\n                                <br/>\r\n                                <span>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</span>\r\n                                <br/>\r\n                                <span>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</span>\r\n                                <br/>\r\n                            </td>\r\n                            <td>\r\n                                {{if tripCost.includeSelfPay == null}}\r\n                                    -\r\n                                {{else}}\r\n                                    {{tripCost.includeSelfPay}}\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>\r\n                                {{if tripCost.remark == null || tripCost.remark == ""}}\r\n                                    -\r\n                                {{else}}\r\n                                    {{tripCost.remark}}\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>\r\n                                {{if touristGroup.isConfirmAccount == 1}}\r\n                                    <span class="F-float F-money">{{touristGroup.tempSettlementMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span></td>\r\n                            <td>\r\n                                {{if touristGroup.subStatus == 0 || touristGroup.isConfirmAccount == 1}}\r\n                                <a href="#" class="T-viewCostDetail">\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                    {{else}}\r\n                                    {{each touristGroup.touristGroupSubFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                </a>\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].financeCheckRemark}}{{/if}}"/>\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-tripdetail-shop" class="tab-pane fade">\r\n                <div class="ui-sortable-handle widget-container-col">\r\n                    <h5 class="title-size">\r\n                        <span style="color:#000;margin-left:20px;">\r\n                            购物合计：<span class="T-sumShopMoney F-float F-money">0</span>\r\n                            &nbsp;&nbsp;\r\n                            社佣合计：<span class="T-sumTravelMoney F-float F-money">0</span>\r\n                            &nbsp;&nbsp;\r\n                            导佣合计：<span class="T-sumGuideMoney F-float F-money">0</span>\r\n                        </span>\r\n                    </h5>\r\n                </div>\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border" colspan="5">打单</th>\r\n                            <th class="th-border" colspan="2">社佣</th>\r\n                            <th class="th-border" colspan="2">导佣</th>\r\n                            <th class="th-border hidden" rowspan="2">现收</th>\r\n                            <th class="th-border" rowspan="2">导游报账备注</th>\r\n                            <th class="th-border" rowspan="2">是否对账</th>\r\n                        </tr>\r\n                        <tr>\r\n                          <th class="th-border">时间</th>\r\n                          <th class="th-border">购物店</th>\r\n                          <th class="th-border">商品</th>\r\n                          <th class="th-border">金额</th>\r\n                          <th class="th-border">单据</th>\r\n                          <th class="th-border">比例%</th>\r\n                          <th class="th-border">返佣</th>\r\n                          <th class="th-border">%</th>\r\n                          <th class="th-border">返佣</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-shopping"> \r\n                {{each dayList as day}}\r\n                {{if day.shopArrange != null}}\r\n                {{each day.shopArrange as arrangeList}}\r\n                {{each arrangeList.shopArrangeList as arrange i}}\r\n\r\n                {{if arrange != null}}\r\n                <tr class="oldData noSumRate" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}">\r\n                    <td rowspan="{{arrange.shopArrangeItemSet.length}}"><span class="whichDay"></span> </td>\r\n                    <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{arrange.shop.name}}<input type="hidden" name="shopId" value="{{arrange.shopId}}"></td>\r\n                    {{if arrange.shopArrangeItemSet != null}}\r\n                    {{each arrange.shopArrangeItemSet as itemSet index}}\r\n                    {{if index == 0}}\r\n\r\n                        <td><span><input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">{{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n                        {{else}}{{itemSet.name}}<input type="hidden" name="shopPolicy" value="{{itemSet.name}}"></span>{{/if}}\r\n                        </td>\r\n\r\n                        <td>{{itemSet.consumeMoney}}<input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                        {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        \r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        \r\n                        <td><span class="F-float F-count">{{itemSet.travelAgencyRate*100}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        \r\n                        <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRebateMoney}}</span>\r\n                        </td>\r\n                        \r\n                        <td><span class="F-float F-count">{{itemSet.guideRate*100}}</span></td>\r\n                        \r\n                        <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRebateMoney}}</span>\r\n                        </td>\r\n\r\n                        <td class="hidden" rowspan="{{arrange.shopArrangeItemSet.length}}">\r\n                            <span class="T-float T-money">{{arrange.rebateCurrentIncomeMoney}}</span>\r\n                        </td>\r\n\r\n                        <td >\r\n                        {{if editStatus == 1}}\r\n                            {{itemSet.billRemark}}\r\n                        {{else}}{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.remark}}{{else}}{{itemSet.billRemark}}{{/if}}{{/if}}\r\n                        </td>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    <td rowspan="{{arrange.shopArrangeItemSet.length}}">{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>\r\n                </tr>\r\n                {{if arrange.shopArrangeItemSet != null}}\r\n                    {{each arrange.shopArrangeItemSet as itemSet index}}\r\n                    {{if index > 0}}\r\n                    <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}" rowspan = "{{arrange.shopArrangeItemSet.length}}"\r\n                    {{if index == 1}}class="noSumRate"{{/if}}>\r\n                        <td><span>\r\n                        <input type="hidden" name="shopPolicyArrId" value="{{itemSet.id}}">\r\n                        <input type="hidden" name="shopPolicy" \r\n                        value="{{if itemSet.shopPolicy != null }}\r\n                            {{itemSet.shopPolicy.name}}{{else}}\r\n                        {{itemSet.name}}\r\n                        {{/if}}">\r\n                        <input type="hidden" name="shopPolicyId" value="{{if itemSet.shopPolicy != null }}\r\n                        {{itemSet.shopPolicy.id}}\r\n                        {{/if}}">\r\n                        {{if itemSet.shopPolicy != null }}{{itemSet.shopPolicy.name}}\r\n\r\n                        {{else}}{{itemSet.name}}\r\n                        \r\n                        {{/if}}\r\n\r\n                        </td>\r\n\r\n                        <td>{{itemSet.consumeMoney}}<input class="F-float F-money" policyId="{{if itemSet.shopPolicy != null}}{{itemSet.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{itemSet.consumeMoney}}" old="{{itemSet.consumeMoney}}" maxlength="11" \r\n                        {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        \r\n                        <td><span class="F-float F-count">{{itemSet.travelAgencyRate*100}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{itemSet.travelAgencyRate*100}}" old="{{itemSet.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        \r\n                        <td><span class="travelAgencyRateMoney F-float F-money">{{itemSet.travelAgencyRebateMoney}}</span>\r\n                        </td>\r\n                        \r\n                        <td><span class="F-float F-count">{{itemSet.guideRate * 100}}</span><input name="guideRate" style="width:90px;" type="hidden" value="{{itemSet.guideRate*100}}" old="{{itemSet.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        \r\n                        <td><span class="guideRateMoney F-float F-money">{{itemSet.guideRebateMoney}}</span>\r\n                        </td>\r\n\r\n                        <td >\r\n                        {{if editStatus == 1}}\r\n                            {{itemSet.billRemark}}\r\n                        {{else}}\r\n                            {{if arrange.shopPolicy != null}}\r\n                                {{arrange.shopPolicy.remark}}\r\n                            {{else}}\r\n                                {{itemSet.billRemark}}\r\n                            {{/if}}\r\n                        {{/if}}\r\n                        </td>\r\n                    </tr>\r\n                        {{/if}}\r\n\r\n                    {{/each}}\r\n                    {{/if}}\r\n                {{/if}}\r\n                <tr class="sumMoney" shopArrangeId="{{arrange.id}}" shopId="{{arrange.shopId}}" whichDay = "{{arrange.whichDay}}">\r\n                    <td style="font-weight: bold;text-align:right;" colspan="3">合计：</td>\r\n                    <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalMoney"></span></td>\r\n                    <td style="font-weight: bold;text-align:right;" colspan="2">社佣合计：</td>\r\n                    <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalTravelMoney"></span></td>\r\n                    <td style="font-weight: bold;text-align:right;">导佣合计：</td>\r\n                    <td style="font-weight: bold;text-align:right;"><span class="F-float F-money T-totalGuideMoney"></span></td>\r\n                    <td style="font-weight: bold;text-align:right;">佣金小计：</td>\r\n                    <td style="font-weight: bold;text-align:left;" colspan="2">\r\n                        &nbsp;&nbsp;\r\n                        <span class="F-float F-money T-sumRebeMoney "></span>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}  \r\n                {{/each}}\r\n                {{/if}}\r\n                {{/each}}\r\n                </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 自费 -->\r\n            <div id="financial-count-tripdetail-selfpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="16">消费</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">自费商家</th>\r\n                      <th class="th-border">项目</th>\r\n                      <th class="th-border">单价</th>\r\n                      <th class="th-border">应收数量</th>\r\n                      <th class="th-border">应收优惠</th>\r\n                      <th class="th-border">应收</th>\r\n                      <th class="th-border">现收</th>\r\n                      <th class="th-border">底价</th>\r\n                      <th class="th-border">应付数量</th>\r\n                      <th class="th-border">优惠</th>\r\n                      <th class="th-border">应付</th>\r\n                      <th class="th-border">已付</th>\r\n                      <th class="th-border">导付</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">人数返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-selfPay">\r\n                    {{each dayList as day}}\r\n                    {{if day.selfPayArrange != null}}\r\n                    {{each day.selfPayArrange as arrangeList}}\r\n                    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}" whichDay = "{{arrange.whichDay}}" isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td></td>{{/if}}\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                            <td>{{if arrange.selfPayItem != null }}{{arrange.selfPayItem.name}}{{/if}}</td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.realMarketPrice}}</span>{{else}}{{arrange.realMarketPrice}}{{/if}}\r\n                            <input type="hidden" name="marketPrice" value="{{arrange.realMarketPrice}}"/></td>\r\n                            \r\n                            <td><span class="needIncomeCount">{{arrange.needIncomeCount}}</span></td>\r\n                            \r\n                            <td><span class="needInReduceMoney"></span></td>\r\n\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{else}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{/if}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="realGetMoney">{{arrange.realGetMoney}}</span>{{else}}\r\n                            <span class="realGetMoney">{{arrange.realGetMoney}}</span>{{/if}}\r\n                            </td>\r\n\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}{{arrange.realPrice}}{{/if}}\r\n                            <input type="hidden" name="price" value="{{arrange.realPrice}}" /></td>\r\n\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                            <input style="width:60px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/><input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td> \r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                            <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" style="width:60px;"/></td>\r\n                            <td>\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="needPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="needPayMoney F-float F-money" >{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                                {{/if}}\r\n                                <input type="hidden" class="selfMoney">\r\n                            </td>\r\n                            <td>{{arrange.payedMoney}}</td>\r\n                            <td>\r\n                            <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span>\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                </span>\r\n                            {{else}}\r\n                                <span>\r\n                                    {{if arrange.billUpdateTime != null}}\r\n                                        {{if arrange.realPayType == 2}}\r\n                                            {{arrange.realSignMoney}}\r\n                                        {{else}}\r\n                                            {{arrange.realGuidePayMoney}}\r\n                                        {{/if}}\r\n                                    {{else}}\r\n                                        {{if arrange.realPayType == 2}}\r\n                                            {{arrange.realSignMoney}}\r\n                                        {{else}}\r\n                                            {{arrange.realGuidePayMoney}}\r\n                                        {{/if}}\r\n                                    {{/if}}\r\n                                </span>\r\n                            {{/if}}\r\n                            </td>\r\n                           \r\n                            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">查看</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{arrange.customerRebateMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{/if}}\r\n                                <input style="width:90px;" type="hidden" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td><span>{{arrange.guideRate*100 | parseInt}}</span>\r\n                                <input style="width:90px;" type="hidden" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>\r\n                            </td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRebateMoney}}</span>{{else}}<span class="guideRebateMoney">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <!-- <td>\r\n                                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n                            <td>{{arrange.billRemark}}</td>\r\n                            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{otherInCome.title}}</td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><span>{{otherInCome.count}}</span><input style="width:90px;" type="hidden" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{otherInCome.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            \r\n            <!-- 车费 -->\r\n            <div id="financial-count-tripdetail-buspay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border">座位数</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-bus">\r\n                    {{each busCompanyArrange as busCompany}}\r\n                    {{if busCompany != null}}\r\n                    <tr badStatus = "{{busCompany.badStatus}}" busCompanyArrangeId="{{busCompany.id}}" \r\n                    isConfirmAccount="{{busCompany.isConfirmAccount}}">\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}\r\n                            {{ if busCompany.taskType == 0}}\r\n                                    全程\r\n                                {{else if busCompany.taskType == 1}}\r\n                                    接机\r\n                                {{else if busCompany.taskType == 2}}\r\n                                    送机\r\n                                {{else if busCompany.taskType == 3}}\r\n                                    前段\r\n                                {{else if busCompany.taskType == 4}}\r\n                                    中段\r\n                                {{else if busCompany.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        {{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.seatCount}}{{/if}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realPrice}}</span>{{else}}<span>{{busCompany.realPrice}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{busCompany.realPrice}}" /></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realReduceMoney}}</span>{{else}}<span>{{busCompany.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/></td>\r\n                        <td>\r\n                        {{if busCompany.badStatus == 1}}\r\n                            <span class="BusneedPayMoney F-float F-money">\r\n                                {{busCompany.payedMoney+busCompany.realGuidePayMoney}}\r\n                            </span>\r\n                        {{else}}\r\n                            {{if busCompany.isConfirmAccount == 1}}\r\n                                <span class="BusneedPayMoney F-float F-money">{{busCompany.tempSettlementMoney}}</span>\r\n                            {{else}}\r\n                                <span class="BusneedPayMoney F-float F-money"></span>\r\n                            {{/if}}\r\n                        {{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{busCompany.needPayMoney}}"/></td>\r\n                        <td>{{busCompany.payedMoney}}</td>\r\n                        <td>\r\n                            <span>\r\n                                {{if busCompany.realPayType == 0}}\r\n                                    现金\r\n                                    {{else if busCompany.realPayType == 1}}\r\n                                    刷卡\r\n                                    {{else if busCompany.realPayType == 2}}\r\n                                    签单\r\n                                {{/if}}\r\n                            </span>\r\n                            &nbsp;&nbsp;\r\n                            {{if busCompany.badStatus == 1}}\r\n                                <span>\r\n                                    {{if busCompany.realPayType == 2}}\r\n                                        {{busCompany.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{busCompany.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                </span>\r\n                            {{else}}\r\n                                <span>\r\n                                    {{if busCompany.billUpdateTime != null}}\r\n                                        {{if busCompany.realPayType == 2}}\r\n                                            {{busCompany.realSignMoney}}\r\n                                        {{else}}\r\n                                            {{busCompany.realGuidePayMoney}}\r\n                                        {{/if}}\r\n                                    {{else}}\r\n                                        {{if busCompany.realPayType == 2}}\r\n                                            {{busCompany.realSignMoney}}\r\n                                        {{else}}\r\n                                            {{busCompany.guidePayMoney}}\r\n                                        {{/if}}\r\n                                    {{/if}}\r\n                                </span>\r\n                            {{/if}}  \r\n                                <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                                <input type="hidden" name="guidePayMoney" value="{{busCompany.realGuidePayMoney}}" />\r\n                        </td>\r\n                         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{busCompany.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">时间</th>\r\n                            <th class="th-border">餐厅</th>\r\n                            <th class="th-border">类型</th>\r\n                            <th class="th-border">餐标</th>\r\n                            <th class="th-border">人数</th>\r\n                            <th class="th-border">优惠</th>\r\n                            <th class="th-border">应付</th>\r\n                            <th class="th-border">已付</th>\r\n                            <th class="th-border">导付</th>\r\n                            <th class="th-border">单据</th>\r\n                            <th class="th-border">导游报账备注</th>\r\n                            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-restaurant"> \r\n                    {{each dayList as day}}\r\n                    {{if day.restaurantArrange != null}}\r\n                    {{each day.restaurantArrange as arrangeList}}\r\n                    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}" whichDay="{{arrange.whichDay}}" \r\n                    isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n                        {{if arrange.billUpdateTime != null}}\r\n                            {{if arrange.restaurantId == -1}}\r\n                                导游自选\r\n                            {{else}}\r\n                                {{if arrange.restaurant != null}}\r\n                                    {{arrange.restaurant.name}}\r\n                                {{/if}}\r\n                            {{/if}}\r\n                        {{else}}\r\n                            {{if arrange.restaurantId == -1}}\r\n                                导游自选\r\n                            {{else}}\r\n                                {{if arrange.restaurant != null}}\r\n                                    {{arrange.restaurant.name}}\r\n                                {{/if}}\r\n                            {{/if}}\r\n                        {{/if}}\r\n                        </td>{{/if}}\r\n                        <td>{{arrange.type}}</td> \r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}<span class="price">{{arrange.realPrice}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.realPrice}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}<input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n                        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}<input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span class="restneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                        {{else}}\r\n                            {{if arrange.isConfirmAccount == 1}}\r\n                                <span class="restneedPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                            {{else}}\r\n                                <span class="restneedPayMoney"></span>\r\n                            {{/if}}\r\n\r\n                        {{/if}}\r\n                        <input type="hidden" value="{{arrange.payedMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>\r\n                        <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span>\r\n                                {{if arrange.realPayType == 2}}\r\n                                    {{arrange.realSignMoney}}\r\n                                {{else}}\r\n                                    {{arrange.realGuidePayMoney}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{else}}\r\n                        \r\n                            <span>\r\n                                {{if arrange.billUpdateTime != null}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{else}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="billRemark">{{arrange.billRemark}}</span></td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 房费 -->\r\n            <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">酒店</th>\r\n                        <th class="th-border">房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">间数</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr> \r\n                    </thead>\r\n                    <tbody class="T-count-hotel">\r\n                    {{each dayList as day}}\r\n                    {{if day.hotelArrange != null}}\r\n                    {{each day.hotelArrange as arrangeList}}\r\n                    {{each arrangeList.hotelArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}" whichDay="{{arrange.whichDay}}" isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}<span>{{arrange.realPrice}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.realPrice}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span class="hotelneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                        {{else}}\r\n                            {{if arrange.isConfirmAccount == 1}}\r\n                                <span class="hotelneedPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                            {{else}}\r\n                                <span class="hotelneedPayMoney"></span>\r\n                                <input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}">\r\n                            {{/if}}\r\n                        {{/if}}\r\n                        </td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>\r\n                        <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span>\r\n                                {{if arrange.realPayType == 2}}\r\n                                    {{arrange.realSignMoney}}\r\n                                {{else}}\r\n                                    {{arrange.realGuidePayMoney}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{else}}\r\n                        \r\n                            <span>\r\n                                {{if arrange.billUpdateTime != null}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{else}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 景区 -->\r\n            <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}" isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}<span> {{arrange.realPrice}}</span>{{/if}}\r\n                       <input type="hidden" name="price" value="{{arrange.realPrice}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="scenicneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                            {{else}}\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="scenicneedPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="scenicneedPayMoney F-float F-money"></span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}">\r\n                        </td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>\r\n                        <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span>\r\n                                {{if arrange.realPayType == 2}}\r\n                                    {{arrange.realSignMoney}}\r\n                                {{else}}\r\n                                    {{arrange.realGuidePayMoney}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{else}}\r\n                        \r\n                            <span>\r\n                                {{if arrange.billUpdateTime != null}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{else}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 票务 -->\r\n            <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">票务商家</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">出发地</th>\r\n                        <th class="th-border">目的地</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-ticket">\r\n                    {{each ticketArrangeList as ticketArrange}}\r\n                    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}" isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n                    <td>{{arrange.shift}}</td>\r\n                    <td>{{arrange.seatLevel}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}<span>{{arrange.realPrice}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.realPrice}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" name="realCount" type="hidden" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="ticketneedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                            {{else}}\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="ticketneedPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="ticketneedPayMoney F-float F-money"></span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney">\r\n                        </td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>\r\n                        <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span>\r\n                                {{if arrange.realPayType == 2}}\r\n                                    {{arrange.realSignMoney}}\r\n                                {{else}}\r\n                                    {{arrange.realGuidePayMoney}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{else}}\r\n                        \r\n                            <span>\r\n                                {{if arrange.billUpdateTime != null}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{else}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-tripdetail-otherpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th> \r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherOut"> \r\n                    {{each dayList as day}}\r\n                    {{if day.otherArrange != null}}\r\n                    {{each day.otherArrange as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" otherArrangeId="{{arrange.id}}" whichDay="{{arrange.whichDay}}"\r\n                    isConfirmAccount="{{arrange.isConfirmAccount}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{arrange.name}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realPrice}}</span>{{else}}<span class="price">{{arrange.realPrice}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.realPrice}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>\r\n                            {{if arrange.badStatus == 1}}\r\n                                <span class="otherOutNeedPayMoney F-float F-money">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>\r\n                            {{else}}\r\n                                {{if arrange.isConfirmAccount == 1}}\r\n                                    <span class="otherOutNeedPayMoney F-float F-money" >{{arrange.tempSettlementMoney}}</span>\r\n                                {{else}}\r\n                                    <span class="otherOutNeedPayMoney F-float F-money"></span>\r\n                                {{/if}}\r\n                            {{/if}}\r\n                            <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}">\r\n                        </td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>\r\n                        <span>\r\n                            {{if arrange.realPayType == 0}}\r\n                                现金\r\n                                {{else if arrange.realPayType == 1}}\r\n                                刷卡\r\n                                {{else if arrange.realPayType == 2}}\r\n                                签单\r\n                            {{/if}}\r\n                        </span>\r\n                        &nbsp;&nbsp;\r\n                        {{if arrange.badStatus == 1}}\r\n                            <span>\r\n                                {{if arrange.realPayType == 2}}\r\n                                    {{arrange.realSignMoney}}\r\n                                {{else}}\r\n                                    {{arrange.realGuidePayMoney}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{else}}\r\n                        \r\n                            <span>\r\n                                {{if arrange.billUpdateTime != null}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{else}}\r\n                                    {{if arrange.realPayType == 2}}\r\n                                        {{arrange.realSignMoney}}\r\n                                    {{else}}\r\n                                        {{arrange.realGuidePayMoney}}\r\n                                    {{/if}}\r\n                                {{/if}}\r\n                            </span>\r\n                        {{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">客户</th>\r\n                        <th class="th-border">中转单号</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.orderNumber}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                     {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].opCheckRemark}}{{/if}}" />\r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n             <!-- 保险 -->\r\n            <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">保险公司</th>\r\n                        <th class="th-border">险种</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-insurance">\r\n                    {{each insuranceArrangeList as insuranceArrange}}\r\n                    <tr>\r\n                    <td>{{insuranceArrange.insurance.name}}</td>\r\n                    <td>{{if insuranceArrange.type == null}}{{if insuranceArrange.insuranceItem != null}}{{insuranceArrange.insuranceItem.name}}{{/if}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n                    <td>{{insuranceArrange.price}}</td>\r\n                    <td>{{insuranceArrange.memberCount}}</td>\r\n                    <td>{{insuranceArrange.needPayMoney}}</td>\r\n                    <td>{{insuranceArrange.payedMoney}}</td>\r\n                    <td></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 导游 -->\r\n            <div id="financial-count-tripdetail-guide" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">指定导游报账</th>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">导游</th>\r\n                        <th class="th-border">导服费</th>\r\n                        <th class="th-border">管理费</th>\r\n                        <th class="th-border">导游预支金额</th>\r\n                        <th class="th-border">备注</th>\r\n                        <th class="th-border">对账状态</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-guide">\r\n                    {{each guideArranges as rs index}}\r\n                        <tr guideid = "{{rs.guide.id}}">\r\n                            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n                            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>\r\n                                {{if rs.taskType == 0}}\r\n                                    全程\r\n                                {{else if rs.taskType == 1}}\r\n                                    接机\r\n                                {{else if rs.taskType == 2}}\r\n                                    送机\r\n                                {{else if rs.taskType == 3}}\r\n                                    前段\r\n                                {{else if rs.taskType == 4}}\r\n                                    中段\r\n                                {{else if rs.taskType == 5}}\r\n                                    后段\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{rs.guide.realname}}</td>\r\n                            <td>{{rs.price}}<input value="{{rs.price}}" name="price" type="hidden"></td>\r\n                            <td>{{rs.manageFee}}<input value="{{rs.manageFee}}" name="manageFee" type="hidden"></td>\r\n                            <td>{{rs.guideAllPreMoney}}</td>\r\n                            <td>{{rs.remark}}</td>\r\n                            <td>\r\n                                {{if rs.isConfirmAccount == 0}}\r\n                                    未对账\r\n                                {{else}}\r\n                                    已对账\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});