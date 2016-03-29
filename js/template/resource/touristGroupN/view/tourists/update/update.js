/*TMODJS:{"version":127,"md5":"8a63e945fc313cf05febe50b8b586c07"}*/
define(function(require){return require("/js/template/template")("resource/touristGroupN/view/tourists/update/update",function(a){"use strict";var b=this,c=b.$helpers,d=b.$escape,e=a.id,f=a.baseInfo,g=b.$each,h=a.receiveTrip,i=(a.rs,a.$index,a.joinTrip),j=a.sendTrip,k=a.otherInfo,l="";return l+='<div class="container-fluid T-container" data-id="',l+=d(e),l+='"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">\u5c0f\u7ec4\u4fe1\u606f</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">\u6536\u5ba2\u5355\u53f7</label> <input type="text" class="pull-left w-150" name="orderNumber" value="',l+=d(f.orderNumber),l+='"> </div> <div class="pull-right mar-r-10" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">\u662f\u5426\u4e70\u4fdd\u9669</label> <input type="checkbox" class="ace pull-left" name="buyInsurance" ',f.buyInsurance&&(l+="checked"),l+='> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>\u5ba2\u6237</th> <th>\u884c\u7a0b</th> <th width="100">\u63a5\u56e2\u65e5\u671f</th> <th width="100">\u9001\u56e2\u65e5\u671f</th> <th>\u5e94\u6536</th> <th>\u5ba2\u4eba\u4fe1\u606f</th> <th>\u8054\u7cfb\u7535\u8bdd</th> <th>\u5916\u8054\u9500\u552e</th> <th style="width: 170px;">\u56e2\u6563\u754c\u5b9a</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" value="',l+=d(f.fromPartnerAgency),l+='" data-id="',l+=d(f.fromPartnerAgencyId),l+='"></td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName" value="',l+=d(f.lineProductName),l+='" data-id="',l+=d(f.lineProductId),l+='"> <span class="hct-group-add hct-cursor T-action T-search-trip">[\u641c\u7d22]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime" value="',l+=d(f.startTime),l+='"></td> <td><input type="text" class="col-xs-12 datepicker" name="endTime" value="',l+=d(f.endTime),l+='"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" value="',l+=d(f.needPayAllMoney),l+='" data-json="',l+=d(f.touristGroupFee),l+='"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" value="',l+=d(f.name),l+='" data-json="',l+=d(f.touristGroupMemberInfo),l+='"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="',l+=d(f.mobileNumber),l+='"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="',l+=d(f.outOPUserName),l+='" data-id="',l+=d(f.outOPUserId),l+='"></td> <td> <label class="radio-inline"> <input type="radio" class="ace T-single-group" name="singlePlanDefine" ',0==f.customerType&&(l+="checked"),l+='> <span class="lbl">\u6563\u5ba2\u62fc\u56e2</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" ',1==f.customerType&&(l+="checked"),l+='> <span class="lbl">\u72ec\u7acb\u6210\u56e2</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group',0!=f.customerType&&(l+=" hidden"),l+='"> <i class="ace-icon fa fa-plus bigger-160"></i> \u63a5\u56e2 </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-part-group"> <i class="ace-icon fa fa-plus bigger-160"></i> ',l+=0==f.customerType?"\u8f6c\u56e2":"\u53c2\u56e2",l+=' </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group',0!=f.customerType&&(l+=" hidden"),l+='"> <i class="ace-icon fa fa-plus bigger-160"></i> \u9001\u56e2 </button> </div> </div> <div class="row T-join-group',0!=f.customerType&&(l+=" hidden"),l+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">\u63a5\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">\u62b5\u8fbe\u65f6\u95f4</th> <th>\u73ed\u6b21</th> <th>\u8f66</th> <th>\u623f</th> <th>\u5b83</th> <th>\u63a5\u56e2\u5c0f\u8ba1</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-join-group-list"> ',g(h,function(a){l+=' <tr data-id="',l+=d(a.id),l+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="arriveTime" value="',l+=d(a.arriveTime),l+='"></td> <td><input type="text" class="col-xs-12" name="arriveShift" value="',l+=d(a.arriveShift),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly name="receiveBus" value="',l+=d(a.busNeedPayAllMoney),l+='" data-json="',l+=d(a.receiveBus),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly name="receiveHotel" value="',l+=d(a.hotelNeedPayAllMoney),l+='" data-json="',l+=d(a.receiveHotel),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-other F-float F-money" readonly name="receiveOther" value="',l+=d(a.otherNeedPayAllMoney),l+='" data-json="',l+=d(a.receiveOther),l+='"></td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="',l+=d(a.busNeedPayAllMoney+a.hotelNeedPayAllMoney+a.otherNeedPayAllMoney),l+='"></td> <td><a class="cursor T-action T-delete">\u5220\u9664</a></td> </tr> '}),l+=' </tbody> </table> </div> </div> <div class="row T-offered"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">\u53c2\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>\u7ebf\u8def\u4ea7\u54c1</th> <th width="100">\u51fa\u56e2\u65e5\u671f</th> <th width="100">\u5b8c\u56e2\u65e5\u671f</th> <th>\u7ebf\u8def\u5e94\u4ed8</th> ',0==f.customerType&&(l+=' <th class="T-is-hidden">\u8fd4\u7a0b\u4f4f\u5bbf</th> <th class="T-is-hidden">\u53c2\u56e2\u5c0f\u8ba1</th> <th class="T-is-hidden" width="95">\u672c\u6bb5\u73b0\u6536\u56e2\u6b3e</th> '),l+=' <th>\u72b6\u6001</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-part-group-list"> ',g(i,function(a){l+=' <tr data-id="',l+=d(a.id),l+='"> <td> <div class="hct-input-group col-xs-12',(0==a.status||1==a.status)&&(l+=" T-action T-search-line"),l+='"> <input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName" value="',l+=d(a.lineProductName),l+='" data-id="',l+=d(a.lineProductId),l+='" data-json="',l+=d(a.lineJson),l+='"> ',(0==a.status||1==a.status)&&(l+='<span class="hct-group-add cursor">[\u641c\u7d22]</span>'),l+=' </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="tripStartTime" value="',l+=d(a.tripStartTime),l+='"',a.status>1&&(l+=" disabled"),l+='></td> <td><input type="text" class="col-xs-12 datepicker" name="tripEndTime" value="',l+=d(a.tripEndTime),l+='"',a.status>1&&(l+=" disabled"),l+='></td> <td><input type="text" class="w-100',(0==a.status||1==a.status)&&(l+=" T-action T-line-cope hct-cursor"),l+='" readonly name="lineNeedPayMoney" value="',l+=d(a.lineNeedPayAllMoney),l+='" data-json="',l+=d(a.lineInfo),l+='"></td> <td class="T-is-hidden ',0!=f.customerType&&(l+="hidden"),l+='"><input type="text" class="w-100',(0==a.status||1==a.status)&&(l+=" T-action T-hotel hct-cursor"),l+='" readonly name="hotelNeedPayMoney" value="',l+=d(a.hotelNeedPayAllMoney),l+='" data-json="',l+=d(a.hotelInfo),l+='"></td> <td class="T-is-hidden ',0!=f.customerType&&(l+="hidden"),l+='"><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="',l+=d(a.hotelNeedPayAllMoney+a.lineNeedPayAllMoney),l+='"></td> <td class="T-is-hidden ',0!=f.customerType&&(l+="hidden"),l+='"><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney" value="',l+=d(a.operateCurrentNeedPayMoney),l+='"',a.status>1&&(l+=" disabled"),l+="></td> <td>",l+=d(c.getPartGroupStatusText(a.status)),l+='</td> <td> <a class="cursor T-inner-turn',l+="{}"!=a.outTransferInfo||a.status>1?" hct-color-BBB":" T-action",l+='" data-json="',l+=d(a.innerTransferInfo),l+='">\u5185\u8f6c</a> | <a class="cursor T-outer-turn',l+="{}"!=a.innerTransferInfo||a.status>1?" hct-color-BBB":" T-action",l+='" data-json="',l+=d(a.outTransferInfo),l+='">\u5916\u8f6c</a> | <a class="cursor',(0==a.status||1==a.status)&&(l+=" T-action T-delete"),l+='">\u5220\u9664</a> </td> </tr> '}),l+=' </tbody> </table> </div> </div> <div class="row T-send-group',0!=f.customerType&&(l+=" hidden"),l+='"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">\u9001\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">\u9001\u79bb\u65f6\u95f4</th> <th>\u73ed\u6b21</th> <th>\u8f66</th> <th>\u623f</th> <th>\u5b83</th> <th>\u9001\u56e2\u5c0f\u8ba1</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-send-group-list"> ',g(j,function(a){l+=' <tr data-id="',l+=d(a.id),l+='"> <td><input type="text" class="col-xs-12 datetimepicker" name="leaveTime" value="',l+=d(a.leaveTime),l+='"></td> <td><input type="text" class="col-xs-12" name="leaveShift" value="',l+=d(a.leaveShift),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-bus" readonly name="receiveBus" value="',l+=d(a.busNeedPayAllMoney),l+='" data-json="',l+=d(a.sendBus),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-hotel" readonly name="receiveHotel" value="',l+=d(a.hotelNeedPayAllMoney),l+='" data-json="',l+=d(a.sendHotel),l+='"></td> <td><input type="text" class="w-100 hct-cursor T-action T-other" readonly name="receiveOther" value="',l+=d(a.otherNeedPayAllMoney),l+='" data-json="',l+=d(a.sendOther),l+='"></td> <td><input type="text" class="w-100 F-float F-money" readonly name="totalMoney" value="',l+=d(a.busNeedPayAllMoney+a.hotelNeedPayAllMoney+a.otherNeedPayAllMoney),l+='"></td> <td><a class="cursor T-action T-delete">\u5220\u9664</a></td> </tr> '}),l+=' </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">\u5176\u5b83\u4fe1\u606f <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-down bigger-160"></i> </a> </h3> </div> </div> <div class="row hidden T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>\u5168\u966a</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName" value="',l+=d(k.accompanyGuideName),l+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u5168\u966a\u7535\u8bdd</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile" value="',l+=d(k.accompanyGuideMobile),l+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u7ec4\u56e2\u5355\u53f7</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber" value="',l+=d(k.otaOrderNumber),l+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>\u5ba2\u6e90\u7c7b\u578b</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option ',1!=k.memberType&&(l+="selected"),l+=' value="0">\u5185\u5bbe</option> <option value="1" ',1==k.memberType&&(l+="selected"),l+='>\u5916\u5bbe</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u63a5\u7ad9\u724c</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard" value="',l+=d(k.welcomeBoard),l+='"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u9001\u5ba2\u5730\u70b9</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition" value="',l+=d(k.sendPosition),l+='"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>\u5907\u6ce8</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark">',l+=d(k.remark),l+='</textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> \u63d0\u4ea4\u4fe1\u606f </button> </div> </div> </div>',new String(l)})});