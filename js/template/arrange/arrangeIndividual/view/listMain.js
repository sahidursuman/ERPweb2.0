/*TMODJS:{"debug":true,"version":151,"md5":"b12e288e4869cb8db9fad397266fb895"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/listMain", '<div class="arrangeTouristMain T-Visitor-list globalAdd">  <div class="search-area T-search-area clearfix"> <form role="form" class="form-inline" onsubmit="return false"> <div class="form-group mar-r-9"> <label>线路产品</label> <input type="text" name="lineProductName" class="form-control T-Choose-linProList" placeholder="请选择或输入线路产品"> <input type="hidden" name="lineProductId"> </div> <div class="form-group mar-r-9"> <input class="datepicker" name="startTime" placeholder="开始时间" type="text" /> <label>至</label> <input class="datepicker" name="endTime" placeholder="结束时间" type="text" /> </div> <div class="form-group mar-r-9"> <select class="T-choosePart-chooseFromB pull-left" style="110px;" name="type"> <option value=\'\'>全部</option> <option value=\'1\'>组团社</option> <option value=\'2\'>业务部</option> </select> <div class="pull-left" style="110px;"> <input name="" value="" type="text" class="T-chosenPB" readonly="readonly" /> <input name="fromPartnerAgencyName" value="" type="text" class="T-fromPartnerAgency" style="display:none;" /> <input name="fromPartnerAgencyId" value="" type="hidden"/> <input name="fromBussinessGroupName" value="" type="text" class="T-fromBussinessGroup" style="display:none;" /> <input name="fromBussinessGroupId" value="" type="hidden"/> </div> </div> <div class="form-group mar-r-9"> <label>收客单号</label> <input name="orderNumber" value="" type="text" placeholder="请输入收客单号" /> </div> <div class="form-group mar-r-9"> <label>联系人</label> <input name="contactInfo" value="" type="text" class="w-80" placeholder="联系人或联系电话" /> </div> <div class="form-group"> <label >出游日期</label> <select name="order" id="order_by"> <option value="asc">升序</option> <option value="desc">降序</option> </select> </div> <input type="text" class="hidden" name="sortType" value="startTime"> <div class="form-group"> <button class=" btn-sm T-search search-btn pull-left" data-customerType=\'0\'><i class="ace-icon fa fa-search"></i> 搜索</button> </div> </form> </div> <div class="T-touristVisitor-list"> </div> </div> ');
});