/*TMODJS:{"debug":true,"version":118,"md5":"8239a84c9963ba3acb4e370204d4d36f"}*/
define(function(require) {
    return require("../../../template")("arrange/singlePlan/view/listMain", '<div class="container-fluid tabbable hct-content-tabs globalAdd"> <div class="T-plan-content tripplan-area"> <form class="T-search-tripPlan-single" role="form" onsubmit="return false"> <div class="form-group"> <button class="btn btn-sm btn-success T-btn-tripPlan-add R-right" data-right="1460002" data-type="0"> <i class="ace-icon fa fa-plus"></i> 新增散客计划 </button> <button class="btn btn-sm btn-success T-singlePlan-export innerTr-export">导出游客保险名单</button> </div> <div class="form-inline hct-search-area"> <div class="form-group" style="margin-left: 24px;"> <label>团号</label> <input type="text" name="tripNumber" class="form-control" placeholder="请输入团号"> </div> <div class="form-group"> <select name="dateType" class="form-control"> <option value="0">出游日期</option> <option value="1">完团日期</option> </select> <input class="form-control datepicker" name="startTime" placeholder="开始时间" style="width:100px;" type="text" /> <label >&nbsp;至&nbsp;</label> <input class="form-control datepicker" name="endTime" placeholder="结束时间" style="width:133px;" type="text" /> </div> <div class="form-group"> <label>责任部门</label> <input type="text" name="businessGroupName" class="form-control" placeholder="责任部门"> </div> <div class="form-group"> <label>责任计调</label> <input name="dutyOPUserName" type="text" class="form-control" placeholder="责任计调"> </div> </div> <div class="form-inline hct-search-area"> <div class="form-group"> <label>线路产品</label> <input type="text" name="lineProductName" class="form-control" placeholder="线路产品" style="width: 142px;"> </div> <div class="form-group"> <label>导游</label> <input type="text" name="realname" class="form-control" placeholder="导游" style="width: 151px;"> </div> <div class="form-group"> <label>车辆</label> <input type="text" name="licenseNumber" class="form-control" placeholder="车辆"> </div> <div class="form-group" style="width: 180px;"> <label>状态</label> <select name="tripPlanStatus" class="form-control"> <option value="">全部</option> <option value="1" selected>正常状态</option> <option value="2">取消状态</option> </select> <select name="status" class="form-control"> <option value="">全部</option> <option value="0">待发团</option> <option value="1">已发团</option> </select> </div> <div class="form-group mar-l-15"> <label >出游日期</label> <select name="order" id="order_by"> <option value="asc">升序</option> <option value="desc">降序</option> </select> <input type="hidden" name="sortType" value="startTime"> </div> <div class="form-group mar-l-10"> <button class="btn-sm search-btn T-btn-tripPlan-search" data-type="0"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <p class="text-info"> <label>说明：&nbsp;</label> <i class="fa fa-minus"></i> 不需要安排&nbsp;&nbsp; <i class="fa fa-question"></i> 需要安排&nbsp;&nbsp; <i class="fa fa-exclamation"></i> 已变更安排需求&nbsp;&nbsp; <i class="fa fa-check"></i> 安排完成&nbsp;&nbsp; <i class="fa fa-times"></i> 待取消安排 </p> </form> <div class="T-tripPlan-singleList"> </div> </div> </div>');
});