/*TMODJS:{"debug":true,"version":174,"md5":"46c4dbdb44a3f7a084fc50490d273a98"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/listMain", '<div class="row col-xs-12 innerTransfer_list globalAdd"> <div class="col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="myTab"> <li class="active"> <a data-toggle="tab" href="#inner-TransferOut" class="inner-TransferOut" aria-expanded="false" data-value="1"> 我部转出 </a> </li> <li> <a data-toggle="tab" href="#inner-TransferIn" class="inner-TransferIn" aria-expanded="true" data-value="2"> 他部转入 </a> </li> </ul> <div class="tab-content" style="position:relative;top: -2px">  <div id="inner-TransferOut" class="tab-pane fade active in clearfix"> <div class="form-group form-horizontal"> <div class="search-area"> <label class="control-label no-padding-right pull-left">部门：</label> <div class="col-sm-1"> <input type="text" name="businessGroupName" value="" class="T-businessGroupChoose col-sm-12" placeholder="全部部门" /> <input type="hidden" name="businessGroupId" value="" /> </div> <label class="control-label no-padding-right pull-left subsectionWords">转客人：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" name="creatorName" value="" class="T-creatorChoose col-sm-12" placeholder="全部转客人" /> <input type="hidden" name="creatorId" value="" /> </div> <div class="form-group"> <div class="search-area"> <div style="float: left;width: 150px"> <div class="col-xs-12" style="padding-right: 0"> <div class="input-group col-xs-12"> <input class="col-xs-12 datepicker" name="startTime" placeholder="转客起始日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div style="float: left;">-</div> <div style="float: left;width: 150px"> <div class="col-xs-12" style="padding-left: 13px"> <div class="input-group col-xs-12"> <input class="col-xs-12 datepicker" name="endTime" placeholder="转客结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="col-sm-1 btn-group btn-status marginLeft-Right7"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span>全部</span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已确认</a> </li> <li> <a data-value="2" href="javascript:void(0)">已拒收</a> </li> </ul> </div> <button class="btn-sm T-transferOut-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success T-transfer-export R-right innerTr-export" data-right="1340001">导出名单</button> </div> </div> <div class="col-xs-12 transferOut-content" style="padding-bottom: 15px"> <div class="transferOut-Header-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">人数合计 : 0大0小</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney">应付款合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney">已付款合计:0元</label> </div> </div>  <div class="innerList clearfix"></div> </div> </div> </div>   <div id="inner-TransferIn" class="tab-pane fade clearfix"> <div class="form-group form-horizontal"> <div class="search-area"> <label class="control-label no-padding-right pull-left">线路产品：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" name="lineProductName" value="" class="T-lineProductChoose col-sm-12" placeholder="全部线路产品" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="form-group"> <div class="search-area"> <div style="float: left;width: 150px"> <div class="col-xs-12" style="padding-right: 0"> <div class="input-group col-xs-12"> <input class="col-xs-12 datepicker" name="startTime" placeholder="出游起始日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div style="float: left;">-</div> <div style="float: left;width: 150px"> <div class="col-xs-12" style="padding-left: 13px"> <div class="input-group col-xs-12"> <input class="col-xs-12 datepicker" name="endTime" placeholder="出游结束日期" value="" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <label class="control-label no-padding-right pull-left">部门：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" name="businessGroupName" value="" class="T-businessGroupChoose col-sm-12 width110" placeholder="全部部门" /> <input type="hidden" name="businessGroupId" value="" /> </div> <label class="control-label no-padding-right pull-left subsectionWords">联系人：</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" name="creatorName" value="" class="T-creatorChoose col-sm-12" placeholder="全部转客人" /> <input type="hidden" name="creatorId" value="" /> </div> <label class="control-label no-padding-right pull-left">状态：</label> <div class="col-sm-1 btn-group btn-status marginLeft-Right7"> <button data-value="" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span>全部</span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已确认</a> </li> </ul> </div> <button class="btn-sm T-transferIn-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success T-transfer-export R-right innerTr-export">导出名单</button> </div> </div> <div class="col-xs-12 transferIn-content" style="padding-bottom: 15px"> <div class="transferIn-Header-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">人数合计 : 0大0小</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney">应收款合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney">已收款合计:0元 </label> </div> </div>  <div class="innerList clearfix"></div> </div> </div> </div>  </div> </div> </div> </div>');
});