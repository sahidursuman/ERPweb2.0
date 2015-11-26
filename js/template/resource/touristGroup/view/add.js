/*TMODJS:{"debug":true,"version":1076,"md5":"1184bba0c9d52d5f331f4d18da3892f8"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/add", '<div class="col-xs-12 addTouristGroup globalAdd"> <form class="form-horizontal touristGroupMainForm T-touristGroupMainForm" role="form" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">小组信息</label> </h5> <div class="widget-body"> <div class="widget-main col-sm-9 formOneList tourist-informationWidth updateTouristInput"> <div class="form-group guideInterval" > <div class="col-sm-4"> <label class=" control-label no-padding-right"> <span class="necessary">*</span> 线路产品：<input type="text" name="lineProductIdName" style="width:120px" class=" bind-change" readonly="readonly" /> <input type="hidden" name="lineProductId" /> <input type="hidden" name="quoteId" /> </label> <button class=" search-btn btn-sm btn-travelLine-search T-travelLine-search"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> <div class="col-sm-4" > <label class=" control-label no-padding-right"><span class="necessary">&nbsp;&nbsp;&nbsp;&nbsp;*</span>出游日期： <input type="text" name="startTime" class=" date-picker datepicker"/> <i class="fa fa-calendar" style="position: relative;left: -20px"></i> </label> </div> <div class="col-sm-4 buyInsurance" > <label class="control-label no-padding-right">是否购买保险： <input checked="checked" type="checkbox" class="ace buyInsurance-status" value="1" name="buyInsurance"> <span class="lbl"> </span> </label> </div> </div> <div class="form-group" style="margin-bottom:7px !important;"> <div class="col-sm-4"> <label class=" control-label no-padding-right"><span class="necessary">*</span>客户来源：</label> <input type="text" name="fromPartnerAgency"class="choosePartnerAgency" placeholder="请输入客户来源"> <input type="hidden" name="fromPartnerAgencyId" style=\'width:120px\'> <span class="input-group-addon T-addPartner R-right" data-right="1150002" style="display: inline-block;left:0" title="添加客户"> <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i> </span> </div> <div class="col-sm-4"> <label class=" no-padding-right"><span class="necessary">*</span>同行联系人：</label> <input class="choosePartnerManager bind-change" name="partnerAgencyNameList" type="text" /> <input type="hidden" style=\'width:120px\' name="partnerAgencyContactId" /> <span class="input-group-addon T-addPartnerManager" style="display: inline-block;left:0" title="为客户来源添加联系人"> <i class="ace-icon fa fa-plus bigger-110 icon-only" ></i> </span> </div> <div class="col-sm-3"> <label class="no-padding-right pull-left">获得方式：</label> <select name="getType" class="pull-left"> <option selected="selected" value="1">旅行社系统</option> <option value="2">传真</option> <option value="3">短信</option> <option value="4">电话</option> <option value="5">QQ</option> </select> </div> </div> <div class="form-group guideInterval"> <div class="col-sm-4"> <label class=" control-label no-padding-right" style=" margin-left: 30px">应收： <input readonly="readonly"type="text" name="needPayAllMoney" maxlength="9" /> </label> </div> <div class="col-sm-4"> <label class="control-label no-padding-right" style="margin-left: 40px">已收： <input type="text" name="payedMoney" value="0" maxlength="9"/> </label> </div> <div class="col-sm-4"> <label class=" control-label no-padding-right" style="margin-left: 20px">现收： <input type="text" name="currentNeedPayMoney" value="0" maxlength="9" /> </label> </div> </div> <div class="form-group guideInterval"> <div class="col-sm-12"> <label class=" control-label no-padding-right" style="margin-left: 30px">未收： <input readonly="readonly"type="text" name="unIncomeMoney" maxlength="9" /> </label> </div> </div> </div> <div class="form-group"> <div class="col-sm-8"> <button class="btn pull-left btn-sm btn-success T-touristGroup-addOtherCost" > <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-8 tourist-contenWidth" style="margin: auto;margin-left: 20px"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addCostTbody"> <tr> <td>结算价</td> <td>大人</td> <td> <span class="necessary col-sm-1">*</span><input name="adultCount" type="text" class="col-sm-11 no-padding-right T-costCount" maxlength="3" /> </td> <td> <span class="necessary col-sm-1">*</span><input name="adultPrice" type="text" class="col-sm-11 no-padding-right T-costPrice" maxlength="6" /> </td> <td></td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td> <input name="childCount" type="text" value="0" class="col-sm-12 no-padding-right T-costCount" style="float:right;" maxlength="3" /> </td> <td> <input name="childPrice" type="text" value="0" class="col-sm-12 no-padding-right T-costPrice" style="float:right;" maxlength="6" /> </td> <td></td> </tr> </tbody> </table> </div> </div> </div> </div> </form> <form class="form-horizontal touristGroupMainFormMember T-touristGroupMainFormMember" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-sm-8 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">2</span> <label class="middle title-size">游客名单</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">住宿标准：</label> <div class="col-sm-2"> <select name="level" class="col-sm-12"> <option selected="selected" value="0">未选择</option> <option value="1">三星以下</option> <option value="2">三星</option> <option value="3">准四星</option> <option value="4">四星</option> <option value="5">准五星</option> <option value="6">五星</option> <option value="7">五星以上</option> </select> </div> <label class="col-sm-1 control-label no-padding-right">包含自费：</label> <div class="col-sm-8"> <input name="includeOwnExpense" type="text" class="col-sm-12" maxlength="1000" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">备注：</label> <div class="col-sm-11"> <input name="touristRemarks" class="col-sm-12 no-padding-right" type="text" maxlength="500"> </div> </div> <div class="form-group margin-top15"> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-add-tourist" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <div style="height:5px;width:25px;float:left;"></div> <button class="btn btn-sm btn-success T-add-tourist-more" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="form-group"> <div class="col-sm-12 tourist-contenWidth"> <table class="table table-striped table-bordered table-hover T-addTouristList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border"> <span class="necessary">*</span>姓名</th> <th class="th-border">手机号码</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">设为联系人</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addTouristTbody"> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal touristGroupMainFormRS T-touristGroupMainFormRS" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">中转</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-sm-3"> <label class="col-sm-3 control-label no-padding-right">接： <input type="checkbox" class="ace reception-check" value="0" name="touristReception"> <span class="lbl"> </span> </label> <div class="col-sm-12 T-reception-div hide" style="padding-top:25px;"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">接待日期:</label> <div class="col-sm-9"> <div class="input-group"> <input type="text" name="receptionTime" class="col-sm-12 date-picker datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">地点：</label> <div class="col-sm-9"> <input name="receptionAddress" type="text" class="col-sm-8" maxlength="100" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次：</label> <div class="col-sm-9"> <input name="arriveShift" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次时间：</label> <div class="col-sm-9"> <input name="arriveShiftTime" type="text" class="col-sm-8 ShiftDatepicker" /> </div> </div> </div> </div> <div class="col-sm-3"> <label class="col-sm-4 control-label no-padding-right">小车： <input type="checkbox" class="ace smallCar" value="0" name="smallCar"> <span class="lbl"> </span> </label> </div> <div class="col-sm-3"> <label class="col-sm-3 control-label no-padding-right">送： <input type="checkbox" class="ace send-check" value="0" name="touristSend"> <span class="lbl"></span> </label> <div class="col-sm-12 T-send-div hide" style="padding-top:25px;"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">送离日期:</label> <div class="col-sm-9"> <div class="input-group"> <input type="text" name="sendTime" class="col-sm-12 date-picker datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">地点：</label> <div class="col-sm-9"> <input name="sendAddress" type="text" class="col-sm-8" maxlength="100" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次：</label> <div class="col-sm-9"> <input name="leaveShift" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次时间：</label> <div class="col-sm-9"> <input name="leaveShiftTime" type="text" class="col-sm-8 ShiftDatepicker" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-submit-addTouristGroup guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});