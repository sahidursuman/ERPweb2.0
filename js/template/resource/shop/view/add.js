/*TMODJS:{"debug":true,"version":104,"md5":"0663eaf13ffe191e31a669c93397b347"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/add", '<div class="col-xs-12 shopContainer globalAdd"> <form class="form-horizontal shopMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">商家主体信息</label> </h5> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="100"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary"></span>启用标志:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input checked="checked" type="checkbox" class="ace shop-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label> <div class="col-sm-3"> <input type="text" name="customerRebateMoney" class="col-sm-12" maxlength="9"> </div> <label class="col-sm-1 control-label no-padding-right" style="padding-left: 0px!important;">停车返佣(元/辆):</label> <div class="col-sm-3"> <input type="text" name="parkingRebateMoney" class="col-sm-12" maxlength="9"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">商家所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">商家简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal shopPolicyForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="title-size middle">政策列表</label> <a href="javascript:void(0)" class="btn-shop-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover shopStandardList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>商品名称</th> <th class="table-border" width="100"><span class="necessary">*</span>针对客源</th> <th class="table-border"width="80">购物政策</th> <th class="table-border">备注</th> <th class="table-border" width="60">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-shop guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});