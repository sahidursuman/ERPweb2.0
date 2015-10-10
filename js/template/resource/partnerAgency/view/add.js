/*TMODJS:{"debug":true,"version":82,"md5":"0176d0903b90c26f71aa208874c71c1e"}*/
define(function(require) {
    return require("../../../template")("resource/partnerAgency/view/add", '<div class="col-xs-12 addPartnerAgencyContainer"> <form class="form-horizontal partnerAgencyMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 同行旅行社主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>同行名称:</label> <div class="col-sm-3"> <input type="text" name="travelAgencyName" class="col-sm-12" maxlength="100" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>类型:</label> <div class="col-sm-3"> <select name="type" class="col-sm-12"> <option selected="selected" value="1">组团社</option> <option value="0">地接社</option> <option value="2">组团社和地接社</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" /> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">等级:</label> <div class="col-sm-3"> <select name="level" class="col-sm-12"> <option selected="selected" value="1">金牌</option> <option value="2">银牌</option> <option value="3">铜牌</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">总社:</label> <div class="col-sm-3"> <div class="input-group addHeaderGroup">  <select class="col-sm-12" name="headPartnerAgency"> </select> <input type="hidden" name="headerAgencyName"/> <span class="input-group-addon addheaderPartnerAgency" style="cursor:pointer;" title="添加总社"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">所在地区:</label> <div class="col-sm-8"> <select name="provinceId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" class="col-sm-3"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace partnerAgency-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea> </div> </div> </div> </div> </div> <div class="space-10"></div> <div class="widget-box ui-sortable-handle contactList"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 联系人列表 </h5> <div class="widget-toolbar no-border"> <a href="javascript:void(0)" class="btn-contact-add"> <i class="ace-icon fa fa-plus"></i> 新增 </a> </div> </div> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th> <span class="necessary">*</span>联系人姓名</th> <th> <span class="necessary">*</span>联系人电话</th> <th> 所属部门</th> <th>所属职位</th> <th>操作</th> </tr> </thead> <tbody class="partnerList"> </tbody> </table> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-partnerAgency"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});