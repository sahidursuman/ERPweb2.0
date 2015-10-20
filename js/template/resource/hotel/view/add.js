/*TMODJS:{"debug":true,"version":235,"md5":"3ef1c634f7a421a674b67b6bfaf93314"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/add", '<div class="col-xs-12 addHotelContainer globalAdd"> <form class="form-horizontal hotelMainForm formOneList " role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle" style="margin-top: 20px"> <div class=""> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size navInformation">酒店主体信息</label> </h5> </div> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>酒店名称:</label> <div class="col-sm-4"> <input type="text" name="name" class="col-sm-12" maxlength="100"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>酒店星级:</label> <div class="col-sm-3"> <select name="level"> <option selected="selected" value="1">三星以下</option> <option value="2">三星</option> <option value="3">准四星</option> <option value="4">四星</option> <option value="5">准五星</option> <option value="6">五星</option> <option value="7">五星以上</option> </select> </div> </div>    <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-4"> <input type="text" name="managerName" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-4"> <input type="text" name="telNumber" class="col-sm-12" maxlength="20"> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" maxlength="20"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店所在省市:</label> <div class="col-sm-4"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input checked="checked" type="checkbox" class="ace hotel-status" value="1" name="status"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店设施:</label> <div class="col-sm-6"> <input type="text" name="facility" class="col-sm-12 addressMinute" maxlength="1000"> </div> </div>    <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">酒店简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class=""> <h5 class=""> <span class="badge badge-primary">2</span> <a class="middle navInformation">房间列表</a> <a href="javascript:void(0)" class="btn-hotel-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="widget-body"> <div class="widget-main no-padding" style="margin-top: 20px"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border" width="80"><span class="necessary">*</span>房型</th> <th class="table-border"style="width:300px;"><span class="necessary">*</span>时间范围</th> <th class="table-border" style="width:100px"><span class="necessary">*</span>市场价(元)</th> <th class="table-border" style="width:110px"><span class="necessary">*</span>旅行社价(元)</th> <th class="table-border" style="width: 75px">早餐</th> <th class="table-border" width="70">午餐</th> <th class="table-border" width="70">晚餐</th> <th class="table-border" width="70">宽带</th> <th class="table-border" style="width:120px">建筑面积(平方)</th> <th class="table-border" style="width:105px">最多入住人数</th> <th class="table-border" width="80">备注</th> <th class="table-border" width="55">操作</th> </tr> </thead> <tbody> </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-hotel guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});