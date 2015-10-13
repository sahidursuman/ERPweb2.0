/*TMODJS:{"debug":true,"version":56,"md5":"5208799fcd0e10f61f61d43c94025b6e"}*/
define(function(require) {
    return require("../../../template")("resource/scenic/view/add", '<div class="col-xs-12 addScenicContainer globalAdd"> <form class="form-horizontal scenicMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">景区主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>景区名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace scenic-status" value="1" name="status"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">景区所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">季节政策:</label> <div class="col-sm-6"> <input type="text" name="seasonPolicy" class="col-sm-12 addressMinute" placeholder="季节政策"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">景区简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal scenicProjectForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">2</span> <label class="title-size middle">项目列表</label> <a href="javascript:void(0)" class="btn-scenic-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover scenicItemStandardList"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>收费项目</th> <th class="table-border"><span class="necessary">*</span>时间范围</th> <th class="table-border"><span class="necessary">*</span>单价(元)</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-scenic guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});