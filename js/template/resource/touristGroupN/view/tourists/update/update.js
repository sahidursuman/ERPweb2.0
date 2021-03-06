/*TMODJS:{"debug":true,"version":257,"md5":"85707fb8a79a2057e613c76fc450978d"}*/
define(function(require){return require('../../../../../template')('resource/touristGroupN/view/tourists/update/update', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,id=$data.id,baseInfo=$data.baseInfo,receiveTrip=$data.receiveTrip,$each=$utils.$each,rs=$data.rs,$index=$data.$index,joinTrip=$data.joinTrip,sendTrip=$data.sendTrip,otherInfo=$data.otherInfo,$out='';$out+='<div class="container-fluid T-container line-h-submit" data-id="';
$line=1;$out+=$escape(id);
$out+='" data-type="';
$line=1;if(baseInfo.customerType == 1){
$out+='group';
$line=1;}else{
$out+='single';
$line=1;}
$out+='"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">小组信息</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">收客单号</label> <input type="text" class="pull-left w-150" name="orderNumber" value="';
$line=7;$out+=$escape(baseInfo.orderNumber);
$out+='"> </div> <div class="pull-right mar-r-10" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">是否买保险</label> <input type="checkbox" class="ace pull-left" name="buyInsurance" ';
$line=11;if(!!baseInfo.buyInsurance){
$out+='checked';
$line=11;}
$out+='> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>客户</th> <th>行程</th> <th width="100">接团日期</th> <th width="100">送团日期</th> <th>应收</th> <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th style="width: 170px;">团散界定</th> </tr> </thead> <tbody class="T-team-info"> <tr data-lineproductid="';
$line=31;$out+=$escape(baseInfo.lineProductId);
$out+='"> <td> <div class="col-xs-12"> <input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="';
$line=34;$out+=$escape(baseInfo.fromPartnerAgency);
$line=34;if(baseInfo.fromPartnerAgencyContactName != ""){
$out+='（';
$line=34;$out+=$escape(baseInfo.fromPartnerAgencyContactName);
$out+='）';
$line=34;}
$out+='" data-id="';
$line=34;$out+=$escape(baseInfo.fromPartnerAgencyId);
$out+='" data-contact-id="';
$line=34;$out+=$escape(baseInfo.fromPartnerAgencyContactId);
$out+='" placeholder="点击选择客户"> <span class="addResourceBtn T-action T-add-client" title="添加客户"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> </div> </td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName" value="';
$line=40;$out+=$escape(baseInfo.lineProductName);
$out+='" data-id="';
$line=40;$out+=$escape(baseInfo.lineProductId);
$out+='" ';
$line=40;if(baseInfo.disableFlag== 1){
$out+='disabled';
$line=40;}
$out+='> ';
$line=41;if(baseInfo.disableFlag!= 1){
$out+='<span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span>';
$line=41;}
$out+=' </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime" value="';
$line=44;$out+=$escape($helpers. dateFormat(baseInfo.startTime ,  'yyyy-MM-dd'));
$out+='" ';
$line=44;if(baseInfo.disableFlag== 1){
$out+='disabled';
$line=44;}
$out+='></td> <td><input type="text" class="col-xs-12 datepicker T-action" name="endTime" value="';
$line=45;$out+=$escape($helpers. dateFormat(baseInfo.endTime ,  'yyyy-MM-dd'));
$out+='" ';
$line=45;if(baseInfo.disableFlag== 1){
$out+='disabled';
$line=45;}
$out+='></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float T-updateClick" readonly name="needPayAllMoney" value="';
$line=46;$out+=$escape(baseInfo.needPayAllMoney);
$out+='" data-json="';
$line=46;$out+=$escape(baseInfo.touristGroupFee);
$out+='" placeholder="点击填写应收团款"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info T-updateClick" readonly name="guestDetails" value="';
$line=47;$out+=$escape(baseInfo.name);
$out+='" data-json="';
$line=47;$out+=$escape(baseInfo.touristGroupMemberInfo);
$out+='" placeholder="点击填写客人信息"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="';
$line=48;$out+=$escape(baseInfo.mobileNumber);
$out+='"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="';
$line=49;$out+=$escape(baseInfo.outOPUserName);
$out+='" data-id="';
$line=49;$out+=$escape(baseInfo.outOPUserId);
$out+='"></td> <td> <label class="radio-inline"> <input type="radio" class="ace T-single-group" name="singlePlanDefine" ';
$line=52;if(baseInfo.customerType == 0){
$out+='checked';
$line=52;}
$out+=' ';
$line=52;if(baseInfo.customerTypeFlag == "1"){
$out+='disabled';
$line=52;}
$out+='> <span class="lbl">散客拼团</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" ';
$line=56;if(baseInfo.customerType == 1){
$out+='checked';
$line=56;}
$out+=' ';
$line=56;if(baseInfo.customerTypeFlag == "1"){
$out+='disabled';
$line=56;}
$out+='> <span class="lbl">独立成团</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs';
$line=67;if(baseInfo.joinFlag == "1"){
$out+=' hct-bg-BBB';
$line=67;}else{
$out+=' hct-bg-1FADE0 T-add-join-group';
$line=67;}
$line=67;if(baseInfo.customerType != 0){
$out+=' hidden';
$line=67;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button> <button class="btn btn-app btn-xs';
$line=68;if(baseInfo.joinFlag == "1"){
$out+=' hct-bg-BBB';
$line=68;}else{
$out+=' hct-bg-1FADE0 T-add-part-group';
$line=68;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> ';
$line=68;if(baseInfo.customerType == 1){
$out+='转团';
$line=68;}else{
$out+='参团';
$line=68;}
$out+=' </button> <button class="btn btn-app btn-xs';
$line=69;if(baseInfo.joinFlag == "1"){
$out+=' hct-bg-BBB';
$line=69;}else{
$out+=' hct-bg-1FADE0 T-add-send-group';
$line=69;}
$line=69;if(baseInfo.customerType != 0){
$out+=' hidden';
$line=69;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button> </div> </div> <div class="row T-join-group';
$line=73;if(baseInfo.customerType != 0 || receiveTrip.length == 0){
$out+=' hidden';
$line=73;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">接团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">抵达时间</th> <th>班次</th> <th width="160">车</th> <th width="160">房</th> <th width="160">它</th> <th>接团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-join-group-list"> ';
$line=91;$each(receiveTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=92;$out+=$escape(rs.id);
$out+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="';
$line=93;$out+=$escape($helpers. dateFormat(rs.arriveTime ,  'yyyy-MM-dd hh:mm'));
$out+='"></td> <td><input type="text" class="col-xs-12" name="arriveShift" value="';
$line=94;$out+=$escape(rs.arriveShift);
$out+='"></td> <td> <input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="';
$line=96;$out+=$escape(rs.busNeedPayAllMoney);
$out+='" data-json="';
$line=96;$out+=$escape(rs.receiveBus);
$out+='" data-id="';
$line=96;$out+=$escape(rs.receiveBusId);
$out+='" placeholder="点击填写车"> <a class="cursor ';
$line=97;if(rs.receiveBusClearFlag == 1){
$out+='hct-color-BBB';
$line=97;}else{
$out+='T-action T-clear';
$line=97;}
$out+='" data-status="joinBus" ';
$line=97;if(rs.receiveBusClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=97;}
$out+='>清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="';
$line=100;$out+=$escape(rs.hotelNeedPayAllMoney);
$out+='" data-json="';
$line=100;$out+=$escape(rs.receiveHotel);
$out+='" data-id="';
$line=100;$out+=$escape(rs.receiveHotelId);
$out+='" placeholder="点击填写房"> <a class="cursor ';
$line=101;if(rs.receiveHotelClearFlag){
$out+='hct-color-BBB';
$line=101;}else{
$out+='T-action T-clear';
$line=101;}
$out+='" data-status="joinHotel" ';
$line=101;if(rs.receiveHotelClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=101;}
$out+='>清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="';
$line=104;$out+=$escape(rs.otherNeedPayAllMoney);
$out+='" data-json="';
$line=104;$out+=$escape(rs.receiveOther);
$out+='" data-id="';
$line=104;$out+=$escape(rs.receiveOtherId);
$out+='" placeholder="点击填写它"> <a class="cursor ';
$line=105;if(rs.receiveOtherClearFlag == 1){
$out+='hct-color-BBB';
$line=105;}else{
$out+='T-action T-clear';
$line=105;}
$out+='" data-status="joinOther" ';
$line=105;if(rs.receiveOtherClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=105;}
$out+='>清空</a> </td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="';
$line=107;$out+=$escape((rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1);
$out+='"></td> <td><a ';
$line=109;if((rs.receiveBusClearFlag == 1) ||
	                    	(rs.receiveHotelClearFlag == 1) ||
	                    	(rs.receiveOtherClearFlag == 1)
	                    ){
$out+='class="cursor hct-color-BBB" title="已有中转安排，无法删除" ';
$line=110;}else{
$out+='class="cursor T-action T-delete"';
$line=110;}
$out+='>删除</a></td> </tr> ';
$line=112;});
$out+=' </tbody> </table> </div> </div> <div class="row T-offered ';
$line=118;if(!joinTrip || joinTrip.length ==0){
$out+='hidden';
$line=118;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">';
$line=120;if(baseInfo.customerType == 1){
$out+='转团';
$line=120;}else{
$out+='参团';
$line=120;}
$out+='</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>线路产品</th> <th width="100">出团日期</th> <th width="100">完团日期</th> <th width="95">本段团款</th> <th width="200">线路应付</th> <th class="T-is-hidden ';
$line=131;if(baseInfo.customerType != 0){
$out+='hidden';
$line=131;}
$out+='" width="200">返程住宿</th> <th width="95">本段代收团款</th> <th width="80">状态</th> <th width="80">操作</th> </tr> </thead> <tbody class="T-part-group-list"> ';
$line=138;$each(joinTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=139;$out+=$escape(rs.id);
$out+='"> <td> <div class="hct-input-group col-xs-12';
$line=141;if(rs.status == 1){
$out+=' T-action T-search-line';
$line=141;}
$out+='"> <input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="';
$line=142;$out+=$escape(rs.lineProductName);
$out+='" data-id="';
$line=142;$out+=$escape(rs.lineProductId);
$out+='" data-json="';
$line=142;$out+=$escape(rs.lineJson);
$out+='" placeholder="点击选择线路产品"> ';
$line=143;if(rs.status == 0 || rs.status == 1){
$out+='<span class="hct-group-add cursor">[搜索]</span>';
$line=143;}
$out+=' </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="';
$line=146;$out+=$escape($helpers. dateFormat(rs.tripStartTime ,  'yyyy-MM-dd'));
$out+='"';
$line=146;if(rs.status != 1){
$out+=' disabled';
$line=146;}
$out+='></td> <td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="';
$line=147;$out+=$escape($helpers. dateFormat(rs.tripEndTime ,  'yyyy-MM-dd'));
$out+='"';
$line=147;if(rs.status != 1){
$out+=' disabled';
$line=147;}
$out+='></td> <td><input type="text" class="col-xs-12 F-float F-money" name="subNeedPayMoney" value="';
$line=148;$out+=$escape(rs.subNeedPayMoney);
$out+='"';
$line=148;if(rs.status != 1){
$out+=' disabled';
$line=148;}
$out+=' data-change="1"></td> <td> <input type="text" class="w-150 F-float F-money';
$line=150;if(rs.status == 1){
$out+=' T-action T-line-cope hct-cursor';
$line=150;}
$out+='" readonly name="lineNeedPayMoney" value="';
$line=150;$out+=$escape(rs.lineNeedPayAllMoney);
$out+='" data-json="';
$line=150;$out+=$escape(rs.lineInfo);
$out+='" data-id="';
$line=150;$out+=$escape(rs.lineInfoId);
$out+='" placeholder="点击填写线路应付"> <a class="cursor';
$line=151;if(rs.status != 1){
$out+=' hct-color-BBB';
$line=151;}else{
$out+=' T-action T-clear';
$line=151;}
$out+='" data-status="partLine">清空</a> </td> <td class="T-is-hidden ';
$line=153;if(baseInfo.customerType != 0){
$out+='hidden';
$line=153;}
$out+='"> <input type="text" class="w-150 F-float F-money';
$line=154;if(rs.status == 1){
$out+=' T-action T-hotel hct-cursor';
$line=154;}
$out+='" readonly name="hotelNeedPayMoney" value="';
$line=154;$out+=$escape(rs.hotelInputValue);
$out+='" data-json="';
$line=154;$out+=$escape(rs.hotelInfo);
$out+='" data-id="';
$line=154;$out+=$escape(rs.hotelInfoId);
$out+='" data-out-id="';
$line=154;$out+=$escape(rs.hotelOutRemarkId);
$out+='" placeholder="点击填写返程住宿"> <a class="cursor';
$line=155;if(rs.status != 1 || rs.hotelInfoClearFlag == 1){
$out+=' hct-color-BBB';
$line=155;}else{
$out+=' T-action T-clear';
$line=155;}
$out+='" data-status="partHotel" ';
$line=155;if(rs.hotelInfoClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=155;}
$out+='>清空</a> </td> <td><input type="text" class="w-100 F-float F-money" name="currentNeedPayMoney" value="';
$line=157;$out+=$escape(rs.currentNeedPayMoney);
$out+='" readonly></td> <td class="T-status" data-status="';
$line=158;$out+=$escape(rs.status);
$out+='">';
$line=158;$out+=$escape($helpers. getPartGroupStatusText(rs.status ));
$out+='</td> <td> <a class="cursor ';
$line=160;if(rs.status != 1 || rs.hotelInfoClearFlag == 1){
$out+='hct-color-BBB';
$line=160;}else{
$out+='T-action T-delete';
$line=160;}
$out+='" ';
$line=160;if(rs.hotelInfoClearFlag == 1){
$out+='title="已有中转安排，无法删除"';
$line=160;}
$out+='>删除</a> </td> </tr> ';
$line=163;});
$out+=' </tbody> </table> </div> </div> <div class="row T-send-group';
$line=169;if(baseInfo.customerType != 0 || sendTrip.length == 0){
$out+=' hidden';
$line=169;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">送团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">送离时间</th> <th>班次</th> <th width="160">车</th> <th width="160">房</th> <th width="160">它</th> <th>送团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-send-group-list"> ';
$line=187;$each(sendTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=188;$out+=$escape(rs.id);
$out+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="';
$line=189;$out+=$escape($helpers. dateFormat(rs.leaveTime ,  'yyyy-MM-dd hh:mm'));
$out+='"></td> <td><input type="text" class="col-xs-12" name="leaveShift" value="';
$line=190;$out+=$escape(rs.leaveShift);
$out+='"></td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-bus" readonly name="receiveBus" value="';
$line=192;$out+=$escape(rs.busNeedPayAllMoney);
$out+='" data-json="';
$line=192;$out+=$escape(rs.sendBus);
$out+='" data-id="';
$line=192;$out+=$escape(rs.sendBusId);
$out+='" placeholder="点击填写车"> <a class="cursor ';
$line=193;if(rs.sendBusClearFlag == 1){
$out+='hct-color-BBB';
$line=193;}else{
$out+='T-action T-clear';
$line=193;}
$out+='" data-status="sendBus" ';
$line=193;if(rs.sendBusClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=193;}
$out+='>清空</a> </td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-hotel" readonly name="receiveHotel" value="';
$line=196;$out+=$escape(rs.hotelNeedPayAllMoney);
$out+='" data-json="';
$line=196;$out+=$escape(rs.sendHotel);
$out+='" data-id="';
$line=196;$out+=$escape(rs.sendHotelId);
$out+='" placeholder="点击填写房"> <a class="cursor ';
$line=197;if(rs.sendHotelClearFlag == 1){
$out+='hct-color-BBB';
$line=197;}else{
$out+='T-action T-clear';
$line=197;}
$out+='" data-status="sendHotel" ';
$line=197;if(rs.sendHotelClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=197;}
$out+='>清空</a> </td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-other" readonly name="receiveOther" value="';
$line=200;$out+=$escape(rs.otherNeedPayAllMoney);
$out+='" data-json="';
$line=200;$out+=$escape(rs.sendOther);
$out+='" data-id="';
$line=200;$out+=$escape(rs.sendOtherId);
$out+='" placeholder="点击填写它"> <a class="cursor ';
$line=201;if(rs.sendOtherClearFlag == 1){
$out+='hct-color-BBB';
$line=201;}else{
$out+='T-action T-clear';
$line=201;}
$out+='" data-status="sendOther" ';
$line=201;if(rs.sendOtherClearFlag == 1){
$out+='title="已有安排，不能清空"';
$line=201;}
$out+='>清空</a> </td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="';
$line=203;$out+=$escape((rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1);
$out+='"></td> <td><a ';
$line=205;if((rs.sendBusClearFlag == 1) ||
	                    	(rs.sendHotelClearFlag == 1) ||
	                    	(rs.sendOtherClearFlag == 1)
	                    ){
$out+='class="cursor hct-color-BBB" title="已有中转安排，无法删除" ';
$line=206;}else{
$out+='class="cursor T-action T-delete"';
$line=206;}
$out+='>删除</a></td> </tr> ';
$line=208;});
$out+=' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息 <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-up bigger-160"></i> </a> </h3> </div> </div> <div class="row T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>全陪</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName" value="';
$line=227;$out+=$escape(otherInfo.accompanyGuideName);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>全陪电话</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile" value="';
$line=233;$out+=$escape(otherInfo.accompanyGuideMobile);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>组团单号</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber" value="';
$line=239;$out+=$escape(otherInfo.otaOrderNumber);
$out+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>客源类型</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option ';
$line=248;if(otherInfo.memberType != 1){
$out+='selected';
$line=248;}
$out+=' value="0">内宾</option> <option value="1" ';
$line=249;if(otherInfo.memberType == 1){
$out+='selected';
$line=249;}
$out+='>外宾</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>接站牌</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard" value="';
$line=256;$out+=$escape(otherInfo.welcomeBoard);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>送客地点</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition" value="';
$line=262;$out+=$escape(otherInfo.sendPosition);
$out+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark">';
$line=269;$out+=$escape(otherInfo.remark);
$out+='</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="container-fluid T-container line-h-submit" data-id="{{id}}" data-type="{{if baseInfo.customerType == 1}}group{{else}}single{{/if}}">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title pull-left">小组信息</h3>\r\n			<div class="pull-right" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">收客单号</label>\r\n				<input type="text" class="pull-left w-150" name="orderNumber" value="{{baseInfo.orderNumber}}">\r\n			</div>\r\n			<div class="pull-right mar-r-10" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">是否买保险</label>\r\n				<input type="checkbox" class="ace pull-left" name="buyInsurance" {{if !!baseInfo.buyInsurance}}checked{{/if}}>\r\n				<span class="lbl"></span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>客户</th>\r\n						<th>行程</th>\r\n						<th width="100">接团日期</th>\r\n						<th width="100">送团日期</th>\r\n						<th>应收</th>\r\n						<th>客人信息</th>\r\n						<th>联系电话</th>\r\n						<th>外联销售</th>\r\n						<th style="width: 170px;">团散界定</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-team-info">\r\n					<tr data-lineproductid="{{baseInfo.lineProductId}}">\r\n						<td>\r\n							<div class="col-xs-12">\r\n								<input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="{{baseInfo.fromPartnerAgency}}{{if baseInfo.fromPartnerAgencyContactName != ""}}（{{baseInfo.fromPartnerAgencyContactName}}）{{/if}}" data-id="{{baseInfo.fromPartnerAgencyId}}" data-contact-id="{{baseInfo.fromPartnerAgencyContactId}}" placeholder="点击选择客户">\r\n								<span class="addResourceBtn T-action T-add-client" title="添加客户"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span>\r\n							</div>\r\n						</td>\r\n						<td>\r\n							<div class="hct-input-group col-xs-12">\r\n								<input type="text" class="col-xs-12" name="lineProductName" value="{{baseInfo.lineProductName}}" data-id="{{baseInfo.lineProductId}}" {{if baseInfo.disableFlag== 1}}disabled{{/if}}>\r\n								{{if baseInfo.disableFlag!= 1}}<span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span>{{/if}}\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="startTime" value="{{baseInfo.startTime | dateFormat: \'yyyy-MM-dd\'}}" {{if baseInfo.disableFlag== 1}}disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 datepicker T-action" name="endTime" value="{{baseInfo.endTime | dateFormat: \'yyyy-MM-dd\'}}" {{if baseInfo.disableFlag== 1}}disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float T-updateClick" readonly name="needPayAllMoney" value="{{baseInfo.needPayAllMoney}}" data-json="{{baseInfo.touristGroupFee}}" placeholder="点击填写应收团款"></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info T-updateClick" readonly name="guestDetails" value="{{baseInfo.name}}" data-json="{{baseInfo.touristGroupMemberInfo}}" placeholder="点击填写客人信息"></td>\r\n						<td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="{{baseInfo.mobileNumber}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="{{baseInfo.outOPUserName}}" data-id="{{baseInfo.outOPUserId}}"></td>\r\n						<td>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-single-group" name="singlePlanDefine" {{if baseInfo.customerType == 0}}checked{{/if}} {{if baseInfo.customerTypeFlag == "1"}}disabled{{/if}}>\r\n								<span class="lbl">散客拼团</span>\r\n							</label>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-indep-group" name="singlePlanDefine" {{if baseInfo.customerType == 1}}checked{{/if}} {{if baseInfo.customerTypeFlag == "1"}}disabled{{/if}}>\r\n								<span class="lbl">独立成团</span>\r\n							</label>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-b-20">\r\n			<button class="btn btn-app btn-xs{{if baseInfo.joinFlag == "1"}} hct-bg-BBB{{else}} hct-bg-1FADE0 T-add-join-group{{/if}}{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button>\r\n			<button class="btn btn-app btn-xs{{if baseInfo.joinFlag == "1"}} hct-bg-BBB{{else}} hct-bg-1FADE0 T-add-part-group{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> {{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}} </button>\r\n			<button class="btn btn-app btn-xs{{if baseInfo.joinFlag == "1"}} hct-bg-BBB{{else}} hct-bg-1FADE0 T-add-send-group{{/if}}{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-join-group{{if baseInfo.customerType != 0 || receiveTrip.length == 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">接团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">抵达时间</th>\r\n						<th>班次</th>\r\n						<th width="160">车</th>\r\n						<th width="160">房</th>\r\n						<th width="160">它</th>\r\n						<th>接团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-join-group-list">\r\n				{{each receiveTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="{{rs.arriveTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="arriveShift" value="{{rs.arriveShift}}"></td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.receiveBus}}" data-id="{{rs.receiveBusId}}" placeholder="点击填写车">\r\n	                    	<a class="cursor {{if rs.receiveBusClearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinBus" {{if rs.receiveBusClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.receiveHotel}}" data-id="{{rs.receiveHotelId}}" placeholder="点击填写房">\r\n	                    	<a class="cursor {{if rs.receiveHotelClearFlag}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinHotel" {{if rs.receiveHotelClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.receiveOther}}" data-id="{{rs.receiveOtherId}}" placeholder="点击填写它">\r\n	                    	<a class="cursor {{if rs.receiveOtherClearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinOther" {{if rs.receiveOtherClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a \r\n	                    {{if (rs.receiveBusClearFlag == 1) ||\r\n	                    	(rs.receiveHotelClearFlag == 1) ||\r\n	                    	(rs.receiveOtherClearFlag == 1)\r\n	                    }}class="cursor hct-color-BBB" title="已有中转安排，无法删除" \r\n	                    {{else}}class="cursor T-action T-delete"{{/if}}>删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-offered {{if !joinTrip || joinTrip.length ==0}}hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point T-part-group-text">{{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}}</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>线路产品</th>\r\n						<th width="100">出团日期</th>\r\n						<th width="100">完团日期</th>\r\n						<th width="95">本段团款</th>\r\n						<th width="200">线路应付</th>\r\n						<th class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}" width="200">返程住宿</th>\r\n						<th width="95">本段代收团款</th>\r\n						<th width="80">状态</th>\r\n						<th width="80">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-part-group-list">\r\n				{{each joinTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<div class="hct-input-group col-xs-12{{if rs.status == 1}} T-action T-search-line{{/if}}">\r\n								<input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="{{rs.lineProductName}}" data-id="{{rs.lineProductId}}" data-json="{{rs.lineJson}}" placeholder="点击选择线路产品">\r\n								{{if rs.status == 0 || rs.status == 1}}<span class="hct-group-add cursor">[搜索]</span>{{/if}}\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="{{rs.tripStartTime | dateFormat: \'yyyy-MM-dd\'}}"{{if rs.status != 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="{{rs.tripEndTime | dateFormat: \'yyyy-MM-dd\'}}"{{if rs.status != 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="subNeedPayMoney" value="{{rs.subNeedPayMoney}}"{{if rs.status != 1}} disabled{{/if}} data-change="1"></td>\r\n						<td>\r\n							<input type="text" class="w-150 F-float F-money{{if rs.status == 1}} T-action T-line-cope hct-cursor{{/if}}" readonly name="lineNeedPayMoney" value="{{rs.lineNeedPayAllMoney}}" data-json="{{rs.lineInfo}}" data-id="{{rs.lineInfoId}}" placeholder="点击填写线路应付">\r\n							<a class="cursor{{if rs.status != 1}} hct-color-BBB{{else}} T-action T-clear{{/if}}" data-status="partLine">清空</a>\r\n						</td>\r\n						<td class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}">\r\n							<input type="text" class="w-150 F-float F-money{{if rs.status == 1}} T-action T-hotel hct-cursor{{/if}}" readonly name="hotelNeedPayMoney" value="{{rs.hotelInputValue}}" data-json="{{rs.hotelInfo}}" data-id="{{rs.hotelInfoId}}" data-out-id="{{rs.hotelOutRemarkId}}" placeholder="点击填写返程住宿">\r\n							<a class="cursor{{if rs.status != 1 || rs.hotelInfoClearFlag == 1}} hct-color-BBB{{else}} T-action T-clear{{/if}}" data-status="partHotel" {{if rs.hotelInfoClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n						</td>\r\n						<td><input type="text" class="w-100 F-float F-money" name="currentNeedPayMoney" value="{{rs.currentNeedPayMoney}}" readonly></td>\r\n						<td class="T-status" data-status="{{rs.status}}">{{rs.status | getPartGroupStatusText}}</td>\r\n						<td>\r\n							<a class="cursor {{if rs.status != 1 || rs.hotelInfoClearFlag == 1}}hct-color-BBB{{else}}T-action T-delete{{/if}}" {{if rs.hotelInfoClearFlag == 1}}title="已有中转安排，无法删除"{{/if}}>删除</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-send-group{{if baseInfo.customerType != 0 || sendTrip.length == 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">送团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">送离时间</th>\r\n						<th>班次</th>\r\n						<th width="160">车</th>\r\n						<th width="160">房</th>\r\n						<th width="160">它</th>\r\n						<th>送团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-send-group-list">\r\n				{{each sendTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="{{rs.leaveTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="leaveShift" value="{{rs.leaveShift}}"></td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-bus" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.sendBus}}" data-id="{{rs.sendBusId}}" placeholder="点击填写车">\r\n	                    	<a class="cursor {{if rs.sendBusClearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendBus" {{if rs.sendBusClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-hotel" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.sendHotel}}" data-id="{{rs.sendHotelId}}" placeholder="点击填写房">\r\n	                    	<a class="cursor {{if rs.sendHotelClearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendHotel" {{if rs.sendHotelClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-other" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.sendOther}}" data-id="{{rs.sendOtherId}}" placeholder="点击填写它">\r\n	                    	<a class="cursor {{if rs.sendOtherClearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendOther" {{if rs.sendOtherClearFlag == 1}}title="已有安排，不能清空"{{/if}}>清空</a>\r\n	                    </td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a \r\n	                    {{if (rs.sendBusClearFlag == 1) ||\r\n	                    	(rs.sendHotelClearFlag == 1) ||\r\n	                    	(rs.sendOtherClearFlag == 1)\r\n	                    }}class="cursor hct-color-BBB" title="已有中转安排，无法删除" \r\n	                    {{else}}class="cursor T-action T-delete"{{/if}}>删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-shrink-box">其它信息\r\n				<a class="hct-shrink-btn T-other-info-btn">\r\n					<i class="ace-icon fa fa-angle-double-up bigger-160"></i>\r\n				</a>\r\n			</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row T-other-info-cont">\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input ">\r\n				<label>全陪</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideName" value="{{otherInfo.accompanyGuideName}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>全陪电话</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideMobile" value="{{otherInfo.accompanyGuideMobile}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>组团单号</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="otaOrderNumber" value="{{otherInfo.otaOrderNumber}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>客源类型</label>\r\n				<div class="col-xs-12">\r\n					<select name="memberType" class="col-xs-12"> \r\n						<option {{if otherInfo.memberType != 1}}selected{{/if}} value="0">内宾</option> \r\n						<option value="1" {{if otherInfo.memberType == 1}}selected{{/if}}>外宾</option> \r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>接站牌</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard" value="{{otherInfo.welcomeBoard}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>送客地点</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="sendPosition" value="{{otherInfo.sendPosition}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 hct-group-input">\r\n			<label>备注</label>\r\n			<div class="col-xs-12">\r\n				<textarea class="col-xs-12" name="remark">{{otherInfo.remark}}</textarea>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20 mar-b-10">\r\n			<button class="btn btn-block btn-primary T-btn-save guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n		</div>\r\n	</div>\r\n</div>\r\n<!-- <div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;">\r\n	<a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;">\r\n		<i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i>\r\n	</a>\r\n</div> -->'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});