/*TMODJS:{"debug":true,"version":622,"md5":"e81aec65966caab91c2e76900e667072"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/list", '<div class="T-employeePerfor-Container"> <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="" /> </div> <div class="col-xs-2" style="margin-left: 20px;"> <div class="btn-group T-select-employeerDept" style="pull-left"> <button data-value="1" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 员工 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="1" href="javascript:void(0)">员工</a> </li> <li> <a data-value="2" href="javascript:void(0)">部门</a> </li> </ul> </div> <button class=" btn-sm T-employeePerfor-search search-btn" style="margin-left:25px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row T-employeerPager-list"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">员工</th> <th class="col-sm-2">收客量</th> <th class="col-sm-1">发团量</th> <th class="col-sm-1">发客量</th> <th class="col-sm-1">外转客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-2">代订单量</th> </tr> </thead> <tbody class="T-employeerDept-list"> </tbody> </table> </div> <div> </div> ');
});