/*TMODJS:{"debug":true,"version":96,"md5":"365a84ea4d0367dc0309b335dc8c6d19"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/add", '<div class="col-xs-12 T-add-selfpay-form globalAdd"> <form class="form-horizontal T-selfpayMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">自费项目主体信息</label> </h5> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="100"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input checked="checked" type="checkbox" class="ace T-selfpay-status" value="1" name="status"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div>  <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label> <div class="col-sm-3"> <input type="text" name="customerRebateMoney" class="col-sm-12" maxlength="7"> </div> <label class="col-sm-1 control-label no-padding-right">公司所在省市:</label> <div class="col-sm-3"> <select name="provinceId"style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div>     <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/> </div> </div>    <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">公司简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group priceList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">2</span> <label class="title-size middle">项目价格列表</label> <a href="javascript:void(0)" class="btn-price-add"> <button class="btn btn-sm btn-success T-btn-selfpay-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover priceList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>项目名称</th> <th class="table-border">针对客源</th> <th class="table-border"><span class="necessary">*</span>时间区间</th> <th class="table-border"><span class="necessary">*</span>内部价格(元)</th> <th class="table-border"><span class="necessary">*</span>市场价格(元)</th> <th class="table-border"><span class="necessary">*</span>导游返佣(%)</th> <th class="table-border"><span class="necessary">*</span>旅行社返佣(%)</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody class="T-selfpayList-Tbody"> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit-selfpay"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});