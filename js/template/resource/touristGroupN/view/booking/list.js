/*TMODJS:{"debug":true,"version":13,"md5":"c85a181eefd9d38ca93e84d6e134d210"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/booking/list", '<div class="search-area T-touristGroupSearchForm globalAdd"> <form class="T-search-area hct-search-box" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <label class="control-label">代订单号</label> <input type="text" class="form-control" placeholder="代订单号" name="orderNumber"/> </div> <div class="form-group mar-r-10"> <label class="control-label">客户</label> <input type="text" class="form-control" placeholder="全部" name="partnerAgencyName" /> </div> <div class="form-group mar-r-10"> <label class="control-label">外联销售</label> <input type="text" class="form-control T-choose-outUserList" placeholder="外联销售" name="outOPUserName" style="width: 148px;" /> </div> <div class="form-group"> <label>状态</label> <select class="T-select-status" style="width: 62px;"> <option value="">全部</option> <option value="0">未完成</option> <option value="1">已完成</option> </select> </div> <div class="form-group pull-right"> <button type="button" class="btn btn-sm btn-success T-btn-add R-right" data-right="1470004"> <i class="ace-icon fa fa-plus"></i> 新增项目代订 </button> </div> <div class="form-group pull-right mar-r-10"> <button type="submit" class="btn-sm T-btn-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <div class="form-horizontal T-countData"> </div> <div class="T-touristGroupList mar-t-10"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th rowspan="2">代订单号</th> <th rowspan="2">客户</th> <th colspan="4">代订项目</th> <th rowspan="2">应收</th> <th rowspan="2">外联销售</th> <th rowspan="2">状态</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody class="T-booking-list"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 <span class="T-record-size">0</span> 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>');
});