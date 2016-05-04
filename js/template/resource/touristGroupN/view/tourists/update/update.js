/*TMODJS:{"debug":true,"version":222,"md5":"ecf41f9346418106681429bbeedaad58"}*/
define(function(require){return require('../../../../../template')('resource/touristGroupN/view/tourists/update/update', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,$escape=$utils.$escape,id=$data.id,baseInfo=$data.baseInfo,receiveTrip=$data.receiveTrip,$each=$utils.$each,rs=$data.rs,$index=$data.$index,joinTrip=$data.joinTrip,sendTrip=$data.sendTrip,otherInfo=$data.otherInfo,$out='';$out+='<div class="container-fluid T-container" data-id="';
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
$out+='> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>客户</th> <th>行程</th> <th width="100">接团日期</th> <th width="100">送团日期</th> <th>应收</th> <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th style="width: 170px;">团散界定</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="';
$line=32;$out+=$escape(baseInfo.fromPartnerAgency);
$out+='（';
$line=32;$out+=$escape(baseInfo.fromPartnerAgencyContactName);
$out+='）" data-id="';
$line=32;$out+=$escape(baseInfo.fromPartnerAgencyId);
$out+='" data-contact-id="';
$line=32;$out+=$escape(baseInfo.fromPartnerAgencyContactId);
$out+='" placeholder="点击选择客户"></td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName" value="';
$line=35;$out+=$escape(baseInfo.lineProductName);
$out+='" data-id="';
$line=35;$out+=$escape(baseInfo.lineProductId);
$out+='"> <span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime" value="';
$line=39;$out+=$escape($helpers. dateFormat(baseInfo.startTime ,  'yyyy-MM-dd'));
$out+='"></td> <td><input type="text" class="col-xs-12 datepicker T-action" name="endTime" value="';
$line=40;$out+=$escape($helpers. dateFormat(baseInfo.endTime ,  'yyyy-MM-dd'));
$out+='"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" value="';
$line=41;$out+=$escape(baseInfo.needPayAllMoney);
$out+='" data-json="';
$line=41;$out+=$escape(baseInfo.touristGroupFee);
$out+='" placeholder="点击填写应收团款"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" value="';
$line=42;$out+=$escape(baseInfo.name);
$out+='" data-json="';
$line=42;$out+=$escape(baseInfo.touristGroupMemberInfo);
$out+='" placeholder="点击填写客人信息"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="';
$line=43;$out+=$escape(baseInfo.mobileNumber);
$out+='"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="';
$line=44;$out+=$escape(baseInfo.outOPUserName);
$out+='" data-id="';
$line=44;$out+=$escape(baseInfo.outOPUserId);
$out+='"></td> <td> <label class="radio-inline"> <input type="radio" class="ace T-single-group" name="singlePlanDefine" ';
$line=47;if(baseInfo.customerType == 0){
$out+='checked';
$line=47;}
$out+=' ';
$line=47;if(baseInfo.customerTypeFlag == "1"){
$out+='disabled';
$line=47;}
$out+='> <span class="lbl">散客拼团</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" ';
$line=51;if(baseInfo.customerType == 1){
$out+='checked';
$line=51;}
$out+=' ';
$line=51;if(baseInfo.customerTypeFlag == "1"){
$out+='disabled';
$line=51;}
$out+='> <span class="lbl">独立成团</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group';
$line=62;if(baseInfo.customerType != 0){
$out+=' hidden';
$line=62;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button> <button class="btn btn-app btn-xs';
$line=63;if(baseInfo.joinFlag == "1"){
$out+=' hct-bg-BBB';
$line=63;}else{
$out+=' hct-bg-1FADE0 T-add-part-group';
$line=63;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> ';
$line=63;if(baseInfo.customerType == 1){
$out+='转团';
$line=63;}else{
$out+='参团';
$line=63;}
$out+=' </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group';
$line=64;if(baseInfo.customerType != 0){
$out+=' hidden';
$line=64;}
$out+='"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button> </div> </div> <div class="row T-join-group';
$line=68;if(baseInfo.customerType != 0 || receiveTrip.length == 0){
$out+=' hidden';
$line=68;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">接团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">抵达时间</th> <th>班次</th> <th width="160">车</th> <th width="160">房</th> <th width="160">它</th> <th>接团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-join-group-list"> ';
$line=86;$each(receiveTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=87;$out+=$escape(rs.id);
$out+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="';
$line=88;$out+=$escape($helpers. dateFormat(rs.arriveTime ,  'yyyy-MM-dd h:m'));
$out+='"></td> <td><input type="text" class="col-xs-12" name="arriveShift" value="';
$line=89;$out+=$escape(rs.arriveShift);
$out+='"></td> <td> <input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="';
$line=91;$out+=$escape(rs.busNeedPayAllMoney);
$out+='" data-json="';
$line=91;$out+=$escape(rs.receiveBus);
$out+='" data-id="';
$line=91;$out+=$escape(rs.receiveBusId);
$out+='" placeholder="点击填写车"> <a class="cursor ';
$line=92;if(rs.receiveBus && rs.receiveBus.clearFlag == 1){
$out+='hct-color-BBB';
$line=92;}else{
$out+='T-action T-clear';
$line=92;}
$out+='" data-status="joinBus">清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="';
$line=95;$out+=$escape(rs.hotelNeedPayAllMoney);
$out+='" data-json="';
$line=95;$out+=$escape(rs.receiveHotel);
$out+='" data-id="';
$line=95;$out+=$escape(rs.receiveHotelId);
$out+='" placeholder="点击填写房"> <a class="cursor ';
$line=96;if(rs.receiveHotel && rs.receiveHotel.clearFlag == 1){
$out+='hct-color-BBB';
$line=96;}else{
$out+='T-action T-clear';
$line=96;}
$out+='" data-status="joinHotel">清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="';
$line=99;$out+=$escape(rs.otherNeedPayAllMoney);
$out+='" data-json="';
$line=99;$out+=$escape(rs.receiveOther);
$out+='" data-id="';
$line=99;$out+=$escape(rs.receiveOtherId);
$out+='" placeholder="点击填写它"> <a class="cursor ';
$line=100;if(rs.receiveOther && rs.receiveOther.clearFlag == 1){
$out+='hct-color-BBB';
$line=100;}else{
$out+='T-action T-clear';
$line=100;}
$out+='" data-status="joinOther">清空</a> </td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="';
$line=102;$out+=$escape((rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1);
$out+='"></td> <td><a class="cursor ';
$line=104;if((rs.receiveBus && rs.receiveBus.clearFlag == 1) ||
	                    	(rs.receiveHotel && rs.receiveHotel.clearFlag == 1) ||
	                    	(rs.receiveOther && rs.receiveOther.clearFlag == 1)
	                    ){
$out+='hct-color-BBB ';
$line=105;}else{
$out+='T-action T-delete';
$line=105;}
$out+='">删除</a></td> </tr> ';
$line=107;});
$out+=' </tbody> </table> </div> </div> <div class="row T-offered ';
$line=113;if(!joinTrip || joinTrip.length ==0){
$out+='hidden';
$line=113;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">';
$line=115;if(baseInfo.customerType == 1){
$out+='转团';
$line=115;}else{
$out+='参团';
$line=115;}
$out+='</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>线路产品</th> <th width="100">出团日期</th> <th width="100">完团日期</th> <th width="95">本段团款</th> <th width="260">线路应付</th> <th class="T-is-hidden ';
$line=126;if(baseInfo.customerType != 0){
$out+='hidden';
$line=126;}
$out+='" width="260">返程住宿</th> <th width="95">本段代收团款</th> <th width="80">状态</th> <th width="80">操作</th> </tr> </thead> <tbody class="T-part-group-list"> ';
$line=133;$each(joinTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=134;$out+=$escape(rs.id);
$out+='"> <td> <div class="hct-input-group col-xs-12';
$line=136;if(rs.status == 1){
$out+=' T-action T-search-line';
$line=136;}
$out+='"> <input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="';
$line=137;$out+=$escape(rs.lineProductName);
$out+='" data-id="';
$line=137;$out+=$escape(rs.lineProductId);
$out+='" data-json="';
$line=137;$out+=$escape(rs.lineJson);
$out+='" placeholder="点击选择线路产品"> ';
$line=138;if(rs.status == 0 || rs.status == 1){
$out+='<span class="hct-group-add cursor">[搜索]</span>';
$line=138;}
$out+=' </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="';
$line=141;$out+=$escape($helpers. dateFormat(rs.tripStartTime ,  'yyyy-MM-dd'));
$out+='"';
$line=141;if(rs.status != 1){
$out+=' disabled';
$line=141;}
$out+='></td> <td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="';
$line=142;$out+=$escape($helpers. dateFormat(rs.tripEndTime ,  'yyyy-MM-dd'));
$out+='"';
$line=142;if(rs.status != 1){
$out+=' disabled';
$line=142;}
$out+='></td> <td><input type="text" class="col-xs-12 F-float F-money" name="subNeedPayMoney" value="';
$line=143;$out+=$escape(rs.subNeedPayMoney);
$out+='"';
$line=143;if(rs.status != 1){
$out+=' disabled';
$line=143;}
$out+='></td> <td> <input type="text" class="min-w-200 F-float F-money';
$line=145;if(rs.status == 1){
$out+=' T-action T-line-cope hct-cursor';
$line=145;}
$out+='" readonly name="lineNeedPayMoney" value="';
$line=145;$out+=$escape(rs.lineNeedPayAllMoney);
$out+='" data-json="';
$line=145;$out+=$escape(rs.lineInfo);
$out+='" data-id="';
$line=145;$out+=$escape(rs.lineInfoId);
$out+='" placeholder="点击填写线路应付"> <a class="cursor';
$line=146;if(rs.status != 1){
$out+=' hct-color-BBB';
$line=146;}else{
$out+=' T-action T-clear';
$line=146;}
$out+='" data-status="partLine">清空</a> </td> <td class="T-is-hidden ';
$line=148;if(baseInfo.customerType != 0){
$out+='hidden';
$line=148;}
$out+='"> <input type="text" class="min-w-200 F-float F-money';
$line=149;if(rs.status == 1){
$out+=' T-action T-hotel hct-cursor';
$line=149;}
$out+='" readonly name="hotelNeedPayMoney" value="';
$line=149;$out+=$escape(rs.hotelInputValue);
$out+='" data-json="';
$line=149;$out+=$escape(rs.hotelInfo);
$out+='" data-id="';
$line=149;$out+=$escape(rs.hotelInfoId);
$out+='" data-out-id="';
$line=149;$out+=$escape(rs.hotelOutRemarkId);
$out+='" placeholder="点击填写返程住宿"> <a class="cursor';
$line=150;if(rs.status != 1){
$out+=' hct-color-BBB';
$line=150;}else{
$out+=' T-action T-clear';
$line=150;}
$out+='" data-status="partHotel">清空</a> </td> <td><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney" value="';
$line=152;$out+=$escape(rs.operateCurrentNeedPayMoney);
$out+='" readonly></td> <td class="T-status" data-status="';
$line=153;$out+=$escape(rs.status);
$out+='">';
$line=153;$out+=$escape($helpers. getPartGroupStatusText(rs.status ));
$out+='</td> <td> <a class="cursor';
$line=155;if(rs.status == 1){
$out+=' T-action T-delete';
$line=155;}else{
$out+=' hct-color-BBB';
$line=155;}
$out+='">删除</a> </td> </tr> ';
$line=158;});
$out+=' </tbody> </table> </div> </div> <div class="row T-send-group';
$line=164;if(baseInfo.customerType != 0 || sendTrip.length == 0){
$out+=' hidden';
$line=164;}
$out+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">送团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">送离时间</th> <th>班次</th> <th width="160">车</th> <th width="160">房</th> <th width="160">它</th> <th>送团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-send-group-list"> ';
$line=182;$each(sendTrip,function(rs,$index){
$out+=' <tr data-id="';
$line=183;$out+=$escape(rs.id);
$out+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="';
$line=184;$out+=$escape($helpers. dateFormat(rs.leaveTime ,  'yyyy-MM-dd h:m'));
$out+='"></td> <td><input type="text" class="col-xs-12" name="leaveShift" value="';
$line=185;$out+=$escape(rs.leaveShift);
$out+='"></td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-bus" readonly name="receiveBus" value="';
$line=187;$out+=$escape(rs.busNeedPayAllMoney);
$out+='" data-json="';
$line=187;$out+=$escape(rs.sendBus);
$out+='" data-id="';
$line=187;$out+=$escape(rs.sendBusId);
$out+='" placeholder="点击填写车"> <a class="cursor ';
$line=188;if(rs.sendBus && rs.sendBus.clearFlag == 1){
$out+='hct-color-BBB';
$line=188;}else{
$out+='T-action T-clear';
$line=188;}
$out+='" data-status="sendBus">清空</a> </td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-hotel" readonly name="receiveHotel" value="';
$line=191;$out+=$escape(rs.hotelNeedPayAllMoney);
$out+='" data-json="';
$line=191;$out+=$escape(rs.sendHotel);
$out+='" data-id="';
$line=191;$out+=$escape(rs.sendHotelId);
$out+='" placeholder="点击填写房"> <a class="cursor ';
$line=192;if(rs.sendHotel && rs.sendHotel.clearFlag == 1){
$out+='hct-color-BBB';
$line=192;}else{
$out+='T-action T-clear';
$line=192;}
$out+='" data-status="sendHotel">清空</a> </td> <td> <input type="text" class="w-100 F-float F-money hct-cursor T-action T-other" readonly name="receiveOther" value="';
$line=195;$out+=$escape(rs.otherNeedPayAllMoney);
$out+='" data-json="';
$line=195;$out+=$escape(rs.sendOther);
$out+='" data-id="';
$line=195;$out+=$escape(rs.sendOtherId);
$out+='" placeholder="点击填写它"> <a class="cursor ';
$line=196;if(rs.sendOther && rs.sendOther.clearFlag == 1){
$out+='hct-color-BBB';
$line=196;}else{
$out+='T-action T-clear';
$line=196;}
$out+='" data-status="sendOther">清空</a> </td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="';
$line=198;$out+=$escape((rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1);
$out+='"></td> <td><a class="cursor ';
$line=200;if((rs.sendBus && rs.sendBus.clearFlag == 1) ||
	                    	(rs.sendHotel && rs.sendHotel.clearFlag == 1) ||
	                    	(rs.sendOther && rs.sendOther.clearFlag == 1)
	                    ){
$out+='hct-color-BBB ';
$line=201;}else{
$out+='T-action T-delete';
$line=201;}
$out+='">删除</a></td> </tr> ';
$line=203;});
$out+=' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息 <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-down bigger-160"></i> </a> </h3> </div> </div> <div class="row hidden T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>全陪</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName" value="';
$line=222;$out+=$escape(otherInfo.accompanyGuideName);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>全陪电话</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile" value="';
$line=228;$out+=$escape(otherInfo.accompanyGuideMobile);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>组团单号</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber" value="';
$line=234;$out+=$escape(otherInfo.otaOrderNumber);
$out+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>客源类型</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option ';
$line=243;if(otherInfo.memberType != 1){
$out+='selected';
$line=243;}
$out+=' value="0">内宾</option> <option value="1" ';
$line=244;if(otherInfo.memberType == 1){
$out+='selected';
$line=244;}
$out+='>外宾</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>接站牌</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard" value="';
$line=251;$out+=$escape(otherInfo.welcomeBoard);
$out+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>送客地点</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition" value="';
$line=257;$out+=$escape(otherInfo.sendPosition);
$out+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark">';
$line=264;$out+=$escape(otherInfo.remark);
$out+='</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div> ';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="container-fluid T-container" data-id="{{id}}" data-type="{{if baseInfo.customerType == 1}}group{{else}}single{{/if}}">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title pull-left">小组信息</h3>\r\n			<div class="pull-right" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">收客单号</label>\r\n				<input type="text" class="pull-left w-150" name="orderNumber" value="{{baseInfo.orderNumber}}">\r\n			</div>\r\n			<div class="pull-right mar-r-10" style="margin-top: -6px;">\r\n				<label class="pull-left control-label text-right mar-r-10">是否买保险</label>\r\n				<input type="checkbox" class="ace pull-left" name="buyInsurance" {{if !!baseInfo.buyInsurance}}checked{{/if}}>\r\n				<span class="lbl"></span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>客户</th>\r\n						<th>行程</th>\r\n						<th width="100">接团日期</th>\r\n						<th width="100">送团日期</th>\r\n						<th>应收</th>\r\n						<th>客人信息</th>\r\n						<th>联系电话</th>\r\n						<th>外联销售</th>\r\n						<th style="width: 170px;">团散界定</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-team-info">\r\n					<tr>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="{{baseInfo.fromPartnerAgency}}（{{baseInfo.fromPartnerAgencyContactName}}）" data-id="{{baseInfo.fromPartnerAgencyId}}" data-contact-id="{{baseInfo.fromPartnerAgencyContactId}}" placeholder="点击选择客户"></td>\r\n						<td>\r\n							<div class="hct-input-group col-xs-12">\r\n								<input type="text" class="col-xs-12" name="lineProductName" value="{{baseInfo.lineProductName}}" data-id="{{baseInfo.lineProductId}}">\r\n								<span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span>\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="startTime" value="{{baseInfo.startTime | dateFormat: \'yyyy-MM-dd\'}}"></td>\r\n						<td><input type="text" class="col-xs-12 datepicker T-action" name="endTime" value="{{baseInfo.endTime | dateFormat: \'yyyy-MM-dd\'}}"></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" value="{{baseInfo.needPayAllMoney}}" data-json="{{baseInfo.touristGroupFee}}" placeholder="点击填写应收团款"></td>\r\n						<td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" value="{{baseInfo.name}}" data-json="{{baseInfo.touristGroupMemberInfo}}" placeholder="点击填写客人信息"></td>\r\n						<td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="{{baseInfo.mobileNumber}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="{{baseInfo.outOPUserName}}" data-id="{{baseInfo.outOPUserId}}"></td>\r\n						<td>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-single-group" name="singlePlanDefine" {{if baseInfo.customerType == 0}}checked{{/if}} {{if baseInfo.customerTypeFlag == "1"}}disabled{{/if}}>\r\n								<span class="lbl">散客拼团</span>\r\n							</label>\r\n							<label class="radio-inline">\r\n								<input type="radio" class="ace T-indep-group" name="singlePlanDefine" {{if baseInfo.customerType == 1}}checked{{/if}} {{if baseInfo.customerTypeFlag == "1"}}disabled{{/if}}>\r\n								<span class="lbl">独立成团</span>\r\n							</label>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-b-20">\r\n			<button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button>\r\n			<button class="btn btn-app btn-xs{{if baseInfo.joinFlag == "1"}} hct-bg-BBB{{else}} hct-bg-1FADE0 T-add-part-group{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> {{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}} </button>\r\n			<button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group{{if baseInfo.customerType != 0}} hidden{{/if}}"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-join-group{{if baseInfo.customerType != 0 || receiveTrip.length == 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">接团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">抵达时间</th>\r\n						<th>班次</th>\r\n						<th width="160">车</th>\r\n						<th width="160">房</th>\r\n						<th width="160">它</th>\r\n						<th>接团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-join-group-list">\r\n				{{each receiveTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="{{rs.arriveTime | dateFormat: \'yyyy-MM-dd h:m\'}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="arriveShift" value="{{rs.arriveShift}}"></td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.receiveBus}}" data-id="{{rs.receiveBusId}}" placeholder="点击填写车">\r\n	                    	<a class="cursor {{if rs.receiveBus && rs.receiveBus.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinBus">清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.receiveHotel}}" data-id="{{rs.receiveHotelId}}" placeholder="点击填写房">\r\n	                    	<a class="cursor {{if rs.receiveHotel && rs.receiveHotel.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinHotel">清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.receiveOther}}" data-id="{{rs.receiveOtherId}}" placeholder="点击填写它">\r\n	                    	<a class="cursor {{if rs.receiveOther && rs.receiveOther.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="joinOther">清空</a>\r\n	                    </td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a class="cursor \r\n	                    {{if (rs.receiveBus && rs.receiveBus.clearFlag == 1) ||\r\n	                    	(rs.receiveHotel && rs.receiveHotel.clearFlag == 1) ||\r\n	                    	(rs.receiveOther && rs.receiveOther.clearFlag == 1)\r\n	                    }}hct-color-BBB\r\n	                    {{else}}T-action T-delete{{/if}}">删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-offered {{if !joinTrip || joinTrip.length ==0}}hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point T-part-group-text">{{if baseInfo.customerType == 1}}转团{{else}}参团{{/if}}</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th>线路产品</th>\r\n						<th width="100">出团日期</th>\r\n						<th width="100">完团日期</th>\r\n						<th width="95">本段团款</th>\r\n						<th width="260">线路应付</th>\r\n						<th class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}" width="260">返程住宿</th>\r\n						<th width="95">本段代收团款</th>\r\n						<th width="80">状态</th>\r\n						<th width="80">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-part-group-list">\r\n				{{each joinTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<div class="hct-input-group col-xs-12{{if rs.status == 1}} T-action T-search-line{{/if}}">\r\n								<input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="{{rs.lineProductName}}" data-id="{{rs.lineProductId}}" data-json="{{rs.lineJson}}" placeholder="点击选择线路产品">\r\n								{{if rs.status == 0 || rs.status == 1}}<span class="hct-group-add cursor">[搜索]</span>{{/if}}\r\n							</div>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="{{rs.tripStartTime | dateFormat: \'yyyy-MM-dd\'}}"{{if rs.status != 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="{{rs.tripEndTime | dateFormat: \'yyyy-MM-dd\'}}"{{if rs.status != 1}} disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="subNeedPayMoney" value="{{rs.subNeedPayMoney}}"{{if rs.status != 1}} disabled{{/if}}></td>\r\n						<td>\r\n							<input type="text" class="min-w-200 F-float F-money{{if rs.status == 1}} T-action T-line-cope hct-cursor{{/if}}" readonly name="lineNeedPayMoney" value="{{rs.lineNeedPayAllMoney}}" data-json="{{rs.lineInfo}}" data-id="{{rs.lineInfoId}}" placeholder="点击填写线路应付">\r\n							<a class="cursor{{if rs.status != 1}} hct-color-BBB{{else}} T-action T-clear{{/if}}" data-status="partLine">清空</a>\r\n						</td>\r\n						<td class="T-is-hidden {{if baseInfo.customerType != 0}}hidden{{/if}}">\r\n							<input type="text" class="min-w-200 F-float F-money{{if rs.status == 1}} T-action T-hotel hct-cursor{{/if}}" readonly name="hotelNeedPayMoney" value="{{rs.hotelInputValue}}" data-json="{{rs.hotelInfo}}" data-id="{{rs.hotelInfoId}}" data-out-id="{{rs.hotelOutRemarkId}}" placeholder="点击填写返程住宿">\r\n							<a class="cursor{{if rs.status != 1}} hct-color-BBB{{else}} T-action T-clear{{/if}}" data-status="partHotel">清空</a>\r\n						</td>\r\n						<td><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney" value="{{rs.operateCurrentNeedPayMoney}}" readonly></td>\r\n						<td class="T-status" data-status="{{rs.status}}">{{rs.status | getPartGroupStatusText}}</td>\r\n						<td>\r\n							<a class="cursor{{if rs.status == 1}} T-action T-delete{{else}} hct-color-BBB{{/if}}">删除</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	\r\n	<div class="row T-send-group{{if baseInfo.customerType != 0 || sendTrip.length == 0}} hidden{{/if}}">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-title-point">送团</h3>\r\n		</div>\r\n		<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover hct-table-update">\r\n				<thead>\r\n					<tr>\r\n						<th width="135">送离时间</th>\r\n						<th>班次</th>\r\n						<th width="160">车</th>\r\n						<th width="160">房</th>\r\n						<th width="160">它</th>\r\n						<th>送团小计</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-send-group-list">\r\n				{{each sendTrip as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="{{rs.leaveTime | dateFormat: \'yyyy-MM-dd h:m\'}}"></td>\r\n	                    <td><input type="text" class="col-xs-12" name="leaveShift" value="{{rs.leaveShift}}"></td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-bus" readonly name="receiveBus" value="{{rs.busNeedPayAllMoney}}" data-json="{{rs.sendBus}}" data-id="{{rs.sendBusId}}" placeholder="点击填写车">\r\n	                    	<a class="cursor {{if rs.sendBus && rs.sendBus.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendBus">清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-hotel" readonly name="receiveHotel" value="{{rs.hotelNeedPayAllMoney}}" data-json="{{rs.sendHotel}}" data-id="{{rs.sendHotelId}}" placeholder="点击填写房">\r\n	                    	<a class="cursor {{if rs.sendHotel && rs.sendHotel.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendHotel">清空</a>\r\n	                    </td>\r\n	                    <td>\r\n	                    	<input type="text" class="w-100 F-float F-money hct-cursor T-action T-other" readonly name="receiveOther" value="{{rs.otherNeedPayAllMoney}}" data-json="{{rs.sendOther}}" data-id="{{rs.sendOtherId}}" placeholder="点击填写它">\r\n	                    	<a class="cursor {{if rs.sendOther && rs.sendOther.clearFlag == 1}}hct-color-BBB{{else}}T-action T-clear{{/if}}" data-status="sendOther">清空</a>\r\n	                    </td>\r\n	                    <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="{{(rs.busNeedPayAllMoney || 0)*1 + (rs.hotelNeedPayAllMoney || 0)*1 + (rs.otherNeedPayAllMoney || 0)*1}}"></td>\r\n	                    <td><a class="cursor \r\n	                    {{if (rs.sendBus && rs.sendBus.clearFlag == 1) ||\r\n	                    	(rs.sendHotel && rs.sendHotel.clearFlag == 1) ||\r\n	                    	(rs.sendOther && rs.sendOther.clearFlag == 1)\r\n	                    }}hct-color-BBB\r\n	                    {{else}}T-action T-delete{{/if}}">删除</a></td>\r\n                    </tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<h3 class="hct-update-list-title hct-shrink-box">其它信息\r\n				<a class="hct-shrink-btn T-other-info-btn">\r\n					<i class="ace-icon fa fa-angle-double-down bigger-160"></i>\r\n				</a>\r\n			</h3>\r\n		</div>\r\n	</div>\r\n	<div class="row hidden T-other-info-cont">\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input ">\r\n				<label>全陪</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideName" value="{{otherInfo.accompanyGuideName}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>全陪电话</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="accompanyGuideMobile" value="{{otherInfo.accompanyGuideMobile}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>组团单号</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="otaOrderNumber" value="{{otherInfo.otaOrderNumber}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>客源类型</label>\r\n				<div class="col-xs-12">\r\n					<select name="memberType" class="col-xs-12"> \r\n						<option {{if otherInfo.memberType != 1}}selected{{/if}} value="0">内宾</option> \r\n						<option value="1" {{if otherInfo.memberType == 1}}selected{{/if}}>外宾</option> \r\n					</select>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>接站牌</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="welcomeBoard" value="{{otherInfo.welcomeBoard}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3 hct-group-input">\r\n				<label>送客地点</label>\r\n				<div class="col-xs-12">\r\n					<input type="text" class="col-xs-12" name="sendPosition" value="{{otherInfo.sendPosition}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 hct-group-input">\r\n			<label>备注</label>\r\n			<div class="col-xs-12">\r\n				<textarea class="col-xs-12" name="remark">{{otherInfo.remark}}</textarea>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20 mar-b-10">\r\n			<button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n		</div>\r\n	</div>\r\n</div>\r\n<!-- <div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;">\r\n	<a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;">\r\n		<i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i>\r\n	</a>\r\n</div> -->'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});