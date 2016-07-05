/*TMODJS:{"debug":true,"version":107,"md5":"2b46e6ed148aa3ad81d005674e7366aa"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listHeader", '<div class="row financialCount"> <div class="col-xs-12"> <form class="T-search-area" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <label class="control-label pull-left"><span>团号&nbsp;</span> </label> <input type="text" value="" name="chooseTripNumber" class="T-tripNumber" placeholder="请输入团号" /> </div> <div class="form-group mar-r-10"> <label class="control-label pull-left"><span>收客单号&nbsp;</span> </label> <input type="text" value="" name="orderNumber" class="T-orderNumber" placeholder="请输入收客单号" /> </div> <div class="form-group btn-group T-time-status mar-r-10"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span>出团日期</span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="0" href="javascript:void(0)">出团日期</a></li> <li><a data-value="1" href="javascript:void(0)">完团日期</a></li> </ul> </div> <div class="form-group mar-r-10"> <input type="text" value="" name="startTime" class=" datepicker" style="width:88px;" placeholder="开始日期" /> <label class="control-label"><span>至</span></label> <input type="text" value="" name="endTime" class=" datepicker" style="width:88px;" placeholder="结束日期" /> </div> <div class="form-group btn-status btn-group mar-r-10"> <label>状态 </label> <button data-value="" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span>全部</span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-sleect-ul" style="margin-left:28px;margin-top:-3px;"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <div class="form-group mar-l-10"> <button class=" btn-sm T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group mar-l-10"> <button class="btn btn-sm btn-success T-high-search search-btn unfold"> 高级搜索 </button> </div> </div> <div class="form-inline hidden T-highSearch"> <div class="form-group mar-r-10"> <label class="control-label pull-left"><span>游客&nbsp;</span> </label> <input type="text" value="" name="contactInfo" class="T-contactInfo" placeholder="联系人或联系电话" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>线路产品 </span></label> <input type="text" value="" name="chooseLineProductName" placeholder="全部线路产品" /> <input type="hidden" value="" name="lineProductId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>导游 </span></label> <input type="text" value="" name="chooseGuideRealName" placeholder="全部的导游" /> <input type="hidden" value="" name="guideId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>责任计调 </span></label> <input type="text" value="" name="dutyOPUserName" placeholder="全部的责任计调" /> <input type="hidden" value="" name="dutyOPUserId" /> </div> </div> </form> <div class="form-group"> <label class="control-label mar-r-20">收入：<span class="F-float F-money T-income"></span></label> <label class="control-label mar-r-20">成本：<span class="F-float F-money T-cost"></span></label> <label class="control-label mar-r-20">毛利：<span class="F-float F-money T-profit"></span></label> <label class="control-label mar-r-20">人均毛利(不含小孩)：<span class="F-float F-money T-preProfit"></span></label> <label class="control-label mar-r-20">人数：<span class="T-peopleCount"></span></label> <label class="control-label">团数：<span class="F-float F-count T-tripCount"</span></label> </div> </div> <div class="col-xs-12 T-counterList"></div> </div> ');
});