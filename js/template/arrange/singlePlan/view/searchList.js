/*TMODJS:{"debug":true,"version":76,"md5":"4fd5ddf527403c8cf67b04b5fc06ab65"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/searchList", '<div class="col-sm-12 T-tripplan-lineproduct-search globalAdd" style="margin-top:10px;"> <div class="tabbable"> <ul id="myTab" class="nav nav-tabs"> <li class="active"> <a data-toggle="tab" aria-expanded="true"> <i class="blue ace-icon fa fa-flag bigger-120"></i> 选择路线 </a> </li> </ul> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;position: relative;top:-2px"> <div class="tab-pane fade active in col-xs-12"> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td class="th-border">线路名称</td> <td class="th-border">类别</td> <td class="th-border">应用范围</td> <td class="th-border">天数</td> <td class="th-border" width="70">选择</td> </tr> </thead> <tbody class="T-normal-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">0</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> ');
});