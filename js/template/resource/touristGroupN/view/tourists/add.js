/*TMODJS:{"debug":true,"version":41,"md5":"32dd26c59096cbd6daa93a2b0a3ab4f5"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/tourists/add", '<div class="container-fluid T-container"> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title pull-left">小组信息</h3> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">收客单号</label> <input type="text" class="pull-left w-150" name="orderNumber"> </div> <div class="pull-right mar-r-10" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">是否买保险</label> <input type="checkbox" class="ace pull-left" name="buyInsurance" checked> <span class="lbl"></span> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>客户</th> <th>行程</th> <th width="100">接团日期</th> <th width="100">送团日期</th> <th>应收</th> <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th style="width: 170px;">团散界定</th> </tr> </thead> <tbody class="T-team-info"> <tr> <td> <div class="col-xs-12"> <input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" placeholder="点击选择客户"> <span class="addResourceBtn T-action T-add-client" title="添加客户"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></span> </div> </td> <td> <div class="hct-input-group col-xs-12"> <input type="text" class="col-xs-12" name="lineProductName" placeholder="请输入或搜索行程"> <span class="hct-group-add hct-cursor T-action T-search-trip">[搜索]</span> </div> </td> <td><input type="text" class="col-xs-12 datepicker" name="startTime"></td> <td><input type="text" class="col-xs-12 datepicker T-action" name="endTime"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float" readonly name="needPayAllMoney" placeholder="点击填写应收团款"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" placeholder="点击填写客人信息"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName"></td> <td> <label class="radio-inline"> <input checked="checked" type="radio" class="ace T-single-group" name="singlePlanDefine" > <span class="lbl">散客拼团</span> </label> <label class="radio-inline"> <input type="radio" class="ace T-indep-group" name="singlePlanDefine" > <span class="lbl">独立成团</span> </label> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-b-20"> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-join-group"> <i class="ace-icon fa fa-plus bigger-160"></i> 接团 </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-part-group"> <i class="ace-icon fa fa-plus bigger-160"></i> 参团 </button> <button class="btn btn-app btn-xs hct-bg-1FADE0 T-add-send-group"> <i class="ace-icon fa fa-plus bigger-160"></i> 送团 </button> </div> </div> <div class="row T-join-group hidden"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">接团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">抵达时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>接团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-join-group-list"> </tbody> </table> </div> </div> <div class="row T-offered hidden"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point T-part-group-text">参团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th>线路产品</th> <th width="100">出团日期</th> <th width="100">完团日期</th> <th width="95">本段团款</th> <th width="200">线路应付</th> <th class="T-is-hidden" width="200">返程住宿</th> <th width="95">本段代收团款</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-part-group-list">  </tbody> </table> </div> </div> <div class="row T-send-group hidden"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-title-point">送团</h3> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th width="135">送离时间</th> <th>班次</th> <th>车</th> <th>房</th> <th>它</th> <th>送团小计</th> <th>操作</th> </tr> </thead> <tbody class="T-send-group-list"> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息 <a class="hct-shrink-btn T-other-info-btn"> <i class="ace-icon fa fa-angle-double-down bigger-160"></i> </a> </h3> </div> </div> <div class="row hidden T-other-info-cont"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input "> <label>全陪</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideName"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>全陪电话</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="accompanyGuideMobile"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>组团单号</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="otaOrderNumber"> </div> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-3 hct-group-input"> <label>客源类型</label> <div class="col-xs-12"> <select name="memberType" class="col-xs-12"> <option selected="selected" value="0">内宾</option> <option value="1">外宾</option> </select> </div> </div> <div class="col-xs-3 hct-group-input"> <label>接站牌</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> <div class="col-xs-3 hct-group-input"> <label>送客地点</label> <div class="col-xs-12"> <input type="text" class="col-xs-12" name="sendPosition"> </div> </div> </div> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注</label> <div class="col-xs-12"> <textarea class="col-xs-12" name="remark"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save R-right" data-right="1470001"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div>');
});