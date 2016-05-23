/*TMODJS:{"debug":true,"version":82,"md5":"a8f2ea9f94ca85ba100a009584ab7e8d"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/tourists/list", '<div class="search-area T-touristGroupSearchForm globalAdd"> <form class="T-search-area hct-search-box" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <button type="button" class="btn btn-sm btn-success T-touristGroup-add R-right" data-right="1470001"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> <div class="form-group"> <button type="button" class="btn btn-sm btn-success T-export">导出游客保险名单</button> </div> </div> <div class="form-inline"> <div class="form-group mar-r-10"> <label class="control-label">收客单号</label> <input type="text" class="form-control" placeholder="收客单号" name="orderNumber"/> </div> <div class="form-group"> <select class="T-choosePorB" style="width: 63px;"> <option value=\'0\'>全部</option> <option value=\'1\'>组团社</option> <option value=\'2\'>业务部</option> </select> </div> <div class="form-group mar-r-10"> <input type="text" class="T-choosePAB form-control" placeholder="全部客户"readonly="readonly" /> <input type="text" class="T-choosePartnerAgency T-PorB form-control hidden" name="fromPartnerAgencyName" value="全部" /> <input type="text" class="T-chooseBussinessGroup T-PorB form-control hidden" name="fromBussinessGroupName" value="全部" /> <input type="hidden" name="fromPartnerAgencyId"> <input type="hidden" name="fromBussinessGroupId" /> </div> <div class="form-group mar-r-10"> <label class="control-label">行程</label> <input type="text" class="form-control" placeholder="线路产品" name="lineTripName" /> </div> <div class="form-group mar-r-10"> <label>状态</label> <select class="T-select-status" style="width: 62px;"> <option value="">全部</option> <option value="0">已发团</option> <option value="1" selected>未分团</option> <option value="2">已分团</option> <option value="3">已外转</option> <option value="5">已分段</option> <option value="6">已内转</option> </select> </div> <div class="form-group"> <label class="control-label">接团日期</label> <select class="form-control" name="order"> <option value="0">升序</option> <option value="1">降序</option> </select> </div> <div class="form-group pull-right"> <button type="button" class="btn btn-sm btn-success T-more-btn unfold">高级搜索</button> </div> <div class="form-group pull-right mar-r-10"> <button type="submit" class="btn-sm T-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-inline hidden T-more-info"> <div class="form-group mar-r-10"> <select class="pull-left" name="dateType"> <option value="0">接团日期</option> <option value="1">送团日期</option> </select> <input class="datepicker pull-left mar-l-5" name="tripTime" type="text" style="width: 108px;" /> </div> <div class="form-group mar-r-10"> <label class="control-label">外联销售</label> <input type="text" class="form-control T-choose-outUserList" placeholder="外联销售" name="realName" style="width: 148px;" /> </div> <div class="form-group mar-r-10"> <label class="control-label">客人信息</label> <input type="text" class="form-control" placeholder="名字、电话" name="guestDetails" /> </div> <div class="form-group mar-r-10"> <label>团散界定</label> <select name="customerType" style="width: 51px;"> <option value="">全部</option> <option value="0">散客</option> <option value="1">团体</option> </select> </div> </div> </form> <div class="form-horizontal T-countData"> </div> <div class="T-touristGroupList mar-t-10"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <colgroup> <col style="width: 180px"> <col> <col> <col style="width: 85px;"> <col style="width: 85px;"> <col> <col> <col> <col> <col> <col style="width: 70px;"> <col style="width: 130px;"> </colgroup> <thead> <tr class="bg-blur T-tr-fixed"> <th>收客单号</th> <th>客户</th> <th>行程</th> <th>接团日期</th> <th>送团日期</th> <th>应收</th> <th>客人信息</th> <th>联系电话</th> <th>外联销售</th> <th>团散界定</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-touristGroup"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 <span class="T-record-size">0</span> 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>');
});