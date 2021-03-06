/*TMODJS:{"debug":true,"version":1460,"md5":"3188554a2ef7014e30b82c295faca3f4"}*/
define(function(require){return require('../../../template')('resource/tripPlan/view/add', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,basicInfo=$data.basicInfo,days=$data.days,tarId=$data.tarId,$each=$utils.$each,tripPlanDayList=$data.tripPlanDayList,day=$data.day,$index=$data.$index,$string=$utils.$string,touristGroupList=$data.touristGroupList,group=$data.group,arrangeItemsStauts=$data.arrangeItemsStauts,insuranceList=$data.insuranceList,insurance=$data.insurance,index=$data.index,guideList=$data.guideList,guide=$data.guide,task=$data.task,i=$data.i,busCompanyList=$data.busCompanyList,busCompany=$data.busCompany,restaurantList=$data.restaurantList,restaurant=$data.restaurant,hotelList=$data.hotelList,hotel=$data.hotel,scenicList=$data.scenicList,scenic=$data.scenic,shopList=$data.shopList,shop=$data.shop,rs=$data.rs,selfPayList=$data.selfPayList,selfPay=$data.selfPay,ticketList=$data.ticketList,ticket=$data.ticket,otherList=$data.otherList,other=$data.other,$out='';$out+=' <div class="globalAdd"> <div class="baseinfo">  <input type="hidden" name="tripPlanId" value="';
$line=5;$out+=$escape(basicInfo.id);
$out+='" /> <input type="hidden" id="isArranged" value="';
$line=6;$out+=$escape(basicInfo.isArranged);
$out+='"> <span class="T-days hidden">';
$line=7;$out+=$escape(days);
$out+='</span> <span class="T-status hidden">';
$line=8;$out+=$escape(basicInfo.status);
$out+='</span> <span class="T-tab-id hidden">';
$line=9;$out+=$escape(tarId);
$out+='</span> <h5 class="base-title">基本信息</h5> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">线路产品：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=14;$out+=$escape(basicInfo.lineProduct.name);
$out+='</td> <td class="style-myself">针对客源：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=16;if(basicInfo.tripPlanType == 0){
$out+='散客';
$line=16;}else if(basicInfo.tripPlanType == 1){
$out+='团体';
$line=16;}
$out+='</td> <td class="style-myself">人数：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-count T-touristCount" data-count=';
$line=18;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$out+='>';
$line=18;$out+=$escape(basicInfo.touristAdultCount);
$out+='</span>大人&nbsp;<span class="F-float F-count">';
$line=18;$out+=$escape(basicInfo.touristChildCount);
$out+='</span>小孩</td> <td class="style-myself">团号：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=20;$out+=$escape(basicInfo.tripNumber);
$out+='</td> </tr> <tr> <td class="style-myself">出游日期：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose" class="T-startTime">';
$line=24;$out+=$escape($helpers. dateFormat(basicInfo.startTime , 'yyyy-MM-dd'));
$out+='</span></td> <td class="style-myself">完团日期：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose" class="T-endTime">';
$line=26;$out+=$escape($helpers. dateFormat(basicInfo.endTime , 'yyyy-MM-dd'));
$out+='</span></td> <td class="style-myself" colspan="4"></td> </tr> <tr> <td class="style-myself">购物商家：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=31;$out+=$escape(basicInfo.shopNames);
$out+='</td> <td class="style-myself">自费商家：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=33;$out+=$escape(basicInfo.selfPayItemNames);
$out+='</td> <td colspan="2" style="text-align: left;padding: 0px 0px 0px 10px"> <div class="checkbox checkbox-inline mar-0"> <label> <input type="checkbox" class="ace" disabled="disabled" type="checkbox" name="isContainSelfPay" ';
$line=37;if(basicInfo.isContainSelfPay==1 ){
$out+='checked';
$line=37;}
$out+='> <span class="lbl"> 包含自费</span> </label> </div> </td> <td class="style-myself">接站牌：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">';
$line=43;$out+=$escape(basicInfo.welcomeBoard);
$out+='</td> </tr> <tr> <td class="style-myself">全陪:</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=47;$out+=$escape(basicInfo.accompanyGuideName);
$out+='</td> <td class="style-myself">全陪电话：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=49;$out+=$escape(basicInfo.accompanyGuideMobile);
$out+='</td> <td class="style-myself">责任计调:</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=51;if(basicInfo.dutyOPUser){
$line=51;$out+=$escape(basicInfo.dutyOPUser.realName);
$line=51;}
$out+='</td> <td class="style-myself">责任部门:</td> <td style="text-align: left;padding: 0px 0px 0px 10px">';
$line=53;if(basicInfo.businessGroup){
$line=53;$out+=$escape(basicInfo.businessGroup.name);
$line=53;}
$out+='</td> </tr> <tr> <td class="style-myself">备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="9">';
$line=57;$out+=$escape(basicInfo.remark);
$out+='</td> </tr> </table> <table class="table table-bordered"> <tbody> <tr> <td> <span class="fix-w-4">计划现收:</span><span class="F-float F-money">';
$line=64;$out+=$escape(basicInfo.guideAllNowMoney);
$out+='</span> </td> <td> <span class="fix-w-4">计划导付:</span><span class="T-guidePayedMoneyLabel F-float F-money">&nbsp;</span><span class="T-guidePayedMoney hidden">';
$line=67;$out+=$escape(basicInfo.guideAllPayMoney);
$out+='</span> </td> <td><span class="fix-w-5">计划预支款:</span> <span class="T-guidePlanAllPreMoney F-float F-money">';
$line=70;$out+=$escape(basicInfo.guidePlanAllPreMoney);
$out+='</span> </td> </tr> </tbody> </table> </div> <div class="trip-arrange"> <h5 class="base-title">行程安排<a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a></h5> <table class="table table-bordered table-fixed"> <tbody class="T-tripPlanDayList-tbody"> <colgroup> <col style="width:100px;"></col> <col style="width:600px;"></col> <col style="width:230px;"></col> <col></col> <col style="width:400px;"></col> </colgroup> <tr> <th>日期</th> <th>行程简要</th> <th>含餐情况</th> <th>住宿地点</th> <th>景点</th> </tr> ';
$line=94;$each(tripPlanDayList,function(day,$index){
$out+=' <tr> <td>';
$line=96;$out+=$escape($helpers. getDateText (basicInfo.startTime ,  day.whichDay));
$out+='</td> <td class="T-ctrl-tip" title="';
$line=97;$out+=$escape(day.title);
$out+='"><span>';
$line=97;$out+=$escape(day.title);
$out+='</span></td> <td>';
$line=98;$out+=$string($helpers. getRestaurantDesc(day.repastDetail ));
$out+='</td> <td class="T-ctrl-tip" title="';
$line=99;$out+=$escape(day.restPosition);
$out+='" data-placement="left"><span>';
$line=99;$out+=$escape(day.restPosition);
$out+='</span></td> <td class="T-ctrl-tip" title="';
$line=100;$out+=$escape(day.scenicItemNames);
$out+='" data-placement="left"><span>';
$line=100;$out+=$escape(day.scenicItemNames);
$out+='</span></td> </tr> ';
$line=102;});
$out+=' </tbody> </table> </div> <div class="trip-arrange"> <h5 class="base-title">游客名单<a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a></h5> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">收客单号</th> <th class="th-border">客户</th> <th class="th-border">线路产品</th> <th class="th-border">小组联系人</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">接站牌</th> <th class="th-border">送客地点</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-touristGroup-list T-touristGroupList"> ';
$line=124;if(!!touristGroupList){
$out+=' ';
$line=124;$each(touristGroupList,function(group,$index){
$out+=' <tr data-id="';
$line=125;$out+=$escape(group.id);
$out+='"> <td>';
$line=126;$out+=$escape(group.orderNumber);
$out+='</td> <td name="travelAgencyName" title="';
$line=127;if(group.partnerAgencyContact){
$out+='联系人：';
$line=127;$out+=$escape(group.partnerAgencyContact.contactRealname);
$out+='，电话：';
$line=127;$out+=$escape(group.partnerAgencyContact.contactMobileNumber);
$line=127;}
$out+='">';
$line=127;if(group.partnerAgency){
$line=127;$out+=$escape(group.partnerAgency.travelAgencyName);
$line=127;}
$out+='</td> <td name="lineProductName">';
$line=128;$out+=$escape(group.lineProduct.name);
$out+='</td> <td name="contactMemberName">';
$line=129;if(group.contactMember){
$line=129;$out+=$escape(group.contactMember.name);
$out+='(';
$line=129;$out+=$escape(group.contactMember.mobileNumber);
$out+=')';
$line=129;}
$out+='</td> <td name="peopleCount" class="F-float F-count" data-adultCount="';
$line=130;$out+=$escape(group.adultCount);
$out+='" data-childCount="';
$line=130;$out+=$escape(group.childCount);
$out+='">';
$line=130;$out+=$escape(group.adultCount);
$out+='大';
$line=130;$out+=$escape(group.childCount);
$out+='小</td> <td name="currentNeedPayMoney" class="F-float F-money">';
$line=131;$out+=$escape(group.currentNeedPayMoney);
$out+='</td> <td>';
$line=132;$out+=$escape(group.welcomeBoard);
$out+='</td> <td>';
$line=133;$out+=$escape(group.sendPosition);
$out+='</td> <td name="remark" title=';
$line=134;$out+=$escape(group.mark);
$out+='>';
$line=134;$out+=$escape(group.remark);
$out+='</td> <td> <div class="btn-group"> <a class="cursor T-action T-groupView"> 查看 </a> </div> </td> </tr> ';
$line=143;});
$out+=' ';
$line=143;}
$out+=' </tbody> </table> </div> <div class="arrange-area"> <h5 class="base-title">安排资源</h5> <div class="tabbable"> <ul class="nav nav-tabs T-arrange-tabs"> ';
$line=151;if(arrangeItemsStauts.guideStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140011"> <a data-toggle="tab" href="#tripPlan_addPlan_guide" aria-expanded="false">导游</a> </li> ';
$line=155;}
$out+=' ';
$line=155;if(arrangeItemsStauts.insuranceStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140012"> <a data-toggle="tab" href="#tripPlan_addPlan_insurance" aria-expanded="true">保险</a> </li> ';
$line=159;}
$out+=' ';
$line=159;if(arrangeItemsStauts.busStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140013"> <a class="T-busTarget" data-toggle="tab" href="#tripPlan_addPlan_bus" aria-expanded="false">车辆</a> </li> ';
$line=163;}
$out+=' ';
$line=163;if(arrangeItemsStauts.restaurantStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140014"> <a data-toggle="tab" href="#tripPlan_addPlan_restaurant" aria-expanded="false">餐饮</a> </li> ';
$line=167;}
$out+=' ';
$line=167;if(arrangeItemsStauts.hotelStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140015"> <a class="T-hotelTarget" data-toggle="tab" href="#tripPlan_addPlan_hotel" aria-expanded="false">住宿</a> </li> ';
$line=171;}
$out+=' ';
$line=171;if(arrangeItemsStauts.scenicStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140016"> <a data-toggle="tab" href="#tripPlan_addPlan_scenic" aria-expanded="false">景区</a> </li> ';
$line=175;}
$out+=' ';
$line=175;if(arrangeItemsStauts.ticketStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140017"> <a data-toggle="tab" href="#tripPlan_addPlan_ticket" aria-expanded="false">票务</a> </li> ';
$line=179;}
$out+=' ';
$line=179;if(arrangeItemsStauts.shopStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140018"> <a data-toggle="tab" href="#tripPlan_addPlan_shop" aria-expanded="false">购物</a> </li> ';
$line=183;}
$out+=' ';
$line=183;if(arrangeItemsStauts.selfPayStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140019"> <a data-toggle="tab" href="#tripPlan_addPlan_selfPay" aria-expanded="false">自费</a> </li> ';
$line=187;}
$out+=' ';
$line=187;if(arrangeItemsStauts.otherStatus != 0 ){
$out+=' <li class="col-sm-1 no-padding align-center R-right" data-right="1140020"> <a data-toggle="tab" href="#tripPlan_addPlan_other" aria-expanded="false">其它</a> </li> ';
$line=191;}
$out+=' </ul> <div class="tab-content" style="position:relative;top: -2px"> ';
$line=194;if(arrangeItemsStauts.insuranceStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_insurance" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-medkit"></i> 保险安排 <button class="btn btn-sm btn-success T-addResource T-addInsurance" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=203;if(basicInfo.oldInsuranceRequire){
$out+=' <p class="requirementsPlan">原保险计划要求：';
$line=204;$out+=$escape(basicInfo.oldInsuranceRequire);
$out+='</p>';
$line=204;}
$out+=' ';
$line=204;if(basicInfo.nowInsuranceRequire){
$out+=' <p class="requirementsPlan">现保险计划要求：';
$line=205;$out+=$escape(basicInfo.nowInsuranceRequire);
$out+='</p>';
$line=205;}
$out+=' <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:200px" /> <col style="width:200px" /> <col style="width:80px;" /> <col style="width:80px;" /> <col style="width:80px;" /> <col style="width:80px;" /> <col style="min-width: 100px;" /> <col style="width:50px;" /> </colgroup> <thead> <tr> <th class="th-border"><span class="necessary">*</span>保险公司</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ';
$line=230;$each(insuranceList,function(insurance,index){
$out+=' ';
$line=230;if(insurance != "[]" || insurance != null){
$out+=' <tr data-entity-arrangeid="';
$line=231;if(basicInfo.isArranged == 1){
$line=231;$out+=$escape(insurance.id);
$line=231;}
$out+='" ';
$line=231;if(insurance.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=231;}
$out+='> <td> <div class="col-sm-12"> <input type="text" name="insuranceName" maxlength="32" value="';
$line=234;if(insurance.insurance != null){
$line=234;$out+=$escape(insurance.insurance.name);
$line=234;}
$out+='" class="col-sm-12 T-chooseInsurance bind-change" ';
$line=234;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=234;}
$out+=' /> <input type="hidden" name="insuranceId" value="';
$line=235;if(insurance.insurance != null){
$line=235;$out+=$escape(insurance.insurance.id);
$line=235;}
$out+='" /> ';
$line=236;if(!insurance.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addInsuranceResource R-right" data-right="1080002" title="添加保险公司"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=240;}
$out+=' </div> </td> <td> <input type="text" name="insuranceItem" value="';
$line=244;if(insurance.insuranceItem ){
$line=244;$out+=$escape(insurance.insuranceItem.name);
$line=244;}
$out+='" maxlength="32" class="col-sm-12 T-chooseInsuranceType" ';
$line=244;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=244;}
$out+=' /> <input type="hidden" name="insuranceItemId" value="';
$line=245;if(insurance.insuranceItem ){
$line=245;$out+=$escape(insurance.insuranceItem.id);
$line=245;}
$out+='"> </td> <td> <input type="text" name="price" value="';
$line=248;$out+=$escape(insurance.price);
$out+='" class="col-sm-12 price F-float F-money" maxlength="8" ';
$line=248;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=248;}
$out+='/> </td> <td> <input type="text" name="memberCount" value="';
$line=251;if(!!insurance.memberCount || insurance.memberCount == 0){
$line=251;$out+=$escape(insurance.memberCount);
$line=251;}else{
$line=251;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=251;}
$out+='" class="col-sm-12 F-float F-count" maxlength="8" ';
$line=251;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=251;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" value="';
$line=254;$out+=$escape(insurance.needPayMoney);
$out+='" class="col-sm-12 F-float F-money" maxlength="9" ';
$line=254;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=254;}
$out+='/> </td> <td><div class="inline-flex">';
$line=256;$out+=$string($helpers. getPlanPreTypeOption(insurance.preType , insurance.isConfirmAccount));
$out+=' <input type="text" name="prePayMoney" value="';
$line=257;$out+=$escape(insurance.prePayMoney);
$out+='" class="price F-float F-money" maxlength="9" ';
$line=257;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=257;}
$out+='/></div> </td> </td> <td> <input type="text" name="remark" value="';
$line=261;$out+=$escape(insurance.remark);
$out+='" class="col-sm-12 min-w150" maxlength="500"';
$line=261;if(insurance.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=261;}
$out+=' /> </td> <td>';
$line=263;if(!insurance.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=263;$out+=$escape(insurance.financialMoney);
$out+='" data-entity-name="insurance" title="删除"> 删除 </a>';
$line=263;}
$out+=' </td> </tr> ';
$line=265;}
$out+=' ';
$line=265;});
$out+=' </tbody> </table> </div> </div> ';
$line=270;}
$out+=' ';
$line=270;if(arrangeItemsStauts.guideStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_guide" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-user"></i> 导游安排 <button class="btn btn-sm btn-success T-addResource T-addGuide" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> <span style="color: #D45A5A;font-weight: 100;padding-left: 30px;font-size: 6px;">* 删除或切换导游将删除该导游的实销报账数据</span> </h5> ';
$line=280;if(basicInfo.oldGuideRequire){
$out+=' <p class="requirementsPlan">原导游计划要求：';
$line=281;$out+=$escape(basicInfo.oldGuideRequire);
$out+='</p>';
$line=281;}
$out+=' ';
$line=281;if(basicInfo.nowGuideRequire){
$out+=' <p class="requirementsPlan">现导游计划要求：';
$line=282;$out+=$escape(basicInfo.nowGuideRequire);
$out+='</p>';
$line=282;}
$out+=' <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:120px"> <col style="width:100px"> <col style="width:100px;"> <col style="width:100px;"> <col style="width:100px;"> <col style="width:110px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border"><span class="necessary">*</span>导游</th> <th class="th-border">联系电话</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">计划预支款</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ';
$line=313;$each(guideList,function(guide,index){
$out+=' ';
$line=313;if(guide != "[]" || guide != null){
$out+=' <tr data-entity-arrangeid="';
$line=314;if(basicInfo.isArranged == 1){
$line=314;$out+=$escape(guide.id);
$line=314;}
$out+='"> <td> ';
$line=316;if(guide.taskJson){
$out+=' ';
$line=317;$each(guide.taskJson,function(task,i){
$out+=' <div class="T-guideAddTask ';
$line=318;if(i > 0){
$out+='mar-t-10';
$line=318;}
$out+='" data-index="';
$line=318;$out+=$escape(i);
$out+='"> <input type="text" name="startTime" class="datepicker" value="';
$line=319;$out+=$escape($helpers. dateFormat(task.sTime , 'yyyy-MM-dd'));
$out+='"> </div> ';
$line=321;});
$out+=' ';
$line=322;}else{
$out+=' <div class="T-guideAddTask" data-index="0"> <input type="text" name="startTime" class="datepicker" value=""> </div> ';
$line=326;}
$out+=' </td> <td> ';
$line=329;if(guide.taskJson){
$out+=' ';
$line=330;$each(guide.taskJson,function(task,i){
$out+=' <div class="T-guideAddTask ';
$line=331;if(i > 0){
$out+='mar-t-10';
$line=331;}
$out+='" data-index="';
$line=331;$out+=$escape(i);
$out+='"> <input type="text" name="endTime" class="datepicker" value="';
$line=332;$out+=$escape($helpers. dateFormat(task.eTime , 'yyyy-MM-dd'));
$out+='"> </div> ';
$line=334;});
$out+=' ';
$line=335;}else{
$out+=' <div class="T-guideAddTask" data-index="0"> <input type="text" name="endTime" class="datepicker" value=""> </div> ';
$line=339;}
$out+=' </td> <td> ';
$line=342;if(guide.taskJson){
$out+=' ';
$line=343;$each(guide.taskJson,function(task,i){
$out+=' <div class="T-guideAddTask ';
$line=344;if(i > 0){
$out+='mar-t-10';
$line=344;}else{
$out+='mar-t-5';
$line=344;}
$out+='" data-index="';
$line=344;$out+=$escape(i);
$out+='"> ';
$line=345;$out+=$string($helpers. getTaskSelect(task.tType ));
$out+=' <label style="float:right; padding-top:0px;"> <button class="btn btn-sm btn-white ';
$line=347;if(i == 0){
$out+='btn-success T-add';
$line=347;}else{
$out+='btn-danger T-del';
$line=347;}
$out+=' T-guideBtn"> <i class="ace-icon fa ';
$line=348;if(i == 0){
$out+='fa-plus';
$line=348;}else{
$out+='fa-minus';
$line=348;}
$out+=' bigger-110 icon-only"></i> </button> </label> </div> ';
$line=352;});
$out+=' ';
$line=353;}else{
$out+=' <div class="T-guideAddTask mar-t-5" data-index="0"> ';
$line=355;$out+=$string($helpers. getTaskSelect(0 ));
$out+=' <label style="float:right; padding-top:0px;"> <button class="btn btn-sm btn-white btn-success T-add T-guideBtn"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> </div> ';
$line=362;}
$out+=' </td> <td> <div class="col-sm-12 feild-relative"> <input type="text" name="guideName" maxlength="32" value="';
$line=366;if(guide.guide != null){
$line=366;$out+=$escape(guide.guide.realname);
$line=366;}
$out+='" ';
$line=366;if(guide.isConfirmAccount || guide.isAccountGuide==1 && basicInfo.status !=0 ){
$out+=' readonly="readonly" ';
$line=366;}
$out+=' class="col-sm-12 chooseGuide" /> <input type="hidden" name="guideId" value="';
$line=367;if(guide.guide != null){
$line=367;$out+=$escape(guide.guide.id);
$line=367;}
$out+='" /> ';
$line=368;if(!guide.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addGuideResource R-right" data-right="1010002" title="添加导游"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=372;}
$out+=' </div> </td> <td> <input type="text" name="mobileNumber" maxlength="32" value="';
$line=376;if(guide.guide != null){
$line=376;$out+=$escape(guide.guide.mobileNumber);
$line=376;}
$out+='" readonly="readonly" class="col-sm-12" /> </td> <td> <input type="text" name="price" value="';
$line=379;$out+=$escape(guide.price);
$out+='" class="col-sm-12 F-float F-money"maxlength="9" /> </td> <td> <input type="text" name="manageFee" value="';
$line=382;$out+=$escape(guide.manageFee);
$out+='" class="col-sm-12 F-float F-money" maxlength="9" /> </td> <td><input class="F-float F-money" type="text" name="guidePlanPreMoney" value="';
$line=384;$out+=$escape(guide.guidePlanPreMoney);
$out+='" /></td> <td> <input type="text" name="remark" value="';
$line=386;$out+=$escape(guide.remark);
$out+='" class="col-sm-12 min-w150" maxlength="500" ';
$line=386;if(guide.isConfirmAccount){
$out+=' disabled="disabled" ';
$line=386;}
$out+='/> </td> <td> ';
$line=389;if((basicInfo.status != 1 || guide.isAccountGuide != 1)){
$out+=' <a class="cursor ';
$line=390;if(!guide.isConfirmAccount){
$out+='T-btn-deleteTripPlanList';
$line=390;}else{
$out+='gray';
$line=390;}
$out+='" data-entity-name="guide" data-entity-ispayed="';
$line=390;$out+=$escape(guide.financialMoney);
$out+='" title="';
$line=390;if(guide.isConfirmAccount){
$out+='财务已对账，不可删除';
$line=390;}else{
$out+='删除';
$line=390;}
$out+='"> 删除 </a> ';
$line=392;}
$out+=' </td> </tr> ';
$line=395;}
$out+=' ';
$line=395;});
$out+=' </tbody> </table> </div> </div> ';
$line=400;}
$out+=' ';
$line=400;if(arrangeItemsStauts.busStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_bus" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-bus"></i> 车辆安排 <button class="btn btn-sm btn-success T-addResource T-addBus" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=409;if(basicInfo.oldBusRequire){
$out+=' <p class="requirementsPlan">原车辆计划要求：';
$line=410;$out+=$escape(basicInfo.oldBusRequire);
$out+='</p>';
$line=410;}
$out+=' ';
$line=410;if(basicInfo.nowBusRequire){
$out+=' <p class="requirementsPlan">现车辆计划要求：';
$line=411;$out+=$escape(basicInfo.nowBusRequire);
$out+='</p>';
$line=411;}
$out+=' <div style="overflow-x:auto;"> <div style="min-width:2500px;"> <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:100px"> <col style="width:100px"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:110px;"> <col style="width:110px;"> <col style="width:160px;"> <col style="width:110px;"> <col style="width:110px;"> <col style="width:80px;"> <col style="width:120px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:80px;"> <col style="width:150px;"> <col style="width:70px;"> <col style="min-width: 100px;"> <col style="width:100px;"> <col style="width:140px;"> </colgroup> <thead> <tr> <th class="th-border"><span class="necessary">*</span>开始日期</th> <th class="th-border"><span class="necessary">*</span>结束日期</th> <th class="th-border">任务</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">车牌号</th> <th class="th-border">司机</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border">联系电话</th> <th class="th-border" width="70">通知游客</th> <th class="th-border">合同号</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">计划签单</th> <th class="th-border">备注</th> <th class="th-border">状态</th> <th class="th-border" width="160px;">操作</th> </tr> </thead> <tbody> ';
$line=462;$each(busCompanyList,function(busCompany,$index){
$out+=' ';
$line=462;if(busCompany != "[]" || busCompany != null){
$out+=' <tr data-entity-arrangeid="';
$line=463;if(basicInfo.isArranged == 1){
$line=463;$out+=$escape(busCompany.id);
$line=463;}
$out+='" data-entity-busCompanyId="';
$line=463;if(!!busCompany.busCompany){
$line=463;$out+=$escape(busCompany.busCompany.id);
$line=463;}
$out+='" data-entity-busId="';
$line=463;if(!!busCompany.bus){
$line=463;$out+=$escape(busCompany.bus.id);
$line=463;}
$out+='" data-entity-offerId="';
$line=463;$out+=$escape(busCompany.offerId);
$out+='" ';
$line=463;if(busCompany.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=463;}
$out+='> <td> <input type="text" name="startTime" class="datepicker T-busPriceC" ';
$line=465;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=465;}
$out+=' value="';
$line=465;$out+=$escape($helpers. dateFormat(busCompany.startTime , 'yyyy-MM-dd'));
$out+='"> </td> <td> <input type="text" name="endTime" class="datepicker T-busPriceC" ';
$line=468;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=468;}
$out+=' value="';
$line=468;$out+=$escape($helpers. dateFormat(busCompany.endTime , 'yyyy-MM-dd'));
$out+='"> </td> <td>';
$line=470;$out+=$string($helpers. getTaskSelect(busCompany.taskType , true, busCompany.isConfirmAccount));
$out+='</td> <td> <input type="text" name="needSeatCount" ';
$line=472;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=472;}
$out+=' value="';
$line=472;$out+=$escape(busCompany.needSeatCount);
$out+='" class="col-sm-12" style="width: 60px;" /> </td> <td> <input type="text" name="brand" ';
$line=475;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=475;}
$out+=' value="';
$line=475;$out+=$escape(busCompany.brand);
$out+='" class="col-sm-12" /> </td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="licenseNumber" ';
$line=479;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=479;}
$out+=' value="';
$line=479;if(busCompany.bus != null){
$line=479;$out+=$escape(busCompany.bus.licenseNumber);
$line=479;}
$out+='" class="col-xs-12 T-busPriceC" /> <input type="hidden" value="';
$line=480;if(busCompany.bus != null){
$line=480;$out+=$escape(busCompany.bus.id);
$line=480;}
$out+='" name="busId" /> ';
$line=481;if(!busCompany.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addBusResource R-right" data-right="1020003" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=485;}
$out+=' </div> </td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="driverName" value="';
$line=490;if(busCompany.driver != null){
$line=490;$out+=$escape(busCompany.driver.name);
$line=490;}
$line=490;if(busCompany.driver != null){
$line=490;$out+=$escape(busCompany.driver.mobileNumber);
$line=490;}
$out+='" class="col-xs-12" ';
$line=490;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=490;}
$out+='/> <input type="hidden" name="driverId" value="';
$line=491;if(busCompany.driver != null){
$line=491;$out+=$escape(busCompany.driver.id);
$line=491;}
$out+='"> ';
$line=492;if(!busCompany.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addDriverResource R-right" data-right="1020003" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=496;}
$out+=' </div> </td> <td> <div class="col-xs-12 feild-relative"> <input type="text" name="companyName" ';
$line=501;if(busCompany.isConfirmAccount || !!busCompany.offerId){
$out+='disabled="disabled" ';
$line=501;}
$out+=' value="';
$line=501;if(busCompany.busCompany != null){
$line=501;$out+=$escape(busCompany.busCompany.companyName);
$line=501;}
$out+='" class="chooseBusCompany col-xs-12" /> <input type="hidden" name="id" value="';
$line=502;if(basicInfo.isArranged == 1){
$line=502;$out+=$escape(busCompany.id);
$line=502;}
$out+='"> <input type="hidden" name="busCompanyId" value="';
$line=503;if(busCompany.busCompany != null){
$line=503;$out+=$escape(busCompany.busCompany.id);
$line=503;}
$out+='" /> ';
$line=504;if(!busCompany.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=508;}
$out+=' </div> </td> <td> <input type="text" name="mobileNumber" readonly="readonly" value="';
$line=512;if(busCompany.busCompany != null){
$line=512;$out+=$escape(busCompany.busCompany.mobileNumber);
$line=512;}
$out+='" class="col-sm-12" /> </td> <td> ';
$line=515;if(busCompany.isConfirmAccount){
$out+=' <span style="color:#bbb;" class="T-setUp" touristgroup = "';
$line=516;$out+=$escape(busCompany.annouceTouristGroupIds);
$out+='"></span>';
$line=516;}else{
$out+='<a class="T-noticeTourists" data-entity-touristgroup="';
$line=516;$out+=$escape(busCompany.annouceTouristGroupIds);
$out+='" data-entity-setplacetime="';
$line=516;$out+=$escape(busCompany.setPlaceTime);
$out+='" data-entity-setplaceposition="';
$line=516;$out+=$escape(busCompany.setPlacePosition);
$out+='">点击设置</a>';
$line=516;}
$out+='</td> <td> <input type="text" name="contractNumber" value="';
$line=518;$out+=$escape(busCompany.contractNumber);
$out+='" maxlength="20" class="col-sm-12" ';
$line=518;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=518;}
$out+='/> </td> <td> <input type="text" name="price" value="';
$line=521;$out+=$escape(busCompany.price);
$out+='" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;" ';
$line=521;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=521;}
$out+=' /> <input type="hidden" name="memberCount" value="1" /> </td> <td> <input type="text" name="reduceMoney" value="';
$line=525;$out+=$escape(busCompany.reduceMoney);
$out+='" class="col-sm-12 price F-float F-money" maxlength="9" ';
$line=525;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=525;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" value="';
$line=528;$out+=$escape(busCompany.needPayMoney);
$out+='" maxlength="9" class="col-sm-12 F-float F-money" /> </td> <td><div class="inline-flex">';
$line=530;$out+=$string($helpers. getPlanPreTypeOption(busCompany.preType ,  busCompany.isConfirmAccount,true));
$out+=' <input type="text" name="prePayMoney" value="';
$line=531;$out+=$escape(busCompany.prePayMoney);
$out+='" style="width: 60px;" class="price F-float F-money" maxlength="9" ';
$line=531;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=531;}
$out+='/></div> </td> <td class="text-left"><div class="inline-flex">';
$line=533;$out+=$string($helpers. getPlanPayTypeOption(busCompany.payType ,  busCompany.isConfirmAccount));
$out+=' <input name="guidePayMoney" type="text" value="';
$line=534;if(basicInfo.isArranged == 1){
$line=534;if(busCompany.payType == 2){
$line=534;$out+=$escape(busCompany.signMoney);
$line=534;}else{
$line=534;$out+=$escape(busCompany.guidePayMoney);
$line=534;}
$line=534;}else{
$line=534;$out+=$escape(busCompany.price);
$line=534;}
$out+='" maxlength="9" class="F-float F-money" ';
$line=534;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=534;}
$out+='/> </div> </td> <td>';
$line=537;if(busCompany.payType == 2){
$out+='-';
$line=537;}else{
$out+='<input type="text" readonly name="signBillMoney" class="F-float F-money" value="';
$line=537;$out+=$escape(busCompany.signMoney);
$out+='">';
$line=537;}
$out+='</td> <td> <input name="remark" type="text" value="';
$line=539;$out+=$escape(busCompany.remark);
$out+='" class="col-sm-12 min-w150" maxlength="500" ';
$line=539;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=539;}
$out+='/> </td> <td> <select name="orderStatus" ';
$line=542;if(busCompany.isConfirmAccount){
$out+='disabled';
$line=542;}
$out+='> <option value="1" ';
$line=543;if(busCompany.orderStatus==1 ){
$out+='selected="selected" ';
$line=543;}
$out+='>未预定</option> <option value="2" ';
$line=544;if(busCompany.orderStatus==2 ){
$out+='selected="selected" ';
$line=544;}
$out+='>预定中</option> <option value="3" ';
$line=545;if(busCompany.orderStatus==3 ){
$out+='selected="selected" ';
$line=545;}
$out+='>已预订</option> <option value="0" ';
$line=546;if(busCompany.orderStatus==0 ){
$out+='selected="selected" ';
$line=546;}
$out+='>无需预定</option> </select> </td> <td>';
$line=549;if(!busCompany.isConfirmAccount){
$out+=' <a class="cursor T-bus-action T-bus-askPrice">询价</a><a class="cursor T-bus-action T-bus-offerStatus"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-bus-action T-bus-bookingStatus ';
$line=551;if(busCompany.inquiryStatus == 1){
$out+='T-bus-booking';
$line=551;}
$out+='" ';
$line=551;if(busCompany.inquiryStatus !=1 ){
$out+='style="color: #bbb" ';
$line=551;}
$out+='>预订</a><a class="cursor T-bus-action T-bus-bookingView"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=552;$out+=$escape(busCompany.financialMoney);
$out+='" title="删除" data-entity-name="busCompany">删除</a> ';
$line=553;}
$out+=' </td> ';
$line=555;if(busCompany.offerId!=null){
$out+=' <!-- <td> <a class="cursor T-bus-SendOrder T-sendOrder-Area R-right T-action" data-value=\'';
$line=557;$out+=$escape(busCompany.qouteId);
$out+='\' data-right="1450001" data-entity-offerId=';
$line=557;$out+=$escape(busCompany.offerId);
$out+='> 发送订单 </a> </td> --> ';
$line=561;}
$out+=' </tr> ';
$line=563;}
$out+=' ';
$line=563;});
$out+=' </tbody> </table> </div> </div> </div> </div> ';
$line=570;}
$out+=' ';
$line=570;if(arrangeItemsStauts.restaurantStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_restaurant" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-cutlery"></i> 餐饮安排 <button class="btn btn-sm btn-success T-addResource T-addRestaurant" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=579;if(basicInfo.oldRestaurantRequire){
$out+=' <p class="requirementsPlan">原餐饮计划要求：';
$line=580;$out+=$escape(basicInfo.oldRestaurantRequire);
$out+='</p>';
$line=580;}
$out+=' ';
$line=580;if(basicInfo.nowRestaurantRequire){
$out+=' <p class="requirementsPlan">现餐饮计划要求：';
$line=581;$out+=$escape(basicInfo.nowRestaurantRequire);
$out+='</p>';
$line=581;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400"> <colgroup> <col style="width:110px"> <col style="width:50px;"> <col style="width:150px;"> <col style="width:160px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:150px;"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"><span class="necessary">*</span>餐厅</th> <th class="th-border">联系方式</th> <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> <th class="th-border" width="110px">操作</th> </tr> </thead> <tbody> ';
$line=615;$each(restaurantList,function(restaurant,$index){
$out+=' ';
$line=615;if(restaurant != "[]" || restaurant != null){
$out+=' <tr data-entity-arrangeid="';
$line=616;if(basicInfo.isArranged == 1){
$line=616;$out+=$escape(restaurant.id);
$line=616;}
$out+='" ';
$line=616;if(restaurant.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=616;}
$out+='> <td class="T-whichDaysContainer" value="';
$line=617;$out+=$escape(restaurant.whichDay);
$out+='" data-isconfirmaccount="';
$line=617;$out+=$escape(restaurant.isConfirmAccount);
$out+='"></td> <td> <select name="type" class="col-sm-12 ';
$line=619;if(!restaurant.isConfirmAccount){
$out+='T-restauranType';
$line=619;}
$out+='" maxlength="9" style="width:80px;" ';
$line=619;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=619;}
$out+='> ';
$line=620;if(restaurant.restaurantStandard == null){
$out+=' <option ';
$line=621;if(restaurant.type=="早餐" ){
$out+='selected="selected" ';
$line=621;}
$out+=' value="早餐">早餐</option> <option ';
$line=622;if(restaurant.type=="午餐" ){
$out+='selected="selected" ';
$line=622;}
$out+=' value="午餐">午餐</option> <option ';
$line=623;if(restaurant.type=="晚餐" ){
$out+='selected="selected" ';
$line=623;}
$out+=' value="晚餐">晚餐</option> ';
$line=624;}else{
$out+=' <option ';
$line=625;if(restaurant.restaurantStandard.type=="早餐" ){
$out+='selected="selected" ';
$line=625;}
$out+=' value="早餐">早餐</option> <option ';
$line=626;if(restaurant.restaurantStandard.type=="午餐" ){
$out+='selected="selected" ';
$line=626;}
$out+=' value="午餐">午餐</option> <option ';
$line=627;if(restaurant.restaurantStandard.type=="晚餐" ){
$out+='selected="selected" ';
$line=627;}
$out+=' value="晚餐">晚餐</option> ';
$line=628;}
$out+=' </select> </td> <td> <div class="col-sm-12"> <input type="text" name="restaurantName" maxlength="32" value="';
$line=633;if(restaurant.isChoose == 1){
$out+='-导游任选-';
$line=633;}else{
$line=633;if(restaurant.restaurant != null){
$line=633;$out+=$escape(restaurant.restaurant.name);
$line=633;}
$line=633;}
$out+='" class="col-sm-12 T-chooseRestaurant" data-propover="';
$line=633;$out+=$escape($helpers. stringify(restaurant.restaurantChooseArrangeList ));
$out+='" ';
$line=633;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=633;}
$out+='/> <input type="hidden" name="restaurantId" value="';
$line=634;if(restaurant.isChoose == 1){
$out+='-1';
$line=634;}else{
$line=634;$out+=$escape(restaurant.restaurantId);
$line=634;}
$out+='" /> <input type="hidden" name="optional" value="" /> ';
$line=636;if(!restaurant.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=640;}
$out+=' </div> </td> <td> <input type="text" name="managerName" readonly="readonly" value="';
$line=644;if(restaurant.isChoose == 1){
$out+='-';
$line=644;}else{
$line=644;if(restaurant.restaurant != null){
$line=644;$out+=$escape(restaurant.restaurant.managerName);
$out+=' ';
$line=644;$out+=$escape(restaurant.restaurant.mobileNumber);
$line=644;}
$line=644;}
$out+='" class="col-sm-12" /> </td> <td> <input type="text" name="price" value="';
$line=647;$out+=$escape(restaurant.price);
$out+='" class="col-sm-12 ';
$line=647;if(!restaurant.isConfirmAccount){
$out+='T-typeNameChoose';
$line=647;}
$out+=' F-float F-money" ';
$line=647;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=647;}
$out+='/> <input type="hidden" name="restaurantStandardId" value="0" /> </td> <td> <input type="text" name="memberCount" maxlength="8" value="';
$line=651;if(restaurant.memberCount || restaurant.memberCount == 0){
$line=651;$out+=$escape(restaurant.memberCount);
$line=651;}else{
$line=651;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=651;}
$out+='" class="col-sm-12 F-float F-count" style="width: 60px;" ';
$line=651;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=651;}
$out+='/> </td> <td> <input type="text" name="reduceMoney" maxlength="9" value="';
$line=654;$out+=$escape(restaurant.reduceMoney);
$out+='" class="col-sm-12 price F-float F-money" style="width: 60px;" ';
$line=654;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=654;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" value="';
$line=657;$out+=$escape(restaurant.needPayMoney);
$out+='" class="col-sm-12 F-float F-money" style="width: 60px;" /> </td> <td><div class="inline-flex">';
$line=659;$out+=$string($helpers. getPlanPreTypeOption(restaurant.preType ,  restaurant.isConfirmAccount));
$out+=' <input type="text" name="prePayMoney" maxlength="9" value="';
$line=660;$out+=$escape(restaurant.prePayMoney);
$out+='" class="price F-float F-money" style="width: 60px;" ';
$line=660;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=660;}
$out+='/></div> </td> <td><div class="inline-flex">';
$line=662;$out+=$string($helpers. getPlanPayTypeOption(restaurant.payType ,  restaurant.isConfirmAccount));
$out+=' <input name="guidePayMoney" type="text" value="';
$line=663;if(restaurant.payType == 2){
$line=663;$out+=$escape(restaurant.signMoney);
$line=663;}else{
$line=663;$out+=$escape(restaurant.guidePayMoney);
$line=663;}
$out+='" maxlength="9" class="F-float F-money" style="width: 60px;" ';
$line=663;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=663;}
$out+='/></div> </td> <td> <input name="remark" type="text" value="';
$line=666;$out+=$escape(restaurant.remark);
$out+='" maxlength="500" class="col-sm-12 min-w150" ';
$line=666;if(restaurant.isConfirmAccount){
$out+='disabled';
$line=666;}
$out+='/> </td> <td>';
$line=668;if(!restaurant.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=669;$out+=$escape(restaurant.financialMoney);
$out+='" data-entity-name="restaurant" title="删除"> 删除 </a> ';
$line=672;}
$out+=' </td> </tr> ';
$line=675;}
$out+=' ';
$line=675;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=681;}
$out+=' ';
$line=681;if(arrangeItemsStauts.hotelStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_hotel" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-hotel"></i> 酒店安排 <button class="btn btn-sm btn-success T-addResource T-addHotel" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> <button class="btn btn-sm btn-success pull-right mar-l-15 T-oneClick T-booking"> 一键预订 </button> <button class="btn btn-sm btn-success pull-right mar-l-15 T-oneClick T-asking"> 一键询价 </button> </h5> ';
$line=697;if(basicInfo.oldHotelRequire){
$out+=' <p class="requirementsPlan">原酒店计划要求：';
$line=698;$out+=$escape(basicInfo.oldHotelRequire);
$out+='</p>';
$line=698;}
$out+=' ';
$line=698;if(basicInfo.nowHotelRequire){
$out+=' <p class="requirementsPlan">现酒店计划要求：';
$line=699;$out+=$escape(basicInfo.nowHotelRequire);
$out+='</p>';
$line=699;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1500"> <colgroup> <col style="width:110px"> <col style="width:90px;"> <col style="width:150px;"> <col style="width:160px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:150px;"> <col style="min-width: 100px;"> <col style="width:80px;"> <col style="width:110px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系方式</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> <th class="th-border">状态</th> <th class="th-border" style="width: 170px;">操作</th> </tr> </thead> <tbody> ';
$line=737;$each(hotelList,function(hotel,$index){
$out+=' ';
$line=737;if(hotel != "[]" || hotel != null){
$out+=' <tr ';
$line=738;if(hotel.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=738;}
$out+=' data-entity-arrangeid="';
$line=738;if(basicInfo.isArranged == 1){
$line=738;$out+=$escape(hotel.id);
$line=738;}
$out+='" data-entity-hotelId="';
$line=738;$out+=$escape(hotel.hotel.id);
$out+='" data-entity-roomId="';
$line=738;if(!!hotel.hotelRoom){
$line=738;$out+=$escape(hotel.hotelRoom.id);
$out+=' ';
$line=738;}
$out+='" data-entity-offerId="';
$line=738;$out+=$escape(hotel.offerId);
$out+='" data-qouteId="';
$line=738;if(hotel.qouteId!=null){
$line=738;$out+=$escape(hotel.qouteId);
$line=738;}
$out+='"> <td class="T-whichDaysContainer T-whichDays" value="';
$line=739;$out+=$escape(hotel.whichDay);
$out+='" data-qouteId="';
$line=739;if(hotel.qouteId!=null){
$line=739;$out+=$escape(hotel.qouteId);
$line=739;}
$out+='" data-isconfirmaccount="';
$line=739;$out+=$escape(hotel.isConfirmAccount);
$out+='"></td> <td> <select class="col-sm-12 no-padding tripPlanHotelStar T-tripPlanHotelStar" ';
$line=741;if(hotel.isConfirmAccount || hotel.qouteId!=null){
$out+='disabled="disabled" ';
$line=741;}
$out+=' style="width: 80px; ';
$line=741;if(hotel.qouteId!=null){
$out+='background:#EFEBEB';
$line=741;}
$out+='"> ';
$line=742;if(hotel.hotel !=null){
$out+=' <option ';
$line=743;if(hotel.hotel.level==0 ){
$out+='selected="selected" ';
$line=743;}
$out+=' value="">--全部--</option> <option ';
$line=744;if(hotel.hotel.level==1 ){
$out+='selected="selected" ';
$line=744;}
$out+=' value="1">三星以下</option> <option ';
$line=745;if(hotel.hotel.level==2 ){
$out+='selected="selected" ';
$line=745;}
$out+=' value="2">三星</option> <option ';
$line=746;if(hotel.hotel.level==3 ){
$out+='selected="selected" ';
$line=746;}
$out+=' value="3">准四星</option> <option ';
$line=747;if(hotel.hotel.level==4 ){
$out+='selected="selected" ';
$line=747;}
$out+=' value="4">四星</option> <option ';
$line=748;if(hotel.hotel.level==5 ){
$out+='selected="selected" ';
$line=748;}
$out+=' value="5">准五星</option> <option ';
$line=749;if(hotel.hotel.level==6 ){
$out+='selected="selected" ';
$line=749;}
$out+=' value="6">五星</option> <option ';
$line=750;if(hotel.hotel.level==7 ){
$out+='selected="selected" ';
$line=750;}
$out+=' value="7">五星以上</option> ';
$line=751;}
$out+=' </select> <input type="hidden" name="id" value="';
$line=753;if(basicInfo.isArranged == 1){
$line=753;$out+=$escape(hotel.id);
$line=753;}
$out+='" /> </td> <td> <div class="col-sm-12"> <input type="text" class="col-sm-12 ';
$line=757;if(!hotel.isConfirmAccount){
$out+='T-chooseHotel';
$line=757;}
$out+='" name="name" value="';
$line=757;if(hotel.hotel !=null){
$line=757;$out+=$escape(hotel.hotel.name);
$line=757;}
$out+='" ';
$line=757;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=757;}
$out+=' /> <input type="hidden" name="hotelId" value="';
$line=758;if(hotel.hotel !=null){
$line=758;$out+=$escape(hotel.hotel.id);
$line=758;}
$out+='"> ';
$line=759;if(!hotel.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=763;}
$out+=' </div> </td> <td> <input type="text" class="col-sm-12" name="managerName" readonly="readonly" value="';
$line=767;if(hotel.hotel !=null){
$line=767;$out+=$escape(hotel.hotel.managerName);
$out+=' ';
$line=767;$out+=$escape(hotel.hotel.mobileNumber);
$line=767;}
$out+='" /> </td> <td> <input type="text" class="col-sm-12 ';
$line=770;if(!hotel.isConfirmAccount){
$out+='T-chooseHotelRoom';
$line=770;}
$out+='" name="hotelRoom" value="';
$line=770;if(hotel.hotelRoom !=null){
$line=770;$out+=$escape(hotel.hotelRoom.type);
$line=770;}
$out+='" ';
$line=770;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=770;}
$out+='/> <input type="hidden" name="hotelRoomId" value="';
$line=771;if(hotel.hotelRoom !=null){
$line=771;$out+=$escape(hotel.hotelRoom.id);
$line=771;}
$out+='"> </td> <td> <input type="text" class="col-sm-12 price F-float F-money" name="price" maxlength="8" value="';
$line=774;$out+=$escape(hotel.price);
$out+='" style="width: 60px;" maxlength="9" ';
$line=774;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=774;}
$out+='/> </td> <td> <input type="text" class="col-sm-12 F-float F-count" name="memberCount" maxlength="8" value="';
$line=777;if(hotel.memberCount || hotel.memberCount == 0){
$line=777;$out+=$escape(hotel.memberCount);
$line=777;}else{
$line=777;$out+=$escape((basicInfo.touristAdultCount + basicInfo.touristChildCount)/2);
$line=777;}
$out+='" style="width: 60px;" ';
$line=777;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=777;}
$out+='/> </td> <td> <input type="text" class="col-sm-12 price F-float F-money" name="reduceMoney" maxlength="8" value="';
$line=780;$out+=$escape(hotel.reduceMoney);
$out+='" style="width: 60px;" ';
$line=780;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=780;}
$out+='/> </td> <td> <input type="text" class="col-sm-12 F-float F-money" readonly="readonly" name="needPayMoney" value="';
$line=783;$out+=$escape(hotel.needPayMoney);
$out+='" style="width: 60px;" /> </td> <td><div class="inline-flex">';
$line=785;$out+=$string($helpers. getPlanPreTypeOption(hotel.preType ,  hotel.isConfirmAccount));
$out+=' <input type="text" class="price F-float F-money" name="prePayMoney" maxlength="9" value="';
$line=786;$out+=$escape(hotel.prePayMoney);
$out+='" style="width: 60px;" ';
$line=786;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=786;}
$out+='/></div> </td> <td><div class="inline-flex">';
$line=788;$out+=$string($helpers. getPlanPayTypeOption(hotel.payType ,  hotel.isConfirmAccount));
$out+=' <input type="text" name="guidePayMoney" class="F-float F-money" value="';
$line=789;if(hotel.payType == 2){
$line=789;$out+=$escape(hotel.signMoney);
$line=789;}else{
$line=789;$out+=$escape(hotel.guidePayMoney);
$line=789;}
$out+='" style="width: 60px;" maxlength="9" ';
$line=789;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=789;}
$out+='/></div> </td> <td> <input type="text" name="remark" class="col-sm-12 min-w150" value="';
$line=792;$out+=$escape(hotel.remark);
$out+='" maxlength="500" ';
$line=792;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=792;}
$out+='/> </td> <td> <select name="orderStatus" ';
$line=795;if(hotel.isConfirmAccount){
$out+='disabled="disabled" ';
$line=795;}
$out+='> <option ';
$line=796;if(hotel.orderStatus==1 ){
$out+='selected="selected" ';
$line=796;}
$out+=' value="1">未预定</option> <option ';
$line=797;if(hotel.orderStatus==2 ){
$out+='selected="selected" ';
$line=797;}
$out+=' value="2">预定中</option> <option ';
$line=798;if(hotel.orderStatus==3 ){
$out+='selected="selected" ';
$line=798;}
$out+=' value="3">已预订</option> <option ';
$line=799;if(hotel.orderStatus==0 ){
$out+='selected="selected" ';
$line=799;}
$out+=' value="0">无需预订</option> </select> </td> <td>';
$line=802;if(!hotel.isConfirmAccount){
$out+=' <a class="cursor T-hotel-action T-hotel-askPrice">询价</a><a class="cursor T-hotel-action T-hotel-offerStatus"><i class="ace-icon fa fa-search"></i></a> <a class="cursor T-hotel-action T-hotel-bookingStatus ';
$line=804;if(hotel.inquiryStatus == 1){
$out+='T-hotel-booking';
$line=804;}
$out+='" ';
$line=804;if(hotel.inquiryStatus !=1 ){
$out+='style="color: #bbb" ';
$line=804;}
$out+='>预订</a><a class="cursor T-hotel-action T-hotel-bookingView"><i class="ace-icon fa fa-search"></i></a><a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=804;$out+=$escape(hotel.financialMoney);
$out+='" data-entity-name="hotel">删除</a> ';
$line=805;}
$out+=' </td> <!-- <td> ';
$line=808;if(hotel.offerId!=null){
$out+=' <a class="cursor T-Hotel-SendOrder T-sendOrder-Area R-right T-action" data-value="';
$line=809;$out+=$escape(hotel.qouteId);
$out+='" data-right="1450001" data-entity-offerId=';
$line=809;$out+=$escape(hotel.offerId);
$out+='>发送订单</a> ';
$line=810;}
$out+=' </td> --> </tr> ';
$line=813;}
$out+=' ';
$line=813;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=819;}
$out+=' ';
$line=819;if(arrangeItemsStauts.scenicStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_scenic" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-tree"></i> 景区安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addScenic"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=828;if(basicInfo.oldScenicRequire){
$out+=' <p class="requirementsPlan">原景区计划要求：';
$line=829;$out+=$escape(basicInfo.oldScenicRequire);
$out+='</p>';
$line=829;}
$out+=' ';
$line=829;if(basicInfo.nowScenicRequire){
$out+=' <p class="requirementsPlan">现景区计划要求：';
$line=830;$out+=$escape(basicInfo.nowScenicRequire);
$out+='</p>';
$line=830;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400"> <colgroup> <col style="width:110px"> <col style="width:90px;"> <col style="width:150px;"> <col style="width:100px;"> <col style="width:80px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:110px;"> <col style="width:60px;"> <col style="width:60px;"> <col style="width:150px;"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border">时间</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项目</th> <th class="th-border">时长</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">订单号</th> <th class="th-border">应付</th> <th class="th-border">预付款</th> <th class="th-border">计划导付</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ';
$line=868;$each(scenicList,function(scenic,$index){
$out+=' ';
$line=868;if(scenic != "[]" || scenic != null){
$out+=' <tr data-entity-arrangeid="';
$line=869;if(basicInfo.isArranged == 1){
$line=869;$out+=$escape(scenic.id);
$line=869;}
$out+='" ';
$line=869;if(scenic.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=869;}
$out+='> <td class="T-whichDaysContainer" value="';
$line=870;$out+=$escape(scenic.whichDay);
$out+='" data-isconfirmaccount="';
$line=870;$out+=$escape(scenic.isConfirmAccount);
$out+='"></td> <td> <select name="tourTime" class="col-sm-12 no-padding" style="width: 75px;" ';
$line=872;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=872;}
$out+='> <option ';
$line=873;if(scenic.tourTime=="全天" ){
$out+='selected="selected" ';
$line=873;}
$out+=' value="全天">全天</option> <option ';
$line=874;if(scenic.tourTime=="上午" ){
$out+='selected="selected" ';
$line=874;}
$out+=' value="上午">上午</option> <option ';
$line=875;if(scenic.tourTime=="下午" ){
$out+='selected="selected" ';
$line=875;}
$out+=' value="下午">下午</option> </select> </td> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="';
$line=880;if(basicInfo.isArranged == 1){
$line=880;$out+=$escape(scenic.id);
$line=880;}
$out+='" /> <input type="text" name="name" class="col-sm-12 ';
$line=881;if(!scenic.isConfirmAccount){
$out+='T-chooseScenic';
$line=881;}
$out+='" value="';
$line=881;if(scenic.scenic !=null){
$line=881;$out+=$escape(scenic.scenic.name);
$line=881;}
$out+='" ';
$line=881;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=881;}
$out+='/> <input type="hidden" name="scenicId" value="';
$line=882;if(scenic.scenic !=null){
$line=882;$out+=$escape(scenic.scenic.id);
$line=882;}
$out+='" /> ';
$line=883;if(!scenic.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addScenicResource R-right" data-right="1060002" title="添加景区"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=887;}
$out+=' </div> </td> <td> <input type="text" name="chargingProjects" class="col-sm-12 ';
$line=891;if(!scenic.isConfirmAccount){
$out+='T-chooseScenicItem';
$line=891;}
$out+='" value="';
$line=891;if(scenic.scenicItem !=null){
$line=891;$out+=$escape(scenic.scenicItem.name);
$line=891;}
$out+='" ';
$line=891;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=891;}
$out+='/> <input type="hidden" name="scenicItemId" value="';
$line=892;if(scenic.scenicItem !=null){
$line=892;$out+=$escape(scenic.scenicItem.id);
$line=892;}
$out+='" /> </td> <td> <input type="text" name="tourDuration" maxlength="3" class="col-sm-12" value="';
$line=895;$out+=$escape(scenic.tourDuration);
$out+='" style="width: 60px;" ';
$line=895;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=895;}
$out+='/> </td> <td> <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="';
$line=898;$out+=$escape(scenic.price);
$out+='" style="width: 60px;" ';
$line=898;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=898;}
$out+='/> </td> <td> <input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="';
$line=901;if(scenic.memberCount || scenic.memberCount == 0){
$line=901;$out+=$escape(scenic.memberCount);
$line=901;}else{
$line=901;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=901;}
$out+='" style="width: 60px;" ';
$line=901;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=901;}
$out+='/> </td> <td> <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="8" value="';
$line=904;$out+=$escape(scenic.reduceMoney);
$out+='" style="width: 60px;" ';
$line=904;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=904;}
$out+='/> </td> <td> <input type="text" name="orderNumber" maxlength="20" class="col-sm-12" value="';
$line=907;$out+=$escape(scenic.orderNumber);
$out+='" ';
$line=907;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=907;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="';
$line=910;$out+=$escape(scenic.needPayMoney);
$out+='" style="width: 60px;" /> </td> <td><div class="inline-flex">';
$line=912;$out+=$string($helpers. getPlanPreTypeOption(scenic.preType ,  scenic.isConfirmAccount,true));
$out+=' <input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9" value="';
$line=913;$out+=$escape(scenic.prePayMoney);
$out+='" style="width: 60px;" ';
$line=913;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=913;}
$out+='/></div> </td> <td><div class="inline-flex"> ';
$line=916;$out+=$string($helpers. getPlanPayTypeOption(scenic.payType ,  scenic.isConfirmAccount));
$out+=' <input name="guidePayMoney" type="text" class="F-float F-money" value="';
$line=917;if(scenic.payType == 2){
$line=917;$out+=$escape(scenic.signMoney);
$line=917;}else{
$line=917;$out+=$escape(scenic.guidePayMoney);
$line=917;}
$out+='" maxlength="9" style="width: 60px;" ';
$line=917;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=917;}
$out+='/></div> </td> <td> <input name="remark" type="text" class="col-sm-12 min-w150" value="';
$line=920;$out+=$escape(scenic.remark);
$out+='" maxlength="500" ';
$line=920;if(scenic.isConfirmAccount){
$out+='disabled="disabled"';
$line=920;}
$out+='/> </td> <td>';
$line=922;if(!scenic.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=923;$out+=$escape(scenic.financialMoney);
$out+='" data-entity-name="scenic" title="删除"> 删除 </a> ';
$line=926;}
$out+=' </td> </tr> ';
$line=929;}
$out+=' ';
$line=929;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=935;}
$out+=' ';
$line=935;if(arrangeItemsStauts.shopStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_shop" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-shopping-cart"></i> 购物安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addShop"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=944;if(basicInfo.oldShopRequire){
$out+=' <p class="requirementsPlan">原购物计划要求：';
$line=945;$out+=$escape(basicInfo.oldShopRequire);
$out+='</p>';
$line=945;}
$out+=' ';
$line=945;if(basicInfo.nowShopRequire){
$out+=' <p class="requirementsPlan">现购物计划要求：';
$line=946;$out+=$escape(basicInfo.nowShopRequire);
$out+='</p>';
$line=946;}
$out+=' <table class="table table-striped table-bordered table-hover table-tripPlan-container"> <colgroup> <col style="width:110px"> <col style="width:150px;"> <col style="width:90px;"> <col style="width:110px;"> <col style="width:160px;"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border"><span class="necessary">*</span>购物店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">商品名</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ';
$line=969;$each(shopList,function(shop,$index){
$out+=' ';
$line=969;if(shop != "[]" || shop != null){
$out+=' <tr data-entity-arrangeid="';
$line=970;if(basicInfo.isArranged == 1){
$line=970;$out+=$escape(shop.id);
$line=970;}
$out+='" ';
$line=970;if(shop.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=970;}
$out+='> <td class="T-whichDaysContainer" value="';
$line=971;$out+=$escape(shop.whichDay);
$out+='" data-isconfirmaccount="';
$line=971;$out+=$escape(shop.isConfirmAccount);
$out+='"></td> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="';
$line=974;if(basicInfo.isArranged == 1){
$line=974;$out+=$escape(shop.id);
$line=974;}
$out+='" /> <input type="text" name="name" class="col-sm-12 ';
$line=975;if(!shop.isConfirmAccount){
$out+='T-chooseShop';
$line=975;}
$out+='" value="';
$line=975;if(shop.shop != null){
$line=975;$out+=$escape(shop.shop.name);
$line=975;}
$out+='" ';
$line=975;if(shop.isConfirmAccount){
$out+='disabled="disabled"';
$line=975;}
$out+='/> <input type="hidden" name="shopId" value="';
$line=976;if(shop.shop != null){
$line=976;$out+=$escape(shop.shop.id);
$line=976;}
$out+='" /> ';
$line=977;if(!shop.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=981;}
$out+=' </div> </td> <td> <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="';
$line=985;if(shop.shop != null){
$line=985;$out+=$escape(shop.shop.managerName);
$line=985;}
$out+='" /> </td> <td> <input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="';
$line=988;if(shop.shop != null){
$line=988;$out+=$escape(shop.shop.mobileNumber);
$line=988;}
$out+='" /> </td> <td> ';
$line=991;if(!!shop.shopArrangeItemSet){
$out+=' ';
$line=991;if(shop.shopArrangeItemSet.length > 0){
$out+=' ';
$line=991;$each(shop.shopArrangeItemSet,function(rs,index){
$out+=' <div data-entity-id="';
$line=992;$out+=$escape(rs.id);
$out+='" ';
$line=992;if(index> 0){
$out+='class="mar-t-10"';
$line=992;}
$out+='> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="';
$line=993;if(rs.shopPolicy != null){
$line=993;$out+=$escape(rs.shopPolicy.name);
$line=993;}
$out+='" ';
$line=993;if(shop.isConfirmAccount){
$out+='disabled="disabled"';
$line=993;}
$out+=' /> <input type="hidden" name="shopPolicyId" value="';
$line=994;if(rs.shopPolicy != null){
$line=994;$out+=$escape(rs.shopPolicy.id);
$line=994;}
$out+='"/> ';
$line=995;if(!shop.isConfirmAccount){
$out+='<button class="btn ';
$line=995;if( index == 0){
$out+='btn-success';
$line=995;}else{
$out+='btn-danger';
$line=995;}
$out+=' btn-sm btn-white T-shopPolicy ';
$line=995;if( index == 0){
$out+='T-add';
$line=995;}else{
$out+='T-del';
$line=995;}
$out+='"> <i class="ace-icon fa ';
$line=995;if( index == 0){
$out+='fa-plus';
$line=995;}else{
$out+='fa-minus';
$line=995;}
$out+=' bigger-110 icon-only"></i></button>';
$line=995;}
$out+=' </div> ';
$line=997;});
$out+=' ';
$line=997;}else{
$out+=' <div data-entity-id=""> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" ';
$line=999;if(shop.isConfirmAccount){
$out+='disabled="disabled"';
$line=999;}
$out+='/> <input type="hidden" name="shopPolicyId" value="" /> ';
$line=1001;if(!shop.isConfirmAccount){
$out+='<button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>';
$line=1001;}
$out+=' </div> ';
$line=1003;}
$out+=' ';
$line=1003;}else{
$out+=' <div data-entity-id=""> <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" ';
$line=1005;if(shop.isConfirmAccount){
$out+='disabled="disabled"';
$line=1005;}
$out+='/> <input type="hidden" name="shopPolicyId" value="" /> ';
$line=1007;if(!shop.isConfirmAccount){
$out+='<button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>';
$line=1007;}
$out+=' </div> ';
$line=1009;}
$out+=' </td> <td> <input type="text" name="remark" class="col-sm-12 min-w150" value="';
$line=1012;$out+=$escape(shop.remark);
$out+='" maxlength="500" ';
$line=1012;if(shop.isConfirmAccount){
$out+='disabled="disabled"';
$line=1012;}
$out+='/> </td> <td>';
$line=1014;if(!shop.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-name="shop" data-entity-ispayed="';
$line=1015;$out+=$escape(shop.financialMoney);
$out+='" title="删除"> 删除 </a> ';
$line=1018;}
$out+=' </td> </tr> ';
$line=1021;}
$out+=' ';
$line=1021;});
$out+=' </tbody> </table> </div> </div> ';
$line=1026;}
$out+=' ';
$line=1026;if(arrangeItemsStauts.selfPayStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_selfPay" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-credit-card"></i> 自费安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addSelfPay"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=1035;if(basicInfo.oldSelfPayRequire){
$out+=' <p class="requirementsPlan">原自费计划要求：';
$line=1036;$out+=$escape(basicInfo.oldSelfPayRequire);
$out+='</p>';
$line=1036;}
$out+=' ';
$line=1036;if(basicInfo.nowSelfPayRequire){
$out+=' <p class="requirementsPlan">现自费计划要求：';
$line=1037;$out+=$escape(basicInfo.nowSelfPayRequire);
$out+='</p>';
$line=1037;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400"> <colgroup> <col style="width:110px"> <col style="width:150px;"> <col style="width:150px;"> <col style="width:160px;"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:150px"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th style="width:100px;"><span class="necessary">*</span>日期</th> <th><span class="necessary">*</span>自费商家</th> <th>自费项目</th> <th>联系方式</th> <th style="width: 77px;">单价</th> <th style="width: 77px;">底价</th> <th style="width: 77px;">数量</th> <th style="width: 77px;">优惠</th> <th style="width: 77px;">应付</th> <th style="width: 77px;">预付款</th> <th style="width: 77px;">计划导付</th> <th>备注</th> <th>操作</th> </tr> </thead> <tbody> ';
$line=1073;$each(selfPayList,function(selfPay,$index){
$out+=' ';
$line=1073;if(selfPay != "[]" || selfPay != null){
$out+=' <tr data-entity-arrangeid="';
$line=1074;if(basicInfo.isArranged == 1){
$line=1074;$out+=$escape(selfPay.id);
$line=1074;}
$out+='" ';
$line=1074;if(selfPay.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=1074;}
$out+='> <td class="T-whichDaysContainer" value="';
$line=1075;$out+=$escape(selfPay.whichDay);
$out+='" data-isconfirmaccount="';
$line=1075;$out+=$escape(selfPay.isConfirmAccount);
$out+='"></td> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="';
$line=1078;if(basicInfo.isArranged == 1){
$line=1078;$out+=$escape(selfPay.id);
$line=1078;}
$out+='" /> <input type="text" name="name" class="col-sm-12 T-chooseSelfPay" value="';
$line=1079;if(selfPay.selfPay != null){
$line=1079;$out+=$escape(selfPay.selfPay.name);
$line=1079;}
$out+='" ';
$line=1079;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1079;}
$out+='/> <input type="hidden" name="selfPayId" value="';
$line=1080;if(selfPay.selfPay != null){
$line=1080;$out+=$escape(selfPay.selfPay.id);
$line=1080;}
$out+='" /> ';
$line=1081;if(!selfPay.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=1085;}
$out+=' </div> </td> <td> <input type="hidden" name="selfPayItemId" value="';
$line=1089;if(selfPay.selfPayItem !=null){
$line=1089;$out+=$escape(selfPay.selfPayItem.id);
$line=1089;}
$out+='" /> <input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="';
$line=1090;if(selfPay.selfPayItem !=null){
$line=1090;$out+=$escape(selfPay.selfPayItem.name);
$line=1090;}
$out+='" ';
$line=1090;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1090;}
$out+='/> </td> <td> <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="';
$line=1093;if(selfPay.selfPay != null){
$line=1093;$out+=$escape(selfPay.selfPay.managerName);
$out+=' ';
$line=1093;$out+=$escape(selfPay.selfPay.mobileNumber);
$line=1093;}
$out+='" ';
$line=1093;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1093;}
$out+='/> </td> <td> <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="';
$line=1096;if(!!selfPay.marketPrice){
$line=1096;$out+=$escape(selfPay.marketPrice);
$line=1096;}else{
$line=1096;$out+=$escape(selfPay.quotePrice);
$line=1096;}
$out+='" style="width: 60px;" ';
$line=1096;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1096;}
$line=1096;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1096;}
$out+='/> </td> <td> <input type="text" name="lowestPrice" class="col-sm-12 price F-float F-money" maxlength="8" value="';
$line=1099;$out+=$escape(selfPay.price);
$out+='" style="width: 60px;" ';
$line=1099;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1099;}
$out+='/> </td> <td> <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="';
$line=1102;if(selfPay.memberCount || selfPay.memberCount == 0){
$line=1102;$out+=$escape(selfPay.memberCount);
$line=1102;}else{
$line=1102;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=1102;}
$out+='" maxlength="8" style="width: 60px;" ';
$line=1102;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1102;}
$out+='/> </td> <td> <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="';
$line=1105;$out+=$escape(selfPay.reduceMoney);
$out+='" maxlength="9" style="width: 60px;" ';
$line=1105;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1105;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="';
$line=1108;$out+=$escape(selfPay.needPayMoney);
$out+='" style="width: 60px;" /> </td> <td><div class="inline-flex">';
$line=1110;$out+=$string($helpers. getPlanPreTypeOption(selfPay.preType ,  selfPay.isConfirmAccount));
$out+=' <input type="text" name="prePayMoney" class="price F-float F-money" value="';
$line=1111;$out+=$escape(selfPay.prePayMoney);
$out+='" style="width: 60px;" maxlength="9" ';
$line=1111;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1111;}
$out+='/></div> </td> <td><div class="inline-flex">';
$line=1113;$out+=$string($helpers. getPlanPayTypeOption(selfPay.payType ,  selfPay.isConfirmAccount));
$out+=' <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="';
$line=1114;if(selfPay.payType == 2){
$line=1114;$out+=$escape(selfPay.signMoney);
$line=1114;}else{
$line=1114;$out+=$escape(selfPay.guidePayMoney);
$line=1114;}
$out+='" maxlength="9" ';
$line=1114;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1114;}
$out+='/></div> </td> <td> <input type="text" name="remark" class="col-sm-12 min-w150" value="';
$line=1117;$out+=$escape(selfPay.remark);
$out+='" maxlength="500" ';
$line=1117;if(selfPay.isConfirmAccount){
$out+='disabled="disabled"';
$line=1117;}
$out+='/> </td> <td>';
$line=1119;if(!selfPay.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=1120;$out+=$escape(selfPay.financialMoney);
$out+='" data-entity-name="selfpay" title="删除"> 删除 </a> ';
$line=1123;}
$out+=' </td> </tr> ';
$line=1126;}
$out+=' ';
$line=1126;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=1132;}
$out+=' ';
$line=1132;if(arrangeItemsStauts.ticketStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_ticket" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-car"></i> 票务安排 <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addTicket"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> ';
$line=1141;if(basicInfo.oldTicketRequire){
$out+=' <p class="requirementsPlan">原票务计划要求：';
$line=1142;$out+=$escape(basicInfo.oldTicketRequire);
$out+='</p>';
$line=1142;}
$out+=' ';
$line=1142;if(basicInfo.nowTicketRequire){
$out+=' <p class="requirementsPlan">现票务计划要求：';
$line=1143;$out+=$escape(basicInfo.nowTicketRequire);
$out+='</p>';
$line=1143;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1500"> <colgroup> <col style="width:120px"> <col style="width:90px;"> <col style="width:120px;"> <col style="width:120px;"> <col style="width:100px;"> <col style="width:130px"> <col style="width:70px"> <col style="width:70px"> <col style="width:60px"> <col style="width:70px"> <col style="width:80px"> <col style="width:80px"> <col style="width:150px"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">班次</th> <th class="th-border"><span class="necessary">*</span>时间</th> <th class="th-border">座位级别</th> <th class="th-border" style="width: 77px;">单价</th> <th class="th-border" style="width: 77px;">数量</th> <th class="th-border" style="width: 77px;">优惠</th> <th class="th-border" style="width: 77px;">应付</th> <th class="th-border" style="width: 77px;">预付款</th> <th class="th-border" style="width: 77px;">计划导付</th> <th class="th-border">备注</th> <th class="th-border" style="width: 100px">操作</th> </tr> </thead> <tbody> ';
$line=1183;$each(ticketList,function(ticket,$index){
$out+=' ';
$line=1183;if(ticket != "[]" || ticket != null){
$out+=' <tr data-entity-arrangeid="';
$line=1184;if(basicInfo.isArranged == 1){
$line=1184;$out+=$escape(ticket.id);
$line=1184;}
$out+='" ';
$line=1184;if(ticket.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=1184;}
$out+='> <td> <div class="col-sm-12"> <input type="hidden" name="id" value="';
$line=1187;if(basicInfo.isArranged == 1){
$line=1187;$out+=$escape(ticket.id);
$line=1187;}
$out+='" /> <input type="text" name="name" class="col-sm-12 T-chooseTicket" value="';
$line=1188;if(ticket.ticket != null){
$line=1188;$out+=$escape(ticket.ticket.name);
$line=1188;}
$out+='" ';
$line=1188;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1188;}
$out+='/> <input type="hidden" name="ticketId" value="';
$line=1189;if(ticket.ticket != null){
$line=1189;$out+=$escape(ticket.ticket.id);
$line=1189;}
$out+='"> ';
$line=1190;if(!ticket.isConfirmAccount){
$out+=' <span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> ';
$line=1194;}
$out+=' </div> </td> <td> <select name="type" class="col-sm-12 no-padding" style="width:70px;" ';
$line=1198;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1198;}
$out+='> <option ';
$line=1199;if(ticket.type=="1" ){
$out+='selected="selected" ';
$line=1199;}
$out+=' value="1">机票</option> <option ';
$line=1200;if(ticket.type=="2" ){
$out+='selected="selected" ';
$line=1200;}
$out+=' value="2">汽车票</option> <option ';
$line=1201;if(ticket.type=="3" ){
$out+='selected="selected" ';
$line=1201;}
$out+=' value="3">火车票</option> <option ';
$line=1202;if(ticket.type=="4" ){
$out+='selected="selected" ';
$line=1202;}
$out+=' value="4">轮船票</option> </select> </td> <td> <input type="text" name="startingCity" maxlength="32" class="col-sm-12" value="';
$line=1206;$out+=$escape(ticket.startingCity);
$out+='" ';
$line=1206;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1206;}
$out+='/> </td> <td> <input type="text" name="arriveCity" maxlength="32" class="col-sm-12" value="';
$line=1209;$out+=$escape(ticket.arriveCity);
$out+='" ';
$line=1209;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1209;}
$out+='/> </td> <td> <input type="text" name="shift" maxlength="9" class="col-sm-12" value="';
$line=1212;$out+=$escape(ticket.shift);
$out+='" ';
$line=1212;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1212;}
$out+='/> </td> <td> <input type="text" name="startTime" class="col-sm-12 T-dateTimePicker" value="';
$line=1215;$out+=$escape($helpers. dateTimeHSFormat(ticket.startTime ));
$out+='" ';
$line=1215;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1215;}
$out+='/> </td> <td> <input type="text" name="seatLevel" maxlength="32" value="';
$line=1218;$out+=$escape(ticket.seatLevel);
$out+='" class="col-sm-12" ';
$line=1218;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1218;}
$out+='/> </td> <td> <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="';
$line=1221;$out+=$escape(ticket.price);
$out+='" ';
$line=1221;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1221;}
$out+='/> </td> <td> <input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="';
$line=1224;if(ticket.memberCount || ticket.memberCount == 0){
$line=1224;$out+=$escape(ticket.memberCount);
$line=1224;}else{
$line=1224;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=1224;}
$out+='" ';
$line=1224;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1224;}
$out+='/> </td> <td> <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9" value="';
$line=1227;$out+=$escape(ticket.reduceMoney);
$out+='" ';
$line=1227;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1227;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="';
$line=1230;$out+=$escape(ticket.needPayMoney);
$out+='" /> </td> <td><div class="inline-flex">';
$line=1232;$out+=$string($helpers. getPlanPreTypeOption(ticket.preType ,  ticket.isConfirmAccount));
$out+=' <input type="text" name="prePayMoney" class="price F-float F-money w-80" maxlength="9" value="';
$line=1233;$out+=$escape(ticket.prePayMoney);
$out+='" ';
$line=1233;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1233;}
$out+='/></div> </td> <td><div class="inline-flex">';
$line=1235;$out+=$string($helpers. getPlanPayTypeOption(ticket.payType ,  ticket.isConfirmAccount));
$out+=' <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="';
$line=1236;if(ticket.payType == 2){
$line=1236;$out+=$escape(ticket.signMoney);
$line=1236;}else{
$line=1236;$out+=$escape(ticket.guidePayMoney);
$line=1236;}
$out+='" maxlength="9" ';
$line=1236;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1236;}
$out+='/></div> </td> <td> <input type="text" name="remark" class="col-sm-12 min-w150" value="';
$line=1239;$out+=$escape(ticket.remark);
$out+='" maxlength="500" ';
$line=1239;if(ticket.isConfirmAccount){
$out+='disabled="disabled"';
$line=1239;}
$out+='/> </td> <td>';
$line=1241;if(!ticket.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=1242;$out+=$escape(ticket.financialMoney);
$out+='" data-entity-name="ticket" title="删除"> 删除 </a> ';
$line=1245;}
$out+=' </td> </tr> ';
$line=1248;}
$out+=' ';
$line=1248;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=1254;}
$out+=' ';
$line=1254;if(arrangeItemsStauts.otherStatus != 0 ){
$out+=' <div id="tripPlan_addPlan_other" class="tab-pane fade"> <div class=" ui-sortable-handle"> <h5 class="title-size"> <i class="ace-icon fa fa-smile-o"></i> 其它安排 <a href="javascript:void(0)" class=""> <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addOther"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> ';
$line=1265;if(basicInfo.oldOtherRequire){
$out+=' <p class="requirementsPlan">原其它计划要求：';
$line=1266;$out+=$escape(basicInfo.oldOtherRequire);
$out+='</p>';
$line=1266;}
$out+=' ';
$line=1266;if(basicInfo.nowOtherRequire){
$out+=' <p class="requirementsPlan">现其它计划要求：';
$line=1267;$out+=$escape(basicInfo.nowOtherRequire);
$out+='</p>';
$line=1267;}
$out+=' <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400"> <colgroup> <col style="width:110px"> <col style="width:120px;"> <col style="width:100px;"> <col style="width:110px;"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:80px"> <col style="width:150px"> <col style="min-width: 100px;"> <col style="width:60px;"> </colgroup> <thead> <tr> <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th> <th class="th-border"><span class="necessary">*</span>项目</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border" style="width: 77px;">单价</th> <th class="th-border" style="width: 77px;">数量</th> <th class="th-border" style="width: 77px;">优惠</th> <th class="th-border" style="width: 77px;">应付</th> <th class="th-border" style="width: 77px;">预付款</th> <th class="th-border" style="width: 77px;">计划导付</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ';
$line=1301;$each(otherList,function(other,$index){
$out+=' ';
$line=1301;if(other != "[]" || other != null){
$out+=' <tr data-entity-arrangeid="';
$line=1302;if(basicInfo.isArranged == 1){
$line=1302;$out+=$escape(other.id);
$line=1302;}
$out+='" ';
$line=1302;if(other.isConfirmAccount){
$out+='title="财务已对账，不可编辑！"';
$line=1302;}
$out+='> <td class="T-whichDaysContainer" value="';
$line=1303;$out+=$escape(other.whichDay);
$out+='" data-isconfirmaccount="';
$line=1303;$out+=$escape(other.isConfirmAccount);
$out+='"></td> <td> <input type="hidden" name="id" value="';
$line=1305;if(basicInfo.isArranged == 1){
$line=1305;$out+=$escape(other.id);
$line=1305;}
$out+='" /> <input type="text" maxlength="32" name="name" class="col-sm-12 ';
$line=1306;if(!other.isConfirmAccount){
$out+='T-other-name';
$line=1306;}
$out+='" value="';
$line=1306;$out+=$escape(other.name);
$out+='" ';
$line=1306;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1306;}
$out+='/> </td> <td> <input type="text" name="managerName" maxlength="332" class="col-sm-12" value="';
$line=1309;$out+=$escape(other.managerName);
$out+='" ';
$line=1309;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1309;}
$out+='/> </td> <td> <input type="text" name="mobileNumber" class="col-sm-12" value="';
$line=1312;$out+=$escape(other.mobileNumber);
$out+='" maxlength="11"';
$line=1312;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1312;}
$out+=' /> </td> <td> <input type="text" name="price" class="col-sm-12 price F-float F-money" value="';
$line=1315;$out+=$escape(other.price);
$out+='" maxlength="8" ';
$line=1315;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1315;}
$out+='/> </td> <td> <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="';
$line=1318;if(other.memberCount || other.memberCount == 0){
$line=1318;$out+=$escape(other.memberCount);
$line=1318;}else{
$line=1318;$out+=$escape(basicInfo.touristAdultCount + basicInfo.touristChildCount);
$line=1318;}
$out+='" maxlength="8" ';
$line=1318;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1318;}
$out+='/> </td> <td> <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="';
$line=1321;$out+=$escape(other.reduceMoney);
$out+='" maxlength="9" ';
$line=1321;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1321;}
$out+='/> </td> <td> <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="';
$line=1324;$out+=$escape(other.needPayMoney);
$out+='" maxlength="9" /> </td> <td><div class="inline-flex">';
$line=1326;$out+=$string($helpers. getPlanPreTypeOption(other.preType ,  other.isConfirmAccount));
$out+=' <input type="text" name="prePayMoney" class="price F-float F-money" value="';
$line=1327;$out+=$escape(other.prePayMoney);
$out+='" maxlength="9" ';
$line=1327;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1327;}
$out+='/></div> </td> <td><div class="inline-flex">';
$line=1329;$out+=$string($helpers. getPlanPayTypeOption(other.payType ,  other.isConfirmAccount));
$out+=' <input type="text" name="guidePayMoney" class="F-float F-money" value="';
$line=1330;if(other.payType == 2){
$line=1330;$out+=$escape(other.signMoney);
$line=1330;}else{
$line=1330;$out+=$escape(other.guidePayMoney);
$line=1330;}
$out+='" maxlength="9" ';
$line=1330;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1330;}
$out+='/></div> </td> <td> <input type="text" name="remark" class="col-sm-12 min-w150" value="';
$line=1333;$out+=$escape(other.remark);
$out+='" maxlength="500" ';
$line=1333;if(other.isConfirmAccount){
$out+='disabled="disabled"';
$line=1333;}
$out+='/> </td> <td>';
$line=1335;if(!other.isConfirmAccount){
$out+=' <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="';
$line=1336;$out+=$escape(other.financialMoney);
$out+='" data-entity-name="other" title="删除"> 删除 </a> ';
$line=1339;}
$out+=' </td> </tr> ';
$line=1342;}
$out+=' ';
$line=1342;});
$out+=' </tbody> </table> </div> </div> </div> ';
$line=1348;}
$out+=' </div> </div> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button data-entity-id="';
$line=1355;$out+=$escape(basicInfo.id);
$out+='" class="btn btn-sm btn-primary T-btn-submit-tripPlan"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> ';
$line=1358;if(arrangeItemsStauts.restaurantStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_restaurant"> <label> <input name="restaurantStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1361;if(arrangeItemsStauts.restaurantStatus==3 ){
$out+='checked';
$line=1361;}
$out+='> <span class="lbl font-w"> 餐饮安排完成</span> </label> </div> ';
$line=1365;}
$out+=' ';
$line=1365;if(arrangeItemsStauts.insuranceStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_insurance"> <label> <input name="insuranceStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1368;if(arrangeItemsStauts.insuranceStatus==3 ){
$out+='checked';
$line=1368;}
$out+='> <span class="lbl font-w"> 保险安排完成</span> </label> </div> ';
$line=1372;}
$out+=' ';
$line=1372;if(arrangeItemsStauts.selfPayStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_selfPay"> <label> <input name="selfPayStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1375;if(arrangeItemsStauts.selfPayStatus==3 ){
$out+='checked';
$line=1375;}
$out+='> <span class="lbl font-w"> 自费安排完成</span> </label> </div> ';
$line=1379;}
$out+=' ';
$line=1379;if(arrangeItemsStauts.ticketStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_ticket"> <label> <input name="ticketStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1382;if(arrangeItemsStauts.ticketStatus==3 ){
$out+='checked';
$line=1382;}
$out+='> <span class="lbl font-w"> 票务安排完成</span> </label> </div> ';
$line=1386;}
$out+=' ';
$line=1386;if(arrangeItemsStauts.scenicStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_scenic"> <label> <input name="scenicStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1389;if(arrangeItemsStauts.scenicStatus==3 ){
$out+='checked';
$line=1389;}
$out+='> <span class="lbl font-w"> 景区安排完成</span> </label> </div> ';
$line=1393;}
$out+=' ';
$line=1393;if(arrangeItemsStauts.shopStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_shop"> <label> <input name="shopStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1396;if(arrangeItemsStauts.shopStatus==3 ){
$out+='checked';
$line=1396;}
$out+='> <span class="lbl font-w"> 购物安排完成</span> </label> </div> ';
$line=1400;}
$out+=' ';
$line=1400;if(arrangeItemsStauts.guideStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_guide"> <label> <input name="guideStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1403;if(arrangeItemsStauts.guideStatus==3 ){
$out+='checked';
$line=1403;}
$out+='> <span class="lbl font-w"> 导游安排完成</span> </label> </div> ';
$line=1407;}
$out+=' ';
$line=1407;if(arrangeItemsStauts.busStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_bus"> <label> <input name="busStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1410;if(arrangeItemsStauts.busStatus==3 ){
$out+='checked';
$line=1410;}
$out+='> <span class="lbl font-w"> 车辆安排完成</span> </label> </div> ';
$line=1414;}
$out+=' ';
$line=1414;if(arrangeItemsStauts.otherStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_other"> <label> <input name="otherStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1417;if(arrangeItemsStauts.otherStatus==3 ){
$out+='checked';
$line=1417;}
$out+='> <span class="lbl font-w"> 其它安排完成</span> </label> </div> ';
$line=1421;}
$out+=' ';
$line=1421;if(arrangeItemsStauts.hotelStatus != 0 ){
$out+=' <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_hotel"> <label> <input name="hotelStatus" type="checkbox" class="ace T-finishedArrange" ';
$line=1424;if(arrangeItemsStauts.hotelStatus==3 ){
$out+='checked';
$line=1424;}
$out+='> <span class="lbl font-w"> 酒店安排完成</span> </label> </div> ';
$line=1428;}
$out+=' </div> </div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'\r\n<div class="globalAdd">\r\n    <div class="baseinfo">\r\n        <!-- 缓存数据 -->\r\n        <input type="hidden" name="tripPlanId" value="{{basicInfo.id}}" />\r\n        <input type="hidden" id="isArranged" value="{{basicInfo.isArranged}}">\r\n        <span class="T-days hidden">{{days}}</span>\r\n        <span class="T-status hidden">{{basicInfo.status}}</span>\r\n        <span class="T-tab-id hidden">{{tarId}}</span>\r\n        <h5 class="base-title">基本信息</h5>\r\n        <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n            <tr>\r\n                <td class="style-myself">线路产品：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.lineProduct.name}}</td>\r\n                <td class="style-myself">针对客源：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{if basicInfo.tripPlanType == 0}}散客{{else if basicInfo.tripPlanType == 1}}团体{{/if}}</td>\r\n                <td class="style-myself">人数：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-count T-touristCount" data-count={{basicInfo.touristAdultCount + basicInfo.touristChildCount}}>{{basicInfo.touristAdultCount}}</span>大人&nbsp;<span class="F-float F-count">{{basicInfo.touristChildCount}}</span>小孩</td>\r\n                <td class="style-myself">团号：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.tripNumber}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">出游日期：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose" class="T-startTime">{{basicInfo.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></td>\r\n                <td class="style-myself">完团日期：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose" class="T-endTime">{{basicInfo.endTime | dateFormat:\'yyyy-MM-dd\'}}</span></td>\r\n                <td class="style-myself" colspan="4"></td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">购物商家：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.shopNames}}</td>\r\n                <td class="style-myself">自费商家：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.selfPayItemNames}}</td>\r\n                <td colspan="2" style="text-align: left;padding: 0px 0px 0px 10px">\r\n                    <div class="checkbox checkbox-inline mar-0">\r\n                        <label>\r\n                            <input type="checkbox" class="ace" disabled="disabled" type="checkbox" name="isContainSelfPay" {{if basicInfo.isContainSelfPay==1 }}checked{{/if}}>\r\n                            <span class="lbl"> 包含自费</span>\r\n                        </label>\r\n                    </div>\r\n                </td>\r\n                <td class="style-myself">接站牌：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{basicInfo.welcomeBoard}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">全陪:</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.accompanyGuideName}}</td>\r\n                <td class="style-myself">全陪电话：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{basicInfo.accompanyGuideMobile}}</td>\r\n                <td class="style-myself">责任计调:</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{if basicInfo.dutyOPUser}}{{basicInfo.dutyOPUser.realName}}{{/if}}</td>\r\n                <td class="style-myself">责任部门:</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px">{{if basicInfo.businessGroup}}{{basicInfo.businessGroup.name}}{{/if}}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class="style-myself">备注：</td>\r\n                <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="9">{{basicInfo.remark}}</td>\r\n            </tr>\r\n        </table>\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td>\r\n                        <span class="fix-w-4">计划现收:</span><span class="F-float F-money">{{basicInfo.guideAllNowMoney}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class="fix-w-4">计划导付:</span><span class="T-guidePayedMoneyLabel F-float F-money">&nbsp;</span><span class="T-guidePayedMoney hidden">{{basicInfo.guideAllPayMoney}}</span>\r\n                    </td>\r\n                    <td><span class="fix-w-5">计划预支款:</span>\r\n                        <span class="T-guidePlanAllPreMoney F-float F-money">{{basicInfo.guidePlanAllPreMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="trip-arrange">\r\n        <h5 class="base-title">行程安排<a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a></h5>\r\n        <table class="table table-bordered table-fixed">\r\n            <tbody class="T-tripPlanDayList-tbody">\r\n                <colgroup>\r\n                    <col style="width:100px;"></col>\r\n                    <col style="width:600px;"></col>\r\n                    <col style="width:230px;"></col>\r\n                    <col></col>\r\n                    <col style="width:400px;"></col>\r\n                </colgroup>\r\n                <tr>\r\n                    <th>日期</th>\r\n                    <th>行程简要</th>\r\n                    <th>含餐情况</th>\r\n                    <th>住宿地点</th>\r\n                    <th>景点</th>\r\n                </tr>\r\n                {{each tripPlanDayList as day}}\r\n                <tr>\r\n                    <td>{{basicInfo.startTime | getDateText : day.whichDay}}</td>\r\n                    <td class="T-ctrl-tip" title="{{day.title}}"><span>{{day.title}}</span></td>\r\n                    <td>{{#day.repastDetail | getRestaurantDesc}}</td>\r\n                    <td class="T-ctrl-tip" title="{{day.restPosition}}" data-placement="left"><span>{{day.restPosition}}</span></td>\r\n                    <td class="T-ctrl-tip" title="{{day.scenicItemNames}}" data-placement="left"><span>{{day.scenicItemNames}}</span></td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="trip-arrange">\r\n        <h5 class="base-title">游客名单<a class="T-toggle-List T-show" style="font-size: 12px; color: #999; display: inline-block; margin-left: 15px; font-weight: 100;">收起</a></h5>\r\n        <table class="table table-striped table-bordered table-hover">\r\n            <thead>\r\n                <tr>\r\n                    <th class="th-border">收客单号</th>\r\n                    <th class="th-border">客户</th>\r\n                    <th class="th-border">线路产品</th>\r\n                    <th class="th-border">小组联系人</th>\r\n                    <th class="th-border">人数</th>\r\n                    <th class="th-border">现收团款</th>\r\n                    <th class="th-border">接站牌</th>\r\n                    <th class="th-border">送客地点</th>\r\n                    <th class="th-border">备注</th>\r\n                    <th class="th-border">操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-touristGroup-list T-touristGroupList">\r\n                {{if !!touristGroupList}} {{each touristGroupList as group}}\r\n                <tr data-id="{{group.id}}">\r\n                    <td>{{group.orderNumber}}</td>\r\n                    <td name="travelAgencyName" title="{{if group.partnerAgencyContact}}联系人：{{group.partnerAgencyContact.contactRealname}}，电话：{{group.partnerAgencyContact.contactMobileNumber}}{{/if}}">{{if group.partnerAgency}}{{group.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                    <td name="lineProductName">{{group.lineProduct.name}}</td>\r\n                    <td name="contactMemberName">{{if group.contactMember}}{{group.contactMember.name}}({{group.contactMember.mobileNumber}}){{/if}}</td>\r\n                    <td name="peopleCount" class="F-float F-count" data-adultCount="{{group.adultCount}}" data-childCount="{{group.childCount}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n                    <td name="currentNeedPayMoney" class="F-float F-money">{{group.currentNeedPayMoney}}</td>\r\n                    <td>{{group.welcomeBoard}}</td>\r\n                    <td>{{group.sendPosition}}</td>\r\n                    <td name="remark" title={{group.mark}}>{{group.remark}}</td>\r\n                    <td>\r\n                        <div class="btn-group">\r\n                            <a class="cursor T-action T-groupView">\r\n                            查看\r\n                        </a>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                {{/each}} {{/if}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="arrange-area">\r\n        <h5 class="base-title">安排资源</h5>\r\n        <div class="tabbable">\r\n            <ul class="nav nav-tabs T-arrange-tabs">\r\n                {{if arrangeItemsStauts.guideStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140011">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_guide" aria-expanded="false">导游</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.insuranceStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140012">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_insurance" aria-expanded="true">保险</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.busStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140013">\r\n                    <a class="T-busTarget" data-toggle="tab" href="#tripPlan_addPlan_bus" aria-expanded="false">车辆</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.restaurantStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140014">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_restaurant" aria-expanded="false">餐饮</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.hotelStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140015">\r\n                    <a class="T-hotelTarget" data-toggle="tab" href="#tripPlan_addPlan_hotel" aria-expanded="false">住宿</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.scenicStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140016">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_scenic" aria-expanded="false">景区</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.ticketStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140017">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_ticket" aria-expanded="false">票务</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.shopStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140018">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_shop" aria-expanded="false">购物</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.selfPayStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140019">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_selfPay" aria-expanded="false">自费</a>\r\n                </li>\r\n                {{/if}} {{if arrangeItemsStauts.otherStatus != 0 }}\r\n                <li class="col-sm-1 no-padding align-center R-right" data-right="1140020">\r\n                    <a data-toggle="tab" href="#tripPlan_addPlan_other" aria-expanded="false">其它</a>\r\n                </li>\r\n                {{/if}}\r\n            </ul>\r\n            <div class="tab-content" style="position:relative;top: -2px">\r\n                {{if arrangeItemsStauts.insuranceStatus != 0 }}\r\n                <div id="tripPlan_addPlan_insurance" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-medkit"></i> 保险安排\r\n                            <button class="btn btn-sm btn-success T-addResource T-addInsurance" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldInsuranceRequire}}\r\n                        <p class="requirementsPlan">原保险计划要求：{{basicInfo.oldInsuranceRequire}}</p>{{/if}} {{if basicInfo.nowInsuranceRequire}}\r\n                        <p class="requirementsPlan">现保险计划要求：{{basicInfo.nowInsuranceRequire}}</p>{{/if}}\r\n                        <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n                            <colgroup>\r\n                                <col style="width:200px" />\r\n                                <col style="width:200px" />\r\n                                <col style="width:80px;" />\r\n                                <col style="width:80px;" />\r\n                                <col style="width:80px;" />\r\n                                <col style="width:80px;" />\r\n                                <col style="min-width: 100px;" />\r\n                                <col style="width:50px;" />\r\n                            </colgroup>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border"><span class="necessary">*</span>保险公司</th>\r\n                                    <th class="th-border">险种</th>\r\n                                    <th class="th-border">单价</th>\r\n                                    <th class="th-border">数量</th>\r\n                                    <th class="th-border">应付</th>\r\n                                    <th class="th-border">预付款</th>\r\n                                    <th class="th-border">备注</th>\r\n                                    <th class="th-border">操作</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                {{each insuranceList as insurance index}} {{if insurance != "[]" || insurance != null}}\r\n                                <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{insurance.id}}{{/if}}" {{if insurance.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                    <td>\r\n                                        <div class="col-sm-12">\r\n                                            <input type="text" name="insuranceName" maxlength="32" value="{{if insurance.insurance != null}}{{insurance.insurance.name}}{{/if}}" class="col-sm-12 T-chooseInsurance bind-change" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}} />\r\n                                            <input type="hidden" name="insuranceId" value="{{if insurance.insurance != null}}{{insurance.insurance.id}}{{/if}}" />\r\n                                            {{if !insurance.isConfirmAccount}}\r\n                                            <span class="addResourceBtn T-addInsuranceResource R-right" data-right="1080002" title="添加保险公司">\r\n                                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                            </span>\r\n                                            {{/if}}\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="insuranceItem" value="{{if insurance.insuranceItem }}{{insurance.insuranceItem.name}}{{/if}}" maxlength="32" class="col-sm-12 T-chooseInsuranceType" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}} />\r\n                                        <input type="hidden" name="insuranceItemId" value="{{if insurance.insuranceItem }}{{insurance.insuranceItem.id}}{{/if}}">\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="price" value="{{insurance.price}}" class="col-sm-12 price F-float F-money" maxlength="8" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}}/>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="memberCount" value="{{if !!insurance.memberCount || insurance.memberCount == 0}}{{insurance.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" class="col-sm-12 F-float F-count" maxlength="8" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}}/>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="needPayMoney" readonly="readonly" value="{{insurance.needPayMoney}}" class="col-sm-12 F-float F-money" maxlength="9" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}}/>\r\n                                    </td>\r\n                                    <td><div class="inline-flex">{{#insurance.preType | getPlanPreTypeOption:insurance.isConfirmAccount}}\r\n                                        <input type="text" name="prePayMoney" value="{{insurance.prePayMoney}}" class="price F-float F-money" maxlength="9" {{if insurance.isConfirmAccount}} disabled="disabled" {{/if}}/></div>\r\n                                    </td>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="remark" value="{{insurance.remark}}" class="col-sm-12 min-w150" maxlength="500"{{if insurance.isConfirmAccount}} disabled="disabled" {{/if}} />\r\n                                    </td>\r\n                                    <td>{{if !insurance.isConfirmAccount}} <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{insurance.financialMoney}}" data-entity-name="insurance" title="删除"> 删除 </a>{{/if}} </td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.guideStatus != 0 }}\r\n                <div id="tripPlan_addPlan_guide" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-user"></i> 导游安排\r\n                            <button class="btn btn-sm btn-success T-addResource T-addGuide" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                            <span style="color: #D45A5A;font-weight: 100;padding-left: 30px;font-size: 6px;">* 删除或切换导游将删除该导游的实销报账数据</span>\r\n                        </h5> {{if basicInfo.oldGuideRequire}}\r\n                        <p class="requirementsPlan">原导游计划要求：{{basicInfo.oldGuideRequire}}</p>{{/if}} {{if basicInfo.nowGuideRequire}}\r\n                        <p class="requirementsPlan">现导游计划要求：{{basicInfo.nowGuideRequire}}</p>{{/if}}\r\n                        <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n                            <colgroup>\r\n                                <col style="width:120px">\r\n                                <col style="width:100px">\r\n                                <col style="width:100px;">\r\n                                <col style="width:100px;">\r\n                                <col style="width:100px;">\r\n                                <col style="width:110px;">\r\n                                <col style="width:80px;">\r\n                                <col style="width:80px;">\r\n                                <col style="width:80px;">\r\n                                <col style="width:80px;">\r\n                                <col style="min-width: 100px;">\r\n                                <col style="width:60px;">\r\n                            </colgroup>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                                    <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                                    <th class="th-border">任务</th>\r\n                                    <th class="th-border"><span class="necessary">*</span>导游</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">导服费</th>\r\n                                    <th class="th-border">管理费</th>\r\n                                    <th class="th-border">计划预支款</th>\r\n                                    <th class="th-border">备注</th>\r\n                                    <th class="th-border">操作</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                {{each guideList as guide index}} {{if guide != "[]" || guide != null}}\r\n                                <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{guide.id}}{{/if}}">\r\n                                    <td>\r\n                                        {{if guide.taskJson}}\r\n                                        {{each guide.taskJson as task i}}\r\n                                        <div class="T-guideAddTask {{if i > 0}}mar-t-10{{/if}}" data-index="{{i}}">\r\n                                            <input type="text" name="startTime" class="datepicker" value="{{task.sTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                                        </div>\r\n                                        {{/each}}\r\n                                        {{else}}\r\n                                        <div class="T-guideAddTask" data-index="0">\r\n                                            <input type="text" name="startTime" class="datepicker" value="">\r\n                                        </div>\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{if guide.taskJson}}\r\n                                        {{each guide.taskJson as task i}}\r\n                                        <div class="T-guideAddTask {{if i > 0}}mar-t-10{{/if}}" data-index="{{i}}">\r\n                                            <input type="text" name="endTime" class="datepicker" value="{{task.eTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                                        </div>\r\n                                        {{/each}}\r\n                                        {{else}}\r\n                                        <div class="T-guideAddTask" data-index="0">\r\n                                            <input type="text" name="endTime" class="datepicker" value="">\r\n                                        </div>\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{if guide.taskJson}}\r\n                                        {{each guide.taskJson as task i}}\r\n                                        <div class="T-guideAddTask {{if i > 0}}mar-t-10{{else}}mar-t-5{{/if}}" data-index="{{i}}">\r\n                                        {{#task.tType | getTaskSelect}}\r\n                                            <label style="float:right; padding-top:0px;">\r\n                                                <button class="btn btn-sm btn-white {{if i == 0}}btn-success T-add{{else}}btn-danger T-del{{/if}} T-guideBtn">\r\n                                                    <i class="ace-icon fa {{if i == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i>\r\n                                                </button>\r\n                                            </label>\r\n                                        </div>\r\n                                        {{/each}}\r\n                                        {{else}}\r\n                                        <div class="T-guideAddTask mar-t-5" data-index="0">\r\n                                        {{#0 | getTaskSelect}}\r\n                                            <label style="float:right; padding-top:0px;">\r\n                                                <button class="btn btn-sm btn-white btn-success T-add T-guideBtn">\r\n                                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                </button>\r\n                                            </label>\r\n                                        </div>\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <div class="col-sm-12 feild-relative">\r\n                                            <input type="text" name="guideName" maxlength="32" value="{{if guide.guide != null}}{{guide.guide.realname}}{{/if}}" {{if guide.isConfirmAccount || guide.isAccountGuide==1 && basicInfo.status !=0 }} readonly="readonly" {{/if}} class="col-sm-12 chooseGuide" />\r\n                                            <input type="hidden" name="guideId" value="{{if guide.guide != null}}{{guide.guide.id}}{{/if}}" />\r\n                                            {{if !guide.isConfirmAccount}}\r\n                                            <span class="addResourceBtn T-addGuideResource R-right" data-right="1010002" title="添加导游">\r\n                                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                </span>\r\n                                            {{/if}}\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="mobileNumber" maxlength="32" value="{{if guide.guide != null}}{{guide.guide.mobileNumber}}{{/if}}" readonly="readonly" class="col-sm-12" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="price" value="{{guide.price}}" class="col-sm-12 F-float F-money"maxlength="9" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="manageFee" value="{{guide.manageFee}}" class="col-sm-12 F-float F-money" maxlength="9" />\r\n                                    </td>\r\n                                    <td><input class="F-float F-money" type="text" name="guidePlanPreMoney" value="{{guide.guidePlanPreMoney}}" /></td>\r\n                                    <td>\r\n                                        <input type="text" name="remark" value="{{guide.remark}}" class="col-sm-12 min-w150" maxlength="500" {{if guide.isConfirmAccount}} disabled="disabled" {{/if}}/>\r\n                                    </td>\r\n                                    <td>\r\n                                        {{if (basicInfo.status != 1 || guide.isAccountGuide != 1)}}\r\n                                        <a class="cursor {{if !guide.isConfirmAccount}}T-btn-deleteTripPlanList{{else}}gray{{/if}}" data-entity-name="guide" data-entity-ispayed="{{guide.financialMoney}}" title="{{if guide.isConfirmAccount}}财务已对账，不可删除{{else}}删除{{/if}}">\r\n                                                删除\r\n                                        </a> {{/if}}\r\n                                    </td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.busStatus != 0 }}\r\n                <div id="tripPlan_addPlan_bus" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-bus"></i> 车辆安排\r\n                            <button class="btn btn-sm btn-success T-addResource T-addBus" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldBusRequire}}\r\n                        <p class="requirementsPlan">原车辆计划要求：{{basicInfo.oldBusRequire}}</p>{{/if}} {{if basicInfo.nowBusRequire}}\r\n                        <p class="requirementsPlan">现车辆计划要求：{{basicInfo.nowBusRequire}}</p>{{/if}}\r\n                        <div style="overflow-x:auto;">\r\n                            <div style="min-width:2500px;">\r\n                                <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n                                    <colgroup>\r\n                                        <col style="width:100px">\r\n                                        <col style="width:100px">\r\n                                        <col style="width:60px;">\r\n                                        <col style="width:60px;">\r\n                                        <col style="width:110px;">\r\n                                        <col style="width:110px;">\r\n                                        <col style="width:160px;">\r\n                                        <col style="width:110px;">\r\n                                        <col style="width:110px;">\r\n                                        <col style="width:80px;">\r\n                                        <col style="width:120px;">\r\n                                        <col style="width:80px;">\r\n                                        <col style="width:80px;">\r\n                                        <col style="width:80px;">\r\n                                        <col style="width:80px;">\r\n                                        <col style="width:150px;">\r\n                                        <col style="width:70px;">\r\n                                        <col style="min-width: 100px;">\r\n                                        <col style="width:100px;">\r\n                                        <col style="width:140px;">\r\n                                    </colgroup>\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class="th-border"><span class="necessary">*</span>开始日期</th>\r\n                                            <th class="th-border"><span class="necessary">*</span>结束日期</th>\r\n                                            <th class="th-border">任务</th>\r\n                                            <th class="th-border">车座数</th>\r\n                                            <th class="th-border">车辆品牌</th>\r\n                                            <th class="th-border">车牌号</th>\r\n                                            <th class="th-border">司机</th>\r\n                                            <th class="th-border"><span class="necessary">*</span>所属车队</th>\r\n                                            <th class="th-border">联系电话</th>\r\n                                            <th class="th-border" width="70">通知游客</th>\r\n                                            <th class="th-border">合同号</th>\r\n                                            <th class="th-border">车费</th>\r\n                                            <th class="th-border">优惠</th>\r\n                                            <th class="th-border">应付</th>\r\n                                            <th class="th-border">预付款</th>\r\n                                            <th class="th-border">计划导付</th>\r\n                                            <th class="th-border">计划签单</th>\r\n                                            <th class="th-border">备注</th>\r\n                                            <th class="th-border">状态</th>\r\n                                            <th class="th-border" width="160px;">操作</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        {{each busCompanyList as busCompany}} {{if busCompany != "[]" || busCompany != null}}\r\n                                        <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{busCompany.id}}{{/if}}" data-entity-busCompanyId="{{if !!busCompany.busCompany}}{{busCompany.busCompany.id}}{{/if}}" data-entity-busId="{{if !!busCompany.bus}}{{busCompany.bus.id}}{{/if}}" data-entity-offerId="{{busCompany.offerId}}" {{if busCompany.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                            <td>\r\n                                                <input type="text" name="startTime" class="datepicker T-busPriceC" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.startTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="endTime" class="datepicker T-busPriceC" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.endTime | dateFormat:\'yyyy-MM-dd\'}}">\r\n                                            </td>\r\n                                            <td>{{#busCompany.taskType | getTaskSelect:true, busCompany.isConfirmAccount}}</td>\r\n                                            <td>\r\n                                                <input type="text" name="needSeatCount" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.needSeatCount}}" class="col-sm-12" style="width: 60px;" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="brand" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{busCompany.brand}}" class="col-sm-12" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class="col-xs-12 feild-relative">\r\n                                                    <input type="text" name="licenseNumber" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}" class="col-xs-12 T-busPriceC" />\r\n                                                    <input type="hidden" value="{{if busCompany.bus != null}}{{busCompany.bus.id}}{{/if}}" name="busId" />\r\n                                                    {{if !busCompany.isConfirmAccount}}\r\n                                                    <span class="addResourceBtn T-addBusResource R-right" data-right="1020003" title="添加车辆">\r\n                                                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                        </span>\r\n                                                    {{/if}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class="col-xs-12 feild-relative">\r\n                                                    <input type="text" name="driverName" value="{{if busCompany.driver != null}}{{busCompany.driver.name}}{{/if}}{{if busCompany.driver != null}}{{busCompany.driver.mobileNumber}}{{/if}}" class="col-xs-12" {{if busCompany.isConfirmAccount}}disabled{{/if}}/>\r\n                                                    <input type="hidden" name="driverId" value="{{if busCompany.driver != null}}{{busCompany.driver.id}}{{/if}}">\r\n                                                    {{if !busCompany.isConfirmAccount}}\r\n                                                    <span class="addResourceBtn T-addDriverResource R-right" data-right="1020003" title="添加司机">\r\n                                                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                        </span>\r\n                                                    {{/if}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class="col-xs-12 feild-relative">\r\n                                                    <input type="text" name="companyName" {{if busCompany.isConfirmAccount || !!busCompany.offerId}}disabled="disabled" {{/if}} value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.companyName}}{{/if}}" class="chooseBusCompany col-xs-12" />\r\n                                                    <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{busCompany.id}}{{/if}}">\r\n                                                    <input type="hidden" name="busCompanyId" value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.id}}{{/if}}" />\r\n                                                    {{if !busCompany.isConfirmAccount}}\r\n                                                    <span class="addResourceBtn T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                                                            <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                        </span>\r\n                                                    {{/if}}\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="mobileNumber" readonly="readonly" value="{{if busCompany.busCompany != null}}{{busCompany.busCompany.mobileNumber}}{{/if}}" class="col-sm-12" />\r\n                                            </td>\r\n                                            <td>\r\n                                            {{if busCompany.isConfirmAccount}}\r\n                                            <span style="color:#bbb;" class="T-setUp" touristgroup = "{{busCompany.annouceTouristGroupIds}}"></span>{{else}}<a class="T-noticeTourists" data-entity-touristgroup="{{busCompany.annouceTouristGroupIds}}" data-entity-setplacetime="{{busCompany.setPlaceTime}}"  data-entity-setplaceposition="{{busCompany.setPlacePosition}}">点击设置</a>{{/if}}</td>\r\n                                            <td>\r\n                                                <input type="text" name="contractNumber" value="{{busCompany.contractNumber}}" maxlength="20" class="col-sm-12" {{if busCompany.isConfirmAccount}}disabled{{/if}}/>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="price" value="{{busCompany.price}}" class="col-sm-12 price F-float F-money" maxlength="9" style="width: 60px;" {{if busCompany.isConfirmAccount}}disabled{{/if}} />\r\n                                                <input type="hidden" name="memberCount" value="1" />\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="reduceMoney" value="{{busCompany.reduceMoney}}" class="col-sm-12 price F-float F-money" maxlength="9" {{if busCompany.isConfirmAccount}}disabled{{/if}}/>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input type="text" name="needPayMoney" readonly="readonly" value="{{busCompany.needPayMoney}}" maxlength="9" class="col-sm-12 F-float F-money" />\r\n                                            </td>\r\n                                            <td><div class="inline-flex">{{#busCompany.preType | getPlanPreTypeOption: busCompany.isConfirmAccount,true}}\r\n                                                <input type="text" name="prePayMoney" value="{{busCompany.prePayMoney}}" style="width: 60px;" class="price F-float F-money" maxlength="9" {{if busCompany.isConfirmAccount}}disabled{{/if}}/></div>\r\n                                            </td>\r\n                                            <td class="text-left"><div class="inline-flex">{{#busCompany.payType | getPlanPayTypeOption: busCompany.isConfirmAccount}}\r\n                                                <input name="guidePayMoney" type="text" value="{{if basicInfo.isArranged == 1}}{{if busCompany.payType == 2}}{{busCompany.signMoney}}{{else}}{{busCompany.guidePayMoney}}{{/if}}{{else}}{{busCompany.price}}{{/if}}" maxlength="9" class="F-float F-money" {{if busCompany.isConfirmAccount}}disabled{{/if}}/>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>{{if busCompany.payType == 2}}-{{else}}<input type="text" readonly name="signBillMoney" class="F-float F-money" value="{{busCompany.signMoney}}">{{/if}}</td>\r\n                                            <td>\r\n                                                <input name="remark" type="text" value="{{busCompany.remark}}" class="col-sm-12 min-w150" maxlength="500" {{if busCompany.isConfirmAccount}}disabled{{/if}}/>\r\n                                            </td>\r\n                                            <td>\r\n                                                <select name="orderStatus" {{if busCompany.isConfirmAccount}}disabled{{/if}}>\r\n                                                    <option value="1" {{if busCompany.orderStatus==1 }}selected="selected" {{/if}}>未预定</option>\r\n                                                    <option value="2" {{if busCompany.orderStatus==2 }}selected="selected" {{/if}}>预定中</option>\r\n                                                    <option value="3" {{if busCompany.orderStatus==3 }}selected="selected" {{/if}}>已预订</option>\r\n                                                    <option value="0" {{if busCompany.orderStatus==0 }}selected="selected" {{/if}}>无需预定</option>\r\n                                                </select>\r\n                                            </td>\r\n                                            <td>{{if !busCompany.isConfirmAccount}}\r\n                                                <a class="cursor T-bus-action T-bus-askPrice">询价</a><a class="cursor T-bus-action T-bus-offerStatus"><i class="ace-icon fa fa-search"></i></a>\r\n                                                <a class="cursor T-bus-action T-bus-bookingStatus {{if busCompany.inquiryStatus == 1}}T-bus-booking{{/if}}" {{if busCompany.inquiryStatus !=1 }}style="color: #bbb" {{/if}}>预订</a><a class="cursor T-bus-action T-bus-bookingView"><i class="ace-icon fa fa-search"></i></a>\r\n                                                <a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="{{busCompany.financialMoney}}" title="删除" data-entity-name="busCompany">删除</a>\r\n                                                {{/if}}\r\n                                            </td>\r\n                                            {{if busCompany.offerId!=null}}\r\n                                            <!-- <td>\r\n                                                    <a class="cursor T-bus-SendOrder T-sendOrder-Area R-right T-action" data-value=\'{{busCompany.qouteId}}\' data-right="1450001" data-entity-offerId={{busCompany.offerId}}>\r\n                                                    发送订单\r\n                                                   </a>\r\n                                                </td> -->\r\n                                            {{/if}}\r\n                                        </tr>\r\n                                        {{/if}} {{/each}}\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.restaurantStatus != 0 }}\r\n                <div id="tripPlan_addPlan_restaurant" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-cutlery"></i> 餐饮安排\r\n                            <button class="btn btn-sm btn-success T-addResource T-addRestaurant" style="margin-left: 20px">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldRestaurantRequire}}\r\n                        <p class="requirementsPlan">原餐饮计划要求：{{basicInfo.oldRestaurantRequire}}</p>{{/if}} {{if basicInfo.nowRestaurantRequire}}\r\n                        <p class="requirementsPlan">现餐饮计划要求：{{basicInfo.nowRestaurantRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400">\r\n                                <colgroup>\r\n                                    <col style="width:110px">\r\n                                    <col style="width:50px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="width:160px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:60px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>餐厅</th>\r\n                                        <th class="th-border">联系方式</th>\r\n                                        <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>\r\n                                        <th class="th-border">人数</th>\r\n                                        <th class="th-border">优惠</th>\r\n                                        <th class="th-border">应付</th>\r\n                                        <th class="th-border">预付款</th>\r\n                                        <th class="th-border">计划导付</th>\r\n                                        <th class="th-border">备注</th>\r\n                                        <th class="th-border" width="110px">操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each restaurantList as restaurant}} {{if restaurant != "[]" || restaurant != null}}\r\n                                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{restaurant.id}}{{/if}}" {{if restaurant.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                        <td class="T-whichDaysContainer" value="{{restaurant.whichDay}}" data-isconfirmaccount="{{restaurant.isConfirmAccount}}"></td>\r\n                                        <td>\r\n                                            <select name="type" class="col-sm-12 {{if !restaurant.isConfirmAccount}}T-restauranType{{/if}}" maxlength="9" style="width:80px;" {{if restaurant.isConfirmAccount}}disabled{{/if}}>\r\n                                                {{if restaurant.restaurantStandard == null}}\r\n                                                <option {{if restaurant.type=="早餐" }}selected="selected" {{/if}} value="早餐">早餐</option>\r\n                                                <option {{if restaurant.type=="午餐" }}selected="selected" {{/if}} value="午餐">午餐</option>\r\n                                                <option {{if restaurant.type=="晚餐" }}selected="selected" {{/if}} value="晚餐">晚餐</option>\r\n                                                {{else}}\r\n                                                <option {{if restaurant.restaurantStandard.type=="早餐" }}selected="selected" {{/if}} value="早餐">早餐</option>\r\n                                                <option {{if restaurant.restaurantStandard.type=="午餐" }}selected="selected" {{/if}} value="午餐">午餐</option>\r\n                                                <option {{if restaurant.restaurantStandard.type=="晚餐" }}selected="selected" {{/if}} value="晚餐">晚餐</option>\r\n                                                {{/if}}\r\n                                            </select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class="col-sm-12">\r\n                                                <input type="text" name="restaurantName" maxlength="32" value="{{if restaurant.isChoose == 1}}-导游任选-{{else}}{{if restaurant.restaurant != null}}{{restaurant.restaurant.name}}{{/if}}{{/if}}" class="col-sm-12 T-chooseRestaurant" data-propover="{{restaurant.restaurantChooseArrangeList | stringify}}" {{if restaurant.isConfirmAccount}}disabled{{/if}}/>\r\n                                                <input type="hidden" name="restaurantId" value="{{if restaurant.isChoose == 1}}-1{{else}}{{restaurant.restaurantId}}{{/if}}" />\r\n                                                <input type="hidden" name="optional" value="" />\r\n                                                {{if !restaurant.isConfirmAccount}}\r\n                                                <span class="addResourceBtn T-addRestaurantResource R-right" data-right="1030002" title="添加餐厅">\r\n                                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                    </span>\r\n                                                {{/if}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="managerName" readonly="readonly" value="{{if restaurant.isChoose == 1}}-{{else}}{{if restaurant.restaurant != null}}{{restaurant.restaurant.managerName}} {{restaurant.restaurant.mobileNumber}}{{/if}}{{/if}}" class="col-sm-12" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="price" value="{{restaurant.price}}" class="col-sm-12 {{if !restaurant.isConfirmAccount}}T-typeNameChoose{{/if}} F-float F-money" {{if restaurant.isConfirmAccount}}disabled{{/if}}/>\r\n                                            <input type="hidden" name="restaurantStandardId" value="0" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="memberCount" maxlength="8" value="{{if restaurant.memberCount || restaurant.memberCount == 0}}{{restaurant.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" class="col-sm-12 F-float F-count" style="width: 60px;" {{if restaurant.isConfirmAccount}}disabled{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="reduceMoney" maxlength="9" value="{{restaurant.reduceMoney}}" class="col-sm-12 price F-float F-money" style="width: 60px;" {{if restaurant.isConfirmAccount}}disabled{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="needPayMoney" readonly="readonly" value="{{restaurant.needPayMoney}}" class="col-sm-12 F-float F-money" style="width: 60px;" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#restaurant.preType | getPlanPreTypeOption: restaurant.isConfirmAccount}}\r\n                                            <input type="text" name="prePayMoney" maxlength="9" value="{{restaurant.prePayMoney}}" class="price F-float F-money" style="width: 60px;" {{if restaurant.isConfirmAccount}}disabled{{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#restaurant.payType | getPlanPayTypeOption: restaurant.isConfirmAccount}}\r\n                                            <input name="guidePayMoney" type="text" value="{{if restaurant.payType == 2}}{{restaurant.signMoney}}{{else}}{{restaurant.guidePayMoney}}{{/if}}" maxlength="9" class="F-float F-money" style="width: 60px;" {{if restaurant.isConfirmAccount}}disabled{{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input name="remark" type="text" value="{{restaurant.remark}}" maxlength="500" class="col-sm-12 min-w150" {{if restaurant.isConfirmAccount}}disabled{{/if}}/>\r\n                                        </td>\r\n                                        <td>{{if !restaurant.isConfirmAccount}}\r\n                                            <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{restaurant.financialMoney}}" data-entity-name="restaurant" title="删除">\r\n                                                    删除\r\n                                                </a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.hotelStatus != 0 }}\r\n                <div id="tripPlan_addPlan_hotel" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-hotel"></i>\r\n                            酒店安排\r\n                            <button class="btn btn-sm btn-success T-addResource T-addHotel" style="margin-left: 20px">\r\n                            <i class="ace-icon fa fa-plus"></i>\r\n                            新增\r\n                            </button>\r\n                            <button class="btn btn-sm btn-success pull-right mar-l-15 T-oneClick T-booking"> \r\n                                一键预订\r\n                            </button> \r\n                            <button class="btn btn-sm btn-success pull-right mar-l-15 T-oneClick T-asking"> \r\n                                一键询价\r\n                            </button> \r\n                        </h5> {{if basicInfo.oldHotelRequire}}\r\n                        <p class="requirementsPlan">原酒店计划要求：{{basicInfo.oldHotelRequire}}</p>{{/if}} {{if basicInfo.nowHotelRequire}}\r\n                        <p class="requirementsPlan">现酒店计划要求：{{basicInfo.nowHotelRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1500">\r\n                                <colgroup>\r\n                                    <col style="width:110px">\r\n                                    <col style="width:90px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="width:160px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:80px;">\r\n                                    <col style="width:110px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                        <th class="th-border">星级</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                                        <th class="th-border">联系方式</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                                        <th class="th-border">单价</th>\r\n                                        <th class="th-border">数量</th>\r\n                                        <th class="th-border">优惠</th>\r\n                                        <th class="th-border">应付</th>\r\n                                        <th class="th-border">预付款</th>\r\n                                        <th class="th-border">计划导付</th>\r\n                                        <th class="th-border">备注</th>\r\n                                        <th class="th-border">状态</th>\r\n                                        <th class="th-border" style="width: 170px;">操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each hotelList as hotel}} {{if hotel != "[]" || hotel != null}}\r\n                                    <tr {{if hotel.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}} data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{hotel.id}}{{/if}}" data-entity-hotelId="{{hotel.hotel.id}}" data-entity-roomId="{{if !!hotel.hotelRoom}}{{hotel.hotelRoom.id}} {{/if}}" data-entity-offerId="{{hotel.offerId}}" data-qouteId="{{if hotel.qouteId!=null}}{{hotel.qouteId}}{{/if}}">\r\n                                        <td class="T-whichDaysContainer T-whichDays" value="{{hotel.whichDay}}" data-qouteId="{{if hotel.qouteId!=null}}{{hotel.qouteId}}{{/if}}"  data-isconfirmaccount="{{hotel.isConfirmAccount}}"></td>\r\n                                        <td>\r\n                                            <select class="col-sm-12 no-padding tripPlanHotelStar T-tripPlanHotelStar" {{if hotel.isConfirmAccount || hotel.qouteId!=null}}disabled="disabled" {{/if}} style="width: 80px; {{if hotel.qouteId!=null}}background:#EFEBEB{{/if}}">\r\n                                                {{if hotel.hotel !=null}}\r\n                                                <option {{if hotel.hotel.level==0 }}selected="selected" {{/if}} value="">--全部--</option>\r\n                                                <option {{if hotel.hotel.level==1 }}selected="selected" {{/if}} value="1">三星以下</option>\r\n                                                <option {{if hotel.hotel.level==2 }}selected="selected" {{/if}} value="2">三星</option>\r\n                                                <option {{if hotel.hotel.level==3 }}selected="selected" {{/if}} value="3">准四星</option>\r\n                                                <option {{if hotel.hotel.level==4 }}selected="selected" {{/if}} value="4">四星</option>\r\n                                                <option {{if hotel.hotel.level==5 }}selected="selected" {{/if}} value="5">准五星</option>\r\n                                                <option {{if hotel.hotel.level==6 }}selected="selected" {{/if}} value="6">五星</option>\r\n                                                <option {{if hotel.hotel.level==7 }}selected="selected" {{/if}} value="7">五星以上</option>\r\n                                                {{/if}}\r\n                                            </select>\r\n                                            <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{hotel.id}}{{/if}}" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class="col-sm-12">\r\n                                                <input type="text" class="col-sm-12 {{if !hotel.isConfirmAccount}}T-chooseHotel{{/if}}" name="name" value="{{if hotel.hotel !=null}}{{hotel.hotel.name}}{{/if}}" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}} />\r\n                                                <input type="hidden" name="hotelId" value="{{if hotel.hotel !=null}}{{hotel.hotel.id}}{{/if}}">\r\n                                                {{if !hotel.isConfirmAccount}}\r\n                                                <span class="addResourceBtn T-addHotelResource R-right" data-right="1040002" title="添加酒店">\r\n                                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                    </span>\r\n                                                {{/if}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12" name="managerName" readonly="readonly" value="{{if hotel.hotel !=null}}{{hotel.hotel.managerName}} {{hotel.hotel.mobileNumber}}{{/if}}" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12 {{if !hotel.isConfirmAccount}}T-chooseHotelRoom{{/if}}" name="hotelRoom" value="{{if hotel.hotelRoom !=null}}{{hotel.hotelRoom.type}}{{/if}}" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/>\r\n                                            <input type="hidden" name="hotelRoomId" value="{{if hotel.hotelRoom !=null}}{{hotel.hotelRoom.id}}{{/if}}">\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12 price F-float F-money" name="price" maxlength="8" value="{{hotel.price}}" style="width: 60px;" maxlength="9" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12 F-float F-count" name="memberCount" maxlength="8" value="{{if hotel.memberCount || hotel.memberCount == 0}}{{hotel.memberCount}}{{else}}{{(basicInfo.touristAdultCount + basicInfo.touristChildCount)/2}}{{/if}}" style="width: 60px;" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12 price F-float F-money" name="reduceMoney" maxlength="8" value="{{hotel.reduceMoney}}" style="width: 60px;" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" class="col-sm-12 F-float F-money" readonly="readonly" name="needPayMoney" value="{{hotel.needPayMoney}}" style="width: 60px;" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#hotel.preType | getPlanPreTypeOption: hotel.isConfirmAccount}}\r\n                                            <input type="text" class="price F-float F-money" name="prePayMoney" maxlength="9" value="{{hotel.prePayMoney}}" style="width: 60px;" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#hotel.payType | getPlanPayTypeOption: hotel.isConfirmAccount}}\r\n                                            <input type="text" name="guidePayMoney" class="F-float F-money" value="{{if hotel.payType == 2}}{{hotel.signMoney}}{{else}}{{hotel.guidePayMoney}}{{/if}}" style="width: 60px;" maxlength="9" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="remark" class="col-sm-12 min-w150" value="{{hotel.remark}}" maxlength="500" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select name="orderStatus" {{if hotel.isConfirmAccount}}disabled="disabled" {{/if}}>\r\n                                                <option {{if hotel.orderStatus==1 }}selected="selected" {{/if}} value="1">未预定</option>\r\n                                                <option {{if hotel.orderStatus==2 }}selected="selected" {{/if}} value="2">预定中</option>\r\n                                                <option {{if hotel.orderStatus==3 }}selected="selected" {{/if}} value="3">已预订</option>\r\n                                                <option {{if hotel.orderStatus==0 }}selected="selected" {{/if}} value="0">无需预订</option>\r\n                                            </select>\r\n                                        </td>\r\n                                        <td>{{if !hotel.isConfirmAccount}}\r\n                                            <a class="cursor T-hotel-action T-hotel-askPrice">询价</a><a class="cursor T-hotel-action T-hotel-offerStatus"><i class="ace-icon fa fa-search"></i></a>\r\n                                            <a class="cursor T-hotel-action T-hotel-bookingStatus {{if hotel.inquiryStatus == 1}}T-hotel-booking{{/if}}" {{if hotel.inquiryStatus !=1 }}style="color: #bbb" {{/if}}>预订</a><a class="cursor T-hotel-action T-hotel-bookingView"><i class="ace-icon fa fa-search"></i></a><a class="cursor T-hotel-action T-btn-deleteTripPlanList" data-entity-ispayed="{{hotel.financialMoney}}" data-entity-name="hotel">删除</a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                        <!-- <td>\r\n                                                {{if hotel.offerId!=null}}\r\n                                                <a class="cursor T-Hotel-SendOrder T-sendOrder-Area R-right T-action" data-value="{{hotel.qouteId}}" data-right="1450001" data-entity-offerId={{hotel.offerId}}>发送订单</a>\r\n                                                {{/if}}\r\n                                            </td> -->\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.scenicStatus != 0 }}\r\n                <div id="tripPlan_addPlan_scenic" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-tree"></i> 景区安排\r\n                            <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addScenic">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldScenicRequire}}\r\n                        <p class="requirementsPlan">原景区计划要求：{{basicInfo.oldScenicRequire}}</p>{{/if}} {{if basicInfo.nowScenicRequire}}\r\n                        <p class="requirementsPlan">现景区计划要求：{{basicInfo.nowScenicRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400">\r\n                                <colgroup>\r\n                                    <col style="width:110px">\r\n                                    <col style="width:90px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="width:100px;">\r\n                                    <col style="width:80px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:110px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:60px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:60px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                        <th class="th-border">时间</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>景区</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>收费项目</th>\r\n                                        <th class="th-border">时长</th>\r\n                                        <th class="th-border">单价</th>\r\n                                        <th class="th-border">数量</th>\r\n                                        <th class="th-border">优惠</th>\r\n                                        <th class="th-border">订单号</th>\r\n                                        <th class="th-border">应付</th>\r\n                                        <th class="th-border">预付款</th>\r\n                                        <th class="th-border">计划导付</th>\r\n                                        <th class="th-border">备注</th>\r\n                                        <th class="th-border">操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each scenicList as scenic}} {{if scenic != "[]" || scenic != null}}\r\n                                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{scenic.id}}{{/if}}" {{if scenic.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                        <td class="T-whichDaysContainer" value="{{scenic.whichDay}}" data-isconfirmaccount="{{scenic.isConfirmAccount}}"></td>\r\n                                        <td>\r\n                                            <select name="tourTime" class="col-sm-12 no-padding" style="width: 75px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}>\r\n                                                <option {{if scenic.tourTime=="全天" }}selected="selected" {{/if}} value="全天">全天</option>\r\n                                                <option {{if scenic.tourTime=="上午" }}selected="selected" {{/if}} value="上午">上午</option>\r\n                                                <option {{if scenic.tourTime=="下午" }}selected="selected" {{/if}} value="下午">下午</option>\r\n                                            </select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class="col-sm-12">\r\n                                                <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{scenic.id}}{{/if}}" />\r\n                                                <input type="text" name="name" class="col-sm-12 {{if !scenic.isConfirmAccount}}T-chooseScenic{{/if}}" value="{{if scenic.scenic !=null}}{{scenic.scenic.name}}{{/if}}" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                                <input type="hidden" name="scenicId" value="{{if scenic.scenic !=null}}{{scenic.scenic.id}}{{/if}}" />\r\n                                                {{if !scenic.isConfirmAccount}}\r\n                                                <span class="addResourceBtn T-addScenicResource R-right" data-right="1060002" title="添加景区">\r\n                                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                </span>\r\n                                                {{/if}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="chargingProjects" class="col-sm-12 {{if !scenic.isConfirmAccount}}T-chooseScenicItem{{/if}}" value="{{if scenic.scenicItem !=null}}{{scenic.scenicItem.name}}{{/if}}" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                            <input type="hidden" name="scenicItemId" value="{{if scenic.scenicItem !=null}}{{scenic.scenicItem.id}}{{/if}}" />\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="tourDuration" maxlength="3" class="col-sm-12" value="{{scenic.tourDuration}}" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="{{scenic.price}}" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="{{if scenic.memberCount || scenic.memberCount == 0}}{{scenic.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="8" value="{{scenic.reduceMoney}}" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="orderNumber" maxlength="20" class="col-sm-12" value="{{scenic.orderNumber}}" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="{{scenic.needPayMoney}}" style="width: 60px;" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#scenic.preType | getPlanPreTypeOption: scenic.isConfirmAccount,true}}\r\n                                            <input type="text" name="prePayMoney" class="price F-float F-money" maxlength="9" value="{{scenic.prePayMoney}}" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">\r\n                                            {{#scenic.payType | getPlanPayTypeOption: scenic.isConfirmAccount}}\r\n                                            <input name="guidePayMoney" type="text" class="F-float F-money" value="{{if scenic.payType == 2}}{{scenic.signMoney}}{{else}}{{scenic.guidePayMoney}}{{/if}}" maxlength="9" style="width: 60px;" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input name="remark" type="text" class="col-sm-12 min-w150" value="{{scenic.remark}}" maxlength="500" {{if scenic.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>{{if !scenic.isConfirmAccount}}\r\n                                            <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{scenic.financialMoney}}" data-entity-name="scenic" title="删除">\r\n                                                删除\r\n                                            </a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.shopStatus != 0 }}\r\n                <div id="tripPlan_addPlan_shop" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-shopping-cart"></i> 购物安排\r\n                            <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addShop">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldShopRequire}}\r\n                        <p class="requirementsPlan">原购物计划要求：{{basicInfo.oldShopRequire}}</p>{{/if}} {{if basicInfo.nowShopRequire}}\r\n                        <p class="requirementsPlan">现购物计划要求：{{basicInfo.nowShopRequire}}</p>{{/if}}\r\n                        <table class="table table-striped table-bordered table-hover table-tripPlan-container">\r\n                            <colgroup>\r\n                                <col style="width:110px">\r\n                                <col style="width:150px;">\r\n                                <col style="width:90px;">\r\n                                <col style="width:110px;">\r\n                                <col style="width:160px;">\r\n                                <col style="min-width: 100px;">\r\n                                <col style="width:60px;">\r\n                            </colgroup>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                    <th class="th-border"><span class="necessary">*</span>购物店</th>\r\n                                    <th class="th-border">联系人</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">商品名</th>\r\n                                    <th class="th-border">备注</th>\r\n                                    <th class="th-border">操作</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                {{each shopList as shop}} {{if shop != "[]" || shop != null}}\r\n                                <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{shop.id}}{{/if}}" {{if shop.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                    <td class="T-whichDaysContainer" value="{{shop.whichDay}}" data-isconfirmaccount="{{shop.isConfirmAccount}}"></td>\r\n                                    <td>\r\n                                        <div class="col-sm-12">\r\n                                            <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{shop.id}}{{/if}}" />\r\n                                            <input type="text" name="name" class="col-sm-12 {{if !shop.isConfirmAccount}}T-chooseShop{{/if}}" value="{{if shop.shop != null}}{{shop.shop.name}}{{/if}}" {{if shop.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                            <input type="hidden" name="shopId" value="{{if shop.shop != null}}{{shop.shop.id}}{{/if}}" />\r\n                                            {{if !shop.isConfirmAccount}}\r\n                                            <span class="addResourceBtn T-addShopResource R-right" data-right="1050002" title="添加购物店">\r\n                                                    <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                </span>\r\n                                            {{/if}}\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="{{if shop.shop != null}}{{shop.shop.managerName}}{{/if}}" />\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="mobileNumber" readonly="readonly" class="col-sm-12" value="{{if shop.shop != null}}{{shop.shop.mobileNumber}}{{/if}}" />\r\n                                    </td>\r\n                                    <td>\r\n                                        {{if !!shop.shopArrangeItemSet}} {{if shop.shopArrangeItemSet.length > 0}} {{each shop.shopArrangeItemSet as rs index}}\r\n                                        <div data-entity-id="{{rs.id}}" {{if index> 0}}class="mar-t-10"{{/if}}>\r\n                                            <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="{{if rs.shopPolicy != null}}{{rs.shopPolicy.name}}{{/if}}" {{if shop.isConfirmAccount}}disabled="disabled"{{/if}} />\r\n                                            <input type="hidden" name="shopPolicyId" value="{{if rs.shopPolicy != null}}{{rs.shopPolicy.id}}{{/if}}"/>\r\n                                            {{if !shop.isConfirmAccount}}<button class="btn {{if  index == 0}}btn-success{{else}}btn-danger{{/if}} btn-sm btn-white T-shopPolicy {{if  index == 0}}T-add{{else}}T-del{{/if}}"> <i class="ace-icon fa {{if  index == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i></button>{{/if}}\r\n                                        </div>\r\n                                        {{/each}} {{else}}\r\n                                        <div data-entity-id="">\r\n                                            <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" {{if shop.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                            <input type="hidden" name="shopPolicyId" value="" />\r\n                                            {{if !shop.isConfirmAccount}}<button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>{{/if}}\r\n                                        </div>\r\n                                        {{/if}} {{else}}\r\n                                        <div data-entity-id="">\r\n                                            <input type="text" name="goodsPolicy" class="col-sm-9 T-chooseGoodsPolicy" value="" {{if shop.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                            <input type="hidden" name="shopPolicyId" value="" />\r\n                                            {{if !shop.isConfirmAccount}}<button class="btn btn-success btn-sm btn-white T-shopPolicy T-add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button>{{/if}}\r\n                                        </div>\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <input type="text" name="remark" class="col-sm-12 min-w150" value="{{shop.remark}}" maxlength="500" {{if shop.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                    </td>\r\n                                    <td>{{if !shop.isConfirmAccount}}\r\n                                        <a class="cursor T-btn-deleteTripPlanList" data-entity-name="shop" data-entity-ispayed="{{shop.financialMoney}}" title="删除">\r\n                                                删除\r\n                                            </a>\r\n                                        {{/if}}\r\n                                    </td>\r\n                                </tr>\r\n                                {{/if}} {{/each}}\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.selfPayStatus != 0 }}\r\n                <div id="tripPlan_addPlan_selfPay" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-credit-card"></i> 自费安排\r\n                            <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addSelfPay">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldSelfPayRequire}}\r\n                        <p class="requirementsPlan">原自费计划要求：{{basicInfo.oldSelfPayRequire}}</p>{{/if}} {{if basicInfo.nowSelfPayRequire}}\r\n                        <p class="requirementsPlan">现自费计划要求：{{basicInfo.nowSelfPayRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400">\r\n                                <colgroup>\r\n                                    <col style="width:110px">\r\n                                    <col style="width:150px;">\r\n                                    <col style="width:150px;">\r\n                                    <col style="width:160px;">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:150px">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:60px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                        <th><span class="necessary">*</span>自费商家</th>\r\n                                        <th>自费项目</th>\r\n                                        <th>联系方式</th>\r\n                                        <th style="width: 77px;">单价</th>\r\n                                        <th style="width: 77px;">底价</th>\r\n                                        <th style="width: 77px;">数量</th>\r\n                                        <th style="width: 77px;">优惠</th>\r\n                                        <th style="width: 77px;">应付</th>\r\n                                        <th style="width: 77px;">预付款</th>\r\n                                        <th style="width: 77px;">计划导付</th>\r\n                                        <th>备注</th>\r\n                                        <th>操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each selfPayList as selfPay}} {{if selfPay != "[]" || selfPay != null}}\r\n                                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{selfPay.id}}{{/if}}" {{if selfPay.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                        <td class="T-whichDaysContainer" value="{{selfPay.whichDay}}" data-isconfirmaccount="{{selfPay.isConfirmAccount}}"></td>\r\n                                        <td>\r\n                                            <div class="col-sm-12">\r\n                                                <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{selfPay.id}}{{/if}}" />\r\n                                                <input type="text" name="name" class="col-sm-12 T-chooseSelfPay" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.name}}{{/if}}" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                                <input type="hidden" name="selfPayId" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.id}}{{/if}}" />\r\n                                                {{if !selfPay.isConfirmAccount}}\r\n                                                <span class="addResourceBtn T-addSelfPayResource R-right" data-right="1090002" title="添加自费商家">\r\n                                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                    </span>\r\n                                                {{/if}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="hidden" name="selfPayItemId" value="{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.id}}{{/if}}" />\r\n                                            <input type="text" name="selfitem" class="col-sm-12 T-chooseSelfitem" value="{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.name}}{{/if}}" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="managerName" readonly="readonly" class="col-sm-12" value="{{if selfPay.selfPay != null}}{{selfPay.selfPay.managerName}} {{selfPay.selfPay.mobileNumber}}{{/if}}" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="{{if !!selfPay.marketPrice}}{{selfPay.marketPrice}}{{else}}{{selfPay.quotePrice}}{{/if}}" style="width: 60px;" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}{{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="lowestPrice" class="col-sm-12 price F-float F-money" maxlength="8" value="{{selfPay.price}}" style="width: 60px;" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="{{if selfPay.memberCount || selfPay.memberCount == 0}}{{selfPay.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" maxlength="8" style="width: 60px;" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="{{selfPay.reduceMoney}}" maxlength="9" style="width: 60px;" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="{{selfPay.needPayMoney}}" style="width: 60px;" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#selfPay.preType | getPlanPreTypeOption: selfPay.isConfirmAccount}}\r\n                                            <input type="text" name="prePayMoney" class="price F-float F-money" value="{{selfPay.prePayMoney}}" style="width: 60px;" maxlength="9" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#selfPay.payType | getPlanPayTypeOption: selfPay.isConfirmAccount}}\r\n                                            <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="{{if selfPay.payType == 2}}{{selfPay.signMoney}}{{else}}{{selfPay.guidePayMoney}}{{/if}}" maxlength="9" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="remark" class="col-sm-12 min-w150" value="{{selfPay.remark}}" maxlength="500" {{if selfPay.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>{{if !selfPay.isConfirmAccount}}\r\n                                            <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{selfPay.financialMoney}}" data-entity-name="selfpay" title="删除">\r\n                                                    删除\r\n                                                </a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.ticketStatus != 0 }}\r\n                <div id="tripPlan_addPlan_ticket" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-car"></i> 票务安排\r\n                            <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addTicket">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                        </h5> {{if basicInfo.oldTicketRequire}}\r\n                        <p class="requirementsPlan">原票务计划要求：{{basicInfo.oldTicketRequire}}</p>{{/if}} {{if basicInfo.nowTicketRequire}}\r\n                        <p class="requirementsPlan">现票务计划要求：{{basicInfo.nowTicketRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1500">\r\n                                <colgroup>\r\n                                    <col style="width:120px">\r\n                                    <col style="width:90px;">\r\n                                    <col style="width:120px;">\r\n                                    <col style="width:120px;">\r\n                                    <col style="width:100px;">\r\n                                    <col style="width:130px">\r\n                                    <col style="width:70px">\r\n                                    <col style="width:70px">\r\n                                    <col style="width:60px">\r\n                                    <col style="width:70px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:150px">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:60px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border"><span class="necessary">*</span>票务公司</th>\r\n                                        <th class="th-border">类型</th>\r\n                                        <th class="th-border">出发城市</th>\r\n                                        <th class="th-border">到达城市</th>\r\n                                        <th class="th-border">班次</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>时间</th>\r\n                                        <th class="th-border">座位级别</th>\r\n                                        <th class="th-border" style="width: 77px;">单价</th>\r\n                                        <th class="th-border" style="width: 77px;">数量</th>\r\n                                        <th class="th-border" style="width: 77px;">优惠</th>\r\n                                        <th class="th-border" style="width: 77px;">应付</th>\r\n                                        <th class="th-border" style="width: 77px;">预付款</th>\r\n                                        <th class="th-border" style="width: 77px;">计划导付</th>\r\n                                        <th class="th-border">备注</th>\r\n                                        <th class="th-border" style="width: 100px">操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each ticketList as ticket}} {{if ticket != "[]" || ticket != null}}\r\n                                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{ticket.id}}{{/if}}" {{if ticket.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                        <td>\r\n                                            <div class="col-sm-12">\r\n                                                <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{ticket.id}}{{/if}}" />\r\n                                                <input type="text" name="name" class="col-sm-12 T-chooseTicket" value="{{if ticket.ticket != null}}{{ticket.ticket.name}}{{/if}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                                <input type="hidden" name="ticketId" value="{{if ticket.ticket != null}}{{ticket.ticket.id}}{{/if}}">\r\n                                                {{if !ticket.isConfirmAccount}}\r\n                                                <span class="addResourceBtn T-addTicketResource R-right" data-right="1070002" title="添加票务">\r\n                                                        <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                                    </span>\r\n                                                {{/if}}\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <select name="type" class="col-sm-12 no-padding" style="width:70px;" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}>\r\n                                                <option {{if ticket.type=="1" }}selected="selected" {{/if}} value="1">机票</option>\r\n                                                <option {{if ticket.type=="2" }}selected="selected" {{/if}} value="2">汽车票</option>\r\n                                                <option {{if ticket.type=="3" }}selected="selected" {{/if}} value="3">火车票</option>\r\n                                                <option {{if ticket.type=="4" }}selected="selected" {{/if}} value="4">轮船票</option>\r\n                                            </select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="startingCity" maxlength="32" class="col-sm-12" value="{{ticket.startingCity}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="arriveCity" maxlength="32" class="col-sm-12" value="{{ticket.arriveCity}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="shift" maxlength="9" class="col-sm-12" value="{{ticket.shift}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="startTime" class="col-sm-12 T-dateTimePicker" value="{{ticket.startTime | dateTimeHSFormat}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="seatLevel" maxlength="32" value="{{ticket.seatLevel}}" class="col-sm-12" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="price" class="col-sm-12 price F-float F-money" maxlength="8" value="{{ticket.price}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="memberCount" class="col-sm-12 F-float F-count" maxlength="8" value="{{if ticket.memberCount || ticket.memberCount == 0}}{{ticket.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" maxlength="9" value="{{ticket.reduceMoney}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="{{ticket.needPayMoney}}" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#ticket.preType | getPlanPreTypeOption: ticket.isConfirmAccount}}\r\n                                            <input type="text" name="prePayMoney" class="price F-float F-money w-80" maxlength="9" value="{{ticket.prePayMoney}}" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#ticket.payType | getPlanPayTypeOption: ticket.isConfirmAccount}}\r\n                                            <input type="text" name="guidePayMoney" class="F-float F-money w-80" value="{{if ticket.payType == 2}}{{ticket.signMoney}}{{else}}{{ticket.guidePayMoney}}{{/if}}" maxlength="9" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="remark" class="col-sm-12 min-w150" value="{{ticket.remark}}" maxlength="500" {{if ticket.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>{{if !ticket.isConfirmAccount}}\r\n                                            <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{ticket.financialMoney}}" data-entity-name="ticket" title="删除">\r\n                                                    删除\r\n                                                </a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}} {{if arrangeItemsStauts.otherStatus != 0 }}\r\n                <div id="tripPlan_addPlan_other" class="tab-pane fade">\r\n                    <div class=" ui-sortable-handle">\r\n                        <h5 class="title-size">\r\n                            <i class="ace-icon fa fa-smile-o"></i> 其它安排\r\n                            <a href="javascript:void(0)" class="">\r\n                            <button class="btn btn-sm btn-success mar-l-15 T-addResource T-addOther">\r\n                                <i class="ace-icon fa fa-plus"></i>\r\n                                新增\r\n                            </button>\r\n                            </a>\r\n                        </h5> {{if basicInfo.oldOtherRequire}}\r\n                        <p class="requirementsPlan">原其它计划要求：{{basicInfo.oldOtherRequire}}</p>{{/if}} {{if basicInfo.nowOtherRequire}}\r\n                        <p class="requirementsPlan">现其它计划要求：{{basicInfo.nowOtherRequire}}</p>{{/if}}\r\n                        <div class="overflow-x min-w-1050">\r\n                            <table class="table table-striped table-bordered table-hover table-tripPlan-container w-1400">\r\n                                <colgroup>\r\n                                    <col style="width:110px">\r\n                                    <col style="width:120px;">\r\n                                    <col style="width:100px;">\r\n                                    <col style="width:110px;">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:80px">\r\n                                    <col style="width:150px">\r\n                                    <col style="min-width: 100px;">\r\n                                    <col style="width:60px;">\r\n                                </colgroup>\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class="th-border" style="width:100px;"><span class="necessary">*</span>日期</th>\r\n                                        <th class="th-border"><span class="necessary">*</span>项目</th>\r\n                                        <th class="th-border">联系人</th>\r\n                                        <th class="th-border">联系电话</th>\r\n                                        <th class="th-border" style="width: 77px;">单价</th>\r\n                                        <th class="th-border" style="width: 77px;">数量</th>\r\n                                        <th class="th-border" style="width: 77px;">优惠</th>\r\n                                        <th class="th-border" style="width: 77px;">应付</th>\r\n                                        <th class="th-border" style="width: 77px;">预付款</th>\r\n                                        <th class="th-border" style="width: 77px;">计划导付</th>\r\n                                        <th class="th-border">备注</th>\r\n                                        <th class="th-border">操作</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    {{each otherList as other}} {{if other != "[]" || other != null}}\r\n                                    <tr data-entity-arrangeid="{{if basicInfo.isArranged == 1}}{{other.id}}{{/if}}" {{if other.isConfirmAccount}}title="财务已对账，不可编辑！"{{/if}}>\r\n                                        <td class="T-whichDaysContainer" value="{{other.whichDay}}" data-isconfirmaccount="{{other.isConfirmAccount}}"></td>\r\n                                        <td>\r\n                                            <input type="hidden" name="id" value="{{if basicInfo.isArranged == 1}}{{other.id}}{{/if}}" />\r\n                                            <input type="text" maxlength="32" name="name" class="col-sm-12  {{if !other.isConfirmAccount}}T-other-name{{/if}}" value="{{other.name}}" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="managerName" maxlength="332" class="col-sm-12" value="{{other.managerName}}" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="mobileNumber" class="col-sm-12" value="{{other.mobileNumber}}" maxlength="11"{{if other.isConfirmAccount}}disabled="disabled"{{/if}} />\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="price" class="col-sm-12 price F-float F-money" value="{{other.price}}" maxlength="8" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="memberCount" class="col-sm-12 F-float F-count" value="{{if other.memberCount || other.memberCount == 0}}{{other.memberCount}}{{else}}{{basicInfo.touristAdultCount + basicInfo.touristChildCount}}{{/if}}" maxlength="8" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="reduceMoney" class="col-sm-12 price F-float F-money" value="{{other.reduceMoney}}" maxlength="9" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="needPayMoney" readonly="readonly" class="col-sm-12 F-float F-money" value="{{other.needPayMoney}}" maxlength="9" />\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#other.preType | getPlanPreTypeOption: other.isConfirmAccount}}\r\n                                            <input type="text" name="prePayMoney" class="price F-float F-money" value="{{other.prePayMoney}}" maxlength="9" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td><div class="inline-flex">{{#other.payType | getPlanPayTypeOption: other.isConfirmAccount}}\r\n                                            <input type="text" name="guidePayMoney" class="F-float F-money" value="{{if other.payType == 2}}{{other.signMoney}}{{else}}{{other.guidePayMoney}}{{/if}}" maxlength="9" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/></div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <input type="text" name="remark" class="col-sm-12 min-w150" value="{{other.remark}}" maxlength="500" {{if other.isConfirmAccount}}disabled="disabled"{{/if}}/>\r\n                                        </td>\r\n                                        <td>{{if !other.isConfirmAccount}}\r\n                                            <a class="cursor T-btn-deleteTripPlanList" data-entity-ispayed="{{other.financialMoney}}" data-entity-name="other" title="删除">\r\n                                                    删除\r\n                                                </a>\r\n                                            {{/if}}\r\n                                        </td>\r\n                                    </tr>\r\n                                    {{/if}} {{/each}}\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/if}}\r\n            </div>\r\n        </div>\r\n        <div class="col-md-12 text-center mar-t-20">\r\n            <button class="btn btn-sm btn-primary T-cancel">\r\n                <i class="ace-icon fa fa-times-circle"></i> 取消\r\n            </button>\r\n            <button data-entity-id="{{basicInfo.id}}" class="btn btn-sm btn-primary T-btn-submit-tripPlan">\r\n                <i class="ace-icon fa fa-check-circle"></i> 提交信息\r\n            </button>\r\n            {{if arrangeItemsStauts.restaurantStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_restaurant">\r\n                <label>\r\n                    <input name="restaurantStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.restaurantStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 餐饮安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.insuranceStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_insurance">\r\n                <label>\r\n                    <input name="insuranceStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.insuranceStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 保险安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.selfPayStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_selfPay">\r\n                <label>\r\n                    <input name="selfPayStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.selfPayStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 自费安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.ticketStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_ticket">\r\n                <label>\r\n                    <input name="ticketStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.ticketStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 票务安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.scenicStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_scenic">\r\n                <label>\r\n                    <input name="scenicStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.scenicStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 景区安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.shopStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_shop">\r\n                <label>\r\n                    <input name="shopStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.shopStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 购物安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.guideStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_guide">\r\n                <label>\r\n                    <input name="guideStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.guideStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 导游安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.busStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_bus">\r\n                <label>\r\n                    <input name="busStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.busStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 车辆安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.otherStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_other">\r\n                <label>\r\n                    <input name="otherStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.otherStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 其它安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}} {{if arrangeItemsStauts.hotelStatus != 0 }}\r\n            <div class="checkbox checkbox-inline mar-0 hidden" data-target="#tripPlan_addPlan_hotel">\r\n                <label>\r\n                    <input name="hotelStatus" type="checkbox" class="ace T-finishedArrange" {{if arrangeItemsStauts.hotelStatus==3 }}checked{{/if}}>\r\n                    <span class="lbl font-w"> 酒店安排完成</span>\r\n                </label>\r\n            </div>\r\n            {{/if}}\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});