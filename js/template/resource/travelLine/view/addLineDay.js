/*TMODJS:{"debug":true,"version":131,"md5":"fe7d469fa91d9faa44aeffe221624a3f"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/addLineDay", '<div class="col-xs-12"> <form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <a > <i class="ace-icon fa fa-info-circle" style="font-size: 20px!important; position: relative;top:5px"></i> <label class="middle title-size">日程安排主体信息</label> </a> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程日期:</label> <div class="col-sm-3"> <select name="whichDay" class="col-sm-12"> <option selected="selected" value="1">第1天</option> <option value="2">第2天</option> <option value="3">第3天</option> <option value="4">第4天</option> <option value="5">第5天</option> <option value="6">第6天</option> <option value="7">第7天</option> <option value="8">第8天</option> <option value="9">第9天</option> <option value="10">第10天</option> <option value="11">第11天</option> <option value="12">第12天</option> <option value="13">第13天</option> <option value="14">第14天</option> <option value="15">第15天</option> <option value="16">第16天</option> <option value="17">第17天</option> <option value="18">第18天</option> <option value="19">第19天</option> <option value="20">第20天</option> <option value="21">第21天</option> <option value="22">第22天</option> <option value="23">第23天</option> <option value="24">第24天</option> <option value="25">第25天</option> <option value="26">第26天</option> <option value="27">第27天</option> <option value="28">第28天</option> <option value="29">第29天</option> <option value="30">第30天</option> <option value="31">第31天</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">酒店星级:</label> <div class="col-sm-3"> <select name="hotelLevel" class="col-sm-12"> <option selected="selected" value="0">未选择</option> <option value="1">三星以下</option> <option value="2">三星</option> <option value="3">准四星</option> <option value="4">四星</option> <option value="5">准五星</option> <option value="6">五星</option> <option value="7">五星以上</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程标题:</label> <div class="col-sm-3"> <input type="text" name="title" class="col-sm-12" maxlength="500"> </div> <label class="col-sm-2 control-label no-padding-right">住宿地点:</label> <div class="col-sm-3"> <input type="text" name="restPosition" class="col-sm-12" maxlength="500"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">沿途风景:</label> <div class="col-sm-3"> <input type="text" name="roadScenic" class="col-sm-12" maxlength="500"> </div> <label class="col-sm-2 control-label no-padding-right">含餐情况:</label> <div class="col-sm-3"> <input type="text" name="repastDetail" class="col-sm-12" maxlength="500"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>行程详情:</label> <div class="clearfix"></div> <script id="detailEditor-add-travelLine" type="text/plain" style="width: 100%"></script> </div> </div> </div> </div> <button class="btn btn-block btn-primary btn-submit-line-day"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ');
});