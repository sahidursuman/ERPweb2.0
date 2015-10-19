/*TMODJS:{"debug":true,"version":118,"md5":"c6ed1428b4f4c19c86d93132663e544c"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/add", '<div class="col-xs-12 addBooking globalAdd"> <form class="form-horizontal bookingMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">代订信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <input name="id" type="hidden" value="" /> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行客户:</label> <div class="col-sm-2"> <input type="text" name="partnerAgencyName bind-change" class="col-sm-12 choosePartnerAgency" value=""> <input type="hidden" name="partnerAgencyId" value=""> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>联系人:</label> <div class="col-sm-2"> <div class="input-group"> <input type="text" name="contactRealname bind-change" class="col-sm-12 choosePartnerManager" value=""> <input type="hidden" name="partnerAgencyContactId" /> <span class="input-group-addon addPartnerManager" style="cursor:pointer;left:-28px;" title="为组团社新添加联系人"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">联系电话:</label> <div class="col-sm-2"> <input type="text" name="contactMobileNumber" class="col-sm-12" readonly="readonly" value=""> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">游客:</label> <div class="col-sm-2"> <input type="text" name="touristRealname" class="col-sm-12" value="" maxlength="25"> </div> <label class="col-sm-1 control-label no-padding-right">游客电话:</label> <div class="col-sm-2"> <input type="text" name="touristMobileNumber" class="col-sm-12" value="" maxlength="11"> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <input type="text" name="remark" class="col-sm-12" value="" maxlength="500"> </div> </div> <div class="form-group" style="border-top:1px dotted #ccc;padding-top:20px;"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>总应收:</label> <div class="col-sm-2"> <input type="text" name="sumNeedGetMoney" class="col-sm-12 sumNeedGetMoney" value="" readonly="readonly"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary"></span>已收:</label> <div class="col-sm-2"> <input type="text" name="getedMoney" class="col-sm-12" value="" maxlength="9" /> </div> <label class="col-sm-1 control-label no-padding-right">收款方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12"> <option selected="selected" value="0">现金</option> <option value="1">签单</option> <option value="2">转账</option> <option value="3">网付</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>总成本:</label> <div class="col-sm-2"> <input type="text" name="sumCostMoney" class="col-sm-12 sumCostMoney" value="" readonly="readonly"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary"></span>已付:</label> <div class="col-sm-2"> <input type="text" name="payedMoney" class="col-sm-12" value="" maxlength="9" /> </div> <label class="col-sm-1 control-label no-padding-right">付款方式:</label> <div class="col-sm-2"> <select name="payType" class="col-sm-12"> <option selected="selected" value="0">现金</option> <option value="1">签单</option> <option value="2">转账</option> <option value="3">网付</option> </select> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">酒店代订</label> <a href="javascript:void(0)" class="btn-hotel-booking-add"> <button class="btn btn-sm btn-success" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px;border: 1px solid #ccc"> <thead> <tr> <th class="th-border"width="100px" ><span class="necessary">*</span>入住日期</th> <th class="th-border" width="100px"><span class="necessary">*</span>离店日期</th> <th class="th-border"width="115px"><span class="necessary">*</span>星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border"><span class="necessary"></span>天数</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border" width="110"> 成本单价</th> <th class="th-border" width="110"> 销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border" width="70">操作</th> </tr> </thead> <tbody class="hotelBookingList">  </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">景区项目代订</label> <a href="javascript:void(0)" class="btn-scenic-booking-add"> <button class="btn btn-sm btn-success" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px;border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="50"><span class="necessary">*</span>日期</th> <th class="th-border"><span class="necessary">*</span>景区</th> <th class="th-border"><span class="necessary">*</span>收费项</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">订单号</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="scenicBookingList">  </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">票务代订</label> <a href="javascript:void(0)" class="btn-ticket-booking-add" style="margin-top: 20px"> <button class="btn btn-sm btn-success" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务公司</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border"> 出发城市</th> <th class="th-border"> 到达城市</th> <th class="th-border"><span class="necessary">*</span>班次</th> <th class="th-border"><span class="necessary"><span class="necessary">*</span></span>座位级别</th> <th class="th-border" width="50"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border"> 成本单价</th> <th class="th-border"> 销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border" width="70">操作</th> </tr> </thead> <tbody class="ticketBookingList">  </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingBusList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="middle title-size">旅游车代订</label> <a href="javascript:void(0)" class="btn-bus-booking-add"> <button class="btn btn-sm btn-success" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="50"><span class="necessary">*</span>开始日期</th> <th class="th-border" width="50"><span class="necessary">*</span>结束日期</th> <th class="th-border"><span class="necessary">*</span>车座数</th> <th class="th-border"><span class="necessary">*</span>车辆品牌</th> <th class="th-border"><span class="necessary">*</span>所属车队</th> <th class="th-border"> <span class="necessary">*</span>数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border" width="70">操作</th> </tr> </thead> <tbody class="busBookingList">  </tbody> </table> </div> </div> </div> </div> <div class="space-10"></div> <div class="space-20"></div> <button class="btn btn-block btn-primary btn-submit-booking guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </div>');
});