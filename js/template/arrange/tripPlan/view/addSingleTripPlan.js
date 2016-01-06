/*TMODJS:{"debug":true,"version":43,"md5":"8a1e1dfb3e28f98bbabfab45c20d747e"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addSingleTripPlan", '<div class="container-fulid hct-editor-plan T-tab globalAdd">  <form class="T-basic-info" role="form" onsubmit="return false"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="">基本信息</h3> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="hct-input-group col-xs-8 T-search-line"> <input type="text" name="lineProductName" readonly class="col-xs-12"> <span class="hct-group-search cursor">[搜索]</span> <input type="hidden" name="lineProductId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">计划人数</label> <div class="col-xs-8"> <input type="text" class="form-control" name="planTouristCount"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input name="accompanyGuideName" type="text" class="col-xs-12"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input name="accompanyGuideMobile" type="text" class="col-xs-12"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input name="dutyOPUserName" type="text" class="col-xs-12"> <input type="hidden" name="dutyOPUserId" > </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" name="dutyOPDepartment" readonly class="col-xs-12"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames"> <input type="hidden" name="shopIds"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames"> <input type="hidden" name="selfPayItemIds"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-8"> <input type="checkbox" class="ace" name="isContainSelfPay"> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6 T-executeTime"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace T-immediate" name="executeTimeType" checked> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace T-timed" name="executeTimeType"> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker hidden" name="executeTime"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12"> </div> </div> </div> </form>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> </tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-touristGroup"> <i class="ace-icon fa fa-search"></i> 选择游客 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-touristGroup-list"></tbody> </table> </div> </div>  <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <button data-type="insurance" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 保险 </button> <button data-type="guide" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 导游 </button> <button data-type="bus" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 车辆 </button> <button data-type="restaurant" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 餐饮 </button> <button data-type="hotel" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 酒店 </button> <button data-type="scenic" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 景区 </button> <button data-type="ticket" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 票务 </button> <button data-type="shop" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 购物 </button> <button data-type="selfPay" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 自费 </button> <button data-type="other" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 其它 </button> </div> </div> </div> <div class="row"> <div class="col-xs-12 T-action-plan-list"> </div> </div>  <div class="row"> <div class="form-group text-center mar-t-20"> <button class="btn btn-xs btn-danger T-cancelPlan w100"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-xs btn-primary T-savePlan w100 marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>');
});