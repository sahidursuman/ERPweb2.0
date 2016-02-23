/*TMODJS:{"debug":true,"version":167,"md5":"48bee279ef16ce2122921919e03747c9"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/employeePerfor/view/listMain", '<div class="T-employeePerfor-Container"> <div class="row form-horizontal T-search-area search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="" /> </div> <div class="col-xs-6" style="margin-left: 20px;"> <label>业绩单位</label> <div class="btn-group T-select-employeerDept mar-r-10" style="pull-left"> <button data-value="1" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 员工 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="1" href="javascript:void(0)">员工</a> </li> <li> <a data-value="2" href="javascript:void(0)">部门</a> </li> </ul> </div> <div class="btn-group T-select-opUserList mar-r-10" style="pull-left"> <button data-value="0" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 责任计调 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">责任计调</a> </li> <li> <a data-value="1" href="javascript:void(0)">外联计调</a> </li> </ul> </div> <label>针对客源</label> <div class="btn-group T-select-customerType mar-r-10" style="pull-left"> <button data-value="2" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 全部 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="2" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">散客</a> </li> <li> <a data-value="1" href="javascript:void(0)">团体</a> </li> </ul> </div> <label>客户类型</label> <div class="btn-group T-select-partnerAgencyType mar-r-10" style="pull-left"> <button data-value="" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 全部 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">地接社</a> </li> <li> <a data-value="1" href="javascript:void(0)">组团社</a> </li> <li> <a data-value="2" href="javascript:void(0)">地接社和组团社</a> </li> </ul> </div> <button class=" btn-sm T-employeePerfor-search search-btn" style="margin-left:25px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row"> <div class="col-xs-12 T-employeePerfor-list"> </div> <div> <div class="row"> <div class="col-xs-12 T-deptPerfor-list"> </div> <div> <div class="row"> <div class="col-xs-12 T-salePerfor-list"> </div> <div> </div> ');
});