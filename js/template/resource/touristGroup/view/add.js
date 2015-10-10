/*TMODJS:{"debug":true,"version":508,"md5":"88cef69a9f0f2322f6cc9032b238425b"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/add", '<div class="col-xs-12 addTouristGroup"> <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 小组信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>线路产品:</label> <div class="col-sm-2"> <input type="text" name="lineProductIdName" class="col-sm-8 bind-change" readonly="readonly" /> <input type="hidden" name="lineProductId" /> <button class="col-sm-4 btn btn-sm btn-primary btn-travelLine-search" style="padding-bottom:5px;"> <i class="ace-icon fa fa-search "></i>搜索 </button> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出游日期:</label> <div class="col-sm-2">  <div class="input-group"> <input type="text" name="startTime" class="col-sm-12 date-picker datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">是否购买保险:</label> <div class="col-sm-2 checkbox buyInsurance"> <label> <input checked="checked" type="checkbox" class="ace buyInsurance-status" value="1" name="buyInsurance"> <span class="lbl"> </span> </label> </div> </div> <div class="form-group choosePartnerAgencyDiv"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>客户来源:</label> <div class="col-sm-2">  <select name="fromPartnerAgencyId" class="col-sm-12"> <option selected="selected" value="">未选择</option> </select>  </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行联系人:</label> <div class="col-sm-2"> <div class="input-group"> <input class="choosePartnerManager col-sm-12 bind-change" name="partnerAgencyNameList" type="text" /> <input type="hidden" name="partnerAgencyContactId" /> <span class="input-group-addon addPartnerManager" style="cursor:pointer;" title="为组团社新添加联系人"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div>  </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12"> <option selected="selected" value="1">旅行社系统</option> <option value="2">传真</option> <option value="3">短信</option> <option value="4">电话</option> <option value="5">QQ</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应收:</label> <div class="col-sm-2"> <input readonly="readonly" type="text" name="needPayAllMoney" class="col-sm-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收:</label> <div class="col-sm-2"> <input type="text" name="payedMoney" class="col-sm-12" value="0" /> </div> <label class="col-sm-1 control-label no-padding-right">现收:</label> <div class="col-sm-2"> <input type="text" name="currentNeedPayMoney" class="col-sm-12" value="0" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">未收:</label> <div class="col-sm-2"> <input readonly="readonly" type="text" name="unIncomeMoney" class="col-sm-12" /> </div> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success btn-touristGroup-addCost2" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>单价</th> <th>操作</th> </tr> </thead> <tbody class="addCostTbody"> <tr> <td> 结算价 </td> <td> 大人 </td> <td> <span class="necessary col-sm-1">*</span><input name="adultCount" type="text" class="col-sm-11 no-padding-right costCount" /> </td> <td> <span class="necessary col-sm-1">*</span><input name="adultPrice" type="text" class="col-sm-11 no-padding-right costPrice" /> </td> <td></td> </tr> <tr> <td> 结算价 </td> <td> 小孩 </td> <td> <input name="childCount" type="text" value="0" class="col-sm-11 no-padding-right costCount" style="float:right;" /> </td> <td> <input name="childPrice" type="text" value="0" class="col-sm-11 no-padding-right costPrice" style="float:right;" /> </td> <td></td> </tr>  </tbody> </table> </div> </div> </div> </div> </form> <form class="form-horizontal touristGroupMainFormMember" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客名单 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">住宿标准：</label> <div class="col-sm-3"> <select name="level" class="col-sm-12"> <option selected="selected" value="1">三星以下</option> <option value="2">三星</option> <option value="3">准四星</option> <option value="4">四星</option> <option value="5">准五星</option> <option value="6">五星</option> <option value="7">五星以上</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">包含自费：</label> <div class="col-sm-3"> <input name="includeOwnExpense" type="text" class="col-sm-12" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="touristRemarks" class="col-sm-12 no-padding-right" type="text"> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success btn-add-tourist" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <div style="height:5px;width:25px;float:left;"></div> <button class="btn btn-sm btn-success btn-add-tourist-more" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addTouristList"> <thead> <tr> <th>序号</th> <th> <span class="necessary">*</span>姓名</th> <th> <span class="necessary">*</span>手机号码</th> <th>证件类型</th> <th>证件号</th> <th>设为联系人</th> <th>操作</th> </tr> </thead> <tbody class="addTouristTbody">  </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal touristGroupMainFormRS" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 中转 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-3"> <label class="col-sm-2 control-label no-padding-right">接：</label> <div class="clo-sm-5 checkbox"> <label> <input type="checkbox" class="ace reception-check" value="0" name="touristReception"> <span class="lbl"> </span> </label> </div> <div class="col-sm-12 reception-div hide" style="padding-top:25px;"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">接待日期:</label> <div class="col-sm-9"> <div class="input-group"> <input type="text" name="receptionTime" class="col-sm-12 date-picker datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">地点：</label> <div class="col-sm-9"> <input name="receptionAddress" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次：</label> <div class="col-sm-9"> <input name="arriveShift" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次时间：</label> <div class="col-sm-9"> <input name="arriveShiftTime" type="text" class="col-sm-8 datepicker" /> </div> </div> </div> </div> <div class="col-sm-3"> <label class="col-sm-2 control-label no-padding-right">小车：</label> <div class="clo-sm-5 checkbox"> <label> <input type="checkbox" class="ace smallCar" value="0" name="smallCar"> <span class="lbl"> </span> </label> </div> </div> <div class="col-sm-3"> <label class="col-sm-2 control-label no-padding-right">送：</label> <div class="clo-sm-5 checkbox"> <label> <input type="checkbox" class="ace send-check" value="0" name="touristSend"> <span class="lbl"> </span> </label> </div> <div class="col-sm-12 send-div hide" style="padding-top:25px;"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">送离日期:</label> <div class="col-sm-9"> <div class="input-group"> <input type="text" name="sendTime" class="col-sm-12 date-picker datepicker" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">地点：</label> <div class="col-sm-9"> <input name="sendAddress" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次：</label> <div class="col-sm-9"> <input name="leaveShift" type="text" class="col-sm-8" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">班次时间：</label> <div class="col-sm-9"> <input name="leaveShiftTime" type="text" class="col-sm-8 datepicker" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-addTouristGroup"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});