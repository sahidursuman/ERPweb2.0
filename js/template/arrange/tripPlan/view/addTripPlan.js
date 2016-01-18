/*TMODJS:{"debug":true,"version":450,"md5":"e684603155517f54efec9bd84b24616c"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addTripPlan", '<div class="container-fulid hct-editor-plan globalAdd T-tab"> <form class="T-basic-info" role="form" onsubmit="return false"> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">基本信息</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-search-team"> <i class="ace-icon fa fa-plus"></i> 选择游客小组 </button> </div> <div class="pull-right" style="width:280px;"> <label class="col-xs-4 control-label text-right par-r-15">团号</label> <input type="text" readonly class="col-xs-8" value="系统自动生成"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">报价单号</label> <div class="hct-input-group col-xs-8 T-search-quote-order"> <input type="text" name="quoteOrderName" readonly class="col-xs-12"> <span class="hct-group-search cursor">[搜索]</span> <input type="hidden" name="quoteId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>线路产品</label> <div class="hct-input-group col-xs-8 T-search-line"> <input type="text" name="lineProductName" readonly class="col-xs-12"> <span class="hct-group-search cursor">[搜索]</span> <input type="hidden" name="lineProductId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>人数</label> <div class="col-xs-8"> <input type="text" name="adultCount" class="F-float F-count" style="width: 40px;"> <label class="control-label">大人</label> <input type="text" name="childCount" class="F-float F-count" style="width: 40px;"> <label class="control-label">小孩</label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">收客单号</label> <div class="col-xs-8"> <input type="text" readonly class="col-xs-12" name="partnerAgencyName"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>出游日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="startTime"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>完团日期</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 datepicker" name="endTime"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyName"> <input type="hidden" name="fromPartnerAgencyId"> <span class="hct-group-add cursor T-addPartner">[新增]</span> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right"><span class="necessary">*</span>客户联系人</label> <div class="hct-input-group col-xs-8"> <input type="text" class="col-xs-12" name="contactRealname"> <input type="hidden" name="fromPartnerAgencyContactId"> <span class="hct-group-add cursor T-addPartnerManager">[新增]</span> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideName"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">全陪电话</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="accompanyGuideMobile"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">获得方式</label> <div class="col-xs-8"> <select class="col-xs-12" name="getType"> <option value="1">旅行社系统</option> <option value="2">传真</option> <option value="3">短信</option> <option value="4">电话</option> <option value="5">QQ </option> <option value="6">微信</option> <option value="7">线上渠道</option> </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">组团单号</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="otaOrderNumber"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">外联销售</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="outOPUserName"> <input type="hidden" name="outOPUserId"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">客源类型</label> <div class="col-xs-8"> <select class="col-xs-12" name="memberType"> <option value="0">内宾</option> <option value="1">外宾</option> </select> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任计调</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="dutyOPUserName"> <input type="hidden" name="dutyOPUserId" > </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">责任部门</label> <div class="col-xs-8"> <input type="text" readonly class="col-xs-12" name="dutyOPDepartment"> </div> </div> </div> <div class="row"> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">购物商家</label> <div class="col-xs-8"> <input type="text" name="shopNames" readonly class="col-xs-12 T-shopNames"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">自费商家</label> <div class="col-xs-8"> <input type="text" name="selfPayItemNames" readonly class="col-xs-12 T-selfPayItemNames"> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">包含自费</label> <div class="col-xs-2"> <input type="checkbox" class="ace" name="isContainSelfPay"> <label class="lbl"></label> </div> <label class="col-xs-4 control-label text-right">是否购买保险</label> <div class="col-xs-2"> <input type="checkbox" class="ace" name="buyInsurance"> <label class="lbl"></label> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 control-label text-right">接站牌</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="welcomeBoard"> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <label class="col-xs-1 control-label text-right">备注</label> <div class="col-xs-11"> <textarea class="col-xs-12" name="remark" maxlength="1000"></textarea> </div> </div> </div> <div class="row"> <div class="col-xs-6 T-executeTime"> <label class="control-label">确认发团后游客短信设置</label> <label> <input type="radio" class="ace" name="executeTimeType" checked> <span class="lbl">立即发送</span> </label> <label> <input type="radio" class="ace T-timed" name="executeTimeType"> <span class="lbl">定时发送</span> </label> <input type="text" class="datetimepicker hidden" name="executeTime"> </div> <div class="col-xs-6"> <label class="col-xs-4 control-label text-right">短信签名</label> <div class="col-xs-8"> <input type="text" class="col-xs-12" name="travelAgencyTag"> </div> </div> </div> </form> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">行程安排</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-days"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">简要行程</th> <th class="th-border">含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">景点</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-days"> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">游客名单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-tourists"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <button class="btn btn-sm btn-success T-add-tourists-batch"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">设为联系人</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-tourists-list"></tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">操作计划</h3> <div class="pull-left mar-l-15 T-action-plan"> <label data-type="insurance" class="control-label T-add-action"> <input type="checkbox" class="ace"> <span class="lbl">保险</span> </label> <label data-type="guide" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">导游</span> </label> <label data-type="bus" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">车辆</span> </label> <label data-type="restaurant" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">餐饮</span> </label> <label data-type="hotel" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">酒店</span> </label> <label data-type="scenic" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">景区</span> </label> <label data-type="ticket" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">票务</span> </label> <label data-type="shop" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">购物</span> </label> <label data-type="selfPay" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">自费</span> </label> <label data-type="other" class="control-label T-add-action mar-l-10"> <input type="checkbox" class="ace"> <span class="lbl">其它</span> </label> </div> </div> <div class="col-xs-12 T-action-plan-list"> </div> </div> <div class="row"> <div class="col-xs-12 hd"> <h3 class="pull-left">账单</h3> <div class="pull-left mar-l-15"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="col-xs-12"> <div class="col-xs-2"> <label class="col-xs-4 text-right">应收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 F-float F-money" name="needPayAllMoney" readonly> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">预收款</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 F-float F-money" name="preIncomeMoney"> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">计划现收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 F-float F-money" name="currentNeedPayMoney"> </div> </div> <div class="col-xs-2"> <label class="col-xs-4 text-right">中转应收</label> <div class="col-xs-8"> <input type="text" class="col-xs-12 F-float F-money" name="transitNeedPayMoney" readonly> </div> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-fee-list"> </tbody> </table> </div> </div> <div class="row"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-savePlan otherButton marginLeft-30"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>');
});