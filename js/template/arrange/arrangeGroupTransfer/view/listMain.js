/*TMODJS:{"debug":true,"version":333,"md5":"2660805618976b4162316d0d232413d9"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/listMain", '<div class="row col-xs-12 arrangeTouristMain T-Transfer-list globalAdd">  <div class="search-area T-search-area clearfix"> <form role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group"> <label>线路产品</label> <input type="text" name="tripNumber" class="form-control T-Choose-linProList" placeholder="请选择或输入线路产品"> </div> <div class="form-group mar-l-15"> <input class="form-control datepicker" name="startTime" placeholder="开始时间" style="width:100px;" type="text" /> <label>&nbsp;至&nbsp;</label> <input class="form-control datepicker" name="endTime" placeholder="结束时间" style="width:100px;" type="text" /> </div> <div class="form-group mar-l-15"> <select class="T-choosePart-chooseFromB pull-left" style="110px;" name="type"> <option value=\'\'>全部</option> <option value=\'1\'>组团社</option> <option value=\'2\'>业务部</option> </select> <label class="mar-l-10 pull-left">客户</label> <div class="col-sm-1" style="110px;"> <input name="" value="" type="text" class="T-chosenPB" readonly="readonly" /> <input name="fromPartnerAgencyName" value="" type="text" class="T-fromPartnerAgency" style="display:none;" /> <input name="fromPartnerAgencyId" value="" type="hidden"/> <input name="fromBussinessGroupName" value="" type="text" class="T-fromBussinessGroup" style="display:none;" /> <input name="fromBussinessGroupId" value="" type="hidden"/> </div> </div> <div class="form-group mar-l-15"> <label>收客单号</label> <input name="orderNumber" value="" type="text" placeholder="请输入收客单号" /> </div> <div class="form-group"> <label class="pull-left control-label no-padding-right" style="margin-left:10px;">联系人</label> <input name="contactInfo" value="" type="text" placeholder="联系人或联系电话" /> </div> <div class="form-group"> <button class=" btn-sm T-Transfer-search search-btn pull-left" style="margin-left: 2px"><i class="ace-icon fa fa-search"></i> 搜索</button> <label class="pull-left control-label no-padding-right mar-l-15" style="color:#D2691E; ">已选人数<span class="T-chosenAdultAndChildCount" style="color:#D2691E;">大人 0 小孩 0 </span></label> </div> </div> </form> </div> <div class="T-groupTransfer-list col-sm-12"></div> </div> ');
});