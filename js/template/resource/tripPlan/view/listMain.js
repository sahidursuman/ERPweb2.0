/*TMODJS:{"debug":true,"version":99,"md5":"c16d957ad13335d01773982070d21fc6"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/listMain", '<div class="tripplan-area"> <div class="search-area globalAdd T-search-tripPlan"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10 mar-l-23"> <label>团号</label> <input type="text" name="tripNumber" class="form-control T-tripNumber" style="width:140px;" /> </div> <select name="dateType" id="dateType" class="form-group mar-r-10"> <option value="0">出游日期</option> <option value="1">完团日期</option> </select> <div class="form-group"> <input type="text" name="startTime" class="form-control datepicker T-start-date" placeholder="开始时间" style="width:100px;"> <label class="mar-l-15">&nbsp;至&nbsp;</label> <input type="text" name="endTime" class="form-control datepicker T-end-date" placeholder="结束时间" style="width:142px;"> </div> <div class="form-group mar-r-10"> <label>资源状态</label> <select name="arrangeItem" id="arrangeItem"> <option value="">全部</option> <option value="guideStatus">导</option> <option value="busStatus">车</option> <option value="insuranceStatus">险</option> <option value="restaurantStatus">餐</option> <option value="hotelStatus">房</option> <option value="scenicStatus">景</option> <option value="shopStatus">购</option> <option value="ticketStatus">票</option> <option value="selfPayStatus">娱</option> <option value="otherStatus">它</option> </select> <select name="arrangeItemStatus" id="arrangeItemStatus"> <option value="">全部</option> <option value="1">未完成</option> <option value="3">已完成</option> </select> </div> <div class="form-group "> <label>线路产品</label> <input type="text" name="lineProductName" class="form-control" style="width: 220px;"> <input type="hidden" name="lineProductId"> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>责任计调</label> <input type="text" name="dutyOPUserName" class="form-control" style="width: 139px;" /> <input type="hidden" name="dutyOPUserId"> </div> <div class="form-group mar-r-10 mar-l-10"> <label>责任部门</label> <input type="text" name="businessGroupName" class="form-control" style="width: 137px;" /> <input type="hidden" name="businessGroupId"> </div> <div class="form-group mar-r-10"> <label>状态</label> <select name="tripPlanItem" id="tripPlanItem"> <option value="">全部</option> <option value="0" selected>正常状态</option> <option value="1">取消状态</option> </select> <select name="tripPlanItemStatus" id="tripPlanItemStatus"> <option value="">全部</option> <option value="0">待发团</option> <option value="1">已发团</option> </select> </div> <div class="form-group" style="margin-left: 382px;"> <button class="btn-sm search-btn T-btn-tripPlan-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div> <form class="form-inline" role="form" onsubmit="return false"> <p class="text-info"> <label>说明：&nbsp;</label> <i class="fa fa-minus"></i> 不需要安排&nbsp;&nbsp; <i class="fa fa-question"></i> 需要安排&nbsp;&nbsp; <i class="fa fa-exclamation"></i> 已变更安排需求&nbsp;&nbsp; <i class="fa fa-check"></i> 安排完成&nbsp;&nbsp; <i class="fa fa-times"></i> 待取消安排 </p> </div> <div class="row"> <div class="col-xs-12 T-tripPlanList"> </div> </div> </div>');
});