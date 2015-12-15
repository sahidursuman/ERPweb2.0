/*TMODJS:{"debug":true,"version":326,"md5":"a4655aa646ebb59a1edc724a0ba04381"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/orderManagerList", '<div class="row col-xs-12 T-OrderManager-Container"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active" style="width:10%; text-align:center;"> <a data-toggle="tab" href="#T-BusCompany-list" class="T-Bus" aria-expanded="true" data-value="1"> 车 </a> </li> <li style="width:10%; text-align:center;" > <a data-toggle="tab" href="#T-HotelOrder-list" class="T-House" aria-expanded="false" data-value="2" > 酒店 </a> </li> </ul> <div class="tab-content" style="position: relative;top: -2px"> <div id="T-BusCompany-list" class="tab-pane fade active in clearfix" > <div class="search-area clearfix" style="margin-left:25px; margin-bottom:15px; "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="col-sm-12 clearfix"> <label class="pull-left text-right control-label no-padding-right">订单号</label> <div class="col-sm-2"> <input type="text" name="lineProductName" class="col-xs-12 T-Choose-orderNumber" placeholder="请输入订单号" value="" /> <input type="hidden" name="orderNumberId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车队</label> <div class="col-sm-2"> <input type="text" name="busCompany" class="col-xs-12 T-Choose-busCompany" placeholder="请输入车队" value="" /> <input type="hidden" name="busCompanyId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车座数</label> <div class="col-sm-2"> <input type="text" name="seatCount" class="col-xs-12 T-Choose-seatCount" placeholder="请输入车座数" value="" /> <input type="hidden" name="seatCountId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车辆品牌</label> <div class="col-sm-2"> <input type="text" name="busBrand" class="col-xs-12 T-Choose-busBrand" placeholder="请输入车辆品牌" value="" /> <input type="hidden" name="busBrandId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label> <div class="pull-left btn-group btn-status btn-touristStatus T-select-status"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 状态 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">已撤单</a> </li> <li> <a data-value="1" href="javascript:void(0)">已下单</a> </li> <li> <a data-value="2" href="javascript:void(0)">已确认</a> </li> <li> <a data-value="3" href="javascript:void(0)">已完成</a> </li> <li> <a data-value="4" href="javascript:void(0)">进行中</a> </li> </ul> </div> </div> <div class="col-sm-12 clearfix" style=" margin-top:10px;"> <label class="pull-left text-right control-label no-padding-right">预订人</label> <div class="col-sm-2"> <input type="text" name="rePeople" class="col-xs-12 T-Choose-rePeople" placeholder="请输入预订人" value="" /> <input type="hidden" name="rePeopleId" value="" /> </div> <div class="col-xs-3"> <label class="col-xs-3 text-right control-label no-padding-right">预定日期</label> <div class="col-xs-8 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-5 date-picker" name="startTime" placeholder="开始时间" value="" type="text" /> <lable class="col-xs-2" style="text-align:center;padding:0;padding-top:2px;">&nbsp;至&nbsp;</lable> <input class="col-xs-5 date-picker" name="endTime" placeholder="结束时间" value="" type="text" /> </div> </div> </div> <label class="pull-left text-right control-label no-padding-right">撤单</label> <div class="col-sm-2"> <input type="text" name="lineProductName" class="col-xs-12 T-Choose-linProList" placeholder="请输入撤单人" value="" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="col-xs-3"> <label class="col-xs-3 text-right control-label no-padding-right">撤单时间</label> <div class="col-xs-8 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-5 date-picker" name="arrangeStartTime" placeholder="开始时间" value="" type="text" /> <lable class="col-xs-2" style="text-align:center;padding:0;padding-top:2px;">&nbsp;至&nbsp;</lable> <input class="col-xs-5 date-picker" name="arrangeEndTime" placeholder="结束时间" value="" type="text" /> </div> </div> </div> <div class="col-xs-1" style="left: -60px" > <button class=" btn-sm T-busCompanyOrder-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> </div> <div class="col-sm-12 T-busCompany-pagerList" > </div> </div>  <div id="T-HotelOrder-list" class="tab-pane fade in clearfix" > <div class="search-area clearfix" style="margin-left:25px; margin-bottom:15px; "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="col-sm-12 clearfix"> <label class="pull-left text-right control-label no-padding-right">订单号</label> <div class="col-sm-2"> <input type="text" name="lineProductName" class="col-xs-12 T-Choose-orderNumber" placeholder="请输入订单号" value="" /> <input type="hidden" name="orderNumberId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车队</label> <div class="col-sm-2"> <input type="text" name="busCompany" class="col-xs-12 T-Choose-busCompany" placeholder="请输入车队" value="" /> <input type="hidden" name="busCompanyId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车座数</label> <div class="col-sm-2"> <input type="text" name="seatCount" class="col-xs-12 T-Choose-seatCount" placeholder="请输入车座数" value="" /> <input type="hidden" name="seatCountId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">车辆品牌</label> <div class="col-sm-2"> <input type="text" name="busBrand" class="col-xs-12 T-Choose-busBrand" placeholder="请输入车辆品牌" value="" /> <input type="hidden" name="busBrandId" value="" /> </div> <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label> <div class="pull-left btn-group btn-status btn-touristStatus T-select-status"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 状态 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">已撤单</a> </li> <li> <a data-value="1" href="javascript:void(0)">已下单</a> </li> <li> <a data-value="2" href="javascript:void(0)">已确认</a> </li> <li> <a data-value="3" href="javascript:void(0)">已完成</a> </li> <li> <a data-value="4" href="javascript:void(0)">进行中</a> </li> </ul> </div> </div> <div class="col-sm-12 clearfix" style=" margin-top:10px;"> <label class="pull-left text-right control-label no-padding-right">预订人</label> <div class="col-sm-2"> <input type="text" name="rePeople" class="col-xs-12 T-Choose-rePeople" placeholder="请输入预订人" value="" /> <input type="hidden" name="rePeopleId" value="" /> </div> <div class="col-xs-3"> <label class="col-xs-3 text-right control-label no-padding-right">预定日期</label> <div class="col-xs-8 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-5 date-picker" name="startTime" placeholder="开始时间" value="" type="text" /> <lable class="col-xs-2" style="text-align:center;padding:0;padding-top:2px;">&nbsp;至&nbsp;</lable> <input class="col-xs-5 date-picker" name="endTime" placeholder="结束时间" value="" type="text" /> </div> </div> </div> <label class="pull-left text-right control-label no-padding-right">撤单</label> <div class="col-sm-2"> <input type="text" name="lineProductName" class="col-xs-12 T-Choose-linProList" placeholder="请输入撤单人" value="" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="col-xs-3"> <label class="col-xs-3 text-right control-label no-padding-right">撤单时间</label> <div class="col-xs-8 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-5 date-picker" name="arrangeStartTime" placeholder="开始时间" value="" type="text" /> <lable class="col-xs-2" style="text-align:center;padding:0;padding-top:2px;">&nbsp;至&nbsp;</lable> <input class="col-xs-5 date-picker" name="arrangeEndTime" placeholder="结束时间" value="" type="text" /> </div> </div> </div> <div class="col-xs-1" style="left: -60px" > <button class=" btn-sm T-hotelOrder-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> </div> <div class="col-sm-12 T-HotelOrder-pagerList"></div> </div> </div> </div> </div>');
});