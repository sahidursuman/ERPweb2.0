/*TMODJS:{"debug":true,"version":106,"md5":"246a62a59075eaa41b6519f2845ab51d"}*/
define(function(require) {
    return require("../../../template")("system/department/view/department", '<div class="row" id="system_department"> <div style="margin: 0px 0px 20px 12px;"> <button class="btn btn-sm btn-success btn-business-add"> <i class="ace-icon fa fa-plus"></i>新增业务部门</button> <button class="btn btn-sm btn-success btn-group-add" style="margin-left: 10px;"> <i class="ace-icon fa fa-plus"></i>新增子部门</button> </div> <div style="clear: both;"></div> <div class="col-xs-12">  <div class="row"> <div class="col-sm-6" style="width: 19%;"> <div class="widget-box widget-color-blue2"> <div class="widget-header"> <h4 class="widget-title lighter smaller">组织结构</h4> </div> <div class="widget-body"> <div class="widget-main padding-8"> <ul id="tree1" style="min-height:46px;"></ul> </div> </div> </div> </div> <div class="col-sm-6" style="width: 80%;"> <div class="widget-box widget-color-blue2"> <div class="widget-header"> <h4 class="widget-title lighter smaller">部门成员列表</h4> </div> <div class="widget-body"> <div class="widget-main padding-8"> <div class="row userList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">账号</th> <th class="th-border">联系电话</th> <th class="th-border">状态</th> <th class="th-border">操作</th> </tr> </thead> <tbody id="content"> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </div>  </div>  ');
});