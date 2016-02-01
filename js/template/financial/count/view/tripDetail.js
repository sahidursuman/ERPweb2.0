/*TMODJS:{"debug":true,"version":113,"md5":"16f5805fb2877f2546e257bba6f0b67c"}*/
define(function(require){return require('../../../template')('financial/count/view/tripDetail', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,tripPlan=$data.tripPlan,busCompanyArrange=$data.busCompanyArrange,touristGroup=$data.touristGroup,guideArrange=$data.guideArrange,insurancePrice=$data.insurancePrice,isOp=$data.isOp,WEB_IMG_URL_BIG=$data.WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL=$data.WEB_IMG_URL_SMALL,$each=$utils.$each,touristGroups=$data.touristGroups,index=$data.index,touristGroupFee=$data.touristGroupFee,$index=$data.$index,isFinance=$data.isFinance,remarkArrangeList=$data.remarkArrangeList,dayList=$data.dayList,day=$data.day,shopArrangeList=$data.shopArrangeList,arrange=$data.arrange,arrangeList=$data.arrangeList,arrangeIncomePaymentList=$data.arrangeIncomePaymentList,otherInCome=$data.otherInCome,busCompany=$data.busCompany,ticketArrangeList=$data.ticketArrangeList,ticketArrange=$data.ticketArrange,insuranceArrangeList=$data.insuranceArrangeList,insuranceArrange=$data.insuranceArrange,guideArranges=$data.guideArranges,rs=$data.rs,$out='';$out+='<div class="col-sm-12 financialTripDetail"> <div> <button data-entity-id="';
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
$out+='</span></label></td> </tr> <tr> <td><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td> <td><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td> <td><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td> <td><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td> <td><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td> <td><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney"></span></label></td> <td><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">';
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
$out+=' <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a> </li> <li class="col-sm-1 no-padding align-center" style="width:100px;"> <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a> </li> </ul> <div class="tab-content T-list" style="position:relative;top: -2px">  <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost"> <table class="table table-striped table-bordered table-hover"> <tbody class="T-tripDetail"> <tr> <td>序号</td> <td>来源</td> <td>小组联系人</td> <td>联系电话</td> <td>人数</td> <td>应收</td> <td>社收</td> <td>现收</td> <td>明细</td> ';
$line=157;$each(touristGroups,function(touristGroup,index){
$out+=' <tr> <td>';
$line=159;$out+=$escape(index+1);
$out+='</td> <td>';
$line=160;if(touristGroup.partnerAgency){
$line=160;$out+=$escape(touristGroup.partnerAgency.travelAgencyName);
$line=160;}
$out+='</td> <td>';
$line=161;if(touristGroup.touristGroupMember != null){
$line=161;$out+=$escape(touristGroup.touristGroupMember.name);
$line=161;}
$out+='</td> <td>';
$line=162;if(touristGroup.touristGroupMember != null){
$line=162;$out+=$escape(touristGroup.touristGroupMember.mobileNumber);
$line=162;}
$out+='</td> <td><span class="F-float F-count">';
$line=163;$out+=$escape(touristGroup.adultCount);
$out+='</span>大<span class="F-float F-count">';
$line=163;$out+=$escape(touristGroup.childCount);
$out+='</span>小</td> <td><span class="F-float F-money">';
$line=164;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span></td> <td><span class="F-float F-money">';
$line=165;$out+=$escape(touristGroup.payedMoney);
$out+='</span></td> <td><span class="F-float F-money">';
$line=166;$out+=$escape(touristGroup.currentNeedPayMoney);
$out+='</span></td> <td> ';
$line=168;if(touristGroup.touristGroupFeeList.length > 0){
$out+=' ';
$line=169;$each(touristGroup.touristGroupFeeList,function(touristGroupFee,$index){
$out+=' ';
$line=170;$out+=$escape(touristGroupFee.name);
$out+=' ： <span class="F-float F-money">';
$line=171;$out+=$escape(touristGroupFee.price);
$out+='</span>&nbsp;X&nbsp;<span class="F-float F-count">';
$line=171;$out+=$escape(touristGroupFee.count);
$out+='</span>= <span class="F-float F-money">';
$line=172;$out+=$escape(touristGroupFee.price * touristGroupFee.count);
$out+='</span><br /> ';
$line=173;});
$out+=' ';
$line=174;}
$out+=' </td> </tr> ';
$line=177;});
$out+=' </tbody> </table> ';
$line=181;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=184;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=184;}
$out+=' type="text" style="width:30%;" value="';
$line=184;if(remarkArrangeList.tripDetailRemark.length>0){
$line=184;$out+=$escape(remarkArrangeList.tripDetailRemark[0].opCheckRemark);
$line=184;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=187;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=187;}
$out+=' type="text" style="width:30%;" value="';
$line=187;if(remarkArrangeList.tripDetailRemark.length>0){
$line=187;$out+=$escape(remarkArrangeList.tripDetailRemark[0].financeCheckRemark);
$line=187;}
$out+='"/> </div> </div>';
$line=189;}
$out+=' </div>  <div id="financial-count-tripdetail-shop" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="6">打单</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th> <th class="th-border" colspan="2">人数返佣</th> <th class="th-border" colspan="2">停车返佣</th> <th class="th-border" rowspan="2">购物返佣总收入</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=204;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=204;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">购物店</th> <th class="th-border">商品</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">总金额</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">元/人</th> <th class="th-border">返佣</th> <th class="th-border">元</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-shopping"> ';
$line=223;$each(dayList,function(day,$index){
$out+=' ';
$line=224;if(day.shopArrange != null){
$out+=' ';
$line=225;$each(day.shopArrange,function(shopArrangeList,$index){
$out+=' ';
$line=226;$each(shopArrangeList.shopArrangePolicy,function(arrange,index){
$out+=' ';
$line=227;if(arrange != null){
$out+=' <tr shopArrangeId="';
$line=228;$out+=$escape(arrange.id);
$out+='" shopId="';
$line=228;$out+=$escape(arrange.whichDay);
$out+='_';
$line=228;$out+=$escape(arrange.shopId);
$out+='" whichDay = "';
$line=229;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=230;if(index==0){
$out+='<td rowspan="';
$line=230;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="whichDay"></span></td>';
$line=230;}
$out+=' ';
$line=231;if(index==0){
$out+='<td rowspan="';
$line=231;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='">';
$line=231;$out+=$escape(arrange.shop.name);
$out+='</td>';
$line=231;}
$out+=' <td>';
$line=232;$out+=$escape(arrange.shop.name);
$out+='</td> <td><span class="F-float F-money">';
$line=233;$out+=$escape(arrange.consumeMoney);
$out+='</span><input policyId="';
$line=233;if(arrange.shopPolicy != null){
$line=233;$out+=$escape(arrange.shopPolicy.id);
$line=233;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=233;$out+=$escape(arrange.consumeMoney);
$out+='" old="';
$line=233;$out+=$escape(arrange.consumeMoney);
$out+='" maxlength="11" ';
$line=234;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=234;}
$out+='/></td> <td>';
$line=235;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=236;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=237;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=239;}
$out+=' </td> ';
$line=241;if(index == 0 ){
$out+='<td rowspan="';
$line=241;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumMoney';
$line=241;$out+=$escape(arrange.whichDay);
$out+='_';
$line=241;$out+=$escape(arrange.shopId);
$out+=' F-float F-money"></span></td>';
$line=241;}
$out+=' <td><span>';
$line=242;$out+=$escape(arrange.travelAgencyRate);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=242;$out+=$escape(arrange.travelAgencyRate*100);
$out+='" old="';
$line=242;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=242;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=242;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=243;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='</span><input type="hidden" class="travelAgencyRateMoney';
$line=243;$out+=$escape(arrange.whichDay);
$out+='_';
$line=243;$out+=$escape(arrange.shopId);
$out+='" name="travelAgencyRateMoney" value="';
$line=243;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='" ';
$line=243;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=243;}
$out+='/></td> <td><span>';
$line=244;$out+=$escape(arrange.guideRate);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="';
$line=244;$out+=$escape(arrange.guideRate*100);
$out+='" old="';
$line=244;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5" ';
$line=244;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=244;}
$out+='/></td> <td><span class="guideRateMoney F-float F-money">';
$line=245;$out+=$escape(arrange.guideRkateMoney);
$out+='</span><input type="hidden" class="guideRateMoney';
$line=245;$out+=$escape(arrange.whichDay);
$out+='_';
$line=245;$out+=$escape(arrange.shopId);
$out+='" name="guideRateMoney" value="';
$line=245;$out+=$escape(arrange.guideRateMoney);
$out+='" ';
$line=246;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=246;}
$out+='/></td> ';
$line=247;if(index == 0 ){
$out+='<td rowspan="';
$line=247;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=247;if(arrange.customerRebateMoney < 1){
$out+='<span class="F-float F-money">';
$line=247;$out+=$escape(arrange.shop.customerRebateMoney);
$out+='</span>';
$line=247;}else{
$out+='<span class="F-float F-money">';
$line=247;$out+=$escape(arrange.customerRebateMoney);
$out+='</span>';
$line=247;}
$out+='<input type="hidden" name="customerRebateMoney';
$line=247;$out+=$escape(arrange.whichDay);
$out+='_';
$line=247;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=247;if(arrange.customerRebateMoney < 1){
$line=247;$out+=$escape(arrange.shop.customerRebateMoney);
$line=247;}else{
$line=247;$out+=$escape(arrange.customerRebateMoney);
$line=247;}
$out+='" style="width:90px;" old="';
$line=247;if(arrange.customerRebateMoney < 1){
$line=247;$out+=$escape(arrange.shop.customerRebateMoney);
$line=247;}else{
$line=247;$out+=$escape(arrange.customerRebateMoney);
$line=247;}
$out+='" maxlength="11" ';
$line=247;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=247;}
$out+='/><input type="hidden" name="touristAdultCount';
$line=247;$out+=$escape(arrange.whichDay);
$out+='_';
$line=247;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=247;$out+=$escape(tripPlan.touristAdultCount);
$out+='" ';
$line=247;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=247;}
$out+='/></td>';
$line=247;}
$out+=' ';
$line=248;if(index == 0 ){
$out+='<td rowspan="';
$line=248;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumCustomerRebateMoney';
$line=248;$out+=$escape(arrange.whichDay);
$out+='_';
$line=248;$out+=$escape(arrange.shopId);
$out+=' sumCustomerRebateMoney">';
$line=248;$out+=$escape(shopArrangeList.customerRebateMoney);
$out+='</span></td>';
$line=248;}
$out+=' ';
$line=249;if(index == 0 ){
$out+='<td rowspan="';
$line=249;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=249;if(arrange.parkingRebateMoney < 1){
$line=249;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=249;}else{
$line=249;$out+=$escape(arrange.parkingRebateMoney);
$line=249;}
$out+='</span><input ';
$line=249;if(arrange.isConfirmAccount == 1){
$out+='readonly="readOnly"';
$line=249;}
$out+=' type="hidden" name="parkingRebateMoney';
$line=249;$out+=$escape(arrange.whichDay);
$out+='_';
$line=249;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=249;if(arrange.parkingRebateMoney < 1){
$line=249;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=249;}else{
$line=249;$out+=$escape(arrange.parkingRebateMoney);
$line=249;}
$out+='" style="width:90px;" old="';
$line=249;if(arrange.parkingRebateMoney < 1){
$line=249;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=249;}else{
$line=249;$out+=$escape(arrange.parkingRebateMoney);
$line=249;}
$out+='" maxlength="11" /></td>';
$line=250;}
$out+=' ';
$line=251;if(index == 0 ){
$out+='<td rowspan="';
$line=251;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumParkingRebateMoney';
$line=251;$out+=$escape(arrange.whichDay);
$out+='_';
$line=251;$out+=$escape(arrange.shopId);
$out+=' sumParkingRebateMoney">';
$line=251;$out+=$escape(shopArrangeList.parkingRebateMoney);
$out+='</span></td>';
$line=251;}
$out+=' ';
$line=252;if(index == 0 ){
$out+='<td rowspan="';
$line=252;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="T-shopIncome T-shopIncome';
$line=252;$out+=$escape(arrange.whichDay);
$out+='_';
$line=252;$out+=$escape(arrange.shopId);
$out+='"></span></td>';
$line=252;}
$out+=' <!-- ';
$line=253;if(index == 0 ){
$out+='<td rowspan="';
$line=253;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><input type="text" style="width:90px;"/></td>';
$line=253;}
$out+=' --> <td>';
$line=254;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=255;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=255;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=255;}else{
$out+='已对账';
$line=255;}
$out+='</td>';
$line=255;}
$out+=' </tr> ';
$line=257;}
$out+=' ';
$line=258;});
$out+=' ';
$line=259;});
$out+=' ';
$line=260;}
$out+=' ';
$line=261;});
$out+=' </tbody> </table> ';
$line=264;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=267;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=267;}
$out+=' type="text" style="width:30%;" value="';
$line=267;if(remarkArrangeList.shopReamrk.length>0){
$line=267;$out+=$escape(remarkArrangeList.shopReamrk[0].opCheckRemark);
$line=267;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=270;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=270;}
$out+=' type="text" style="width:30%;" value="';
$line=270;if(remarkArrangeList.shopReamrk.length>0){
$line=270;$out+=$escape(remarkArrangeList.shopReamrk[0].financeCheckRemark);
$line=270;}
$out+='" /> </div> </div>';
$line=272;}
$out+=' </div>  <div id="financial-count-tripdetail-selfpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="15">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=284;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=284;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">自费商家</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">应收数量</th> <th class="th-border">应收</th> <th class="th-border">现收</th> <th class="th-border">底价</th> <th class="th-border">应付数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">人数返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ';
$line=308;$each(dayList,function(day,$index){
$out+=' ';
$line=309;if(day.selfPayArrange != null){
$out+=' ';
$line=310;$each(day.selfPayArrange,function(arrangeList,$index){
$out+=' ';
$line=311;$each(arrangeList.selfPayArrangeList,function(arrange,index){
$out+=' ';
$line=312;if(arrange != null){
$out+=' <tr badStatus = "';
$line=313;$out+=$escape(arrange.badStatus);
$out+='" selfPayArrangeId="';
$line=313;$out+=$escape(arrange.id);
$out+='" selfPayId="';
$line=313;$out+=$escape(arrange.selfPayId);
$out+='"> ';
$line=314;if(index == 0 ){
$out+='<td rowspan="';
$line=314;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=314;}
$out+=' ';
$line=315;if(index == 0 ){
$out+='<td rowspan="';
$line=315;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=315;$out+=$escape(arrange.selfPay.name);
$out+='</td>';
$line=315;}
$out+=' <td>';
$line=316;if(arrange.selfPayItem != null ){
$line=316;$out+=$escape(arrange.selfPayItem.name);
$line=316;}
$out+='</td> <td>';
$line=317;if(arrange.badStatus == 1){
$out+='<span>';
$line=317;$out+=$escape(arrange.marketPrice);
$out+='</span>';
$line=317;}else{
$line=317;$out+=$escape(arrange.marketPrice);
$line=317;}
$out+=' <input type="hidden" name="marketPrice" value="';
$line=318;$out+=$escape(arrange.marketPrice);
$out+='"/></td> <td><span class="needIncomeCount"></span></td> <td> ';
$line=322;if(arrange.badStatus == 1){
$out+='<span class="needIncome">';
$line=322;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=322;}else{
$out+='<span class="needIncome">';
$line=322;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=322;}
$out+='</td> <td> ';
$line=324;if(arrange.badStatus == 1){
$out+='<span>';
$line=324;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=324;}else{
$out+='<span>';
$line=324;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=324;}
$out+=' </td> <td>';
$line=327;if(arrange.badStatus == 1){
$out+='<span>';
$line=327;$out+=$escape(arrange.price);
$out+='</span>';
$line=327;}else{
$line=327;$out+=$escape(arrange.price);
$line=327;}
$out+=' <input type="hidden" name="price" value="';
$line=328;$out+=$escape(arrange.price);
$out+='" /></td> <td> ';
$line=331;if(arrange.badStatus == 1){
$out+='<span>';
$line=331;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=331;}else{
$out+='<span>';
$line=331;if(arrange.billUpdateTime != null){
$line=331;$out+=$escape(arrange.realCount);
$line=331;}else{
$line=331;$out+=$escape(arrange.memberCount);
$line=331;}
$out+='</span>';
$line=331;}
$out+=' <input style="width:60px;" type="hidden" name="realCount" ';
$line=332;if(arrange.billUpdateTime != null){
$out+='value="';
$line=332;$out+=$escape(arrange.realCount);
$out+='"';
$line=332;}else{
$out+='value="';
$line=332;$out+=$escape(arrange.memberCount);
$out+='"';
$line=332;}
$out+=' maxlength="5"/><input type="hidden" name="memberCount" value="';
$line=332;$out+=$escape(arrange.memberCount);
$out+='" ';
$line=332;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=332;}
$out+=' /></td> <td> ';
$line=334;if(arrange.badStatus == 1){
$out+='<span>';
$line=334;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=334;}else{
$out+='<span>';
$line=334;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=334;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=335;$out+=$escape(arrange.realReduceMoney);
$out+='" style="width:60px;"/></td> <td><span class="needPayMoney" >';
$line=336;$out+=$escape(arrange.needPayMoney);
$out+='</span><input type="hidden" class="selfMoney"></td> <td>';
$line=337;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> ';
$line=339;if(arrange.badStatus == 1){
$out+='<span>';
$line=339;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=339;}else{
$out+='<span>';
$line=339;if(arrange.billUpdateTime != null){
$line=339;$out+=$escape(arrange.realGuidePayMoney);
$line=339;}else{
$line=339;$out+=$escape(arrange.guidePayMoney);
$line=339;}
$out+='</span>';
$line=339;}
$out+=' </td> <td>';
$line=342;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=343;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=344;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=346;}
$out+=' </td> <td>';
$line=348;$out+=$escape(arrange.customerRebateMoney);
$out+='</td> <td> ';
$line=350;if(arrange.badStatus == 1){
$out+='<span>';
$line=350;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=350;}else{
$out+='<span>';
$line=350;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=350;}
$out+=' <input style="width:90px;" type="hidden" name="travelAgencyRate" value="';
$line=351;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='" old="';
$line=351;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=351;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=351;}
$out+=' /></td> <td> ';
$line=353;if(arrange.badStatus == 1){
$out+='<span>';
$line=353;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=353;}else{
$out+='<span class="travelAgencyRebateMoney">';
$line=353;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=353;}
$out+=' <input type="hidden" name="travelAgencyRebateMoney" value="';
$line=355;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='" ';
$line=355;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=355;}
$out+=' /></td> <td><span>';
$line=356;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='</span> <input style="width:90px;" type="hidden" name="guideRate" value="';
$line=357;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='" old="';
$line=357;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5"/> </td> <td>';
$line=359;if(arrange.badStatus == 1){
$out+='<span>';
$line=359;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=359;}else{
$out+='<span class="guideRebateMoney">';
$line=359;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=359;}
$out+=' <input type="hidden" name="guideRebateMoney" value="';
$line=361;$out+=$escape(arrange.guideRebateMoney);
$out+='" ';
$line=361;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=361;}
$out+=' /></td> <!-- <td> <span class="guideRate">';
$line=363;$out+=$escape(arrange.customerRebateMoney);
$out+='</span> <input type="hidden" name="guideRate" value="';
$line=364;$out+=$escape(arrange.customerRebateMoney);
$out+='" ';
$line=364;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=364;}
$out+=' /></td> ';
$line=365;if(index == 0 ){
$out+='<td rowspan="';
$line=365;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=365;$out+=$escape(arrange.customerRebateMoney * tripPlan.touristAdultCount);
$out+='</td>';
$line=365;}
$out+=' --> <td>';
$line=366;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=367;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=367;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=367;}else{
$out+='已对账';
$line=367;}
$out+='</td>';
$line=367;}
$out+=' </tr> ';
$line=369;}
$out+=' ';
$line=370;});
$out+=' ';
$line=371;});
$out+=' ';
$line=372;}
$out+=' ';
$line=373;});
$out+=' </tbody> </table> ';
$line=376;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=380;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=380;}
$out+=' type="text" style="width:30%;" value="';
$line=380;if(remarkArrangeList.selfRemark.length>0){
$line=380;$out+=$escape(remarkArrangeList.selfRemark[0].opCheckRemark);
$line=380;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=383;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=383;}
$out+=' type="text" style="width:30%;" value="';
$line=383;if(remarkArrangeList.selfRemark.length>0){
$line=383;$out+=$escape(remarkArrangeList.selfRemark[0].financeCheckRemark);
$line=383;}
$out+='" /> </div> </div> ';
$line=386;}
$out+=' </div>  <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=400;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=400;}
$out+=' </tr> </thead> <tbody class="T-count-otherIn"> ';
$line=404;$each(arrangeIncomePaymentList,function(otherInCome,$index){
$out+=' ';
$line=405;if(otherInCome != null){
$out+=' <tr otherInId="';
$line=406;$out+=$escape(otherInCome.id);
$out+='" otherIn="';
$line=406;$out+=$escape(otherInCome.id);
$out+='" whichDay="';
$line=406;$out+=$escape(otherInCome.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=408;$out+=$escape(otherInCome.title);
$out+='</td> <td><span>';
$line=409;$out+=$escape(otherInCome.price);
$out+='</span><input style="width:90px;" type="hidden" name="price" value="';
$line=409;$out+=$escape(otherInCome.price);
$out+='" old="';
$line=409;$out+=$escape(otherInCome.price);
$out+='" maxlength="11" ';
$line=410;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=410;}
$out+=' /></td> <td><span>';
$line=412;$out+=$escape(otherInCome.count);
$out+='</span><input style="width:90px;" type="hidden" name="count" value="';
$line=412;$out+=$escape(otherInCome.count);
$out+='" old="';
$line=412;$out+=$escape(otherInCome.count);
$out+='" maxlength="11" ';
$line=413;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=413;}
$out+='/></td> <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="';
$line=414;$out+=$escape(otherInCome.needPayMoney);
$out+='" ';
$line=415;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=415;}
$out+='/></span></td> <td>';
$line=416;if(otherInCome.billImage != null && otherInCome.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=417;$out+=$escape(otherInCome.billImage);
$out+='" class="btn-view">查看</a> ';
$line=418;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=420;}
$out+=' </td> <td>';
$line=422;$out+=$escape(otherInCome.billRemark);
$out+='</td> ';
$line=423;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=423;if(otherInCome.isConfirmAccount == 0){
$out+='未对账';
$line=423;}else{
$out+='已对账';
$line=423;}
$out+='</td>';
$line=423;}
$out+=' </tr> ';
$line=425;}
$out+=' ';
$line=426;});
$out+=' </tbody> </table> ';
$line=429;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=432;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=432;}
$out+=' type="text" style="width:30%;" value="';
$line=432;if(remarkArrangeList.otherInRemark.length>0){
$line=432;$out+=$escape(remarkArrangeList.otherInRemark[0].opCheckRemark);
$line=432;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=435;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=435;}
$out+=' type="text" style="width:30%;" value="';
$line=435;if(remarkArrangeList.otherInRemark.length>0){
$line=435;$out+=$escape(remarkArrangeList.otherInRemark[0].financeCheckRemark);
$line=435;}
$out+='" /> </div> </div>';
$line=437;}
$out+=' </div>  <div id="financial-count-tripdetail-buspay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=459;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=459;}
$out+=' </tr> </thead> <tbody class="T-count-bus"> ';
$line=464;$each(busCompanyArrange,function(busCompany,$index){
$out+=' ';
$line=465;if(busCompany != null){
$out+=' <tr badStatus = "';
$line=466;$out+=$escape(busCompany.badStatus);
$out+='" busCompanyArrangeId="';
$line=466;$out+=$escape(busCompany.id);
$out+='" > <td>';
$line=467;if(busCompany.busCompany != null){
$line=467;$out+=$escape($helpers. dateFormat(busCompany.startTime ,  'yyyy-MM-dd'));
$line=467;}
$out+='</td> <td>';
$line=468;if(busCompany.busCompany != null){
$line=468;$out+=$escape($helpers. dateFormat(busCompany.endTime ,  'yyyy-MM-dd'));
$line=468;}
$out+='</td> <td>';
$line=469;if(busCompany.busCompany != null){
$out+=' ';
$line=470;if(busCompany.taskType == 0){
$out+=' 全程 ';
$line=472;}else if(busCompany.taskType == 1){
$out+=' 接机 ';
$line=474;}else if(busCompany.taskType == 2){
$out+=' 送机 ';
$line=476;}else if(busCompany.taskType == 3){
$out+=' 前段 ';
$line=478;}else if(busCompany.taskType == 4){
$out+=' 中段 ';
$line=480;}else if(busCompany.taskType == 5){
$out+=' 后段 ';
$line=482;}
$out+=' ';
$line=483;}
$out+='</td> <td>';
$line=484;if(busCompany.busCompany != null){
$line=484;$out+=$escape(busCompany.busCompany.companyName);
$line=484;}
$out+='</td> <td>';
$line=485;if(busCompany.bus != null){
$line=485;$out+=$escape(busCompany.bus.licenseNumber);
$line=485;}
$out+='</td> <td>';
$line=486;if(busCompany.bus != null){
$line=486;$out+=$escape(busCompany.bus.seatCount);
$line=486;}
$out+='</td> <td>';
$line=487;if(busCompany.badStatus == 1){
$out+='<span>';
$line=487;$out+=$escape(busCompany.price);
$out+='</span>';
$line=487;}else{
$out+='<span>';
$line=487;$out+=$escape(busCompany.price);
$out+='</span>';
$line=487;}
$out+=' <input type="hidden" name="price" value="';
$line=488;$out+=$escape(busCompany.price);
$out+='" /></td> <td>';
$line=489;if(busCompany.badStatus == 1){
$out+='<span>';
$line=489;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=489;}else{
$out+='<span>';
$line=489;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=489;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=490;$out+=$escape(busCompany.realReduceMoney);
$out+='" old="';
$line=490;$out+=$escape(busCompany.realReduceMoney);
$out+='"/></td> <td>';
$line=491;if(busCompany.badStatus == 1){
$out+='<span class="BusneedPayMoney">';
$line=491;$out+=$escape(busCompany.payedMoney+busCompany.realGuidePayMoney);
$out+='</span>';
$line=491;}else{
$out+='<span class="BusneedPayMoney"></span>';
$line=491;}
$out+='</td> <td>';
$line=492;$out+=$escape(busCompany.payedMoney);
$out+='</td> <td>';
$line=493;if(busCompany.badStatus == 1){
$out+='<span>';
$line=493;$out+=$escape(busCompany.realGuidePayMoney);
$out+='</span>';
$line=493;}else{
$out+='<span>';
$line=493;$out+=$escape(busCompany.guidePayMoney);
$out+='</span>';
$line=493;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=494;$out+=$escape(busCompany.payedMoney);
$out+='" ';
$line=494;if(busCompany.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=494;}
$out+='/> <input type="hidden" name="guidePayMoney" value="';
$line=495;$out+=$escape(busCompany.guidePayMoney);
$out+='" /></td> <td>';
$line=496;if(busCompany.billImage != null && busCompany.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=497;$out+=$escape(busCompany.billImage);
$out+='" class="btn-view">查看</a> ';
$line=498;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=500;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=503;$out+=$escape(busCompany.billRemark);
$out+='</td> ';
$line=504;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=504;if(busCompany.isConfirmAccount == 0){
$out+='未对账';
$line=504;}else{
$out+='已对账';
$line=504;}
$out+='</td>';
$line=504;}
$out+=' </tr> ';
$line=506;}
$out+=' ';
$line=507;});
$out+=' </tbody> </table> ';
$line=510;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=514;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=514;}
$out+=' type="text" style="width:30%;" value="';
$line=514;if(remarkArrangeList.busRemark.length>0){
$line=514;$out+=$escape(remarkArrangeList.busRemark[0].opCheckRemark);
$line=514;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=517;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=517;}
$out+=' type="text" style="width:30%;" value="';
$line=517;if(remarkArrangeList.busRemark.length>0){
$line=517;$out+=$escape(remarkArrangeList.busRemark[0].financeCheckRemark);
$line=517;}
$out+='" /> </div> </div> ';
$line=520;}
$out+=' </div>  <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">餐厅</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=540;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=540;}
$out+=' </tr> </thead> <tbody class="T-count-restaurant"> ';
$line=544;$each(dayList,function(day,$index){
$out+=' ';
$line=545;if(day.restaurantArrange != null){
$out+=' ';
$line=546;$each(day.restaurantArrange,function(arrangeList,$index){
$out+=' ';
$line=547;$each(arrangeList.restaurantArrangeList,function(arrange,index){
$out+=' ';
$line=548;if(arrange != null){
$out+=' <tr badStatus = "';
$line=549;$out+=$escape(arrange.badStatus);
$out+='" restaurantArrangeId="';
$line=549;$out+=$escape(arrange.id);
$out+='" restaurantId="';
$line=549;if(arrange.restaurant != null){
$line=549;$out+=$escape(arrange.restaurant.id);
$line=549;}
$out+='" restaurantStandardId="';
$line=549;if(arrange.restaurantStandard != null){
$line=549;$out+=$escape(arrange.restaurantStandard.id);
$line=549;}
$out+='" whichDay="';
$line=549;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=550;if(index == 0){
$out+='<td rowspan="';
$line=550;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=550;}
$out+=' ';
$line=551;if(index == 0){
$out+='<td rowspan="';
$line=551;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"> ';
$line=552;if(arrange.billUpdateTime != null){
$line=552;if(arrange.restaurant != null){
$line=552;$out+=$escape(arrange.restaurant.name);
$line=552;}
$line=552;}else{
$line=552;if(arrange.isChoose == 1){
$out+='自选';
$line=552;}else{
$line=552;if(arrange.restaurant != null){
$line=552;$out+=$escape(arrange.restaurant.name);
$line=552;}
$line=552;}
$line=552;}
$out+='</td>';
$line=552;}
$out+=' <td>';
$line=553;$out+=$escape(arrange.type);
$out+='</td> <td>';
$line=554;if(arrange.badStatus == 1){
$out+='<span>';
$line=554;$out+=$escape(arrange.price);
$out+='</span>';
$line=554;}else{
$out+='<span class="price">';
$line=554;$out+=$escape(arrange.price);
$out+='</span>';
$line=554;}
$out+='<input type="hidden" name="price" value="';
$line=554;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=555;if(arrange.badStatus == 1){
$out+='<span>';
$line=555;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=555;}else{
$out+='<span>';
$line=555;if(arrange.billUpdateTime != null){
$line=555;$out+=$escape(arrange.realCount);
$line=555;}else{
$line=555;$out+=$escape(arrange.memberCount);
$line=555;}
$out+='</span>';
$line=555;}
$out+='<input style="width:90px;" type="hidden" name="realCount" ';
$line=555;if(arrange.billUpdateTime != null){
$out+='value="';
$line=555;$out+=$escape(arrange.realCount);
$out+='" ';
$line=556;}else{
$out+='value="';
$line=556;$out+=$escape(arrange.memberCount);
$out+='"';
$line=556;}
$out+=' old="';
$line=556;$out+=$escape(arrange.realCount);
$out+='" maxlength="5" ';
$line=557;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=557;}
$out+='/></td> <td>';
$line=558;if(arrange.badStatus == 1){
$out+='<span>';
$line=558;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=558;}else{
$out+='<span>';
$line=558;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=558;}
$out+='<input type="hidden" name="realReduceMoney" value="';
$line=558;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=558;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=559;if(arrange.badStatus == 1){
$out+='<span class="restneedPayMoney">';
$line=559;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=559;}else{
$out+='<span class="restneedPayMoney"></span>';
$line=559;}
$out+='<input type="hidden" value="';
$line=559;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=560;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=561;if(arrange.badStatus == 1){
$out+='<span>';
$line=561;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=561;}else{
$out+='<span>';
$line=561;if(arrange.billUpdateTime != null){
$line=561;$out+=$escape(arrange.realGuidePayMoney);
$line=561;}else{
$line=561;$out+=$escape(arrange.guidePayMoney);
$line=561;}
$out+='</span>';
$line=561;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=563;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=564;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=565;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=566;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=567;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=569;}
$out+=' </td> <td><span class="difference"></span></td> <td><span class="billRemark">';
$line=572;$out+=$escape(arrange.billRemark);
$out+='</span></td> ';
$line=573;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=573;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=573;}else{
$out+='已对账';
$line=573;}
$out+='</td>';
$line=573;}
$out+=' </tr> ';
$line=575;}
$out+=' ';
$line=576;});
$out+=' ';
$line=577;});
$out+=' ';
$line=578;}
$out+=' ';
$line=579;});
$out+=' </tbody> </table> ';
$line=582;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=586;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=586;}
$out+=' type="text" style="width:30%;" value="';
$line=586;if(remarkArrangeList.restRemark.length>0){
$line=586;$out+=$escape(remarkArrangeList.restRemark[0].opCheckRemark);
$line=586;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=589;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=589;}
$out+=' type="text" style="width:30%;" value="';
$line=589;if(remarkArrangeList.restRemark.length>0){
$line=589;$out+=$escape(remarkArrangeList.restRemark[0].financeCheckRemark);
$line=589;}
$out+='" /> </div> </div> ';
$line=592;}
$out+=' </div>  <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=611;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=611;}
$out+=' </tr> </thead> <tbody class="T-count-hotel"> ';
$line=615;$each(dayList,function(day,$index){
$out+=' ';
$line=616;if(day.hotelArrange != null){
$out+=' ';
$line=617;$each(day.hotelArrange,function(arrangeList,$index){
$out+=' ';
$line=618;$each(arrangeList.hotelArrangeList,function(arrange,index){
$out+=' ';
$line=619;if(arrange != null){
$out+=' <tr badStatus = "';
$line=620;$out+=$escape(arrange.badStatus);
$out+='" hotelArrangeId="';
$line=620;$out+=$escape(arrange.id);
$out+='" hotelId="';
$line=620;if(arrange.hotel != null){
$line=620;$out+=$escape(arrange.hotel.id);
$line=620;}
$out+='" restaurantStandardId="';
$line=620;if(arrange.hotelRoom != null){
$line=620;$out+=$escape(arrange.hotelRoom.id);
$line=620;}
$out+='" whichDay="';
$line=620;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=621;if(index == 0){
$out+='<td rowspan="';
$line=621;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=621;}
$out+=' ';
$line=622;if(index == 0){
$out+='<td rowspan="';
$line=622;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">';
$line=622;if(arrange.hotel != null){
$line=622;$out+=$escape(arrange.hotel.name);
$line=622;}
$out+='</td>';
$line=622;}
$out+=' <td>';
$line=623;if(arrange.hotelRoom != null){
$line=623;$out+=$escape(arrange.hotelRoom.type);
$line=623;}
$out+='</td> <td>';
$line=624;if(arrange.badStatus == 1){
$out+='<span>';
$line=624;$out+=$escape(arrange.price);
$out+='</span>';
$line=624;}else{
$out+='<span>';
$line=624;$out+=$escape(arrange.price);
$out+='</span>';
$line=624;}
$out+=' <input type="hidden" name="price" value="';
$line=625;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=626;if(arrange.badStatus == 1){
$out+='<span>';
$line=626;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=626;}else{
$out+='<span>';
$line=626;if(arrange.billUpdateTime != null){
$line=626;$out+=$escape(arrange.realCount);
$line=626;}else{
$line=626;$out+=$escape(arrange.memberCount);
$line=626;}
$out+='</span>';
$line=626;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=627;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=627;$out+=$escape(arrange.realCount);
$out+='" ';
$line=627;}else{
$out+='value="';
$line=627;$out+=$escape(arrange.memberCount);
$out+='"';
$line=627;}
$out+='/></td> <td>';
$line=628;if(arrange.badStatus == 1){
$out+='<span>';
$line=628;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=628;}else{
$out+='<span>';
$line=628;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=628;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=629;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=629;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=630;if(arrange.badStatus == 1){
$out+='<span class="hotelneedPayMoney">';
$line=630;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=630;}else{
$out+='<span class="hotelneedPayMoney"></span>';
$line=630;}
$out+=' <input name="needPayMoney" type="hidden" value="';
$line=631;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=632;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=633;if(arrange.badStatus == 1){
$out+='<span>';
$line=633;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=633;}else{
$out+='<span>';
$line=633;if(arrange.billUpdateTime != null){
$line=633;$out+=$escape(arrange.realGuidePayMoney);
$line=633;}else{
$line=633;$out+=$escape(arrange.guidePayMoney);
$line=633;}
$out+='</span>';
$line=633;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=635;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=636;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=637;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=638;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=639;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=641;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=644;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=645;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=645;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=645;}else{
$out+='已对账';
$line=645;}
$out+='</td>';
$line=645;}
$out+=' </tr> ';
$line=647;}
$out+=' ';
$line=648;});
$out+=' ';
$line=649;});
$out+=' ';
$line=650;}
$out+=' ';
$line=651;});
$out+=' </tbody> </table> ';
$line=654;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=658;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=658;}
$out+=' type="text" style="width:30%;" value="';
$line=658;if(remarkArrangeList.hotelRemark.length>0){
$line=658;$out+=$escape(remarkArrangeList.hotelRemark[0].opCheckRemark);
$line=658;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=661;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=661;}
$out+=' type="text" style="width:30%;" value="';
$line=661;if(remarkArrangeList.hotelRemark.length>0){
$line=661;$out+=$escape(remarkArrangeList.hotelRemark[0].financeCheckRemark);
$line=661;}
$out+='" /> </div> </div> ';
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
$out+='" whichDay="';
$line=692;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=693;if(index == 0){
$out+='<td rowspan="';
$line=693;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
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
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=729;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=729;}
$out+=' type="text" style="width:30%;" value="';
$line=729;if(remarkArrangeList.scenicRemark.length>0){
$line=729;$out+=$escape(remarkArrangeList.scenicRemark[0].opCheckRemark);
$line=729;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=732;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=732;}
$out+=' type="text" style="width:30%;" value="';
$line=732;if(remarkArrangeList.scenicRemark.length>0){
$line=732;$out+=$escape(remarkArrangeList.scenicRemark[0].financeCheckRemark);
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
$out+='</td> ';
$line=791;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=791;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=791;}else{
$out+='已对账';
$line=791;}
$out+='</td>';
$line=791;}
$out+=' </tr> ';
$line=793;});
$out+=' ';
$line=794;});
$out+=' </tbody> </table> ';
$line=797;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=801;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=801;}
$out+=' type="text" style="width:30%;" value="';
$line=801;if(remarkArrangeList.ticketRemark.length>0){
$line=801;$out+=$escape(remarkArrangeList.ticketRemark[0].opCheckRemark);
$line=801;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=804;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=804;}
$out+=' type="text" style="width:30%;" value="';
$line=804;if(remarkArrangeList.ticketRemark.length>0){
$line=804;$out+=$escape(remarkArrangeList.ticketRemark[0].financeCheckRemark);
$line=804;}
$out+='" /> </div> </div> ';
$line=807;}
$out+=' </div>  <div id="financial-count-tripdetail-otherpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=825;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=825;}
$out+=' </tr> </thead> <tbody class="T-count-otherOut"> ';
$line=829;$each(dayList,function(day,$index){
$out+=' ';
$line=830;if(day.otherArrange != null){
$out+=' ';
$line=831;$each(day.otherArrange,function(arrange,index){
$out+=' ';
$line=832;if(arrange != null){
$out+=' <tr badStatus = "';
$line=833;$out+=$escape(arrange.badStatus);
$out+='" otherArrangeId="';
$line=833;$out+=$escape(arrange.id);
$out+='" whichDay="';
$line=833;$out+=$escape(arrange.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=835;$out+=$escape(arrange.name);
$out+='</td> <td>';
$line=836;if(arrange.badStatus == 1){
$out+='<span>';
$line=836;$out+=$escape(arrange.price);
$out+='</span>';
$line=836;}else{
$out+='<span class="price">';
$line=836;$out+=$escape(arrange.price);
$out+='</span>';
$line=836;}
$out+=' <input type="hidden" name="price" value="';
$line=837;$out+=$escape(arrange.price);
$out+='" ';
$line=837;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=837;}
$out+='/></td> <td>';
$line=838;if(arrange.badStatus == 1){
$out+='<span>';
$line=838;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=838;}else{
$out+='<span>';
$line=838;if(arrange.billUpdateTime != null){
$line=838;$out+=$escape(arrange.realCount);
$line=838;}else{
$line=838;$out+=$escape(arrange.memberCount);
$line=838;}
$out+='</span>';
$line=838;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=839;if(arrange.billUpdateTime){
$out+='value="';
$line=839;$out+=$escape(arrange.realCount);
$out+='"';
$line=839;}else{
$out+='value="';
$line=839;$out+=$escape(arrange.memberCount);
$out+='"';
$line=839;}
$out+=' /></td> <td>';
$line=840;if(arrange.badStatus == 1){
$out+='<span>';
$line=840;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=840;}else{
$out+='<span>';
$line=840;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=840;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=841;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=842;if(arrange.badStatus == 1){
$out+='<span class="otherOutNeedPayMoney">';
$line=842;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=842;}else{
$out+='<span class="otherOutNeedPayMoney"></span>';
$line=842;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=843;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=844;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=845;if(arrange.badStatus == 1){
$out+='<span>';
$line=845;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=845;}else{
$out+='<span>';
$line=845;if(arrange.billUpdateTime != null){
$line=845;$out+=$escape(arrange.realGuidePayMoney);
$line=845;}else{
$line=845;$out+=$escape(arrange.guidePayMoney);
$line=845;}
$out+='</span>';
$line=845;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=847;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=848;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=849;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=850;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=851;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=853;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=856;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=857;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=857;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=857;}else{
$out+='已对账';
$line=857;}
$out+='</td>';
$line=857;}
$out+=' </tr> ';
$line=859;}
$out+=' ';
$line=860;});
$out+=' ';
$line=861;}
$out+=' ';
$line=862;});
$out+=' </tbody> </table> ';
$line=865;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=869;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=869;}
$out+=' type="text" style="width:30%;" value="';
$line=869;if(remarkArrangeList.otherOutRemark.length>0){
$line=869;$out+=$escape(remarkArrangeList.otherOutRemark[0].opCheckRemark);
$line=869;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=872;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=872;}
$out+=' type="text" style="width:30%;" value="';
$line=872;if(remarkArrangeList.otherOutRemark.length>0){
$line=872;$out+=$escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark);
$line=872;}
$out+='" /> </div> </div> ';
$line=875;}
$out+=' </div> ';
$line=877;if(touristGroup != null){
$out+='  <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">来源</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ';
$line=894;$each(touristGroup.touristGroupList,function(touristGroup,index){
$out+=' <tr> <td>';
$line=896;$out+=$escape(index+1);
$out+='</td> <td>';
$line=897;$out+=$escape(touristGroup.partnerAgencyName);
$out+='</td> <td>';
$line=898;$out+=$escape(touristGroup.name);
$out+='</td> <td>';
$line=899;$out+=$escape(touristGroup.mobileNumber);
$out+='</td> <td>';
$line=900;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=900;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=901;$out+=$escape(touristGroup.arriveService);
$out+='</td> <td>';
$line=902;$out+=$escape(touristGroup.leaveService);
$out+='</td> <td><a href="javascript:void(0);" data-entity-id="';
$line=903;$out+=$escape(touristGroup.id);
$out+='" class="T-viewTripTransit">查看</a></td> </tr> ';
$line=905;});
$out+=' </tbody> </table> ';
$line=909;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=912;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=912;}
$out+=' type="text" style="width:30%;" value="';
$line=912;if(remarkArrangeList.transferRemark.length>0){
$line=912;$out+=$escape(remarkArrangeList.transferRemark[0].opCheckRemark);
$line=912;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=914;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=914;}
$out+=' type="text" style="width:30%;" value="';
$line=914;if(remarkArrangeList.transferRemark.length>0){
$line=914;$out+=$escape(remarkArrangeList.transferRemark[0].financeCheckRemark);
$line=914;}
$out+='" /> </div> </div>';
$line=916;}
$out+=' </div> ';
$line=918;}
$out+='  <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ';
$line=932;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=932;}
$out+=' </tr> </thead> <tbody class="T-count-insurance"> ';
$line=936;$each(insuranceArrangeList,function(insuranceArrange,$index){
$out+=' <tr> <td>';
$line=938;$out+=$escape(insuranceArrange.insurance.name);
$out+='</td> <td>';
$line=939;if(insuranceArrange.type == null){
$line=939;if(insuranceArrange.insuranceItem != null){
$line=939;$out+=$escape(insuranceArrange.insuranceItem.name);
$line=939;}
$line=939;}else{
$line=939;$out+=$escape(insuranceArrange.type);
$line=939;}
$out+='</td> <td>';
$line=940;$out+=$escape(insuranceArrange.price);
$out+='</td> <td>';
$line=941;$out+=$escape(insuranceArrange.memberCount);
$out+='</td> <td>';
$line=942;$out+=$escape(insuranceArrange.needPayMoney);
$out+='</td> <td>';
$line=943;$out+=$escape(insuranceArrange.payedMoney);
$out+='</td> <td></td> </tr> ';
$line=946;});
$out+=' </tbody> </table> ';
$line=950;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=954;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=954;}
$out+=' type="text" style="width:30%;" value="';
$line=954;if(remarkArrangeList.insuranceRemark.length>0){
$line=954;$out+=$escape(remarkArrangeList.insuranceRemark[0].opCheckRemark);
$line=954;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=957;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=957;}
$out+=' type="text" style="width:30%;" value="';
$line=957;if(remarkArrangeList.insuranceRemark.length>0){
$line=957;$out+=$escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark);
$line=957;}
$out+='" /> </div> </div> ';
$line=960;}
$out+=' </div>  <div id="financial-count-tripdetail-guide" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border"><span class="necessary">*</span>管理费</th> <th class="th-border"><span class="necessary">*</span>导游预支金额</th> <th class="th-border"><span class="necessary">*</span>备注</th> </tr> </thead> <tbody class="T-count-guide"> ';
$line=979;$each(guideArranges,function(rs,index){
$out+=' <tr guideid = "';
$line=980;$out+=$escape(rs.guide.id);
$out+='"> <td><input disabled="disabled" type="radio" name="" ';
$line=981;if(rs.isAccountGuide == 1){
$out+='checked="checked"';
$line=981;}
$out+='/></td> <td>';
$line=982;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=983;$out+=$escape($helpers. dateFormat(rs.endTime ,  'yyyy-MM-dd'));
$out+='</td> <td> ';
$line=985;if(rs.taskType == 0){
$out+=' 全程 ';
$line=987;}else if(rs.taskType == 1){
$out+=' 接机 ';
$line=989;}else if(rs.taskType == 2){
$out+=' 送机 ';
$line=991;}else if(rs.taskType == 3){
$out+=' 前段 ';
$line=993;}else if(rs.taskType == 4){
$out+=' 中段 ';
$line=995;}else if(rs.taskType == 5){
$out+=' 后段 ';
$line=997;}
$out+=' </td> <td>';
$line=999;$out+=$escape(rs.guide.realname);
$out+='</td> <td>';
$line=1000;$out+=$escape(rs.price);
$out+='<input value="';
$line=1000;$out+=$escape(rs.price);
$out+='" name="price" type="hidden"></td> <td>';
$line=1001;$out+=$escape(rs.manageFee);
$out+='<input value="';
$line=1001;$out+=$escape(rs.manageFee);
$out+='" name="manageFee" type="hidden"></td> <td>';
$line=1002;$out+=$escape(rs.guideAllPreMoney);
$out+='</td> <td>';
$line=1003;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=1005;});
$out+=' </tbody> </table> ';
$line=1009;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1013;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1013;}
$out+=' type="text" style="width:30%;" value="';
$line=1013;if(remarkArrangeList.guideRemark.length>0){
$line=1013;$out+=$escape(remarkArrangeList.guideRemark[0].opCheckRemark);
$line=1013;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1016;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1016;}
$out+=' type="text" style="width:30%;" value="';
$line=1016;if(remarkArrangeList.guideRemark.length>0){
$line=1016;$out+=$escape(remarkArrangeList.guideRemark[0].financeCheckRemark);
$line=1016;}
$out+='" /> </div> </div> ';
$line=1019;}
$out+=' </div> </div> </div> <div style="height:30px;"></div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="col-sm-12 financialTripDetail">\r\n    <div>\r\n        <button data-entity-id="{{tripPlan.id}}" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;">\r\n            <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格\r\n        </button>\r\n    </div>\r\n    <div class="col-xs-12 border">\r\n        <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr style="">\r\n                <td><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td><label  style="font-weight: bold;">应用范围：{{if tripPlan.lineProduct.customerType == 1}}团体{{else if tripPlan.lineProduct.customerType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr class="T-mainTitle">\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr class="T-title">\r\n            <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr >\r\n            <td><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">{{guideArrange.price}}</span></label></td>\r\n            <td><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney"></span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">{{guideArrange.manageFee}}</span></label></td>\r\n            <td></td>\r\n            <td><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td><label>票务费用{{isOp}}：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="row" style="margin-bottom:15px;">\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n    </div>\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content T-list" style="position:relative;top: -2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>来源</td>\r\n                        <td>小组联系人</td>\r\n                        <td>联系电话</td>\r\n                        <td>人数</td>\r\n                        <td>应收</td>\r\n                        <td>社收</td>\r\n                        <td>现收</td>\r\n                        <td>明细</td>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                            <td><span class="F-float F-count">{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</td>\r\n                            <td><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span></td>\r\n                            <td>\r\n                                {{if touristGroup.touristGroupFeeList.length > 0}}\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].financeCheckRemark}}{{/if}}"/>\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-tripdetail-shop" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="6">打单</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <th class="th-border" colspan="2">人数返佣</th>\r\n                        <th class="th-border" colspan="2">停车返佣</th>\r\n                        <th class="th-border" rowspan="2">购物返佣总收入</th>\r\n                        <!--  <th class="th-border" rowspan="2">现收</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">购物店</th>\r\n                      <th class="th-border">商品</th>\r\n                      <th class="th-border">金额</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">总金额</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元/人</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-shopping"> \r\n                    {{each dayList as day}}\r\n                    {{if day.shopArrange != null}}\r\n                    {{each day.shopArrange as shopArrangeList}}\r\n                    {{each shopArrangeList.shopArrangePolicy as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.whichDay}}_{{arrange.shopId}}" \r\n                    whichDay = "{{arrange.whichDay}}">\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">{{arrange.shop.name}}</td>{{/if}}\r\n                        <td>{{arrange.shop.name}}</td>\r\n                        <td><span class="F-float F-money">{{arrange.consumeMoney}}</span><input policyId="{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{arrange.consumeMoney}}" old="{{arrange.consumeMoney}}" maxlength="11" \r\n                        {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumMoney{{arrange.whichDay}}_{{arrange.shopId}} F-float F-money"></span></td>{{/if}}\r\n                        <td><span>{{arrange.travelAgencyRate}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{arrange.travelAgencyRate*100}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td><span class="travelAgencyRateMoney F-float F-money">{{arrange.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{arrange.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span>{{arrange.guideRate}}</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="{{arrange.guideRate*100}}" old="{{arrange.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="guideRateMoney F-float F-money">{{arrange.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{arrange.guideRateMoney}}" \r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.customerRebateMoney < 1}}<span class="F-float F-money">{{arrange.shop.customerRebateMoney}}</span>{{else}}<span class="F-float F-money">{{arrange.customerRebateMoney}}</span>{{/if}}<input type="hidden" name="customerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/><input type="hidden" name="touristAdultCount{{arrange.whichDay}}_{{arrange.shopId}}" value="{{tripPlan.touristAdultCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumCustomerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumCustomerRebateMoney">{{shopArrangeList.customerRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}</span><input {{if arrange.isConfirmAccount == 1}}readonly="readOnly"{{/if}} type="hidden" name="parkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" maxlength="11" \r\n                        /></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumParkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumParkingRebateMoney">{{shopArrangeList.parkingRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="T-shopIncome T-shopIncome{{arrange.whichDay}}_{{arrange.shopId}}"></span></td>{{/if}}\r\n                        <!-- {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input type="text" style="width:90px;"/></td>{{/if}} -->\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}  \r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 自费 -->\r\n            <div id="financial-count-tripdetail-selfpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="15">消费</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">自费商家</th>\r\n                      <th class="th-border">项目</th>\r\n                      <th class="th-border">单价</th>\r\n                      <th class="th-border">应收数量</th>\r\n                      <th class="th-border">应收</th>\r\n                      <th class="th-border">现收</th>\r\n                      <th class="th-border">底价</th>\r\n                      <th class="th-border">应付数量</th>\r\n                      <th class="th-border">优惠</th>\r\n                      <th class="th-border">应付</th>\r\n                      <th class="th-border">已付</th>\r\n                      <th class="th-border">导付</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">人数返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-selfPay">\r\n                    {{each dayList as day}}\r\n                    {{if day.selfPayArrange != null}}\r\n                    {{each day.selfPayArrange as arrangeList}}\r\n                    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}">\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                            <td>{{if arrange.selfPayItem != null }}{{arrange.selfPayItem.name}}{{/if}}</td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.marketPrice}}</span>{{else}}{{arrange.marketPrice}}{{/if}}\r\n                            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n                            \r\n                            <td><span class="needIncomeCount"></span></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{else}}<span class="needIncome">{{arrange.realGetMoney}}</span>{{/if}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGetMoney}}</span>{{else}}<span>{{arrange.realGetMoney}}</span>{{/if}}\r\n                            </td>\r\n\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}{{arrange.price}}{{/if}}\r\n                            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                            <input style="width:60px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/><input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td> \r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                            <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" style="width:60px;"/></td>\r\n                            <td><span class="needPayMoney" >{{arrange.needPayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                            <td>{{arrange.payedMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            </td>\r\n                           \r\n                            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">查看</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{arrange.customerRebateMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{/if}}\r\n                                <input style="width:90px;" type="hidden" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td><span>{{arrange.guideRate*100 | parseInt}}</span>\r\n                                <input style="width:90px;" type="hidden" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>\r\n                            </td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRebateMoney}}</span>{{else}}<span class="guideRebateMoney">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <!-- <td>\r\n                                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n                            <td>{{arrange.billRemark}}</td>\r\n                            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{otherInCome.title}}</td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><span>{{otherInCome.count}}</span><input style="width:90px;" type="hidden" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{otherInCome.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            \r\n            <!-- 车费 -->\r\n            <div id="financial-count-tripdetail-buspay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border">座位数</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-bus">\r\n                    {{each busCompanyArrange as busCompany}}\r\n                    {{if busCompany != null}}\r\n                    <tr badStatus = "{{busCompany.badStatus}}" busCompanyArrangeId="{{busCompany.id}}" >\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}\r\n                            {{ if busCompany.taskType == 0}}\r\n                                    全程\r\n                                {{else if busCompany.taskType == 1}}\r\n                                    接机\r\n                                {{else if busCompany.taskType == 2}}\r\n                                    送机\r\n                                {{else if busCompany.taskType == 3}}\r\n                                    前段\r\n                                {{else if busCompany.taskType == 4}}\r\n                                    中段\r\n                                {{else if busCompany.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        {{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.seatCount}}{{/if}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.price}}</span>{{else}}<span>{{busCompany.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{busCompany.price}}" /></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realReduceMoney}}</span>{{else}}<span>{{busCompany.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney"></span>{{/if}}</td>\r\n                        <td>{{busCompany.payedMoney}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realGuidePayMoney}}</span>{{else}}<span>{{busCompany.guidePayMoney}}</span>{{/if}}  \r\n                            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></td>\r\n                         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{busCompany.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">时间</th>\r\n                            <th class="th-border">餐厅</th>\r\n                            <th class="th-border">类型</th>\r\n                            <th class="th-border">餐标</th>\r\n                            <th class="th-border">人数</th>\r\n                            <th class="th-border">优惠</th>\r\n                            <th class="th-border">应付</th>\r\n                            <th class="th-border">已付</th>\r\n                            <th class="th-border">导付</th>\r\n                            <th class="th-border">单据</th>\r\n                            <th class="th-border">差额</th>\r\n                            <th class="th-border">导游报账备注</th>\r\n                            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-restaurant"> \r\n                    {{each dayList as day}}\r\n                    {{if day.restaurantArrange != null}}\r\n                    {{each day.restaurantArrange as arrangeList}}\r\n                    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n                        {{if arrange.billUpdateTime != null}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{else}}{{if arrange.isChoose == 1}}自选{{else}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{/if}}{{/if}}</td>{{/if}}\r\n                        <td>{{arrange.type}}</td> \r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}<input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n                        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}<input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}<input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td><span class="billRemark">{{arrange.billRemark}}</span></td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 房费 -->\r\n            <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">酒店</th>\r\n                        <th class="th-border">房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">间数</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr> \r\n                    </thead>\r\n                    <tbody class="T-count-hotel">\r\n                    {{each dayList as day}}\r\n                    {{if day.hotelArrange != null}}\r\n                    {{each day.hotelArrange as arrangeList}}\r\n                    {{each arrangeList.hotelArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span>{{/if}}\r\n                        <input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 景区 -->\r\n            <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span> {{arrange.price}}</span>{{/if}}\r\n                       <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 票务 -->\r\n            <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">票务商家</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">出发地</th>\r\n                        <th class="th-border">目的地</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-ticket">\r\n                    {{each ticketArrangeList as ticketArrange}}\r\n                    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n                    <td>{{arrange.shift}}</td>\r\n                    <td>{{arrange.seatLevel}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" name="realCount" type="hidden" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-tripdetail-otherpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th> \r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherOut"> \r\n                    {{each dayList as day}}\r\n                    {{if day.otherArrange != null}}\r\n                    {{each day.otherArrange as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" otherArrangeId="{{arrange.id}}" whichDay="{{arrange.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{arrange.name}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                          {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">来源</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                     {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].opCheckRemark}}{{/if}}" />\r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n             <!-- 保险 -->\r\n            <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">保险公司</th>\r\n                        <th class="th-border">险种</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-insurance">\r\n                    {{each insuranceArrangeList as insuranceArrange}}\r\n                    <tr>\r\n                    <td>{{insuranceArrange.insurance.name}}</td>\r\n                    <td>{{if insuranceArrange.type == null}}{{if insuranceArrange.insuranceItem != null}}{{insuranceArrange.insuranceItem.name}}{{/if}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n                    <td>{{insuranceArrange.price}}</td>\r\n                    <td>{{insuranceArrange.memberCount}}</td>\r\n                    <td>{{insuranceArrange.needPayMoney}}</td>\r\n                    <td>{{insuranceArrange.payedMoney}}</td>\r\n                    <td></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 导游 -->\r\n            <div id="financial-count-tripdetail-guide" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n                        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                        <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">导游</th>\r\n                        <th class="th-border">导服费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>管理费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>导游预支金额</th>\r\n                        <th class="th-border"><span class="necessary">*</span>备注</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-guide">\r\n                    {{each guideArranges as rs index}}\r\n                        <tr guideid = "{{rs.guide.id}}">\r\n                            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n                            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>\r\n                                {{if rs.taskType == 0}}\r\n                                    全程\r\n                                {{else if rs.taskType == 1}}\r\n                                    接机\r\n                                {{else if rs.taskType == 2}}\r\n                                    送机\r\n                                {{else if rs.taskType == 3}}\r\n                                    前段\r\n                                {{else if rs.taskType == 4}}\r\n                                    中段\r\n                                {{else if rs.taskType == 5}}\r\n                                    后段\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{rs.guide.realname}}</td>\r\n                            <td>{{rs.price}}<input value="{{rs.price}}" name="price" type="hidden"></td>\r\n                            <td>{{rs.manageFee}}<input value="{{rs.manageFee}}" name="manageFee" type="hidden"></td>\r\n                            <td>{{rs.guideAllPreMoney}}</td>\r\n                            <td>{{rs.remark}}</td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});