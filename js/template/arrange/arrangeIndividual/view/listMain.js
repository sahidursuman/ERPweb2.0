/*TMODJS:{"debug":true,"version":14,"md5":"89248b185b055908b96986731cbf116f"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/listMain", '<div class="row col-xs-12 arrangeTouristMain T-Visitor-list globalAdd">  <div class="search-area T-search-area clearfix" style="margin-left:25px; margin-bottom:15px;"> <form class="form-horizontal" role="form" onsubmit="return false"> <label class="pull-left text-right control-label no-padding-right">线路产品</label> <div class="col-sm-2"> <input type="text" name="lineProductName" class="col-xs-12 T-Choose-linProList" placeholder="请选择或输入线路产品" value="" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="col-sm-1 marginLeft-Right7"> <input name="startTime" value="" type="text" class="datepicker col-xs-11" placeholder="出游日期"/> </div> <div class="col-sm-1 marginLeft-Right7"> <input name="endTime" value="" type="text" class="datepicker col-xs-11" placeholder="结束日期"/> </div> <select class="T-choosePart-chooseFromB col-sm-1" name="type"> <option value=\'\'>全部</option> <option value=\'1\'>组团社</option> <option value=\'2\'>业务部</option> </select> <label class="pull-left control-label no-padding-right" style="margin-left:10px;">来源</label> <div class="col-sm-1 marginLeft-Right7"> <input name="" value="" type="text" class="col-xs-11 T-chosenPB" readonly="readonly" /> <input name="fromPartnerAgencyName" value="" type="text" class="col-xs-11 T-fromPartnerAgency" style="display:none;"/> <input name="fromPartnerAgencyId" value="" type="hidden" class="col-xs-11" /> <input name="fromBussinessGroupName" value="" type="text" class="col-xs-11 T-fromBussinessGroup" style="display:none;"/> <input name="fromBussinessGroupId" value="" type="hidden" class="col-xs-11" /> </div> <label class="pull-left control-label no-padding-right">联系人</label> <div class="col-sm-2 marginLeft-Right7"> <input name="contactInfo" value="" type="text" class="col-xs-11" placeholder="联系人或联系电话"/> </div> <button class=" btn-sm T-visitorTourist-search search-btn pull-left" style="margin-left: 2px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <label class="pull-left control-label no-padding-right" style="margin-left:25px; color:#D2691E; ">已选人数</label> <div class="T-chosenAdultAndChildCount no-padding-right col-sm-1" style=" color:#D2691E;">大人 0 小孩 0 </div> </form> </div> <div class="T-touristVisitor-list col-sm-12"> </div> </div>');
});