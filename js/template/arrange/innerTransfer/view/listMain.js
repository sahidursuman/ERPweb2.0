/*TMODJS:{"debug":true,"version":40,"md5":"fbbd7523b23363753970a702346759fb"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/listMain", '<div class="tabbable innerTransfer_list globalAdd"> <ul class="nav nav-tabs" id="myTab"> <li class="active w100 tab-text_align"> <a data-toggle="tab" href="#inner-TransferOut" class="inner-TransferOut" aria-expanded="false" data-value="1"> 我部转出 </a> </li> <li class="w100 tab-text_align"> <a data-toggle="tab" href="#inner-TransferIn" class="inner-TransferIn" aria-expanded="true" data-value="2"> 他部转入 </a> </li> </ul> <div class="tab-content" style="position:relative;top: -2px">  <div id="inner-TransferOut" class="tab-pane fade active in clearfix"> <div class="form-inline"> <div class="form-group"> <label>接收部门</label> <input type="text" name="businessGroupName" value="" class="T-businessGroupChoose" placeholder="全部部门" /> <input type="hidden" name="businessGroupId" value="" /> </div> <div class="form-group mar-l-10"> <label>收客单号</label> <input type="text" name="orderNumber" value="" class="T-orderNumberChoose" placeholder="收客单号" /> </div> <div class="form-group mar-l-10"> <input class="form-control datepicker" name="createStartTime" placeholder="出游起始日期" style="width:100px;" type="text"> <label>&nbsp;至&nbsp;</label> <input class="form-control datepicker" name="createEndTime" placeholder="出游结束日期" style="width:100px;" type="text"> </div> <div class="form-group mar-l-10"> <label>游客</label> <input type="text" placeholder="游客" name="contactUserName"> </div> <div class="form-group mar-l-10"> <label>转客人</label> <input type="text" name="creatorName" value="" class="T-creatorChoose" placeholder="全部转客人" /> <input type="hidden" name="creatorId" value="" /> </div> <div class="form-group mar-l-10"> <input class="form-control datepicker" name="startTime" placeholder="转客起始日期" style="width:100px;" type="text"> <label>至</label> <input class="form-control datepicker" name="endTime" placeholder="转客结束日期" style="width:100px;" type="text"> </div> <div class="form-group mar-l-10"> <label class="control-label no-padding-right pull-left">状态</label> <div class="btn-group btn-status" style="margin-left: 7px"> <button data-value="0" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 未确认 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已确认</a> </li> <li> <a data-value="2" href="javascript:void(0)">已拒收</a> </li> <li> <a data-value="4" href="javascript:void(0)">已退回</a> </li> </ul> </div> <button class="btn-sm T-transferOut-search search-btn" style="margin-left: 20px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="search-btn btn-sm btn-height T-transfer-export R-right innerTr-export" data-right="1340001">导出名单</button> </div> </div> <div class="transferOut-content" style="padding-bottom: 15px"> <div class="transferOut-Header-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">人数合计 : 0大0小</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney mar-l-15">应付款合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney mar-l-15 hide">已付款合计:0元</label> </div> </div>  <div class="innerList clearfix" style="padding-bottom: 25px"></div> </div>   <div id="inner-TransferIn" class="tab-pane fade clearfix"> <div class="form-inline"> <div class="form-group"> <label>线路产品</label> <input type="text" name="lineProductName" value="" class="T-lineProductChoose" placeholder="全部线路产品" /> <input type="hidden" name="lineProductId" value="" /> </div> <div class="form-group mar-l-10"> <label>收客单号</label> <input type="text" name="orderNumber" value="" class="T-orderNumberChoose" placeholder="收客单号" /> </div> <div class="form-group mar-l-10"> <input class="datepicker" name="startTime" placeholder="出游起始日期" type="text"> <label>至</label> <input class="datepicker" name="endTime" placeholder="出游结束日期" type="text"> </div> <div class="form-group mar-l-15"> <label>游客</label> <input type="text" placeholder="游客" name="contactUserName"> </div> <div class="form-group mar-l-10"> <label>部门</label> <input type="text" name="businessGroupName" value="" class="T-businessGroupChoose" placeholder="全部部门" /> <input type="hidden" name="businessGroupId" value="" /> </div> <div class="form-group mar-l-10"> <label>联系人</label> <input type="text" name="creatorName" value="" class="T-creatorChoose" placeholder="全部转客人" /> <input type="hidden" name="creatorId" value="" /> </div> <div class="form-group mar-l-10"> <label class="control-label no-padding-right pull-left" style="display: inline-block;">状态</label> <div class="btn-group btn-status" style="margin-left: 7px"> <button data-value="0" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span>未确认</span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">未确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已确认</a> </li> <li> <a data-value="4" href="javascript:void(0)">已退回</a> </li> </ul> </div> <button class="btn-sm T-transferIn-search search-btn" style="margin-left: 18px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success T-transfer-export R-right innerTr-export" data-right="1340001">导出名单</button> </div> </div> <div class="transferIn-content" style="padding-bottom: 15px"> <div class="transferIn-Header-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">人数合计 : 0大0小</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney mar-l-15">应收款合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney mar-l-15 hide">已收款合计:0元 </label> </div> </div>  <div class="innerList clearfix" style="padding-bottom: 25px"></div> </div>  </div> </div> ');
});