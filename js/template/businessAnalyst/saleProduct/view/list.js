/*TMODJS:{"debug":true,"version":382,"md5":"3a5d558d5b3da469cc42c35d1bcc1e31"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/saleProduct/view/list", '<div class="search-area search-tripPlanContainer"> <div class="row form-horizontal T-search-area" style="padding-left:5px; "> <label class="pull-left text-right control-label no-padding-right">开始日期:</label> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 datepicker" placeholder="开始日期" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期:</label> <div class="col-xs-1"> <input type="text" name="endTime" class="col-xs-12 datepicker" placeholder="结束日期" value="" /> </div> <label class="pull-left text-right control-label no-padding-right">应用范围:</label> <div class="col-sm-1 marginLeft-Right7"> <select name="status" class="col-sm-12 T-salePro-Application"> <option value=\'\'>全部</option> <option value="">AAAAA</option> <option value="">AAAAA</option> <option value="">AAAAA</option> </select> </div> <div class="col-xs-2"> <button class=" btn-sm T-saleProduct-search search-btn""> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="col-xs-12 saleProduct-toTal" style="padding-bottom: 15px; margin-top:15px; "> <div class="saleProduct-toTal-Cost"> <label style="min-width:10%; display:inline-block;" class="peopleCount">游客合计 : 0元</label> <label style="min-width:10%; display:inline-block;" class="needPayMoney">发团合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney">外转合计:0元</label> <label style="min-width:10%; display:inline-block;" class="payedMoney">内转合计:0元</label> </div> </div> <div class="row T-saleProductPager-list"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">线路产品</th> <th class="col-sm-2">天数</th> <th class="col-sm-1">类别</th> <th class="col-sm-1">应用范围</th> <th class="col-sm-2">游客量</th> <th class="col-sm-1">发团客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-1">外转客量</th> </tr> </thead> <tbody class="T-scenic-list"> </tbody> </table> </div> <div> </div> ');
});