/*TMODJS:{"debug":true,"version":65,"md5":"9f9bb35a7b330b3e5ed341dcf87b7e5b"}*/
define(function(require) {
    return require("../../../template")("busOrder/orderList/view/listMain", '<form class="T-search-area functionArea" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r10"> <label>车队</label> <input class="T-chooseCompany form-control searchMain" type="text" name="companyName"> <input type="hidden" name="authToken"> </div> <div class="form-group mar-r10"> <label>订单编号</label> <input class="form-control searchMain" type="text" name="orderNumber"> </div> <div class="form-group mar-r10"> <label>行程类型</label> <input class="T-chooseTripType form-control searchMain" type="text" name="triptype"> <input class="form-control" type="hidden" name="tripTypeId"> </div> <div class="form-group mar-r20"> <label>行程日期</label> <input class="T-datePicker form-control searchMain" type="text" name="tripStartTime" > - <input class="T-datePicker form-control searchMain" type="text" name="tripEndTime"> </div>  <div class="form-group mar-r20"> <label>游客姓名</label> <input type="text" name="memberName" value="" class="form-control ui-autocomplete-input searchMain"> </div> <div class="form-group mar-r20"> <label>订单状态</label> <select name="orderStatus"><option value="">全部</option></select> </div> <div class="form-group "> <button class="btn btn-xs btn-primary T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <div class="T-orderList"> </div>');
});