/*TMODJS:{"debug":true,"version":108,"md5":"9469903aaa99bfc6405b526356519459"}*/
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
$out+='"> ';
$line=229;if(index==0){
$out+='<td rowspan="';
$line=229;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='">第';
$line=229;$out+=$escape(arrange.whichDay);
$out+='天</td>';
$line=229;}
$out+=' ';
$line=230;if(index==0){
$out+='<td rowspan="';
$line=230;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='">';
$line=230;$out+=$escape(arrange.shop.name);
$out+='</td>';
$line=230;}
$out+=' <td>';
$line=231;$out+=$escape(arrange.shop.name);
$out+='</td> <td><span class="F-float F-money">';
$line=232;$out+=$escape(arrange.consumeMoney);
$out+='</span><input policyId="';
$line=232;if(arrange.shopPolicy != null){
$line=232;$out+=$escape(arrange.shopPolicy.id);
$line=232;}
$out+='" name="consumeMoney" style="width:90px;" type="hidden" value="';
$line=232;$out+=$escape(arrange.consumeMoney);
$out+='" old="';
$line=232;$out+=$escape(arrange.consumeMoney);
$out+='" maxlength="11" ';
$line=233;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=233;}
$out+='/></td> <td>';
$line=234;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=235;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=236;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=238;}
$out+=' </td> ';
$line=240;if(index == 0 ){
$out+='<td rowspan="';
$line=240;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumMoney';
$line=240;$out+=$escape(arrange.whichDay);
$out+='_';
$line=240;$out+=$escape(arrange.shopId);
$out+=' F-float F-money"></span></td>';
$line=240;}
$out+=' <td><span>';
$line=241;$out+=$escape(arrange.travelAgencyRate);
$out+='</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="';
$line=241;$out+=$escape(arrange.travelAgencyRate*100);
$out+='" old="';
$line=241;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=241;if(arrange.isConfirmAccount == 1){
$out+=' readOnly="readOnly" ';
$line=241;}
$out+='/></td> <td><span class="travelAgencyRateMoney F-float F-money">';
$line=242;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='</span><input type="hidden" class="travelAgencyRateMoney';
$line=242;$out+=$escape(arrange.whichDay);
$out+='_';
$line=242;$out+=$escape(arrange.shopId);
$out+='" name="travelAgencyRateMoney" value="';
$line=242;$out+=$escape(arrange.travelAgencyRateMoney);
$out+='" ';
$line=242;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=242;}
$out+='/></td> <td><span>';
$line=243;$out+=$escape(arrange.guideRate);
$out+='</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="';
$line=243;$out+=$escape(arrange.guideRate*100);
$out+='" old="';
$line=243;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5" ';
$line=243;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=243;}
$out+='/></td> <td><span class="guideRateMoney F-float F-money">';
$line=244;$out+=$escape(arrange.guideRkateMoney);
$out+='</span><input type="hidden" class="guideRateMoney';
$line=244;$out+=$escape(arrange.whichDay);
$out+='_';
$line=244;$out+=$escape(arrange.shopId);
$out+='" name="guideRateMoney" value="';
$line=244;$out+=$escape(arrange.guideRateMoney);
$out+='" ';
$line=245;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=245;}
$out+='/></td> ';
$line=246;if(index == 0 ){
$out+='<td rowspan="';
$line=246;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=246;if(arrange.customerRebateMoney < 1){
$out+='<span class="F-float F-money">';
$line=246;$out+=$escape(arrange.shop.customerRebateMoney);
$out+='</span>';
$line=246;}else{
$out+='<span class="F-float F-money">';
$line=246;$out+=$escape(arrange.customerRebateMoney);
$out+='</span>';
$line=246;}
$out+='<input type="hidden" name="customerRebateMoney';
$line=246;$out+=$escape(arrange.whichDay);
$out+='_';
$line=246;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=246;if(arrange.customerRebateMoney < 1){
$line=246;$out+=$escape(arrange.shop.customerRebateMoney);
$line=246;}else{
$line=246;$out+=$escape(arrange.customerRebateMoney);
$line=246;}
$out+='" style="width:90px;" old="';
$line=246;if(arrange.customerRebateMoney < 1){
$line=246;$out+=$escape(arrange.shop.customerRebateMoney);
$line=246;}else{
$line=246;$out+=$escape(arrange.customerRebateMoney);
$line=246;}
$out+='" maxlength="11" ';
$line=246;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=246;}
$out+='/><input type="hidden" name="touristAdultCount';
$line=246;$out+=$escape(arrange.whichDay);
$out+='_';
$line=246;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=246;$out+=$escape(tripPlan.touristAdultCount);
$out+='" ';
$line=246;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=246;}
$out+='/></td>';
$line=246;}
$out+=' ';
$line=247;if(index == 0 ){
$out+='<td rowspan="';
$line=247;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumCustomerRebateMoney';
$line=247;$out+=$escape(arrange.whichDay);
$out+='_';
$line=247;$out+=$escape(arrange.shopId);
$out+=' sumCustomerRebateMoney">';
$line=247;$out+=$escape(shopArrangeList.customerRebateMoney);
$out+='</span></td>';
$line=247;}
$out+=' ';
$line=248;if(index == 0 ){
$out+='<td rowspan="';
$line=248;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span>';
$line=248;if(arrange.parkingRebateMoney < 1){
$line=248;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=248;}else{
$line=248;$out+=$escape(arrange.parkingRebateMoney);
$line=248;}
$out+='</span><input ';
$line=248;if(arrange.isConfirmAccount == 1){
$out+='readonly="readOnly"';
$line=248;}
$out+=' type="hidden" name="parkingRebateMoney';
$line=248;$out+=$escape(arrange.whichDay);
$out+='_';
$line=248;$out+=$escape(arrange.shopId);
$out+='" value="';
$line=248;if(arrange.parkingRebateMoney < 1){
$line=248;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=248;}else{
$line=248;$out+=$escape(arrange.parkingRebateMoney);
$line=248;}
$out+='" style="width:90px;" old="';
$line=248;if(arrange.parkingRebateMoney < 1){
$line=248;$out+=$escape(arrange.shop.parkingRebateMoney);
$line=248;}else{
$line=248;$out+=$escape(arrange.parkingRebateMoney);
$line=248;}
$out+='" maxlength="11" /></td>';
$line=249;}
$out+=' ';
$line=250;if(index == 0 ){
$out+='<td rowspan="';
$line=250;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="sumParkingRebateMoney';
$line=250;$out+=$escape(arrange.whichDay);
$out+='_';
$line=250;$out+=$escape(arrange.shopId);
$out+=' sumParkingRebateMoney">';
$line=250;$out+=$escape(shopArrangeList.parkingRebateMoney);
$out+='</span></td>';
$line=250;}
$out+=' ';
$line=251;if(index == 0 ){
$out+='<td rowspan="';
$line=251;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><span class="T-shopIncome T-shopIncome';
$line=251;$out+=$escape(arrange.whichDay);
$out+='_';
$line=251;$out+=$escape(arrange.shopId);
$out+='"></span></td>';
$line=251;}
$out+=' <!-- ';
$line=252;if(index == 0 ){
$out+='<td rowspan="';
$line=252;$out+=$escape(shopArrangeList.shopArrangePolicy.length);
$out+='"><input type="text" style="width:90px;"/></td>';
$line=252;}
$out+=' --> <td>';
$line=253;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=254;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=254;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=254;}else{
$out+='已对账';
$line=254;}
$out+='</td>';
$line=254;}
$out+=' </tr> ';
$line=256;}
$out+=' ';
$line=257;});
$out+=' ';
$line=258;});
$out+=' ';
$line=259;}
$out+=' ';
$line=260;});
$out+=' </tbody> </table> ';
$line=263;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=266;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=266;}
$out+=' type="text" style="width:30%;" value="';
$line=266;if(remarkArrangeList.shopReamrk.length>0){
$line=266;$out+=$escape(remarkArrangeList.shopReamrk[0].opCheckRemark);
$line=266;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=269;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=269;}
$out+=' type="text" style="width:30%;" value="';
$line=269;if(remarkArrangeList.shopReamrk.length>0){
$line=269;$out+=$escape(remarkArrangeList.shopReamrk[0].financeCheckRemark);
$line=269;}
$out+='" /> </div> </div>';
$line=271;}
$out+=' </div>  <div id="financial-count-tripdetail-selfpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" colspan="14">消费</th> <th class="th-border" colspan="2">社佣</th> <th class="th-border" colspan="2">导佣</th>  <th class="th-border" rowspan="2">导游报账备注</th> ';
$line=283;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=283;}
$out+=' </tr> <tr> <th class="th-border">时间</th> <th class="th-border">自费商家</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">人数返佣</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应收</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">现收</th> <th class="th-border">单据</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> <th class="th-border">比例%</th> <th class="th-border">返佣</th> </tr></thead> <tbody class="T-count-selfPay"> ';
$line=306;$each(dayList,function(day,$index){
$out+=' ';
$line=307;if(day.selfPayArrange != null){
$out+=' ';
$line=308;$each(day.selfPayArrange,function(arrangeList,$index){
$out+=' ';
$line=309;$each(arrangeList.selfPayArrangeList,function(arrange,index){
$out+=' ';
$line=310;if(arrange != null){
$out+=' <tr badStatus = "';
$line=311;$out+=$escape(arrange.badStatus);
$out+='" " selfPayArrangeId="';
$line=311;$out+=$escape(arrange.id);
$out+='" selfPayId="';
$line=311;$out+=$escape(arrange.selfPayId);
$out+='"> ';
$line=312;if(index == 0 ){
$out+='<td rowspan="';
$line=312;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=312;}
$out+=' ';
$line=313;if(index == 0 ){
$out+='<td rowspan="';
$line=313;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=313;$out+=$escape(arrange.selfPay.name);
$out+='</td>';
$line=313;}
$out+=' <td>';
$line=314;if(arrange.selfPayItem != null ){
$line=314;$out+=$escape(arrange.selfPayItem.name);
$line=314;}
$out+='</td> <td>';
$line=315;if(arrange.badStatus == 1){
$out+='<span>';
$line=315;$out+=$escape(arrange.marketPrice);
$out+='</span>';
$line=315;}else{
$line=315;$out+=$escape(arrange.marketPrice);
$line=315;}
$out+=' <input type="hidden" name="marketPrice" value="';
$line=316;$out+=$escape(arrange.marketPrice);
$out+='"/></td> <td>';
$line=317;if(arrange.badStatus == 1){
$out+='<span>';
$line=317;$out+=$escape(arrange.price);
$out+='</span>';
$line=317;}else{
$line=317;$out+=$escape(arrange.price);
$line=317;}
$out+=' <input type="hidden" name="price" value="';
$line=318;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=319;$out+=$escape(arrange.customerRebateMoney);
$out+='</td> <td> ';
$line=321;if(arrange.badStatus == 1){
$out+='<span>';
$line=321;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=321;}else{
$out+='<span>';
$line=321;if(arrange.billUpdateTime != null){
$line=321;$out+=$escape(arrange.realCount);
$line=321;}else{
$line=321;$out+=$escape(arrange.memberCount);
$line=321;}
$out+='</span>';
$line=321;}
$out+=' <input style="width:60px;" type="hidden" name="realCount" ';
$line=322;if(arrange.billUpdateTime != null){
$out+='value="';
$line=322;$out+=$escape(arrange.realCount);
$out+='"';
$line=322;}else{
$out+='value="';
$line=322;$out+=$escape(arrange.memberCount);
$out+='"';
$line=322;}
$out+=' maxlength="5"/><input type="hidden" name="memberCount" value="';
$line=322;$out+=$escape(arrange.memberCount);
$out+='" ';
$line=322;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=322;}
$out+=' /></td> <td> ';
$line=324;if(arrange.badStatus == 1){
$out+='<span>';
$line=324;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=324;}else{
$out+='<span>';
$line=324;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=324;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=325;$out+=$escape(arrange.realReduceMoney);
$out+='" style="width:60px;"/></td> <td> ';
$line=327;if(arrange.badStatus == 1){
$out+='<span class="needIncome"></span>';
$line=327;}else{
$out+='<span class="needIncome"></span>';
$line=327;}
$out+='</td> <td><span class="needPayMoney" >';
$line=328;$out+=$escape(arrange.needPayMoney);
$out+='</span><input type="hidden" class="selfMoney"></td> <td>';
$line=329;$out+=$escape(arrange.payedMoney);
$out+='</td> <td> ';
$line=331;if(arrange.badStatus == 1){
$out+='<span>';
$line=331;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=331;}else{
$out+='<span>';
$line=331;if(arrange.billUpdateTime != null){
$line=331;$out+=$escape(arrange.realGuidePayMoney);
$line=331;}else{
$line=331;$out+=$escape(arrange.guidePayMoney);
$line=331;}
$out+='</span>';
$line=331;}
$out+=' </td> <td> ';
$line=334;if(arrange.badStatus == 1){
$out+='<span>';
$line=334;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=334;}else{
$out+='<span>';
$line=334;$out+=$escape(arrange.realGetMoney);
$out+='</span>';
$line=334;}
$out+=' </td> <td>';
$line=336;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=337;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=338;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=340;}
$out+=' </td> <td> ';
$line=343;if(arrange.badStatus == 1){
$out+='<span>';
$line=343;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=343;}else{
$out+='<span>';
$line=343;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='</span>';
$line=343;}
$out+=' <input style="width:90px;" type="hidden" name="travelAgencyRate" value="';
$line=344;$out+=$escape($helpers. parseInt(arrange.travelAgencyRate*100 ));
$out+='" old="';
$line=344;$out+=$escape(arrange.travelAgencyRate);
$out+='" maxlength="5" ';
$line=344;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=344;}
$out+=' /></td> <td> ';
$line=346;if(arrange.badStatus == 1){
$out+='<span>';
$line=346;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=346;}else{
$out+='<span class="travelAgencyRebateMoney">';
$line=346;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='</span>';
$line=346;}
$out+=' <input type="hidden" name="travelAgencyRebateMoney" value="';
$line=348;$out+=$escape(arrange.travelAgencyRebateMoney);
$out+='" ';
$line=348;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=348;}
$out+=' /></td> <td><span>';
$line=349;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='</span> <input style="width:90px;" type="hidden" name="guideRate" value="';
$line=350;$out+=$escape($helpers. parseInt(arrange.guideRate*100 ));
$out+='" old="';
$line=350;$out+=$escape(arrange.guideRate);
$out+='" maxlength="5"/> </td> <td>';
$line=352;if(arrange.badStatus == 1){
$out+='<span>';
$line=352;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=352;}else{
$out+='<span class="guideRebateMoney">';
$line=352;$out+=$escape(arrange.guideRebateMoney);
$out+='</span>';
$line=352;}
$out+=' <input type="hidden" name="guideRebateMoney" value="';
$line=354;$out+=$escape(arrange.guideRebateMoney);
$out+='" ';
$line=354;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=354;}
$out+=' /></td> <!-- <td> <span class="guideRate">';
$line=356;$out+=$escape(arrange.customerRebateMoney);
$out+='</span> <input type="hidden" name="guideRate" value="';
$line=357;$out+=$escape(arrange.customerRebateMoney);
$out+='" ';
$line=357;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=357;}
$out+=' /></td> ';
$line=358;if(index == 0 ){
$out+='<td rowspan="';
$line=358;$out+=$escape(arrangeList.selfPayArrangeList.length);
$out+='">';
$line=358;$out+=$escape(arrange.customerRebateMoney * tripPlan.touristAdultCount);
$out+='</td>';
$line=358;}
$out+=' --> <td>';
$line=359;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=360;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=360;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=360;}else{
$out+='已对账';
$line=360;}
$out+='</td>';
$line=360;}
$out+=' </tr> ';
$line=362;}
$out+=' ';
$line=363;});
$out+=' ';
$line=364;});
$out+=' ';
$line=365;}
$out+=' ';
$line=366;});
$out+=' </tbody> </table> ';
$line=369;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=373;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=373;}
$out+=' type="text" style="width:30%;" value="';
$line=373;if(remarkArrangeList.selfRemark.length>0){
$line=373;$out+=$escape(remarkArrangeList.selfRemark[0].opCheckRemark);
$line=373;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=376;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=376;}
$out+=' type="text" style="width:30%;" value="';
$line=376;if(remarkArrangeList.selfRemark.length>0){
$line=376;$out+=$escape(remarkArrangeList.selfRemark[0].financeCheckRemark);
$line=376;}
$out+='" /> </div> </div> ';
$line=379;}
$out+=' </div>  <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">单据</th> <th class="th-border">导游报账备注</th> ';
$line=393;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=393;}
$out+=' </tr> </thead> <tbody class="T-count-otherIn"> ';
$line=397;$each(arrangeIncomePaymentList,function(otherInCome,$index){
$out+=' ';
$line=398;if(otherInCome != null){
$out+=' <tr otherInId="';
$line=399;$out+=$escape(otherInCome.id);
$out+='" otherIn="';
$line=399;$out+=$escape(otherInCome.id);
$out+='" whichDay="';
$line=399;$out+=$escape(otherInCome.whichDay);
$out+='"> <td whichDay="';
$line=400;$out+=$escape(otherInCome.whichDay);
$out+='">第';
$line=400;$out+=$escape(otherInCome.whichDay);
$out+='<span class="whichDay"></span></td> <td>';
$line=401;$out+=$escape(otherInCome.title);
$out+='</td> <td><span>';
$line=402;$out+=$escape(otherInCome.price);
$out+='</span><input style="width:90px;" type="hidden" name="price" value="';
$line=402;$out+=$escape(otherInCome.price);
$out+='" old="';
$line=402;$out+=$escape(otherInCome.price);
$out+='" maxlength="11" ';
$line=403;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=403;}
$out+=' /></td> <td><span>';
$line=405;$out+=$escape(otherInCome.count);
$out+='</span><input style="width:90px;" type="hidden" name="count" value="';
$line=405;$out+=$escape(otherInCome.count);
$out+='" old="';
$line=405;$out+=$escape(otherInCome.count);
$out+='" maxlength="11" ';
$line=406;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=406;}
$out+='/></td> <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="';
$line=407;$out+=$escape(otherInCome.needPayMoney);
$out+='" ';
$line=408;if(otherInCome.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=408;}
$out+='/></span></td> <td>';
$line=409;if(otherInCome.billImage != null && otherInCome.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=410;$out+=$escape(otherInCome.billImage);
$out+='" class="btn-view">查看</a> ';
$line=411;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=413;}
$out+=' </td> <td>';
$line=415;$out+=$escape(otherInCome.billRemark);
$out+='</td> ';
$line=416;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=416;if(otherInCome.isConfirmAccount == 0){
$out+='未对账';
$line=416;}else{
$out+='已对账';
$line=416;}
$out+='</td>';
$line=416;}
$out+=' </tr> ';
$line=418;}
$out+=' ';
$line=419;});
$out+=' </tbody> </table> ';
$line=422;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=425;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=425;}
$out+=' type="text" style="width:30%;" value="';
$line=425;if(remarkArrangeList.otherInRemark.length>0){
$line=425;$out+=$escape(remarkArrangeList.otherInRemark[0].opCheckRemark);
$line=425;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=428;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=428;}
$out+=' type="text" style="width:30%;" value="';
$line=428;if(remarkArrangeList.otherInRemark.length>0){
$line=428;$out+=$escape(remarkArrangeList.otherInRemark[0].financeCheckRemark);
$line=428;}
$out+='" /> </div> </div>';
$line=430;}
$out+=' </div>  <div id="financial-count-tripdetail-buspay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">任务</th> <th class="th-border">所属车队</th> <th class="th-border">车牌号</th> <th class="th-border">座位数</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=452;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=452;}
$out+=' </tr> </thead> <tbody class="T-count-bus"> ';
$line=457;$each(busCompanyArrange,function(busCompany,$index){
$out+=' ';
$line=458;if(busCompany != null){
$out+=' <tr badStatus = "';
$line=459;$out+=$escape(busCompany.badStatus);
$out+='" busCompanyArrangeId="';
$line=459;$out+=$escape(busCompany.id);
$out+='" > <td>';
$line=460;if(busCompany.busCompany != null){
$line=460;$out+=$escape($helpers. dateFormat(busCompany.startTime ,  'yyyy-MM-dd'));
$line=460;}
$out+='</td> <td>';
$line=461;if(busCompany.busCompany != null){
$line=461;$out+=$escape($helpers. dateFormat(busCompany.endTime ,  'yyyy-MM-dd'));
$line=461;}
$out+='</td> <td>';
$line=462;if(busCompany.busCompany != null){
$out+=' ';
$line=463;if(busCompany.taskType == 0){
$out+=' 全程 ';
$line=465;}else if(busCompany.taskType == 1){
$out+=' 接机 ';
$line=467;}else if(busCompany.taskType == 2){
$out+=' 送机 ';
$line=469;}else if(busCompany.taskType == 3){
$out+=' 前段 ';
$line=471;}else if(busCompany.taskType == 4){
$out+=' 中段 ';
$line=473;}else if(busCompany.taskType == 5){
$out+=' 后段 ';
$line=475;}
$out+=' ';
$line=476;}
$out+='</td> <td>';
$line=477;if(busCompany.busCompany != null){
$line=477;$out+=$escape(busCompany.busCompany.companyName);
$line=477;}
$out+='</td> <td>';
$line=478;if(busCompany.bus != null){
$line=478;$out+=$escape(busCompany.bus.licenseNumber);
$line=478;}
$out+='</td> <td>';
$line=479;if(busCompany.bus != null){
$line=479;$out+=$escape(busCompany.bus.seatCount);
$line=479;}
$out+='</td> <td>';
$line=480;if(busCompany.badStatus == 1){
$out+='<span>';
$line=480;$out+=$escape(busCompany.price);
$out+='</span>';
$line=480;}else{
$out+='<span>';
$line=480;$out+=$escape(busCompany.price);
$out+='</span>';
$line=480;}
$out+=' <input type="hidden" name="price" value="';
$line=481;$out+=$escape(busCompany.price);
$out+='" /></td> <td>';
$line=482;if(busCompany.badStatus == 1){
$out+='<span>';
$line=482;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=482;}else{
$out+='<span>';
$line=482;$out+=$escape(busCompany.realReduceMoney);
$out+='</span>';
$line=482;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=483;$out+=$escape(busCompany.realReduceMoney);
$out+='" old="';
$line=483;$out+=$escape(busCompany.realReduceMoney);
$out+='"/></td> <td>';
$line=484;if(busCompany.badStatus == 1){
$out+='<span class="BusneedPayMoney">';
$line=484;$out+=$escape(busCompany.payedMoney+busCompany.realGuidePayMoney);
$out+='</span>';
$line=484;}else{
$out+='<span class="BusneedPayMoney"></span>';
$line=484;}
$out+='</td> <td>';
$line=485;$out+=$escape(busCompany.payedMoney);
$out+='</td> <td>';
$line=486;if(busCompany.badStatus == 1){
$out+='<span>';
$line=486;$out+=$escape(busCompany.realGuidePayMoney);
$out+='</span>';
$line=486;}else{
$out+='<span>';
$line=486;$out+=$escape(busCompany.guidePayMoney);
$out+='</span>';
$line=486;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=487;$out+=$escape(busCompany.payedMoney);
$out+='" ';
$line=487;if(busCompany.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=487;}
$out+='/> <input type="hidden" name="guidePayMoney" value="';
$line=488;$out+=$escape(busCompany.guidePayMoney);
$out+='" /></td> <td>';
$line=489;if(busCompany.billImage != null && busCompany.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=490;$out+=$escape(busCompany.billImage);
$out+='" class="btn-view">查看</a> ';
$line=491;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=493;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=496;$out+=$escape(busCompany.billRemark);
$out+='</td> ';
$line=497;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=497;if(busCompany.isConfirmAccount == 0){
$out+='未对账';
$line=497;}else{
$out+='已对账';
$line=497;}
$out+='</td>';
$line=497;}
$out+=' </tr> ';
$line=499;}
$out+=' ';
$line=500;});
$out+=' </tbody> </table> ';
$line=503;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=507;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=507;}
$out+=' type="text" style="width:30%;" value="';
$line=507;if(remarkArrangeList.busRemark.length>0){
$line=507;$out+=$escape(remarkArrangeList.busRemark[0].opCheckRemark);
$line=507;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=510;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=510;}
$out+=' type="text" style="width:30%;" value="';
$line=510;if(remarkArrangeList.busRemark.length>0){
$line=510;$out+=$escape(remarkArrangeList.busRemark[0].financeCheckRemark);
$line=510;}
$out+='" /> </div> </div> ';
$line=513;}
$out+=' </div>  <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">餐厅</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=533;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=533;}
$out+=' </tr> </thead> <tbody class="T-count-restaurant"> ';
$line=537;$each(dayList,function(day,$index){
$out+=' ';
$line=538;if(day.restaurantArrange != null){
$out+=' ';
$line=539;$each(day.restaurantArrange,function(arrangeList,$index){
$out+=' ';
$line=540;$each(arrangeList.restaurantArrangeList,function(arrange,index){
$out+=' ';
$line=541;if(arrange != null){
$out+=' <tr badStatus = "';
$line=542;$out+=$escape(arrange.badStatus);
$out+='" restaurantArrangeId="';
$line=542;$out+=$escape(arrange.id);
$out+='" restaurantId="';
$line=542;if(arrange.restaurant != null){
$line=542;$out+=$escape(arrange.restaurant.id);
$line=542;}
$out+='" restaurantStandardId="';
$line=542;if(arrange.restaurantStandard != null){
$line=542;$out+=$escape(arrange.restaurantStandard.id);
$line=542;}
$out+='" whichDay="';
$line=542;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=543;if(index == 0){
$out+='<td rowspan="';
$line=543;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=543;}
$out+=' ';
$line=544;if(index == 0){
$out+='<td rowspan="';
$line=544;$out+=$escape(arrangeList.restaurantArrangeList.length);
$out+='"> ';
$line=545;if(arrange.billUpdateTime != null){
$line=545;if(arrange.restaurant != null){
$line=545;$out+=$escape(arrange.restaurant.name);
$line=545;}
$line=545;}else{
$line=545;if(arrange.isChoose == 1){
$out+='自选';
$line=545;}else{
$line=545;if(arrange.restaurant != null){
$line=545;$out+=$escape(arrange.restaurant.name);
$line=545;}
$line=545;}
$line=545;}
$out+='</td>';
$line=545;}
$out+=' <td>';
$line=546;$out+=$escape(arrange.type);
$out+='</td> <td>';
$line=547;if(arrange.badStatus == 1){
$out+='<span>';
$line=547;$out+=$escape(arrange.price);
$out+='</span>';
$line=547;}else{
$out+='<span class="price">';
$line=547;$out+=$escape(arrange.price);
$out+='</span>';
$line=547;}
$out+='<input type="hidden" name="price" value="';
$line=547;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=548;if(arrange.badStatus == 1){
$out+='<span>';
$line=548;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=548;}else{
$out+='<span>';
$line=548;if(arrange.billUpdateTime != null){
$line=548;$out+=$escape(arrange.realCount);
$line=548;}else{
$line=548;$out+=$escape(arrange.memberCount);
$line=548;}
$out+='</span>';
$line=548;}
$out+='<input style="width:90px;" type="hidden" name="realCount" ';
$line=548;if(arrange.billUpdateTime != null){
$out+='value="';
$line=548;$out+=$escape(arrange.realCount);
$out+='" ';
$line=549;}else{
$out+='value="';
$line=549;$out+=$escape(arrange.memberCount);
$out+='"';
$line=549;}
$out+=' old="';
$line=549;$out+=$escape(arrange.realCount);
$out+='" maxlength="5" ';
$line=550;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=550;}
$out+='/></td> <td>';
$line=551;if(arrange.badStatus == 1){
$out+='<span>';
$line=551;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=551;}else{
$out+='<span>';
$line=551;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=551;}
$out+='<input type="hidden" name="realReduceMoney" value="';
$line=551;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=551;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=552;if(arrange.badStatus == 1){
$out+='<span class="restneedPayMoney">';
$line=552;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=552;}else{
$out+='<span class="restneedPayMoney"></span>';
$line=552;}
$out+='<input type="hidden" value="';
$line=552;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=553;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=554;if(arrange.badStatus == 1){
$out+='<span>';
$line=554;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=554;}else{
$out+='<span>';
$line=554;if(arrange.billUpdateTime != null){
$line=554;$out+=$escape(arrange.realGuidePayMoney);
$line=554;}else{
$line=554;$out+=$escape(arrange.guidePayMoney);
$line=554;}
$out+='</span>';
$line=554;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=556;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=557;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=558;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=559;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=560;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=562;}
$out+=' </td> <td><span class="difference"></span></td> <td><span class="billRemark">';
$line=565;$out+=$escape(arrange.billRemark);
$out+='</span></td> ';
$line=566;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=566;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=566;}else{
$out+='已对账';
$line=566;}
$out+='</td>';
$line=566;}
$out+=' </tr> ';
$line=568;}
$out+=' ';
$line=569;});
$out+=' ';
$line=570;});
$out+=' ';
$line=571;}
$out+=' ';
$line=572;});
$out+=' </tbody> </table> ';
$line=575;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=579;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=579;}
$out+=' type="text" style="width:30%;" value="';
$line=579;if(remarkArrangeList.restRemark.length>0){
$line=579;$out+=$escape(remarkArrangeList.restRemark[0].opCheckRemark);
$line=579;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=582;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=582;}
$out+=' type="text" style="width:30%;" value="';
$line=582;if(remarkArrangeList.restRemark.length>0){
$line=582;$out+=$escape(remarkArrangeList.restRemark[0].financeCheckRemark);
$line=582;}
$out+='" /> </div> </div> ';
$line=585;}
$out+=' </div>  <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">间数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=604;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=604;}
$out+=' </tr> </thead> <tbody class="T-count-hotel"> ';
$line=608;$each(dayList,function(day,$index){
$out+=' ';
$line=609;if(day.hotelArrange != null){
$out+=' ';
$line=610;$each(day.hotelArrange,function(arrangeList,$index){
$out+=' ';
$line=611;$each(arrangeList.hotelArrangeList,function(arrange,index){
$out+=' ';
$line=612;if(arrange != null){
$out+=' <tr badStatus = "';
$line=613;$out+=$escape(arrange.badStatus);
$out+='" hotelArrangeId="';
$line=613;$out+=$escape(arrange.id);
$out+='" hotelId="';
$line=613;if(arrange.hotel != null){
$line=613;$out+=$escape(arrange.hotel.id);
$line=613;}
$out+='" restaurantStandardId="';
$line=613;if(arrange.hotelRoom != null){
$line=613;$out+=$escape(arrange.hotelRoom.id);
$line=613;}
$out+='" whichDay="';
$line=613;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=614;if(index == 0){
$out+='<td rowspan="';
$line=614;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=614;}
$out+=' ';
$line=615;if(index == 0){
$out+='<td rowspan="';
$line=615;$out+=$escape(arrangeList.hotelArrangeList.length);
$out+='">';
$line=615;if(arrange.hotel != null){
$line=615;$out+=$escape(arrange.hotel.name);
$line=615;}
$out+='</td>';
$line=615;}
$out+=' <td>';
$line=616;if(arrange.hotelRoom != null){
$line=616;$out+=$escape(arrange.hotelRoom.type);
$line=616;}
$out+='</td> <td>';
$line=617;if(arrange.badStatus == 1){
$out+='<span>';
$line=617;$out+=$escape(arrange.price);
$out+='</span>';
$line=617;}else{
$out+='<span>';
$line=617;$out+=$escape(arrange.price);
$out+='</span>';
$line=617;}
$out+=' <input type="hidden" name="price" value="';
$line=618;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=619;if(arrange.badStatus == 1){
$out+='<span>';
$line=619;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=619;}else{
$out+='<span>';
$line=619;if(arrange.billUpdateTime != null){
$line=619;$out+=$escape(arrange.realCount);
$line=619;}else{
$line=619;$out+=$escape(arrange.memberCount);
$line=619;}
$out+='</span>';
$line=619;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=620;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=620;$out+=$escape(arrange.realCount);
$out+='" ';
$line=620;}else{
$out+='value="';
$line=620;$out+=$escape(arrange.memberCount);
$out+='"';
$line=620;}
$out+='/></td> <td>';
$line=621;if(arrange.badStatus == 1){
$out+='<span>';
$line=621;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=621;}else{
$out+='<span>';
$line=621;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=621;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=622;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=622;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=623;if(arrange.badStatus == 1){
$out+='<span class="hotelneedPayMoney">';
$line=623;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=623;}else{
$out+='<span class="hotelneedPayMoney"></span>';
$line=623;}
$out+=' <input name="needPayMoney" type="hidden" value="';
$line=624;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=625;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=626;if(arrange.badStatus == 1){
$out+='<span>';
$line=626;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=626;}else{
$out+='<span>';
$line=626;if(arrange.billUpdateTime != null){
$line=626;$out+=$escape(arrange.realGuidePayMoney);
$line=626;}else{
$line=626;$out+=$escape(arrange.guidePayMoney);
$line=626;}
$out+='</span>';
$line=626;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=628;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=629;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=630;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=631;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=632;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=634;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=637;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=639;}
$out+=' ';
$line=640;});
$out+=' ';
$line=641;});
$out+=' ';
$line=642;}
$out+=' ';
$line=643;});
$out+=' </tbody> </table> ';
$line=646;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=650;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=650;}
$out+=' type="text" style="width:30%;" value="';
$line=650;if(remarkArrangeList.hotelRemark.length>0){
$line=650;$out+=$escape(remarkArrangeList.hotelRemark[0].opCheckRemark);
$line=650;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=653;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=653;}
$out+=' type="text" style="width:30%;" value="';
$line=653;if(remarkArrangeList.hotelRemark.length>0){
$line=653;$out+=$escape(remarkArrangeList.hotelRemark[0].financeCheckRemark);
$line=653;}
$out+='" /> </div> </div> ';
$line=656;}
$out+=' </div>  <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">景区</th> <th class="th-border">收费项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=675;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=675;}
$out+=' </tr> </thead> <tbody class="T-count-scenic"> ';
$line=679;$each(dayList,function(day,$index){
$out+=' ';
$line=680;if(day.scenicArrange != null){
$out+=' ';
$line=681;$each(day.scenicArrange,function(arrangeList,$index){
$out+=' ';
$line=682;$each(arrangeList.scenicArrangeList,function(arrange,index){
$out+=' ';
$line=683;if(arrange != null){
$out+=' <tr badStatus = "';
$line=684;$out+=$escape(arrange.badStatus);
$out+='" scenicArrangeId="';
$line=684;$out+=$escape(arrange.id);
$out+='" scenicId="';
$line=684;$out+=$escape(arrange.scenicId);
$out+='" scenicItemId="';
$line=684;$out+=$escape(arrange.hotelRoomId);
$out+='" whichDay="';
$line=684;$out+=$escape(arrange.whichDay);
$out+='"> ';
$line=685;if(index == 0){
$out+='<td rowspan="';
$line=685;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='"><span class="whichDay"></span></td>';
$line=685;}
$out+=' ';
$line=686;if(index == 0){
$out+='<td rowspan="';
$line=686;$out+=$escape(arrangeList.scenicArrangeList.length);
$out+='">';
$line=686;if(arrange.scenic != null){
$line=686;$out+=$escape(arrange.scenic.name);
$line=686;}
$out+='</td>';
$line=686;}
$out+=' <td>';
$line=687;if(arrange.scenicItem != null){
$line=687;$out+=$escape(arrange.scenicItem.name);
$line=687;}
$out+='</td> <td>';
$line=688;if(arrange.badStatus == 1){
$out+='<span>';
$line=688;$out+=$escape(arrange.price);
$out+='</span>';
$line=688;}else{
$out+='<span> ';
$line=688;$out+=$escape(arrange.price);
$out+='</span>';
$line=688;}
$out+=' <input type="hidden" name="price" value="';
$line=689;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=690;if(arrange.badStatus == 1){
$out+='<span>';
$line=690;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=690;}else{
$out+='<span>';
$line=690;if(arrange.billUpdateTime != null){
$line=690;$out+=$escape(arrange.realCount);
$line=690;}else{
$line=690;$out+=$escape(arrange.memberCount);
$line=690;}
$out+='</span>';
$line=690;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=691;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=691;$out+=$escape(arrange.realCount);
$out+='" ';
$line=691;}else{
$out+='value="';
$line=691;$out+=$escape(arrange.memberCount);
$out+='"';
$line=691;}
$out+='/></td> <td>';
$line=692;if(arrange.badStatus == 1){
$out+='<span>';
$line=692;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=692;}else{
$out+='<span>';
$line=692;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=692;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=693;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=693;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=694;if(arrange.badStatus == 1){
$out+='<span class="scenicneedPayMoney">';
$line=694;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=694;}else{
$out+='<span class="scenicneedPayMoney"></span>';
$line=694;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=695;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=696;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=697;if(arrange.badStatus == 1){
$out+='<span>';
$line=697;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=697;}else{
$out+='<span>';
$line=697;if(arrange.billUpdateTime != null){
$line=697;$out+=$escape(arrange.realGuidePayMoney);
$line=697;}else{
$line=697;$out+=$escape(arrange.guidePayMoney);
$line=697;}
$out+='</span>';
$line=697;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=699;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=700;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=701;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=702;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=703;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=705;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=708;$out+=$escape(arrange.billRemark);
$out+='</td> ';
$line=709;if(tripPlan.billStatus == 2){
$out+='<td>';
$line=709;if(arrange.isConfirmAccount == 0){
$out+='未对账';
$line=709;}else{
$out+='已对账';
$line=709;}
$out+='</td>';
$line=709;}
$out+=' </tr> ';
$line=711;}
$out+=' ';
$line=712;});
$out+=' ';
$line=713;});
$out+=' ';
$line=714;}
$out+=' ';
$line=715;});
$out+=' </tbody> </table> ';
$line=718;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=721;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=721;}
$out+=' type="text" style="width:30%;" value="';
$line=721;if(remarkArrangeList.scenicRemark.length>0){
$line=721;$out+=$escape(remarkArrangeList.scenicRemark[0].opCheckRemark);
$line=721;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=724;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=724;}
$out+=' type="text" style="width:30%;" value="';
$line=724;if(remarkArrangeList.scenicRemark.length>0){
$line=724;$out+=$escape(remarkArrangeList.scenicRemark[0].financeCheckRemark);
$line=724;}
$out+='" /> </div> </div>';
$line=726;}
$out+=' </div>  <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务商家</th> <th class="th-border">类型</th> <th class="th-border">日期</th> <th class="th-border">出发地</th> <th class="th-border">目的地</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=749;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=749;}
$out+=' </tr> </thead> <tbody class="T-count-ticket"> ';
$line=753;$each(ticketArrangeList,function(ticketArrange,$index){
$out+=' ';
$line=754;$each(ticketArrange.ticketArrangeList,function(arrange,index){
$out+=' <tr badStatus = "';
$line=755;$out+=$escape(arrange.badStatus);
$out+='" ticketArrangeId="';
$line=755;$out+=$escape(arrange.id);
$out+='" ticketId="';
$line=755;$out+=$escape(arrange.ticket.id);
$out+='" itemId="';
$line=755;$out+=$escape(arrange.id);
$out+='"> ';
$line=756;if(index == 0){
$out+='<td rowspan="';
$line=756;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=756;if(arrange.ticket != null){
$line=756;$out+=$escape(arrange.ticket.name);
$line=756;}
$out+='</td>';
$line=756;}
$out+=' ';
$line=757;if(index == 0){
$out+='<td rowspan="';
$line=757;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=757;if(arrange.type == 1){
$out+='机票';
$line=757;}else if(arrange.type== 2){
$out+='汽车票';
$line=757;}else if(arrange.type == 3){
$out+='火车票';
$line=757;}else if(arrange.type == 4){
$out+='轮船票';
$line=757;}
$out+='</td>';
$line=757;}
$out+=' ';
$line=758;if(index == 0){
$out+='<td rowspan="';
$line=758;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=758;$out+=$escape(arrange.startTime);
$out+='</td>';
$line=758;}
$out+=' ';
$line=759;if(index == 0){
$out+='<td rowspan="';
$line=759;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=759;$out+=$escape(arrange.startingCity);
$out+='</td>';
$line=759;}
$out+=' ';
$line=760;if(index == 0){
$out+='<td rowspan="';
$line=760;$out+=$escape(ticketArrange.ticketArrangeList.length);
$out+='">';
$line=760;$out+=$escape(arrange.arriveCity);
$out+='</td>';
$line=760;}
$out+=' <td>';
$line=761;$out+=$escape(arrange.shift);
$out+='</td> <td>';
$line=762;$out+=$escape(arrange.seatLevel);
$out+='</td> <td>';
$line=763;if(arrange.badStatus == 1){
$out+='<span>';
$line=763;$out+=$escape(arrange.price);
$out+='</span>';
$line=763;}else{
$out+='<span>';
$line=763;$out+=$escape(arrange.price);
$out+='</span>';
$line=763;}
$out+=' <input type="hidden" name="price" value="';
$line=764;$out+=$escape(arrange.price);
$out+='" /></td> <td>';
$line=765;if(arrange.badStatus == 1){
$out+='<span>';
$line=765;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=765;}else{
$out+='<span>';
$line=765;if(arrange.billUpdateTime != null){
$line=765;$out+=$escape(arrange.realCount);
$line=765;}else{
$line=765;$out+=$escape(arrange.memberCount);
$line=765;}
$out+='</span>';
$line=765;}
$out+=' <input style="width:90px;" name="realCount" type="hidden" ';
$line=766;if(arrange.billUpdateTime !=null){
$out+='value="';
$line=766;$out+=$escape(arrange.realCount);
$out+='" ';
$line=766;}else{
$out+='value="';
$line=766;$out+=$escape(arrange.memberCount);
$out+='"';
$line=766;}
$out+=' /></td> <td>';
$line=767;if(arrange.badStatus == 1){
$out+='<span>';
$line=767;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=767;}else{
$out+='<span>';
$line=767;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=767;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=768;$out+=$escape(arrange.realReduceMoney);
$out+='" old="';
$line=768;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=769;if(arrange.badStatus == 1){
$out+='<span class="ticketneedPayMoney">';
$line=769;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=769;}else{
$out+='<span class="ticketneedPayMoney"></span>';
$line=769;}
$out+=' <input type="hidden" value="';
$line=770;$out+=$escape(arrange.needPayMoney);
$out+='" name="needPayMoney"></td> <td>';
$line=771;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=772;if(arrange.badStatus == 1){
$out+='<span>';
$line=772;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=772;}else{
$out+='<span>';
$line=772;if(arrange.billUpdateTime != null){
$line=772;$out+=$escape(arrange.realGuidePayMoney);
$line=772;}else{
$line=772;$out+=$escape(arrange.guidePayMoney);
$line=772;}
$out+='</span>';
$line=772;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=773;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=774;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=775;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=776;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=777;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=779;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=782;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=784;});
$out+=' ';
$line=785;});
$out+=' </tbody> </table> ';
$line=788;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=792;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=792;}
$out+=' type="text" style="width:30%;" value="';
$line=792;if(remarkArrangeList.ticketRemark.length>0){
$line=792;$out+=$escape(remarkArrangeList.ticketRemark[0].opCheckRemark);
$line=792;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=795;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=795;}
$out+=' type="text" style="width:30%;" value="';
$line=795;if(remarkArrangeList.ticketRemark.length>0){
$line=795;$out+=$escape(remarkArrangeList.ticketRemark[0].financeCheckRemark);
$line=795;}
$out+='" /> </div> </div> ';
$line=798;}
$out+=' </div>  <div id="financial-count-tripdetail-otherpay" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">时间</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导付</th> <th class="th-border">单据</th> <th class="th-border">差额</th> <th class="th-border">导游报账备注</th> ';
$line=816;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=816;}
$out+=' </tr> </thead> <tbody class="T-count-otherOut"> ';
$line=820;$each(dayList,function(day,$index){
$out+=' ';
$line=821;if(day.otherArrange != null){
$out+=' ';
$line=822;$each(day.otherArrange,function(arrange,index){
$out+=' ';
$line=823;if(arrange != null){
$out+=' <tr badStatus = "';
$line=824;$out+=$escape(arrange.badStatus);
$out+='" otherArrangeId="';
$line=824;$out+=$escape(arrange.id);
$out+='" whichDay="';
$line=824;$out+=$escape(arrange.whichDay);
$out+='"> <td><span class="whichDay"></span></td> <td>';
$line=826;$out+=$escape(arrange.name);
$out+='</td> <td>';
$line=827;if(arrange.badStatus == 1){
$out+='<span>';
$line=827;$out+=$escape(arrange.price);
$out+='</span>';
$line=827;}else{
$out+='<span class="price">';
$line=827;$out+=$escape(arrange.price);
$out+='</span>';
$line=827;}
$out+=' <input type="hidden" name="price" value="';
$line=828;$out+=$escape(arrange.price);
$out+='" ';
$line=828;if(arrange.isConfirmAccount == 1){
$out+='readOnly="readOnly"';
$line=828;}
$out+='/></td> <td>';
$line=829;if(arrange.badStatus == 1){
$out+='<span>';
$line=829;$out+=$escape(arrange.memberCount);
$out+='</span>';
$line=829;}else{
$out+='<span>';
$line=829;if(arrange.billUpdateTime != null){
$line=829;$out+=$escape(arrange.realCount);
$line=829;}else{
$line=829;$out+=$escape(arrange.memberCount);
$line=829;}
$out+='</span>';
$line=829;}
$out+=' <input style="width:90px;" type="hidden" name="realCount" ';
$line=830;if(arrange.billUpdateTime){
$out+='value="';
$line=830;$out+=$escape(arrange.realCount);
$out+='"';
$line=830;}else{
$out+='value="';
$line=830;$out+=$escape(arrange.memberCount);
$out+='"';
$line=830;}
$out+=' /></td> <td>';
$line=831;if(arrange.badStatus == 1){
$out+='<span>';
$line=831;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=831;}else{
$out+='<span>';
$line=831;$out+=$escape(arrange.realReduceMoney);
$out+='</span>';
$line=831;}
$out+=' <input type="hidden" name="realReduceMoney" value="';
$line=832;$out+=$escape(arrange.realReduceMoney);
$out+='"/></td> <td>';
$line=833;if(arrange.badStatus == 1){
$out+='<span class="otherOutNeedPayMoney">';
$line=833;$out+=$escape(arrange.payedMoney+arrange.realGuidePayMoney);
$out+='</span>';
$line=833;}else{
$out+='<span class="otherOutNeedPayMoney"></span>';
$line=833;}
$out+=' <input type="hidden" name="needPayMoney" value="';
$line=834;$out+=$escape(arrange.needPayMoney);
$out+='"></td> <td>';
$line=835;$out+=$escape(arrange.payedMoney);
$out+='</td> <td>';
$line=836;if(arrange.badStatus == 1){
$out+='<span>';
$line=836;$out+=$escape(arrange.realGuidePayMoney);
$out+='</span>';
$line=836;}else{
$out+='<span>';
$line=836;if(arrange.billUpdateTime != null){
$line=836;$out+=$escape(arrange.realGuidePayMoney);
$line=836;}else{
$line=836;$out+=$escape(arrange.guidePayMoney);
$line=836;}
$out+='</span>';
$line=836;}
$out+=' <input type="hidden" name="payedMoney" value="';
$line=838;$out+=$escape(arrange.payedMoney);
$out+='" /> <input type="hidden" name="guidePayMoney" value="';
$line=839;$out+=$escape(arrange.guidePayMoney);
$out+='" /></td> <td>';
$line=840;if(arrange.billImage != null && arrange.billImage != ""){
$out+=' <a href="javascript:void(0);" url="';
$line=841;$out+=$escape(arrange.billImage);
$out+='" class="btn-view">查看</a> ';
$line=842;}else{
$out+=' <span style="color:#bbb;">查看</span> ';
$line=844;}
$out+=' </td> <td><span class="difference"></span></td> <td>';
$line=847;$out+=$escape(arrange.billRemark);
$out+='</td> </tr> ';
$line=849;}
$out+=' ';
$line=850;});
$out+=' ';
$line=851;}
$out+=' ';
$line=852;});
$out+=' </tbody> </table> ';
$line=855;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=859;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=859;}
$out+=' type="text" style="width:30%;" value="';
$line=859;if(remarkArrangeList.otherOutRemark.length>0){
$line=859;$out+=$escape(remarkArrangeList.otherOutRemark[0].opCheckRemark);
$line=859;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=862;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=862;}
$out+=' type="text" style="width:30%;" value="';
$line=862;if(remarkArrangeList.otherOutRemark.length>0){
$line=862;$out+=$escape(remarkArrangeList.otherOutRemark[0].financeCheckRemark);
$line=862;}
$out+='" /> </div> </div> ';
$line=865;}
$out+=' </div> ';
$line=867;if(touristGroup != null){
$out+='  <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">来源</th> <th class="th-border">小组联系人</th> <th class="th-border">联系电话</th> <th class="th-border">人数</th> <th class="th-border">接团</th> <th class="th-border">送团</th> <th class="th-border">明细</th> </tr> </thead> <tbody> ';
$line=884;$each(touristGroup.touristGroupList,function(touristGroup,index){
$out+=' <tr> <td>';
$line=886;$out+=$escape(index+1);
$out+='</td> <td>';
$line=887;$out+=$escape(touristGroup.partnerAgencyName);
$out+='</td> <td>';
$line=888;$out+=$escape(touristGroup.name);
$out+='</td> <td>';
$line=889;$out+=$escape(touristGroup.mobileNumber);
$out+='</td> <td>';
$line=890;$out+=$escape(touristGroup.adultCount);
$out+='大';
$line=890;$out+=$escape(touristGroup.childCount);
$out+='小</td> <td>';
$line=891;$out+=$escape(touristGroup.arriveService);
$out+='</td> <td>';
$line=892;$out+=$escape(touristGroup.leaveService);
$out+='</td> <td><a href="javascript:void(0);" data-entity-id="';
$line=893;$out+=$escape(touristGroup.id);
$out+='" class="T-viewTripTransit">查看</a></td> </tr> ';
$line=895;});
$out+=' </tbody> </table> ';
$line=899;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"><div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=902;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=902;}
$out+=' type="text" style="width:30%;" value="';
$line=902;if(remarkArrangeList.transferRemark.length>0){
$line=902;$out+=$escape(remarkArrangeList.transferRemark[0].opCheckRemark);
$line=902;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=904;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=904;}
$out+=' type="text" style="width:30%;" value="';
$line=904;if(remarkArrangeList.transferRemark.length>0){
$line=904;$out+=$escape(remarkArrangeList.transferRemark[0].financeCheckRemark);
$line=904;}
$out+='" /> </div> </div>';
$line=906;}
$out+=' </div> ';
$line=908;}
$out+='  <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">已付</th> <th class="th-border">导游报账备注</th> ';
$line=922;if(tripPlan.billStatus == 2 ){
$out+='<th class="th-border" rowspan="2">是否对账</th>';
$line=922;}
$out+=' </tr> </thead> <tbody class="T-count-insurance"> ';
$line=926;$each(insuranceArrangeList,function(insuranceArrange,$index){
$out+=' <tr> <td>';
$line=928;$out+=$escape(insuranceArrange.insurance.name);
$out+='</td> <td>';
$line=929;if(insuranceArrange.type == null){
$line=929;if(insuranceArrange.insuranceItem != null){
$line=929;$out+=$escape(insuranceArrange.insuranceItem.name);
$line=929;}
$line=929;}else{
$line=929;$out+=$escape(insuranceArrange.type);
$line=929;}
$out+='</td> <td>';
$line=930;$out+=$escape(insuranceArrange.price);
$out+='</td> <td>';
$line=931;$out+=$escape(insuranceArrange.memberCount);
$out+='</td> <td>';
$line=932;$out+=$escape(insuranceArrange.needPayMoney);
$out+='</td> <td>';
$line=933;$out+=$escape(insuranceArrange.payedMoney);
$out+='</td> <td></td> </tr> ';
$line=936;});
$out+=' </tbody> </table> ';
$line=940;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=944;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=944;}
$out+=' type="text" style="width:30%;" value="';
$line=944;if(remarkArrangeList.insuranceRemark.length>0){
$line=944;$out+=$escape(remarkArrangeList.insuranceRemark[0].opCheckRemark);
$line=944;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=947;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=947;}
$out+=' type="text" style="width:30%;" value="';
$line=947;if(remarkArrangeList.insuranceRemark.length>0){
$line=947;$out+=$escape(remarkArrangeList.insuranceRemark[0].financeCheckRemark);
$line=947;}
$out+='" /> </div> </div> ';
$line=950;}
$out+=' </div>  <div id="financial-count-tripdetail-guide" class="tab-pane fade"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>指定导游报账</th> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">导游</th> <th class="th-border">导服费</th> <th class="th-border"><span class="necessary">*</span>管理费</th> <th class="th-border"><span class="necessary">*</span>导游预支金额</th> <th class="th-border"><span class="necessary">*</span>备注</th> </tr> </thead> <tbody class="T-count-guide"> ';
$line=969;$each(guideArranges,function(rs,index){
$out+=' <tr guideid = "';
$line=970;$out+=$escape(rs.guide.id);
$out+='"> <td><input disabled="disabled" type="radio" name="" ';
$line=971;if(rs.isAccountGuide == 1){
$out+='checked="checked"';
$line=971;}
$out+='/></td> <td>';
$line=972;$out+=$escape($helpers. dateFormat(rs.startTime ,  'yyyy-MM-dd'));
$out+='</td> <td>';
$line=973;$out+=$escape($helpers. dateFormat(rs.endTime ,  'yyyy-MM-dd'));
$out+='</td> <td> ';
$line=975;if(rs.taskType == 0){
$out+=' 全程 ';
$line=977;}else if(rs.taskType == 1){
$out+=' 接机 ';
$line=979;}else if(rs.taskType == 2){
$out+=' 送机 ';
$line=981;}else if(rs.taskType == 3){
$out+=' 前段 ';
$line=983;}else if(rs.taskType == 4){
$out+=' 中段 ';
$line=985;}else if(rs.taskType == 5){
$out+=' 后段 ';
$line=987;}
$out+=' </td> <td>';
$line=989;$out+=$escape(rs.guide.realname);
$out+='</td> <td>';
$line=990;$out+=$escape(rs.price);
$out+='<input value="';
$line=990;$out+=$escape(rs.price);
$out+='" name="price" type="hidden"></td> <td>';
$line=991;$out+=$escape(rs.manageFee);
$out+='<input value="';
$line=991;$out+=$escape(rs.manageFee);
$out+='" name="manageFee" type="hidden"></td> <td>';
$line=992;$out+=$escape(rs.guideAllPreMoney);
$out+='</td> <td>';
$line=993;$out+=$escape(rs.remark);
$out+='</td> </tr> ';
$line=995;});
$out+=' </tbody> </table> ';
$line=999;if(tripPlan.billStatus > -1){
$out+=' <div style="width:60%;"> <div> <label style="margin:5px 0px 0px 0px;">财务审核批注：</label> <input name="accountFinancialCheckComment" ';
$line=1003;if((!(tripPlan.billStatus == 1 && isFinance)) ){
$out+='readonly="readonly"';
$line=1003;}
$out+=' type="text" style="width:30%;" value="';
$line=1003;if(remarkArrangeList.guideRemark.length>0){
$line=1003;$out+=$escape(remarkArrangeList.guideRemark[0].opCheckRemark);
$line=1003;}
$out+='" /> <label style="margin:5px 0px 0px 10px;">计调审核批注：</label> <input name="accountOPCheckComment" ';
$line=1006;if((!(tripPlan.billStatus == 0 && isOp)) ){
$out+='readonly="readonly"';
$line=1006;}
$out+=' type="text" style="width:30%;" value="';
$line=1006;if(remarkArrangeList.guideRemark.length>0){
$line=1006;$out+=$escape(remarkArrangeList.guideRemark[0].financeCheckRemark);
$line=1006;}
$out+='" /> </div> </div> ';
$line=1009;}
$out+=' </div> </div> </div> <div style="height:30px;"></div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="col-sm-12 financialTripDetail">\r\n    <div>\r\n        <button data-entity-id="{{tripPlan.id}}" class="btn btn-xs btn-success btn-transfter btn-download" style="margin: 0px 10px 20px 0px;width:110px;height:35px;float: right;display: none;">\r\n            <i class="ace-icon fa fa-file-excel-o"></i>导出电子表格\r\n        </button>\r\n    </div>\r\n    <div class="col-xs-12 border">\r\n        <table class="table table-striped table-bordered table-hover all main-table T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n            <tr style="">\r\n                <td><label  style="font-weight: bold;">线路：{{tripPlan.lineProduct.name}}</label></td>\r\n                <td><label  style="font-weight: bold;">类别：{{tripPlan.lineProduct.type}}</label></td>\r\n                <td><label  style="font-weight: bold;">应用范围：{{if tripPlan.lineProduct.customerType == 1}}团体{{else if tripPlan.lineProduct.customerType == 0}}散客{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">天数：<span class="T-ProductDays" style="font-weight: bold;">{{tripPlan.lineProduct.days}}</span></label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label style="font-weight: bold;">团号：{{tripPlan.tripNumber}}</label></td>\r\n                <td><label  style="font-weight: bold;">出团日期:<span style="font-weight: bold;" class = "startTime_Choose" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></label></td>\r\n                <td><label style="font-weight: bold;">完团日期：{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</label></td>\r\n                <td><label  style="font-weight: bold;">团队人数：{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td> <label  style="font-weight: bold;">导游：{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</label></td>\r\n                <td><label  style="font-weight: bold;">全陪：{{tripPlan.accompanyGuideName}}</label></td>\r\n                <td></td>\r\n                <td></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" name="totalPersonCount" value="{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}"/>\r\n    <input type="hidden" name=\'busNumber\' class="busNumber" value="{{busCompanyArrange.length}}">\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all T-main-table" style="margin-top: 30px;">\r\n        <tbody>\r\n        <tr class="T-mainTitle">\r\n            <td colspan="8">\r\n            <div style="float: left;margin-left:10px;">\r\n                <input type="hidden" class="financial-tripPlanId" value="{{tripPlan.id}}" />\r\n                <input type="hidden" class="tripPlanAdultCount" value="{{tripPlan.touristAdultCount}}" />\r\n                <input type="hidden" class="tripPlanChildCount" value="{{tripPlan.touristChildCount}}" />\r\n                <input type="hidden" class="tripPlanStartTime" value="{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n                \r\n                <label style="margin-left:50px;font-weight: bold;">毛利：<span class="F-float F-money grossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">人均毛利：<span class="F-float F-money perGrossProfitMoney">0</span></label>\r\n                <label style="margin-left:50px;font-weight: bold;">导游预支金额：<span class="F-float F-money guideAllPreMoney">{{tripPlan.guideAllPreMoney}}</span></label>\r\n            </div></td> \r\n        </tr>\r\n        <tr class="T-title">\r\n            <td colspan="2"><label style="font-weight: bold;">团收入：<span class="F-float F-money tripIncome">0</span></label></td>\r\n            <td colspan="4"><label style="font-weight: bold;">团成本：<span class="F-float F-money tripCost">0</span></label></td>\r\n            <td colspan="2"><label style="font-weight: bold;">中转成本：<span class="F-float F-money tripTransitCost">0</span></label></td>\r\n        </tr>\r\n\r\n        <tr >\r\n            <td><label>应收团款：<span class="F-float F-money tripIncome-getAllMoney">{{touristGroup.needPayAllMoney}}</span></label></td>\r\n            <td><label>自费收入：<span class="F-float F-money tripIncome-selfPayTravelAgencyRebateMoney">0</span></label></td>\r\n            <td><label>导服费：<span class="tripCost-guideArrangePrice F-float F-money">{{guideArrange.price}}</span></label></td>\r\n            <td><label>保险：<span class="F-float F-money tripCost-insuranceArrangeNeedPayMoney">{{insurancePrice}}</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripCost-busCompanyNeedPayMoney">0</span></label></td>\r\n            <td><label>导游购物返佣：<span class="F-float F-money tripCost-guideshopFee">0</span></label></td>\r\n            <td><label>车费：<span class="F-float F-money tripTransitCost-busCompanyNeedPayMoney">{{touristGroup.outBusMoney}}</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripTransitCost-outRestaurantMoney">{{touristGroup.outRestaurantMoney}}</span></label></td>\r\n        </tr>\r\n        <tr> \r\n            <td><label>购物返佣：<span class="F-float F-money tripIncome-shopTravelAgencyRateMoney">0</span></label></td>\r\n            <td><label>其它收入：<span class="F-float F-money tripIncome-otherInCome">0</span></label></td>\r\n            <td><label>餐费：<span class="F-float F-money tripCost-restaurantArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripCost-hotelArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>景区费用：<span class="F-float F-money tripCost-scenicArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>导游自费返佣：<span class="F-float F-money tripCost-guideSelfMoney"></span></label></td>\r\n            <td><label>房费：<span class="F-float F-money tripTransitCost-hotelArrangeNeedPayMoney">{{touristGroup.outHotelMoney}}</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripTransitCost-outOtherMoney">{{touristGroup.outOtherMoney}}</span></label></td>\r\n        </tr>\r\n        <tr>\r\n            <td><label>导游管理费：<span class="tripIncome-guideManageMoney F-float F-money">{{guideArrange.manageFee}}</span></label></td>\r\n            <td></td>\r\n            <td><label>票务费用：<span class="F-float F-money tripCost-ticketArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>其它费用：<span class="F-float F-money tripCost-otherArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label>自费费用：<span class="F-float F-money tripCost-selfArrangeNeedPayMoney">0</span></label></td>\r\n            <td><label style="display: none;">地接费用：<span class="F-float F-money tripCost-groundArrangeNeedPayMoney"></span></label></td>\r\n            <td><label>票务费用{{isOp}}：<span class="F-float F-money tripTransitCost-ticketArrangeNeedPayMoney">{{touristGroup.outTicketMoney}}</span></label></td>\r\n            <td></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="row" style="margin-bottom:15px;">\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="btn-financialLog">操作记录</a>\r\n        </div>\r\n        <div class="col-md-1">\r\n            <a href="javascript:void(0);" class="T-tripPlanArrange">安排预算表</a>\r\n        </div>\r\n    </div>\r\n    <div class="tabbable">\r\n        <ul class="nav nav-tabs">\r\n            <li class="active col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-money" aria-expanded="true">团款</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-shop" aria-expanded="true">购物</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-selfpay" aria-expanded="true">自费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-other-incoming" aria-expanded="true">其它收入</a>\r\n            </li>\r\n            \r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-buspay" aria-expanded="true">车费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-restaurantpay" aria-expanded="true">餐费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-hotelpay" aria-expanded="true">房费</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-scenicpay" aria-expanded="true">景区</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-ticketpay" aria-expanded="true">票务</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-otherpay" aria-expanded="true">其它支出</a>\r\n            </li>\r\n            {{if touristGroup != null}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-outarrangepay" aria-expanded="true">中转</a>\r\n            </li>\r\n            {{/if}}\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-insurance" aria-expanded="true">保险</a>\r\n            </li>\r\n            <li class="col-sm-1 no-padding align-center" style="width:100px;">\r\n                <a data-toggle="tab" href="#financial-count-tripdetail-guide" aria-expanded="true">导游</a>\r\n            </li>\r\n        </ul>\r\n        <div class="tab-content T-list" style="position:relative;top: -2px">\r\n            <!-- 团款 -->\r\n            <div id="financial-count-tripdetail-money" class="tab-pane fade active in T-tripCost">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <tbody class="T-tripDetail">\r\n                    <tr>\r\n                        <td>序号</td>\r\n                        <td>来源</td>\r\n                        <td>小组联系人</td>\r\n                        <td>联系电话</td>\r\n                        <td>人数</td>\r\n                        <td>应收</td>\r\n                        <td>社收</td>\r\n                        <td>现收</td>\r\n                        <td>明细</td>\r\n                   {{each touristGroups as touristGroup index}}\r\n                        <tr>\r\n                            <td>{{index+1}}</td>\r\n                            <td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                            <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                            <td><span class="F-float F-count">{{touristGroup.adultCount}}</span>大<span class="F-float F-count">{{touristGroup.childCount}}</span>小</td>\r\n                            <td><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n                            <td><span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span></td>\r\n                            <td>\r\n                                {{if touristGroup.touristGroupFeeList.length > 0}}\r\n                                    {{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                                        {{touristGroupFee.name}} ：\r\n                                        <span class="F-float F-money">{{touristGroupFee.price}}</span>&nbsp;X&nbsp;<span class="F-float F-count">{{touristGroupFee.count}}</span>=\r\n                                        <span class="F-float F-money">{{touristGroupFee.price * touristGroupFee.count}}</span><br />\r\n                                    {{/each}}\r\n                                {{/if}}\r\n                            </td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.tripDetailRemark.length>0}}{{remarkArrangeList.tripDetailRemark[0].financeCheckRemark}}{{/if}}"/>\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 购物 -->\r\n            <div id="financial-count-tripdetail-shop" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="6">打单</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <th class="th-border" colspan="2">人数返佣</th>\r\n                        <th class="th-border" colspan="2">停车返佣</th>\r\n                        <th class="th-border" rowspan="2">购物返佣总收入</th>\r\n                        <!--  <th class="th-border" rowspan="2">现收</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">购物店</th>\r\n                      <th class="th-border">商品</th>\r\n                      <th class="th-border">金额</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">总金额</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元/人</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">元</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-shopping"> \r\n                    {{each dayList as day}}\r\n                    {{if day.shopArrange != null}}\r\n                    {{each day.shopArrange as shopArrangeList}}\r\n                    {{each shopArrangeList.shopArrangePolicy as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr shopArrangeId="{{arrange.id}}" shopId="{{arrange.whichDay}}_{{arrange.shopId}}">\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">第{{arrange.whichDay}}天</td>{{/if}}\r\n                        {{if index==0}}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}">{{arrange.shop.name}}</td>{{/if}}\r\n                        <td>{{arrange.shop.name}}</td>\r\n                        <td><span class="F-float F-money">{{arrange.consumeMoney}}</span><input policyId="{{if arrange.shopPolicy != null}}{{arrange.shopPolicy.id}}{{/if}}" name="consumeMoney" style="width:90px;" type="hidden" value="{{arrange.consumeMoney}}" old="{{arrange.consumeMoney}}" maxlength="11" \r\n                        {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumMoney{{arrange.whichDay}}_{{arrange.shopId}} F-float F-money"></span></td>{{/if}}\r\n                        <td><span>{{arrange.travelAgencyRate}}</span><input name="travelAgencyRate" style="width:90px;" type="hidden" value="{{arrange.travelAgencyRate*100}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}} readOnly="readOnly" {{/if}}/></td>\r\n                        <td><span class="travelAgencyRateMoney F-float F-money">{{arrange.travelAgencyRateMoney}}</span><input type="hidden" class="travelAgencyRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="travelAgencyRateMoney" value="{{arrange.travelAgencyRateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span>{{arrange.guideRate}}</span><input name="guideRate" style="width:90px;" type="hidden" style="display:none" value="{{arrange.guideRate*100}}" old="{{arrange.guideRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="guideRateMoney F-float F-money">{{arrange.guideRkateMoney}}</span><input type="hidden" class="guideRateMoney{{arrange.whichDay}}_{{arrange.shopId}}" name="guideRateMoney" value="{{arrange.guideRateMoney}}" \r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.customerRebateMoney < 1}}<span class="F-float F-money">{{arrange.shop.customerRebateMoney}}</span>{{else}}<span class="F-float F-money">{{arrange.customerRebateMoney}}</span>{{/if}}<input type="hidden" name="customerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.customerRebateMoney < 1}}{{arrange.shop.customerRebateMoney}}{{else}}{{arrange.customerRebateMoney}}{{/if}}" maxlength="11" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/><input type="hidden" name="touristAdultCount{{arrange.whichDay}}_{{arrange.shopId}}" value="{{tripPlan.touristAdultCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumCustomerRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumCustomerRebateMoney">{{shopArrangeList.customerRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span>{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}</span><input {{if arrange.isConfirmAccount == 1}}readonly="readOnly"{{/if}} type="hidden" name="parkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}}" value="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" style="width:90px;" old="{{if arrange.parkingRebateMoney < 1}}{{arrange.shop.parkingRebateMoney}}{{else}}{{arrange.parkingRebateMoney}}{{/if}}" maxlength="11" \r\n                        /></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="sumParkingRebateMoney{{arrange.whichDay}}_{{arrange.shopId}} sumParkingRebateMoney">{{shopArrangeList.parkingRebateMoney}}</span></td>{{/if}}\r\n                        {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><span class="T-shopIncome T-shopIncome{{arrange.whichDay}}_{{arrange.shopId}}"></span></td>{{/if}}\r\n                        <!-- {{if index == 0 }}<td rowspan="{{shopArrangeList.shopArrangePolicy.length}}"><input type="text" style="width:90px;"/></td>{{/if}} -->\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}  \r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.shopReamrk.length>0}}{{remarkArrangeList.shopReamrk[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 自费 -->\r\n            <div id="financial-count-tripdetail-selfpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border" colspan="14">消费</th>\r\n                        <th class="th-border" colspan="2">社佣</th>\r\n                        <th class="th-border" colspan="2">导佣</th>\r\n                        <!-- <th class="th-border" colspan="2">人数返佣</th> -->\r\n                        <th class="th-border" rowspan="2">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    <tr>\r\n                      <th class="th-border">时间</th>\r\n                      <th class="th-border">自费商家</th>\r\n                      <th class="th-border">项目</th>\r\n                      <th class="th-border">单价</th>\r\n                      <th class="th-border">底价</th>\r\n                      <th class="th-border">人数返佣</th>\r\n                      <th class="th-border">数量</th>\r\n                      <th class="th-border">优惠</th>\r\n                      <th class="th-border">应收</th>\r\n                      <th class="th-border">应付</th>\r\n                      <th class="th-border">已付</th>\r\n                      <th class="th-border">导付</th>\r\n                      <th class="th-border">现收</th>\r\n                      <th class="th-border">单据</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                      <th class="th-border">比例%</th>\r\n                      <th class="th-border">返佣</th>\r\n                    </tr></thead>\r\n                    <tbody class="T-count-selfPay">\r\n                    {{each dayList as day}}\r\n                    {{if day.selfPayArrange != null}}\r\n                    {{each day.selfPayArrange as arrangeList}}\r\n                    {{each arrangeList.selfPayArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}"  " selfPayArrangeId="{{arrange.id}}" selfPayId="{{arrange.selfPayId}}">\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.selfPay.name}}</td>{{/if}}\r\n                            <td>{{if arrange.selfPayItem != null }}{{arrange.selfPayItem.name}}{{/if}}</td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.marketPrice}}</span>{{else}}{{arrange.marketPrice}}{{/if}}\r\n                            <input type="hidden" name="marketPrice" value="{{arrange.marketPrice}}"/></td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}{{arrange.price}}{{/if}}\r\n                            <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                            <td>{{arrange.customerRebateMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                            <input style="width:60px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} maxlength="5"/><input type="hidden" name="memberCount" value="{{arrange.memberCount}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td> \r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                            <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" style="width:60px;"/></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span class="needIncome"></span>{{else}}<span class="needIncome"></span>{{/if}}</td>\r\n                            <td><span class="needPayMoney" >{{arrange.needPayMoney}}</span><input type="hidden" class="selfMoney"></td>\r\n                            <td>{{arrange.payedMoney}}</td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            </td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.realGetMoney}}</span>{{else}}<span>{{arrange.realGetMoney}}</span>{{/if}}\r\n                            </td>\r\n                            <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                    <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                                {{else}}\r\n                                    <span style="color:#bbb;">查看</span>\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{else}}<span>{{arrange.travelAgencyRate*100 | parseInt}}</span>{{/if}}\r\n                                <input style="width:90px;" type="hidden" name="travelAgencyRate" value="{{arrange.travelAgencyRate*100 | parseInt}}" old="{{arrange.travelAgencyRate}}" maxlength="5" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td>\r\n                            {{if arrange.badStatus == 1}}<span>{{arrange.travelAgencyRebateMoney}}</span>{{else}}<span class="travelAgencyRebateMoney">{{arrange.travelAgencyRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="travelAgencyRebateMoney" value="{{arrange.travelAgencyRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <td><span>{{arrange.guideRate*100 | parseInt}}</span>\r\n                                <input style="width:90px;" type="hidden" name="guideRate" value="{{arrange.guideRate*100 | parseInt}}" old="{{arrange.guideRate}}" maxlength="5"/>\r\n                            </td>\r\n                            <td>{{if arrange.badStatus == 1}}<span>{{arrange.guideRebateMoney}}</span>{{else}}<span class="guideRebateMoney">{{arrange.guideRebateMoney}}</span>{{/if}}\r\n                                \r\n                                <input type="hidden" name="guideRebateMoney" value="{{arrange.guideRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            <!-- <td>\r\n                                <span class="guideRate">{{arrange.customerRebateMoney}}</span>\r\n                                <input type="hidden" name="guideRate" value="{{arrange.customerRebateMoney}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}} /></td>\r\n                            {{if index == 0 }}<td rowspan="{{arrangeList.selfPayArrangeList.length}}">{{arrange.customerRebateMoney * tripPlan.touristAdultCount}}</td>{{/if}} -->\r\n                            <td>{{arrange.billRemark}}</td>\r\n                            {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}                              \r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.selfRemark.length>0}}{{remarkArrangeList.selfRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它收入 -->\r\n            <div id="financial-count-tripdetail-other-incoming" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherIn">\r\n                    {{each arrangeIncomePaymentList as otherInCome}}\r\n                    {{if otherInCome != null}}\r\n                    <tr otherInId="{{otherInCome.id}}" otherIn="{{otherInCome.id}}" whichDay="{{otherInCome.whichDay}}">\r\n                        <td whichDay="{{otherInCome.whichDay}}">第{{otherInCome.whichDay}}<span class="whichDay"></span></td>\r\n                        <td>{{otherInCome.title}}</td>\r\n                        <td><span>{{otherInCome.price}}</span><input style="width:90px;" type="hidden" name="price" value="{{otherInCome.price}}" old="{{otherInCome.price}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}\r\n                        /></td>\r\n                        <td><span>{{otherInCome.count}}</span><input style="width:90px;" type="hidden" name="count" value="{{otherInCome.count}}" old="{{otherInCome.count}}" maxlength="11"\r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td><span class="needPayMoney"><input type="hidden" name="needPayMoney" value="{{otherInCome.needPayMoney}}" \r\n                        {{if otherInCome.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></span></td>\r\n                        <td>{{if otherInCome.billImage != null && otherInCome.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{otherInCome.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{otherInCome.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if otherInCome.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherInRemark.length>0}}{{remarkArrangeList.otherInRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            \r\n            <!-- 车费 -->\r\n            <div id="financial-count-tripdetail-buspay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车牌号</th>\r\n                        <th class="th-border">座位数</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-bus">\r\n                    {{each busCompanyArrange as busCompany}}\r\n                    {{if busCompany != null}}\r\n                    <tr badStatus = "{{busCompany.badStatus}}" busCompanyArrangeId="{{busCompany.id}}" >\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}\r\n                            {{ if busCompany.taskType == 0}}\r\n                                    全程\r\n                                {{else if busCompany.taskType == 1}}\r\n                                    接机\r\n                                {{else if busCompany.taskType == 2}}\r\n                                    送机\r\n                                {{else if busCompany.taskType == 3}}\r\n                                    前段\r\n                                {{else if busCompany.taskType == 4}}\r\n                                    中段\r\n                                {{else if busCompany.taskType == 5}}\r\n                                    后段\r\n                            {{/if}}\r\n                        {{/if}}</td>\r\n                        <td>{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n                        <td>{{if busCompany.bus != null}}{{busCompany.bus.seatCount}}{{/if}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.price}}</span>{{else}}<span>{{busCompany.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{busCompany.price}}" /></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realReduceMoney}}</span>{{else}}<span>{{busCompany.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{busCompany.realReduceMoney}}" old="{{busCompany.realReduceMoney}}"/></td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span class="BusneedPayMoney">{{busCompany.payedMoney+busCompany.realGuidePayMoney}}</span>{{else}}<span class="BusneedPayMoney"></span>{{/if}}</td>\r\n                        <td>{{busCompany.payedMoney}}</td>\r\n                        <td>{{if busCompany.badStatus == 1}}<span>{{busCompany.realGuidePayMoney}}</span>{{else}}<span>{{busCompany.guidePayMoney}}</span>{{/if}}  \r\n                            <input type="hidden" name="payedMoney" value="{{busCompany.payedMoney}}" {{if busCompany.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/>\r\n                            <input type="hidden" name="guidePayMoney" value="{{busCompany.guidePayMoney}}" /></td>\r\n                         <td>{{if busCompany.billImage != null && busCompany.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{busCompany.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{busCompany.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if busCompany.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.busRemark.length>0}}{{remarkArrangeList.busRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 餐费 -->\r\n            <div id="financial-count-tripdetail-restaurantpay" class="tab-pane fade">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class="th-border">时间</th>\r\n                            <th class="th-border">餐厅</th>\r\n                            <th class="th-border">类型</th>\r\n                            <th class="th-border">餐标</th>\r\n                            <th class="th-border">人数</th>\r\n                            <th class="th-border">优惠</th>\r\n                            <th class="th-border">应付</th>\r\n                            <th class="th-border">已付</th>\r\n                            <th class="th-border">导付</th>\r\n                            <th class="th-border">单据</th>\r\n                            <th class="th-border">差额</th>\r\n                            <th class="th-border">导游报账备注</th>\r\n                            {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-restaurant"> \r\n                    {{each dayList as day}}\r\n                    {{if day.restaurantArrange != null}}\r\n                    {{each day.restaurantArrange as arrangeList}}\r\n                    {{each arrangeList.restaurantArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" restaurantArrangeId="{{arrange.id}}" restaurantId="{{if arrange.restaurant != null}}{{arrange.restaurant.id}}{{/if}}" restaurantStandardId="{{if arrange.restaurantStandard != null}}{{arrange.restaurantStandard.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.restaurantArrangeList.length}}">\r\n                        {{if arrange.billUpdateTime != null}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{else}}{{if arrange.isChoose == 1}}自选{{else}}{{if arrange.restaurant != null}}{{arrange.restaurant.name}}{{/if}}{{/if}}{{/if}}</td>{{/if}}\r\n                        <td>{{arrange.type}}</td> \r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}<input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}<input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime != null}}value="{{arrange.realCount}}" \r\n                        {{else}}value="{{arrange.memberCount}}"{{/if}} old="{{arrange.realCount}}" maxlength="5"\r\n                        {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}<input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="restneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="restneedPayMoney"></span>{{/if}}<input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td><span class="billRemark">{{arrange.billRemark}}</span></td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.restRemark.length>0}}{{remarkArrangeList.restRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 房费 -->\r\n            <div id="financial-count-tripdetail-hotelpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">酒店</th>\r\n                        <th class="th-border">房型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">间数</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr> \r\n                    </thead>\r\n                    <tbody class="T-count-hotel">\r\n                    {{each dayList as day}}\r\n                    {{if day.hotelArrange != null}}\r\n                    {{each day.hotelArrange as arrangeList}}\r\n                    {{each arrangeList.hotelArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" hotelArrangeId="{{arrange.id}}" hotelId="{{if arrange.hotel != null}}{{arrange.hotel.id}}{{/if}}" restaurantStandardId="{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.id}}{{/if}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.hotelArrangeList.length}}">{{if arrange.hotel != null}}{{arrange.hotel.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.hotelRoom != null}}{{arrange.hotelRoom.type}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="hotelneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="hotelneedPayMoney"></span>{{/if}}\r\n                        <input name="needPayMoney" type="hidden" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.hotelRemark.length>0}}{{remarkArrangeList.hotelRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 景区 -->\r\n            <div id="financial-count-tripdetail-scenicpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th> \r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead> \r\n                    <tbody class="T-count-scenic">\r\n                    {{each dayList as day}}\r\n                    {{if day.scenicArrange != null}}\r\n                    {{each day.scenicArrange as arrangeList}}\r\n                    {{each arrangeList.scenicArrangeList as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" scenicArrangeId="{{arrange.id}}" scenicId="{{arrange.scenicId}}" scenicItemId="{{arrange.hotelRoomId}}" whichDay="{{arrange.whichDay}}">\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}"><span class="whichDay"></span></td>{{/if}}\r\n                        {{if index == 0}}<td rowspan="{{arrangeList.scenicArrangeList.length}}">{{if arrange.scenic != null}}{{arrange.scenic.name}}{{/if}}</td>{{/if}}\r\n                        <td>{{if arrange.scenicItem != null}}{{arrange.scenicItem.name}}{{/if}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span> {{arrange.price}}</span>{{/if}}\r\n                       <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="scenicneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="scenicneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                        {{if tripPlan.billStatus == 2}}<td>{{if arrange.isConfirmAccount == 0}}未对账{{else}}已对账{{/if}}</td>{{/if}}\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].opCheckRemark}}{{/if}}" />\r\n                \r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.scenicRemark.length>0}}{{remarkArrangeList.scenicRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            <!-- 票务 -->\r\n            <div id="financial-count-tripdetail-ticketpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">票务商家</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">出发地</th>\r\n                        <th class="th-border">目的地</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-ticket">\r\n                    {{each ticketArrangeList as ticketArrange}}\r\n                    {{each ticketArrange.ticketArrangeList as arrange index}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" ticketArrangeId="{{arrange.id}}" ticketId="{{arrange.ticket.id}}" itemId="{{arrange.id}}">\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.ticket != null}}{{arrange.ticket.name}}{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{if arrange.type == 1}}机票{{else if arrange.type== 2}}汽车票{{else if arrange.type == 3}}火车票{{else if arrange.type == 4}}轮船票{{/if}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startTime}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.startingCity}}</td>{{/if}}\r\n                    {{if index == 0}}<td rowspan="{{ticketArrange.ticketArrangeList.length}}">{{arrange.arriveCity}}</td>{{/if}}\r\n                    <td>{{arrange.shift}}</td>\r\n                    <td>{{arrange.seatLevel}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span>{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" name="realCount" type="hidden" {{if arrange.billUpdateTime !=null}}value="{{arrange.realCount}}" {{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}" old="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="ticketneedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="ticketneedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" value="{{arrange.needPayMoney}}" name="needPayMoney"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.ticketRemark.length>0}}{{remarkArrangeList.ticketRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 其它支出 -->\r\n            <div id="financial-count-tripdetail-otherpay" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导付</th>\r\n                        <th class="th-border">单据</th>\r\n                        <th class="th-border">差额</th>\r\n                        <th class="th-border">导游报账备注</th> \r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-otherOut"> \r\n                    {{each dayList as day}}\r\n                    {{if day.otherArrange != null}}\r\n                    {{each day.otherArrange as arrange index}}\r\n                    {{if arrange != null}}\r\n                    <tr badStatus = "{{arrange.badStatus}}" otherArrangeId="{{arrange.id}}" whichDay="{{arrange.whichDay}}">\r\n                        <td><span class="whichDay"></span></td>\r\n                        <td>{{arrange.name}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.price}}</span>{{else}}<span class="price">{{arrange.price}}</span>{{/if}}\r\n                        <input type="hidden" name="price" value="{{arrange.price}}" {{if arrange.isConfirmAccount == 1}}readOnly="readOnly"{{/if}}/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.memberCount}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realCount}}{{else}}{{arrange.memberCount}}{{/if}}</span>{{/if}}\r\n                        <input style="width:90px;" type="hidden" name="realCount" {{if arrange.billUpdateTime}}value="{{arrange.realCount}}"{{else}}value="{{arrange.memberCount}}"{{/if}} /></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realReduceMoney}}</span>{{else}}<span>{{arrange.realReduceMoney}}</span>{{/if}}\r\n                        <input type="hidden" name="realReduceMoney" value="{{arrange.realReduceMoney}}"/></td>\r\n                        <td>{{if arrange.badStatus == 1}}<span class="otherOutNeedPayMoney">{{arrange.payedMoney+arrange.realGuidePayMoney}}</span>{{else}}<span class="otherOutNeedPayMoney"></span>{{/if}}\r\n                        <input type="hidden" name="needPayMoney" value="{{arrange.needPayMoney}}"></td>\r\n                        <td>{{arrange.payedMoney}}</td>\r\n                        <td>{{if arrange.badStatus == 1}}<span>{{arrange.realGuidePayMoney}}</span>{{else}}<span>{{if arrange.billUpdateTime != null}}{{arrange.realGuidePayMoney}}{{else}}{{arrange.guidePayMoney}}{{/if}}</span>{{/if}}\r\n                            \r\n                            <input type="hidden" name="payedMoney" value="{{arrange.payedMoney}}" />\r\n                            <input type="hidden" name="guidePayMoney" value="{{arrange.guidePayMoney}}" /></td>\r\n                        <td>{{if arrange.billImage != null && arrange.billImage != ""}}\r\n                                <a href="javascript:void(0);" url="{{arrange.billImage}}" class="btn-view">查看</a>\r\n                            {{else}}\r\n                                <span style="color:#bbb;">查看</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><span class="difference"></span></td>\r\n                        <td>{{arrange.billRemark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.otherOutRemark.length>0}}{{remarkArrangeList.otherOutRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n            {{if touristGroup != null}}\r\n            <!-- 中转 -->\r\n            <div id="financial-count-tripdetail-outarrangepay" class="tab-pane fade T-transit">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                        <tr>\r\n                        <th class="th-border">序号</th>\r\n                        <th class="th-border">来源</th>\r\n                        <th class="th-border">小组联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">接团</th>\r\n                        <th class="th-border">送团</th>\r\n                        <th class="th-border">明细</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    {{each touristGroup.touristGroupList as touristGroup index}}\r\n                     <tr>\r\n                        <td>{{index+1}}</td>\r\n                        <td>{{touristGroup.partnerAgencyName}}</td>\r\n                        <td>{{touristGroup.name}}</td>\r\n                        <td>{{touristGroup.mobileNumber}}</td>\r\n                        <td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                        <td>{{touristGroup.arriveService}}</td>\r\n                        <td>{{touristGroup.leaveService}}</td>\r\n                        <td><a href="javascript:void(0);" data-entity-id="{{touristGroup.id}}" class="T-viewTripTransit">查看</a></td>\r\n                     </tr>\r\n                     {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;"><div> \r\n                    <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                    <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].opCheckRemark}}{{/if}}" />\r\n                    <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                    <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.transferRemark.length>0}}{{remarkArrangeList.transferRemark[0].financeCheckRemark}}{{/if}}" />\r\n                </div>\r\n                </div>{{/if}}\r\n            </div>\r\n            {{/if}}\r\n             <!-- 保险 -->\r\n            <div id="financial-count-tripdetail-insurance" class="tab-pane fade T-insurance">\r\n                \r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border">保险公司</th>\r\n                        <th class="th-border">险种</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">已付</th>\r\n                        <th class="th-border">导游报账备注</th>\r\n                        {{if tripPlan.billStatus == 2 }}<th class="th-border" rowspan="2">是否对账</th>{{/if}}\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-insurance">\r\n                    {{each insuranceArrangeList as insuranceArrange}}\r\n                    <tr>\r\n                    <td>{{insuranceArrange.insurance.name}}</td>\r\n                    <td>{{if insuranceArrange.type == null}}{{if insuranceArrange.insuranceItem != null}}{{insuranceArrange.insuranceItem.name}}{{/if}}{{else}}{{insuranceArrange.type}}{{/if}}</td>\r\n                    <td>{{insuranceArrange.price}}</td>\r\n                    <td>{{insuranceArrange.memberCount}}</td>\r\n                    <td>{{insuranceArrange.needPayMoney}}</td>\r\n                    <td>{{insuranceArrange.payedMoney}}</td>\r\n                    <td></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                <div style="width:60%;">\r\n                    <div> \r\n                        <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                        <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].opCheckRemark}}{{/if}}" />\r\n                    \r\n                        <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                        <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.insuranceRemark.length>0}}{{remarkArrangeList.insuranceRemark[0].financeCheckRemark}}{{/if}}" />\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n            <!-- 导游 -->\r\n            <div id="financial-count-tripdetail-guide" class="tab-pane fade">\r\n                <table class="table table-striped table-bordered table-hover">\r\n                    <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>指定导游报账</th>\r\n                        <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                        <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                        <th class="th-border">任务</th>\r\n                        <th class="th-border">导游</th>\r\n                        <th class="th-border">导服费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>管理费</th>\r\n                        <th class="th-border"><span class="necessary">*</span>导游预支金额</th>\r\n                        <th class="th-border"><span class="necessary">*</span>备注</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody class="T-count-guide">\r\n                    {{each guideArranges as rs index}}\r\n                        <tr guideid = "{{rs.guide.id}}">\r\n                            <td><input disabled="disabled" type="radio" name="" {{if rs.isAccountGuide == 1}}checked="checked"{{/if}}/></td>\r\n                            <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>\r\n                                {{if rs.taskType == 0}}\r\n                                    全程\r\n                                {{else if rs.taskType == 1}}\r\n                                    接机\r\n                                {{else if rs.taskType == 2}}\r\n                                    送机\r\n                                {{else if rs.taskType == 3}}\r\n                                    前段\r\n                                {{else if rs.taskType == 4}}\r\n                                    中段\r\n                                {{else if rs.taskType == 5}}\r\n                                    后段\r\n                                {{/if}}\r\n                            </td>\r\n                            <td>{{rs.guide.realname}}</td>\r\n                            <td>{{rs.price}}<input value="{{rs.price}}" name="price" type="hidden"></td>\r\n                            <td>{{rs.manageFee}}<input value="{{rs.manageFee}}" name="manageFee" type="hidden"></td>\r\n                            <td>{{rs.guideAllPreMoney}}</td>\r\n                            <td>{{rs.remark}}</td>\r\n                        </tr>\r\n                    {{/each}}\r\n                    </tbody>\r\n                </table>\r\n\r\n                {{if tripPlan.billStatus > -1}}\r\n                    <div style="width:60%;">\r\n                        <div> \r\n                            <label style="margin:5px 0px 0px 0px;">财务审核批注：</label>\r\n                            <input name="accountFinancialCheckComment" {{if (!(tripPlan.billStatus == 1 && isFinance)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].opCheckRemark}}{{/if}}" />\r\n                        \r\n                            <label style="margin:5px 0px 0px 10px;">计调审核批注：</label>\r\n                            <input name="accountOPCheckComment" {{if (!(tripPlan.billStatus == 0 && isOp)) }}readonly="readonly"{{/if}} type="text" style="width:30%;" value="{{if remarkArrangeList.guideRemark.length>0}}{{remarkArrangeList.guideRemark[0].financeCheckRemark}}{{/if}}" />\r\n                        </div>\r\n                    </div>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style="height:30px;"></div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});