/*TMODJS:{"debug":true,"version":2,"md5":"7dc0f86a9ba5ac6d0b05f203cc07db5c"}*/
define(function(require) {
    return require("../../../template")("arrange/guide/view/listMain", '<div class="T-search-area mar-b-10"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>导游</label> <input type="text" name="guideName" class="form-control T-guideName"/> <input type="hidden" name="guideId"> </div> <div class="form-group mar-r-10"> <label>出团日期</label> <input class="form-control datepicker" name="startTime" placeholder="开始时间" style="width:100px;" type="text" /> <label>&nbsp;至&nbsp;</label> <input class="form-control datepicker" name="endTime" placeholder="结束时间" style="width:100px;" type="text" /> </div> <div class="form-group mar-r-10"> <label>状态</label> <select name="status" id="status"> <option value="">全部</option> <option value="0">已出团</option> <option value="1">未出团</option> </select> </div> <div class="form-group mar-r-10"> <button class=" btn-sm T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> ');
});