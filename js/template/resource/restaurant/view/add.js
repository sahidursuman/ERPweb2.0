/*TMODJS:{"debug":true,"version":72,"md5":"d4f34f34afeb30eb9ee4002e67fc5047"}*/
define(function(require) {
    return require("../../../template")("resource/restaurant/view/add", '<div class="col-xs-12 addRestaurantContainer"> <form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">1</span> <label class="middle title-size">餐厅主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>餐厅名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" maxlength="32"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅设施:</label> <div class="col-sm-3"> <input type="text" name="facility" class="col-sm-12" maxlength="500"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅所在省市:</label> <div class="col-sm-8"> <select name="provinceId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" class="col-sm-3"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址"/> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace restaurant-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" ></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">2</span> <label class="middle title-size">餐标列表</label> <a href="javascript:void(0)" class="btn-restaurant-standard-add"> <button class="btn btn-sm btn-success btn-restaurant-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped border table-hover restaurantStandardList navFs"> <thead > <tr > <th class="table-border">用餐类型</th> <th class="table-border"><span class="necessary">*</span>餐标名称</th> <th class="table-border">菜单列表</th> <th class="table-border"><span class="necessary">*</span>时间范围</th> <th class="table-border"><span class="necessary">*</span>每位价格</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-restaurant"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});