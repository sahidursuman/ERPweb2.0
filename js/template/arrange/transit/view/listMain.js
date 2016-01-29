/*TMODJS:{"debug":true,"version":145,"md5":"b12a380a34c1241c3dd80369974829af"}*/
define(function(require) {
    return require("../../../template")("arrange/transit/view/listMain", '<div class="T-search-area globalAdd tripplan-area"> <form class="form-inline hct-search-area" role="form" onsubmit="return false"> <div class="form-group"> <label>客户：</label> <input type="text" name="fromPartnerAgencyName" class="form-control"/> <input type="hidden" name="fromPartnerAgencyId" value="" /> </div> <div class="form-group mar-l-15"> <label>线路产品：</label> <input type="text" name="lineProductName" class="form-control" value="" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="form-group mar-l-15"> <label>出游时间：</label> <input class="form-control T-datePicker" name="startTime" value="" type="text" /> </div> <div class="form-group mar-l-15"> <label>安排人：</label> <input type="text" name="arrangeUserName" value="" class="form-control" /> <input type="hidden" name="arrangeUserId" value="" /> </div> <div class="form-group mar-l-15"> <label>安排时间：</label> <input class="form-control T-datePicker-range" name="arrangeStartTime" placeholder="开始时间" style="width:100px;" type="text" /> <label>&nbsp;至&nbsp;</label> <input class="form-control T-datePicker-range" name="arrangeEndTime" placeholder="结束时间" style="width:100px;" type="text" /> </div> <div class="form-group mar-l-15"> <button class=" btn-sm T-btn-transitList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <select name="shuttleType"> <option value="0">接团日期</option> <option value="1">送团日期</option> </select> </div> <div class="form-group"> <input class="form-control T-datePicker" name="shuttleTime" placeholder="日期" value="" type="text" /> </div> <div class="form-group"> <input class="form-control" name="shift" value="" placeholder="班次" type="text" /> </div> <div class="form-group mar-l-15"> <label>资源状态</label> <select name="arrangeItem" class="form-control"> <option value="" selected>全部</option> <option value="receiveBusStatus">接团车</option> <option value="receiveHotelStatus">接团房</option> <option value="receiveRestaurantStatus">接团餐</option> <option value="receiveTicketStatus">接团票</option> <option value="receiveOtherStatus">接团其它</option> <option value="sendBusStatus">送团车</option> <option value="sendHotelStatus">送团房</option> <option value="sendRestaurantStatus">送团餐</option> <option value="sendTicketStatus">送团票</option> <option value="sendOtherStatus">送团其它</option> </select> <select name="arrangeItemStatus" class="form-control"> <option value="">全部</option> <option value="1">未完成</option> <option value="3">已完成</option> </select> </div> <div class="form-group mar-l-10 T-transitState"> <label>状态：</label> <div class="btn-group btn-status"> <button data-status="" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 全部 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已安排</a> </li> <li> <a data-value="0" href="javascript:void(0)">未安排</a> </li> </ul> </div> </div> <p class="text-info"> <label>说明：&nbsp;</label> <i class="fa fa-minus"></i> —— 不需要安排&nbsp;&nbsp; <i class="fa fa-question"></i> —— 需要安排&nbsp;&nbsp; <i class="fa fa-exclamation"></i> —— 已变更安排需求&nbsp;&nbsp; <i class="fa fa-check"></i> —— 安排完成&nbsp;&nbsp; <i class="fa fa-times"></i> —— 待取消安排 </p> </form> </div> <div class="T-arrangeTransitList tripplan-area"> </div> ');
});