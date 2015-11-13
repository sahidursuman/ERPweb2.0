/*TMODJS:{"debug":true,"version":263,"md5":"bc7567982f7547e13c57f811c40cd324"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addTripPlan", '<div class="newAddTripPlan clearfix triPlanInput"> <div class="col-xs-12 T-plan-container globalAdd"> <form class="form-horizontal T-editPlan-form formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">基本信息</label> </h5> <div class="widget-body"> <div class="T-baseinfo-container"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2 search-banner T-search-line"> <input class="col-sm-8 triplanName" readonly="readonly" style="width: 155px" type="text" name="name" id="" value="" /> <input type="hidden" name="lineProductId" value="" /> <button class=" btn btn-sm btn-primary"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <input class="col-sm-12 datepicker" type="text" name="startTime" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="planTouristCount" id="" value="" maxlength="6"/> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="" placeholder="系统自动生成" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label> <div class="col-sm-2"> <input class="col-sm-12 T-chooseSeatCount bind-change" type="text" name="seatCount" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">车辆品牌：</label> <div class="col-sm-2"> <input class="col-sm-12 T-chooseBusBrand bind-change" type="text" name="needBusBrand" id="" value="" /> <input type="hidden" name="busBrandId" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 T-chooseLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="" /> <input type="hidden" name="busLicenseNumberId" value="" /> <span class="addResourceBtnTripPlan T-addBusResource R-right" data-right="1020003" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">所属车队：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 bind-change" type="text" name="busCompany" readonly="readonly" id="" value="" /> <input type="hidden" name="busCompanyId" value="" /> <span class="addResourceBtnTripPlan T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 T-chooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="" /> <input type="hidden" name="AddTPchooseGuideId" value="" /> <span class="addResourceBtnTripPlan T-addGuideResource R-right" data-right="1010002" title="添加导游"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 T-chooseDriver bind-change" type="text" name="driverName" id="" value="" /> <input type="hidden" name="driverId" value="" /> <span class="addResourceBtnTripPlan T-addDriverResource R-right" data-right="1020003" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="" maxlength="32" /> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="" maxlength="50" /> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="setPlacePosition" id="" value="" maxlength="100" /> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <input class="form-control col-sm-12 datetimepicker" type="text" name="setPlaceTime" value="" /> </div> </div> </div> </div> </div> </div> </div> </form> <div class="form-horizontal col-sm-12 T-timeArea"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">确认发团后游客短信设置:</label> 立即发送 <label style="padding-left:0px;"> <input type="radio" class="ace buyInsurance-status" checked="checked" value="0" name="executeTimeType"> <span class="lbl"> </span> </label> &nbsp;&nbsp;&nbsp;&nbsp; 定时发送 <label style="padding-left:0px;"> <input type="radio" class="ace buyInsurance-status" value="1" name="executeTimeType"> <span class="lbl"> </span> </label> </div> <div class="col-sm-2 newAddTripTimer"> <input class="form-control col-sm-4 datetimepicker T-timeArea-input" type="text" name="executeTime" value="" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">游客名单</label> <button class="btn btn-sm btn-success T-addTouristGroup"> <i class="ace-icon fa fa-plus"></i> 添加游客小组 </button> </h5> <div style="display: inline-block;padding-left: 30px;">总人数：<span class="T-groupMemberCount"></span></div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-tourist-list"> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal formOneList" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">线路</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">4</span> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody class="T-days"> <tr> <td></td> <td></td> <td> </td> <td class="col-xs-6"></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="includeFee"></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="excludeFee"></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineFeature"></textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineNotice"></textarea> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-savePlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div>');
});