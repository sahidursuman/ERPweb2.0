/*TMODJS:{"debug":true,"version":258,"md5":"6983c49625f06b930e38fbf2a295819f"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/add", '<div class="col-xs-12 addBusCompanyContainer"> <form class="form-horizontal busCompanyMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <h5 > <span class="badge badge-primary">1</span> <label class="middle title-size">车队主体信息</label> </h5> <div class="widget-body" > <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队名称:</label> <div class="col-sm-3"> <input type="text" name="companyName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace busCompany-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>车队类型:</label> <div class="col-sm-3"> <select name="type" class="col-sm-12"> <option selected="selected" value="0">个人</option> <option value="1">集团</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" maxlength="45"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">车队所在省市:</label> <div class="col-sm-9"> <select name="provinceId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" class="col-sm-3"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">车队简介:</label> <div class="col-sm-8"> <textarea class="form-control col-sm-12" name="remark" maxlength="1000" ></textarea> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group busList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <h5 > <span class="badge badge-primary">2</span> <label class="middle title-size">车辆列表</label> <a href="javascript:void(0)" class="btn-bus-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover busList " style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border">车牌号</th> <th class="table-border">车辆品牌</th> <th class="table-border">座位数</th> <th class="table-border">购买时间</th> <th class="table-border">协议包车</th> <th class="table-border">包车时限</th> <th class="table-border">包车价格</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> <div class="form-group driverList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <h5 class="font-height"> <span class="badge badge-primary">3</span> <label class="middle title-size">司机列表</label> <a href="javascript:void(0)" class="btn-driver-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover driverList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border">司机姓名</th> <th class="table-border">司机性别</th> <th class="table-border">司机电话</th> <th class="table-border">司机驾龄</th> <th class="table-border">驾驶证编号</th> <th class="table-border">是否启用</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-busCompany"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});