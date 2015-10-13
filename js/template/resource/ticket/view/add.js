/*TMODJS:{"debug":true,"version":96,"md5":"d6a9aa398ebeca4d86d50ab98d00a8d2"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/add", '<div class="col-xs-12 addTicketContainer guideAdd"> <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>票务公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace ticket-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="32" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20" /> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">票务所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="500"></textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-ticket guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ');
});