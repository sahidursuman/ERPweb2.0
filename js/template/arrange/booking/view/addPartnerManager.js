/*TMODJS:{"debug":true,"version":3,"md5":"d271e28d8fdbc11720dc1016ad07181d"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/addPartnerManager", '<div class="col-xs-12 addPartnerManager"> <form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-20"></div> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>联系人姓名：</label> <input class="col-sm-5" type="text" name="managerName" /> </div> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>联系人电话：</label> <input class="col-sm-5" type="text" name="managerMobile" maxlength="11"/> </div> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right">所属部门：</label> <input class="col-sm-5" type="text" name="departmentName" /> </div> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right">所属职位：</label> <input class="col-sm-5" type="text" name="dutyName" /> </div> </form> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-addPartnerManager"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </div>');
});