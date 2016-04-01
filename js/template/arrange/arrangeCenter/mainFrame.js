/*TMODJS:{"debug":true,"version":30,"md5":"7d853705b0194fd3ae9551719710e2a9"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/mainFrame", '<div class="tabable hct-max-model" role="tablist"> <ul class="nav nav-tabs"> <li class="active hct-box text-center"> <a data-toggle="tab" href="#transfer-arrange" aria-expanded="true">中转</a> </li> <li class="hct-box text-center"> <a data-toggle="tab" href="#group-arrange" aria-expanded="true">团队</a> </li> <li class="hct-box text-center"> <a data-toggle="tab" href="#booking-arrange" aria-expanded="true">代订</a> </li> </ul> <div class="tab-content">  <div class="tab-pane fade active in" id="transfer-arrange"> <div class="tabable" role="tablist"> <ul class="nav nav-tabs"> <li class="active w-80 text-center"><a data-toggle="tab" href="#transfer-bus-arrange">车</a></li> <li class="w-80 text-center"><a data-toggle="tab" href="#transfer-hotel-arrange">房</a></li> <li class="w-80 text-center"><a data-toggle="tab" href="#transfer-other-arrange">它</a></li> </ul> <div class="tab-content no-border no-padding mar-t-20">  <div class="tab-pane active fade in" id="transfer-bus-arrange" data-target="bus"> <form class="T-search-area" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <label>收客单号</label> <input type="text" class="form-control" name="tgOrderNumber" placeholder="收客单号" /> </div> <div class="form-group mar-r-20"> <label>客人</label> <input type="text" class="form-control" value="" name="touristName" placeholder="客人" /> </div> <div class="form-group mar-r-10 mar-l-10"> <label>司机</label> <input class=" form-control " value="" type="text" name="driverName" placeholder="司机" /> </div> <div class="form-group mar-r-10"> <label>用车时间</label> <input type="text" value="" class="form-control datepicker" name="arriveTime" placeholder="用车时间" /> <input type="hidden" value="" /> </div> <div class="form-group "> <button class=" btn-sm mar-r-10 search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm htc-btn btn-success mar-r-10 T-more"><span>高级搜索</span> </button> <button class="btn btn-sm htc-btn btn-success T-transit-export">导出</button> </div> </div> <div class="form-inline hct-search-area hidden"> <div class="form-group "> <label>线路产品 </label> <input class="form-control" name="lineProductName" value="" placeholder="线路产品" type="text" /> </div> <div class="form-group mar-r-10 mar-l-5"> <label>班次 </label> <input class="form-control" name="shift" value="" placeholder="班次" type="text" /> </div> <div class="form-group mar-r-20"> <label>安排人 </label> <input type="text" name="arrangeUserName" value="" class="form-control T-orderNumber" placeholder="安排人" /> </div> <div class="form-group T-hotelState r-20 mar-l-10"> <label>状态 </label> <select name="status" id=""> <option value="0">未安排</option> <option value="1">已安排</option> </select> </div> <div class="form-group T-hotelState mar-l-10"> <label>类型 </label> <select name="shuttleType" id=""> <option value="1">接团</option> <option value="2">送团</option> </select> </div> </div> </form> <div class="T-table-area"></div> </div>  <div class="tab-pane fade" id="transfer-hotel-arrange" data-target="hotel"> <form class="T-search-area" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <label>收客单号</label> <input type="text" class="form-control" name="tgOrderNumber" placeholder="收客单号" /> </div> <div class="form-group mar-r-20"> <label>客人</label> <input type="text" class="form-control" value="" name="touristName" placeholder="客人" /> </div> <div class="form-group mar-r-10 mar-l-10"> <label>酒店</label> <input class=" form-control " value="" type="text" name="hotelName" placeholder="酒店" /> </div> <div class="form-group mar-r-10"> <label>入住时间</label> <input type="text" value="" class="form-control datepicker" name="checkInTime" placeholder="入住时间" /> <input type="hidden" value="" /> </div> <div class="form-group"> <button class=" btn-sm mar-r-10 search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm htc-btn btn-success mar-r-10 T-more"><span>高级搜索</span> </button> <button class="btn btn-sm htc-btn btn-success T-transit-export">导出</button> </div> </div> <div class="form-inline hct-search-area hidden"> <div class="form-group "> <label>线路产品 </label> <input class="form-control" name="lineProductName" value="" placeholder="线路产品" type="text" /> </div> <div class="form-group mar-r-10 mar-l-5"> <label>星级 </label> <input class="form-control" name="hotelLevel" value="" placeholder="星级" type="text" /> </div> <div class="form-group mar-r-20"> <label>安排人 </label> <input type="text" name="arrangeUserName" value="" class="form-control T-orderNumber" placeholder="安排人" /> </div> <div class="form-group mar-l-10"> <label>状态 </label> <select name="status" id=""> <option value="0">未安排</option> <option value="1">已安排</option> </select> </div> <div class="form-group T-hotelState mar-l-10"> <label>类型 </label> <select name="shuttleType" id=""> <option value="1">接团</option> <option value="2">送团</option> </select> </div> </div> </form> <div class="T-table-area"></div> </div>  <div class="tab-pane fade" id="transfer-other-arrange" data-target="other"> <form class="T-search-area" role="form" onsubmit="return false"> <div class="form-inline"> <div class="form-group mar-r-10"> <label>收客单号</label> <input type="text" class="form-control" name="tgOrderNumber" /> </div> <div class="form-group mar-r-20"> <label>客人</label> <input type="text" class="form-control" value="" name="touristName" /> </div> <div class="form-group mar-r-20"> <label>线路产品 </label> <input class="form-control" name="lineProductName" value="" type="text" /> </div> <div class="form-group mar-r-10"> <label>消费日期</label> <input type="text" value="" class="form-control datepicker" name="consumeTime" /> <input type="hidden" value="" /> </div> <div class="form-group"> <button class=" btn-sm mar-r-10 search-btn T-action T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm htc-btn btn-success mar-r-10 T-action T-more">高级搜索</button> <button class="btn btn-sm htc-btn btn-success T-action T-transit-export">导出</button> </div> </div> <div class="form-inline hct-search-area hidden"> <div class="form-group mar-r-20"> <label>安排人 </label> <input type="text" name="arrangeUserName" value="" class="form-control T-orderNumber" placeholder="安排人" /> </div> <div class="form-group mar-l-10"> <label>状态 </label> <select name="status" id=""> <option value="" selected="selected">全部</option> <option value="1">已安排</option> <option value="0">未安排</option> </select> </div> <div class="form-group T-hotelState mar-l-10"> <label>类型 </label> <select name="shuttleType" id=""> <option value="1">接团</option> <option value="2">送团</option> </select> </div> </div> </form>  <div class="T-table-area"></div> </div> </div> </div> </div> </div>  <div class="tab-pane fade" id="group-arrange"> </div>  <div class="tab-pane fade" id=\'booking-arrange\'> </div> </div> </div> ');
});