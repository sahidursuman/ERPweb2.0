/*TMODJS:{"debug":true,"version":95,"md5":"883f8cb2c13744a355ee37c31c2fbd8b"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/listMain", '<div class="T-search-shopStatArea col-xs-12"> <div class="form-group clearfix T-search-area mar-b-10"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-9"> <label>客户 </label> <input type="text" name="partnerAgency" class="form-control T-Choose-partnerAgency" placeholder="客户" value="" /> <input type="hidden" name="partnerAgencyId" value="" /> </div> <div class="form-group mar-r-9"> <label>团号 </label> <input type="text" name="tripNumber" class="form-control T-Choose-tripNumber" placeholder="团号" value="" /> </div> <div class="form-group mar-r-9"> <label>购物店 </label> <input type="text" name="shop" class="form-control T-Choose-shop" placeholder="购物店" value="" /> <input type="hidden" name="shopId" value="" /> </div> <div class="form-group mar-r-9"> <label>针对客源 </label> <select name="customerType"> <option value="">全部</option> <option value="0">散客</option> <option value="1">团体</option> </select> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-9"> <label>开始日期 </label> <input type="text" name="startTime" class="form-control datepicker" placeholder="开始日期" value="" /> </div> <div class="form-group mar-r-9"> <label>结束日期 </label> <input type="text" name="endTime" class="form-control datepicker" placeholder="结束日期" value="" /> </div> <div class="form-group mar-r-9"> <button class=" btn-sm T-shopStat-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class=" btn-sm T-shopStat-export search-btn"> <i class="ace-icon fa fa-search"></i> 导出 </button> </div> </form> </div> <div class="T-shopStatPager-list"> </div> </div> ');
});