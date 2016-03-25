/*TMODJS:{"version":76,"md5":"995da36d763ac049e5b69ac7982a778a"}*/
define(function(require){return require("../../../template")("resource/touristGroupN/view/add",'<div class="container-fluid T-container"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">\u5c0f\u7ec4\u4fe1\u606f</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">\u6536\u5ba2\u5355\u53f7</label> <input type="text" class="pull-left w-150" name="orderNumber"> </div> <div class="pull-right mar-r-10" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">\u662f\u5426\u4e70\u4fdd\u9669</label> <input type="checkbox" class="ace pull-left" name="buyInsurance" checked> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>\u5ba2\u6237</th> <th>\u884c\u7a0b</th> <th width="100">\u63a5\u56e2\u65e5\u671f</th> <th width="100">\u9001\u56e2\u65e5\u671f</th> <th>\u5e94\u6536</th> <th>\u5ba2\u4eba\u4fe1\u606f</th> <th>\u8054\u7cfb\u7535\u8bdd</th> <th>\u5916\u8054\u9500\u552e</th> <th style="width: 170px;">\u56e2\u6563\u754c\u5b9a</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency"></td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName"> <span class="hct-group-add hct-cursor T-action T-search-trip">[\u641c\u7d22]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime"></td> <td><input type="text" class="col-xs-12 datepicker" name="endTime"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails"></td> <td><input type="text" class="col-xs-12" name="mobileNumber"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName"></td> <td> <label class="radio-inline"> <input checked="checked" type="radio" class="ace T-single-group" name="singlePlanDefine" > <span class="lbl">\u6563\u5ba2\u62fc\u56e2</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" > <span class="lbl">\u72ec\u7acb\u6210\u56e2</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group"> <i class="ace-icon fa fa-plus bigger-160"></i> \u63a5\u56e2 </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-part-group"> <i class="ace-icon fa fa-plus bigger-160"></i> \u53c2\u56e2 </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group"> <i class="ace-icon fa fa-plus bigger-160"></i> \u9001\u56e2 </button> </div> </div> <div class="row T-join-group"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">\u63a5\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">\u62b5\u8fbe\u65f6\u95f4</th> <th>\u73ed\u6b21</th> <th>\u8f66</th> <th>\u623f</th> <th>\u5b83</th> <th>\u63a5\u56e2\u5c0f\u8ba1</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-join-group-list"> </tbody> </table> </div> </div> <div class="row T-offered"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">\u53c2\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>\u7ebf\u8def\u4ea7\u54c1</th> <th width="100">\u51fa\u56e2\u65e5\u671f</th> <th width="100">\u5b8c\u56e2\u65e5\u671f</th> <th>\u7ebf\u8def\u5e94\u4ed8</th> <th class="T-is-hidden">\u8fd4\u7a0b\u4f4f\u5bbf</th> <th class="T-is-hidden">\u53c2\u56e2\u5c0f\u8ba1</th> <th class="T-is-hidden" width="95">\u672c\u6bb5\u73b0\u6536\u56e2\u6b3e</th> <th>\u72b6\u6001</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-part-group-list"> <tr> <td> <div class="hct-input-group col-xs-12 T-action T-search-line"> <input type="text" class="col-xs-12 hct-cursor" readonly name="lineProductName"> <span class="hct-group-add cursor">[\u641c\u7d22]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="tripStartTime"></td> <td><input type="text" class="col-xs-12 datepicker" name="tripEndTime"></td> <td><input type="text" class="w-100 T-action T-line-cope hct-cursor" readonly name="lineNeedPayMoney"></td> <td class="T-is-hidden"><input type="text" class="w-100 T-action T-hotel hct-cursor" readonly name="hotelNeedPayMoney"></td> <td class="T-is-hidden"><input type="text" class="w-100 F-float F-money" readonly name="totalMoney"></td> <td class="T-is-hidden"><input type="text" class="w-100 F-float F-money" name="operateCurrentNeedPayMoney"></td> <td>-</td> <td> <a class="cursor T-action T-inner-turn">\u5185\u8f6c</a> | <a class="cursor T-action T-outer-turn">\u5916\u8f6c</a> | <a class="cursor T-action T-delete">\u5220\u9664</a> </td> </tr> </tbody> </table> </div> </div> <div class="row T-send-group"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">\u9001\u56e2</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">\u9001\u79bb\u65f6\u95f4</th> <th>\u73ed\u6b21</th> <th>\u8f66</th> <th>\u623f</th> <th>\u5b83</th> <th>\u9001\u56e2\u5c0f\u8ba1</th> <th>\u64cd\u4f5c</th> </tr> </thead> <tbody class="T-send-group-list"> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">\u5176\u5b83\u4fe1\u606f <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-down bigger-160"></i> </a> </h3> </div> </div> <div class="row hidden T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>\u5168\u966a</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u5168\u966a\u7535\u8bdd</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u7ec4\u56e2\u5355\u53f7</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>\u5ba2\u6e90\u7c7b\u578b</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option selected="selected" value="0">\u5185\u5bbe</option> <option value="1">\u5916\u5bbe</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u63a5\u7ad9\u724c</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>\u9001\u5ba2\u5730\u70b9</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>\u5907\u6ce8</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> \u63d0\u4ea4\u4fe1\u606f </button> </div> </div> </div>')});