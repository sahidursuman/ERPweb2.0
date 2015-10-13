/*TMODJS:{"debug":true,"version":57,"md5":"aa1099e1d6b6a5251d188eb5e84d3238"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/add", '<div class="col-xs-12 addInsuranceContainer guideAdd insuranceWidth"> <form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 保险主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="50"> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace insurance-status" value="1" name="status"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-2 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">公司所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">保险公司简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-insurance guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});