/*TMODJS:{"debug":true,"version":263,"md5":"44a1b395b822b135b585a05d86bc9a43"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/list", '<div class="T-search-area globalAdd"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>单号：</label> <input type="text" name="orderNumber" class="form-control T-orderNumberChoose" style="width:180px;" /> </div> <div class="form-group mar-l-10"> <label>客户：</label> <input type="text" name="partnerAgency" class="form-control T-partnerAgencyChoose" value="全部" /> <input type="hidden" name="partnerAgencyChooseId"/> </div> <div class="form-group mar-l-10"> <label>操作人：</label> <input type="text" name="operateUser" class="form-control T-operateUserChoose" value="全部"/> <input type="hidden" name="operateUserId"/> </div> <div class="form-group mar-l-10"> <label>操作时间：</label> <input class="form-control datepicker" name="startTime" placeholder="开始时间" style="width:100px;" type="text" /> <label>&nbsp;至&nbsp;</label> <input class="form-control datepicker" name="endTime" placeholder="结束时间" style="width:100px;" type="text" /> </div> <div class="form-group mar-l-10"> <button class=" btn-sm T-booking-search search-btn" style="margin-left: 10px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group mar-l-10"> <button class="btn btn-sm btn-success T-Booking-add" data-right="1170002" style="margin-left: 10px"> <i class="ace-icon fa fa-plus"></i> 新增项目代订</button> </div> </form> </div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th rowspan="2">订单代号</th> <th rowspan="2">客户</th> <th colspan="4">代订项目</th> <th rowspan="2">应收</th> <th rowspan="2">已收</th> <th rowspan="2">操作人</th> <th rowspan="2">操作时间</th> <th rowspan="2">状态</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row"> <div class="col-xs-4"> <small class="T-recordSize"></small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>');
});