/*TMODJS:{"debug":true,"version":1,"md5":"00dc77b5f2eaebf5376f9451b6e33e81"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/searchListMain", '<div class="col-sm-12 T-tripplan-lineproduct-search globalAdd" style="margin-top:10px;"> <div class="tabbable"> <ul id="myTab" class="nav nav-tabs"> <li class="active"> <a data-toggle="tab" aria-expanded="true"> <i class="blue ace-icon fa fa-flag bigger-120"></i> 选择路线 </a> </li> </ul> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;position: relative;top:-2px"> <div class="form-inline col-xs-12 search-area"> <label class="pull-left">线路产品</label> <input type="text" class="form-control col-sm-1 pull-left mar-l-10 T-name" placeholder="请输入线路产品名称" name="lineProductName" value="" /> <button class=" btn-sm T-btn-search search-btn "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="tab-pane fade active in col-xs-12"> <table class="table table-striped table-bordered table-hover T-chex-radio search-travelLineList-table"> <thead> <tr> <td class="th-border">线路名称</td> <td class="th-border">类别</td> <td class="th-border">针对客源</td> <td class="th-border">天数</td> <td class="th-border">销售部门</td> <td class="th-border" width="70">选择</td> </tr> </thead> <tbody class="T-normal-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">0</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> ');
});