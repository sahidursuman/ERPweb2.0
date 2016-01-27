/*TMODJS:{"debug":true,"version":808,"md5":"0a972382aeedfd0d08a037e1d7d5fca3"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listMain", '<div class="row col-xs-12 transferTouristMain globalAdd"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#Transfer-Out" class="Transfer-Out" aria-expanded="true" data-value="1"> 我社转出 </a> </li> <li> <a data-toggle="tab" href="#Transfer-In" class="Transfer-In" aria-expanded="false" data-value="2" > 同行转入 </a> </li> </ul> <div class="tab-content" style="position: relative;top: -2px">  <div id="Transfer-Out" class="tab-pane fade active in clearfix" > <div class="form-group form-horizontal"> <div class="search-area T-search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行地接：</label> <div class="col-sm-2 marginLeft-Right7 width-self160"> <input type="text" class="col-sm-12 T-choosePartnerAgency" placeholder="来源" name="partnerAgencyName" /> <input type="hidden" name="partnerAgencyId" value=""> </div> <label class="control-label no-padding-right pull-left">转客人：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" class="col-xs-12 T-chooseUserName" placeholder="录入人" name="userName"> <input type="hidden" name="userNameId" value=""> </div> <div class="form-group"> <div class="col-xs-2 width-self220"> <div class="col-xs-9"> <div class="input-group"> <input class="col-xs-12 datepicker" name="startTime" placeholder="外转起始日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2 width-self220"> <div class="col-xs-9" style="margin-left: -92px;"> <div class="input-group"> <input class="col-xs-12 datepicker" name="endTime" placeholder="外转结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-3 transfer-status"> <label class="control-label no-padding-right pull-left" style="display: inline-block;">状态：</label> <div class="btn-group btn-status" style="margin-left: 7px"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 全部 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="2" href="javascript:void(0)">已拒收</a> </li> <li> <a data-value="3" href="javascript:void(0)">未使用</a> </li> </ul> </div> <button class="btn-sm T-transferOut-search search-btn" style="margin-left: 20px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success T-transferOut-export R-right" data-right="1180005" style="margin-left: 20px;">导出名单</button> </div> </div> </div> <div class="col-xs-12 transferOut-content" style="padding-bottom: 15px"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount">0</span>大<span class="totalChildCount">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed">0</span>元</lable> </div> </div>   <div class="col-xs-12 transferList" ></div> </div>  <div id="Transfer-In" class="tab-pane fade clearfix" > <div class="form-group form-horizontal"> <div class="search-area T-search-area"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px!important;">同行线路产品:</label> <div class="col-sm-2 marginLeft-Right7 width-self160"> <input type="text" class="col-sm-12 T-chooseLineProduct" placeholder="同行线路产品" name="lineProductName" /> <input type="hidden" name="lineProductId" value=""> </div> <label class="control-label no-padding-right pull-left">同行地接：</label> <div class="col-sm-1 marginLeft-Right7 "> <input type="text" class="col-sm-12 T-choosePartnerAgency width110" placeholder="来源" name="partnerAgencyName" /> <input type="hidden" name="partnerAgencyId" value=""> </div> <div class="form-group"> <div class="col-xs-2 width-self220"> <div class="col-xs-9"> <div class="input-group"> <input class="col-xs-12 datepicker" name="startTime" placeholder="出游起始日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2 width-self220"> <div class="col-xs-9" style="margin-left: -92px;"> <div class="input-group"> <input class="col-xs-12 datepicker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-3 transfer-status"> <label class="control-label no-padding-right pull-left" style="display: inline-block;">状态：</label> <div class="btn-group btn-status" style="margin-left: 7px"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 全部 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已接收</a> </li> <li> <a data-value="3" href="javascript:void(0)">未使用</a> </li> </ul> </div> <button class="btn-sm T-transferIn-search search-btn" style="margin-left: 20px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </div>  <div class="col-xs-12 transferIn-content" style="padding-bottom: 15px"> <lable style="min-width:10%; display:inline-block; ">人数合计：<span class="totalAdultCount F-float F-count">0</span>大<span class="totalChildCount F-float F-count">0</span>小</lable> <lable style="min-width:10%; display:inline-block; ">应付款合计：<span class="totalNeedPay F-float F-money">0 </span>元</lable> <lable style="min-width:10%; display:inline-block; ">已付款合计:<span class="totalPayed F-float F-money">0</span>元</lable> </div>  <div class="col-xs-12" > <div class="col-xs-12 transferList"> </div> </div>  </div> </div> </div> </div> </div> ');
});