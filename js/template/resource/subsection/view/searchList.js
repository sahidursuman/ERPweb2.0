/*TMODJS:{"debug":true,"version":164,"md5":"deba833ab12746ec2738f372cb5a3a0f"}*/
define(function(require) {
    return require("../../../template")("resource/subsection/view/searchList", '<div class="col-sm-12 T-subsection-lineproduct-search globalAdd" style="margin-top:10px;"> <div class="col-xs-12" style="padding:10px 0 0 0;position: relative;top:-2px"> <div class="form-inline search-area clearfix"> <label class="control-label pull-left col-sm-2 mar-r-10">线路产品：<span class=\'T-lineProName\'></span></label> <label class="control-label col-sm-2 mar-r-10">类别：<span class=\'T-lineProType\'></span></label> <label class="control-label col-sm-2 mar-r-10">针对客源：<span class=\'T-lineProcusType\'></span></label> <label class="control-label col-sm-2 mar-r-10">天数：<span class=\'F-float F-count T-lineProDays\'></span>天</label> <label class="control-label col-sm-2 mar-r-10">出游日期：<span class="T-lineProStartTime"></span></label> </div> <div class="form-inline col-xs-12 search-area"> <label class="pull-left">线路产品</label> <input type="text" class="form-control col-sm-1 pull-left mar-l-10 T-name" placeholder="请输入线路产品名称" name="lineProductName" value="" /> <button class=" btn-sm T-btn-search search-btn "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="tab-pane fade active in col-xs-12"> <table class="table table-striped table-bordered T-chex-radio table-hover search-travelLineList-table"> <thead> <tr> <td class="th-border">线路名称</td> <td class="th-border">针对客源</td> <td class="th-border">天数</td> <td class="th-border" width="70">选择</td> </tr> </thead> <tbody class="T-normal-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">0</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> ');
});