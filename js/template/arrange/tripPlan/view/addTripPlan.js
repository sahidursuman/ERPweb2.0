/*TMODJS:{"debug":true,"version":410,"md5":"74d6897dc605185e2b7d90cdfb56efc6"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addTripPlan", '<div class="container-fulid hct-editor-plan globalAdd"> <form class="T-basic-info" role="form" onsubmit="return false"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="">基本信息</h3> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">报价单号</label> <div class="hct-input-group col-xs-8"> <input type="text" name="quoteOrderName" class="col-xs-12"> <span class="hct-group-search cursor T-search-quote-order">[搜索]</span> <input type="hidden" name="quoteId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="hct-input-group col-xs-8 T-search-line"> <input type="text" name="lineProductName" readonly class="col-xs-12"> <span class="hct-group-search cursor">[搜索]</span> <input type="hidden" name="lineProductId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>人数</label> <div class="col-xs-8"> <input type="text" name="adultCount" style="width: 40px;"> <label class="control-label">大人</label> <input type="text" name="childCount" style="width: 40px;"> <label class="control-label">小孩</label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">收客单号</label> <div class="hct-input-group col-xs-8 T-search-team"> <input type="text" readonly class="col-xs-12" name="partnerAgencyName"> <span class="hct-group-search cursor">[搜索]</span> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyName"> <span class="hct-group-add cursor">[新增]</span> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户联系人</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="contactRealname"> <span class="hct-group-add cursor">[新增]</span> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideName"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideMobile"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">获得方式</label> <div class="col-xs-8"> <select class="col-xs-12" name="getType"> <option value="1">旅行社系统</option> <option value="2">传真</option> <option value="3">短信</option> <option value="4">电话</option> <option value="5">QQ </option> <option value="6">微信</option> <option value="7">线上渠道</option> </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">组团单号</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="otaOrderNumber"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">外联销售</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="outOPUserId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">客源类型</label> <div class="col-xs-8"> <select class="col-xs-12" name="memberType"> <option value="0">内宾</option> <option value="1">外宾</option> </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="dutyOPUserName"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" readonly class="col-xs-12"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-8"> <input type="checkbox" class="ace" name="isContainSelfPay"> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace" name="addTripPlanMsg" checked> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace" name="addTripPlanMsg"> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker" name="executeTime"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12"> </div> </div> </div> </form> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-tourists"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <button class="btn btn-sm btn-success"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">设为联系人</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-tourists-list"></tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <button data-type="insurance" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 保险 </button> <button data-type="guide" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 导游 </button> <button data-type="bus" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 车辆 </button> <button data-type="restaurant" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 餐饮 </button> <button data-type="hotel" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 酒店 </button> <button data-type="scenic" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 景区 </button> <button data-type="ticket" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 票务 </button> <button data-type="shop" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 购物 </button> <button data-type="selfPay" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 自费 </button> <button data-type="other" class="btn btn-sm btn-success T-add-action"> <i class="ace-icon fa fa-plus"></i> 其它 </button> </div> </div> <div class="col-xs-12 T-action-plan-list"> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">账单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="col-xs-12"> <div class="col-xs-2"> <label class="col-xs-4 text-right">应收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="needPayAllMoney" readonly> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">预收款</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="preIncomeMoney"> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">计划现收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="currentNeedPayMoney"> </div> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-fee-list"> </tbody> </table> </div> </div> <div class="row"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-savePlan otherButton marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>');
});