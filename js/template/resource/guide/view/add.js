/*TMODJS:{"debug":true,"version":247,"md5":"73ff1bc26b07841e892b3ca7e80d8278"}*/
define(function(require) {
    return require("../../../template")("resource/guide/view/add", '<div class="col-xs-12 addGuideContainer guideAdd"> <form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>姓名:</label> <div class="col-sm-3"> <input type="text" name="realname" class="col-sm-12" maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">性别:</label> <div class="col-sm-3"> <select name="gender" class="col-sm-12"> <option selected="selected" value="0">男</option> <option value="1">女</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" maxlength="11"/> </div> <label class="col-sm-2 control-label no-padding-right">所属公司:</label> <div class="col-sm-3"> <input type="text" name="company" class="col-sm-12" maxlength="45"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>导游证编号:</label> <div class="col-sm-3"> <input type="text" name="guideCardNumber" class="col-sm-12" maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">身份证:</label> <div class="col-sm-3"> <input type="text" name="idCardNumber" class="col-sm-12" maxlength="18"/> </div> </div> <div class="form-group guideInterval guideInterval"> <label class="col-sm-2 control-label no-padding-right">等级:</label> <div class="col-sm-3"> <select name="guideLevel" class="col-sm-12"> <option selected="selected" value="1">初级导游</option> <option value="2">中级导游</option> <option value="3">高级导游</option> <option value="4">特级导游</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">学历:</label> <div class="col-sm-3"> <select name="guideEducation" class="col-sm-12"> <option value="1">小学</option> <option value="2">初中</option> <option value="3">高中</option> <option value="4">中专</option> <option selected="selected" value="5">大专</option> <option value="6">本科</option> <option value="7">研究生</option> <option value="8">硕士</option> <option value="9">博士</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">加入时间:</label> <div class="col-sm-3"> <div class="input-group"> <input type="text" name="joinTime" class="col-sm-12 datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace guide-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-guide guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ');
});